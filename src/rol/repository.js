import Rol from './Rol';

class RolRepository {
    constructor() { }

    async findAllRoles() {
        return await Rol.findAll();
    }

    async createRol(rol) {
        return await Rol.create(rol);
    }
}

export default RolRepository;
