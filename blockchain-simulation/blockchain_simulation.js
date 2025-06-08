class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return CryptoJS.SHA256(
      this.index + this.timestamp + this.data + this.previousHash + this.nonce
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.addBlock("Block 1 Data");
    this.addBlock("Block 2 Data");
  }

  createGenesisBlock() {
    return new Block(0, new Date().toISOString(), "Genesis Block", "0");
  }

  addBlock(data) {
    const prevBlock = this.chain[this.chain.length - 1];
    const newBlock = new Block(
      this.chain.length,
      new Date().toISOString(),
      data,
      prevBlock.hash
    );
    this.chain.push(newBlock);
  }

  updateHashesFrom(index) {
    for (let i = index; i < this.chain.length; i++) {
      if (i > 0) {
        this.chain[i].previousHash = this.chain[i - 1].hash;
      }
      this.chain[i].hash = this.chain[i].calculateHash();
    }
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const previous = this.chain[i - 1];

      if (current.previousHash !== previous.hash) return false;
      if (current.hash !== current.calculateHash()) return false;
    }
    return true;
  }
}

const blockchain = new Blockchain();
const container = document.getElementById('chain');

function renderChain() {
  container.innerHTML = '';
  const isValid = blockchain.isChainValid();

  blockchain.chain.forEach((block, idx) => {
    const blockDiv = document.createElement('div');
    blockDiv.className = 'block';
    if (!isValid) blockDiv.classList.add('invalid');

    const isEditable = idx === 0;

    blockDiv.innerHTML = `
      <strong>Block ${block.index}</strong>
      <label>Index:</label>
      <input type="text" value="${block.index}" readonly />
      
      <label>Timestamp:</label>
      <input type="text" value="${block.timestamp}" readonly />
      
      <label>Data:</label>
      <input type="text" value="${block.data}" id="data${idx}" ${!isEditable ? 'readonly' : ''} />
      
      <label>Previous Hash:</label>
      <input type="text" value="${block.previousHash}" readonly />
      
      <label>Nonce:</label>
      <input type="text" value="${block.nonce}" readonly />
      
      <label>Hash:</label>
      <input type="text" value="${block.hash}" readonly />
    `;

    if (isEditable) {
      const dataInput = blockDiv.querySelector(`#data${idx}`);
      dataInput.addEventListener('input', (e) => {
        block.data = e.target.value;
        block.hash = block.calculateHash();
        blockchain.updateHashesFrom(idx);
        renderChain();
      });
    }

    container.appendChild(blockDiv);
  });
}

renderChain();
