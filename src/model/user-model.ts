import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userDocument = user & Document;

@Schema()
export class user {
    @Prop()
    username: string;

    @Prop()
    description: string;

    @Prop({default: Date.now()})
    createdDate: Date;
}
export const UserSchema = SchemaFactory.createForClass(user);