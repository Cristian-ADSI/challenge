import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ props }) => {
  const { imgUrl, shortDesc, title, route} = props;
  return (
    <div className="category-card">
      <div className="category-card__content">
        <img src={imgUrl} alt="Category Cover" className="cover" />
        <h3 className="title">{title}</h3>
        <p>{shortDesc}</p>
        <Link to={route}>Comenzar </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
