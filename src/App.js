import './App.css';
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="title">pomodoro clock</p>
        <Clock />
      </header>
    </div>
  );
}

export default App;
