import React, { useEffect, useState } from 'react';

export function Home() {

    const[data, setData] = useState([]);
    console.log("Data antes do useEffect", data);

    useEffect(function() {
        fetch('https://digimon-api.herokuapp.com/api/digimon')
        .then(function(response){
          return response.json();
        })
          .then(function(response) {
            console.log("Resultado da Requisição:", response);
            setData(response);
          })
          .catch(function(error){
            console.error(error);
          });
      }, []);
      console.log("Data depois do useEffect", data);

    return (
        <pre>{JSON.stringify(data)}</pre>
    );
};
