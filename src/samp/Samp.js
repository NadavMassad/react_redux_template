import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  phoneList,
  getPhonesAsync,
  addPhonesAsync,
  delPhonesAsync,
  updPhonesAsync,
  updateFlag
} from './sampSlice';

export function Samp() {
  const dispatch = useDispatch();
  const phones = useSelector(phoneList)
  const refresh = useSelector(updateFlag)
  const [brand, setbrand] = useState("")
  const [color, setcolor] = useState("")
  const [price, setprice] = useState(0)

  useEffect(() => {
    dispatch(getPhonesAsync())
    console.log("first")
  }, [phones.length, refresh])
   
  return (
    <div>
      <button onClick={() => dispatch(addPhonesAsync({brand, color, price }))}>POST</button>
      <hr></hr>

      Brand: <input onChange={(e) => setbrand(e.target.value)} />
      Color: <input onChange={(e) => setcolor(e.target.value)} />
      Price: <input onChange={(e) => setprice(+e.target.value)} />
      {phones.map(phone => <div key={phone.id}>
        Brand: {phone.brand},
        Color: {phone.color},
        Price: {phone.price}
        <button onClick={() => dispatch(delPhonesAsync(phone.id))}>DELETE</button>
        <button onClick={() => dispatch(updPhonesAsync({ id: phone.id, brand: brand, color: color, price: price }))}>UPDATE</button>
      </div>)}

    </div>
  );
}
