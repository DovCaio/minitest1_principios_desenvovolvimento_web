import { UserCreateDTO } from "../dto/user/UserCreateDTO";
import { UserPutDTO } from "../dto/user/UserPutDTO";
import { EmployeeRepository } from "../repository/employee.repository";

export const EmployeeService =  {

    async create(userDto: UserCreateDTO) {
        return EmployeeRepository.createEmployee(userDto);
    },

    async update(cpf: string, userDto: UserPutDTO) {
        return EmployeeRepository.updateEmployee(cpf, userDto);
    },

    async get(cpf: string) {
        return EmployeeRepository.getEmployee(cpf);
    },

    async delete(cpf: string) {
        return EmployeeRepository.deleteEmployee(cpf);
    }

}
