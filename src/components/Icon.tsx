import {
  Award,
  Compass,
  Leaf,
  Map,
  Mountain,
  Recycle,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  award: Award,
  compass: Compass,
  leaf: Leaf,
  map: Map,
  mountain: Mountain,
  recycle: Recycle,
  shield: Shield,
  trending: TrendingUp,
  users: Users,
};

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const Component = icons[name] ?? Mountain;
  return <Component className={className} aria-hidden="true" />;
}
