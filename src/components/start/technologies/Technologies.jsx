import React, { useContext } from 'react'
import "./Technologies.scss"
import { GrMysql } from "react-icons/gr"
import { TbBrandAngular, TbBrandVue, TbBrandReactNative, TbBrandJavascript, TbBrandFigma } from "react-icons/tb"
import { FaPython, FaAws, FaSwift } from "react-icons/fa"
import { SiMui, SiTableau, SiMicrosoftazure } from "react-icons/si"
import trans from '../../Translate'
import { Context } from '../../Context'
import { NavLink } from 'react-router-dom'


function Technologies() {
	const { lang, setLang } = useContext(Context)
	return (
		<div className="technologies">
			<div className="technologies__container">
				<div className="technologies__container__title_box">
					<h2 className='title__picture__include'>{trans[lang].byTechnologie}</h2>
				</div>
				<NavLink className="technologies__boxes"><TbBrandAngular /></NavLink>
				<div className="technologies__boxes"><FaSwift /></div>
				<div className="technologies__boxes"><TbBrandVue /></div>
				<div className="technologies__boxes"><TbBrandReactNative /></div>
				<div className="technologies__boxes"><TbBrandJavascript /></div>
				<div className="technologies__boxes"><FaAws /></div>
				<div className="technologies__boxes"><TbBrandFigma /></div>
				<div className="technologies__boxes"><SiMui /></div>
				<div className="technologies__boxes"><SiMicrosoftazure /></div>
				<div className="technologies__boxes"><SiTableau /></div>
				<div className="technologies__boxes"><FaPython /></div>
				<div className="technologies__boxes"><GrMysql /></div>
			</div>
		</div>
	)
}

export default Technologies