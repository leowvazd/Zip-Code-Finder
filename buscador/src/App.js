import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    async function handleSearch() {
        // alert("Click!!! " + input)
        if (input === '') {
            alert("Please, enter a valid zip code!");
            return;
        }

        try {
            const response = await api.get(`${input}/json`);
            console.log(response.data)
            setCep(response.data)
            setInput("");
        }

        catch {
            alert("Ops, error to search! Please verified your zip code!")
            setInput("")
        }
    }

    return (
        <div className="container">
            <h1 className="title">Buscador
                de CEP</h1>

            <div className="containerInput">
                <input
                    type="text"
                    placeholder="Input your zip code ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button className="buttonSearch" onClick={handleSearch}>
                    <FiSearch size={25} color="#FFF"/>
                </button>
            </div>

            {Object.keys(cep).length > 0 && (

                <main className="main">
                    <h2>{cep.cep}</h2>
                    <span>{cep.logradouro}</span>
                    <span>Complemento: {cep.complemento}</span>
                    <span>{cep.bairro}</span>
                    <span>{cep.localidade} - {cep.uf}</span>
                </main>

            )}

        </div>
  );
}

export default App;