import {expect} from 'chai';
import 'aurelia-polyfills';
import {Test1} from './../../../src/views/test1/test1';

describe('Test1 Tests', function() {
    var test1;

    beforeEach(function() {
        test1 = new Test1 ();
    });
    
    it('constructor', function() {
        expect(test1).to.not.be.null;
    });
})