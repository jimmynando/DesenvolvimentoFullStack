const estimatePrice = () => {
  const distance = document.getElementById("distancia").value;
  const time = document.getElementById("tempo").value;

  const rate = generateRate(distance);

  const price = rate * distance * time;

  alert(price);
};

const generateRate = (distance) => {
  if (distance > 20) {
    return 0.2;
  } else {
    return 0.1;
  }
};
