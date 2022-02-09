import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(): Promise<any> {
    return this.userService.getUser();
  }

  @Post('/add')
  createuser(@Body() body: any): any {
    const name: string = body.name;
    const description: string = body.description;
    return this.userService.addUser(name, description);
  }
  @Post('/delete')
  deleteUser(@Body() body: any): any {
    return this.userService.deleteUser(body.id);
  }
}
