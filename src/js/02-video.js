import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_PLAER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onplay,1000));

function onplay({seconds}) { 
   localStorage.setItem(TIME_PLAER_KEY, JSON.stringify(seconds));
}
const actualTime = JSON.parse(localStorage.getItem(TIME_PLAER_KEY));

actualTime?player.setCurrentTime(actualTime):player.setCurrentTime(0);







