import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Name from "./components/SecondExample/Name";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Name/>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);