import { UserDTO } from "../dto/UserDTO";
import { EmployeeRepository } from "../repository/employee.repository";

export const EmployeeService =  {

    async create(userDto: UserDTO) {
        return EmployeeRepository.createEmployee(userDto);
    },

    async update(userDto: UserDTO) {
        return EmployeeRepository.updateEmployee(userDto);
    },

    async get(cpf: string) {
        return EmployeeRepository.getEmployee(cpf);
    },

    async delete(cpf: string) {
        return EmployeeRepository.deleteEmployee(cpf);
    }

}
