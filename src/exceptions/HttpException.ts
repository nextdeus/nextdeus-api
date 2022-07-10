export class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class NotFoundDeleteException extends HttpException {
  constructor() {
    super(409, `We cannot delete a resource that does not exist`);
  }
}

export class NotFoundUpdateException extends HttpException {
  constructor() {
    super(409, `We cannot update a resource that does not exist`);
  }
}

export class EmptyBodyException extends HttpException {
  constructor() {
    super(400, `The body of the request is empty`);
  }
}

export class RessourceNotFoundException extends HttpException {
  constructor() {
    super(404, `We cannot find the requested resource`);
  }
}

export class MissingIdException extends HttpException {
  constructor() {
    super(400, `The id of the ressource is missing from the request`);
  }
}

export class MissingFieldException extends HttpException {
  constructor(field: string) {
    super(400, `The following field is missing from the body: ${field}`);
  }
}