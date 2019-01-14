import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Alert extends Component {
	constructor(props) {
		super(props);
		this.state = {show: show};
		this.closeAlert = this.closeAlert.bind(this);
	}

	closeAlert(){
		this.setState({show: false});
	}
	render() {
		if(this.state.show == true){
		return (
				<div className="alert alert-primary alert-dismissible" role="alert">
				Sua mensagem foi enviada com <strong>sucesso</strong>. Obrigado!!
				<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span onClick={()=>this.closeAlert()} aria-hidden="false">&times;</span>
				</button>
				</div>
		);
		}
		else{
			return(<div/>);
		}
	}
}

export default Alert;