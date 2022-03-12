import React from "react";
import Submit from "../assets/images/comic/btnSubmit.png";
import StartOver from "../assets/images/comic/btnStartOver.png";
import Next from "../assets/images/comic/btnNext.png";
import { useRedScrollQuestion3InitialState } from "../contexts/ComicPageContext.jsx";

function RedScrollQuestion2() {
    const Question3 = useRedScrollQuestion3InitialState();

    function StartOverReload() {
        window.location.reload(false);
    }

    return (
        <>
            {Question3 ? (
                <div className="scroll3-container">
                    <div className="sc-title">This is the end</div>
                    <div className="sc-title-2"></div>
                    <div className="sc-question">
                        <input type="text" placeholder="This is the end" />
                    </div>
                    <div className="sc-button">
                        <img
                            className="btn-submit"
                            src={Submit}
                            alt="button-submit"
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default RedScrollQuestion2;
