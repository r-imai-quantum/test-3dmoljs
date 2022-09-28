viewer = $3Dmol.createViewer($("#3dmolviewer"),{backgroundColor:"white"});

let atoms = [
    {elem: "O", x: 0, y: 0, z: 0},
    {elem: "H", x: 0.761561, y: 0.478993, z: 0},
    {elem: "H", x: -0.761561, y: 0.478993, z: 0}
]
var m = viewer.addModel()
m.addAtoms(atoms)
m.setStyle({}, {sphere: {radius: 0.3}})

isoval = 0.01
$.get("./cubes/h2o_mo_2.cube", function (cubedata) {
    viewer.addVolumetricData(cubedata, "cube", {isoval: -isoval, color: "red", opacity: 0.7});
    viewer.addVolumetricData(cubedata, "cube", {isoval: isoval, color: "blue", opacity: 0.7});
    viewer.render();
});

viewer.zoomTo();