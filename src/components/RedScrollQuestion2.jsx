import React from "react";
import Submit from "../assets/images/comic/btnSubmit.png";
import StartOver from "../assets/images/comic/btnStartOver.png";
import Next from "../assets/images/comic/btnNext.png";
import {
    useRedScrollQuestion2InitialState,
    useHandleChangeRedScrollQuestion2,
    useHandleSubmitRedScrollQuestion2,
    useQuestion2ResultState,
    useHandleOpenPurpleScrollSmokeBombHook,
} from "../contexts/ComicPageContext.jsx";

function RedScrollQuestion2() {
    const Question2 = useRedScrollQuestion2InitialState();
    const HandleChangeAnswer2 = useHandleChangeRedScrollQuestion2();
    const HandleSubmitAnswer2 = useHandleSubmitRedScrollQuestion2();
    const Question2Result = useQuestion2ResultState();
    const OpenPurpleScrollSmokeBombHook =
        useHandleOpenPurpleScrollSmokeBombHook();

    function StartOverReload() {
        window.location.reload(false);
    }

    return (
        <>
            {Question2 ? (
                <div className="scroll2-container">
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
                            onChange={HandleChangeAnswer2}
                            placeholder="react"
                        />
                    </div>
                    <div className="sc-button">
                        {Question2Result === true ? (
                            <img
                                className="btn-submit"
                                onClick={() => {
                                    OpenPurpleScrollSmokeBombHook();
                                }}
                                src={Next}
                                alt="button-next"
                            />
                        ) : Question2Result === false ? (
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
                                    HandleSubmitAnswer2();
                                }}
                                src={Submit}
                                alt="button-submit"
                            />
                        )}
                        {Question2Result === true ? (
                            <div className="result1">Your answer is right</div>
                        ) : Question2Result === false ? (
                            <div className="result1">Your answer is wrong</div>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default RedScrollQuestion2;
