/* eslint-disable react/prop-types */
const Confirm = ({ action, label, onRef }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action();

        console.log("КАКАЯ-ТО ЛОГИКА НА ПОДТВЕРЖДЕНИЕ!!!");
        setTimeout(() => {
          onRef.current.inputElement.selectionEnd =
            onRef.current.inputElement.selectionStart = 0;
          return onRef.current.inputElement.focus();
        }, 500);
      }}
    >
      {label}
    </button>
  );
};

export { Confirm };
