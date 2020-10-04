import { IvoryTower } from './towers/ivory-tower';
import { Wizard } from './wizards/wizard';
import { WizardTowerProxy } from './proxy/wizard-tower.proxy';

const proxy = new WizardTowerProxy(new IvoryTower());
proxy.enter(new Wizard('Red wizard'));
proxy.enter(new Wizard('White wizard'));
proxy.enter(new Wizard('Black wizard'));
proxy.enter(new Wizard('Green wizard'));
proxy.enter(new Wizard('Brown wizard'));