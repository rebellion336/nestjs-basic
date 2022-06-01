import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './model/user-model';
import { UserUpdateDto } from './model/update-uesr-model'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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

  @Put(':id')
  updateUser(@Param("id") id: string, @Body() UserUpdateDto: UserUpdateDto): Promise<User> {
    return this.appService.updateUser(id, UserUpdateDto)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.appService.deleteUser(id)
  }
}
