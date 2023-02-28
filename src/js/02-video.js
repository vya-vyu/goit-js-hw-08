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
player.setCurrentTime(actualTime);

// player.setCurrentTime(actualTime).then(function(actualTime) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });






