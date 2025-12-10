import { ServiceStatus, ServiceType } from "@prisma/client";
import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export class ServiceRequestPutDTO {
    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(ServiceType)
    type?: ServiceType;

    @IsOptional()
    @IsEnum(ServiceStatus)
    status?: ServiceStatus;

    @IsOptional()
    @IsInt()
    targetLotId?: number;
}