import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import contactRoutes from './routes/contact.js';
import careersRoutes from './routes/careers.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

app.set('trust proxy', 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  }),
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || origin === frontendOrigin) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

const formLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000),
  max: Number(process.env.RATE_LIMIT_MAX || 20),
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions from this IP. Please try again later.',
  },
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'velcontech-api' });
});

app.use('/api/contact', formLimiter, contactRoutes);
app.use('/api/careers', formLimiter, careersRoutes);

app.use((err, _req, res, _next) => {
  if (err?.message === 'Not allowed by CORS') {
    return res.status(403).json({ success: false, message: 'Origin not allowed.' });
  }
  console.error(err);
  return res.status(500).json({ success: false, message: 'Unexpected server error.' });
});

const server = app.listen(port, () => {
  console.log(`VelconTech API listening on http://localhost:${port}`);
  console.log(`CORS allowing frontend origin: ${frontendOrigin}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(
      `Port ${port} is already in use. Stop the other process using that port, or set PORT to a free port in backend/.env.`,
    );
  } else {
    console.error('Server failed to start:', error);
  }
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});
