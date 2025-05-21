import React, { useState } from "react";
import "../../styles/index.css"


//<i class="fa-solid fa-person"></i>
//<i class="fa-solid fa-person-walking"></i>
//<i class="fa-solid fa-car"></i>

//create your first component
const TrafficLight = () => {

	const [textButton, setTextButton] = useState("Pulsa")
	const [greenColor, setGreenColor] = useState(true)
	const [redColor, setRedColor] = useState(false)
	const [orangeColor, setOrangeColor] = useState(false)
	const [changeIcon, setChangeIcon] = useState(false)

	const handleRedLight = () => {
		if (!redColor) {
			setRedColor(true)
			setOrangeColor(false)
			setGreenColor(false)
			setChangeIcon(true)
			setTextButton("Espera")
		}
	}

	const handleOrangeLight = () => {
		if (!orangeColor) {
			setOrangeColor(true)
			setRedColor(false)
			setGreenColor(false)
			setChangeIcon(false)
			setTextButton("Espera")
		}
	}

	const handleGreenLight = () => {
		if (!greenColor) {
			setGreenColor(true)
			setOrangeColor(false)
			setRedColor(false)
			setChangeIcon(false)
			setTextButton("Pulsa")
		}
	}

	const handlePress = () => {
		if (textButton === "Pulsa") {
			setTextButton("Espera")
			setGreenColor(false)
			setRedColor(false)
			setOrangeColor(true)
			setTimeout(() => {
				setOrangeColor(false)
				setChangeIcon(true)
				setRedColor(true)
			}, 2000)
			setTimeout(() => {
				setRedColor(false)
				setGreenColor(true)
				setChangeIcon(false)
				setTextButton("Pulsa")
			}, 5000)
		}
	}

	return (
		<div>
			<div className="d-flex justify-content-center">
				<div className="text-center semaforo bg-dark border">
					<div onClick={handleRedLight} className={`rounded-circle bg-danger mx-auto mt-5 color ${redColor ? ' luz-roja' : ''}`}></div>
					<div onClick={handleOrangeLight} className={`rounded-circle bg-warning mx-auto mt-4 color ${orangeColor ? ' luz-naranja' : ''}`}></div>
					<div onClick={handleGreenLight} className={`rounded-circle bg-success mx-auto mt-4 color ${greenColor ? ' luz-verde' : ''}`}></div>
				</div>
			</div>
			<div className="bg-dark mx-auto border post-one"></div>
			<div className="d-flex justify-content-center bg-dark rounded mx-auto p-3 gap-4 border icons">
				<span><i className={`fa-solid fa-person fa-2xl text-danger ${changeIcon? ' d-none' : ''}`}></i></span>
				<span><i className={`fa-solid fa-person-walking fa-2xl text-success ${changeIcon? '' : ' d-none'}`}></i></span>
			</div>
			<div className="bg-dark mx-auto border post-two"></div>
			<div className="d-flex justify-content-center bg-dark rounded mx-auto p-2 gap-4 border pulsador">
				<button onClick={handlePress} className="btn btn-outline-primary bg-dark">{textButton}</button>
			</div>
			<div className="bg-dark mx-auto post-three mb-auto border"></div>
		</div>
	);
};

export default TrafficLight;