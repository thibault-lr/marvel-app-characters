import * as React from 'react';
import * as ReactDOM from 'react-dom';


import App from './App';

// import css
import 'scss/global';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// enable HMR
declare let module: { hot : any };

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
