import { WebsiteModel } from '@/models/websites.model';
import Service from '@/services/Service';

class PagesService extends Service {
  constructor() {
    super('Pages');
    this.unique_keys = ['slug', 'website_id'];
    this.required_keys = ['title', 'slug', 'website_id'];
    this.include = [
      {
        model: WebsiteModel,
        as: 'website',
      },
    ];
  }
}

export default PagesService;
