import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import MyCard from './components/MyCard'


const App = () => {
const title = 'Adopta un Animal'
  
  const cardData = [
    {
      titulo: 'Canela',
      imagen: './src/assets/canela.jpg',
      description: 'La perrita mas bonita',
      key: '1',
      texto: 'Mini-Greyhound',
      color: 'secondary',
    },
    {
      titulo: 'Minina',
      imagen: './src/assets/gata.jpg',
      description: 'La gata mas odiosa',
      key: '2',
      texto: 'Sacame a pasear',
      color: 'danger',
      
    },
    {
      titulo: 'Choriflai',
      imagen: './src/assets/perro2.jpg',
      description: 'El perrito inventado',
      key: '3',
      texto: 'Kiltro',
      color: 'success',
    },
    {
      titulo: 'Chocolito',
      imagen: './src/assets/perro3.jpg',
      description: 'El perrito come-helados',
      key: '4',
      texto: 'Pug',
      color: 'warning',
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
          texto={card.texto}
          color={card.color}
        />
        
      ))}
      </div>
      <Footer />
    </div>
  ); 
};

export default App;
