import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [payment, setPayment] = useState('');
  const [ship, setShip] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#34BB78');

  function handleFood(e) {
    setFood(e.target.value)
  }

  function handleQuantity(e) {
    setQuantity(e.target.value)

    if (e.target.value >= 15) {
      alert("Maximum quantity is 15 .")
    }
  }
  function handlePayment(e) {
    setPayment(e.target.value)
  }
  function handleShip(e) {
    setShip(e.target.value)
  }
  function handleBackgroundColor(newColor) {
    setBackgroundColor(newColor);
  }
  
  return (
    <>
      <div className='container'>
        <div style={{ backgroundColor }} className='food-container'>
          <h1>SELECT YOUR FOOD </h1>
          <div>
            <input placeholder='Write down your food name' value={food} onChange={handleFood}></input>
            <p>Food name : {food}</p>

            <input value={quantity} onChange={handleQuantity} type='number' min={0} max={15}></input>
            <p>Quantity : {quantity}</p>
          </div>

          <select value={payment} onChange={handlePayment}>
            <option> Visa </option>
            <option> Cash </option>
            <option> Blik </option>
          </select>
          <p> Payment : {payment}</p>
          <div>
            <label className='radios'>
              <input type="radio" value="Delivery" checked={ship === "Delivery"} onChange={handleShip} />Delivery
            </label>
            <label className='radios'>
              <input type="radio" value="Pick Up" checked={ship === "Pick Up"} onChange={handleShip} />Pick UP
            </label>
            <p>Method : {ship}</p>
          </div>
        </div>

        <div className='colorPicker'>
          <ColorPicker backgroundColor={backgroundColor} onBackgroundColorChange={handleBackgroundColor} />
        </div>
      </div>
    </>
  )
}

export default App;
