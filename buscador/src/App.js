import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
    return (
        <div className="container">
            <h1 className="title">Zip Code Finder</h1>

            <div className="containerInput">
                <input
                type="text"
                placeholder="Input Your Zip Code ..."
                />

                <button className="buttonSearch">
                    <FiSearch size={25} color="#FFF"/>
                </button>
            </div>

            <main className="main">
                <h2>ZipCode: 03364030</h2>
                <span>Street Test</span>
                <span>Adds</span>
                <span>Vila Rosa</span>
                <span>Campo Grande - MS</span>
            </main>

        </div>
  );
}

export default App;
