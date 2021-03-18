import AppErrors from '../errors';

export function TryCatchDecorator(
  target: any,
  name: any,
  descriptor: any
): any {
  return {
    async value(request: any): Promise<any> {
      try {
        const response = await descriptor.value(request);
        return response;
      } catch (e) {
        return AppErrors.generateError(e);
      }
    },
  };
}
