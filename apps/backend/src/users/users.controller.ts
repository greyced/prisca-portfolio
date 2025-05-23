import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() data: Omit<User, 'id'>): Promise<User> {
    return this.usersService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<User>,
  ): Promise<User> {
    return this.usersService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(+id);
  }
} 