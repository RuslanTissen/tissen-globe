import React, { useContext } from 'react'
import "./Technologies.scss"
import { GrMysql } from "react-icons/gr"
import { TbBrandAngular, TbBrandVue, TbBrandReactNative, TbBrandJavascript, TbBrandFigma } from "react-icons/tb"
import { FaPython, FaAws, FaSwift } from "react-icons/fa"
import { SiMui, SiMicrosoftazure, SiCplusplus } from "react-icons/si"
import trans from '../../Translate'
import { Context } from '../../Context'
import { NavLink } from 'react-router-dom'

function Technologies() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="technologies">
			<div className="technologies__container">
				<div className="technologies__container--title-box">
					<h2 className='title__picture--include'>{trans[lang].byTechnologie}</h2>
				</div>
				<NavLink to="Angular" onClick={scrollToTheTop} className="technologies__boxes"><TbBrandAngular /></NavLink>
				<NavLink to="Swift" onClick={scrollToTheTop} className="technologies__boxes"><FaSwift /></NavLink>
				<NavLink to="Vue" onClick={scrollToTheTop} className="technologies__boxes"><TbBrandVue /></NavLink>
				<NavLink to="React_Native" onClick={scrollToTheTop} className="technologies__boxes"><TbBrandReactNative /></NavLink>
				<NavLink to="JS" onClick={scrollToTheTop} className="technologies__boxes"><TbBrandJavascript /></NavLink>
				<NavLink to="AWS" onClick={scrollToTheTop} className="technologies__boxes"><FaAws /></NavLink>
				<NavLink to="Figma" onClick={scrollToTheTop} className="technologies__boxes"><TbBrandFigma /></NavLink>
				<NavLink to="MUI" onClick={scrollToTheTop} className="technologies__boxes"><SiMui /></NavLink>
				<NavLink to="CPlusPlus" onClick={scrollToTheTop} className="technologies__boxes"><SiCplusplus /></NavLink>
				<NavLink to="MySQL" onClick={scrollToTheTop} className="technologies__boxes"><GrMysql /></NavLink>
				<NavLink to="Python" onClick={scrollToTheTop} className="technologies__boxes"><FaPython /></NavLink>
				<NavLink to="Microsoft_Azure" onClick={scrollToTheTop} className="technologies__boxes"><SiMicrosoftazure /></NavLink>
			</div>
		</div>
	)
}

export default Technologies