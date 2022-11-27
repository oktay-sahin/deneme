import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    return 'File Upload';
  }
}
