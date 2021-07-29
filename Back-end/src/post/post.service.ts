import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/Post';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    ) {}
    async createOrUpdate(post: Post): Promise<Post> {
        return await this.postRepository.save(post);
      }

    getpost(){
      return this.postRepository.find();
    }
    
}
