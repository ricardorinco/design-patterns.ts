import { AbstractUserMediaErrorHandler } from './abstract-user-media-error.handler';

export class NotReadableErrorHandler extends AbstractUserMediaErrorHandler {

    public handle(request: string): string {
        if (request === 'NotReadableError' || request === 'TrackStartError') {
            return `The user's camera is already in use`;
        }

        return super.handle(request);
    }
}
