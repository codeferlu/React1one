import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
  const titulo = props.titulo
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
        <Button variant="primary">Adoptame</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
