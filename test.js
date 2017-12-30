import createGame from './createGame';

const start = Date.now();
const games = 100;

for (let a = 0; a < games; a += 1) {
    createGame();
}

const duration = Date.now() - start;

console.log(`Total time: ${duration}`);
console.log(`Create games: ${games}`);
console.log(`Time average: ${duration/games}ms`);
