import React from "react";
import Create from "../assets/images/comic/btnCreate.png";
import SmokeBomb from "../assets/images/comic/pngSmokeBomb.jpg";
import Hook from "../assets/images/comic/pngHook.jpg";
import {
	usePurpleScrollSmokeBombHookInitialState,
	useSelectSmokeBomb,
	useSelectHook,
	useSelectSmokeBombState,
	useSelectHookState,
	useHandleCreateSmokeBombHook,
} from "../contexts/ComicPageContext.jsx";

function PurpleScrollSmokeBombHook() {
	const PurpleScrollSmokeBombHook =
		usePurpleScrollSmokeBombHookInitialState();
	const SelectSmokeBomb = useSelectSmokeBomb();
	const SelectHook = useSelectHook();
	const SelectSmokeBombState = useSelectSmokeBombState();
	const SelectHookState = useSelectHookState();
	const CreateSmokeBombHook = useHandleCreateSmokeBombHook();

	return (
		<>
			{PurpleScrollSmokeBombHook ? (
				<div className="scroll-container-purple2">
					<div className="sc-title">Develop your story</div>
					<div className="sc-title-2">
						What is the weapon in the box?
					</div>
					<div className="smokebombhook-container">
						<img
							className={SelectSmokeBombState ? "selected" : null}
							onClick={() => {
								SelectSmokeBomb();
							}}
							src={SmokeBomb}
							alt="boy"
						/>
						<div className="bombhook-text">Smoke Bomb</div>
					</div>
					<div className="smokebombhook-container">
						<img
							className={SelectHookState ? "selected" : null}
							onClick={() => {
								SelectHook();
							}}
							src={Hook}
							alt="girl"
						/>
						<div className="bombhook-text">Hook</div>
					</div>
					<img
						className="btn-create"
						onClick={() => {
							CreateSmokeBombHook();
						}}
						src={Create}
						alt="createbuttoon"
					/>
				</div>
			) : null}
		</>
	);
}

export default PurpleScrollSmokeBombHook;
