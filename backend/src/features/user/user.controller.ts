import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { User } from '../../domain/entities';
import { GetUserFromHeader } from '../../libs/decorator/getUserFromHeader.decorator';
import { Logger } from '../../libs/logger';
import { GetUserDetailsResponse } from './dtos/response';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {
    this.logger.setContext(UserController.name);
  }

  @Get('me')
  @ApiResponse({ type: GetUserDetailsResponse })
  async getUserDetails(@GetUserFromHeader() user: User) {
    return this.userService.getUserDetails(user.id);
  }
}
