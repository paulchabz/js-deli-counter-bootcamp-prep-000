// Deli counter 
function takeANumber(currentLine, name) {
  let message = `Welcome, ${name}. You are number ${currentLine.length + 1} in line.`
  currentLine.push(name)
  return message;
}

// new function 
let ticket = 0;
function takeNumber(ticketNumbers) {
  //let ticket = 0;
  let message = `Welcome you have ticket number ${++ticket} `;
  ticketNumbers.push(ticket);
  return message;
}

// deli now serving 
function nowServing(katzDeliLine) {
  let messages;
  if (katzDeliLine.length === 0) {
    messages =  `There is nobody waiting to be served!`
  } else {
    messages =  `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
  return messages
}

// current line 
/*

function currentLine(katzDeliLine) {
  let message;
  let names = []
  if (katzDeliLine.length === 0) {
   return `The line is currently empty.`
  } 
  for (var i = 0; i < katzDeliLine.length; i++) {
    //message = `The line is currently: ${katzDeliLine[i]} `
    var name = katzDeliLine[i]
    names.push(name)
  }
  message = `The line is currently: ${names}`
  return message
}
*/

/*
function currentLine(katzDeliLine) {
  let message;
  if (katzDeliLine.length === 0) {
    message = `The line is currently empty.`
  } 
  for (var i = 0; i < katzDeliLine.length; i++) {
    message = `The line is currently: ${katzDeliLine[i]} `
  }
  return message
}
*/

function currentLine(katzDeliLine) {
  let message;
  let names = []
  if (katzDeliLine.length === 0) {
   return `The line is currently empty.`
  } 
  for (var i = 0; i < katzDeliLine.length; i++) {
    //message = `The line is currently: ${katzDeliLine[i]} `
    var name = katzDeliLine[i]
    names.push(`${i+1}. ${name}`)
  }
  message = `The line is currently: ${names.join(", ")}`
  return message
}