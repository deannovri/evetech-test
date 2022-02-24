import React, { useState } from 'react'
import Submit from '../assets/images/comic/btnSubmit.png'
import StartOver from '../assets/images/comic/btnStartOver.png'
import Next from '../assets/images/comic/btnNext.png'

function Scroll2({ submit2, q2close }) {

    const [ans2, setAns2] = useState("")
    const [result, setResult] = useState("")
    const [stover, setStover] = useState(true)
    const [next, setNext] = useState(false)


	const handleChange = (e) => {
        setAns2(e.target.value)
    }

    const handleSubmit = (e) => {
        submit2(ans2);
    }

    const result1 = () => {
        ans2 === "h" ? setResult(<div className="result1">Your answer is right</div>) : setResult(<div className="result1">Your answer is wrong the answer is "had been drinking"</div>)
    }

    const startOver = () => {
        ans2 === "h" ? setStover(null) : setStover(<img className="btn-startover" onClick={() => {window.location.reload(true)}} src={StartOver} alt="refresh"/>)
    }

    const nextButton = () => {
        ans2 === "h" ? setNext(<img className="btn-next" onClick={() => {handleSubmit(); q2close();}} src={Next} alt="refresh"/>) : setNext(null)
    }

	return (
		<>
        <div className="scroll2-container">
			<div className="sc-title">Answer this question correctly to unveil the frame.</div>
			<div className="sc-title-2">Fill in the blank with either the past perfect or the past perfect continous form of the world.</div>
			<div className="sc-question">My uncle <input onChange={handleChange} type="text" placeholder="   cycle" />
			{" "}to work for years until he bought a car.
			</div>
			<div className="sc-button">
				<img className="btn-submit" onClick={() => {result1(); startOver(); nextButton();}}  src={Submit} alt="button-submit" />
				{ next }
				{ stover }
			</div>
			{result} 
		</div> 
		</>
	)
}

export default Scroll2