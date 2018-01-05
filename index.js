function produceDrivingRange(range) {
  return function (block1, block2) {
    let distance = Math.abs(parseInt(block1) - parseInt(block2))
    if(distance < range) {
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator(rate) {
  return function (total) {
    return total * rate
  }
}