import { EmployeeType } from "@prisma/client";
import { IsEnum, IsOptional } from "class-validator";

export class EmployeePutDTO {

    @IsOptional()
    @IsEnum(EmployeeType, { message: "userType inválido" })
    employeeType?: EmployeeType

}