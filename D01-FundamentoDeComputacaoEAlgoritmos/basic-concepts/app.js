function parityValuate(upperLimit) {
  for (let i = 0; i < upperLimit; i++) {
    if (i % 2 === 1) {
      console.log(`${i} is an odd number`);
    } else {
      console.log(`${i} is an even number`);
    }
  }
}

parityValuate(15);
