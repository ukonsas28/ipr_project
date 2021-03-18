import * as Boom from '@hapi/boom';
import { constants as StatusCodes } from 'http2';

class AppErrors extends Error {
  private statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }

  public static generateError = (errorData: any): Error => {
    const {
      message,
      statusCode = errorData.statusCode ||
        StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE,
    } = errorData;
    const error = new Boom.Boom(message, { statusCode });
    return error;
  };
}

export default AppErrors;
