import { useState, useCallback } from 'react';

const useHeight = () => {
  const [height, setHeight] = useState<number | ''>(0);

  const changeHeight = useCallback((value: string | number) => {
    if (value === '') {
      setHeight(value);
    } else if (typeof value === 'string') {
      setHeight(Number.parseInt(value));
    } else {
      setHeight(value);
    }
  }, []);

  return {
    height,
    changeHeight,
  };
};

export default useHeight;
