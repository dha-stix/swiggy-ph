import React, {useState, useEffect, useRef} from 'react';
import './Popup.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Popup = () => {
  const [timer, setTimer] = useState(59)
  const countRef = useRef(null)

  const handleTimer = () => {
      countRef.current = setInterval(()=> {
          setTimer( intial => intial - 1)
      }, 1000)        
    }

  useEffect(()=> {
    function stopTimer() {
      if(timer === 0) {
        clearInterval(countRef.current)
        setTimer(0)
      } 
    }
    stopTimer()
  }, [timer])

  return (
    <div className="popup">
        <div className="popup__header">
          <h2 className="header__title">Swiggly pH</h2>
          <div className="header__icons">
                <div className="tab" onClick={handleTimer}>
                  <AccessAlarmIcon fontSize="medium"/>
                  <p>Start Alarm</p>
                </div>

                <div className="tab">
                  <EventIcon fontSize="medium"/>
                  <p>Agenda</p>
                </div>

                <div className="tab">
                  <DescriptionIcon fontSize="medium"/>
                  <p>Notes</p>
                </div>

                <div className="tab">
                  <VisibilityOffIcon fontSize="medium"/>
                  <p>Hide</p>
                </div>


          </div>
        </div>
        <div className="popup__timer">
          <h1 className="timer">00:{timer < 10 ? `0${timer}`: timer}</h1>
          <h3 className="timer__info">{timer === 0 ? "Time up!" :"mins left"}</h3>
          
        </div>
    </div>
  );
};

export default Popup;
