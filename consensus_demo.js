// Proof of Work (PoW)
const miners = [
  { name: "Miner A", power: Math.floor(Math.random() * 100) },
  { name: "Miner B", power: Math.floor(Math.random() * 100) },
  { name: "Miner C", power: Math.floor(Math.random() * 100) },
];

// Select miner with the highest power
const powWinner = miners.reduce((max, miner) => miner.power > max.power ? miner : max);

console.log("PoW - Proof of Work:");

console.log("Each miner has a power score (randomly generated).");
console.log("The miner with the highest computational power is selected.");
console.log("Miners:", miners);
console.log("Selected Miner:", powWinner.name, `(Power: ${powWinner.power})`);
console.log("--------------------------------------------------");

// Proof of Stake (PoS)
const stakers = [
  { name: "Staker X", stake: Math.floor(Math.random() * 100) },
  { name: "Staker Y", stake: Math.floor(Math.random() * 100) },
  { name: "Staker Z", stake: Math.floor(Math.random() * 100) },
];

// Select staker with the highest stake
const posWinner = stakers.reduce((max, staker) => staker.stake > max.stake ? staker : max);

console.log("PoS - Proof of Stake:");
console.log("Each staker has a stake value (randomly generated).");
console.log("The staker with the highest financial stake is selected.");
console.log("Stakers:", stakers);
console.log("Selected Staker:", posWinner.name, `(Stake: ${posWinner.stake})`);
console.log("--------------------------------------------------");

// Delegated Proof of Stake (DPoS)
const delegates = [
  { name: "Delegate 1", votes: Math.floor(Math.random() * 100) },
  { name: "Delegate 2", votes: Math.floor(Math.random() * 100) },
  { name: "Delegate 3", votes: Math.floor(Math.random() * 100) },
];

// Select top voted delegate
const dposWinner = delegates.sort((a, b) => b.votes - a.votes)[0];

console.log("DPoS - Delegated Proof of Stake:");
console.log("Each delegate has a number of 'votes' from community accounts.");
console.log("The delegate with the **most votes** is selected.");
console.log("Delegates:", delegates);
console.log("Selected Delegate:", dposWinner.name, `(Votes: ${dposWinner.votes})`);
console.log("--------------------------------------------------");

// ✅ Summary Output
console.log("Final Consensus Simulation Result:");
console.log(`PoW Winner: ${powWinner.name}`);
console.log(`PoS Winner: ${posWinner.name}`);
console.log(`DPoS Winner: ${dposWinner.name}`);
