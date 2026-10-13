import {
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  CircuitBoard,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Wallet,
  Workflow,
} from 'lucide-react';

const icons = {
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  CircuitBoard,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Wallet,
  Workflow,
};

export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const Icon = icons[name] || Cloud;
  return <Icon className={className} aria-hidden="true" />;
}
