import React from 'react'
import { GithubOutlined } from '@ant-design/icons'

const experiences = [
  {
    title: 'Kontor',
    role: 'Founding Engineer',
    org: 'Unspendable Labs',
    repo: 'https://github.com/KontorProtocol/Kontor',
    items: [
      'Founding engineer on a Rust-based Bitcoin metaprotocol engine built on Tokio, Axum, Wasmtime (Component Model), and libSQL that parses Taproot-embedded transactions via ZMQ, executes WASM smart contracts, and maintains deterministic protocol state',
      'Designed and owned the transaction composition system — the Taproot commit-reveal pipeline constructing PSBTs with Postcard-serialized protocol payloads in witness script-path spends, supporting multi-party inputs, fee-rate modeling, and chained instruction encoding',
      'Implemented the decentralized file storage protocol end-to-end, integrating on-chain Sigil smart contracts (storage agreements, challenge deadlines, node membership) with Kontor-Crypto\'s FileLedger for Poseidon Merkle commitments, Nova SNARK proof verification, and rollback-safe historical root tracking',
      'Sole implementer of the BLS aggregation system using blst (BLS12-381 min-sig) — dual-key registration proofs binding Taproot and BLS keys, domain-separated per-operation signing, nonce-based replay protection, and aggregate verification supporting up to 10,000 bundled operations per Bitcoin transaction',
    ],
    tech: ['Rust', 'Tokio', 'Axum', 'Wasmtime/WASM', 'Bitcoin/Taproot', 'BLS12-381', 'Poseidon', 'Nova SNARKs', 'libSQL', 'ZMQ'],
  },
  {
    title: 'Kontor-Crypto',
    role: 'Security Engineer',
    org: 'Unspendable Labs',
    repo: 'https://github.com/KontorProtocol/Kontor-Crypto',
    items: [
      'Security engineering on a Proof-of-Retrievability library built on Nova recursive SNARKs with Pallas/Vesta curves — the cryptographic backbone of Kontor\'s decentralized storage',
      'Contributed to fuzz testing (libfuzzer), integration test suites (~275 tests), and versioned proof serialization across the library',
      'Contributed to non-cryptographic systems including ledger persistence, configuration boundaries, and CI hardening',
      'Supported Picus-based formal verification workflows ensuring R1CS circuit constraint soundness',
    ],
    tech: ['Rust', 'Nova/Spartan SNARKs', 'Pallas/Vesta', 'Reed-Solomon', 'Poseidon', 'libfuzzer', 'Formal Verification'],
  },
  {
    title: 'Horizon Wallet',
    role: 'Lead Developer',
    org: 'Unspendable Labs',
    repo: 'https://github.com/UnspendableLabs/Horizon-Wallet',
    items: [
      'Led development of a Bitcoin and Counterparty (XCP) wallet supporting multiple seed phrase formats including Freewallet and Counterwallet import',
      'Implemented BIP39/BIP32/BIP84 HD key derivation, PSBT transaction signing via bitcoinjs interop, UTXO management, and RBF fee-bumping with encrypted local seed storage',
      'Architected the data layer integrating Esplora, Mempool.space, and the Counterparty v2 API for chain data, fee estimation, and protocol operations',
      'Shipped as a multi-network (mainnet, testnet, regtest) Chrome extension with flutter_bloc state management and Drift SQLite persistence',
    ],
    tech: ['Flutter/Dart', 'Bitcoin', 'BIP39/32/84', 'PSBT', 'Esplora', 'flutter_bloc', 'Drift', 'Chrome Extension'],
  },
]

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-content">
        <h2>Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <div className="experience-header">
              <h3>
                {exp.repo
                  ? <a href={exp.repo} target="_blank" rel="noreferrer" className="experience-title-link">{exp.title} <GithubOutlined /></a>
                  : exp.title
                }
              </h3>
              <span className="experience-role">{exp.role} &mdash; {exp.org}</span>
            </div>
            <ul className="experience-list">
              {exp.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
            <div className="experience-tech">
              {exp.tech.map((t, k) => (
                <span key={k} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
