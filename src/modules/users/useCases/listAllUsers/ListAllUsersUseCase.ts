import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const listId = this.usersRepository.findById(user_id);

    if (listId.admin !== true) {
      throw new Error(' user is not a admin');
    }
    if (!listId) {
      throw new Error(' user not exist');
    }
    const list = this.usersRepository.list();

    return list;
  }
}

export { ListAllUsersUseCase };
