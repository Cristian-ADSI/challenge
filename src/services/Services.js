import {
  collection,
  dataBase,
  getDocs,
  onSnapshot,
  query,
  where,
} from './firebase';
import Cookies from 'universal-cookie';

export const getDocuments = async (setItems, items) => {
  const categoryCollection = collection(dataBase, items);
  const data = await getDocs(categoryCollection);
  setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

export const getTopics = async (setTopics, route) => {
  const topicsCollection = collection(dataBase, `${route}`);
  const data = await getDocs(topicsCollection);
  setTopics(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

const cookies = new Cookies();
export const setTopic = (topic) => {
  cookies.set('topic', topic, { path: '/app' });
};

export const getNextLesson = async (context, index, setLesson) => {
  const reference = collection(dataBase, context);
  const document = query(reference, where('index', '==', index + 1));

  onSnapshot(document, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setLesson(data[0]);
  });
};

export const getPrevLesson = async (context, index, setLesson) => {
  const reference = collection(dataBase, context);
  const document = query(reference, where('index', '==', index - 1));

  onSnapshot(document, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setLesson(data[0]);
  });
};
