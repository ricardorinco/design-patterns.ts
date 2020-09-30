import { IEnchantment } from './../interfaces/ienchantment';

export class FlyingEnchantment implements IEnchantment {

    public onActivate(): void {
        console.log('The item begins to glow faintly.');
    }

    public apply(): void {
        console.log(`The item flies and strikes the enemies finally returning to owner's hand.`);
    }

    public onDeactivate(): void {
        console.log(`The item's glow fades.`);
    }

}
