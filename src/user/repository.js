import bcrypt from 'bcrypt';
import User from './User';

class UserRepository {
    constructor() { }

    async findAllUsers() {
        return await User.findAll();
    }

    async findUserByEmail(email) {
        return await User.findOne({
            where: {
                email
            }
        });
    }

    async findUserById(id) {
        return await User.findOne({
            where: {
                id
            }
        });
    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);

        return await User.create(user);
    }
}

export default UserRepository;
