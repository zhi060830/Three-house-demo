import *  as THREE from 'three';
import foundation from './foundation.js';
import sidewall from './side-wall.js';
import behindWall from './behind-wall.js';
import frontWall from './front-wall.js';
import roof from './roof.js';
import doorstep from './doorstep.js';
import grass from './grass.js';

const house = new THREE.Group();

const sidewall2 = sidewall.clone()

sidewall.rotateY(Math.PI/2)
sidewall.translateZ(-2000)
sidewall.translateX(1500)
sidewall.translateY(150)

sidewall2.rotateY(Math.PI/2)
sidewall2.translateZ(1900)
sidewall2.translateX(1500)
sidewall2.translateY(150)


house.add(foundation);
house.add(sidewall)
house.add(sidewall2)
house.add(behindWall)
house.add(frontWall)
house.add(roof)
house.add(doorstep)
house.add(grass);

const roof2 = roof.clone();
roof2.rotateX( 70 / 180 * Math.PI);
roof2.position.z = -roof.position.z;

house.add(roof2);


export default house;