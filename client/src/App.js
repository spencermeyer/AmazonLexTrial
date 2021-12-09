import logo from './logo.svg';
import './App.css';
import ActionButton from './ActionButton'
import Robot from './Robot'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ActionButton/>
        <Robot/>
      </header>
    </div>
  );
}

export default App;
