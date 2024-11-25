const geolib = require('geolib');

// Coordenadas de exemplo
const pointA = { latitude: -23.55052, longitude: -46.633308 }; // São Paulo, Brasil
const pointB = { latitude: -22.906847, longitude: -43.172896 }; // Rio de Janeiro, Brasil

// Calculando a distância entre dois pontos
const distance = geolib.getDistance(pointA, pointB);

console.log(`A distância entre São Paulo e Rio de Janeiro é de ${distance / 1000} km.`);

// Conjunto de coordenadas
const points = [
    { latitude: -22.970722, longitude: -43.182365, name: "Copacabana" },
    { latitude: -23.574658, longitude: -46.623204, name: "Paulista Avenue" },
    { latitude: -22.913885, longitude: -43.243645, name: "Maracanã" },
];

// Encontrando o ponto mais próximo de São Paulo
const closest = geolib.findNearest(pointA, points);

console.log(`O ponto mais próximo de São Paulo é: ${closest.name}`);
