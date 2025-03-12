import { expect } from 'chai';
import sinon from 'sinon';
import { assertEqual, assertNotEqual, assertTypedArray, disableDebugAssertion } from './assert.mjs';

describe('Custom Assertion Module', function() {
    let consoleAssertStub;

    beforeEach(function() {
        consoleAssertStub = sinon.stub(console, 'assert');
    });

    afterEach(function() {
        consoleAssertStub.restore();
    });

    it('should assert equal values', function() {
        assertEqual(1, 1, 'Test message');
        expect(consoleAssertStub.calledOnceWith(true, 'Values not equal - Test message')).to.be.true;
    });

    it('should assert not equal values', function() {
        assertNotEqual(1, 2, 'Test message');
        expect(consoleAssertStub.calledOnceWith(true, 'Values the same - Test message')).to.be.true;
    });

    it('should assert typed array', function() {
        const typedArray = new Uint8Array(10);
        assertTypedArray(typedArray, 'Test message');
        expect(consoleAssertStub.calledOnceWith(true, 'Assertion Failed: Not Typed Array - Test message')).to.be.true;
    });

    it('should disable debug assertions', function() {
        disableDebugAssertion();
        assertEqual(1, 2, 'Test message');
        assertNotEqual(1, 1, 'Test message');
        assertTypedArray({}, 'Test message');
        expect(consoleAssertStub.notCalled).to.be.true;
    });
});

