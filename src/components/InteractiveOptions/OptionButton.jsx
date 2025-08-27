const OptionButton = ({ label, onClick, isActive }) => {
  return (
    <button class={`option-button ${isActive && 'active'}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default OptionButton;
