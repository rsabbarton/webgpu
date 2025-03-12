import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';
import { Logger } from './logger.mjs';

const LOGGER = new Logger();
const log = LOGGER.log;

describe('Logger', function() {
    let window, document;

    beforeEach(function() {
        const dom = new JSDOM('<!doctype html><html><body><div id="text-output"></div></body></html>');
        window = dom.window;
        document = window.document;
        global.document = document;
        global.window = window;
    });

    it('should log a message to the console and prepend it to the output div', function() {
        const consoleLogStub = sinon.stub(console, 'log');
        const message = 'Test message';

        log(message);

        expect(consoleLogStub.calledOnceWith(message)).to.be.true;
        const outputDiv = document.getElementById('text-output');
        expect(outputDiv.firstChild.innerText).to.equal(message);

        consoleLogStub.restore();
    });
});