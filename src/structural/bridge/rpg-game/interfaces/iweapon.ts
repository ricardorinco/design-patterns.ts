import { IEnchantment } from './ienchantment';

export interface IWeapon {

    wield(): void;
    swing(): void;
    unwield(): void;
    
    getEnchantment(): IEnchantment;

}