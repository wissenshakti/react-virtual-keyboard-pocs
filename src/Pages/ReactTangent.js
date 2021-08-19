import Tangent from 'react-tangent';
import { useState } from 'react';
import './ReactTangent.css';
function ReactTangent() {

 const [state,setState] = useState({input:''});
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={state.input} className="tangent-input"/>
        <Tangent keys={[
          {
            label: '1',
            id: '1',
            x: 4
          }, {
            label: '2',
            id: '2',
            x: 8
          },
          {
            label: '3',
            id: '3',
            x:12
          },{
          label: '4',
            id: '4',
            x: 4,
            y:4
          }, {
            label: '5',
            id: '5',
            x: 8,
            y:4,
          },
          {
            label: '6',
            id: '6',
            x:12,
            y:4
          }
          ,{
          label: '7',
            id: '7',
            x: 4,
            y:8
          }, {
            label: '8',
            id: '8',
            x: 8,
            y:8,
          },
          {
            label: '9',
            id: '9',
            x:12,
            y:8
          }, 
          , {
            label: '0',
            id: '0',
            x: 4,
            y:12,
          },
          {
            label: 'Clear',
            id: 'Clear',
            x:8,
            y:12
          },
        ]} />
        <a href="https://thejsn.github.io/react-tangent/">Reference</a>
      </header>
    </div>
    // <ReactVirtualKeyboard />
  );
}

export default ReactTangent;
