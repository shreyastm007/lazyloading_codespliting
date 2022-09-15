import React, { useEffect, useState } from 'react'

const ComponentTwo = () => {
    console.log("ComponentTwo is executed");
    const [fetchdata, setFetchData] = useState([]);

    useEffect(() => {
        fetchFunction();
    }, []);

    const fetchFunction = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFetchData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>{fetchdata.map((val,index) => {
            return  <p key={index}>{val.name}</p>
        })}</div>
    );
};

export default ComponentTwo;