import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, path, rating }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Card
        style={{
          width: '14rem',
          background: 'none',
          color: '#f5f5f5',
          border: 'none',
          transition: 'transform 0.2s'
        }}
        className='movie-card'
      >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${path}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Rating: {rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
