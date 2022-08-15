import Cookies from 'universal-cookie';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from 'services/firebase';
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

import './ContentCategory.scss';

const cookies = new Cookies();

const ContentCategory = () => {
  const [category, setCategory] = useState(cookies.get('category'));
  const [topics, setTopics] = useState([]);
  const { catgCover, color, imgUrl, label, largeDesc, route, title } = category;

  const bgImage = {
    background: `url("${catgCover}")`,
  };
  const colorTxt = {
    color: `${color}`,
  };

  const getTopics = async () => {
    const topicsCollection = collection(dataBase, `${route}`);
    const data = await getDocs(topicsCollection);
    setTopics(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const setTopic = (topic) => {
    cookies.set('topic', topic, { path: '/app' });
  };

  useEffect(() => {
    getTopics();
    console.log(topics);
  }, []);

  const [list, setList] = useState([]);
  useEffect(() => {
    setList(
      topics.sort((a, b) => {
        return a.index - b.index;
      })
    );
  }, [topics]);

  return (
    <div className="content-category">
      <section className="content-category__header">
        <div className="overlay" style={bgImage}></div>
        <div className="info">
          <h1 className="title" style={colorTxt}>
            {label}
          </h1>
          <p className="large-desc">{largeDesc}</p>
        </div>
      </section>

      <section className="content-category__topics">
        <div className="header">
          <img className="cover" src={imgUrl} alt="Category Cover" />
          <h2>
            Que <span>aprenderemos?</span>
          </h2>
        </div>
        <ul className="menu">
          {list.map((item) => (
            <li
              className="item"
              key={item.index}
              onClick={() => setTopic(item)}
            >
              <Link to={'/app/lesson'}>
                {parseInt(item.index) + 1}. {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ContentCategory;
