import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui

    const repositoryAlreadyExist = this.usersRepository.findByEmail(email);

    if (repositoryAlreadyExist) {
      throw new Error('User already exist');
    }
    const rep = this.usersRepository.create({ email, name });
    return rep;
  }
}

export { CreateUserUseCase };
