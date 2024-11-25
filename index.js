const geolib = require('geolib');

// Coordenadas das cidades brasileiras
const cities = {
  'São Paulo': { latitude: -23.55052, longitude: -46.633308 },
  'Rio de Janeiro': { latitude: -22.906847, longitude: -43.172896 },
  'Brasília': { latitude: -15.7801, longitude: -47.9292 },
  'Salvador': { latitude: -12.9714, longitude: -38.5014 },
  'Fortaleza': { latitude: -3.7172, longitude: -38.5433 },
  'Belo Horizonte': { latitude: -19.9167, longitude: -43.9345 },
  'Manaus': { latitude: -3.1190, longitude: -60.0217 },
  'Curitiba': { latitude: -25.4284, longitude: -49.2733 },
  'Recife': { latitude: -8.0476, longitude: -34.8770 },
  'Porto Alegre': { latitude: -30.0346, longitude: -51.2177 },
};

// Função para calcular a distância entre duas cidades
function calculateDistance(city1, city2) {
  if (!cities[city1] || !cities[city2]) {
    return "Erro: Por favor, insira nomes de cidades válidas.";
  }

  const pointA = cities[city1];
  const pointB = cities[city2];
  const distance = geolib.getDistance(pointA, pointB);

  return `A distância entre ${city1} e ${city2} é de aproximadamente ${(distance / 1000).toFixed(2)} km.`;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome da primeira cidade: ', (city1) => {
  rl.question('Digite o nome da segunda cidade: ', (city2) => {
    console.log(calculateDistance(city1, city2));
    rl.close();
  });
});
