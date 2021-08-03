import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { listaCadastros, assinar, desassinar, cadastrar } from '../../dados/cadastro'
const Container = styled.form`
    display: flex;
    width: 840px;
    margin: 10px auto;
    flex-wrap: wrap;

    h1{
        display: inline-block;
        margin: 20px auto 20px auto;
        width: 100%;
        font-size: 30px;
        text-align: center;
    }

    table{
        width: 80%;
        margin: 10px auto;
        border: 1px solid #000;
        border-collapse: collapse;
        box-shadow: 3px 3px 3px grey;
    }

    tr, td {
        border: 1px solid #000;
        border-collapse: collapse;
        text-align: center;
        height: 25px;
        vertical-align: middle;
    }

    .titulos{
        color: white;
        background-color: grey;
    }
`

const GridFormulario = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #000;
    padding: 10px;
    box-shadow: 1px 2px 3px grey;
    border-radius: 5px;

    label, input {
        width: 45%;
        font-size: 16px;
        margin: 5px auto;
        border-radius: 5px;
    }

    label {
        font-weight: bold;
    }

    button{
        margin: 10px auto 10px 10px;
        font-size: 16px;
        box-shadow: 3px 3px 3px grey;
        border-radius: 5px;
        width: 100px;
    }
`


const Home = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cadastros, setCadastros] = useState([]);

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        const dadosIniciais = listaCadastros();
        setCadastros([...dadosIniciais]);

        const handleAtualizarDados = (dados) => {
            setCadastros([...dados]);
        };

        assinar(handleAtualizarDados);

        return function removerAssinatura() {
            desassinar(handleAtualizarDados);
        };
    }, []);

    const handleCadastrar = (e) => {
        e.preventDefault();
        const cadastro = { nome, email };
        cadastrar(cadastro);
    }

    return (
        <Container onSubmit={handleCadastrar}>
            <h1>Formulário de Inscrição</h1>
            <GridFormulario>
                <label>Nome</label>
                <label>E-mail</label>
                <input type="text" name="nome" value={nome} onChange={handleNome} required/>
                <input type="email" name="email" value={email} onChange={handleEmail} required/>
                <button type="submit" name="enviar">Enviar</button>
            </GridFormulario>

            <table>
                <thead>
                    <tr>
                        <td className="titulos">Nome</td>
                        <td className="titulos">E-mail</td>
                    </tr>
                </thead>
                <tbody>
                    {cadastros.map((c, i) => (
                        <tr key={i}>
                            <td>{c.nome}</td>
                            <td>{c.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default Home;