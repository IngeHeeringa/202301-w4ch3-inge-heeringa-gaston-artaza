import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <>
      <Info />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <div className="actions">
          <Display />
          <Actions />
        </div>
      </main>
    </>
  );
};

export default App;
