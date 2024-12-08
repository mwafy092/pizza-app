import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
];

const Header = () => {
    return (
        <header className='header'>
            <h1> Fast React Pizza</h1>
        </header>
    );
};
const Menu = () => {
    const [data, setData] = useState([]);
    const getPizzaData = () => {
        setData(pizzaData);
    };
    useEffect(() => {
        getPizzaData();
    }, []);
    return (
        <section className='menu'>
            <h2>Our Menu</h2>
            <div className='pizzas'>
                {data.map((pizza) => (
                    <Pizza
                        key={pizza.name}
                        pizzaData={pizza}
                    />
                ))}
            </div>
        </section>
    );
};

const Pizza = ({ pizzaData }) => {
    return (
        <section className='pizza'>
            <img
                src={pizzaData?.photoName}
                alt={pizzaData?.name}
            />
            <div>
                <h3>{pizzaData?.name}</h3>
                <p>{pizzaData?.ingredients}</p>
                <span>{pizzaData?.price}</span>
            </div>
        </section>
    );
};
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    return (
        <footer className='footer'>
            {new Date().toLocaleTimeString()}, We're currently open
        </footer>
    );
};

const App = () => {
    return (
        <main className='container'>
            <Header />
            <Menu />
            <Footer />
        </main>
    );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
