import fs from 'node:fs';
import path from 'node:path';
import multer from 'multer';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.resolve(__dirname, '../uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const maxMb = Number(process.env.UPLOAD_MAX_MB || 5);
const maxBytes = maxMb * 1024 * 1024;

const allowedMime = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const allowedExt = new Set(['.pdf', '.doc', '.docx']);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, `${Date.now()}-${safe}`);
  },
});

function fileFilter(_req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowedMime.has(file.mimetype) || !allowedExt.has(ext)) {
    return cb(new Error('Resume must be a PDF or DOCX file.'));
  }
  return cb(null, true);
}

export const resumeUpload = multer({
  storage,
  limits: { fileSize: maxBytes, files: 1 },
  fileFilter,
});

export function cleanupFile(filePath) {
  if (!filePath) return;
  fs.promises.unlink(filePath).catch(() => {});
}

export { maxMb, uploadDir };
