import {
  Briefcase,
  Building2,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  MessagesSquare,
  Shield,
  Smartphone,
  Wallet,
} from 'lucide-react';

const icons = {
  Cloud,
  Building2,
  Code2,
  Shield,
  Database,
  MessagesSquare,
  Wallet,
  Smartphone,
  Cpu,
  CircuitBoard,
  Layers,
  Briefcase,
};

export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const Icon = icons[name] || Cloud;
  return <Icon className={className} aria-hidden="true" />;
}
