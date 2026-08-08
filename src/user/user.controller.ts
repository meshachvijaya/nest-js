import { Controller, Get, Query, Param, Post, Put, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Get('all') // GET /user/all
// @Get(':id') // GET /user/:id
// @Post() // POST /user
// @Put(':id') // PUT /user/:id
// @Delete(':id') // DELETE /user/:id
// Note: always put the static one top before the dynamic one

@Controller('user')
export class UserController {
    // GET User
    @Get()
    getUsers(@Query('name') name: string) {
        const users = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'Bob Smith' },
        ];

        if (name) {
            return users.filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase()),
            );
        }
        return users;
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return { id, name: 'John Doe' };
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return { data: createUserDto, message: 'User created successfully' }
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return {
            data: { id, ...updateUserDto },
            message: 'User updated successfully'
        };
    }
}
