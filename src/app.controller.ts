import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './model/user-model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  
  @Get()
  getUser() {
    return this.appService.listUser();
  }

  @Post()
  createUser(@Body() userDto: User): Promise<User> {
    return this.appService.createUser(userDto)
  }
}
