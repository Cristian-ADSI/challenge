import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

import './ContentCategory.scss';
import { getTopics, setTopic } from 'services/Services';

const ContentCategory = () => {
  const cookies = new Cookies();
  const category = cookies.get('category');
  const { catgCover, color, imgUrl, label, largeDesc, route } = category;

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics(setTopics, route);
    console.log(topics);
  }, []);

  const [list, setList] = useState([]);
  useEffect(() => {
    const sortedList = topics.sort((a, b) => a.index - b.index);
    setList(sortedList);
  }, [topics]);

  const bgImage = {
    background: `url("${catgCover}")`,
  };
  const colorTxt = {
    color: `${color}`,
  };

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
