import { IsNotEmpty } from 'class-validator';

export class loginModel {
  @IsNotEmpty()
    userName: string;

  @IsNotEmpty()
    password: string;
}
