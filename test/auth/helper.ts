import jwt from "jsonwebtoken";
import { Config } from "../../src/config";
import { hash } from "bcrypt";
import { UserRepository } from "../../src/repositories/UserRepository";
const userRepository = new UserRepository();

export async function createAccessToken(user: any) {
    return await jwt.sign(
        {
            userId: user._id.toString(),
        },
        Config.JWT_SECRET!,
        {
            expiresIn: "1h",
        },
    );
}

export async function createUser(user: any) {
    return await userRepository.create({
        ...user,
        hashedPassword: await hash(user.password, 10),
    });
}
