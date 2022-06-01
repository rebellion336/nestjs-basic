import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, userDocument } from './model/user-model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel("user") private readonly userModel:Model<userDocument>
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  async listUser(){
    return this.userModel.find({}).then(user => user).catch(err => console.log(err))
  }

  async createUser(body): Promise<User> {
    const newUser = new this.userModel(body);
    return newUser.save()
  }
}
