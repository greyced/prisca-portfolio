import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'generated/prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  async create(@Body() data: { email: string; name?: string }): Promise<User> {
    return this.usersService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { email?: string; name?: string },
  ): Promise<User> {
    return this.usersService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(Number(id));
  }
} 