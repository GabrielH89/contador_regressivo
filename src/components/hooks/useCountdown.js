import { useState, useEffect } from "react"

const useCountdown = (date) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0) 
    const [second, setSecond] = useState(0)

    useEffect(() => {
    const countDown = () => {
        if (!date) {
            // If date is not set or invalid, set all countdown values to 0
            setDay('00');
            setHour('00');
            setMinute('00');
            setSecond('00');
            return;
          }
        const countDate = new Date(date).getTime();
        const todayDate = new Date().getTime();
        const interval = countDate - todayDate;

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        if(interval <= 0){
            console.log("anhajajna")    
        }else{
            const daysNumber = Math.floor(interval/days)
            const hoursNumber = Math.floor((interval%days) / hours)
            const minutesNumber = Math.floor((interval%hours) / minutes)
            const secondsNumber = Math.floor((interval%minutes / seconds))
            
            setDay(addZero(daysNumber));
            setHour(addZero(hoursNumber));
            setMinute(addZero(minutesNumber));
            setSecond(addZero(secondsNumber));
        }
    }
    //setInterval(countDown, 1000)
    //return [day, hour, minute, second];
    const intervalId = setInterval(countDown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [date]);

  return [day, hour, minute, second];
  
  //Função que adicionar o zero, caso o valor de um dos elementos seja menor que 10
  function addZero(value) {
    if(value < 10){
        return '0' + value ;
    }else{
        return value;
    }
    
  }

}


export default useCountdown;









