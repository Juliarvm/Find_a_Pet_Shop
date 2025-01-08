import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const PetshopSelector = () => {
  const [data, setData] = useState('');
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);
  const [bestPetshop, setBestPetshop] = useState('');
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);

  const handleDataChange = (date) => {
    setData(date.target.value);
  };

  const handleSmallDogsChange = (e) => {
    setSmallDogs(Number(e.target.value));
  };

  const handleLargeDogsChange = (e) => {
    setLargeDogs(Number(e.target.value));
  };

  const openCalendar = () => {
    const input = document.getElementById('calendar-input');
    input.type = 'date';
    input.focus();
  };

  const isWeekend = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 5 || dayOfWeek === 6;
  };

  const handleButtonClick = () => {
    setIsButtonAnimating(true);

    setTimeout(() => {
      setIsButtonAnimating(false);
    }, 1000);
    // Verifica se a data está preenchida
    if (!data) {
      setBestPetshop('Por favor, preencha a data antes de calcular');
      return; // Retorna para encerrar a função sem continuar
    }

    const calculateBestPetshop = () => {
      const [day, month, year] = data.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      const isWeekendDay = isWeekend(data);

      const meuCaninoFeliz = calculatePriceMeuCaninoFeliz(isWeekendDay);
      const vaiRex = calculatePriceVaiRex(isWeekendDay);
      const chowChawgas = calculatePriceChowChawgas();

      const petshops = [
        { name: 'Meu Canino Feliz', price: meuCaninoFeliz, distance: 2 },
        { name: 'Vai Rex', price: vaiRex, distance: 1.7 },
        { name: 'ChowChawgas', price: chowChawgas, distance: 0.8 },
      ];

      petshops.sort((a, b) => {
        if (a.price === b.price) {
          return a.distance - b.distance;
        }
        return a.price - b.price;
      });

      const best = petshops[0];
      setBestPetshop(`O pet shop ideal é o ${best.name} - Preço total: R$${best.price}`);
    };

    const calculatePriceMeuCaninoFeliz = (isWeekendDay) => {
      if (isWeekendDay) {
        return (24 * smallDogs) + (48 * largeDogs);
      } else {
        return (20 * smallDogs) + (40 * largeDogs);
      }
    };

    const calculatePriceVaiRex = (isWeekendDay) => {
      if (isWeekendDay) {
        return (20 * smallDogs) + (55 * largeDogs);
      } else {
        return (15 * smallDogs) + (50 * largeDogs);
      }
    };


    const calculatePriceChowChawgas = () => {
      return (30 * smallDogs) + (45 * largeDogs);
    };

    calculateBestPetshop();
  };

  return (
    <div className="PetshopSelector">
      <div className="data-container">
        <h3>Data:</h3>
        <input
          id="calendar-input"
          type="date"
          value={data}
          onFocus={openCalendar}
          onChange={handleDataChange}
        />
      </div>
      <div className="dogs-container">
        <h3>Quantidade de cães pequenos:</h3>
        <input type="number" value={smallDogs} onChange={handleSmallDogsChange} />
      </div>
      <div className="dogs-container">
        <h3>Quantidade de cães grandes:</h3>
        <input type="number" value={largeDogs} onChange={handleLargeDogsChange} />
      </div>
      <h3>Calcular:</h3>
      <button
        onClick={handleButtonClick}
        className={isButtonAnimating ? 'animate' : ''}
        disabled={isButtonAnimating}
      >
        <img src="/imagens/pata.png" alt="Pata" style={{ width: 100, height: 100 }} />
      </button>
      {/* Exibe o resultado dos cálculos */}
      <div className="result-container">
        <h3>{bestPetshop}</h3>
      </div>
    </div>
  );
};

export default PetshopSelector;

