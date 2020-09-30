import { AbstractUserMediaErrorHandler } from './abstract-user-media-error.handler';

export class PermissionDeniedErrorHandler extends AbstractUserMediaErrorHandler {

    public handle(request: string): string {
        if (request === 'PermissionDeniedError' || request === 'NotAllowedError') {
            return 'Permissions to use your camera were not provided';
        }

        return super.handle(request);
    }

}
