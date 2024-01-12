import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Tags = (props) => {
  const texto = props.texto;
  const color = props.color;

  return (
    <Button variant={color}>
      {texto} <Badge bg="secondary"></Badge>
    </Button>
  );
}

export default Tags;
