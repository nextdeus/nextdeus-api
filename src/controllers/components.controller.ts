import ComponentsService from '@/services/components.service';
import Controller from './Controller';

class ComponentsController extends Controller {
  public service = new ComponentsService();
}

export default ComponentsController;
