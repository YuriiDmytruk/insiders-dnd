import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='w-[100vw] h-[100vh] bg-light-grey'>
        <App />
    </div>

);
