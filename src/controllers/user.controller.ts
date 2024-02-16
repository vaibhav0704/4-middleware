import { Request, Response } from "express";
import { makeResponse } from "libs/make-response";
import { UserService } from "services/user.service";

export class UserController extends UserService {
  public createUser = async (
    req: Request,
    res: Response
  ) => {
    try {
      const user = await this.createUserS(req.body);
      res.send(makeResponse(user, 'Success')).status(200);
    } catch (err: any) {
      console.error('controllr error', err)
      res.send(makeResponse(null, 'Failed', [{ message: err.message }]));
    }
  };

  public getUsers = async (
    req: Request,
    res: Response
  ) => {
    try {
      const users = await this.getUsersS();
      res.send(makeResponse(users, 'Success')).status(200);
    } catch (err: any) {
      console.error('controller error', err);
      res.send(makeResponse(null, 'Failed', [{ message: err.message }]));
    }
  }

  public updateUser = async (
    req: Request,
    res: Response
  ) => {
    try {
      const user = await this.updateUserS(req.params.id, req.body);
      res.send(makeResponse(user, 'Success')).status(200);
    } catch (err: any) {
      console.error('controller error', err);
      res.send(makeResponse(null, 'Failed', [{ message: err.message }]));
    }
  }

  public deleteUser = async (
    req: Request,
    res: Response
  ) => {
    try {
      const message = await this.deleteUserS(req.params.id);
      res.send(makeResponse(message, 'Success')).status(200);
    } catch (err: any) {
      console.error('controller error', err);
      res.send(makeResponse(null, 'Failed', [{ message: err.message }]));
    }
  }
}