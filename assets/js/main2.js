var panorama, panorama2,panorama3, viewer, container, infospot1,infospot2,infospot3,infospot4,infospot5,infospot6, progress, progressElement;
  container = document.querySelector('#container');

  progressElement = document.getElementById( 'progress' );

  function onEnter() {
    progressElement.style.width = 0;
    progressElement.classList.remove('finish');
  }

  function onProgress(event) {
    progress = event.progress.loaded / event.progress.total * 100;
    progressElement.style.width = progress + '%';
    if (progress === 100) {
      progressElement.classList.add('finish');
    }
  }

  panorama = new PANOLENS.ImagePanorama('/assets/img/showroom20.jpg');
  panorama.addEventListener('progress', onProgress);
  panorama.addEventListener('enter', onEnter);

  
  
  panorama2 = new PANOLENS.ImagePanorama('/assets/img/newimage360.jpg');
  panorama2.addEventListener('progress', onProgress);
  panorama2.addEventListener('enter', onEnter);

  panorama3 = new PANOLENS.ImagePanorama('/assets/img/image360.jpeg');
  panorama3.addEventListener('progress', onProgress);
  panorama3.addEventListener('enter', onEnter);

  panorama.link(panorama2, new THREE.Vector3(1970.90, -650, -3000),120);
  panorama2.link(panorama, new THREE.Vector3(2810, -1000, -3000),200);
  panorama.link(panorama3, new THREE.Vector3(-6000.00, -820, -800),200);
  panorama3.link(panorama, new THREE.Vector3(-300, -1500, -3000),200);

  infospot1 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info);
  infospot1.position.set( -3000.00, -1825.25, -1400 );
  infospot1.addHoverElement(document.getElementById('desc-container'), 150);
  panorama.add(infospot1);

  infospot2 = new PANOLENS.Infospot(20, PANOLENS.DataImage.Info);
  infospot2.position.set(400,-120, 200);
  infospot2.addHoverElement(document.querySelector('.volant'), 150);
    
  
  panorama2.add(infospot2);

  infospot3 = new PANOLENS.Infospot(200,PANOLENS.DataImage.Info);
  infospot3.position.set(-3200, -1200, -3000);
  infospot3.addHoverElement(document.querySelector('.turbo'), 150);

  
    
  
  panorama3.add(infospot3);

  infospot4 = new PANOLENS.Infospot(100,'/assets/img/rond.png');
  infospot4.position.set(200.00, -650, -1400);
  infospot4.addHoverElement(document.querySelector('.pneu'), 150);
  panorama.add(infospot4);

  infospot5 = new PANOLENS.Infospot(140,'/assets/img/touche.png');
  infospot5.position.set(-50.00, -190, -1400);
  infospot5.addHoverElement(document.querySelector('.feu'), 150);
  panorama.add(infospot5);

  infospot6 = new PANOLENS.Infospot(140,'assets/img/touche.png');
  infospot6.position.set(1450.00, -225, -1400);
  infospot6.addHoverElement(document.querySelector('.retro'), 150);
  panorama.add(infospot6);

  viewer = new PANOLENS.Viewer({
    container: container,
    // autoRotate: true,
    // autoRotateSpeed: 1,
    // autoRotateActivationDuration: 5000
  });
  viewer.add(panorama, panorama2,panorama3);
