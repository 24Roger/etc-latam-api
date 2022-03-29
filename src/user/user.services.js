import UserRepository from './user.repository';

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

export const findUserByResetToken = async (token) => {
    return await userRepository.findUserByResetToken(token);
};

export const createUser = async (user) => {
    return await userRepository.createUser(user);
};

export const resetToken = async (id, token) => {
    return await userRepository.resetToken(id, token);
};

export const changePassword = async (id, password) => {
    return await userRepository.changePassword(id, password);
};
