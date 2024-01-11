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
      imagen: '',
      description: 'La perrita mas bonita'
    },
    {
      titulo: 'Minina',
      imagen: '',
      description: 'La gata mas odiosa'
    },
    {
      titulo: 'Choriflai',
      imagen: '',
      description: 'El perrito inventado'
    },
    {
      titulo: 'Chocolito',
      imagen: '',
      description: 'El perrito come-helados'
    },
  ]

  return (
    <div>
      <Header title={title} />
      {cardData.map((card) => (
        <MyCard
          titulo={card.titulo}
          imagen={card.imagen}
          description={card.description}
        />
      ))}
      <Footer />
    </div>
  );  // Add closing parenthesis here
};

export default App;
