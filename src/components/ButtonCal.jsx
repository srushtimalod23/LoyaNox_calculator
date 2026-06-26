import { Button } from "./ui/button";

function ButtonCal({ value, onClick }) {
  return (
    <Button
      onClick={() => onClick(value)}
      className="w-full h-16 text-xl rounded-xl"
    >
      {value}
    </Button>
  );
}

export default ButtonCal;