interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', accent = 'border-deep-graphite' }) => (
  <div className={`bg-absolute-zero rounded-card border ${accent} p-4 ${className}`}>{children}</div>
);

export default Card;
