import PagesService from '@/services/pages.service';
import Controller from './Controller';

class PagesController extends Controller {
  public service = new PagesService();
}

export default PagesController;