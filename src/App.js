import './App.css';
import Bloks from './components/bloks/Bloks';
import Header from './components/header/Header.jsx';
import Introduction from './components/introduction/Introduction';
import Moto from './components/moto/Moto.jsx';
import Technology from './components/technology/Technology';

function App() {
	return (
		<div className="App">

			<Header />

			<Introduction />

			<Moto />

			<Bloks />

			<Technology />

		</div>
	);
}

export default App;
