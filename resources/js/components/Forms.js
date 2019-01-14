import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Forms extends Component {
	render() {
        return (
            <div className="col-12 col-md-3 offset-md-7 offset-none bg-dark pt-5 pb-4 my-2">
                <p className="font-weight-bold text-white mb-5">Entre em Contato</p>
                <form className="m-0" action="" method="POST">
                    <input className="border border-black rounded w-100 my-2 px-1" type="text" name="name" placeholder="Nome Completo" />
                    <input className="border border-black rounded w-100 my-2 px-1" type="email" name="email" placeholder="E-mail" />
                    <textarea className="border border-black rounded w-100 my-2 h-100 px-1" type="text" name="msg" placeholder="Digite uma mensagem" />
                    <input className="rounded-pill bg-danger border-top border-right border-white font-weight-bold text-white w-100 py-2 mt-5 mb-3" type="submit" value="Enviar Proposta" style={{backgroundColor: '#07454F'}} />
                </form>
            </div>
        );
	}
}

export default Forms;