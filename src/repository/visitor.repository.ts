import { UserCreateDTO } from "../dto/user/UserCreateDTO";
import prisma from "../prisma";
import { UserRepository } from "./user.repository";


export const VisitorRepository = {
  async create(data: UserCreateDTO) {
    const user = await UserRepository.create(data);

    return prisma.visitor.create({
      data: {
        user: {
            connect: { cpf: user.cpf }
        }
      },
      include: { user: true}
    });
  }
};