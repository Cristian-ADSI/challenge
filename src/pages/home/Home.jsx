import { selectUser } from 'helppers/UserSLice';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useEffect, useState } from 'react';
import { userAuth } from 'helppers/UserAuth';
import { Navigate } from 'react-router-dom';

import { dataBase } from 'services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import CategoryCard from 'components/category-card/CategoryCard';

import './Home.scss';

const Home = () => {
  const [loged, setLoged] = useState('');
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    userAuth(dispatch, setLoged);
  }, []);

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
      {loged === 'none' && <Navigate to={'/'} replace />}
      {/* <h1>{user && user.name}</h1> */}
      <h1 className="home__main-title">
        Course <span>Categories</span>
      </h1>
      <p className="home__desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        voluptatibus ipsa minima quia rerum hic recusandae aperiam odio, est
        consectetur neque, impedit dicta! Sapiente quis rem quibusdam facere
        itaque reprehenderit.{' '}
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
