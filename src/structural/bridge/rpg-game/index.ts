import { FlyingEnchantment } from './enchantments/flying.enchantment';
import { Hammer } from './weapons/hammer.weapon';
import { SoulEatingEnchantment } from './enchantments/soul-eating.enchantment';
import { Sword } from './weapons/sword.weapon';

console.log('The knight receives an enchanted sword.')
const enchantedSword = new Sword(new SoulEatingEnchantment);
enchantedSword.wield();
enchantedSword.swing();
enchantedSword.unwield();

console.log('\nThe valkyrie receives an enchanted hammer.')
const enchantedHammer = new Hammer(new FlyingEnchantment);
enchantedHammer.wield();
enchantedHammer.swing();
enchantedHammer.unwield();