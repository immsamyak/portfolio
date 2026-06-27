import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'ghost' | 'text';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'ghost', to, href, onClick, type = 'button', className = '', disabled }) => {
  const styles = variant === 'ghost'
    ? 'text-frosted-canvas border border-frosted-canvas rounded-pill px-6 py-[15px] hover:bg-frosted-canvas hover:text-absolute-zero hover:shadow-[0_0_20px_rgba(255,252,225,0.3)]'
    : 'text-faded-steel hover:text-frosted-canvas px-0 py-4 hover:translate-x-1';

  const cls = `inline-flex items-center justify-center text-body-sm transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 ${styles} ${className}`;

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls} disabled={disabled}>{children}</button>;
};

export default Button;
