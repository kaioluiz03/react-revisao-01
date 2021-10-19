import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import City1 from './assets/londres-capa2019-05.jpg';
import City2 from './assets/Torre_Paris_shutterstock.jpg';
import City3 from './assets/hong-kong-9-e1509350635809 (1).jpg';

function App() {
  return (
    <main className="App">
      <Header />
      <Title />

      <div className='cards'>
        <Card cardTitle={'Londres'} cardText={'Londres, capital da Inglaterra e do Reino Unido, é uma cidade do século 21 com uma história que remonta à era romana.'} cardImage={City1} cardLink={''} />
        <Card cardTitle={'Paris'} cardText={'Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura.'} cardImage={City2} cardLink={''} />
        <Card cardTitle={'Hong Kong'} cardText={'Hong Kong, ex-colônia britânica, é um território autônomo no sudeste da China. É um grande centro urbano, densamente povoado.'} cardImage={City3} cardLink={''} />
      </div>

      <Footer />
    </main>
  );
}

export default App;
