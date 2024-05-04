import { StudentEntity } from '../entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';

export class StudentRepository extends BaseRepository<StudentEntity> {
  constructor(
    @InjectRepository(StudentEntity) statudentRepository: Repository<StudentEntity>,
  ) {
    super(statudentRepository);
  }
}
