import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonModule } from './modules/lesson/lesson.module';
import { DatabaseModule } from './modules/database/database.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';

@Module({
  imports: [LessonModule, DatabaseModule, StudentModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
