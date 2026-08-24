type MobileMenuButtonProps = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export function MobileMenuButton({
  open,
  onClick,
  className = "",
}: MobileMenuButtonProps) {
  return (
    <button
      className={`md:hidden text-primary p-2 ${className}`}
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
    </button>
  );
}