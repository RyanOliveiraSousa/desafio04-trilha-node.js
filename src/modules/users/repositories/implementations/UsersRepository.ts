import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
      admin: false,
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find(userId => userId.id === id);

    if (!user) {
      throw new Error('Id not found');
    }
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find(userEmail => userEmail.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const updatedUser = this.users.find(user => user === receivedUser);

    updatedUser.admin = true;

    return updatedUser;
  }

  list(): User[] {
    // Complete aqui
    if (this.users.length === 0) {
      throw new Error('dont exist users yet');
    }
    return this.users;
  }
}

export { UsersRepository };
