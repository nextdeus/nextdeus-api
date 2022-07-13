import DB from '@/databases';
import Service from './Service';

class ProvidersService extends Service {
  constructor() {
    super('Providers');
    this.required_keys = ['page', 'component'];
    this.include = [
      {
        model: DB.Pages,
        as: 'page',
      },
      {
        model: DB.Styles,
        as: 'style',
      },
      {
        model: DB.Components,
        as: 'component',
      },
    ];
  }
}

export default ProvidersService;
