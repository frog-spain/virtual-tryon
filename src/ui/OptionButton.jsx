const OptionButton = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`option-button ${isActive && "active"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OptionButton;
