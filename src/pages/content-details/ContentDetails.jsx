import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player';
import Cookies from 'universal-cookie';

import { getNextLesson, getPrevLesson } from 'services/Services';
import './ContentDetails.scss';

const ContentDetails = () => {
  const cookies = new Cookies();
  const [lesson, setLesson] = useState(cookies.get('topic'));
  const { media, sinopsis, title, context, index } = lesson;

  const [nextLesson, setNextLesson] = useState({});
  const [prevLesson, setPrevLesson] = useState({});

  useEffect(() => {
    getPrevLesson(context, index, setPrevLesson);
    getNextLesson(context, index, setNextLesson);
  }, [lesson]);

  const goNextLesson = (topic) => {
    cookies.set('topic', topic, { path: '/app' });
    setLesson(topic);
  };
  const backPrevLesson = (topic) => {
    cookies.set('topic', topic, { path: '/app' });
    setLesson(topic);
  };

  return (
    <section className="content-details">
      <div className="content-details__lesson">
        <div className="media">
          <ReactPlayer url={media} width="100%" height="400px" controls />
        </div>

        <div className="info">
          <div className="info__content">
            <h2 className="title">{title}</h2>
            <p className="sinopsis">{sinopsis}</p>
          </div>

          <div className="info__navegation">
            <button
              className={`prev-${index === 0 && 'disabled'}`}
              onClick={() => backPrevLesson(prevLesson)}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
              Prev
            </button>

            <button>
              <Link to={'/app/category'}>
                <span className="material-symbols-outlined">list</span>{' '}
              </Link>
            </button>

            <button
              className={`next-${!nextLesson && 'disabled'}`}
              onClick={() => goNextLesson(nextLesson)}
            >
              Next
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDetails;
