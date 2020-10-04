import { Wizard } from './../wizards/wizard';
import { WizardTower } from './../interfaces/wizard-tower';

export class IvoryTower implements WizardTower {

    public enter(wizard: Wizard): void {
        console.log(`${wizard} enters the tower.`);
    }

}