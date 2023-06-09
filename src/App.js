import './App.css';
import "./assets/css/main.css";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Header from './Components/Header';
import "./assets/css/main.css";
import Gallery from './Components/Gallery';
import About from './Components/About';
import Work from './Components/Work';
import References from './Components/References';

function App() {
	return (
		<div className="root">

			<Header />
			<Home />
			<Work />
			<About />
			<References/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;