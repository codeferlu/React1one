import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from '../Tags';
import './styles.css'


const MyCard = (props) => {
  const titulo = props.titulo;
  const imagen = props.imagen;
  const nombre = props.nombre;
  const description = props.description;

  

  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags texto={props.texto} color={props.color} />
      </Card.Body>
    </Card>
  
  );
};

export default MyCard;
