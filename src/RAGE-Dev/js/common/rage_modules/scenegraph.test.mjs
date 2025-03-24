import { expect } from 'chai';
import sinon from 'sinon';
import { SceneGraph, SceneNode, Transform } from './scenegraph.mjs';
import { Matrix } from './matrix.mjs';
import { Vector3 } from './vector.mjs';

describe('SceneGraph', () => {
    let sceneGraph;

    beforeEach(() => {
        sceneGraph = new SceneGraph();
    });

    it('should initialize with default values', () => {
        expect(sceneGraph.rage).to.be.false;
        expect(sceneGraph.root).to.be.instanceOf(SceneNode);
        expect(sceneGraph.projectionMatrix).to.be.instanceOf(Matrix);
    });

    it('should add and remove nodes', () => {
        const node = new SceneNode('child');
        sceneGraph.addNode(node);
        expect(sceneGraph.root.children).to.include(node);

        sceneGraph.removeNode(node);
        expect(sceneGraph.root.children).to.not.include(node);
    });

    it('should create view matrix', () => {
        const rageMock = { canvas: { width: 800, height: 600 } };
        const testMatrix = new Matrix();
        sceneGraph.attachToRenderer(rageMock);
        const createProjectionSpy = sinon.spy(sceneGraph.projectionMatrix, 'createPerspective');
        sceneGraph.createViewMatrix(45, 0.1, 1000);
        expect(createProjectionSpy.calledOnceWith(800, 600, 45, 0.1, 1000)).to.be.true;
    });
});

describe('SceneNode', () => {
    let node;

    beforeEach(() => {
        node = new SceneNode('testNode');
    });

    it('should initialize with default values', () => {
        expect(node.name).to.equal('testNode');
        expect(node.children).to.be.an('array').that.is.empty;
        expect(node.parent).to.be.null;
        expect(node.transform).to.be.instanceOf(Transform);
        expect(node.models).to.be.an('array').that.is.empty;
    });

    it('should add and remove child nodes', () => {
        const childNode = new SceneNode('child');
        node.addChild(childNode);
        expect(node.children).to.include(childNode);
        expect(childNode.parent).to.equal(node);

        node.removeChild(childNode);
        expect(node.children).to.not.include(childNode);
        expect(childNode.parent).to.be.null;
    });

    it('should update all child nodes', () => {
        const childNode = new SceneNode('child');
        const updateSpy = sinon.spy(childNode, 'update');
        node.addChild(childNode);
        node.update();
        expect(updateSpy.calledOnce).to.be.true;
    });

    it('should render all child nodes', () => {
        const childNode = new SceneNode('child');
        const renderSpy = sinon.spy(childNode, 'render');
        node.addChild(childNode);
        node.render();
        expect(renderSpy.calledOnce).to.be.true;
    });

    it('should attach and detach models', () => {
        const model = {};
        node.attachModel(model);
        expect(node.models).to.include(model);

        node.detachModel(model);
        expect(node.models).to.not.include(model);
    });
});

describe('Transform', () => {
    let transform;

    beforeEach(() => {
        transform = new Transform();
    });

    it('should initialize with default values', () => {
        expect(transform.position).to.be.instanceOf(Vector3);
        expect(transform.rotation).to.be.instanceOf(Vector3);
        expect(transform.scale).to.be.instanceOf(Vector3);
        expect(transform.matrix).to.be.instanceOf(Matrix);
    });

    it('should update matrix on position change', () => {
        const updateMatrixSpy = sinon.spy(transform, 'updateMatrix');
        transform.setPosition(1, 2, 3);
        expect(updateMatrixSpy.calledOnce).to.be.true;
        expect(transform.position).to.deep.equal(new Vector3(1, 2, 3));
    });

    it('should update matrix on rotation change', () => {
        const updateMatrixSpy = sinon.spy(transform, 'updateMatrix');
        transform.setRotation(45, 45, 45);
        expect(updateMatrixSpy.calledOnce).to.be.true;
        expect(transform.rotation).to.deep.equal(new Vector3(45, 45, 45));
    });

    it('should update matrix on scale change', () => {
        const updateMatrixSpy = sinon.spy(transform, 'updateMatrix');
        transform.setScale(2, 2, 2);
        expect(updateMatrixSpy.calledOnce).to.be.true;
        expect(transform.scale).to.deep.equal(new Vector3(2, 2, 2));
    });
});
describe('SceneNode', () => {
    let node;
    let childNode;
    let model;
    let modelViewMatrix;

    beforeEach(() => {
        node = new SceneNode('testNode');
        childNode = new SceneNode('childNode');
        model = {
            getVertexCount: sinon.stub().returns(3),
            getVertexBufferData: sinon.stub().returns(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0])),
            getNormalBufferData: sinon.stub().returns(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1])),
            getUVBufferData: sinon.stub().returns(new Float32Array([0, 0, 1, 0, 0, 1])),
            getColorBufferData: sinon.stub().returns(new Float32Array([255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255]))
        };
        modelViewMatrix = new Matrix();
        modelViewMatrix.createIdentity();
    });

    it('should initialize with default values', () => {
        expect(node.name).to.equal('testNode');
        expect(node.children).to.be.an('array').that.is.empty;
        expect(node.parent).to.be.null;
        expect(node.transform).to.be.instanceOf(Transform);
        expect(node.models).to.be.an('array').that.is.empty;
    });

    it('should add and remove child nodes', () => {
        node.addChild(childNode);
        expect(node.children).to.include(childNode);
        expect(childNode.parent).to.equal(node);

        node.removeChild(childNode);
        expect(node.children).to.not.include(childNode);
        expect(childNode.parent).to.be.null;
    });

    it('should update all child nodes', () => {
        const updateSpy = sinon.spy(childNode, 'update');
        node.addChild(childNode);
        node.update();
        expect(updateSpy.calledOnce).to.be.true;
    });

    it('should render all child nodes', () => {
        const renderSpy = sinon.spy(childNode, 'render');
        node.addChild(childNode);
        node.render();
        expect(renderSpy.calledOnce).to.be.true;
    });

    it('should attach and detach models', () => {
        node.attachModel(model);
        expect(node.models).to.include(model);

        node.detachModel(model);
        expect(node.models).to.not.include(model);
    });

    it('should return the correct vertex count', () => {
        node.attachModel(model);
        expect(node.getVertexCount()).to.equal(3);

        node.addChild(childNode);
        childNode.attachModel(model);
        expect(node.getVertexCount()).to.equal(6);
    });

    it('should return the correct vertex buffer data', () => {
        node.attachModel(model);
        const data = node.getVertexBufferData(modelViewMatrix);
        expect(data).to.deep.equal(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]));

        node.addChild(childNode);
        childNode.attachModel(model);
        const combinedData = node.getVertexBufferData(modelViewMatrix);
        expect(combinedData).to.deep.equal(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0]));
    });

    it('should return the correct normal buffer data', () => {
        node.attachModel(model);
        const data = node.getNormalBufferData(modelViewMatrix);
        expect(data).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]));

        node.addChild(childNode);
        childNode.attachModel(model);
        const combinedData = node.getNormalBufferData(modelViewMatrix);
        expect(combinedData).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]));
    });

    it('should return the correct UV buffer data', () => {
        node.attachModel(model);
        const data = node.getUVBufferData();
        expect(data).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1]));

        node.addChild(childNode);
        childNode.attachModel(model);
        const combinedData = node.getUVBufferData();
        expect(combinedData).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]));
    });

    it('should return the correct vertex color buffer data', () => {
        node.attachModel(model);
        const data = node.getVertexColorBufferData();
        expect(data).to.deep.equal(new Float32Array([255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255]));

        node.addChild(childNode);
        childNode.attachModel(model);
        const combinedData = node.getVertexColorBufferData();
        expect(combinedData).to.deep.equal(new Float32Array([255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255]));
    });
});