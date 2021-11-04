export const calculateBmi = (weight: number, height: number): number => {
  return weight / (height / 100) ** 2;
};

export const calculateAppropriateWeight = (height: number): number => {
  return (height / 100) ** 2 * 22;
};
