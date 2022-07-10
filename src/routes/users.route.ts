import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { Routes } from '@interfaces/routes.interface';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getAll);
    this.router.get(`${this.path}/:id`, this.usersController.getById);
    this.router.post(`${this.path}`, this.usersController.create);
    this.router.put(`${this.path}/:id`, this.usersController.update);
    this.router.delete(`${this.path}/:id`, this.usersController.destroy);
  }
}

export default UsersRoute;
