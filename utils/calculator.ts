import { Sex } from '@types';

export const calculateBmi = (height: number, weight: number): number => {
  return weight / (height / 100) ** 2;
};

export const calculateAppropriateWeight = (height: number): number => {
  return (height / 100) ** 2 * 22;
};

export const calculateBmr = (age: number, height: number, weight: number, sex: Sex): number => {
  if (sex === 1) {
    return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  } else {
    return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  }
};
