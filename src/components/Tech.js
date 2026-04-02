import React from 'react'

const skillCategories = [
  {
    category: 'Blockchain & Cryptography',
    skills: [
      'Bitcoin (Taproot, PSBT, BIP32/39/84)',
      'BLS12-381',
      'Nova/Spartan SNARKs',
      'Poseidon Hashing',
      'Merkle Trees',
      'Reed-Solomon Erasure Coding',
      'Pallas/Vesta Curves',
    ],
  },
  {
    category: 'Systems & Languages',
    skills: [
      'Rust',
      'Dart / Flutter',
      'TypeScript',
      'Python',
      'SQL',
      'Java',
      'Node.js',
    ],
  },
  {
    category: 'Infrastructure & Runtime',
    skills: [
      'Wasmtime / WebAssembly',
      'Tokio',
      'Axum',
      'Docker',
      'AWS / Azure / GCP',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    category: 'Security',
    skills: [
      'Fuzz Testing (libfuzzer)',
      'Formal Verification (Picus / Lean)',
      'Cryptographic Auditing',
      'Threat Modeling',
    ],
  },
]

const Tech = () => {
  return (
    <section id="tech">
      <div className="tech-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category">
              <h3>{cat.category}</h3>
              <div className="skill-list">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tech
