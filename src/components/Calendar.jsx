import React from 'react';
import './Calendar.css';
import Counter from './Counter';

const Calendar = ({ selectedDate, setSelectedDate }) => {

  //A função a seguir pega a data que o usuário colocar no calendário e a compara com a atual, se for menor ou igual à data atual, retornará o alert "mensagem inválida"  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const now = new Date();
    const currentDay = now.getDay();
    const selectedDateObj = new Date(selectedValue)
    if (selectedDateObj <= currentDay){
        alert("Data inválida, insira uma data maior que a atual.");
    }else{
        setSelectedDate(selectedValue);
    }
  };

  return (
        <div className='calendar'>
        <h1>Escolha uma data</h1>
      <div className="clock-input">
        <input
          type="date"
          name="time-to"
          className="time-to"
          id="time-to"
          value={selectedDate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Calendar;
