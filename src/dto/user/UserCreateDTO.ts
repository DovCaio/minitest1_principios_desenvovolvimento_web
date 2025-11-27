import { UserType } from "@prisma/client";
import {EmployeeCreateDTO} from "../employee/EmployeeCreateDTO"
import { IsEnum, IsNotEmpty, IsString, Length, IsOptional } from "class-validator";

export class UserCreateDTO {
  @IsString()
  @Length(11, 11, { message: "CPF deve ter exatamente 11 dígitos" })
  cpf!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEnum(UserType, { message: "userType inválido" })
  userType!: UserType;

  @IsOptional()
  employee?: EmployeeCreateDTO
}
