function writeCards(names, eventName){
  let returnArray = []
  for (let i = 0; i < names.length; i++) {
    returnArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return returnArray
}

function countDown(number){
  while (number >= 0) {
    console.log(number)
    number --
  }
}