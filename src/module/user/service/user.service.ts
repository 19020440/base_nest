import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../schema/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async getUser(): Promise<any> {
    try {
      const result = await this.userRepository.find();
      if (result) return result;
    } catch (err) {
      console.log(err);
    }
    return;
  }
  addUser(name: string, description: string): Promise<any> {
    const newuser = new User();
    newuser.name = name;
    newuser.description = description;
    return this.userRepository.save(newuser);
  }
  async deleteUser(id: number) {
    try {
      const result = await this.userRepository.delete({ id: id });
      if (result) return result;
    } catch (error) {
      console.log(error);
    }
  }
}
