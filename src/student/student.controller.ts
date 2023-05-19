import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {response} from 'express';
import { StudentServices } from './student.service';
import {CreateStudentDto} from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';


@Controller('Students')
export class StudentController {
    constructor(private readonly studentServices: StudentServices) {}

    @Post()
    async createStudent(@Res() response, @Body() createStudentDto:  CreateStudentDto) {
        try {
            const newStudent = await this.studentServices.createStudent(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has been created successfully',
                newStudent 
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async getStudents(@Res() response) {
        try {
            const studentData = await this.studentServices.getAllStudents();
            return response.status(HttpStatus.OK).json({
                message: 'All students data found successfully', studentData,
            })
        } catch (err) {
            return response.status(err.status).json(err.response)
        }
    }

    @Put(`/:id`)
    async updateStudent(@Res() response, @Param('id') studentId: string, @Body() updateStudentDto: UpdateStudentDto) {
        try {
            const existingStudent = await this.studentServices.updateStudent(studentId, updateStudentDto);
            return response.status(HttpStatus.OK).json({
                message: 'Student has been successfully updated',
                existingStudent,
            })
        } catch (err) {
           return response.status(err.status).json(err.response);
        }
    }

    @Delete(`/:id`)
    async deleteStudent(@Res() response, @Param('id') studentId: string)
    {
        try {
            const deletedStudent = await this.studentServices.deleteStudent(studentId);
            return response.status(HttpStatus.OK).json({
                message: 'Student deleted Successfully',
                deletedStudent,
            })
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get(`/:id`)
    async getStudentById(@Res() response, @Param('id') studentId: string) {
        try {
            const existingStudent = await this.studentServices.getStudent(studentId);
            return response.status(HttpStatus.OK).json({
                message: 'Got the student successfully',
                existingStudent,
            })
        } catch (err) {
            return response.status(err.code).json(err.response);
        }
    }


    @Get(`/test`)
    getTest() {
        return 'hello';
    }
}