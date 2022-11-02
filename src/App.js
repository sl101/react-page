import './App.css';
import { BgImage } from './BgImage';
import NewYork from './media/NewYork.jpg';
import NewYorkSmall from './media/NewYork_small.jpg';

function App() {
	return (
		<div className="App">
			<h1>Progressive Image</h1>
			<h2>Emulate 3G in devtools</h2>
			<BgImage
				src={NewYork}
				placeholderSrc={NewYorkSmall}
				width="700"
				height="465"
			/>
		</div>
	);
}

export default App;
