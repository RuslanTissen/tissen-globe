import React, { useState } from 'react'
import "./Technology.scss"
import cSharp from "../../images/c-sharp.svg"
import { FiChevronDown } from "react-icons/fi"

function Technology() {
	const [active, setActive] = useState(true)

	function showInfo() {
		setActive(!active)
	}

	return (
		<div className='technology'>

			<p>Our Team</p>

			<div className="technology__nav">
				<h4>Technology</h4>
			</div>

			<div className="tech__list">
				<div className="tech__list--block">
					<div className="tech-first"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
					<div className="tech-second">
					<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
					</div>
				</div>

				<div className="tech__list--block">
					<div className="tech-first"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
					<div className="tech-second">
					<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
					</div>
				</div>

				<div className="tech__list--block">
					<div className="tech-first"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
					<div className="tech-second">
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
						<div>bla bla</div>
					</div>
				</div>
			</div>



		</div>
	)
}

export default Technology



{/* <div className="technology__container-list">
<div className="tech-box" onClick={() => showInfo()}>
	{active ? (
		<div className='tech__title' >
			<div className="tech-image tech__info"><img src={cSharp} alt="C-Sharp" /><span>.Net/C#</span><div><FiChevronDown /></div></div>
		</div>)
		: (
			<div className='tech__title' >
				<div className="tech-section">
					<div className="tech-image tech__info"><img src={cSharp} alt="C-Sharp" /><span></span><div><FiChevronDown /></div></div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
					<div className="tech__info">BLA BLA</div>
				</div>
			</div>
		)
	}
</div>
</div> */}