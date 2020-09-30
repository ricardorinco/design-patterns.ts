import { UserMediaErrorHandler } from './../interfaces/user-media-error.handler';

export abstract class AbstractUserMediaErrorHandler implements UserMediaErrorHandler {
    
    private nextHandler: UserMediaErrorHandler;

    public setNext(handler: UserMediaErrorHandler): UserMediaErrorHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return `There was a problem trying to use the user's camera`;
    }

}
