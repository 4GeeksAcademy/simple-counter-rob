import React from "react";


//include images into your bundle
import asomado from "../../img/tio.png";
import { Counter } from './Counter'



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div><h1 className="text-center  mt-3">Time wasted doing nothing</h1></div>
			<div><Counter /></div>
			<div><img className="pt-5" float-start src={asomado} alt="Tío" /></div>
					
		</div>
	);
};

export default Home;
