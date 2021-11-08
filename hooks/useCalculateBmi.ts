import { useCallback, useState } from 'react';
import { calculateAppropriateWeight, calculateBmi } from 'utils/calculator';
import useHeight from './useHeight';
import useWeight from './useWeight';

const useCalculateBmi = () => {
  const [appropriateWeight, setAppropriateWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const { height, changeHeight } = useHeight();
  const { weight, changeWeight } = useWeight();

  const calculate = useCallback(() => {
    if (height && weight) {
      setBmi(calculateBmi(height, weight));
      setAppropriateWeight(calculateAppropriateWeight(height));
    }
  }, []);

  const reset = useCallback(() => {
    changeHeight(0);
    changeWeight(0);
    setBmi(0);
    setAppropriateWeight(0);
  }, []);

  return {
    height,
    weight,
    appropriateWeight,
    bmi,
    changeHeight,
    changeWeight,
    calculate,
    reset,
  };
};

export default useCalculateBmi;
