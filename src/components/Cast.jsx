import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Cast = ({ name, image, character }) => {
    return (
        <>
            <Card
                style={{
                    width: '14rem',
                    background: 'none',
                    color: '#f5f5f5',
                    border: 'none',
                }}
            >
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${image}`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{character}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

Cast.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    character: PropTypes.number.isRequired,
};

export default Cast;
