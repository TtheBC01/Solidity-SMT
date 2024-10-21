# Sparse Merkle Tree

This project demonstrates the [Sparse Merkle Tree](https://docs.iden3.io/publications/pdfs/Merkle-Tree.pdf) (SMT) data structure used by [Tornado Cash](https://github.com/tornadocash/tornado-core). An SMT is initialzed with all leafs assumed to be empty. Tornado Cash implemented an
algorithm to populate the leaves of an SMT from left to right by tracking the proof path of the last commited leaf. This "leading edge" path
is efficiently updated in the smart contract state every time a new leaf is added. 