import { useState, useEffect } from 'react';

function UseCurrencyInfo(currency){
    useState[data,SetData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
         res.json()
        })
        .then((res)=>{
            res.setData(res[currency])
        })
        console.log(data);
    },[currency])
    console.log(data);
return data

}

export default UseCurrencyInfo;