import UserRepository from './repository';

const userRepository = new UserRepository();

export const findAllUsers = async () => {
    return await userRepository.findAllUsers();
};

export const createUser = async (user) => {
    return await userRepository.createUser(user);
};
