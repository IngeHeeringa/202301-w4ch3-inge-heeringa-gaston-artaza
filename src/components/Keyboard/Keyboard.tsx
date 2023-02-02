import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyTexts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  return (
    <ol className="keyboard">
      {keyTexts.map((keyText) => (
        <li key={keyText}>
          <Key keyText={keyText} />
        </li>
      ))}
    </ol>
  );
};

export default Keyboard;
