import { Context } from './context';

export class Expression {

    constructor(
        private name: string, 
        private command: string
    ) {
        this.name = name;
        this.command = command;
    }

    public interpret(context: Context) {
        if (context.input.length == 0) {
            return;
        } else if (context.startsWith(this.name)) {
            context.output = {
                ...context.output,
                [this.command]: ['small', 'medium', 'large'].includes(this.name)
                    ? this.name
                    : true,
            };

            context.input = context.input
                .split(' ')
                .filter((item) => item !== this.name)
                .join(' ');
        }
    }
}