import { useEffect, useState } from 'react';

const useForm = (initialState = {}) => {
  const [inputvalues, setInputvalue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setInputvalue({
      ...inputvalues,
      [target.name]: [target.value],
    });
  };

  const { email } = inputvalues;

  useEffect(() => {
  }, [email]);

  return [inputvalues, handleInputChange];
};

export default useForm;
