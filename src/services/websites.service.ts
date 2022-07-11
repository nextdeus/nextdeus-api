import { UserModel } from '@/models/users.model';
import Service from './Service';

class WebsitesService extends Service {
  constructor() {
    super('Websites');
    this.unique_keys = ['title', 'user_id'];
    this.include = [
      {
        model: UserModel,
        as: 'user',
      },
    ];
  }
}

export default WebsitesService;
