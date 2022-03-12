import React from "react";
import Create from "../assets/images/comic/btnCreate.png";
import Boy from "../assets/images/comic/character_boy.jpg";
import Girl from "../assets/images/comic/character_girl.jpg";
import {
	usePurpleScrollBoyGirlInitialState,
	useSelectBoy,
	useSelectGirl,
	useSelectBoyState,
	useSelectGirlState,
	useHandleCreateBoyGirl,
} from "../contexts/ComicPageContext.jsx";

function PurpleScrollBoyGirl() {
	const PurpleScrollBoyGirl = usePurpleScrollBoyGirlInitialState();
	const SelectBoy = useSelectBoy();
	const SelectGirl = useSelectGirl();
	const SelectBoyState = useSelectBoyState();
	const SelectGirlState = useSelectGirlState();
	const CreateBoyGirl = useHandleCreateBoyGirl();

	return (
		<>
			{PurpleScrollBoyGirl ? (
				<div className="scroll-container-purple">
					<div className="sc-title">Set your story</div>
					<div className="sc-title-2">
						Who is the main character in your story
					</div>
					<div className="character-container">
						<img
							className={SelectBoyState ? "selected" : null}
							onClick={() => {
								SelectBoy();
							}}
							src={Boy}
							alt="boy"
						/>
						Boy
					</div>
					<div className="character-container">
						<img
							className={SelectGirlState ? "selected" : null}
							onClick={() => {
								SelectGirl();
							}}
							src={Girl}
							alt="girl"
						/>
						Girl
					</div>
					<img
						className="btn-create"
						onClick={() => {
							CreateBoyGirl();
						}}
						src={Create}
						alt="createbuttoon"
					/>
				</div>
			) : null}
		</>
	);
}

export default PurpleScrollBoyGirl;
