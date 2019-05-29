import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';

const useTitle = (initVal: string) => {
  const [title, setTitle] = React.useState(initVal);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  React.useEffect(updateTitle, [title]);
  return setTitle;
};

const useClick = (onClick: () => void) => {
  const element = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      (element.current as HTMLElement).addEventListener('click', onClick);
    }
    // 이때 반환한 함수는 componentWillUnmount때 실행됨
    return () => {
      if (element.current) {
        (element.current as HTMLElement).removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

function App(props: { value: string }) {
  const sayHello = () => console.log('hello');
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>HI</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App value="수정중..." />, rootElement);
