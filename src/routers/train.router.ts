import { Request, Response, Router } from "express";

export class TrainRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.addRoutes();
  }

  /**
   * getRouter
   * @returns returns the account router with all the access points.
   */
  public getRouter() {
    return this.router;
  }

  private addRoutes() {
    this.router.route("/check-in")
      .post((req, res) => res.sendStatus(200));
    this.router.route("/check-out")
      .post((req, res) => res.sendStatus(200));
    this.router.route("/arrived-at/:id")
      .get((req, res) => res.send([]));
  }
}
