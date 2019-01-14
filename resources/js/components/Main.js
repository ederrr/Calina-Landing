import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import Alert from './Alert';
import DescriptionItem from './DescriptionItem';
import Forms from './Forms';

class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Alert/>
				<div className="row m-0 d-flex">
				<p className="h1 font-weight-bold mx-auto my-1">Buscando um programador qualificado?</p>
				</div>
				<div className="row m-0 p-2" style={{backgroundImage: "url('https://www.penso.com.br/wp-content/uploads/2016/09/whatiscloud01-1024x469.jpg')"}}>
					<Forms />
				</div>
				<div className="row mx-0 mt-4 px-5">
					<DescriptionItem
						icon="fa-database"
						title="Back-end"
						description="Conhecimento em frameworks como CakePHP, Laravel, Express."
					/>
					<DescriptionItem
						icon="fa-desktop"
						title="Front-end"
						description="Experiência com desenvolvimento Android e IOS Nativos."
					/>
					<DescriptionItem
						icon="fa-mobile-alt"
						title="Mobile"
						description="Criação de interfaces leves, elegantes e dinâmicas através de bibliotecas atuais como React e Vue."
					/>
				</div>
			</div>
		);
	}
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
