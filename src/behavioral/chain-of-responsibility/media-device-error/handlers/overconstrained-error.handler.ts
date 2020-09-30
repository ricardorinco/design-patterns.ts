import { AbstractUserMediaErrorHandler } from './abstract-user-media-error.handler';

export class OverconstrainedErrorHandler extends AbstractUserMediaErrorHandler {

    public handle(request: string): string {
        if (request === 'OverconstrainedError' || request === 'ConstraintNotSatisfiedError') {
            return 'Resolution is not supported by your device';
        }

        return super.handle(request);
    }

}
