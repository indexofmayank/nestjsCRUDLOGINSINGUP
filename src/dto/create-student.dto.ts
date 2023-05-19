import {IsNumber, IsNotEmpty, MaxLength, IsString} from 'class-validator';

export class CreateStudentDto {

    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly class: Number;

    @IsNumber()
    @IsNotEmpty()
    readonly rollNumber: Number;

    @IsNotEmpty()
    @IsNumber()
    readonly marks: number;

}