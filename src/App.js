import logo from './logo.svg';
import './App.css';

// весь код имеет декларативный стиль
//========================================================

/*
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload!!!!!!!!!
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span> {new Date().getFullYear()} </span>
			</header>
		</div>
	);
};

*/

//===========================================================
// тот же код без использования JSX

export const App = () => {
	const div = document.createElement('div');
	div.className = 'App';

	const header = document.createElement('header');
	header.className = 'App-header';

	const img = document.createElement('img');
	img.src = logo;
	img.className = 'App-logo';
	img.alt = 'logo';

	const p = document.createElement('p');
	p.textContent = 'Edit src/App.js and save to reload!!!!!!!!!';

	const a = document.createElement('a');
	a.className = 'App-link';
	a.href = 'https://reactjs.org';
	a.target = '_blank';
	a.rel = 'noopener noreferrer';
	a.textContent = 'Learn React';

	const span = document.createElement('span');
	span.textContent = new Date().getFullYear();

	header.append(img, p, a, span);
	div.append(header);

	return div;
};
