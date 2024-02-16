import { AppDataSource } from "db/app.datasource";
import { User } from "entities/user.entity";
import { UserDto } from "./dto/user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

export class UserService {
  constructor (private userRespository = AppDataSource.getRepository(User)) {}

  public async createUserS(data: UserDto) {
    const { password, salt, ...user } = await this.userRespository.save(this.userRespository.create({
      ...data
    }));
    
    return user;
  };

  public async getUsersS(): Promise<User[]> {
    return await this.userRespository.find({
      select: ["id", "email", "name", "age", "country"]
    })
  };

  public async updateUserS(id: string, data: UpdateUserDto): Promise<any> {
    const user = await this.userRespository.update(id, {
      ...data
    },
    );

    return user
  }

  public async deleteUserS(id: string): Promise<string> {
    await this.userRespository.delete(id);

    return 'successfully deleted';
  }
}