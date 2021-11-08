import { Sex, isSex } from '@types';
import { useCallback, useState } from 'react';
import { calculateBmr } from 'utils/calculator';
import useHeight from './useHeight';
import useWeight from './useWeight';

const useCalculateBmr = () => {
  const [age, setAge] = useState<number | ''>(0);
  const [sex, setSex] = useState<Sex>(1);
  const [bmr, setBmr] = useState(0);

  const { height, changeHeight } = useHeight();
  const { weight, changeWeight } = useWeight();

  const changeAge = useCallback((value: string) => {
    if (value === '') {
      setAge(value);
    } else {
      setAge(Number.parseInt(value));
    }
  }, []);

  const changeSex = useCallback((value: string) => {
    const sexNumber = Number.parseInt(value);
    if (isSex(sexNumber)) {
      setSex(sexNumber);
    }
  }, []);

  const calculate = useCallback(() => {
    if (age && height && weight) {
      const bmr = calculateBmr(age, height, weight, sex);
      setBmr(bmr);
    }
  }, []);

  const reset = useCallback(() => {
    setAge(0);
    setSex(1);
    changeHeight(0);
    changeWeight(0);
    setBmr(0);
  }, []);

  return {
    age,
    sex,
    height,
    weight,
    bmr,
    changeAge,
    changeSex,
    changeHeight,
    changeWeight,
    calculate,
    reset
  }
};

export default useCalculateBmr;
