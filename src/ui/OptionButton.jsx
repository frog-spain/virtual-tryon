const OptionButton = ({
  label,
  onClick,
  isActive,
  isRounded,
  icon,
  style,
  className,
  disabled,
}) => {
  const buttonClasses = [
    "option-button",
    isActive && "active",
    isRounded && "rounded",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={style}
      {...(disabled && { disabled: true })}
    >
      {label}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default OptionButton;
