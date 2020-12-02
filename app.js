/*
  Here is some prep that will potentially help you for your job interviews!
  Each question has a label/question number at the start of it.
  The questions have setup code and testing code--you should add your answers around those (generally below the TODO:)
*/
var expect = require('chai').expect;

describe('Yay to JavaScript Software Engineers!', function () {
  'use strict';


  //QUESTION 1 
  it('YOU should understand bools (1)', function () {
    // TODO: write a function that returns true if the value of x is true, or the value of y is 10, otherwise return false.
    function boolean(x, y) {
      
    }

    expect(boolean(true, 99)).to.equal(true);
    expect(boolean(false, 10)).to.equal(true);
    expect(boolean(false, 99)).to.equal(false);
  });

  //QUESTION 2
  it('should understand lexical environment (2)', function () {
    // TODO: fill in a value for FILL_IN that matches the expected value of X.
    var y = FILL_IN; 

    // Question to think about: Why does this work before the variable is declared? Wouldn't this introduce a global?
    x = ++y;
    x++;

    var x;

    expect(x).to.equal(1);
  });

  //QUESTION 3
  it('should be able to write a for loop (3)', function () {
    // TODO: write a 'for' loop which sums the EVEN numbers in the range [1 to 50] (inclusive)
   

    expect(sum).to.equal(650);
  });

  //QUESTION 4
  it('should understand object literals (4)', function () {
    // TODO: declare an object literal "p" which has the fields 'name' and 'age'.
   

    expect(p.name).to.equal('Bob');
    expect(p.age).to.equal(30);
  });

  //QUESTION 5
  it('should understand constructors (5)', function () {
    // TODO: define a constructor function called 'Person' which has the fields 'name' and 'age'.
    

    var p = new Person('Bob', 30);
    expect(p.name).to.equal('Bob');
    expect(p.age).to.equal(30);
  });

  //QUESTION 6
  it('should understand closure scopes (6)', function () {
    var super_secret_key;

    function match(test) {
      return test === super_secret_key;
    }

    // TODO: Fill in the two FILL_IN values with ONE value that meets both expectations.
    var before = match(FILL_IN); 
    expect(before).to.be.false;

    super_secret_key = 'xyz';

    var after = match(FILL_IN);
    expect(after).to.be.true;

    // Discussion: Why does this work?
  });

  //QUESTION 7
  it('should understand partial application (7)', function () {
    var add = function (firstNumber) {
      return function (y) {
        return firstNumber + y;
      };
    };

    // TODO: Use partial application and the add() function to create an "add10" function.
    // add10() should add 10 to a parameter.


    expect(add10(10)).to.equal(20);
  });

  //QUESTION 8
  it('should be able solve generic interview type questions (8)', function () {
    // TODO: Write a function called "palindrome" which tests an input string to determine whether it is the same forwards and backwards.
    // Try using split instead of a recursive function
    

    expect(palindrome('rats live on no evil star')).to.be.true;
    expect(palindrome('this is not a palindrome')).to.be.false;
  });

  //QUESTION 9
  it('should understand functional programming concepts (9)', function () {
    // TODO: Write a function called "remember()" which captures some original value and produces a function which
    // returns true if the parameter matches the original value. Think password verification.
    // Be careful not to leak the secret to the caller, but only return if it's right or not.
    


    //Testing Code (don't change):
    var match = remember(10);
    var other = remember('bob');

    expect(match(10)).to.be.true;
    expect(match('10')).to.be.false;
    expect(other('bob')).to.be.true;
    expect(other(10)).to.be.false;
  });

  //QUESTION 10
  it('should understand callbacks (10)', function () {
    // EXAMPLE: (Changing this will have no effect)
    // In this example, we wait to respond to the result from doWorkWithReturns():
    function doWorkWithReturns(value) {
      if (value > 10) {
        return true;
      }
      return false;
    }

    if (doWorkWithReturns(11)) {
      // True. Some things happen, like a different function call.
    } else {
      // False. Other things happen.
    }


    // (IMPORTANT: Can ignore these--don't change them; they're part of the automated spec.)
    // (If functions are called, spyValue changed from 0 to |1|)
    function done() { spyValue = 1};
    function fail() { failSpyValue = -1 }
    var spyValue = 0;
    var failSpyValue = 0;


    // ---------------------------------------
    // TODO: Okay, the actual exercise starts here.
    // Let's make our above example cleaner and more efficient!
    function doWorkWithCallbacks(value, done, fail) {
      // TODO: Re-define the body here so that rather than returning a boolean,
      // it invokes a callback: done for true, and fail for false.
      

    }

    //Testing Code (don't change):
    doWorkWithCallbacks(11, done, fail);

    expect(spyValue).to.equal(1);
    expect(failSpyValue).to.equal(0);
  });

  //QUESTION 11
  it('should understand privacy in javascript (11)', function () {
    // TODO: Write a function called "maker()" which produces a function which counts the number of times it has been
    // called and returns that value. (Two instances of the function should NOT share the same count.)
    


    //Testing Code (don't change):
    let func = maker();
    let func_2 = maker();

    expect(func()).to.equal(1);    
    expect(func_2()).to.equal(1);
    expect(func_2()).to.equal(2);
    expect(func()).to.equal(2);
  });

  //QUESTION 12
  it('should understand the switch statement, if only to avoid it. kidding... (12)', function () {
    // TODO: Use a switch statement to convert the numbers 1, 2, 3, 4 to their English language equivalents.
    // The function should have a single return statement.
    function translate(number) {
      //Make switch statement here:


    }

    expect(translate(1)).to.equal('one');
    expect(translate(2)).to.equal('two');
    expect(translate(3)).to.equal('three');
    expect(translate(4)).to.equal('four');
  });

  //QUESTION 13
  it('should destroy all switch statements (13)', function () {
    // TODO: Convert the switch statement to a lookup table with the same functionality as before.
    // Note: - A lookup table is an alternative to a switch statement.
    //       - Objects or arrays are the most common (use an array of functions for this question)
    //       - The name should be "lookupTable"




    //Testing Code (don't change):
    function translate(number) {
      if (typeof lookupTable[number] !== 'function') {
        return 'default';
      }
      return lookupTable[number]();
    }

    expect(translate(1)).to.equal('one');
    expect(translate(2)).to.equal('two');
    expect(translate(3)).to.equal('three');
    expect(translate(4)).to.equal('four');

    // Discussion: What is the relationship between code and data?
  });

  //QUESTION 14
  it('should iterate to develop elegant data structures (14)', function () {
    // TODO: Extend the lookup table so that it can translate the numbers to English or Spanish




    //Testing Code (don't change):
    function translate(number, language) {
      if (typeof lookupTable[number] !== 'function') {
        return 'default';
      }
      return lookupTable[number](language);
    }

    expect(translate(1, 'en')).to.equal('one');
    expect(translate(2, 'en')).to.equal('two');
    expect(translate(3, 'en')).to.equal('three');
    expect(translate(4, 'en')).to.equal('four');

    expect(translate(1, 'es')).to.equal('uno');
    expect(translate(2, 'es')).to.equal('dos');
    expect(translate(3, 'es')).to.equal('tres');
    expect(translate(4, 'es')).to.equal('cuatro');
  });

  //QUESTION 15
  it('should return a new array of transformed values (15)', function () {
    var originalArray = [1, 2, 20, 40, 3, 4];

    // TODO: Return a new array with all values multiplied by 10
    //var newArray = 

    expect(newArray).to.eql([10, 20, 200, 400, 30, 40]);

    // TODO: Take that new array and filter out all values that are less than 199.99.
    //var filteredArray =

    expect(filteredArray).to.eql([200, 400]);
  });

  //QUESTION 16
  it('should implement the function map() (16)', function () {
    var data = [1, 2, 3, 4];
    /*
     *  TODO: Implement the function map() using any method
     *  you would like, including for loops, forEach loops,
     *  whatever you would like, you simply may not use the
     *  function map()
     * 
     *  Example:
     *  var array = [1,2,3,4];
     *  var result = array.map(x => x * 10);
     *  result //-> [10,20,30,40]
     */


    // We put your function on the prototyope for ya :)
    Array.prototype.myMapFunction = function (callbackValue) {
      // TODO: Implementation goes here:
      
    };


    //Testing Code (don't change):
    var result = data.myMapFunction(function (value) {
      return value * 10;
    });

    expect(result).to.eql([10, 20, 30, 40]);
  });

  //QUESTION 17
  it('can think about factorials! (17)', function () {
    // TODO: Implement a function called "factorial" that determines the factorial of given number n.
    // Factorials are evaluated by multiplying together all integers 1 to n, e.g.:
    // 5! = 5 * 4 * 3 * 2 * 1 = 120
   


    expect(factorial(5)).to.equal(120);
    expect(factorial(3)).to.equal(6);
  });

  //QUESTION 18
  it("can crack  Mr. Fibonacci's [most] famous sequence (18)", function () {
    // A Fibonacci sequence is a progression of numbers where
    // each new number is formed by summing the two previous.
    // Thinking functionally, that mathematical formula can be placed directly into a recursive function.

    // TODO: Implement the fib(number) function which takes
    // a numeric value, which is the "index" in the sequence. fib(5) should return 5.
    // Basic Sequence: 0 1 1 2 3 5 8 13
    // Index:          0 1 2 3 4 5 6 7

    function fib(number) {
      // TODO: Add code here:
      // Note: The first two index values can be seeded (ie set manually / hard-coded in)


    }

    expect(fib(5)).to.equal(5);
    expect(fib(2)).to.equal(1);
  });

  //QUESTION 19
  it('can think recursively (19)', function () {
    // NOTE: the vscode editor supports collapsing this region if you're tired of seeing it.
    var org_chart = {
      root: {
        title: 'CEO',
        employees: [
          {
            title: 'Chief Financial Officer',
            employees: [
              {
                title: 'VP Finance',
                employees: [
                  {
                    title: 'Financial Accounting Manager',
                    employees: [
                      {
                        title: 'Financial Accountant III',
                      },
                      {
                        title: 'Financial Accountant II',
                      },
                      {
                        title: 'Financial Accountant I',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'Chief Information Officer',
            employees: [
              { tile: 'Admin. Assistant' },
              {
                title: 'VP Information Security',
                employees: [{ tile: 'Director Information Security' }],
              },
              {
                title: 'VP Enterprise Data',
                employees: [
                  {
                    tile: 'DBA Lead',
                    employees: [{ tile: 'DBA II' }, { tile: 'DBA I' }],
                  },
                  { tile: 'Data Developer III' },
                  { tile: 'Reporting Analyst II' },
                ],
              },
              {
                title: 'VP Network Infrastructure',
                employees: [
                  { tile: 'Sys Ops Manager' },
                  { tile: 'Network Ops Manager' },
                ],
              },
            ],
          },
        ],
      },
    };

    function employee_count(node) {
      // TODO: Provide the total employee count for the entire org in this data structure.
      // NOTE: It's possible to solve this problem without using recursion, but it's probably more difficult.
      employee_count(node.employees)

    }

    expect(employee_count(org_chart.root)).to.equal(20);
  });
});
