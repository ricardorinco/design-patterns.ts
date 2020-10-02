import { ClubbedTroll } from './structural/decorator/troll/creatures/clubbed-troll';
import { SimpleTroll } from './structural/decorator/troll/creatures/simple-troll';

let troll = new SimpleTroll();
troll.attack();
troll.fleeBattle();

troll = new ClubbedTroll(troll);
troll.attack();
troll.fleeBattle();