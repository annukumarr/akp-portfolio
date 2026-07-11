type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  href,
  external = false,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-white text-black hover:opacity-90",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}