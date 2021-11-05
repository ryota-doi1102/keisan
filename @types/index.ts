export type Sex = 1 | 2;
export const isSex = (arg: number): arg is Sex => {
  return arg === 1 || arg === 2;
};
