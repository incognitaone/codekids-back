import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherRepository } from '../database/repositories/teacher.repository';
import { QueryOptions } from 'src/types/query-options';
import { Like } from 'typeorm';


@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) {}


  create(createTeacherDto: CreateTeacherDto) {
    const { student_id } = createTeacherDto;
    return this.teacherRepository.save({
      ...createTeacherDto,
      students: { id: student_id }, // Почему?
    });
  }

  findAll(queryOptions?: QueryOptions) {
    return this.teacherRepository.findAll({
      where: queryOptions.search
        ? [
            { students: Like(`%${queryOptions.search}%`) },
          ]
        : undefined,
      skip: queryOptions.page,
      take: queryOptions.limit,
      relations: queryOptions.with,
    });
  }

  findOne(id: number, queryOptions?: QueryOptions) {
    return this.teacherRepository.findOne({
      where: { id },
      relations: queryOptions.with,
    });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const {student_id } = updateTeacherDto;
    return this.teacherRepository.update(id, {
      ...updateTeacherDto,
      students: { id: student_id }, // Почему?
    });
  }

  remove(id: number) {
    return this.teacherRepository.remove(id);
  }
}
