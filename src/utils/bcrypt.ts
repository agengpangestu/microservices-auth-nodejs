import bcrypt from "bcrypt";

export const hash = async (password: string): Promise<string> => {
  const rounds = 14;
  const hashing = await bcrypt.hash(password, rounds);
  return hashing;
};

export const compare = async (password: string, hashed_pw: string): Promise<boolean> => {
  return bcrypt.compare(password, hashed_pw);
};
