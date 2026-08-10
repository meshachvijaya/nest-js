import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;
}

// POST /user with {"name": 12, "email": "notemail"}
// {
//     "statusCode": 400,
//     "message": [
//         "email must be an email",
//         "name must be a string"
//     ],
//     "error": "Bad Request"
// }