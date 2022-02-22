import User from './User';

class UserRepository {
    constructor() { }

    async findAllUsers() {
        return await User.findAll();
    }

    async createUser(user) {
        return await User.create(user);
    }
}

export default UserRepository;
