import { ClubbedTroll } from './creatures/clubbed-troll';
import { SimpleTroll } from './creatures/simple-troll';

let troll = new SimpleTroll();
troll.attack();
troll.fleeBattle();

troll = new ClubbedTroll(troll);
troll.attack();
troll.fleeBattle();