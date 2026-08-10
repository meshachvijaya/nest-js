import { Controller, Get, Query, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

// @Get('all') // GET /user/all
// @Get(':id') // GET /user/:id
// @Post() // POST /user
// @Put(':id') // PUT /user/:id
// @Delete(':id') // DELETE /user/:id
// Note: always put the static one top before the dynamic one

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // GET User
    @Get()
    getUsers(@Query('name') name: string): unknown {
        return this.userService.findAllUsers(name);

        // if (name) {
        //     return users.filter((user) =>
        //         user.name.toLowerCase().includes(name.toLowerCase()),
        //     );
        // }
        // return users;
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOneUser(Number(id));
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(Number(id), updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id));
    }
}
