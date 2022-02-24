import React from 'react'
import Pen from '../assets/images/comic/icon_pen.png'
import Lock from '../assets/images/comic/icon_lock.png'
import Panel1B from '../assets/images/comic/ninjaBoy/01panelBoyNinja.jpg'
import Panel1G from '../assets/images/comic/ninjaGirl/01panelGirlNinja.jpg'
import Panel2 from '../assets/images/comic/ninjaGirl/02panel.jpg'
import Panel2B from '../assets/images/comic/ninjaBoy/01panelBoyNinja.jpg'
import Panel2G from '../assets/images/comic/ninjaGirl/01panelGirlNinja.jpg'
import Panel3BSB from '../assets/images/comic/ninjaBoy/03panelBoyNinjaSmokeBomb.jpg'
import Panel3BH from '../assets/images/comic/ninjaBoy/03panelBoyNinjaHook.jpg'
import Panel3GSB from '../assets/images/comic/ninjaGirl/03panelGirlNinjaSmokeBomb.jpg'
import Panel3GH from '../assets/images/comic/ninjaGirl/03panelGirlNinjaHook.jpg'

function ComicPage({ start, purple, panel1b, panel1g, panel2, q2, panel21, panel2b, panel2g, panel2b1, panel2g1 }) {

	return (
		<div className="comic-page">
				<div className="cp-title">NINJA ADVENTURE</div>
				<div className="cp-panel-container">
					<div className="panel-1">
					{
						panel1b
						? <img src={Panel1B} alt="panel1b, panel1g" style={{ height:"100%", width:"100%" }} />
						: panel1g 
						? <img src={Panel1G} alt="panel1g" style={{ height:"100%", width:"100%" }} />
						:
					<>
						<div className="panel-number-1">1</div>
						<div className="pen-button">
							<img onClick={() => {start()}} src={Pen} alt="pen" />
						</div>
						<div className="panel-text">Hit the Create Button</div>
					</>
					}
					</div>
					<div className="panel-2">
					{
						panel2 || panel21 ? <img src={Panel2} alt="panel1b, panel1g" style={{ height:"100%", width:"100%" }} />
						: 
						<>
						<div className="panel-number">2</div>
						<div><img className="lock-icon" src={Lock} alt="pen" /></div>
						</>
					}
					</div>
					<div className="panel-3">
						<div className={panel2 ? "panel-number-3" : panel2b ? "panel-number-3-hide" : panel2b1 ? "panel-number-3-hide" :  "panel-number"}>3</div>
						{
							panel2 ? 
							<>  
							<div className="pen-button">
							<img onClick={() => {q2()}} src={Pen} alt="pen" />
							</div>
							<div className="panel-text">Hit the Create Button</div>
							</> 
							 	: panel2g   ? 
							 	<img src={Panel3GSB} alt="panel1g" style={{ height:"100%", width:"100%" }} />
							 	: panel2g1 ? 
							 	<img src={Panel3GH} alt="panel1g" style={{ height:"100%", width:"100%" }} />
							 	: panel2b ? 
							  	<img src={Panel3BSB} alt="panel1g" style={{ height:"100%", width:"100%" }} />
							 	: panel2b1 ? 
							 	<img src={Panel3BH} alt="panel1g" style={{ height:"100%", width:"100%" }} />
							 	:
								<img className="lock-icon" src={Lock} alt="pen" />
						}
					</div>
					<div className="panel-4">
						<div className="panel-number">4</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
					<div className="panel-5">
						<div className="panel-number">5</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
					<div className="panel-6">
						<div className="panel-number-6">6</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
					<div className="panel-7">
						<div className="panel-number">7</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
					<div className="panel-8">
						<div className="panel-number-8">8</div>
						<img className="lock-icon" src={Lock} alt="pen" />
					</div>
				</div>
			</div>
	)
}

export default ComicPage