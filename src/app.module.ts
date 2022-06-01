import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './model/user-model';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/nestjs-basic"),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
