import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';

interface Props {
  value: number;
}

function App(props: Props) {
  const [item, setItem] = React.useState(props.value);
  const incItem = () => setItem(item + 1);
  const decItem = () => setItem(item - 1);
  const test = '1';
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>좋당</h2>
      <button onClick={incItem}>증가</button>
      <button onClick={decItem}>감소</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App value={10} />, rootElement);
