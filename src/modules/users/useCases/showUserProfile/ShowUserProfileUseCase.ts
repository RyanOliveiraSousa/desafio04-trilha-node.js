import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const getUserId = this.usersRepository.findById(user_id);
    if (!getUserId) {
      throw new Error(' user not found ');
    }

    return getUserId;
  }
}

export { ShowUserProfileUseCase };
