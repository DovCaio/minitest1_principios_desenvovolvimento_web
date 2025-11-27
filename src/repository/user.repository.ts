import { UserCreateDTO } from "../dto/user/UserCreateDTO";
import prisma from "../prisma";


export const UserRepository = {
  async create(data: UserCreateDTO) {
    return prisma.user.create({
      data: {
        cpf: data.cpf,
        phone: data.phone,
        name: data.name,
        userType: data.userType,
      }
    });
  }
};
