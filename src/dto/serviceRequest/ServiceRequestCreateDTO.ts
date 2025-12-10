import { ServiceType } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ServiceRequestCreateDTO {
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsEnum(ServiceType) 
    type: ServiceType;

    @IsNotEmpty()
    @IsString()
    requesterCpf: string;

    @IsOptional()
    @IsInt()
    targetLotId?: number;
}