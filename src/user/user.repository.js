import bcrypt from 'bcrypt';
import User from './user.model';

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

    async findUserByResetToken(token) {
        return await User.findOne({
            where: {
                resetToken: token
            }
        });
    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);

        return await User.create(user);
    }

    async resetToken(id, token) {
        return await User.update({
            resetToken: token
        }, {
            where: {
                id
            }
        });
    }

    async changePassword(id, password) {
        password = await bcrypt.hash(password, 10);

        return await User.update({
            password
        }, {
            where: {
                id
            }
        });
    }
}

export default UserRepository;
