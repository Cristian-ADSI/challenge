import Cookies from 'universal-cookie';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

import './ContentCategory.scss';
import { getTopics, setTopic } from 'services/Services';
import { Loading } from 'components';

const initvalues = {
  catgCover: '',
  color: '',
  imgUrl: '',
  label: '',
  large: '',
  largeDesc: '',
  route: '',
};
const ContentCategory = () => {
  const cookies = new Cookies();
  const cookiesCatg = cookies.get('category');
  const category = cookiesCatg ? cookiesCatg : initvalues;
  const { catgCover, color, imgUrl, label, largeDesc, route } = category;
  const redirect = useNavigate();

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    !route && redirect('/app', { replace: true });
    getTopics(setTopics, route);
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
      {!category && <Navigate to={'/app'} />}
      {!list[0] && <Loading />}
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
