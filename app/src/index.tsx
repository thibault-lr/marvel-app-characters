import * as React from 'react';
import * as ReactDOM from 'react-dom';


import  App from 'components/pages/App';

// import css
import 'scss/global';

// import boostrap grid
import 'bootstrap-4-grid/scss/grid.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// enable HMR
declare let module: { hot : any };

if (module.hot) {
  module.hot.accept('./components/pages/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
