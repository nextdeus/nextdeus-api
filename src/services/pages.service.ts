import DB from '@/databases';
import Service from '@/services/Service';

class PagesService extends Service {
  constructor() {
    super('Pages');
    this.unique_keys = ['slug', 'website_id'];
    this.required_keys = ['title', 'slug', 'website_id'];
    this.include = [
      {
        model: DB.Websites,
        as: 'website',
      },
    ];
  }
}

export default PagesService;
