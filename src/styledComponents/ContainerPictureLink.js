import styled from "styled-components";

const ContainerPictureLink = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 300px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	align-items: center;

	a {
		width: fit-content;
		text-transform: uppercase;
		font-family: "Tomorrow", sans-serif;
		padding: 0.7rem 5rem;
		font-weight: 500;
		text-decoration: none;
		background-color: #0a62d0;
		color: white;
		transition: all 0.3s ease-in-out;
	}
	a:hover {
		background-color: #4a87d0;
	}

	@media (min-width: 600px) {
		height: 350px;
	}
	@media (min-width: 700px) {
		height: 400px;
	}
	@media (min-width: 800px) {
		height: 450px;
		padding: 2.5rem;
	}
	@media (min-width: 900px) {
		height: 500px;
		padding: 5rem;
	}
	@media (min-width: 1000px) {
		height: 550px;
	}
	@media (min-width: 1100px) {
		height: 600px;
		padding: 4rem 1rem 5rem;
	}
`

export { ContainerPictureLink }