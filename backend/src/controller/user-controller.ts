import { Body, Controller, OnUndefined, Post } from 'routing-controllers';
import 'reflect-metadata';
import { loginModel } from '../model/info';

@Controller()
export class UserController {
  @Post('/usersRegistration')
  @OnUndefined(204)
  postOne (@Body() logInFormData: loginModel) {
   console.log(JSON.stringify(logInFormData));
  }
}
