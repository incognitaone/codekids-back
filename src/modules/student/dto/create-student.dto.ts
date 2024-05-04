import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CourseTypes } from 'src/types/course-types';
import { Lesson } from 'src/types/lesson';
import { Student} from 'src/types/student';

export class CreateStudentDto implements Partial<Student> {
  @IsString()
  name: string;

  @IsDate()
  birthday: Date;

  @IsNumber()
  age: number;

  @IsNumber()
  teacher_id: number;

  @IsOptional()
  @IsEnum(CourseTypes)
  course: CourseTypes;

  @IsString()
  contacts: string;

  
  lesson: Lesson;// не сделал
}