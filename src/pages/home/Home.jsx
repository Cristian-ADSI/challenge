import { React, useEffect, useState } from 'react';
import { dataBase, getDocs, collection } from 'services/firebase';
import { CategoryCard } from 'components';

import './Home.scss';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const getCagetgories = async () => {
    const categoryCollection = collection(dataBase, 'categories');
    const data = await getDocs(categoryCollection);
    setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCagetgories();
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(
      categories.sort((a, b) => {
        return a.index - b.index;
      })
    );
  }, [categories]);

  return (
    <div className="home">
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
