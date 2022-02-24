import React, { useState } from 'react'
import Scroll from '../components/Scroll.jsx'
import ScrollPurple from '../components/ScrollPurple.jsx'
import ScrollPurple2 from '../components/ScrollPurple2.jsx'
import ComicPage from '../components/ComicPage.jsx'
import ScrollText from '../components/ScrollText.jsx'
import Scroll2 from '../components/Scroll2.jsx'

function Comic() {

	const [start, setStart] = useState(false)
	const [purple, setPurple] = useState(false)
	const [panel1b, setPanel1B] = useState(false)
	const [panel1g, setPanel1G] = useState(false)
	const [panel2, setPanel2] = useState(false)
	const [question2, setQuestion2] = useState(false)
	const [panel2b, setPanel2B] = useState(false)
	const [panel2g, setPanel2G] = useState(false)
	const [panel2b1, setPanel2B1] = useState(false)
	const [panel2g1, setPanel2G1] = useState(false)
	
	const handleClickStart = () => {
		setStart(true)
	}

	const handleClickStart2 = () => {
		setQuestion2(true)
		setPanel2(false)
	}

	const handleClickStartClose = () => {
		setStart(false)
	}

	const handleClickQuestion2Close = () => {
		setQuestion2(false)
	}

	const handleClickPurpleClose = () => {
		setPurple(false)
		setPanel2(true)
	}

	const handleSubmit1 = (ans1) => {
		ans1 === "h" ? setPurple(true) : setPurple(false)
	}

	const handleSubmit2 = (ans2) => {
		ans2 === "h" ? setQuestion2(true) : setQuestion2(false)
	}

	const firstPanelB = () => {
		setPanel1B(true)
	}

	const firstPanelG = () => {
		setPanel1G(true)
	}

	const secondPanelBSB = () => {
		setPanel2B(true)
	}

	const secondPanelBH = () => {
		setPanel2B1(true)
	}

	const secondPanelGSB = () => {
		setPanel2G(true)
	}

	const secondPanelGH = () => {
		setPanel2G1(true)
	}

	return (
		<div className="comic-container">
			<ComicPage start={handleClickStart} purple={purple} 
			panel1b={panel1b} panel1g={panel1g} panel2={panel2} 
			q2={handleClickStart2} panel21={question2} panel2b={panel2b} panel2g={panel2g}
			panel2b1={panel2b1} panel2g1={panel2g1}
			 />
			}
			}
			<div className="lanscape-warning">
				<h1>Please rotate your device</h1>
			</div>
			{ start ? <Scroll submit={handleSubmit1} startClose={handleClickStartClose} /> : null}
			{ purple ? <ScrollPurple panel1b={firstPanelB} panel1g={firstPanelG} purpleClose={handleClickPurpleClose} /> : null}
			{ panel2 ? <ScrollText/> : null}
			{ question2 ? <Scroll2 submit2={handleSubmit2} q2close={handleClickQuestion2Close}/> : null}
			{ question2 ? <ScrollPurple2 panel2g={secondPanelGSB} panel2b1={secondPanelBH} panel2b={secondPanelBSB} panel2g1={secondPanelGH}/> : null }
		</div>
	)
}

export default Comic