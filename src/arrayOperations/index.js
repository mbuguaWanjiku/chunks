function groupArrayElements(elements, divider) {
  var chunks = [];
  if (elements && elements.length >= 0 && divider > 0) {
    var numberOfChunks = (elements.length + divider - 1) / divider;
    while (elements.length) {
      chunks = [...chunks, (elements.splice(0, numberOfChunks))];
    }
    return chunks;
  } else {
    return chunks;
  }
}

module.exports = {
  groupArrayElements
};