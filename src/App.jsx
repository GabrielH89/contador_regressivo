import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';
import Newyear from './assets/new_year.jpg';
import useCountdown from './components/hooks/useCountdown';

function App() {
  const [day, hour, minute, second] = useCountdown("jan 1, 2024 00:00:00")
  return (
    <div className='App' style={{backgroundImage: `url(${Newyear})`}}>
      <div className='container'>
        <Title></Title>
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
