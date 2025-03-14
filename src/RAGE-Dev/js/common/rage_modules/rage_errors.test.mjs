import { expect } from 'chai';
import sinon from 'sinon';
import { error } from './rage_errors.mjs';

describe('rage_errors', () => {
    let consoleErrorStub;

    beforeEach(() => {
        consoleErrorStub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        consoleErrorStub.restore();
    });

    it('should log "Forbidden" for error code 403', () => {
        error(403);
        expect(consoleErrorStub.calledOnceWith('Forbidden')).to.be.true;
    });

    it('should log "Not Found" for error code 404', () => {
        error(404);
        expect(consoleErrorStub.calledOnceWith('Not Found')).to.be.true;
    });

    it('should log "Unknown error code: <code>" for unknown error codes', () => {
        const unknownCode = 500;
        error(unknownCode);
        expect(consoleErrorStub.calledOnceWith(`Unknown error code: ${unknownCode}`)).to.be.true;
    });
});