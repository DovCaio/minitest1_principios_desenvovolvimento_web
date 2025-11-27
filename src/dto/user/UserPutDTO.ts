import { UserType } from "@prisma/client";
import { IsEnum, IsString, Length, IsOptional } from "class-validator";
import { EmployeePutDTO } from "../employee/EmployeePutDTO";

export class UserPutDTO {
  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(UserType, { message: "userType inválido" })
  @IsOptional()
  userType?: UserType;

  @IsOptional()
  employee?: EmployeePutDTO
}
