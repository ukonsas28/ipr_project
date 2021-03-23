import AppErrors from '../errors';

export function TryCatchDecorator(
  target: any,
  name: any,
  descriptor: any
): any {
  return {
    async value(request: any, token?: any): Promise<any> {
      try {
        const response = await descriptor.value(request, token);
        return response;
      } catch (e) {
        return AppErrors.generateError(e);
      }
    },
  };
}
