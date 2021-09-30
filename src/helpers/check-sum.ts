interface Digits {
  a: number;
  b: number;
  c: number;
};
const seed: Digits = {
  a: 0,
  b: 0,
  c: 0,
};
const BASE_NUM = 10;

const weights = {
  a: 0b0000,
  b: 0b1010,
  c: 0b0101,
}


export const simple1000 = (value: string): string => {
  const digits = [...value].reduce(
    ({ a: a0, b: b0, c: c0 }, e) => {
      const e1 = parseInt(e, BASE_NUM) | 0;
      const a1 = (a0 + (e1 ^ weights.a)) % BASE_NUM;
      const b1 = (b0 + a0 + (e1 ^ weights.b)) % BASE_NUM;
      const c1 = (c0 + b0 + (e1 ^ weights.c)) % BASE_NUM;
      return {
        a: a1,
        b: b1,
        c: c1,
      };
    },
    seed);
  return (digits.c * 100 + digits.b * 10 + digits.a).toString();
}