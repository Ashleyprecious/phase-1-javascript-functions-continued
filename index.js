// code your solution here
function saturdayFun(activity="roller-skate") {

    return `This Saturday, I want to ${activity}!`;

  }
  
  // define mondayWork function

  let mondayWork = function(activity="go to the office") {

    return `This Monday, I will ${activity}.`;
  }
  // define wrapAdjective function

  
  let wrapAdjective = function(symbol="*") {

    return function(adjective="a hard worker") {

      return `You are ${symbol}${adjective}${symbol}!`;

    }
    
  }