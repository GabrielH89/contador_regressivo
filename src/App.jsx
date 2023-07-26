import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';
import Newyear from './assets/new_year.jpg';
import useCountdown from './components/hooks/useCountdown';
import Calendar from './components/calendar';
import {useState } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [title, setTitle] = useState("");
  const [day, hour, minute, second] = useCountdown(selectedDate)

  return (
    <div className='App' style={{background: 'linear-gradient(to right, #ffd700, #8b0000)'}}>
      <div className='calendar'>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>

      <div className='container'>
      <div>
        <h1><Title/></h1>
        
      </div>
        <div className='countdown-container'>
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
          
        </div>
      </div>   
    </div>
  )
}
  

export default App
