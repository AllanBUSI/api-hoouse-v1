import randomstring from "randomstring";


export const createReference = () => {
  return randomstring.generate({
    length: 30,
    charset: "alphanumeric",
  });
};
