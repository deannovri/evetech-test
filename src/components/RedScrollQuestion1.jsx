import React from "react";
import Submit from "../assets/images/comic/btnSubmit.png";
import StartOver from "../assets/images/comic/btnStartOver.png";
import Next from "../assets/images/comic/btnNext.png";
import {
    useRedScrollQuestion1InitialState,
    useHandleChangeRedScrollQuestion1,
    useHandleSubmitRedScrollQuestion1,
    useQuestion1ResultState,
    useHandleOpenPurpleScrollBoyGirl,
} from "../contexts/ComicPageContext.jsx";

function RedScrollQuestion1() {
    const Question1 = useRedScrollQuestion1InitialState();
    const HandleChangeAnswer1 = useHandleChangeRedScrollQuestion1();
    const HandleSubmitAnswer1 = useHandleSubmitRedScrollQuestion1();
    const Question1Result = useQuestion1ResultState();
    const OpenPurpleScrollBoyGirl = useHandleOpenPurpleScrollBoyGirl();

    function StartOverReload() {
        window.location.reload(false);
    }

    return (
        <>
            {Question1 ? (
                <div className="scroll-container">
                    <div className="sc-title">
                        Answer this question correctly to unveil the frame.
                    </div>
                    <div className="sc-title-2">
                        Fill in the blank with either the past perfect or the
                        past perfect continous form of the world.
                    </div>
                    <div className="sc-question">
                        Type react
                        <input
                            type="text"
                            onChange={HandleChangeAnswer1}
                            placeholder="react"
                        />
                    </div>
                    <div className="sc-button">
                        {Question1Result === true ? (
                            <img
                                className="btn-submit"
                                onClick={() => {
                                    OpenPurpleScrollBoyGirl();
                                }}
                                src={Next}
                                alt="button-next"
                            />
                        ) : Question1Result === false ? (
                            <img
                                className="btn-submit"
                                onClick={StartOverReload}
                                src={StartOver}
                                alt="button-submit"
                            />
                        ) : (
                            <img
                                className="btn-submit"
                                onClick={() => {
                                    HandleSubmitAnswer1();
                                }}
                                src={Submit}
                                alt="button-submit"
                            />
                        )}
                        {Question1Result === true ? (
                            <div className="result1">Your answer is right</div>
                        ) : Question1Result === false ? (
                            <div className="result1">Your answer is wrong</div>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default RedScrollQuestion1;
