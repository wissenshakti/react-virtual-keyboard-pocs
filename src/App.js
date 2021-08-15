import { VirtualKeyboardDefault, VirtualKeyboardCustom, VirtualKeyboardDefaultCustomStyles } from './Choices/ReactVirtualKeyboard';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className="App-label">Default keyboard</div>
        <VirtualKeyboardDefault />
        <div className="App-label">Default keyboard with custom styles</div>
        <VirtualKeyboardDefaultCustomStyles />
        <div className="App-label">Number keyboard</div>
        <VirtualKeyboardDefault type={"num"} />
        <div className="App-label">Custom keyboard</div>
        <VirtualKeyboardCustom />
        <a href="https://mottie.github.io/Keyboard/">Reference</a>
      </header>
    </div>
  );
}

export default App;
