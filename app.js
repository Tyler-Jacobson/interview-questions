/*
  Please relax and just enjoy the nerd out with your MindRight Coding Partner!
*/
const assert = require('assert');
const expect = require('chai').expect;

describe("Yay to JavaScript Software Engineers!", function () {
  "use strict";

  it("YOU SHOULD UNDERSTAND BOOLS", function() {
    function boolean(x, y) {
      // TODO: write a function that returns true if the value of x is true, or the value of y is 10, otherwise return false.
    }

    expect(boolean(true, 99)).to.be.true;
    expect(boolean(false, 10)).to.be.true;
    expect(boolean(false, 99)).to.be.false;
  });




  it("should understand hoisting", function() {
    // TODO: fill in a value for FILL_IN that matches the expected value of X.
    var y = -1;

    // Question to think about: Why does this work before the variable is declared? Wouldn't this introduce a global?
    x = ++y;
    x++;

    var x = 1;

    expect(x).to.equal('FILL_IN');
  });





  it("should be able to write a for loop", function() {
    // TODO: write a 'for' loop which sums the EVEN numbers in the range [1 to 50] (inclusive)
    let sum = 0;
    expect(sum).to.equal(650);
  });





  it("should understand object literals", function() {
    // TODO: declare an object literal which has the fields 'name' and 'age'.
    expect(p.name).to.equal("Bob");
    expect(p.age).to.equal(30);
  });





  it("should understand constructors", function() {
    // TODO: define a constructor function called 'Person' which has the fields 'name' and 'age'.
    expect(p.name).to.equal("Bob");
    expect(p.age).to.equal(30);
  });





  it("should understand closure scopes", function() {
    var super_secret_key;

    function match (test) {
      return test === super_secret_key;
    }

    // TODO: Fill in the two FILL_IN values for the expectation.
    var before = match("xyz");
    expect(before).to.be.equal(FILL_IN);

    super_secret_key = "xyz";

    var after = match("xyz");
    expect(after).to.equals(FILL_IN);

    // Discussion: Why does this work?
  });





  it("should understand partial application", function() {

    var add = function(firstNumber) {
      return function(y) {
        return firstNumber + y;
      }
    };

    // Use partial application and the add() function to create an add10 function.
    // add10() should add 10 to a parameter.

    expect(add10(10)).to.equal(20);
  });





  it("should be able solve generic interview type questions", function () {
    function palindrome(possiblePalindrome) {
      // TODO: Write a function which tests an input string to determine whether it is the same forwards and backwards.
      // Try using split instead of a recusive function
    }

    expect(palindrome("rats live on no evil star")).to.be.true;
    expect(palindrome("this is not a palindrome")).to.be.false;
  });





  it("should understand functional programming concepts", function() {

    // TODO: Write a function called remember() which captures some original value and produces a function which
    // returns true if the parameter matches the original value. Think password verification.
    // Be careful not to leak the secret to the caller, but only return if it's right or not.
    function remember(originalValue) {

    }

    expect(match(10)).to.be.true;
    expect(match("10")).to.be.false;
    expect(other("bob")).to.be.true;
    expect(other(10)).to.be.false;
  });





  it("should understand callbacks", function() {
    // EXAMPLE: Changing this will have no effect.
    function doWorkWithReturns(value) {
      if (value > 10) {
        return true;
      }

      return false;
    }

    if (doWorkWithReturns(11)) {
      // True. Some things happen.
    } else {
      // False. Other things happen.
    }

    // (IMPORTANT: Don't change these, they're part of the automated spec.)
    var done = jasmine.createSpy('done');
    var fail = jasmine.createSpy('fail');

    // ---------------------------------------
    // Okay, the actual exercise starts here.
    function doWorkWithCallbacks(value, done, fail) {
      if (value > 10) {
        done();
      } else {
        fail();
      }
      // TODO: Re-define the body here so that rather than returning a boolean,
      // it invokes a callback: done for true, and fail for false.

    }

    doWorkWithCallbacks(11, done, fail);

    expect(done).toHaveBeenCalled();
    expect(fail).not.toHaveBeenCalled();
  });





  it("should understand privacy in javascript", function() {
    // TODO: Write a maker() function which produces a function which counts the number of times it has been
    // called and returns that value. (Two instances of the function should NOT share the same count.)

    expect(func()).to.be.equal(1);
    expect(func_2()).to.be.equal(1);
    expect(func_2()).to.be.equal(2);
    expect(func()).to.be.equal(2);
  });





  it("should understand the switch statement, if only to avoid it. kidding..", function () {
    // TODO: Use a switch statement to convert the numbers 1, 2, 3, 4 to their English language equivalents.
    // The function should have a single return statement.
    function translate(number) {
    }

    expect(translate(1)).to.be.equal("one");
    expect(translate(2)).to.be.equal("two");
    expect(translate(3)).to.be.equal("three");
    expect(translate(4)).to.be.equal("four");
  });





  it("should destroy all switch statements", function () {
    // TODO: Convert the switch statement to a lookup table with the same functionality as before.
    function translate(number) {

      if (typeof lookUpTable[number] !== "function") {
        return 'default';
      }
      return lookUpTable[number];
    }

    expect(translate(1)).to.be.equal("one");
    expect(translate(2)).to.be.equal("two");
    expect(translate(3)).to.be.equal("three");
    expect(translate(4)).to.be.equal("four");

    // Discussion: What is the relationship between code and data?
  });





  it("should iterate to develop elegant data structures", function() {
    // TODO: Extend the lookup table so that it can translate the numbers to English or Spanish.
    function translate(number, language) {

      if (typeof lookUpTable[number] !== "function") {
        return 'default';
      }
      return lookUpTable[number]();
    }

    expect(translate(1, 'en')).to.be.equal("one");
    expect(translate(2, 'en')).to.be.equal("two");
    expect(translate(3, 'en')).to.be.equal("three");
    expect(translate(4, 'en')).to.be.equal("four");

    expect(translate(1, 'es')).to.be.equal("uno");
    expect(translate(2, 'es')).to.be.equal("dos");
    expect(translate(3, 'es')).to.be.equal("tres");
    expect(translate(4, 'es')).to.be.equal("cuatro");
  });






  it("should return a new array of transformed values", function() {
    var originalArray = [1, 2, 20, 40, 3, 4];

    // TODO: Return a new array with all values multiplyed by 10

    expect(newArray).to.equal([10, 20, 200, 400, 30, 40]);

    // TODO: Take that new array and filter all values that are less than 199.99.

    expect(filteredArray).to.equal([200, 400]);
  });





  it("should implement the function map()", function() {
    var data = [1,2,3,4];
    // TODO: Implemenet the function map() using any method
    // you would like, including for loops, forEach loops,
    // whatever you would like, you simply may not use the
    // function map() ;)


    // Example:
    // var array = [1,2,3,4];
    // var result = array.map(x => x * 10);
    // result //-> [10,20,30,40]

    // We put your function on the prototyope for ya :)
    Array.prototype.myMapFunction = function(callbackValue) {
      // Implementation goes here

    };

    var result = data.myMapFunction(function(value) {
      return value * 10;
    });

    expect(result).to.equal([10,20,30,40]);
  });





  it("can think about factorials!", function() {
    // TODO: Implement a function that determines the factorial of given number n.
    // Factorials are evaluated by multiplying together all integers 1 to n, e.g.:
    // 5! = 5 * 4 * 3 * 2 * 1 = 120



    expect(factorial(5)).to.be.equal(120);
    expect(factorial(3)).to.be.equal(6);
  });




  it("can crack  Mr. Fibonacci's [most] famous sequence", function() {
    // A Fibonacci sequence is formed by adding each number to the one before it.
    // Thinking functionally, that mathematical formula can be placed directly into a recursive function.

    // TODO: Implement the fib(number) function which takes
    // a numeric value, which is the "index" in the sequence. fib(5) should return 8.
    // Basic Sequence: 0 1 2 3 5 8 13
    // Index:          0 1 2 3 4 5 6
    function fib(number) {

    }


    expect(fib(5)).to.be.equal(5);
    expect(fib(2)).to.be.equal(1);
  });





  it("can think recursively", function() {
    // NOTE: the vscode editor supports collapsing this region if you're tired of seeing it.
    var org_chart = {
      root: {
        title: "CEO",
        employees: [
          {
            title: "Chief Financial Officer",
            employees: [
              {
                title: "VP Finance",
                employees: [
                  {
                    title: "Financial Accounting Manager",
                    employees: [
                      {
                        title: "Financial Accountant III"
                      },
                      {
                        title: "Financial Accountant II"
                      },
                      {
                        title: "Financial Accountant I"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: "Chief Information Officer",
            employees: [
              { tile: "Admin. Assistant" },
              {
                title: "VP Information Security",
                employees: [
                  { tile: "Director Information Security" }
                ]
              },
              {
                title: "VP Enterprise Data",
                employees: [
                  {
                    tile: "DBA Lead",
                    employees: [
                      { tile: "DBA II" },
                      { tile: "DBA I" },
                    ]
                  },
                  { tile: "Data Developer III" },
                  { tile: "Reporting Analyst II" },
                ]
              },
              {
                title: "VP Network Infrastructure",
                employees: [
                  { tile: "Sys Ops Manager" },
                  { tile: "Network Ops Manager" },
                ]
              }
            ]
          }
        ]
      }
    };


    function employee_count (node) {
      // TODO: Provide the total employee count for the entire org in this data structure.

      // NOTE: It's possible to solve this problem without using recursion, but it's probably more difficult.
    }

    expect(employee_count(org_chart.root)).to.be.equal(20);
  });
});