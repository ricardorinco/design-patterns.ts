import { IEnchantment } from './../interfaces/ienchantment';
import { IWeapon } from './../interfaces/iweapon';

export class Sword implements IWeapon {

    private enchantment: IEnchantment;

    constructor(enchantment: IEnchantment) {
        this.enchantment = enchantment;
    }

    public wield(): void {
        console.log('The sword is wielded.');

        this.enchantment.onActivate();
    }
    
    public swing(): void {
        console.log('The sword is swinged.');

        this.enchantment.apply();
    }
    
    public unwield(): void {
        console.log('The sword is unwielded.');

        this.enchantment.onDeactivate();
    }
    
    public getEnchantment(): IEnchantment {
        return this.enchantment;
    }

}