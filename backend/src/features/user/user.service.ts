import { BadRequestException, Injectable } from '@nestjs/common';

import { EntityManager } from 'typeorm';

import { Result } from '../../domain/common/dtos/result.dto';
import { User } from '../../domain/entities';

import { ErrorMessages } from '../../libs/constant/messages';
import { GenericRepository } from '../../libs/repository/genericRepository';
import { Mapper } from '../../libs/utils/mapper';

import { GetUserDetailsResponse } from './dtos/response';

@Injectable()
export class UserService {
  private readonly userRepository: GenericRepository<User>;
  constructor(private manager: EntityManager) {
    this.userRepository = new GenericRepository(User, manager);
  }

  async getUserDetails(userId: string) {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new BadRequestException(ErrorMessages.NOT_FOUND_MSG);
    return new Result({ data: Mapper(GetUserDetailsResponse, user) });
  }
}
