import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // create a new user
  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  // find one user by condition
  async findOne(condition: any): Promise<User | null> {
    if (!condition || Object.keys(condition).length === 0) {
      throw new BadRequestException('Invalid search condition');
    }
    return this.userRepository.findOne({ where: condition });
  }
}
