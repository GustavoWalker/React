import React from 'react';

class ValidaEmail extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('https://www.disify.com/api/email/james@gmail.com')
            //.then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
                console.log(res);
            });
    }

    render() {
        let content = <p>Carregando...</p>

        if (this.state.linguagens.length !== 0) {
            content = (
                <ul>
                    <li key={this.state.linguagens}>
                        <p><b>Válido:</b> {this.state.linguagens.format}</p>
                        <p><b>Domínio:</b> {this.state.linguagens.domain}</p>
                        
                    </li>
                </ul>
            )
        }

        return (
            <div>
                <h1>Lista de Clientes:</h1>

                {content}
            </div>
        );
    }
}

export default ValidaEmail;