import React , { useState } from 'react'
import Submit from '../assets/images/comic/btnSubmit.png'
import Create from '../assets/images/comic/btnCreate.png'
import SmokeBomb from '../assets/images/comic/pngSmokeBomb.jpg'
import Hook from '../assets/images/comic/pngHook.jpg'

function SrollPurple({ panel2b, panel2g, panel2b1, panel2g1 }) {

	const [bsbomb, setBSbomb] = useState(false)
	const [bhook, setBHook] = useState(false)
	const [gsbomb, setGSbomb] = useState(false)
	const [ghook, setGHook] = useState(false)
	
	const startBSmokeBomb = (id) => {
		setBSbomb(true)
		panel2b()
	}

	const startBHook = (id) => {
		setBHook(true)
		panel2b1()
	}

	const startGSmokeBomb = (id) => {
		setGSbomb(true)
		panel2g()
	}

	const startGHook = (id) => {
		setGHook(true)
		panel2g1()
	}	

	return (
		<>
			<div className="scroll-container-purple2">
			<div className="sc-title">Develop your story</div>
			<div className="sc-title-2">What is the weapon in the box?</div>
			<div className="character-container">
				<img className={bsbomb ? "active" : null} onClick={() => { startBSmokeBomb(); startGSmokeBomb();}}  src={SmokeBomb} alt="boy" />
				Smoke Bomb
			</div>
			<div className="character-container">
				<img className={ghook ? "active" : null} onClick={() => { startGHook(); startBHook(); }} src={Hook} alt="girl" />
				Hook
			</div>
				<img className="btn-create" src={Create} alt="createbuttoon" />
			</div>
		</>
	)
}

export default SrollPurple