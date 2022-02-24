import React , { useState } from 'react'
import Submit from '../assets/images/comic/btnSubmit.png'
import Create from '../assets/images/comic/btnCreate.png'
import Boy from '../assets/images/comic/character_boy.jpg'
import Girl from '../assets/images/comic/character_girl.jpg'

function SrollPurple({ panel1b, panel1g, purpleClose }) {

	const [shinobi, setShinobi] = useState(false)
	const [kunoichi, setKunoichi] = useState(false)

	const startShinobi = (id) => {
		setShinobi(true)
		panel1b()
	}

	const startKunoichi = (id) => {
		setKunoichi(true)
		panel1g()
	}	

	return (
		<>
			<div className="scroll-container-purple">
			<div className="sc-title">Set your story</div>
			<div className="sc-title-2">Who is the main character in your story</div>
			<div className="character-container">
				<img id="boy" value={"boy"} className={shinobi ? "active" : null} onClick={() => { startShinobi("boy"); purpleClose();}}  src={Boy} alt="boy" />
				Boy
			</div>
			<div className="character-container">
				<img className={kunoichi ? "active" : null} onClick={() => { startKunoichi("girl"); purpleClose(); }} src={Girl} alt="girl" />
				Girl
			</div>
				<img className="btn-create" src={Create} alt="createbuttoon" />
			</div>
		</>
	)
}

export default SrollPurple