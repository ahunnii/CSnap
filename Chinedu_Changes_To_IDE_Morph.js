// /**
//  * function below allows for adding icosahedron shape to scene
//  * @param myself CSnap world
//  * @param radius default is set to 5
//  * @param detail default is set to 1, changing this will effectively make this a sphere so be careful with this
//  * @param colorParam default is set to blue but we can pass in any color we like
//  * for reference see https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry
//  */
// IDE_Morph.prototype.addCustom3DPolygonIcosahedron = function (myself, radius, detail, colorParam){
//
//     let icosahedron = function () {
//         if (radius === undefined || detail === undefined){
//             radius = 5;
//             detail = 0;
//         }
//
//         let enteredColorToLowerCase = colorParam.toLowerCase();
//         let color = "";
//         let emissive = "";
//
//         if (enteredColorToLowerCase !== undefined){
//             color = new THREE.Color(enteredColorToLowerCase);
//             emissive = color;
//         } else {
//             color = new THREE.Color( 'blue' );
//             emissive = color;
//         }
//
//         console.log(color);
//         console.log(emissive);
//
//
//         let geometry = new THREE.IcosahedronGeometry(radius, detail);
//         let material = new THREE.MeshLambertMaterial({ emissive: emissive, color: color });
//         return new THREE.Mesh(geometry, material);
//     };
//
//     //TODO Add icosahedron as a costume to CSnap's stage.
//     // Unsure about below, let's see if it works
//
//     this.currentSprite.addCostume(icosahedron());
//     this.currentSprite.wearCostume(icosahedron());
//     this.spriteBar.tabBar.tabTo('costumes');
//     this.hasChangedMedia = true;
// };