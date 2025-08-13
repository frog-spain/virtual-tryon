const OptionButton = ({ label, onClick }) => {
  return (
    <button class="option-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default OptionButton;
