import { React, useEffect, useState } from 'react';

import { getDocuments } from 'services/Services';
import { CategoryCard, Loading } from 'components';
import './Home.scss';

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getDocuments(setCategories, 'categories');
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const sortCards = categories.sort((a, b) => a.index - b.index);
    setCards(sortCards);
  }, [categories]);

  return (
    <div className="home">
      {!cards[0] && <Loading />}
      <h1 className="home__main-title">
        Course <span>Categories</span>
      </h1>

      <p className="home__desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        voluptatibus ipsa minima quia rerum hic recusandae aperiam odio, est
        consectetur neque, impedit dicta! Sapiente quis rem quibusdam facere
        itaque reprehenderit.
      </p>

      <div className="home__content">
        {cards.map((catg) => (
          <CategoryCard key={catg.index} props={catg} />
        ))}
      </div>
    </div>
  );
};
export default Home;
