import { ActionListenerCommand } from './../interfaces/action-listener.command';
export class ActionsOptions {

    private closeCommand: ActionListenerCommand;
    private openCommand: ActionListenerCommand;
    private saveCommand: ActionListenerCommand;

    constructor(
        closeCommand: ActionListenerCommand,
        openCommand: ActionListenerCommand,
        saveCommand: ActionListenerCommand
    ) {
        this.closeCommand = closeCommand;
        this.openCommand = openCommand;
        this.saveCommand = saveCommand;
    }

    public close(): void {
        this.closeCommand.execute();
    }

    public open(): void {
        this.openCommand.execute();
    }

    public save(): void {
        this.saveCommand.execute();
    }

}