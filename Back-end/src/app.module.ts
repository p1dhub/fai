import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Post';
import { PostModule } from './post/post.module';


@Module({

  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "keep1234",
    "database": "keeplearning",
    "entities": [Post],
    "synchronize": true
  }),PostModule],
 
})
export class AppModule {}
