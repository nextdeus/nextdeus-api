import CRUDController from './Controller';
import WebsitesService from '@services/websites.service';

class WebsitesController extends CRUDController {
  public service = new WebsitesService();
}

export default WebsitesController;
