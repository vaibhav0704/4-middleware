import { IsEmail, IsInt, IsOptional, IsString, Max, Min, MinLength, isNotEmpty } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsEmail({}, {
    message: "Email is required"
  })
  email: string;

  @IsOptional()
  @IsString({
    message: "Name is required"
  })
  @MinLength(2, {
    message: "Name should be at least characters long"
  })
  name: string;

  @IsOptional()
  @IsString({
    message: "Country is requred"
  })
  country: string;

  @IsOptional()
  @IsInt({
    message: "age is required"
  })
  @Min(0, {
    message: "age should be greater than 0"
  })
  @Max(150, {
    message: "age cannot be less than 150"
  })
  age: number;

  @IsOptional()
  @IsString({
    message: "password is required"
  })
  @MinLength(8, {
    message: "password should be atleast 8 characters long"
  })
  password: string;
}