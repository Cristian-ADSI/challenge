import { Link } from 'react-router-dom';
import './CategoryCard.scss';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const CategoryCard = ({ props }) => {

  const setCoockies = (category) => {
    cookies.set('category', category, { path: '/app' });
  };

  const { imgUrl, shortDesc, title } = props;
  
  return (
    <div className="category-card">
      <div className="category-card__content">
        <img src={imgUrl} alt="Category Cover" className="cover" />
        <h3 className="title">{title}</h3>
        <p>{shortDesc}</p>
        <Link to="category" onClick={() => setCoockies(props)}>
          Comenzar{' '}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
