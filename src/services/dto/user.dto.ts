import { IsEmail, IsInt, IsString, Max, Min, MinLength, isNotEmpty } from "class-validator";

export class UserDto {
  @IsEmail({}, {
    message: "Email is required"
  })
  email: string;

  @IsString({
    message: "Name is required"
  })
  @MinLength(2, {
    message: "Name should be at least characters long"
  })
  name: string;

  @IsString({
    message: "Country is requred"
  })
  country: string;

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

  @IsString({
    message: "password is required"
  })
  @MinLength(8, {
    message: "password should be atleast 8 characters long"
  })
  password: string;
}