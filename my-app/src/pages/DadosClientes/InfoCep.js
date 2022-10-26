import React from 'react';

class InfoCep extends React.Component {    
    state = {
        endereco: []
    };

    componentDidMount() {
        let cep = (new URLSearchParams(window.location.search)).get("cep")
        fetch(`https://viacep.com.br/ws/${cep}/json/`)            
        .then(res => res.json())
            .then(res => {
                this.setState({
                    endereco: res
                });
                console.log(res);
                
            });
    }

    render() {
        let content = <p>Carregando...</p>

        if (this.state.endereco.length !== 0) {
            content = (
                <ul>
                    <li key={this.state.endereco.cep}>
                        <p><b>CEP:</b> {this.state.endereco.cep}</p>
                        <p><b>Logradouro:</b> {this.state.endereco.logradouro}</p>
                        <p><b>Complemento:</b> {this.state.endereco.complemento}</p>
                        <p><b>Bairro:</b> {this.state.endereco.bairro}</p>
                    </li>
                </ul>
            )
        }

        return (
            <div>
                <h1>Endereço</h1>

                {content}
            </div>
        );
    }
}

export default InfoCep;