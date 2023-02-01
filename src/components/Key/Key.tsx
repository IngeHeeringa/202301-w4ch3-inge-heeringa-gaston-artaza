interface KeyProps {
  keyValue: string | number;
}

const Key = ({ keyValue }: KeyProps): JSX.Element => {
  return (
    <button className={`key${keyValue === "delete" ? " big" : ""}`}>
      {keyValue}
    </button>
  );
};

export default Key;
