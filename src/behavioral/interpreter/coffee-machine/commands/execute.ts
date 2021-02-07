import { Context } from './context';
import { Expression } from './expression';

export class Execute {

    public run(sentence: string) {
        const context = new Context(sentence);
        const tree = [];
    
        tree.push(new Expression('make', 'startCommand'));
        tree.push(new Expression('hi', 'startCommand'));
        tree.push(new Expression('hey', 'startCommand'));
    
        tree.push(new Expression('thanks', 'endCommand'));
        tree.push(new Expression('hurry up', 'endCommand'));
    
        tree.push(new Expression('espresso', 'espresso'));
        tree.push(new Expression('cappuccino', 'cappuccino'));
    
        tree.push(new Expression('small', 'size'));
        tree.push(new Expression('medium', 'size'));
        tree.push(new Expression('large', 'size'));
    
        for (var i = 0, len = tree.length; i < len; i++) {
            tree[i].interpret(context);
        }
    
        console.log(`
            I'm ${context.output.startCommand ? 'starting' : 'not starting'} prepare your
            ${context.output.size} ${context.output.espresso ? 'espresso' : 'cappuccino'}.
            ${ context.output.endCommand ? 'Have a good day!' : 'What else I can help you?' }
        `);
    }

}

