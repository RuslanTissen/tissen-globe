import styled from "styled-components";

const ContainerMainPicture = styled.div`
	max-width: 1500px;
	margin: 74px auto 3rem;
	padding: 1rem;
	height: 300px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: grid;
	place-items: center;
	color: white;
	h2 {
		font-family: "Gruppo", sans-serif;
		font-weight: 500;
		transition: all 0.3s ease-in-out;
		text-align: center;
	}
	h2:hover{
		scale: 1.05;
	}
	@media (min-width: 600px) {
		height: 350px;
	}
	@media (min-width: 700px) {
		height: 400px;
	}
	@media (min-width: 800px) {
		height: 450px;
	}
	@media (min-width: 900px) {
		height: 500px;
	}
	@media (min-width: 1000px) {
		height: 550px;
	}
	@media (min-width: 1100px) {
		height: 600px;
	}
`

export { ContainerMainPicture }