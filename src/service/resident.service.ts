import {ResidentRepository} from "../repository/resident.repository";
export const ResidentService = {
    async create(data: any) {
        return ResidentRepository.create(data); 
    }
}