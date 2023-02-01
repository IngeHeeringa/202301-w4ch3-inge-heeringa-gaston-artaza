import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];

  return (
    <ol className="keyboard">
      {keyValues.map((keyValue) => (
        <li key={keyValue}>
          <Key keyValue={keyValue} />
        </li>
      ))}
    </ol>
  );
};

export default Keyboard;
