import User, { UserInterface } from "../models/user.model";
import { generateToken } from "microservices-nodejs";
import { compare, hash } from "../utils/bcrypt";

export const Store = async (user_input: UserInterface): Promise<UserInterface> => {
  try {
    const hash_pw = await hash(user_input.password);

    const new_user = await User.create({
      ...user_input,
      password: hash_pw,
    });

    return new_user;
  } catch (error: any) {
    throw new Error(`Error - create user: ${error.message}`);
  }
};

export const Login = async (email: string, password: string): Promise<{ user: Omit<UserInterface, "password">; token: string }> => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const password_valid = await compare(password, user.password);
    if (!password_valid) {
      throw new Error("Password not match");
    }

    const token = generateToken(
      {
        id: user._id as string,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      process.env.JWT_EXPIRES as string
    );

    // destructure password from the data returned
    const { password: _password, ...userData } = user.toObject();

    return { user: userData as Omit<UserInterface, "password">, token };
  } catch (error: any) {
    throw new Error(`Error - login: ${error.message}`);
  }
};
