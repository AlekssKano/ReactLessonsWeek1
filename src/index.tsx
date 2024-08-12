import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <div>Hello</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let a = {
    name: "Dimich",
    age: 10,
    address: {
        city: "Minsl",
        country: "Belarus"
    }
};

let users = [
    {
        name: "Dimich",
        age: 10,
        address: {
            city: "Minsl",
            country: "Belarus"
        }
    },
    {
        name: "Tora",
        age: 15,
        address: {
            city: "Adelaide",
            country: "Australia"
        }
    }

]

console.log(users[1].address.country);
