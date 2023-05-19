import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';
import {StudentController} from './student/student.controller';
import {StudentServices} from './student/student.service';
//const uri = "mongodb+srv://indexofmayank:PzqmkeJvErGml3df@cluster0.69vjmaj.mongodb.net/?retryWrites=true&w=majority";
@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://indexofmayank:PzqmkeJvErGml3df@cluster0.69vjmaj.mongodb.net/?retryWrites=true&w=majority", {dbName: 'Cluster0'}),
            MongooseModule.forFeature([{name: 'Student', schema: StudentSchema}])],
  controllers: [StudentController],
  providers: [StudentServices],
})
export class AppModule {}
