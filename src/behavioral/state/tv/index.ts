import { TvContext } from './context/tv-context';
import { TvStartState } from './states/tv-start.state';
import { TvStopState } from './states/tv-stop.state';

const tvControlRemote = new TvContext();
const tvStart = new TvStartState();
const tvStop = new TvStopState();

tvControlRemote.setState(tvStart);
tvControlRemote.doAction();

tvControlRemote.setState(tvStop);
tvControlRemote.doAction();