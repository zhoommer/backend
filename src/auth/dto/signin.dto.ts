import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'Username cannot be empty' })
  username: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
}
