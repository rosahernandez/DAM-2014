/* global describe, it */

(function () {
    'use strict';

//  tests.js

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire:    require
    });

    describe('Tests for Fizz', function () {
        var Fizz,
            FizzBuzz;

        beforeEach(function(done){
            require(['Fizz', 'FizzBuzz'], function(f, fb){
                Fizz = f;
                FizzBuzz = fb;
                done();
            });
        });


        describe('Método isFizz', function () {
            it('Debe ser true', function () {
                assert.isFalse(Fizz.isFizz());
                assert.equal(true, Fizz.isFizz(3));
                assert.equal(true, Fizz.isFizz(6));
                assert.equal(true, Fizz.isFizz(9));
                assert.equal(true, Fizz.isFizz(12));
                assert.equal(true, Fizz.isFizz(15));
            });

            it('Debe ser false', function () {
                assert.isFalse(Fizz.isFizz());
                assert.equal(false, Fizz.isFizz(1));
                assert.equal(false, Fizz.isFizz(2));
                assert.equal(false, Fizz.isFizz(4));
                assert.equal(false, Fizz.isFizz(5));
                assert.equal(false, Fizz.isFizz(7));
            });
        });

        describe('Método testNumber', function(){
            it('Debe ser FIZZ', function(){
                assert.equal('FIZZ', FizzBuzz.testNumber(3));
                assert.equal('FIZZ', FizzBuzz.testNumber(6));
                assert.equal('FIZZ', FizzBuzz.testNumber(9));
                assert.equal('FIZZ', FizzBuzz.testNumber(12));
                assert.equal('FIZZBUZZ', FizzBuzz.testNumber(15));
            });
        });
    });

    describe('Tests for Buzz', function () {
        var Buzz,
            FizzBuzz;

        beforeEach(function(done){
            require(['Buzz', 'FizzBuzz'], function(f, fb){
                Buzz = f;
                FizzBuzz = fb;
                done();
            });
        });


        describe('Método isBuzz', function () {
            it('Debe ser true', function () {
                assert.isFalse(Buzz.isBuzz());
                assert.equal(true, Buzz.isBuzz(5));
                assert.equal(true, Buzz.isBuzz(10));
                assert.equal(true, Buzz.isBuzz(15));
                assert.equal(true, Buzz.isBuzz(30));
            });

            it('Debe ser false', function () {
                assert.isFalse(Buzz.isBuzz());
                assert.equal(false, Buzz.isBuzz(1));
                assert.equal(false, Buzz.isBuzz(2));
                assert.equal(false, Buzz.isBuzz(3));
                assert.equal(false, Buzz.isBuzz(7));
            });
        });

        describe('Método testNumber', function(){
            it('Debe ser BUZZ', function(){
                assert.equal('BUZZ', FizzBuzz.testNumber(5));
                assert.equal('BUZZ', FizzBuzz.testNumber(10));
                assert.equal('FIZZBUZZ', FizzBuzz.testNumber(15));
                assert.equal('BUZZ', FizzBuzz.testNumber(20));
                assert.equal('FIZZBUZZ', FizzBuzz.testNumber(45));
                expect( FizzBuzz.testNumber()).to.be.undefined;
            });
        });
    });
})();
