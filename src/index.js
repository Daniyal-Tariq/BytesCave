import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/fonts/Quicksand-VariableFont:wght.tff'
// import './assets/fonts/Quicksand-Regular.ttf'
// import './assets/fonts/Quicksand-Medium.ttf'
// import './assets/fonts/Quicksand-Semibold.ttf'
// import './assets/fonts/Quicksand-Bold.ttf'




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
