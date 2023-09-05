
import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState('');
  const [time, setTime] = useState('');
  const [isMale, setIsMale] = useState(true);

  const calculator = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const result = isMale ? gramsLeft / (weight * 0.7) : gramsLeft / (weight * 0.6);

    return result.toFixed(2);
  };

  return (
    <form>
      <div id="weight">
        <label>Paino</label> <br />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div id="bottles">
        <label>Pulloja</label> <br />
        <input
          type="number"
          value={bottles}
          onChange={(e) => setBottles(e.target.value)}
        />
      </div>

      <div id="time">
        <label>Aika</label> <br />
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div id="sex">
        <label>NAINEN</label>
        <input
          type="radio"
          value="female"
          checked={!isMale}
          onChange={() => setIsMale(false)}
        />
        <label>MIES</label>
        <input
          type="radio"
          value="male"
          checked={isMale}
          onChange={() => setIsMale(true)}
        />
      </div>

      <button onClick={(e) => {
        e.preventDefault();
        const result = calculator();
        document.querySelector('output').innerText = `${result} %`;
      }}>
        Laske
      </button> <br />

      <output></output>
    </form>
  );
}

export default App;
