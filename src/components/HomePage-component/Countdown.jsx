import "./countdown.scss"
import React , {useEffect , useState , useRef } from 'react'

function Countdown() {
    const [timerH , setTimerH] = useState("00")
    const [timerM , setTimerM] = useState("00")
    const [timerS , setTimerS] = useState("00")

    let interval = useRef()
    const startTimer = ()=>{
        const countdownDate = new Date("March 21, 2023 23:30:00").getTime()
        interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownDate - now
        const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)))
        const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ))
        const seconds = Math.floor((distance % (1000 * 60 )) / 1000 )
        if (distance < 0) {
            clearInterval(interval.current)
        }else{
            setTimerH(hours)
            setTimerM(minutes)
            setTimerS(seconds)

        }

        }, 1000);

    }
    useEffect(()=>{
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    return ( 
        <>
          <div className="count-down">
            <div className="count-down__khung">
                <div className="count-down__hours">{timerH}</div>
                <div className="count-down__text">Hrs</div>
            </div>
            <div className="count-down__khung">
                <div className="count-down__hours">{timerM}</div>
                <div className="count-down__text">Min</div>
            </div> 
            <div className="count-down__khung">
                <div className="count-down__hours">{timerS}</div>
                <div className="count-down__text">Sec</div>
            </div>
            
          </div>
        </>
     );
}

export default Countdown;