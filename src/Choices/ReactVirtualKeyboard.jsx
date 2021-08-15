import Keyboard from 'react-virtual-keyboard';
import { useState } from 'react';
import './ReactVirtualKeyboard.css';

export const VirtualKeyboardCustom = () => {

  const [state,setState] = useState({input:''});
  const onInputChanged = (data) => {
    setState({ input: data });
  }
   
  const  onInputSubmitted = (data) => {
    console.log("Input submitted:", data);
  }
  
  return (
        <Keyboard
          value={state.input}
          name='keyboard'
          options={{
            type: "input",
            layout: "custom",
            customLayout: {
                'normal' : ['a b c d e', 'f g h i j', '{shift} {meta1} {a} {c}'],
                'shift'  : ['A B C D E', 'F G H I J', '{shift} {meta1} {a} {c}'],
                'meta1'  : ['1 2 3 4 5', '6 7 8 9 0', '{shift} {meta1} {a} {c}']
              },

            alwaysOpen: false,
            usePreview: false,
            useWheel: true,
            stickyShift: false,
            appendLocally: true,
            color: "dark",
            css : {
                // input & preview styles
                input          : 'ui-widget-content ui-corner-all',
                // keyboard container - this wraps the preview area (if `usePreview` is true)
                // and all keys
                container      : 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix virtual-keyboard-default-container',
                // keyboard container extra class (same as container, but separate)
                popup          : '',
                // default keyboard button state, these are applied to all keys, the remaining
                // css options are toggled as needed
                buttonDefault  : 'ui-state-default ui-corner-all virtual-keyboard-default-button',
                // hovered button
                buttonHover    : 'ui-state-hover',
                // Action keys (e.g. Accept, Cancel, Tab, etc); replaces the "actionClass" option
                buttonAction   : 'ui-state-active',
                // Active keys (e.g. shift down, meta keyset active, combo keys active)
                buttonActive   : 'ui-state-active',
                // used when disabling the decimal button {dec} when a decimal exists in the
                // input area
                buttonDisabled : 'ui-state-disabled',
                // empty button class name {empty}
                buttonEmpty    : 'ui-keyboard-empty'
              },
            updateOnChange: true,
            initialFocus: true,
            display: {
              "accept": "Submit"
            }
          }}
          onChange={onInputChanged}
          onAccepted={onInputSubmitted}
        />
  );
};
export const VirtualKeyboardDefault = ({type}) => {

  const [state,setState] = useState({input:''});
  const onInputChanged = (data) => {
    setState({ input: data });
  }
   
  const  onInputSubmitted = (data) => {
    console.log("Input submitted:", data);
  }
  
  return (
        <Keyboard
          value={state.input}
          name='keyboard'
          options={{
            type: "input",
            layout: type || "qwerty",
            alwaysOpen: false,
            usePreview: false,
            useWheel: true,
            stickyShift: false,
            appendLocally: true,
            color: "dark",
            css : {
                // input & preview styles
                input          : 'ui-widget-content ui-corner-all',
                // keyboard container - this wraps the preview area (if `usePreview` is true)
                // and all keys
                container      : 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
                // keyboard container extra class (same as container, but separate)
                popup          : '',
                // default keyboard button state, these are applied to all keys, the remaining
                // css options are toggled as needed
                buttonDefault  : 'ui-state-default ui-corner-all',
                // hovered button
                buttonHover    : 'ui-state-hover',
                // Action keys (e.g. Accept, Cancel, Tab, etc); replaces the "actionClass" option
                buttonAction   : 'ui-state-active',
                // Active keys (e.g. shift down, meta keyset active, combo keys active)
                buttonActive   : 'ui-state-active',
                // used when disabling the decimal button {dec} when a decimal exists in the
                // input area
                buttonDisabled : 'ui-state-disabled',
                // empty button class name {empty}
                buttonEmpty    : 'ui-keyboard-empty'
              },
            updateOnChange: true,
            initialFocus: true,
            display: {
              "accept": "Submit"
            }
          }}
          onChange={onInputChanged}
          onAccepted={onInputSubmitted}
        />
  );
};

export const VirtualKeyboardDefaultCustomStyles = () => {

  const [state,setState] = useState({input:''});
  const onInputChanged = (data) => {
    setState({ input: data });
  }
   
  const  onInputSubmitted = (data) => {
    console.log("Input submitted:", data);
  }
  
  return (
        <Keyboard
          value={state.input}
          name='keyboard'
          options={{
            type: "input",
            layout: "qwerty",
            alwaysOpen: false,
            usePreview: false,
            useWheel: true,
            stickyShift: false,
            appendLocally: true,
            css : {
                // input & preview styles
                input          : 'ui-widget-content ui-corner-all',
                // keyboard container - this wraps the preview area (if `usePreview` is true)
                // and all keys
                container      : 'virtual-custom-keyboard-keyset',
                // keyboard container extra class (same as container, but separate)
                popup          : '',
                // default keyboard button state, these are applied to all keys, the remaining
                // css options are toggled as needed
                buttonDefault  : 'virtual-ui-keyboard-button virtual-ui-keyboard-96 virtual-ui-state-default virtual-ui-corner-all',
                // hovered button
                buttonHover    : 'ui-state-hover',
                // Action keys (e.g. Accept, Cancel, Tab, etc); replaces the "actionClass" option
                buttonAction   : 'ui-state-active',
                // Active keys (e.g. shift down, meta keyset active, combo keys active)
                buttonActive   : 'ui-state-active',
                // used when disabling the decimal button {dec} when a decimal exists in the
                // input area
                buttonDisabled : 'ui-state-disabled',
                // empty button class name {empty}
                buttonEmpty    : 'ui-keyboard-empty'
              },
            updateOnChange: true,
            initialFocus: false,
            display: {
              "accept": "Submit"
            }
          }}
          onChange={onInputChanged}
          onAccepted={onInputSubmitted}
        />
  );
};

export default VirtualKeyboardDefault;
