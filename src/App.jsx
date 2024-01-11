import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import MyCard from './components/MyCard'

const App = () => {
const title = 'Adopta un perrito'
  
  const cardData = [
    {
      titulo: 'Canela',
      imagen: './src/assets/canela.jpg',
      description: 'La perrita mas bonita',
      key: '1'
    },
    {
      titulo: 'Minina',
      imagen: './src/assets/gato.jpg',
      description: 'La gata mas odiosa',
      key: '2'
    },
    {
      titulo: 'Choriflai',
      imagen: './src/assets/perro2.jpg',
      description: 'El perrito inventado',
      key: '3'
    },
    {
      titulo: 'Chocolito',
      imagen: './src/assets/perro3.jpg',
      description: 'El perrito come-helados',
      key: '4'
    },
  ]

  return (
    <div>
      <Header title={title} />
      <div className='flexcaja'>
      {cardData.map((card) => (
        
        <MyCard 
          titulo={card.titulo}
          imagen={card.imagen}
          description={card.description}
          key={card.key}
        />
        
      ))}
      </div>
      <Footer />
    </div>
  ); 
};

export default App;
