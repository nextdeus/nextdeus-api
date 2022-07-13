import CRUDController from './Controller';
import ProvidersService from '@/services/providers.service';

class ProvidersController extends CRUDController {
  public service = new ProvidersService();
}

export default ProvidersController;
