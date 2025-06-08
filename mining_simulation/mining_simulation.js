class Block {
  constructor(data) {
    this.index = 1;
    this.timestamp = new Date().toLocaleString();
    this.data = data;
    this.previousHash = "000000";
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return CryptoJS.SHA256(
      this.index +
      this.timestamp +
      this.data +
      this.previousHash +
      this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join("0"); 
    const startTime = performance.now();
    let attempts = 0;

    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
      attempts++;
    }

    const endTime = performance.now();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(4); 

    return {
      hash: this.hash,
      nonce: this.nonce,
      attempts,
      timeTaken
    };
  }
}

document.getElementById("mineButton").addEventListener("click", () => {
  const data = document.getElementById("dataInput").value || "Default Data";
  const difficulty = parseInt(document.getElementById("difficultyInput").value);

  const block = new Block(data);
  const result = block.mineBlock(difficulty);

  document.getElementById("resultOutput").innerHTML = `
    <strong>Block Mined!</strong><br/>
    <strong>Hash:</strong> ${result.hash}<br/>
    <strong>Nonce:</strong> ${result.nonce}<br/>
    <strong>Attempts:</strong> ${result.attempts}<br/>
    <strong>Time Taken:</strong> ${result.timeTaken} seconds
  `;
});
