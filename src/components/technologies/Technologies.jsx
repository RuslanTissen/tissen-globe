import React, { useContext } from 'react'
import "./Technologies.scss"
import { SiNestjs, SiRedux, SiTypescript, SiPhp } from "react-icons/si"
import { DiRuby, DiNodejs } from "react-icons/di"
import { FaReact, FaPython } from "react-icons/fa"
import martin from "../../images/martin.jpg"
import net from "../../images/net.jpg"
import js from "../../images/js.jpg"
import go from "../../images/golang.jpg"
import trans from '../Translate'
import { Context } from '../Context'

function Technologies() {
	const {lang, setLang} =useContext(Context)
	return (
		<div className="technologies">
			<div className="technologies__container">
				<h2>{trans[lang].byTechnologie}</h2>
				<div className="technologies__boxes"><SiRedux />Redux</div>
				<div className="technologies__boxes martin"><img src={martin} /></div>
				<div className="technologies__boxes"><SiTypescript />TypeScript</div>
				<div className="technologies__boxes"><img src={net} /></div>
				<div className="technologies__boxes"><SiNestjs /> nest</div>
				<div className="technologies__boxes js"><img src={js} /></div>
				<div className="technologies__boxes php"><SiPhp /></div>
				<div className="technologies__boxes"><DiRuby />Ruby</div>
				<div className="technologies__boxes"><FaReact />React</div>
				<div className="technologies__boxes golang"><img src={go} /></div>
				<div className="technologies__boxes"><FaPython />python</div>
				<div className="technologies__boxes nodejs"><DiNodejs /></div>
			</div>
		</div>
	)
}

export default Technologies