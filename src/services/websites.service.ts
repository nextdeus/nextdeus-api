import DB from '@databases';
import { EmptyBodyException, HttpException, NotFoundDeleteException, NotFoundUpdateException, RessourceNotFoundException, MissingIdException } from '@exceptions/HttpException';
import { Website } from '@/interfaces/websites.interface';
import { UserModel } from '@/models/users.model';
import { isEmpty } from '@utils/util';
import Service from './Service';

class WebsitesService extends Service {

    constructor() {
        super("Websites");
        this.unique_keys = ["title", "user_id"];
        this.include = [
            {
                model: UserModel,
                as: "user"
            }
        ]
    }

}

export default WebsitesService;