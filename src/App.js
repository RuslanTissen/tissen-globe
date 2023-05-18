import './App.css';
import Bloks from './components/bloks/Bloks';
import Header from './components/header/Header.jsx';
import Introduction from './components/introduction/Introduction';
import Moto from './components/moto/Moto.jsx';

function App() {
	return (
		<div className="App">

			<Header />

			<Introduction />

			<Moto />

			<Bloks />

		</div>
	);
}

export default App;
