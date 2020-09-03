let counter = 0;
let startTime = new Date();

function generateBlocks(numberOfBlocks) {
  let tmpArray = [];

  for(let i = 0; i < numberOfBlocks; i++) {
    tmpArray.push(i);
  }

  return tmpArray;
}

function getSingleBlock(number) {
  const div = document.createElement('div');
  div.className = 'block';
  div.innerHTML = '<p>'+number+'</p>';

  return div;
}

function captureClick(e, blockNumber, blocksLength) {
  console.log('counter', counter);
  console.log('blockNumber', blockNumber);
  if (blockNumber === counter) {
    counter++;
  }

  if (counter === blocksLength) {
    console.warn('FINISH');
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
  // strip the ms
    timeDiff /= 1000;

  // get seconds 
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
  }
}

function main() {
  let blocks = generateBlocks(10);
  let gameField = document.getElementById('game')

  for(let i = 0; i < blocks.length; i++) {
    const singleBlock = getSingleBlock(i);
    singleBlock.addEventListener('click', e => captureClick(e, i, blocks.length));
    gameField.appendChild(singleBlock);
  }
}
