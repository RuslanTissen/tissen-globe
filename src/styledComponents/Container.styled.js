import styled from "styled-components";

const ContainerDiv = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	height: 300px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: grid;
	place-items: center;

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

export { ContainerDiv }