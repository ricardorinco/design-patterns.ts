import { IEnchantment } from './../interfaces/ienchantment';

export class SoulEatingEnchantment implements IEnchantment {

    public onActivate(): void {
        console.log('The item spreads bloodlust.');
    }

    public apply(): void {
        console.log(`The item eats the soul of enemies.`);
    }

    public onDeactivate(): void {
        console.log(`Bloodlust slowly disappears.`);
    }

}
