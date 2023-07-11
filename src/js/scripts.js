import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars2.jpeg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img/mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturnTexture from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import uranusTexture from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';
import moonTexture from '../img/moon.jpeg'

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sets the color of the background
// renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning
camera.position.set(-290, 90, 250);
orbit.update();

// Sets a 12 by 12 gird helper
// const gridHelper = new THREE.GridHelper(12, 12);
// scene.add(gridHelper);

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight)

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

const textureLoader = new THREE.TextureLoader();

const pointLight = new THREE.PointLight(0xffffff, 2, 300)

const sunGeo = new THREE.SphereGeometry(30, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo, sunMat)
scene.add(sun)
scene.add(pointLight)

// mercury
const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30);
const mercuryMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(mercuryTexture)
});
const mercury = new THREE.Mesh(mercuryGeo, mercuryMat)
const mercuryObj = new THREE.Object3D()
mercuryObj.add(mercury)
scene.add(mercuryObj)
mercury.position.set(30, 0, 20)

// venus
const venusGeo = new THREE.SphereGeometry(6, 30, 30);
const venusMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(venusTexture)
});
const venus = new THREE.Mesh(venusGeo, venusMat)
const venusObj = new THREE.Object3D()
venusObj.add(venus)
scene.add(venusObj)
venus.position.set(30, 0, 40)

// earth
const earthGeo = new THREE.SphereGeometry(6, 30, 30);
const earthMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(earthTexture)
});
const earth = new THREE.Mesh(earthGeo, earthMat)
const earthObj = new THREE.Object3D()
earthObj.add(earth)
scene.add(earthObj)
earth.position.set(40, 0, 60)

// moon
const moonGeo = new THREE.SphereGeometry(1, 30, 30);
const moonMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(moonTexture)
});
const moon = new THREE.Mesh(moonGeo, moonMat)
const moonObj = new THREE.Object3D()
moonObj.add(moon)
earth.add(moonObj)
moon.position.set(10, 0, 10)
moon.rotation.x = 0.2 * Math.PI

// mars
const marsGeo = new THREE.SphereGeometry(4, 30, 30);
const marsMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(marsTexture)
});
const mars = new THREE.Mesh(marsGeo, marsMat)
const marsObj = new THREE.Object3D()
marsObj.add(mars)
scene.add(marsObj)
mars.position.set(40, 10, 80)

// jupiter
const jupiterGeo = new THREE.SphereGeometry(15, 30, 30);
const jupiterMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(jupiterTexture)
});
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMat)
const jupiterObj = new THREE.Object3D()
jupiterObj.add(jupiter)
scene.add(jupiterObj)
jupiter.position.set(30, 0, 120)

// saturn
const saturnGeo = new THREE.SphereGeometry(10, 30, 30)
const saturnMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(saturnTexture)
})
const saturn = new THREE.Mesh(saturnGeo, saturnMat)
const saturnObj = new THREE.Object3D()
saturnObj.add(saturn)
scene.add(saturnObj)
saturn.position.set(20, 0, 160)

// saturn ring
const saturnRingGeo = new THREE.RingGeometry(10, 20, 32)
const saturnRingMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(saturnRingTexture),
    side: THREE.DoubleSide

})
const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat)
saturnObj.add(saturnRing)
saturnRing.position.set(20, 0, 160)
saturnRing.rotation.x = 0.5 * Math.PI

// uranus
const uranusGeo = new THREE.SphereGeometry(5, 30, 30)
const uranusMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(uranusTexture)
})
const uranus = new THREE.Mesh(uranusGeo, uranusMat)
const uranusObj = new THREE.Object3D()
uranusObj.add(uranus)
scene.add(uranusObj)
uranus.position.set(0, 0, 180)

//  uranus ring
const uranusRingGeo = new THREE.RingGeometry(5, 10, 32)
const uranusRingMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(uranusRingTexture),
    side: THREE.DoubleSide

})
const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMat)
uranusObj.add(uranusRing)
uranusRing.position.set(0, 0, 180)
uranusRing.rotation.x = 0.25 * Math.PI

//  Neptune
const neptuneGeo = new THREE.SphereGeometry(4, 30, 30)
const neptuneMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(neptuneTexture)
})
const neptune = new THREE.Mesh(neptuneGeo, neptuneMat)
const neptuneObj = new THREE.Object3D()
neptuneObj.add(neptune)
scene.add(neptuneObj)
neptune.position.x = 195










// pluto
const plutoGeo =new THREE.SphereGeometry(2, 30, 30)
const plutoMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(plutoTexture)
})
const pluto = new THREE.Mesh(plutoGeo, plutoMat)
const plutoObj = new THREE.Object3D()
plutoObj.add(pluto)
scene.add(plutoObj)
pluto.position.x = 195


function animate() {
    sun.rotateY(0.002)
    mercury.rotateY(0.01)
    mercuryObj.rotateY(0.01)
    venus.rotateY(0.005)
    venusObj.rotateY(0.005)
    earth.rotateY(0.01)
    earthObj.rotateY(0.004)
    moon.rotateY(0.02)
    moonObj.rotateY(-0.05)
    mars.rotateY(0.05)
    marsObj.rotateY(0.005)
    jupiter.rotateY(0.03)
    jupiterObj.rotateY(0.003)
    saturn.rotateY(0.01)
    saturnObj.rotateY(0.002)
    uranus.rotateY(0.01)
    uranusObj.rotateY(0.001)
    neptune.rotateY(0.01)
    neptuneObj.rotateY(0.001)
    pluto.rotateY(0.01)
    plutoObj.rotateY(0.0008)

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});