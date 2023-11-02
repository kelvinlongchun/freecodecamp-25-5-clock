import Clock from "./components/Clock";
import ClockContextWrapper from "./contexts/ClockContext";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ClockContextWrapper>
        <Clock />
      </ClockContextWrapper>
    </div>
  );
}

export default App;
