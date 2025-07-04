# Blockchain-mini-task-1

This mini task covers the basics of blockchain, block structure, and consensus mechanisms, along with a working simulation in JavaScript.

---

## Theoretical Part

### 1. Blockchain Basics

### Define blockchain in your own words (100–150 words).

Blockchain is like a digital record book that is shared across many computers. Each entry, or block, contains data, a timestamp, and a special code called a hash. Every block is linked to the previous one using its hash, forming a secure chain. Once data is added, it becomes very hard to change it without changing every following block. What makes blockchain special is that it's decentralized — no single person or company controls it. Instead, everyone using it keeps a copy. This system helps build trust, especially in industries like finance or supply chains. Blockchain is mainly known because of cryptocurrencies like Bitcoin, but its use goes far beyond that.


### List 2 real-life use cases (e.g., supply chain, digital identity).

1. **Supply Chain Tracking**  
   Companies like Walmart use blockchain to trace the origin of goods and detect any fraud or delay in real-time.

2. **Digital Identity**
    People can use blockchain to prove who they are online without needing a central authority, improving privacy and reducing fraud.

---

### 2. Block Anatomy

### Draw a block showing: data, previous hash, timestamp, nonce, and Merkle root.

Each block in a blockchain contains key components that ensure security, structure, and traceability.

**Block**
>Index         : 2  
Data          : {A, B, C, D}  
Previous Hash : 7a1f9c842e9b...  
Timestamp     : 2025-06-07 14:32:10  
Nonce         : 354  
Merkle Root   : b23c9f1d75e7...  
Hash          : 9d4a2c3e104b...

 - **Index**: The position of the block in the chain.
 - **Timestamp**: The exact time when the block was created.
 - **Data**: Information or transactions recorded in the block.
 - **Previous Hash**: Links the block to the one before it.
 - **Nonce**: A number used for mining (Proof of Work).
 - **Merkle Root**: A final hash representing all transactions in the block.
 - **Hash**: The unique fingerprint of this block.


### Briefly explain with an example how the Merkle root helps verify data integrity.

  A Merkle Root is a special hash that represents all the transactions in a block. It is created by hashing transaction data in pairs, then hashing those hashes again until    one final hash (the Merkle Root) is formed. This helps quickly verify whether a transaction exists in the block without checking the entire data.
  
  Step 1: Hash each transaction
  H1 = hash(A)
  H2 = hash(B)
  H3 = hash(C)
  H4 = hash(D)

  Step 2: Hash pairs of hashes
  H12 = hash(H1 + H2)
  H34 = hash(H3 + H4)

  Step 3: Hash the results to get the Merkle Root
  Merkle Root = hash(H12 + H34)

  If any transaction changes (A, B, C, or D), the Merkle Root will change, showing that the data has been tampered with.

---

### 3. Consensus Conceptualization

### What is Proof of Work and why does it require energy?
Proof of Work is a method where computers compete to solve a complex puzzle. The first one to solve it gets to add the next block to the blockchain. It takes a lot of energy because the computer keeps trying different values (called nonce) until it finds the right one. This system keeps the network secure but uses high electricity, like in Bitcoin mining.

### What is Proof of Stake and how does it differ?
In Proof of Stake, there’s no need to solve puzzles. Instead, validators are chosen based on how many coins they hold and are willing to “lock” as stake. The more coins you stake, the higher your chance of getting selected to validate the next block. It uses much less energy than PoW and is faster too.

### What is Delegated Proof of Stake and how are validators selected?
Delegated Proof of Stake is like a voting system. Coin holders vote to elect a small group of trusted validators (called delegates) who take turns validating transactions. This makes the system faster and more scalable. The ones with the most votes act on behalf of everyone, but they can be replaced if they don’t perform well.

---

## practical Part

### 1. Block Simulation in Code 
### Live Demo Link

Block Simulation | [Live Demo 🔗](https://nishi701.github.io/Blockchain-mini-task-1/blockchain-simulation/) |


### 2. Nonce Mining Simulation 
### Live Demo Link
Mining Simulation | [Live Demo 🔗](https://nishi701.github.io/Blockchain-mini-task-1/mining_simulation/) |

### 3. Consensus Conceptualization
open terminal (ctrl + `)
>node consensus_demo.js

