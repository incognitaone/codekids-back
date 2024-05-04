import { Teacher } from "src/types/teacher";
import { BaseEntity } from "./base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { LessonEntity } from "./lessson.entity";
import { CourseTypes } from "src/types/course-types";
import { Student } from "src/types/student";

@Entity()
export class TeacherEntity extends BaseEntity implements Partial<Teacher> {
    @Column()
    name: string;
    
    students: Student[];// не знаю как сделать

    @Column({
        type: 'enum',
        enum: CourseTypes,
        nullable: true,
      })
    course: CourseTypes;

    

    lessons: LessonEntity[];
}