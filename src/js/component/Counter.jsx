import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../../styles/index.css';
import PropTypes from "prop-types";
import asomado from "../../img/tio.png";
import asomado2 from "../../img/tio2.png";

export const Counter = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStartPause = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const handleReset = () => {
        setTimer(0);
        setIsRunning(true);
    };

    const one = Math.floor(timer / 1) % 10;
    const two = Math.floor(timer / 10) % 10;
    const three = Math.floor(timer / 100) % 10;
    const four = Math.floor(timer / 1000) % 10;

    return (
        <div>
        <div className="d-flex m-0 justify-content-center bigCounter py-3">
            <div className="four px-1 clockDigit text-white py-1"><span className="border border-white rounded-3">{four}</span></div>
            <div className="three px-1 clockDigit text-white py-1"><span className="border border-white rounded-3">{three}</span></div>
            <div className="two px-1 clockDigit text-white py-1"><span className="border border-white rounded-3">{two}</span></div>
            <div className="one px-1 clockDigit text-white py-1 radius-3"><span className="border border-white rounded-3">{one}</span></div>
        </div>

            <div id="clock"><i className="fa-sharp fa-regular fa-clock pb-3 text-white bigCounter"></i></div>
                <div className="btn-group d-block m-0 justify-content-center" role="group">
                    {isRunning ? (
                        <button onClick={handleStartPause} className="btn btn-outline-info ">Pause</button>
                    ) : (
                     <button onClick={handleStartPause} className="btn btn-outline-success ">Start</button>
                    )}
                    <button onClick={handleReset} className="btn btn-outline-warning ">Reset</button>
                </div>
                <p className={`text-secondary pt-3 ${isRunning ? 'opacity-0' : ''}`}>You might've stopped it, but you're still wasting time 😒</p>
                <div><img className="pt-5" float-start src={isRunning ? asomado : asomado2} alt="Tío" /></div>

        </div>
    );
};

Counter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    
}

ReactDOM.render(<Counter />, document.querySelector('#app'));
