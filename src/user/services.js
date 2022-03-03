import UserRepository from './repository';

const userRepository = new UserRepository();

export const findAllUsers = async () => {
    return await userRepository.findAllUsers();
};

export const findUserByEmail = async (email) => {
    return await userRepository.findUserByEmail(email);
};

export const findUserById = async (id) => {
    return await userRepository.findUserById(id);
};

export const createUser = async (user) => {
    return await userRepository.createUser(user);
};
