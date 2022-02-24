import React, { useState } from 'react'
import Submit from '../assets/images/comic/btnSubmit.png'
import StartOver from '../assets/images/comic/btnStartOver.png'
import Next from '../assets/images/comic/btnNext.png'

function Scoll({ submit, purple, startClose }) {

    const [ans1, setAns1] = useState("")
    const [result, setResult] = useState("")
    const [stover, setStover] = useState(true)
    const [next, setNext] = useState(false)

    const handleChange = (e) => {
        setAns1(e.target.value)
    }

    const handleSubmit = (e) => {
        submit(ans1);
    }

    const result1 = () => {
        ans1 === "h" ? setResult(<div className="result1">Your answer is right</div>) : setResult(<div className="result1">Your answer is wrong the answer is "had been drinking"</div>)
    }

    const startOver = () => {
        ans1 === "h" ? setStover(null) : setStover(<img className="btn-startover" onClick={() => {window.location.reload(true)}} src={StartOver} alt="refresh"/>)
    }

    const nextButton = () => {
        ans1 === "h" ? setNext(<img className="btn-next" onClick={() => {handleSubmit(); startClose();}} src={Next} alt="refresh"/>) : setNext(null)
    }

    return ( 
    	<>
        <div className="scroll-container">
			<div className="sc-title">Answer this question correctly to unveil the frame.</div>
			<div className="sc-title-2">Fill in the blank with either the past perfect or the past perfect continous form of the world.</div>
			<div className="sc-question">He <input onChange={handleChange} type="text" placeholder="   drink" />
			{" "}milk right out of the carton when Mother walked into the kitchen and caught him red - handed.
			</div>
			<div className="sc-button">
				<img className="btn-submit" onClick={() => {result1(); startOver(); nextButton();}} src={Submit} alt="button-submit" />
				{ next }
				{ stover }
			</div>
			{result} 
		</div> 
		</>
    )
}

export default Scoll