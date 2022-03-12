import React from "react";
import ComicPage from "../components/ComicPage.jsx";
import RedScrollQuestion1 from "../components/RedScrollQuestion1.jsx";
import ComicPageContext from "../contexts/ComicPageContext.jsx";
import PurpleScrollBoyGirl from "../components/PurpleScrollBoyGirl.jsx";
import RedScrollQuestion2 from "../components/RedScrollQuestion2.jsx";
import PurpleScrollSmokeBombHook from "../components/PurpleScrollSmokeBombHook.jsx";
import RedScrollQuestion3 from "../components/RedScrollQuestion3.jsx";

function Comic() {
	return (
		<ComicPageContext>
			<div className="comic-container">
				<ComicPage />
				<RedScrollQuestion1 />
				<PurpleScrollBoyGirl />
				<RedScrollQuestion2 />
				<PurpleScrollSmokeBombHook />
				<RedScrollQuestion3 />
			</div>
		</ComicPageContext>
	);
}

export default Comic;
