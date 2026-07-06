type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-white text-black hover:opacity-90",
    secondary: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}