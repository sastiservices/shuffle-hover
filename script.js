


const velocity = 50;

function shuffle(array) {
  for (let j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
  return array;
}

function shuffleText(element, originalText) {
  const elementTextArray = [...originalText];
  let randomText = [];

  function repeatShuffle(times, index) {
    if (index === times) {
      element.textContent = originalText;
      return;
    }

    setTimeout(() => {
      randomText = shuffle(elementTextArray);

      for (let i = 0; i < index; i++) {
        randomText[i] = originalText[i];
      }

      element.textContent = randomText.join('');
      repeatShuffle(times, ++index);
    }, velocity);
  }

  repeatShuffle(element.textContent.length, 0);
}

const shuffleElements = document.querySelectorAll('.shuffle');

shuffleElements.forEach(element => {
  element.dataset.text = element.textContent;
  element.addEventListener('mouseenter', () => shuffleText(element, element.dataset.text));
});
