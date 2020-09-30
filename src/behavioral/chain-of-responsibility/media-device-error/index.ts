import { MediaDeviceErrors } from './media-device-errors';

const mediaDeviceErrors = new MediaDeviceErrors();
console.log(mediaDeviceErrors.handler('PermissionDeniedError'));
console.log(mediaDeviceErrors.handler('OverconstrainedError'));
console.log(mediaDeviceErrors.handler('NotReadableError'));
console.log(mediaDeviceErrors.handler('Default'));