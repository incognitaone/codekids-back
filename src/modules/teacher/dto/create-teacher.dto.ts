import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CourseTypes } from 'src/types/course-types';
import { Teacher } from 'src/types/teacher';
import { Lesson } from 'src/types/lesson';
import { Student} from 'src/types/student';


export class CreateTeacherDto implements Partial<Teacher> {
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(CourseTypes)
  course: CourseTypes;

  @IsNumber()
  student_id: number; // под ?

  lesson: Lesson; // НЕ сделал
}
