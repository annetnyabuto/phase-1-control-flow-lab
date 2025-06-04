function scuberGreetingForFeet(ride){
  // Write your code here!
  let scuber
  if (ride <= 400) {
    scuber = 'This one is on me!';
  } else if (ride>2500) {
    scuber = 'No can do.';
  } else if (ride > 2000){
    scuber = 'I will gladly take your thirty bucks.';
  } else if (ride > 400 && ride < 2000){
    scuber = "That will be twenty bucks.";
  }
  return scuber;
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
} 

function switchOnCharmFromTip(tip){
  // Write your code here
  switch(tip) {
    case 'generous':
      return'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}