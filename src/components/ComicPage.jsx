import React from "react";
import Pen from "../assets/images/comic/icon_pen.png";
import Lock from "../assets/images/comic/icon_lock.png";
import Panel1BoyImg from "../assets/images/comic/ninjaBoy/01panelBoyNinja.jpg";
import Panel1GirlImg from "../assets/images/comic/ninjaGirl/01panelGirlNinja.jpg";
import Panel2Img from "../assets/images/comic/ninjaGirl/02panel.jpg";
import Panel3BoySmokeBombImg from "../assets/images/comic/ninjaBoy/03panelBoyNinjaSmokeBomb.jpg";
import Panel3BoyHookImg from "../assets/images/comic/ninjaBoy/03panelBoyNinjaHook.jpg";
import Panel3GirlSmokeBombImg from "../assets/images/comic/ninjaGirl/03panelGirlNinjaSmokeBomb.jpg";
import Panel3GirlHookImg from "../assets/images/comic/ninjaGirl/03panelGirlNinjaHook.jpg";
import Panel4BoyImg from "../assets/images/comic/ninjaBoy/04panelBoyNinja.jpg";
import Panel4GirlImg from "../assets/images/comic/ninjaGirl/04panelGirlNinja.jpg";
import {
	useHandleOpenRedScrollQuestion1,
	usePanel1Boy,
	usePanel1Girl,
	useHandleOpenRedScrollQuestion2,
	usePanel3SmokeBomb,
	usePanel3Hook,
	usePanel3NumberLockState,
	usePanel3CreateState,
	usePanel4Boy,
	usePanel4Girl,
	usePanel5CreateState,
	usePanel5NumberLockState,
	useHandleOpenRedScrollQuestion3,
} from "../contexts/ComicPageContext.jsx";

function ComicPage() {
	const OpenQuestion1 = useHandleOpenRedScrollQuestion1();
	const Panel1Boy = usePanel1Boy();
	const Panel1Girl = usePanel1Girl();
	const OpenQuestion2 = useHandleOpenRedScrollQuestion2();
	const Panel3SmokeBomb = usePanel3SmokeBomb();
	const Panel3Hook = usePanel3Hook();
	const Panel3NumberLockState = usePanel3NumberLockState();
	const Panel3CreateState = usePanel3CreateState();
	const Panel4Boy = usePanel4Boy();
	const Panel4Girl = usePanel4Girl();
	const Panel5CreateState = usePanel5CreateState();
	const Panel5NumberLockState = usePanel5NumberLockState();
	const OpenQuestion3 = useHandleOpenRedScrollQuestion3();

	return (
		<div className="comic-page">
			<div className="cp-title">NINJA ADVENTURE</div>
			<div className="cp-panel-container">
				<div className="panel-1">
					{Panel1Boy ? (
						<img
							className="panel-img"
							src={Panel1BoyImg}
							alt="panel1boy"
						/>
					) : Panel1Girl ? (
						<img
							className="panel-img"
							src={Panel1GirlImg}
							alt="panel1girl"
						/>
					) : (
						<>
							<div className="panel-number-1">1</div>
							<div className="pen-button">
								<img
									src={Pen}
									onClick={OpenQuestion1}
									alt="pen"
								/>
							</div>
							<div className="panel-text">
								Hit the Create Button
							</div>
						</>
					)}
				</div>
				<div className="panel-2">
					{Panel1Boy | Panel1Girl ? (
						<img
							className="panel-img"
							src={Panel2Img}
							alt="panel2"
						/>
					) : (
						<>
							<div className="panel-number">2</div>
							<img className="lock-icon" src={Lock} alt="pen" />
						</>
					)}
				</div>
				<div className="panel-3">
					{Panel3NumberLockState ? (
						<>
							<div className="panel-number">3</div>
							<img className="lock-icon" src={Lock} alt="pen" />
						</>
					) : null}
					{Panel3CreateState ? (
						<>
							<div className="panel-number-3">3</div>
							<div className="pen-button-3">
								<img
									src={Pen}
									onClick={OpenQuestion2}
									alt="pen"
								/>
							</div>
							<div className="panel-text-3">
								Hit the Create Button
							</div>
						</>
					) : null}
					{Panel1Boy === true && Panel3SmokeBomb === true ? (
						<img
							src={Panel3BoySmokeBombImg}
							alt="panel3boysmokebomb"
						/>
					) : Panel1Boy === true && Panel3Hook === true ? (
						<img src={Panel3BoyHookImg} alt="panel3boyhook" />
					) : Panel1Girl === true && Panel3SmokeBomb === true ? (
						<img src={Panel3GirlSmokeBombImg} alt="panel3boyhook" />
					) : Panel1Girl === true && Panel3Hook === true ? (
						<img src={Panel3GirlHookImg} alt="panel3boyhook" />
					) : null}
				</div>
				<div className="panel-4">
					{Panel1Boy && Panel4Boy ? (
						<img src={Panel4BoyImg} alt="panel3boyhook" />
					) : Panel1Girl && Panel4Girl ? (
						<img src={Panel4GirlImg} alt="panel3boyhook" />
					) : (
						<>
							<div className="panel-number">4</div>
							<img className="lock-icon" src={Lock} alt="pen" />
						</>
					)}
				</div>
				<div className="panel-5">
					<div className="panel-5-inner">
						{Panel5NumberLockState ? (
							<>
								<div className="panel-number">5</div>
								<img
									className="lock-icon"
									src={Lock}
									alt="pen"
								/>
							</>
						) : null}
						{Panel5CreateState ? (
							<>
								<div className="panel-number-5">5</div>
								<div className="pen-button-5">
									<img
										src={Pen}
										onClick={OpenQuestion3}
										alt="pen"
									/>
								</div>
								<div className="panel-text-5">
									Hit the Create Button
								</div>
							</>
						) : null}
					</div>
				</div>
				<div className="panel-6">
					<div className="panel-6-inner">
						<div className="panel-number-6">6</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
				</div>
				<div className="panel-7">
					<div className="panel-7-inner">
						<div className="panel-number">7</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
				</div>
				<div className="panel-8">
					<div className="panel-8-inner">
						<div className="panel-number-8">8</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ComicPage;
