import { NotReadableErrorHandler } from './handlers/not-readable-error.handler';
import { OverconstrainedErrorHandler } from './handlers/overconstrained-error.handler';
import { PermissionDeniedErrorHandler } from './handlers/permission-denied-error.handler';

export class MediaDeviceErrors {
    private notReadableErrorHandler = new NotReadableErrorHandler();
    private overconstrainedErrorHandler = new OverconstrainedErrorHandler();
    private permissionDeniedErrorHandler = new PermissionDeniedErrorHandler();

    constructor() {
        this.notReadableErrorHandler
            .setNext(this.overconstrainedErrorHandler)
            .setNext(this.permissionDeniedErrorHandler);
    }

    public handler(erro: string): string {
        return this.notReadableErrorHandler.handle(erro);
    }
}
