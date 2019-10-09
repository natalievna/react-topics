import React, { useState, useEffect } from 'react';

const ItemDetails = ({match}) => {

    useEffect(() => {
        getData();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const getData = async () => {
       const response = await fetch(`https://api.github.com/users/${match.params.id}`);
       const item = await response.json();
       console.log(item);
       setItem(item);
    }

    return (
        <div>
           <h1>{item.name}</h1>
           <img src={item.avatar_url} alt=""/>
        </div>
    );
}

export default ItemDetails;