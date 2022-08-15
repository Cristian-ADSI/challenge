import { React, useEffect, useState } from 'react';
import {
  dataBase,
  collection,
  query,
  where,
  onSnapshot,
} from 'services/firebase';

import ReactPlayer from 'react-player';
import Cookies from 'universal-cookie';
import './ContentDetails.scss';
import { Link } from 'react-router-dom';

const cookies = new Cookies();
const ContentDetails = () => {
  const [lesson, setLesson] = useState(cookies.get('topic'));
  const { media, sinopsis, title, context, index } = lesson;


  const [nextLesson, setNextLesson] = useState({});
  const getNextLesson = async () => {
    const reference = collection(dataBase, context);
    const document = query(reference, where('index', '==', index + 1));

    onSnapshot(document, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setNextLesson(data[0]);
    });
  };

  const [prevLesson, setPrevLesson] = useState([]);
  const getPrevLesson = async () => {
    const reference = collection(dataBase, context);
    const document = query(reference, where('index', '==', index - 1));

    onSnapshot(document, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPrevLesson(data[0]);
    });
  };

  useEffect(() => {
    getPrevLesson();
    getNextLesson();
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
