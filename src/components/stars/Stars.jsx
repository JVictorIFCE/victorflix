import { FaStar } from 'react-icons/fa';
import './Stars.css';

function Stars({ rating }) {
  const starCount = Math.floor(rating / 2);

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < starCount ? 'star filled' : 'star'}
        />
      ))}
    </div>
  );
}

export default Stars;
