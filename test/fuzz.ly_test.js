var should = require('should'),
    fuzz_ly = require('../lib/fuzz.ly.js')


describe('fuzz.ly', function () {
    before(function () {

    })
    it('should be awesome', function(){
        fuzz_ly.awesome().should.eql('awesome')
    })
})