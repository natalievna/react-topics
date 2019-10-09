import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {

    useEffect(() => {
        getData();
    }, []);

    const [items, setItems] = useState([]);

    const getData = async () => {
        const response = await fetch(`https://api.github.com/users`);
        const items = await response.json();
        console.log(items);
        setItems(items);
       
    }

    return (
        <div>
            {items.map( (item) => 
            <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>
            {item.login}
            </Link>
            </h1>
            )}
        </div>
    );
}

export default Shop;