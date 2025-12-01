import { VisitorRepository } from "../repository/visitor.repository";

export const VisitorService = {
  async create(data: any) {
    return VisitorRepository.create(data);
  }
};