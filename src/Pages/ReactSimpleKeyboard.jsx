import React, { Component,useState, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './ReactSimpleKeyboard.css';

function ReactSimpleKeyboard() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

    return (
      <div class="App-header padding-5 color-black">
        <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
        className="simple-keyboard-input"
      />
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        display= { {
          '{bksp}': 'back',
          '{enter}': '< enter',
          '@': 'at',
          
          
        
        }}
      />
      </div>
    );

  // return (
  //   <ReactSimplekeyboard />
  //   // <ReactTangent />
  //   // <ReactVirtualKeyboard />
  // );
}

export default ReactSimpleKeyboard;
