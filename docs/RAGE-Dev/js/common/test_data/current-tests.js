
let mesh, v1, v2, v3, m, model;

function test1() {
    mesh = rage.createMesh();
    v1 = rage.createVertex(0, 0, 0);
    v1.setColor(255, 0, 0, 255);
    v2 = rage.createVertex(1, 0, 0);
    v2.setColor(0, 255, 0, 255);
    v3 = rage.createVertex(0, 1, 0);
    v3.setColor(0, 0, 255, 255);
    mesh.addTriplet(v1, v2, v3);
    m = rage.createMatrix();
    model = rage.createModel();
    model.addMesh(mesh);
    
    return model.getVertexBufferData(m);
}   