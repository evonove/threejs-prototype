(function () {
    'use strict';

    // this is just a Three.js example
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // set up lights
    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );
    scene.fog = new THREE.Fog(0x000, 0, 10);

    // generate plane
    var geometry = generateSimplexPlaneGeometry();
    var material = new THREE.MeshBasicMaterial( {morphTargets: true, color: 0xffffff, wireframe: true, side: THREE.DoubleSide } );
    var plane = new THREE.Mesh( geometry, material );

    var morphGeometry = generateSimplexPlaneGeometry();
    var vertices = [];
    for(var i = 0; i < morphGeometry.vertices.length; i++) {
        vertices.push(morphGeometry.vertices[i].clone());
    }
    console.log("vertices lenght: " + vertices.length + " - " + plane.geometry.vertices.length);
    geometry.morphTargets.push({ name: "targetFoo", vertices: vertices });
    plane.updateMorphTargets();

    scene.add( plane );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( 0, 1, 0 );
    scene.add( directionalLight );

    plane.scale.x = 6.0;
    plane.scale.z = 6.0;
    plane.scale.multiplyScalar(2);

    //plane.scale.y = 3.0;
    //plane.scale.z = 10;

    camera.position.z = 5;
    camera.position.y = 2;


    var step = 0.001;
    render();

    function generateSimplexPlaneGeometry() {
        var width = 100;
        var height = 100;
        var geometry = new THREE.PlaneGeometry( 1, 1, width-1, height-1 );
        geometry.lookAt( new THREE.Vector3(0, 1, 0) );

        var simplex = new SimplexNoise();
        for( var i = 0; i < width; i++) {
            for( var j = 0; j < height; j++) {

                // generate noise
                var n = 0;
                var level = 3;
                n += (simplex.noise(i/level, j/level)/2 + 0.5) * 0.125;
                level *= 3;
                n += (simplex.noise(i/level, j/level)/2 + 0.5) * 0.25;
                level *= 2;
                n += (simplex.noise(i/level, j/level)/2 + 0.5) * 0.5;
                level *= 2;
                n += (simplex.noise(i/level, j/level)/2 + 0.5) * 1;
                n /= 1+0.5+0.25+0.125;

                var v = geometry.vertices[i * width + j];
                v.y = n;
            }
        }

        return geometry;
    }

    function render() {
        requestAnimationFrame( render );

        var current = plane.morphTargetInfluences[0];
        console.log("current morph influence " + current);
        console.log("morph", plane.geometry.morphTargets[0].name);

        if (current > 1.0) {
            step = -0.001;
        } else if (current <= 0.0) {
            step = 0.001;
        }

        plane.morphTargetInfluences[0] += step

        renderer.render(scene, camera);
    }

})();
