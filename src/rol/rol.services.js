import RolRepository from './rol.repository';

const rolRepository = new RolRepository();

export const findAllRoles = async () => {
    return await rolRepository.findAllRoles();
};

export const createRol = async (rol) => {
    return await rolRepository.createRol(rol);
};
