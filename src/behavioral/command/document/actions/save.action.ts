import { ActionListenerCommand } from './../interfaces/action-listener.command';
import { DocumentFile } from './../file/document-file';

export class SaveAction implements ActionListenerCommand {

    private document: DocumentFile;

    constructor(document: DocumentFile) {
        this.document = document;
    }

    public execute(): void {
        this.document.save();
    }

}