import { Wizard } from './../wizards/wizard';
import { WizardTower } from './../interfaces/wizard-tower';

export class WizardTowerProxy implements WizardTower {

    private readonly NUM_WIZARDS_ALLOWED  = 3;
    private numWizards: number;
    private readonly tower: WizardTower;

    constructor(tower: WizardTower) {
        this.tower = tower;
        this.numWizards = 0;
    }

    public enter(wizard: Wizard): void {
        if (this.numWizards < this.NUM_WIZARDS_ALLOWED) {
            this.tower.enter(wizard);
            this.numWizards++;
        } else {
            console.log(`${wizard} is not allowed to enter!`);
        }
    }

}