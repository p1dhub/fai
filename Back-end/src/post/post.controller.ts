import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { get } from 'http';
import { Post as PostEntity } from 'src/Post';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) {}

  @Post('/addpost') // POST /albums
  @HttpCode(HttpStatus.CREATED)
  async createAlbum(@Body() body:PostEntity){
    return await this.postService.createOrUpdate(body);
  }

  @Get('/getpost')
  getpost(){
    return this.postService.getpost();
  }
  
}
