/**
 * index.js is >>>first file executed when run project 
 * npm start process 
 * these process it will transform this react code to regular(html,css,js)
 *  in index.js 
 * we import reactDom from reactDom thridpart library
 * 
 */

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
