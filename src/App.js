import React from "react";
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
        <div className="App">
            <body>
              <label for="inp1">Input 1</label>
              <input type="number" id="inp1"></input><br/>
              <label for="inp2">Input 2</label>
              <input type="number" id="inp2"></input><br/>
              <button onClick="calc('add')">add</button>
              <button onClick="calc('sub')">sub</button>
              <button onClick="calc('mul')">mul</button>
              <button onClick="calc('div')">div</button>
              <a className="output"></a>
              <script src="./calc"></script>
          </body>
        </div>
    )
  }
}

export default App;
