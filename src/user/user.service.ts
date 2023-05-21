import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<any> {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }
}
