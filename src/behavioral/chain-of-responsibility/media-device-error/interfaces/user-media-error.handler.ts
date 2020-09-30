export interface UserMediaErrorHandler {

    setNext(handler: UserMediaErrorHandler): UserMediaErrorHandler;

    handle(request: string): string;

}
