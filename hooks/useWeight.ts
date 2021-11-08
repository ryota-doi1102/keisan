import { useState, useCallback } from 'react';

const useWeight = () => {
  const [weight, setWeight] = useState<number | ''>(0);

  const changeWeight = useCallback((value: string | number) => {
    if (value === '') {
      setWeight(value);
    } else if (typeof value === 'string') {
      setWeight(Number.parseInt(value));
    } else {
      setWeight(value);
    }
  }, []);

  return {
    weight,
    changeWeight,
  };
};

export default useWeight;
