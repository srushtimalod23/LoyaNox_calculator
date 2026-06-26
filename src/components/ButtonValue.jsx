import ButtonCal from "./ButtonCal";

function ButtonValue({ handleClick }) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+",
    "⌫",
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
  {buttons.map((button) => (
    <ButtonCal
      key={button}
      value={button}
      onClick={handleClick}
    />
  ))}
</div>
  );
}

export default ButtonValue;