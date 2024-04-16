import React, { useState } from "react";

//include images into your bundle

import { Counter } from './Counter';

//create your first component
const Home = () => {
    const [isRunning, setIsRunning] = useState(true);

    return (
        <div className="text-center">
            <div><h1 className="text-center mt-3">Time wasted doing nothing</h1></div>
            <div><Counter isRunning={isRunning} /></div>
        </div>
    );
};

export default Home;
