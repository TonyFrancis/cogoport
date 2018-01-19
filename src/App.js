import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Todo from './Todo';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

let store = createStore(reducer)
const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);


export default App;
