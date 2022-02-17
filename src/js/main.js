import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import preloader from './components/preloader';
import makeHover from './components/nav-menu';
// import {createAppSliderMain} from './components/appSliderMain';
import createAppSliderPartner from './components/appSliderPartner';
import addMask from './components/mask';
// import {animationHeader} from './components/animation';

ieFix();
vhFix();

actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

preloader();
makeHover();
// createAppSliderMain();
createAppSliderPartner();
addMask();
