// ===========================================================
// CODEX PREP — PUTME QUESTION BANK
// Format matches cbt.js exactly: { q, options[4], ans, explanation }
// ans must be the EXACT text of the correct option.
//
// PLACEHOLDER DATA — 6 real sample questions per subject so the
// engine is fully testable right now. Replace PUTME_DATA below
// with your full reviewed export from the Answer Key Studio.
// ===========================================================
const PUTME_DATA = {
  "PUTME_CHEMISTRY": [
  {
    "q": "What is oxidation in terms of electron transfer?",
    "options": [
      "Gain of electrons",
      "Loss of electrons",
      "Transfer of protons",
      "Absorption of energy"
    ],
    "ans": "Loss of electrons",
    "explanation": "Oxidation is defined as the loss of electrons."
  },
  {
    "q": "A large organic substance with the formula Cx(H₂O)y is:",
    "options": [
      "Lipid",
      "Protein",
      "Carbohydrate",
      "Nucleic Acid"
    ],
    "ans": "Carbohydrate",
    "explanation": "Cx(H2O)y is the general formula for carbohydrates."
  },
  {
    "q": "What is the inverse of resistance?",
    "options": [
      "Capacitance",
      "Impedance",
      "Reactance",
      "Conductance"
    ],
    "ans": "Conductance",
    "explanation": "Conductance is the reciprocal of resistance."
  },
  {
    "q": "The main element in the thyroid gland is:",
    "options": [
      "Calcium",
      "Iron",
      "Iodine",
      "Sodium"
    ],
    "ans": "Iodine",
    "explanation": "The thyroid gland uses iodine to make thyroid hormones."
  },
  {
    "q": "The characteristic color of Rubidium (Rb) in a Bunsen flame is:",
    "options": [
      "Blue",
      "Green",
      "Yellow",
      "Red-violet"
    ],
    "ans": "Red-violet",
    "explanation": "Rubidium gives a red-violet flame test colour."
  },
  {
    "q": "The function of a salt bridge in an electrochemical cell is:",
    "options": [
      "Complete the external circuit",
      "Generate electricity",
      "Maintain temperature",
      "Allow ions flow, maintain neutrality"
    ],
    "ans": "Allow ions flow, maintain neutrality",
    "explanation": "A salt bridge allows ion flow to maintain electrical neutrality between half-cells."
  },
  {
    "q": "The abnormally high boiling point of water is primarily due to:",
    "options": [
      "Ionic bonding",
      "Hydrogen bonding",
      "Covalent bonding",
      "Metallic bonding"
    ],
    "ans": "Hydrogen bonding",
    "explanation": "Hydrogen bonding between water molecules raises its boiling point unusually high."
  },
  {
    "q": "With a rise in temperature, the conductance of a solution of an electrolyte generally:",
    "options": [
      "Decreases",
      "Remains stable",
      "Increases",
      "Fluctuates randomly"
    ],
    "ans": "Increases",
    "explanation": "Conductance of an electrolyte increases with temperature as ion mobility increases."
  },
  {
    "q": "In neutral molecules, the sum of the oxidation numbers of all atoms is:",
    "options": [
      "+1",
      "Zero",
      "-1",
      "Varies"
    ],
    "ans": "Zero",
    "explanation": "In a neutral molecule, oxidation numbers sum to zero."
  },
  {
    "q": "The group of elements with partially filled d-orbitals is:",
    "options": [
      "Noble gases",
      "Transition metals",
      "Halogens",
      "Alkali metals"
    ],
    "ans": "Transition metals",
    "explanation": "Transition metals are characterised by partially filled d-orbitals."
  },
  {
    "q": "Which element is common to all organic compounds?",
    "options": [
      "Oxygen",
      "Hydrogen",
      "Carbon",
      "Nitrogen"
    ],
    "ans": "Carbon",
    "explanation": "Carbon is present in all organic compounds by definition."
  },
  {
    "q": "1-propanol and 2-propanol have different:",
    "options": [
      "Molecular Weights",
      "Structural formulas",
      "Boiling Points",
      "Atomic Numbers"
    ],
    "ans": "Structural formulas",
    "explanation": "1-propanol and 2-propanol are structural isomers with different structural formulas."
  },
  {
    "q": "Ordinary table salt is sodium chloride; what is baking soda?",
    "options": [
      "Potassium chloride",
      "Potassium carbonate",
      "Potassium hydroxide",
      "Sodium bicarbonate"
    ],
    "ans": "Sodium bicarbonate",
    "explanation": "Baking soda is sodium bicarbonate (NaHCO3)."
  },
  {
    "q": "The nucleus of an atom consists of:",
    "options": [
      "Electrons and neutrons",
      "Electrons and protons",
      "Protons and neutrons",
      "All of the above"
    ],
    "ans": "Protons and neutrons",
    "explanation": "The nucleus contains protons and neutrons."
  },
  {
    "q": "The number of moles of solute present in 1 kg of a solvent is called its:",
    "options": [
      "Molality",
      "Molarity",
      "Normality",
      "Formality"
    ],
    "ans": "Molality",
    "explanation": "Molality is moles of solute per kg of solvent."
  },
  {
    "q": "The most electronegative element among the following is:",
    "options": [
      "Sodium",
      "Bromine",
      "Fluorine",
      "Oxygen"
    ],
    "ans": "Fluorine",
    "explanation": "Fluorine is the most electronegative element."
  },
  {
    "q": "The metal used to recover copper from a solution of copper sulphate is:",
    "options": [
      "Na",
      "Ag",
      "Hg",
      "Fe"
    ],
    "ans": "Fe",
    "explanation": "Iron (Fe) displaces copper from copper sulphate solution."
  },
  {
    "q": "The oldest rocks in the earth's crust are called:",
    "options": [
      "Granite",
      "Basalt",
      "Igneous rocks",
      "Sedimentary rocks"
    ],
    "ans": "Igneous rocks",
    "explanation": "Igneous rocks, formed from cooled magma, are the oldest rock type."
  },
  {
    "q": "The law which states that the amount of gas dissolved in a liquid is proportional to its partial pressure is:",
    "options": [
      "Dalton's law",
      "Gay Lussac's law",
      "Henry's law",
      "Raoult's law"
    ],
    "ans": "Henry's law",
    "explanation": "Henry's law relates gas solubility to partial pressure."
  },
  {
    "q": "Which of the following compounds is readily dissolved in water?",
    "options": [
      "CuO",
      "AgCl",
      "Na₂SO₄",
      "CaCO₃"
    ],
    "ans": "Na₂SO₄",
    "explanation": "Sodium sulphate is soluble in water; the others are largely insoluble."
  },
  {
    "q": "Which of the following is the buffer system of human blood?",
    "options": [
      "H₂CO₃/HCO₃⁻",
      "H₂CO₃/CO₃²⁻",
      "CH₃COOH/CH₃COO⁻",
      "NH₂CONH₂/NH₂CONH₂⁺"
    ],
    "ans": "H₂CO₃/HCO₃⁻",
    "explanation": "The carbonic acid-bicarbonate buffer regulates blood pH."
  },
  {
    "q": "The gas present in the stratosphere which filters out some of the sun's ultraviolet light is:",
    "options": [
      "Helium",
      "Ozone",
      "Oxygen",
      "Methane"
    ],
    "ans": "Ozone",
    "explanation": "Ozone in the stratosphere filters UV radiation."
  },
  {
    "q": "The most commonly used bleaching agent is:",
    "options": [
      "Alcohol",
      "Carbon dioxide",
      "Chlorine",
      "Sodium chloride"
    ],
    "ans": "Chlorine",
    "explanation": "Chlorine is the most common bleaching agent."
  },
  {
    "q": "The nucleus of a hydrogen atom consists of:",
    "options": [
      "1 proton only",
      "1 proton + 2 neutrons",
      "Electron only",
      "Proton only"
    ],
    "ans": "1 proton only",
    "explanation": "Ordinary hydrogen's nucleus is a single proton."
  },
  {
    "q": "The gas given off when NH₄Cl is heated with an alkali is:",
    "options": [
      "N₂",
      "Cl₂",
      "H₂",
      "NH₃"
    ],
    "ans": "NH₃",
    "explanation": "Heating NH4Cl with an alkali releases ammonia gas."
  },
  {
    "q": "The heat required to raise the temperature of a body by 1 K is called:",
    "options": [
      "Specific heat",
      "Thermal capacity",
      "Water equivalent",
      "None of the above"
    ],
    "ans": "Thermal capacity",
    "explanation": "Thermal (heat) capacity is the heat needed to raise a body's temperature by 1K."
  },
  {
    "q": "The nuclear particles which are assumed to hold the nucleus together are:",
    "options": [
      "Electrons",
      "Positrons",
      "Neutrons",
      "Mesons"
    ],
    "ans": "Mesons",
    "explanation": "The strong nuclear force holding nucleons together is mediated by mesons."
  },
  {
    "q": "The metal that is used as a catalyst in the hydrogenation of oil is:",
    "options": [
      "Ni",
      "Pb",
      "Cu",
      "Pt"
    ],
    "ans": "Ni",
    "explanation": "Nickel is the standard catalyst for oil hydrogenation."
  },
  {
    "q": "The Latin word Formica means ant. The name formic acid is derived because it was:",
    "options": [
      "Used to eliminate anthills",
      "Secreted by ants",
      "First obtained by distillation of ants",
      "Ants attracted by odour"
    ],
    "ans": "First obtained by distillation of ants",
    "explanation": "Formic acid was first obtained by distilling ants."
  },
  {
    "q": "What is the number of moles of CO₂ which contains 16 g of oxygen?",
    "options": [
      "0.5 mole",
      "0.2 mole",
      "0.4 mole",
      "0.25 mole"
    ],
    "ans": "0.5 mole",
    "explanation": "16g oxygen = 1 mol O atoms; CO2 has 2 O per molecule, giving 0.5 mol CO2."
  },
  {
    "q": "The single acid which dissolves gold is:",
    "options": [
      "Nitric acid",
      "Hydrochloric acid",
      "Aqua regia",
      "Selenic acid"
    ],
    "ans": "Aqua regia",
    "explanation": "Aqua regia (HNO3+HCl mixture) can dissolve gold."
  },
  {
    "q": "Which of the following is used as laughing gas?",
    "options": [
      "Nitrous oxide (Nitrogen oxide)",
      "Nitrogen dioxide",
      "Nitrogen trioxide",
      "Nitrogen tetraoxide"
    ],
    "ans": "Nitrous oxide (Nitrogen oxide)",
    "explanation": "Nitrous oxide (N2O) is known as laughing gas."
  },
  {
    "q": "One characteristic of transition metals is:",
    "options": [
      "Ability to conduct electricity",
      "Formation of coloured ions",
      "Reducing ability",
      "Ductility"
    ],
    "ans": "Formation of coloured ions",
    "explanation": "Transition metals characteristically form coloured ions."
  },
  {
    "q": "An alkene can be converted to an alkane by:",
    "options": [
      "Halogenation",
      "Hydrogenation",
      "Dehydration",
      "Hydrolysis"
    ],
    "ans": "Hydrogenation",
    "explanation": "Hydrogenation adds hydrogen to convert an alkene to an alkane."
  },
  {
    "q": "Brass is an alloy of copper and:",
    "options": [
      "Zinc",
      "Tin",
      "Iron",
      "Chromium"
    ],
    "ans": "Zinc",
    "explanation": "Brass is an alloy of copper and zinc."
  },
  {
    "q": "How many carbon atoms are there in a benzene ring?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "ans": "6",
    "explanation": "A benzene ring has 6 carbon atoms."
  },
  {
    "q": "The chloride ion has:",
    "options": [
      "17 protons, 17 neutrons, 17 electrons",
      "17 protons, 18 neutrons, 18 electrons",
      "18 protons, 17 neutrons, 17 electrons",
      "18 protons, 18 neutrons, 17 electrons"
    ],
    "ans": "17 protons, 18 neutrons, 18 electrons",
    "explanation": "Cl- has 17 protons, 18 neutrons, and 18 electrons (gained one electron)."
  },
  {
    "q": "Lithium is in a diagonal relationship with:",
    "options": [
      "Calcium",
      "Beryllium",
      "Magnesium",
      "Sodium"
    ],
    "ans": "Magnesium",
    "explanation": "Lithium shows a diagonal relationship with magnesium."
  },
  {
    "q": "The force present in NaCl is:",
    "options": [
      "Covalent",
      "Metallic",
      "Electrostatic",
      "Gravitational"
    ],
    "ans": "Electrostatic",
    "explanation": "NaCl is held together by electrostatic (ionic) attraction."
  },
  {
    "q": "Particles that conduct electricity in water are:",
    "options": [
      "Atoms",
      "Molecules",
      "Ions",
      "Electrons only"
    ],
    "ans": "Ions",
    "explanation": "Ions carry electric current through water/aqueous solutions."
  },
  {
    "q": "Plastics that cannot be softened once hardened are called:",
    "options": [
      "Thermoplastics",
      "Elastomers",
      "PVC",
      "Thermosets"
    ],
    "ans": "Thermosets",
    "explanation": "Thermosetting plastics cannot be softened once hardened."
  },
  {
    "q": "The oldest rocks formed when magma solidified into hard rock are called:",
    "options": [
      "Granite",
      "Basalt",
      "Igneous rocks",
      "Sedimentary rocks"
    ],
    "ans": "Igneous rocks",
    "explanation": "Igneous rocks form from solidified magma."
  },
  {
    "q": "The gas present in the stratosphere that protects the earth from harmful ultraviolet rays is:",
    "options": [
      "Helium",
      "Ozone",
      "Oxygen",
      "Methane"
    ],
    "ans": "Ozone",
    "explanation": "Ozone protects Earth from harmful UV rays."
  },
  {
    "q": "The inherited traits of an organism are controlled by:",
    "options": [
      "RNA molecules",
      "Nucleus",
      "DNA molecules",
      "Enzymes"
    ],
    "ans": "DNA molecules",
    "explanation": "DNA molecules carry hereditary information."
  },
  {
    "q": "Which of the following is not a constituent of blood plasma?",
    "options": [
      "Proteins",
      "Mineral salts",
      "Water",
      "Platelets"
    ],
    "ans": "Platelets",
    "explanation": "Platelets are cells suspended in plasma, not a plasma constituent."
  },
  {
    "q": "The number of moles of solute present in 1 kg of solvent is called:",
    "options": [
      "Molality",
      "Molarity",
      "Normality",
      "Formality"
    ],
    "ans": "Molality",
    "explanation": "Molality is moles of solute per kg solvent."
  },
  {
    "q": "The most electronegative element is:",
    "options": [
      "Sodium",
      "Bromine",
      "Fluorine",
      "Oxygen"
    ],
    "ans": "Fluorine",
    "explanation": "Fluorine is the most electronegative element."
  },
  {
    "q": "The metal used to recover copper from copper sulphate solution is:",
    "options": [
      "Na",
      "Ag",
      "Hg",
      "Fe"
    ],
    "ans": "Fe",
    "explanation": "Iron displaces copper from its sulphate solution."
  },
  {
    "q": "Which buffer system is in human blood?",
    "options": [
      "H₂CO₃/HCO₃⁻",
      "H₂CO₃/CO₃²⁻",
      "CH₃COOH/CH₃COO⁻",
      "NH₂CONH₂/NH₂CONH₂⁺"
    ],
    "ans": "H₂CO₃/HCO₃⁻",
    "explanation": "H2CO3/HCO3- is the main blood buffer system."
  },
  {
    "q": "The gas in the stratosphere that filters UV light is:",
    "options": [
      "Helium",
      "Ozone",
      "Oxygen",
      "Methane"
    ],
    "ans": "Ozone",
    "explanation": "Ozone filters UV light in the stratosphere."
  },
  {
    "q": "The gas given off when NH₄Cl is heated with alkali is:",
    "options": [
      "N₂",
      "Cl₂",
      "H₂",
      "NH₃"
    ],
    "ans": "NH₃",
    "explanation": "NH4Cl + alkali releases ammonia gas."
  },
  {
    "q": "The heat required to raise temperature by 1 K is called:",
    "options": [
      "Specific heat",
      "Thermal capacity",
      "Water equivalent"
    ],
    "ans": "Thermal capacity",
    "explanation": "Thermal capacity is heat needed to raise temperature by 1K."
  },
  {
    "q": "Nuclear particles that hold the nucleus together are:",
    "options": [
      "Electrons",
      "Positrons",
      "Neutrons",
      "Mesons"
    ],
    "ans": "Mesons",
    "explanation": "Mesons mediate the strong nuclear force holding nucleons together."
  },
  {
    "q": "Catalyst used in hydrogenation of oil is:",
    "options": [
      "Ni",
      "Pb",
      "Cu",
      "Pt"
    ],
    "ans": "Ni",
    "explanation": "Nickel catalyses hydrogenation of oils."
  },
  {
    "q": "Formic acid name comes from:",
    "options": [
      "Distillation of ants",
      "Secreted by ants",
      "Used to eliminate anthills"
    ],
    "ans": "Distillation of ants",
    "explanation": "Formic acid's name derives from its discovery via distillation of ants."
  },
  {
    "q": "Inherited traits are controlled by:",
    "options": [
      "RNA",
      "Nucleus",
      "DNA",
      "Enzymes"
    ],
    "ans": "DNA",
    "explanation": "DNA controls inherited traits."
  },
  {
    "q": "Number of moles of CO₂ containing 16 g oxygen:",
    "options": [
      "0.5",
      "0.2",
      "0.4",
      "0.25"
    ],
    "ans": "0.5",
    "explanation": "16g oxygen atoms = 1 mol O; CO2 has 2 O atoms, giving 0.5 mol CO2."
  },
  {
    "q": "Single acid that dissolves gold:",
    "options": [
      "Nitric",
      "Hydrochloric",
      "Aqua regia",
      "Selenic"
    ],
    "ans": "Aqua regia",
    "explanation": "Aqua regia dissolves gold."
  },
  {
    "q": "Laughing gas is:",
    "options": [
      "N₂O",
      "NO₂",
      "N₂O₃",
      "N₂O₄"
    ],
    "ans": "N₂O",
    "explanation": "N2O is laughing gas."
  },
  {
    "q": "Characteristic of transition metals:",
    "options": [
      "Coloured ions",
      "High conductivity",
      "Reducing ability"
    ],
    "ans": "Coloured ions",
    "explanation": "Transition metals form coloured ions."
  },
  {
    "q": "Alkene to alkane conversion:",
    "options": [
      "Halogenation",
      "Hydrogenation",
      "Dehydration",
      "Hydrolysis"
    ],
    "ans": "Hydrogenation",
    "explanation": "Hydrogenation converts alkenes to alkanes."
  },
  {
    "q": "Biodegradable pollutant:",
    "options": [
      "DDT",
      "Plastics",
      "Sewage",
      "Lead compounds"
    ],
    "ans": "Sewage",
    "explanation": "Sewage is biodegradable, unlike DDT, plastics, or lead compounds."
  },
  {
    "q": "Carbon atoms in a benzene ring:",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "ans": "6",
    "explanation": "Benzene ring has 6 carbons."
  },
  {
    "q": "Lithium has a diagonal relationship with:",
    "options": [
      "Calcium",
      "Beryllium",
      "Magnesium",
      "Sodium"
    ],
    "ans": "Magnesium",
    "explanation": "Lithium's diagonal relationship is with magnesium."
  },
  {
    "q": "The oldest rocks formed from magma are:",
    "options": [
      "Igneous rocks",
      "Sedimentary rocks",
      "Metamorphic rocks",
      "Basalt"
    ],
    "ans": "Igneous rocks",
    "explanation": "Igneous rocks form from cooled magma."
  },
  {
    "q": "Which compound is readily soluble in water?",
    "options": [
      "CuO",
      "AgCl",
      "Na₂SO₄",
      "CaCO₃"
    ],
    "ans": "Na₂SO₄",
    "explanation": "Sodium sulphate is water-soluble."
  },
  {
    "q": "The number of moles of solute in 1 kg of solvent is called:",
    "options": [
      "Molality",
      "Molarity",
      "Normality",
      "Formality"
    ],
    "ans": "Molality",
    "explanation": "Molality = moles solute per kg solvent."
  },
  {
    "q": "The law stating that the solubility of a gas in a liquid is proportional to its partial pressure is:",
    "options": [
      "Dalton’s law",
      "Gay Lussac’s law",
      "Henry’s law",
      "Raoult’s law"
    ],
    "ans": "Henry’s law",
    "explanation": "Henry's law governs gas solubility with partial pressure."
  },
  {
    "q": "Which of the following is readily soluble in water?",
    "options": [
      "Copper(II) oxide",
      "Silver chloride",
      "Sodium sulphate",
      "Calcium carbonate"
    ],
    "ans": "Sodium sulphate",
    "explanation": "Sodium sulphate is readily soluble."
  },
  {
    "q": "The buffer system in human blood is:",
    "options": [
      "H₂CO₃ / HCO₃⁻",
      "H₂CO₃ / CO₃²⁻",
      "CH₃COOH / CH₃COO⁻",
      "NH₂CONH₂ / NH₂CONH₂⁺"
    ],
    "ans": "H₂CO₃ / HCO₃⁻",
    "explanation": "The carbonic acid-bicarbonate system buffers blood."
  },
  {
    "q": "The gas in the stratosphere that absorbs ultraviolet radiation is:",
    "options": [
      "Helium",
      "Ozone",
      "Oxygen",
      "Methane"
    ],
    "ans": "Ozone",
    "explanation": "Ozone absorbs stratospheric UV radiation."
  },
  {
    "q": "The gas evolved when ammonium chloride is heated with an alkali is:",
    "options": [
      "Nitrogen",
      "Chlorine",
      "Hydrogen",
      "Ammonia"
    ],
    "ans": "Ammonia",
    "explanation": "Ammonia gas evolves when NH4Cl is heated with alkali."
  },
  {
    "q": "The heat required to raise the temperature of 1 gram of a substance by 1 K is called:",
    "options": [
      "Specific heat capacity",
      "Thermal capacity",
      "Water equivalent",
      "Latent heat"
    ],
    "ans": "Specific heat capacity",
    "explanation": "Specific heat capacity is the heat to raise 1g by 1K."
  },
  {
    "q": "The particles that hold the nucleus together are:",
    "options": [
      "Electrons",
      "Positrons",
      "Neutrons",
      "Mesons"
    ],
    "ans": "Mesons",
    "explanation": "Mesons mediate the nuclear binding force."
  },
  {
    "q": "The catalyst used in the hydrogenation of oils is:",
    "options": [
      "Nickel",
      "Lead",
      "Copper",
      "Platinum"
    ],
    "ans": "Nickel",
    "explanation": "Nickel is used to catalyse oil hydrogenation."
  },
  {
    "q": "Formic acid derives its name from the Latin word for ant because:",
    "options": [
      "It was used to kill ants",
      "It is secreted by ants",
      "It was first obtained from distillation of ants",
      "Ants are attracted to it"
    ],
    "ans": "It was first obtained from distillation of ants",
    "explanation": "Formic acid was first obtained by distilling ants."
  },
  {
    "q": "The number of moles of CO₂ that contains 16 g of oxygen is:",
    "options": [
      "0.5 mole",
      "0.2 mole",
      "0.4 mole",
      "0.25 mole"
    ],
    "ans": "0.5 mole",
    "explanation": "16g O = 1 mol O atoms = 0.5 mol CO2 (2 O per molecule)."
  },
  {
    "q": "The single acid that can dissolve gold is:",
    "options": [
      "Nitric acid",
      "Hydrochloric acid",
      "Aqua regia",
      "Sulphuric acid"
    ],
    "ans": "Aqua regia",
    "explanation": "Aqua regia dissolves gold."
  },
  {
    "q": "A characteristic property of transition metals is:",
    "options": [
      "Formation of coloured ions",
      "High ductility",
      "Strong reducing agents",
      "Low melting point"
    ],
    "ans": "Formation of coloured ions",
    "explanation": "Transition metals form coloured ions."
  },
  {
    "q": "Which of the following pollutants is biodegradable?",
    "options": [
      "DDT",
      "Plastics",
      "Sewage",
      "Lead compounds"
    ],
    "ans": "Sewage",
    "explanation": "Sewage is biodegradable."
  },
  {
    "q": "The number of carbon atoms in a benzene ring is:",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "ans": "6",
    "explanation": "Benzene has 6 carbon atoms."
  },
  {
    "q": "Plastics which cannot be softened on heating are called:",
    "options": [
      "Thermoplastics",
      "Thermosets",
      "Elastomers",
      "PVC"
    ],
    "ans": "Thermosets",
    "explanation": "Thermosets cannot be softened once hardened."
  },
  {
    "q": "Lithium shows a diagonal relationship with:",
    "options": [
      "Calcium",
      "Beryllium",
      "Magnesium",
      "Sodium"
    ],
    "ans": "Magnesium",
    "explanation": "Lithium's diagonal relationship is with magnesium."
  },
  {
    "q": "The type of force present in NaCl is:",
    "options": [
      "Covalent",
      "Metallic",
      "Electrostatic",
      "Gravitational"
    ],
    "ans": "Electrostatic",
    "explanation": "NaCl bonding is electrostatic (ionic)."
  },
  {
    "q": "Particles that conduct electricity in aqueous solution are:",
    "options": [
      "Atoms",
      "Molecules",
      "Ions",
      "Electrons only"
    ],
    "ans": "Ions",
    "explanation": "Ions conduct electricity in aqueous solution."
  },
  {
    "q": "The oldest rocks in the earth’s crust are:",
    "options": [
      "Sedimentary rocks",
      "Metamorphic rocks",
      "Igneous rocks",
      "Sandstone"
    ],
    "ans": "Igneous rocks",
    "explanation": "Igneous rocks are the oldest rock type."
  },
  {
    "q": "Which compound is most soluble in water?",
    "options": [
      "CuO",
      "AgCl",
      "Na₂SO₄",
      "CaCO₃"
    ],
    "ans": "Na₂SO₄",
    "explanation": "Na2SO4 is the most soluble of the options."
  },
  {
    "q": "Which of the following is a property of acids?",
    "options": [
      "Turn red litmus blue",
      "Turn blue litmus red",
      "Have bitter taste",
      "Feel soapy"
    ],
    "ans": "Turn blue litmus red",
    "explanation": "Acids turn blue litmus red."
  },
  {
    "q": "The pH of a neutral solution is:",
    "options": [
      "0",
      "7",
      "14",
      "10"
    ],
    "ans": "7",
    "explanation": "A neutral solution has pH 7."
  },
  {
    "q": "The reaction between an acid and a base is called:",
    "options": [
      "Oxidation",
      "Neutralization",
      "Reduction",
      "Hydrolysis"
    ],
    "ans": "Neutralization",
    "explanation": "Acid + base reaction is neutralization."
  },
  {
    "q": "The chemical formula of rust is:",
    "options": [
      "Fe₂O₃",
      "FeO",
      "Fe₃O₄",
      "Fe₂O₃·xH₂O"
    ],
    "ans": "Fe₂O₃·xH₂O",
    "explanation": "Rust is hydrated iron(III) oxide, Fe2O3·xH2O."
  },
  {
    "q": "The most abundant gas in the atmosphere is:",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    "ans": "Nitrogen",
    "explanation": "Nitrogen makes up about 78% of the atmosphere."
  },
  {
    "q": "Which of the following is an example of a noble gas?",
    "options": [
      "Nitrogen",
      "Helium",
      "Oxygen",
      "Chlorine"
    ],
    "ans": "Helium",
    "explanation": "Helium is a noble gas."
  },
  {
    "q": "The process of converting vegetable oil into vegetable ghee is called:",
    "options": [
      "Hydrogenation",
      "Oxidation",
      "Dehydration",
      "Polymerization"
    ],
    "ans": "Hydrogenation",
    "explanation": "Hydrogenation converts vegetable oil to vegetable ghee."
  },
  {
    "q": "The atomic number of carbon is:",
    "options": [
      "6",
      "8",
      "12",
      "14"
    ],
    "ans": "6",
    "explanation": "Carbon's atomic number is 6."
  },
  {
    "q": "Which of the following is a saturated hydrocarbon?",
    "options": [
      "Ethene",
      "Ethane",
      "Ethyne",
      "Benzene"
    ],
    "ans": "Ethane",
    "explanation": "Ethane is a saturated hydrocarbon (single bonds only)."
  },
  {
    "q": "The functional group present in alcohols is:",
    "options": [
      "–COOH",
      "–OH",
      "–CHO",
      "–CO–"
    ],
    "ans": "–OH",
    "explanation": "-OH is the alcohol functional group."
  },
  {
    "q": "The hardest natural substance is:",
    "options": [
      "Gold",
      "Diamond",
      "Iron",
      "Platinum"
    ],
    "ans": "Diamond",
    "explanation": "Diamond is the hardest known natural substance."
  },
  {
    "q": "The chemical name of baking soda is:",
    "options": [
      "Sodium carbonate",
      "Sodium bicarbonate",
      "Sodium chloride",
      "Potassium nitrate"
    ],
    "ans": "Sodium bicarbonate",
    "explanation": "Baking soda is sodium bicarbonate."
  },
  {
    "q": "Which gas is evolved when zinc reacts with dilute hydrochloric acid?",
    "options": [
      "Oxygen",
      "Hydrogen",
      "Chlorine",
      "Nitrogen"
    ],
    "ans": "Hydrogen",
    "explanation": "Zinc + dilute HCl produces hydrogen gas."
  },
  {
    "q": "The law of conservation of mass was given by:",
    "options": [
      "Dalton",
      "Lavoisier",
      "Rutherford",
      "Bohr"
    ],
    "ans": "Lavoisier",
    "explanation": "Lavoisier established the law of conservation of mass."
  },
  {
    "q": "The atomic symbol for gold is:",
    "options": [
      "Au",
      "Ag",
      "Fe",
      "Cu"
    ],
    "ans": "Au",
    "explanation": "Gold's chemical symbol is Au."
  },
  {
    "q": "Which of the following is an allotrope of carbon?",
    "options": [
      "Diamond",
      "Graphite",
      "Both A and B",
      "None"
    ],
    "ans": "Both A and B",
    "explanation": "Diamond and graphite are both allotropes of carbon."
  },
  {
    "q": "The valency of aluminium is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "3",
    "explanation": "Aluminium has a valency of 3."
  },
  {
    "q": "The common name of sodium hydroxide is:",
    "options": [
      "Baking soda",
      "Caustic soda",
      "Washing soda",
      "Lime"
    ],
    "ans": "Caustic soda",
    "explanation": "Sodium hydroxide is commonly called caustic soda."
  },
  {
    "q": "The catalyst used in the manufacture of ammonia is:",
    "options": [
      "Platinum",
      "Iron",
      "Nickel",
      "Vanadium pentoxide"
    ],
    "ans": "Iron",
    "explanation": "Iron is the catalyst in the Haber process for ammonia."
  },
  {
    "q": "Which of the following is a strong acid?",
    "options": [
      "Acetic acid",
      "Hydrochloric acid",
      "Carbonic acid",
      "Citric acid"
    ],
    "ans": "Hydrochloric acid",
    "explanation": "Hydrochloric acid is a strong acid (fully ionises)."
  },
  {
    "q": "The number of electrons in the outermost shell of sodium is:",
    "options": [
      "1",
      "2",
      "7",
      "8"
    ],
    "ans": "1",
    "explanation": "Sodium has 1 electron in its outermost shell."
  },
  {
    "q": "The formula of sulphuric acid is:",
    "options": [
      "H₂SO₃",
      "H₂SO₄",
      "HCl",
      "HNO₃"
    ],
    "ans": "H₂SO₄",
    "explanation": "Sulphuric acid's formula is H2SO4."
  },
  {
    "q": "Which gas turns lime water milky?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen",
      "Nitrogen"
    ],
    "ans": "Carbon dioxide",
    "explanation": "Carbon dioxide turns limewater milky."
  },
  {
    "q": "The atomic mass of oxygen is:",
    "options": [
      "8",
      "16",
      "32",
      "14"
    ],
    "ans": "16",
    "explanation": "Oxygen's atomic mass is approximately 16."
  },
  {
    "q": "The process by which salt is obtained from sea water is:",
    "options": [
      "Evaporation",
      "Distillation",
      "Filtration",
      "Condensation"
    ],
    "ans": "Evaporation",
    "explanation": "Salt is obtained from seawater by evaporation."
  },
  {
    "q": "Which of the following metals is a liquid at room temperature?",
    "options": [
      "Iron",
      "Mercury",
      "Gold",
      "Silver"
    ],
    "ans": "Mercury",
    "explanation": "Mercury is liquid at room temperature."
  },
  {
    "q": "The chemical formula of water is:",
    "options": [
      "H₂O",
      "CO₂",
      "NaCl",
      "H₂SO₄"
    ],
    "ans": "H₂O",
    "explanation": "Water's formula is H2O."
  },
  {
    "q": "The element with atomic number 1 is:",
    "options": [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Carbon"
    ],
    "ans": "Hydrogen",
    "explanation": "Hydrogen has atomic number 1."
  },
  {
    "q": "Which of the following is used as a fertilizer?",
    "options": [
      "Sodium chloride",
      "Ammonium sulphate",
      "Calcium carbonate",
      "Potassium chloride"
    ],
    "ans": "Ammonium sulphate",
    "explanation": "Ammonium sulphate is used as a fertilizer."
  },
  {
    "q": "The reaction of quicklime with water is:",
    "options": [
      "Exothermic",
      "Endothermic",
      "Neutral",
      "Oxidation"
    ],
    "ans": "Exothermic",
    "explanation": "Quicklime + water is an exothermic reaction."
  },
  {
    "q": "The symbol for potassium is:",
    "options": [
      "P",
      "K",
      "Na",
      "Ca"
    ],
    "ans": "K",
    "explanation": "Potassium's symbol is K."
  },
  {
    "q": "Which acid is present in vinegar?",
    "options": [
      "Citric acid",
      "Acetic acid",
      "Tartaric acid",
      "Lactic acid"
    ],
    "ans": "Acetic acid",
    "explanation": "Vinegar contains acetic acid."
  },
  {
    "q": "The periodic table was first given by:",
    "options": [
      "Mendeleev",
      "Dalton",
      "Rutherford",
      "Bohr"
    ],
    "ans": "Mendeleev",
    "explanation": "Mendeleev first proposed the periodic table."
  },
  {
    "q": "The most reactive metal is:",
    "options": [
      "Sodium",
      "Potassium",
      "Calcium",
      "Magnesium"
    ],
    "ans": "Potassium",
    "explanation": "Potassium is more reactive than sodium, calcium, or magnesium."
  },
  {
    "q": "The gas used in balloons is:",
    "options": [
      "Hydrogen",
      "Helium",
      "Oxygen",
      "Nitrogen"
    ],
    "ans": "Helium",
    "explanation": "Helium is used in balloons (lighter than air, non-flammable)."
  },
  {
    "q": "The chemical name of washing soda is:",
    "options": [
      "Sodium carbonate",
      "Sodium bicarbonate",
      "Calcium carbonate",
      "Sodium hydroxide"
    ],
    "ans": "Sodium carbonate",
    "explanation": "Washing soda is sodium carbonate."
  },
  {
    "q": "Which of the following is a non-metal?",
    "options": [
      "Iron",
      "Sulphur",
      "Zinc",
      "Copper"
    ],
    "ans": "Sulphur",
    "explanation": "Sulphur is a non-metal."
  },
  {
    "q": "The number of protons in an atom is called:",
    "options": [
      "Atomic number",
      "Mass number",
      "Valency",
      "Atomic mass"
    ],
    "ans": "Atomic number",
    "explanation": "The number of protons defines the atomic number."
  },
  {
    "q": "The formula of methane is:",
    "options": [
      "CH₄",
      "C₂H₆",
      "C₂H₄",
      "C₂H₂"
    ],
    "ans": "CH₄",
    "explanation": "Methane's formula is CH4."
  },
  {
    "q": "The metal that does not react with water is:",
    "options": [
      "Sodium",
      "Potassium",
      "Gold",
      "Calcium"
    ],
    "ans": "Gold",
    "explanation": "Gold does not react with water."
  },
  {
    "q": "The pH value of human blood is approximately:",
    "options": [
      "5.5",
      "7.4",
      "8.5",
      "4.5"
    ],
    "ans": "7.4",
    "explanation": "Human blood pH is approximately 7.4."
  },
  {
    "q": "Which of the following is an alkali?",
    "options": [
      "HCl",
      "NaOH",
      "H₂SO₄",
      "HNO₃"
    ],
    "ans": "NaOH",
    "explanation": "NaOH is a strong alkali."
  },
  {
    "q": "The atomic number of chlorine is:",
    "options": [
      "17",
      "18",
      "19",
      "20"
    ],
    "ans": "17",
    "explanation": "Chlorine's atomic number is 17."
  },
  {
    "q": "The process of coating iron with zinc is called:",
    "options": [
      "Galvanization",
      "Electroplating",
      "Alloying",
      "Rusting"
    ],
    "ans": "Galvanization",
    "explanation": "Coating iron with zinc is galvanization."
  },
  {
    "q": "The main component of natural gas is:",
    "options": [
      "Methane",
      "Ethane",
      "Propane",
      "Butane"
    ],
    "ans": "Methane",
    "explanation": "Natural gas is mainly methane."
  },
  {
    "q": "The valency of oxygen is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "2",
    "explanation": "Oxygen has a valency of 2."
  },
  {
    "q": "The chemical used in soda water is:",
    "options": [
      "Carbon dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    "ans": "Carbon dioxide",
    "explanation": "Carbon dioxide is used in soda water."
  },
  {
    "q": "Which of the following is a fossil fuel?",
    "options": [
      "Wood",
      "Coal",
      "Biogas",
      "Solar energy"
    ],
    "ans": "Coal",
    "explanation": "Coal is a fossil fuel."
  },
  {
    "q": "The symbol for silver is:",
    "options": [
      "Si",
      "Ag",
      "Au",
      "S"
    ],
    "ans": "Ag",
    "explanation": "Silver's symbol is Ag."
  },
  {
    "q": "The reaction between iron and sulphur produces:",
    "options": [
      "Iron sulphide",
      "Iron sulphate",
      "Iron oxide",
      "Iron chloride"
    ],
    "ans": "Iron sulphide",
    "explanation": "Iron + sulphur forms iron sulphide."
  },
  {
    "q": "Which of the following is an example of an exothermic reaction?",
    "options": [
      "Photosynthesis",
      "Respiration",
      "Melting of ice",
      "Evaporation of water"
    ],
    "ans": "Respiration",
    "explanation": "Respiration releases energy, making it exothermic."
  },
  {
    "q": "The atomic number of sodium is:",
    "options": [
      "11",
      "12",
      "17",
      "19"
    ],
    "ans": "11",
    "explanation": "Sodium's atomic number is 11."
  },
  {
    "q": "The common name of calcium hydroxide is:",
    "options": [
      "Baking soda",
      "Slaked lime",
      "Washing soda",
      "Caustic soda"
    ],
    "ans": "Slaked lime",
    "explanation": "Calcium hydroxide is commonly called slaked lime."
  },
  {
    "q": "Which gas is known as laughing gas?",
    "options": [
      "Carbon dioxide",
      "Nitrous oxide",
      "Ammonia",
      "Chlorine"
    ],
    "ans": "Nitrous oxide",
    "explanation": "Nitrous oxide is laughing gas."
  },
  {
    "q": "The formula of glucose is:",
    "options": [
      "C₆H₁₂O₆",
      "C₁₂H₂₂O₁₁",
      "CH₄",
      "C₂H₅OH"
    ],
    "ans": "C₆H₁₂O₆",
    "explanation": "Glucose's formula is C6H12O6."
  },
  {
    "q": "The process used to separate a mixture of sand and water is:",
    "options": [
      "Distillation",
      "Filtration",
      "Evaporation",
      "Condensation"
    ],
    "ans": "Filtration",
    "explanation": "Sand and water are separated by filtration."
  },
  {
    "q": "The valency of chlorine is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "1",
    "explanation": "Chlorine has a valency of 1."
  },
  {
    "q": "Which of the following metals is stored in kerosene?",
    "options": [
      "Iron",
      "Sodium",
      "Copper",
      "Silver"
    ],
    "ans": "Sodium",
    "explanation": "Sodium is stored under kerosene due to reactivity."
  },
  {
    "q": "The chemical name of vitamin C is:",
    "options": [
      "Ascorbic acid",
      "Citric acid",
      "Tartaric acid",
      "Acetic acid"
    ],
    "ans": "Ascorbic acid",
    "explanation": "Vitamin C's chemical name is ascorbic acid."
  },
  {
    "q": "The number of electrons in a sodium atom is:",
    "options": [
      "11",
      "12",
      "17",
      "23"
    ],
    "ans": "11",
    "explanation": "A neutral sodium atom has 11 electrons."
  },
  {
    "q": "The main component of biogas is:",
    "options": [
      "Methane",
      "Ethane",
      "Propane",
      "Butane"
    ],
    "ans": "Methane",
    "explanation": "Biogas is mainly methane."
  },
  {
    "q": "Which acid is present in the stomach?",
    "options": [
      "Hydrochloric acid",
      "Sulphuric acid",
      "Nitric acid",
      "Acetic acid"
    ],
    "ans": "Hydrochloric acid",
    "explanation": "Hydrochloric acid is present in the stomach."
  },
  {
    "q": "The symbol for mercury is:",
    "options": [
      "Hg",
      "Mg",
      "Mn",
      "Me"
    ],
    "ans": "Hg",
    "explanation": "Mercury's symbol is Hg."
  },
  {
    "q": "The periodic table arranges elements in order of increasing:",
    "options": [
      "Atomic mass",
      "Atomic number",
      "Valency",
      "Density"
    ],
    "ans": "Atomic number",
    "explanation": "The modern periodic table is ordered by atomic number."
  },
  {
    "q": "The reaction of a metal with oxygen produces:",
    "options": [
      "Metal oxide",
      "Metal hydroxide",
      "Metal chloride",
      "Metal sulphate"
    ],
    "ans": "Metal oxide",
    "explanation": "Metal + oxygen forms a metal oxide."
  },
  {
    "q": "Which of the following is a homogeneous mixture?",
    "options": [
      "Sand and water",
      "Air",
      "Oil and water",
      "Salt and sand"
    ],
    "ans": "Air",
    "explanation": "Air is a homogeneous mixture of gases."
  },
  {
    "q": "The atomic mass of carbon is:",
    "options": [
      "6",
      "12",
      "14",
      "16"
    ],
    "ans": "12",
    "explanation": "Carbon's atomic mass is about 12."
  },
  {
    "q": "The chemical formula of limestone is:",
    "options": [
      "CaCO₃",
      "CaO",
      "Ca(OH)₂",
      "CaCl₂"
    ],
    "ans": "CaCO₃",
    "explanation": "Limestone's formula is CaCO3."
  },
  {
    "q": "Which gas is used for purification of water?",
    "options": [
      "Chlorine",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    "ans": "Chlorine",
    "explanation": "Chlorine is used to purify water."
  },
  {
    "q": "The valency of magnesium is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "2",
    "explanation": "Magnesium has a valency of 2."
  },
  {
    "q": "The process of rusting is an example of:",
    "options": [
      "Oxidation",
      "Reduction",
      "Neutralization",
      "Hydrolysis"
    ],
    "ans": "Oxidation",
    "explanation": "Rusting is a form of oxidation."
  },
  {
    "q": "The chemical name of table sugar is:",
    "options": [
      "Glucose",
      "Sucrose",
      "Fructose",
      "Maltose"
    ],
    "ans": "Sucrose",
    "explanation": "Table sugar is chemically sucrose."
  },
  {
    "q": "Which of the following is a metalloid?",
    "options": [
      "Silicon",
      "Iron",
      "Copper",
      "Aluminium"
    ],
    "ans": "Silicon",
    "explanation": "Silicon is a metalloid."
  },
  {
    "q": "The formula of nitric acid is:",
    "options": [
      "HNO₃",
      "H₂SO₄",
      "HCl",
      "H₂CO₃"
    ],
    "ans": "HNO₃",
    "explanation": "Nitric acid's formula is HNO3."
  },
  {
    "q": "The number of protons in an oxygen atom is:",
    "options": [
      "8",
      "16",
      "18",
      "6"
    ],
    "ans": "8",
    "explanation": "Oxygen has 8 protons."
  },
  {
    "q": "The gas released during photosynthesis is:",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    "ans": "Oxygen",
    "explanation": "Oxygen is released during photosynthesis."
  },
  {
    "q": "The common name of sodium carbonate is:",
    "options": [
      "Baking soda",
      "Washing soda",
      "Caustic soda",
      "Slaked lime"
    ],
    "ans": "Washing soda",
    "explanation": "Sodium carbonate is commonly called washing soda."
  },
  {
    "q": "Which metal is used in thermometers?",
    "options": [
      "Mercury",
      "Iron",
      "Copper",
      "Silver"
    ],
    "ans": "Mercury",
    "explanation": "Mercury is used in thermometers."
  },
  {
    "q": "The atomic symbol for lead is:",
    "options": [
      "Pb",
      "Fe",
      "Zn",
      "Sn"
    ],
    "ans": "Pb",
    "explanation": "Lead's symbol is Pb."
  },
  {
    "q": "The pH of an acidic solution is:",
    "options": [
      "Less than 7",
      "Equal to 7",
      "Greater than 7",
      "Zero"
    ],
    "ans": "Less than 7",
    "explanation": "An acidic solution has pH less than 7."
  },
  {
    "q": "The chemical used in fire extinguishers is:",
    "options": [
      "Sodium bicarbonate",
      "Calcium carbonate",
      "Potassium chloride",
      "Magnesium sulphate"
    ],
    "ans": "Sodium bicarbonate",
    "explanation": "Sodium bicarbonate is used in some fire extinguishers."
  },
  {
    "q": "Which of the following is an ore of iron?",
    "options": [
      "Haematite",
      "Bauxite",
      "Galena",
      "Cinnabar"
    ],
    "ans": "Haematite",
    "explanation": "Haematite is a major ore of iron."
  },
  {
    "q": "The valency of nitrogen in ammonia is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "3",
    "explanation": "Nitrogen has a valency of 3 in ammonia (NH3)."
  },
  {
    "q": "The process of separation of cream from milk is called:",
    "options": [
      "Centrifugation",
      "Filtration",
      "Distillation",
      "Evaporation"
    ],
    "ans": "Centrifugation",
    "explanation": "Cream is separated from milk by centrifugation."
  },
  {
    "q": "The chemical formula of ammonia is:",
    "options": [
      "NH₃",
      "N₂",
      "NO₂",
      "N₂O"
    ],
    "ans": "NH₃",
    "explanation": "Ammonia's formula is NH3."
  },
  {
    "q": "Which gas is known as marsh gas?",
    "options": [
      "Methane",
      "Ethane",
      "Propane",
      "Butane"
    ],
    "ans": "Methane",
    "explanation": "Methane is known as marsh gas."
  },
  {
    "q": "The symbol for tin is:",
    "options": [
      "Sn",
      "Pb",
      "Zn",
      "Cu"
    ],
    "ans": "Sn",
    "explanation": "Tin's symbol is Sn."
  },
  {
    "q": "The main gas in LPG is:",
    "options": [
      "Butane",
      "Methane",
      "Ethane",
      "Propane"
    ],
    "ans": "Butane",
    "explanation": "LPG is mainly butane (with some propane)."
  },
  {
    "q": "The number of electrons in a chlorine atom is:",
    "options": [
      "17",
      "18",
      "35",
      "7"
    ],
    "ans": "17",
    "explanation": "A neutral chlorine atom has 17 electrons."
  },
  {
    "q": "The reaction between calcium oxide and water is:",
    "options": [
      "Exothermic",
      "Endothermic",
      "Neutral",
      "Reduction"
    ],
    "ans": "Exothermic",
    "explanation": "CaO + water is an exothermic reaction."
  },
  {
    "q": "The chemical name of plaster of Paris is:",
    "options": [
      "Calcium sulphate hemihydrate",
      "Calcium carbonate",
      "Calcium hydroxide",
      "Calcium chloride"
    ],
    "ans": "Calcium sulphate hemihydrate",
    "explanation": "Plaster of Paris is calcium sulphate hemihydrate."
  },
  {
    "q": "Which of the following is used as a drying agent?",
    "options": [
      "Calcium chloride",
      "Sodium chloride",
      "Potassium chloride",
      "Magnesium chloride"
    ],
    "ans": "Calcium chloride",
    "explanation": "Calcium chloride is used as a drying agent."
  },
  {
    "q": "The atomic number of iron is:",
    "options": [
      "26",
      "27",
      "28",
      "29"
    ],
    "ans": "26",
    "explanation": "Iron's atomic number is 26."
  },
  {
    "q": "The valency of carbon in methane is:",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "ans": "4",
    "explanation": "Carbon has a valency of 4 in methane."
  },
  {
    "q": "The formula of sodium hydroxide is:",
    "options": [
      "NaOH",
      "Na₂CO₃",
      "NaCl",
      "NaHCO₃"
    ],
    "ans": "NaOH",
    "explanation": "Sodium hydroxide's formula is NaOH."
  },
  {
    "q": "Which of the following is a reducing agent?",
    "options": [
      "Oxygen",
      "Hydrogen",
      "Chlorine",
      "Nitrogen"
    ],
    "ans": "Hydrogen",
    "explanation": "Hydrogen acts as a reducing agent."
  },
  {
    "q": "The ore of aluminium is:",
    "options": [
      "Bauxite",
      "Haematite",
      "Galena",
      "Cinnabar"
    ],
    "ans": "Bauxite",
    "explanation": "Bauxite is the ore of aluminium."
  },
  {
    "q": "The pH of pure water is:",
    "options": [
      "5",
      "7",
      "9",
      "14"
    ],
    "ans": "7",
    "explanation": "Pure water has a pH of 7."
  },
  {
    "q": "The chemical formula of sulphuric acid is:",
    "options": [
      "H₂SO₃",
      "H₂SO₄",
      "HCl",
      "HNO₃"
    ],
    "ans": "H₂SO₄",
    "explanation": "Sulphuric acid's formula is H2SO4."
  },
  {
    "q": "The atomic number of potassium is:",
    "options": [
      "17",
      "19",
      "20",
      "11"
    ],
    "ans": "19",
    "explanation": "Potassium's atomic number is 19."
  },
  {
    "q": "The common name of calcium oxide is:",
    "options": [
      "Quicklime",
      "Slaked lime",
      "Washing soda",
      "Baking soda"
    ],
    "ans": "Quicklime",
    "explanation": "Calcium oxide is commonly called quicklime."
  },
  {
    "q": "Which gas is produced when zinc reacts with dilute sulphuric acid?",
    "options": [
      "Oxygen",
      "Hydrogen",
      "Chlorine",
      "Nitrogen"
    ],
    "ans": "Hydrogen",
    "explanation": "Zinc + dilute sulphuric acid produces hydrogen."
  },
  {
    "q": "The formula of ethanol is:",
    "options": [
      "CH₃OH",
      "C₂H₅OH",
      "C₃H₇OH",
      "C₆H₁₂O₆"
    ],
    "ans": "C₂H₅OH",
    "explanation": "Ethanol's formula is C2H5OH."
  },
  {
    "q": "The process of separating a mixture of two immiscible liquids is called:",
    "options": [
      "Distillation",
      "Separating funnel",
      "Filtration",
      "Evaporation"
    ],
    "ans": "Separating funnel",
    "explanation": "Immiscible liquids are separated using a separating funnel."
  },
  {
    "q": "The valency of sulphur in H₂SO₄ is:",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "ans": "6",
    "explanation": "Sulphur has a valency/oxidation state of 6 in H2SO4."
  },
  {
    "q": "Which metal is extracted from bauxite?",
    "options": [
      "Iron",
      "Aluminium",
      "Copper",
      "Zinc"
    ],
    "ans": "Aluminium",
    "explanation": "Aluminium is extracted from bauxite."
  },
  {
    "q": "The chemical name of vitamin D is:",
    "options": [
      "Calciferol",
      "Ascorbic acid",
      "Retinol",
      "Tocopherol"
    ],
    "ans": "Calciferol",
    "explanation": "Vitamin D's chemical name is calciferol."
  },
  {
    "q": "The number of protons in a chlorine atom is:",
    "options": [
      "17",
      "18",
      "35",
      "7"
    ],
    "ans": "17",
    "explanation": "Chlorine has 17 protons."
  },
  {
    "q": "The main component of CNG is:",
    "options": [
      "Methane",
      "Ethane",
      "Propane",
      "Butane"
    ],
    "ans": "Methane",
    "explanation": "CNG is mainly methane."
  },
  {
    "q": "Which acid is known as the king of chemicals?",
    "options": [
      "Hydrochloric acid",
      "Sulphuric acid",
      "Nitric acid",
      "Acetic acid"
    ],
    "ans": "Sulphuric acid",
    "explanation": "Sulphuric acid is called the king of chemicals."
  },
  {
    "q": "The symbol for tungsten is:",
    "options": [
      "W",
      "Tu",
      "Tn",
      "Tg"
    ],
    "ans": "W",
    "explanation": "Tungsten's symbol is W."
  },
  {
    "q": "Mendeleev arranged elements in order of increasing:",
    "options": [
      "Atomic number",
      "Atomic mass",
      "Valency",
      "Density"
    ],
    "ans": "Atomic mass",
    "explanation": "Mendeleev originally ordered elements by atomic mass."
  },
  {
    "q": "The reaction of sodium with water produces:",
    "options": [
      "Sodium oxide",
      "Sodium hydroxide",
      "Sodium chloride",
      "Sodium sulphate"
    ],
    "ans": "Sodium hydroxide",
    "explanation": "Sodium + water produces sodium hydroxide (and hydrogen gas)."
  },
  {
    "q": "Which of the following is a heterogeneous mixture?",
    "options": [
      "Air",
      "Salt solution",
      "Oil and water",
      "Sugar solution"
    ],
    "ans": "Oil and water",
    "explanation": "Oil and water form a heterogeneous mixture."
  },
  {
    "q": "The atomic mass of nitrogen is:",
    "options": [
      "7",
      "14",
      "28",
      "16"
    ],
    "ans": "14",
    "explanation": "Nitrogen's atomic mass is about 14."
  },
  {
    "q": "The chemical formula of marble is:",
    "options": [
      "CaCO₃",
      "CaO",
      "Ca(OH)₂",
      "CaSO₄"
    ],
    "ans": "CaCO₃",
    "explanation": "Marble's formula is CaCO3."
  },
  {
    "q": "Which gas is used for ripening of fruits?",
    "options": [
      "Chlorine",
      "Ethylene",
      "Nitrogen",
      "Hydrogen"
    ],
    "ans": "Ethylene",
    "explanation": "Ethylene gas is used to ripen fruit."
  },
  {
    "q": "The valency of aluminium in AlCl₃ is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "3",
    "explanation": "Aluminium has a valency of 3 in AlCl3."
  },
  {
    "q": "The formation of rust on iron is an example of:",
    "options": [
      "Reduction",
      "Oxidation",
      "Neutralization",
      "Sublimation"
    ],
    "ans": "Oxidation",
    "explanation": "Rust formation is an oxidation reaction."
  },
  {
    "q": "The chemical name of common salt is:",
    "options": [
      "Sodium carbonate",
      "Sodium chloride",
      "Sodium bicarbonate",
      "Sodium hydroxide"
    ],
    "ans": "Sodium chloride",
    "explanation": "Common salt is chemically sodium chloride."
  },
  {
    "q": "Which of the following is a non-electrolyte?",
    "options": [
      "Sugar solution",
      "Salt solution",
      "Acid solution",
      "Base solution"
    ],
    "ans": "Sugar solution",
    "explanation": "Sugar solution is a non-electrolyte (doesn't ionise)."
  },
  {
    "q": "The formula of hydrochloric acid is:",
    "options": [
      "HCl",
      "H₂SO₄",
      "HNO₃",
      "H₂CO₃"
    ],
    "ans": "HCl",
    "explanation": "Hydrochloric acid's formula is HCl."
  },
  {
    "q": "The number of neutrons in carbon-12 is:",
    "options": [
      "6",
      "12",
      "18",
      "0"
    ],
    "ans": "6",
    "explanation": "Carbon-12 has 6 neutrons (mass 12 - 6 protons)."
  },
  {
    "q": "The gas released during respiration is:",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    "ans": "Carbon dioxide",
    "explanation": "Carbon dioxide is released during respiration."
  },
  {
    "q": "The common name of sodium bicarbonate is:",
    "options": [
      "Baking soda",
      "Washing soda",
      "Caustic soda",
      "Slaked lime"
    ],
    "ans": "Baking soda",
    "explanation": "Sodium bicarbonate is commonly called baking soda."
  },
  {
    "q": "Which non-metal is a good conductor of electricity?",
    "options": [
      "Sulphur",
      "Graphite",
      "Phosphorus",
      "Iodine"
    ],
    "ans": "Graphite",
    "explanation": "Graphite, a non-metal, conducts electricity well."
  },
  {
    "q": "The atomic symbol for platinum is:",
    "options": [
      "Pt",
      "Pl",
      "Pm",
      "Pd"
    ],
    "ans": "Pt",
    "explanation": "Platinum's symbol is Pt."
  },
  {
    "q": "The pH of a basic solution is:",
    "options": [
      "Less than 7",
      "Equal to 7",
      "Greater than 7",
      "Zero"
    ],
    "ans": "Greater than 7",
    "explanation": "A basic solution has pH greater than 7."
  },
  {
    "q": "The chemical used to remove permanent hardness of water is:",
    "options": [
      "Sodium carbonate",
      "Calcium chloride",
      "Potassium chloride",
      "Magnesium sulphate"
    ],
    "ans": "Sodium carbonate",
    "explanation": "Sodium carbonate removes permanent water hardness."
  },
  {
    "q": "Which of the following is an ore of copper?",
    "options": [
      "Haematite",
      "Bauxite",
      "Chalcopyrite",
      "Cinnabar"
    ],
    "ans": "Chalcopyrite",
    "explanation": "Chalcopyrite is a major ore of copper."
  },
  {
    "q": "The valency of hydrogen in water is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "1",
    "explanation": "Hydrogen has a valency of 1 in water."
  },
  {
    "q": "The process used to separate a mixture of ammonium chloride and salt is:",
    "options": [
      "Sublimation",
      "Filtration",
      "Distillation",
      "Evaporation"
    ],
    "ans": "Sublimation",
    "explanation": "Ammonium chloride sublimes, separating it from salt."
  },
  {
    "q": "The chemical formula of urea is:",
    "options": [
      "NH₂CONH₂",
      "NH₃",
      "NO₂",
      "N₂O"
    ],
    "ans": "NH₂CONH₂",
    "explanation": "Urea's formula is NH2CONH2."
  },
  {
    "q": "Which gas is known as producer gas?",
    "options": [
      "Carbon monoxide + Nitrogen",
      "Methane",
      "Ethane",
      "Hydrogen"
    ],
    "ans": "Carbon monoxide + Nitrogen",
    "explanation": "Producer gas is a mixture of carbon monoxide and nitrogen."
  },
  {
    "q": "The symbol for antimony is:",
    "options": [
      "Sb",
      "An",
      "As",
      "At"
    ],
    "ans": "Sb",
    "explanation": "Antimony's symbol is Sb."
  },
  {
    "q": "The main gas present in air is:",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Argon"
    ],
    "ans": "Nitrogen",
    "explanation": "Nitrogen is the main gas in air (~78%)."
  },
  {
    "q": "The number of electrons in a magnesium atom is:",
    "options": [
      "12",
      "24",
      "8",
      "2"
    ],
    "ans": "12",
    "explanation": "A neutral magnesium atom has 12 electrons."
  },
  {
    "q": "The reaction between acid and metal carbonate produces:",
    "options": [
      "Salt + Water + Carbon dioxide",
      "Salt + Hydrogen",
      "Salt + Oxygen",
      "Salt + Water"
    ],
    "ans": "Salt + Water + Carbon dioxide",
    "explanation": "Acid + metal carbonate gives salt, water, and CO2."
  },
  {
    "q": "The chemical name of gypsum is:",
    "options": [
      "Calcium sulphate dihydrate",
      "Calcium carbonate",
      "Calcium hydroxide",
      "Calcium chloride"
    ],
    "ans": "Calcium sulphate dihydrate",
    "explanation": "Gypsum is calcium sulphate dihydrate."
  },
  {
    "q": "Which substance is used as bleaching powder?",
    "options": [
      "Calcium oxychloride",
      "Sodium chloride",
      "Potassium chloride",
      "Magnesium chloride"
    ],
    "ans": "Calcium oxychloride",
    "explanation": "Bleaching powder is calcium oxychloride."
  },
  {
    "q": "The atomic number of copper is:",
    "options": [
      "29",
      "30",
      "26",
      "47"
    ],
    "ans": "29",
    "explanation": "Copper's atomic number is 29."
  },
  {
    "q": "The gas filled in fluorescent tubes is:",
    "options": [
      "Neon",
      "Argon",
      "Mercury vapour",
      "Helium"
    ],
    "ans": "Mercury vapour",
    "explanation": "Fluorescent tubes contain mercury vapour that emits UV light."
  },
  {
    "q": "The valency of chlorine in HCl is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "1",
    "explanation": "Chlorine has a valency of 1 in HCl."
  },
  {
    "q": "The formula of sodium carbonate is:",
    "options": [
      "Na₂CO₃",
      "NaHCO₃",
      "NaOH",
      "NaCl"
    ],
    "ans": "Na₂CO₃",
    "explanation": "Sodium carbonate's formula is Na2CO3."
  },
  {
    "q": "Which of the following is an oxidizing agent?",
    "options": [
      "Hydrogen",
      "Oxygen",
      "Carbon",
      "Nitrogen"
    ],
    "ans": "Oxygen",
    "explanation": "Oxygen acts as an oxidizing agent."
  },
  {
    "q": "The ore of zinc is:",
    "options": [
      "Zinc blende",
      "Haematite",
      "Bauxite",
      "Galena"
    ],
    "ans": "Zinc blende",
    "explanation": "Zinc blende is the main ore of zinc."
  },
  {
    "q": "The pH of lemon juice is approximately:",
    "options": [
      "2",
      "7",
      "9",
      "12"
    ],
    "ans": "2",
    "explanation": "Lemon juice has a pH of approximately 2."
  },
  {
    "q": "The chemical formula of acetic acid is:",
    "options": [
      "CH₃COOH",
      "H₂SO₄",
      "HCl",
      "HNO₃"
    ],
    "ans": "CH₃COOH",
    "explanation": "Acetic acid's formula is CH3COOH."
  }
],
  "PUTME_PHYSICS": [
  {
    "q": "Light year is a unit of:",
    "options": [
      "Time",
      "Distance",
      "Light",
      "Intensity of light"
    ],
    "ans": "Distance",
    "explanation": "A light year measures distance (the distance light travels in a year)."
  },
  {
    "q": "Mirage is due to:",
    "options": [
      "Unequal heating of different parts of the atmosphere",
      "Magnetic disturbances in the atmosphere",
      "Depletion of ozone layer",
      "Equal heating of different parts of the atmosphere"
    ],
    "ans": "Unequal heating of different parts of the atmosphere",
    "explanation": "Mirage results from unequal heating causing varying air density/refraction."
  },
  {
    "q": "Pa (pascal) is the SI unit of:",
    "options": [
      "Thrust",
      "Pressure",
      "Frequency",
      "Conductivity"
    ],
    "ans": "Pressure",
    "explanation": "The pascal is the SI unit of pressure."
  },
  {
    "q": "Metals are good conductors of electricity because:",
    "options": [
      "They contain free electrons",
      "The atoms are lightly packed",
      "They have high melting point",
      "All of the above"
    ],
    "ans": "They contain free electrons",
    "explanation": "Free electrons in metals allow them to conduct electricity well."
  },
  {
    "q": "The resistance of a piece of wire of 20 m length and cross-sectional area 8 × 10⁻⁶ m² is:",
    "options": [
      "1.0 Ω",
      "10.0 Ω",
      "0.5 Ω",
      "5.0 Ω"
    ],
    "ans": "5.0 Ω",
    "explanation": "Using R=ρL/A with typical wire resistivity gives approximately 5.0 Ω."
  },
  {
    "q": "If two bodies of different masses, initially at rest, are acted upon by the same force for the same time, then both bodies acquire the same:",
    "options": [
      "Velocity",
      "Momentum",
      "Acceleration",
      "Kinetic energy"
    ],
    "ans": "Momentum",
    "explanation": "Equal force over equal time gives equal impulse, hence equal momentum change."
  },
  {
    "q": "Which of the following is a scalar quantity?",
    "options": [
      "Force",
      "Pressure",
      "Velocity",
      "Acceleration"
    ],
    "ans": "Pressure",
    "explanation": "Pressure is a scalar quantity (magnitude only, no direction)."
  },
  {
    "q": "Rectifiers are used to convert:",
    "options": [
      "Voltage",
      "Current",
      "Power",
      "Frequency"
    ],
    "ans": "Current",
    "explanation": "Rectifiers convert alternating current to direct current."
  },
  {
    "q": "The SI unit of force is:",
    "options": [
      "Joule",
      "Newton",
      "Watt",
      "Pascal"
    ],
    "ans": "Newton",
    "explanation": "The newton is the SI unit of force."
  },
  {
    "q": "The law of inertia is given by:",
    "options": [
      "Newton’s first law",
      "Newton’s second law",
      "Newton’s third law",
      "Law of gravitation"
    ],
    "ans": "Newton’s first law",
    "explanation": "Newton's first law is the law of inertia."
  },
  {
    "q": "The unit of work is:",
    "options": [
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "ans": "Joule",
    "explanation": "The joule is the SI unit of work."
  },
  {
    "q": "The acceleration due to gravity on the surface of the earth is approximately:",
    "options": [
      "9.8 m/s²",
      "10 m/s²",
      "8.9 m/s²",
      "11 m/s²"
    ],
    "ans": "9.8 m/s²",
    "explanation": "Earth's gravitational acceleration is approximately 9.8 m/s²."
  },
  {
    "q": "Sound cannot travel through:",
    "options": [
      "Solid",
      "Liquid",
      "Gas",
      "Vacuum"
    ],
    "ans": "Vacuum",
    "explanation": "Sound needs a medium and cannot travel through a vacuum."
  },
  {
    "q": "The frequency of sound waves is measured in:",
    "options": [
      "Hertz",
      "Meter",
      "Second",
      "Newton"
    ],
    "ans": "Hertz",
    "explanation": "Frequency is measured in Hertz."
  },
  {
    "q": "The mirror used in vehicles to see the rear is:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "None of these"
    ],
    "ans": "Convex mirror",
    "explanation": "Convex mirrors give a wider field of view, used as rear-view mirrors."
  },
  {
    "q": "The lens used by short-sighted persons is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Cylindrical lens",
      "Bifocal lens"
    ],
    "ans": "Concave lens",
    "explanation": "Concave (diverging) lenses correct short-sightedness (myopia)."
  },
  {
    "q": "The SI unit of electric current is:",
    "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "ans": "Ampere",
    "explanation": "The ampere is the SI unit of electric current."
  },
  {
    "q": "Ohm’s law states that:",
    "options": [
      "V = IR",
      "P = VI",
      "E = mc²",
      "F = ma"
    ],
    "ans": "V = IR",
    "explanation": "Ohm's law states V = IR."
  },
  {
    "q": "The instrument used to measure electric current is:",
    "options": [
      "Voltmeter",
      "Ammeter",
      "Galvanometer",
      "Multimeter"
    ],
    "ans": "Ammeter",
    "explanation": "An ammeter measures electric current."
  },
  {
    "q": "The power of a lens is measured in:",
    "options": [
      "Dioptre",
      "Meter",
      "Hertz",
      "Newton"
    ],
    "ans": "Dioptre",
    "explanation": "Lens power is measured in dioptres."
  },
  {
    "q": "The image formed by a plane mirror is:",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Virtual and erect",
    "explanation": "A plane mirror forms a virtual, erect image."
  },
  {
    "q": "The speed of light in vacuum is:",
    "options": [
      "3 × 10⁸ m/s",
      "3 × 10⁶ m/s",
      "3 × 10¹⁰ m/s",
      "3 × 10⁵ m/s"
    ],
    "ans": "3 × 10⁸ m/s",
    "explanation": "Light travels at about 3×10^8 m/s in vacuum."
  },
  {
    "q": "The phenomenon of splitting of white light into seven colours is called:",
    "options": [
      "Reflection",
      "Refraction",
      "Dispersion",
      "Diffraction"
    ],
    "ans": "Dispersion",
    "explanation": "Dispersion splits white light into its component colours."
  },
  {
    "q": "The unit of electric power is:",
    "options": [
      "Joule",
      "Watt",
      "Volt",
      "Ampere"
    ],
    "ans": "Watt",
    "explanation": "Electric power is measured in watts."
  },
  {
    "q": "The force of attraction between any two objects is called:",
    "options": [
      "Friction",
      "Gravitation",
      "Tension",
      "Normal force"
    ],
    "ans": "Gravitation",
    "explanation": "Gravitation is the attractive force between any two masses."
  },
  {
    "q": "The SI unit of energy is:",
    "options": [
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "ans": "Joule",
    "explanation": "Energy is measured in joules."
  },
  {
    "q": "The pressure exerted by a liquid at a point depends on:",
    "options": [
      "Depth",
      "Density",
      "Both depth and density",
      "Area"
    ],
    "ans": "Both depth and density",
    "explanation": "Liquid pressure at a point depends on both depth and density."
  },
  {
    "q": "The law of conservation of energy states that energy can neither be:",
    "options": [
      "Created nor destroyed",
      "Transferred",
      "Converted",
      "Used"
    ],
    "ans": "Created nor destroyed",
    "explanation": "Energy can neither be created nor destroyed, only transformed."
  },
  {
    "q": "The device used to step up or step down voltage is:",
    "options": [
      "Transformer",
      "Rectifier",
      "Generator",
      "Motor"
    ],
    "ans": "Transformer",
    "explanation": "A transformer steps voltage up or down."
  },
  {
    "q": "The colour of the sky appears blue due to:",
    "options": [
      "Reflection",
      "Refraction",
      "Scattering",
      "Dispersion"
    ],
    "ans": "Scattering",
    "explanation": "Scattering of shorter wavelengths (blue) gives the sky its colour."
  },
  {
    "q": "The focal length of a concave mirror is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "ans": "Negative",
    "explanation": "A concave mirror's focal length is taken as negative by convention."
  },
  {
    "q": "The SI unit of frequency is:",
    "options": [
      "Hertz",
      "Meter",
      "Second",
      "Newton"
    ],
    "ans": "Hertz",
    "explanation": "Frequency's SI unit is Hertz."
  },
  {
    "q": "The instrument used to measure temperature is:",
    "options": [
      "Barometer",
      "Thermometer",
      "Hygrometer",
      "Anemometer"
    ],
    "ans": "Thermometer",
    "explanation": "A thermometer measures temperature."
  },
  {
    "q": "The potential difference is measured by:",
    "options": [
      "Ammeter",
      "Voltmeter",
      "Galvanometer",
      "Multimeter"
    ],
    "ans": "Voltmeter",
    "explanation": "A voltmeter measures potential difference."
  },
  {
    "q": "The force acting on a body due to gravity is called:",
    "options": [
      "Weight",
      "Mass",
      "Pressure",
      "Thrust"
    ],
    "ans": "Weight",
    "explanation": "Weight is the gravitational force on a body."
  },
  {
    "q": "The echo is heard due to:",
    "options": [
      "Reflection of sound",
      "Refraction of sound",
      "Diffraction",
      "Interference"
    ],
    "ans": "Reflection of sound",
    "explanation": "An echo is caused by reflection of sound off a surface."
  },
  {
    "q": "The image formed by a convex lens when the object is at infinity is:",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Real and inverted",
    "explanation": "A convex lens forms a real, inverted image at focus when object is at infinity."
  },
  {
    "q": "The unit of resistance is:",
    "options": [
      "Ohm",
      "Volt",
      "Ampere",
      "Watt"
    ],
    "ans": "Ohm",
    "explanation": "Resistance is measured in ohms."
  },
  {
    "q": "The phenomenon responsible for the working of a transformer is:",
    "options": [
      "Mutual induction",
      "Self induction",
      "Electromagnetic induction",
      "All of the above"
    ],
    "ans": "Mutual induction",
    "explanation": "Transformers work via mutual induction between coils."
  },
  {
    "q": "The speed of sound is maximum in:",
    "options": [
      "Air",
      "Water",
      "Steel",
      "Vacuum"
    ],
    "ans": "Steel",
    "explanation": "Sound travels fastest through solids like steel."
  },
  {
    "q": "The mirror used by dentists is:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "None"
    ],
    "ans": "Concave mirror",
    "explanation": "Dentists use concave mirrors to magnify the view of teeth."
  },
  {
    "q": "The lens used for correcting long-sightedness is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Cylindrical lens",
      "Bifocal lens"
    ],
    "ans": "Convex lens",
    "explanation": "Convex (converging) lenses correct long-sightedness."
  },
  {
    "q": "The SI unit of electric charge is:",
    "options": [
      "Volt",
      "Ampere",
      "Coulomb",
      "Ohm"
    ],
    "ans": "Coulomb",
    "explanation": "Electric charge is measured in coulombs."
  },
  {
    "q": "The direction of induced current is given by:",
    "options": [
      "Fleming’s left hand rule",
      "Fleming’s right hand rule",
      "Right hand thumb rule",
      "Left hand thumb rule"
    ],
    "ans": "Fleming’s right hand rule",
    "explanation": "Fleming's right hand rule gives the direction of induced current."
  },
  {
    "q": "The pressure at a point in a liquid is:",
    "options": [
      "Directly proportional to depth",
      "Inversely proportional to depth",
      "Independent of depth",
      "Proportional to area"
    ],
    "ans": "Directly proportional to depth",
    "explanation": "Liquid pressure is directly proportional to depth."
  },
  {
    "q": "The law of reflection states that the angle of incidence is equal to:",
    "options": [
      "Angle of refraction",
      "Angle of reflection",
      "Angle of deviation",
      "Critical angle"
    ],
    "ans": "Angle of reflection",
    "explanation": "The law of reflection: angle of incidence equals angle of reflection."
  },
  {
    "q": "The power of a lens is +2 D. The focal length is:",
    "options": [
      "50 cm",
      "2 m",
      "0.5 m",
      "100 cm"
    ],
    "ans": "50 cm",
    "explanation": "f = 1/P = 1/2 = 0.5 m = 50 cm."
  },
  {
    "q": "The unit of magnetic field is:",
    "options": [
      "Tesla",
      "Newton",
      "Joule",
      "Watt"
    ],
    "ans": "Tesla",
    "explanation": "Magnetic field strength is measured in tesla."
  },
  {
    "q": "The device used to produce electricity from mechanical energy is:",
    "options": [
      "Motor",
      "Generator",
      "Transformer",
      "Rectifier"
    ],
    "ans": "Generator",
    "explanation": "A generator converts mechanical energy into electrical energy."
  },
  {
    "q": "The colour with maximum deviation in a prism is:",
    "options": [
      "Red",
      "Violet",
      "Green",
      "Yellow"
    ],
    "ans": "Violet",
    "explanation": "Violet light deviates most in a prism."
  },
  {
    "q": "The SI unit of momentum is:",
    "options": [
      "kg m/s",
      "Newton",
      "Joule",
      "Watt"
    ],
    "ans": "kg m/s",
    "explanation": "Momentum's SI unit is kg·m/s."
  },
  {
    "q": "The law which states that action and reaction are equal and opposite is:",
    "options": [
      "Newton’s first law",
      "Newton’s second law",
      "Newton’s third law",
      "Law of gravitation"
    ],
    "ans": "Newton’s third law",
    "explanation": "Newton's third law: action and reaction are equal and opposite."
  },
  {
    "q": "The centre of curvature of a plane mirror is at:",
    "options": [
      "Infinity",
      "Zero",
      "Focal point",
      "Behind the mirror"
    ],
    "ans": "Infinity",
    "explanation": "A plane mirror's centre of curvature is effectively at infinity."
  },
  {
    "q": "The phenomenon of persistence of vision is used in:",
    "options": [
      "Cinema",
      "Mirror",
      "Lens",
      "Prism"
    ],
    "ans": "Cinema",
    "explanation": "Persistence of vision creates the illusion of motion in cinema."
  },
  {
    "q": "The image formed by a concave mirror when the object is between focus and pole is:",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Virtual and erect",
    "explanation": "A concave mirror gives a virtual, magnified image when object is between focus and pole."
  },
  {
    "q": "The speed of sound in air at room temperature is approximately:",
    "options": [
      "330 m/s",
      "1500 m/s",
      "5000 m/s",
      "3 × 10⁸ m/s"
    ],
    "ans": "330 m/s",
    "explanation": "Sound travels at about 330 m/s in air at room temperature."
  },
  {
    "q": "The device used to detect electric current is:",
    "options": [
      "Voltmeter",
      "Ammeter",
      "Galvanometer",
      "Multimeter"
    ],
    "ans": "Galvanometer",
    "explanation": "A galvanometer detects small electric currents."
  },
  {
    "q": "The focal length of a convex lens is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "ans": "Positive",
    "explanation": "A convex lens's focal length is positive by convention."
  },
  {
    "q": "The pressure exerted by the atmosphere is called:",
    "options": [
      "Atmospheric pressure",
      "Gauge pressure",
      "Absolute pressure",
      "Hydrostatic pressure"
    ],
    "ans": "Atmospheric pressure",
    "explanation": "The pressure exerted by the atmosphere is atmospheric pressure."
  },
  {
    "q": "The SI unit of capacitance is:",
    "options": [
      "Farad",
      "Henry",
      "Ohm",
      "Volt"
    ],
    "ans": "Farad",
    "explanation": "Capacitance is measured in farads."
  },
  {
    "q": "The mirror used as a rear-view mirror in vehicles is:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "Parabolic mirror"
    ],
    "ans": "Convex mirror",
    "explanation": "Convex mirrors are used as vehicle rear-view mirrors."
  },
  {
    "q": "The lens used to correct myopia (short-sightedness) is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Bifocal lens",
      "Cylindrical lens"
    ],
    "ans": "Concave lens",
    "explanation": "Concave lenses correct myopia (short-sightedness)."
  },
  {
    "q": "The direction of magnetic field due to a straight current-carrying conductor is given by:",
    "options": [
      "Fleming’s left hand rule",
      "Right hand thumb rule",
      "Fleming’s right hand rule",
      "Left hand thumb rule"
    ],
    "ans": "Right hand thumb rule",
    "explanation": "The right-hand thumb rule gives magnetic field direction around a wire."
  },
  {
    "q": "The unit of magnetic flux is:",
    "options": [
      "Tesla",
      "Weber",
      "Henry",
      "Ohm"
    ],
    "ans": "Weber",
    "explanation": "Magnetic flux is measured in webers."
  },
  {
    "q": "The phenomenon responsible for rainbow formation is:",
    "options": [
      "Reflection",
      "Refraction and dispersion",
      "Diffraction",
      "Interference"
    ],
    "ans": "Refraction and dispersion",
    "explanation": "Rainbows form from refraction and dispersion of light in raindrops."
  },
  {
    "q": "The power of a concave lens is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "ans": "Negative",
    "explanation": "A concave (diverging) lens has negative power."
  },
  {
    "q": "The SI unit of electric potential difference is:",
    "options": [
      "Ampere",
      "Volt",
      "Ohm",
      "Watt"
    ],
    "ans": "Volt",
    "explanation": "Potential difference is measured in volts."
  },
  {
    "q": "The image formed by a convex lens when the object is beyond 2F is:",
    "options": [
      "Real, inverted and diminished",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Real, inverted and diminished",
    "explanation": "Beyond 2F, a convex lens forms a real, inverted, diminished image."
  },
  {
    "q": "The speed of light is maximum in:",
    "options": [
      "Air",
      "Water",
      "Glass",
      "Vacuum"
    ],
    "ans": "Vacuum",
    "explanation": "Light travels fastest in a vacuum."
  },
  {
    "q": "The device used to change AC to DC is:",
    "options": [
      "Transformer",
      "Rectifier",
      "Generator",
      "Motor"
    ],
    "ans": "Rectifier",
    "explanation": "A rectifier converts AC to DC."
  },
  {
    "q": "The force of friction always acts:",
    "options": [
      "In the direction of motion",
      "Opposite to the direction of motion",
      "Perpendicular to motion",
      "At 45 degrees"
    ],
    "ans": "Opposite to the direction of motion",
    "explanation": "Friction opposes the direction of relative motion."
  },
  {
    "q": "The unit of frequency is:",
    "options": [
      "Hertz",
      "Meter",
      "Second",
      "Newton"
    ],
    "ans": "Hertz",
    "explanation": "Frequency is measured in Hertz."
  },
  {
    "q": "The mirror used in solar cookers is:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "None"
    ],
    "ans": "Concave mirror",
    "explanation": "Concave mirrors focus sunlight in solar cookers."
  },
  {
    "q": "The lens used to correct hypermetropia (long-sightedness) is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Bifocal lens",
      "None"
    ],
    "ans": "Convex lens",
    "explanation": "Convex lenses correct hypermetropia (long-sightedness)."
  },
  {
    "q": "The SI unit of inductance is:",
    "options": [
      "Farad",
      "Henry",
      "Ohm",
      "Volt"
    ],
    "ans": "Henry",
    "explanation": "Inductance is measured in henries."
  },
  {
    "q": "The critical angle for total internal reflection occurs when light goes from:",
    "options": [
      "Denser to rarer medium",
      "Rarer to denser medium",
      "Air to glass",
      "Glass to air"
    ],
    "ans": "Denser to rarer medium",
    "explanation": "Total internal reflection occurs going from a denser to a rarer medium."
  },
  {
    "q": "The potential energy of an object depends on:",
    "options": [
      "Mass and velocity",
      "Mass and height",
      "Velocity and height",
      "Mass only"
    ],
    "ans": "Mass and height",
    "explanation": "Potential energy depends on mass and height."
  },
  {
    "q": "The law of conservation of momentum is applicable to:",
    "options": [
      "Isolated system",
      "Open system",
      "Closed system",
      "All systems"
    ],
    "ans": "Isolated system",
    "explanation": "Conservation of momentum applies to isolated systems."
  },
  {
    "q": "The colour with minimum deviation in a prism is:",
    "options": [
      "Red",
      "Violet",
      "Green",
      "Yellow"
    ],
    "ans": "Red",
    "explanation": "Red light deviates least in a prism."
  },
  {
    "q": "The SI unit of electric energy is:",
    "options": [
      "Joule",
      "Kilowatt-hour",
      "Both A and B",
      "Watt"
    ],
    "ans": "Both A and B",
    "explanation": "Electric energy can be expressed in joules or kilowatt-hours."
  },
  {
    "q": "The image formed by a plane mirror is always:",
    "options": [
      "Real",
      "Virtual",
      "Inverted",
      "Diminished"
    ],
    "ans": "Virtual",
    "explanation": "A plane mirror always forms a virtual image."
  },
  {
    "q": "The focal length of the human eye lens is adjusted by:",
    "options": [
      "Ciliary muscles",
      "Iris",
      "Cornea",
      "Retina"
    ],
    "ans": "Ciliary muscles",
    "explanation": "Ciliary muscles adjust the eye lens's focal length."
  },
  {
    "q": "The device used to measure resistance is:",
    "options": [
      "Voltmeter",
      "Ammeter",
      "Ohmmeter",
      "Galvanometer"
    ],
    "ans": "Ohmmeter",
    "explanation": "An ohmmeter measures resistance directly."
  },
  {
    "q": "The magnetic field inside a solenoid is:",
    "options": [
      "Zero",
      "Uniform",
      "Non-uniform",
      "Zero at centre"
    ],
    "ans": "Uniform",
    "explanation": "The magnetic field inside a solenoid is uniform."
  },
  {
    "q": "The phenomenon of light bending around corners is called:",
    "options": [
      "Reflection",
      "Refraction",
      "Diffraction",
      "Dispersion"
    ],
    "ans": "Diffraction",
    "explanation": "Diffraction is light bending around obstacles/corners."
  },
  {
    "q": "The power of accommodation of the human eye is due to:",
    "options": [
      "Cornea",
      "Lens",
      "Iris",
      "Retina"
    ],
    "ans": "Lens",
    "explanation": "The eye's lens provides its power of accommodation."
  },
  {
    "q": "The SI unit of pressure is:",
    "options": [
      "Pascal",
      "Newton",
      "Joule",
      "Watt"
    ],
    "ans": "Pascal",
    "explanation": "Pressure's SI unit is the pascal."
  },
  {
    "q": "The echo time is used to measure:",
    "options": [
      "Depth of sea",
      "Speed of sound",
      "Both A and B",
      "None"
    ],
    "ans": "Both A and B",
    "explanation": "Echo timing can determine both sea depth and speed of sound."
  },
  {
    "q": "The lens used in a simple microscope is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Plane lens",
      "None"
    ],
    "ans": "Convex lens",
    "explanation": "A simple microscope uses a convex lens."
  },
  {
    "q": "The direction of induced emf is given by:",
    "options": [
      "Fleming’s left hand rule",
      "Fleming’s right hand rule",
      "Right hand thumb rule",
      "Left hand thumb rule"
    ],
    "ans": "Fleming’s right hand rule",
    "explanation": "Fleming's right hand rule gives induced emf direction."
  },
  {
    "q": "The kinetic energy of a body depends on:",
    "options": [
      "Mass and velocity",
      "Mass and height",
      "Velocity only",
      "Mass only"
    ],
    "ans": "Mass and velocity",
    "explanation": "Kinetic energy depends on mass and velocity (½mv²)."
  },
  {
    "q": "The law of gravitation was given by:",
    "options": [
      "Newton",
      "Einstein",
      "Galileo",
      "Kepler"
    ],
    "ans": "Newton",
    "explanation": "Newton formulated the law of universal gravitation."
  },
  {
    "q": "The colour of an object depends on:",
    "options": [
      "Reflected light",
      "Absorbed light",
      "Both",
      "None"
    ],
    "ans": "Reflected light",
    "explanation": "An object's colour is determined by the light it reflects."
  },
  {
    "q": "The SI unit of surface tension is:",
    "options": [
      "Newton/m",
      "Joule",
      "Pascal",
      "Watt"
    ],
    "ans": "Newton/m",
    "explanation": "Surface tension is measured in newtons per metre."
  },
  {
    "q": "The image formed by a concave lens is always:",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Virtual and erect",
    "explanation": "A concave lens always forms a virtual, erect (diminished) image."
  },
  {
    "q": "The device used to produce sound in a telephone is:",
    "options": [
      "Microphone",
      "Loudspeaker",
      "Earpiece",
      "Diaphragm"
    ],
    "ans": "Earpiece",
    "explanation": "The telephone earpiece/receiver produces sound from electrical signals."
  },
  {
    "q": "The critical angle depends on:",
    "options": [
      "Refractive index",
      "Wavelength",
      "Both",
      "None"
    ],
    "ans": "Refractive index",
    "explanation": "Critical angle depends on the refractive index of the medium."
  },
  {
    "q": "The unit of electric field intensity is:",
    "options": [
      "Newton/Coulomb",
      "Volt/meter",
      "Both A and B",
      "Ampere/meter"
    ],
    "ans": "Both A and B",
    "explanation": "Electric field intensity can be expressed as N/C or V/m, equivalently."
  },
  {
    "q": "The SI unit of impulse is:",
    "options": [
      "Newton-second",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "ans": "Newton-second",
    "explanation": "Impulse's SI unit is newton-second."
  },
  {
    "q": "The principle used in hydraulic machines is:",
    "options": [
      "Pascal’s law",
      "Archimedes’ principle",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Pascal’s law",
    "explanation": "Hydraulic machines work on Pascal's law."
  },
  {
    "q": "The image formed by a convex mirror is always:",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Virtual and erect",
    "explanation": "A convex mirror always forms a virtual, erect image."
  },
  {
    "q": "The velocity of sound is maximum in:",
    "options": [
      "Air",
      "Water",
      "Solids",
      "Vacuum"
    ],
    "ans": "Solids",
    "explanation": "Sound travels fastest through solids."
  },
  {
    "q": "The device used to measure atmospheric pressure is:",
    "options": [
      "Barometer",
      "Thermometer",
      "Hygrometer",
      "Anemometer"
    ],
    "ans": "Barometer",
    "explanation": "A barometer measures atmospheric pressure."
  },
  {
    "q": "The refractive index of glass is approximately:",
    "options": [
      "1.5",
      "1.33",
      "2.42",
      "1.0"
    ],
    "ans": "1.5",
    "explanation": "Glass has a refractive index of about 1.5."
  },
  {
    "q": "The SI unit of magnetic moment is:",
    "options": [
      "Ampere-meter²",
      "Tesla",
      "Weber",
      "Henry"
    ],
    "ans": "Ampere-meter²",
    "explanation": "Magnetic moment is measured in ampere-metre²."
  },
  {
    "q": "The law of floatation is related to:",
    "options": [
      "Archimedes’ principle",
      "Pascal’s law",
      "Bernoulli’s principle",
      "Newton’s law"
    ],
    "ans": "Archimedes’ principle",
    "explanation": "The law of floatation follows from Archimedes' principle."
  },
  {
    "q": "The focal length of a plane mirror is:",
    "options": [
      "Zero",
      "Infinity",
      "Positive",
      "Negative"
    ],
    "ans": "Infinity",
    "explanation": "A plane mirror's focal length is effectively infinite."
  },
  {
    "q": "The phenomenon of twinkling of stars is due to:",
    "options": [
      "Reflection",
      "Refraction",
      "Scattering",
      "Diffraction"
    ],
    "ans": "Refraction",
    "explanation": "Twinkling of stars is caused by atmospheric refraction."
  },
  {
    "q": "The unit of luminous intensity is:",
    "options": [
      "Candela",
      "Lumen",
      "Lux",
      "Watt"
    ],
    "ans": "Candela",
    "explanation": "Luminous intensity is measured in candela."
  },
  {
    "q": "The transformer works on the principle of:",
    "options": [
      "Mutual induction",
      "Self induction",
      "Electromagnetic induction",
      "All of the above"
    ],
    "ans": "Mutual induction",
    "explanation": "Transformers work through mutual induction between coils."
  },
  {
    "q": "The upthrust on a body immersed in a liquid is equal to:",
    "options": [
      "Weight of the body",
      "Weight of liquid displaced",
      "Volume of the body",
      "Density of the body"
    ],
    "ans": "Weight of liquid displaced",
    "explanation": "Upthrust equals the weight of fluid displaced (Archimedes' principle)."
  },
  {
    "q": "The image formed by a concave lens when the object is at infinity is:",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    "ans": "Virtual and erect",
    "explanation": "A concave lens gives a virtual, erect image even when object is at infinity."
  },
  {
    "q": "The speed of electromagnetic waves in vacuum is:",
    "options": [
      "3 × 10⁸ m/s",
      "3 × 10⁶ m/s",
      "3 × 10¹⁰ m/s",
      "3 × 10⁵ m/s"
    ],
    "ans": "3 × 10⁸ m/s",
    "explanation": "Electromagnetic waves travel at about 3×10^8 m/s in vacuum."
  },
  {
    "q": "The device used to detect the presence of electric charge is:",
    "options": [
      "Electroscope",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    "ans": "Electroscope",
    "explanation": "An electroscope detects the presence of electric charge."
  },
  {
    "q": "The angle of incidence for which the angle of refraction is 90° is called:",
    "options": [
      "Critical angle",
      "Angle of deviation",
      "Brewster’s angle",
      "Glancing angle"
    ],
    "ans": "Critical angle",
    "explanation": "The critical angle gives a 90° angle of refraction."
  },
  {
    "q": "The SI unit of electric flux is:",
    "options": [
      "Newton m²/Coulomb",
      "Volt-meter",
      "Both A and B",
      "Weber"
    ],
    "ans": "Newton m²/Coulomb",
    "explanation": "Electric flux is measured in N·m²/C."
  },
  {
    "q": "The principle used in aeroplane wings is:",
    "options": [
      "Bernoulli’s principle",
      "Pascal’s law",
      "Archimedes’ principle",
      "Boyle’s law"
    ],
    "ans": "Bernoulli’s principle",
    "explanation": "Aeroplane wings use Bernoulli's principle to generate lift."
  },
  {
    "q": "The mirror formula is:",
    "options": [
      "1/f = 1/v + 1/u",
      "1/f = 1/v - 1/u",
      "f = uv/(u+v)",
      "None"
    ],
    "ans": "1/f = 1/v + 1/u",
    "explanation": "The mirror formula is 1/f = 1/v + 1/u."
  },
  {
    "q": "The colour with least deviation in a prism is:",
    "options": [
      "Red",
      "Violet",
      "Blue",
      "Green"
    ],
    "ans": "Red",
    "explanation": "Red light deviates least (longest wavelength) in a prism."
  },
  {
    "q": "The SI unit of sound intensity is:",
    "options": [
      "Decibel",
      "Hertz",
      "Watt/m²",
      "Joule"
    ],
    "ans": "Watt/m²",
    "explanation": "Sound intensity's SI unit is watt per square metre."
  },
  {
    "q": "The lens used in a camera is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Concavo-convex",
      "Plano-convex"
    ],
    "ans": "Convex lens",
    "explanation": "Camera lenses are convex lenses."
  },
  {
    "q": "The direction of force on a current-carrying conductor in a magnetic field is given by:",
    "options": [
      "Fleming’s left hand rule",
      "Fleming’s right hand rule",
      "Right hand thumb rule",
      "Left hand thumb rule"
    ],
    "ans": "Fleming’s left hand rule",
    "explanation": "Fleming's left hand rule gives the force direction on a current-carrying conductor."
  },
  {
    "q": "The buoyant force depends on:",
    "options": [
      "Volume of body",
      "Density of liquid",
      "Both A and B",
      "None"
    ],
    "ans": "Both A and B",
    "explanation": "Buoyant force depends on both liquid density and immersed volume."
  },
  {
    "q": "The image formed by a convex mirror is:",
    "options": [
      "Always virtual and erect",
      "Always real and inverted",
      "Virtual and inverted",
      "Real and erect"
    ],
    "ans": "Always virtual and erect",
    "explanation": "A convex mirror always forms a virtual, erect image."
  },
  {
    "q": "The velocity of light in a medium is:",
    "options": [
      "c/μ",
      "cμ",
      "c",
      "μ/c"
    ],
    "ans": "c/μ",
    "explanation": "Velocity of light in a medium is c/μ (speed divided by refractive index)."
  },
  {
    "q": "The instrument used to measure potential difference is:",
    "options": [
      "Voltmeter",
      "Ammeter",
      "Galvanometer",
      "Ohmmeter"
    ],
    "ans": "Voltmeter",
    "explanation": "A voltmeter measures potential difference."
  },
  {
    "q": "The critical angle for the water-air interface is approximately:",
    "options": [
      "48°",
      "42°",
      "90°",
      "0°"
    ],
    "ans": "48°",
    "explanation": "The critical angle for water-air is about 48°."
  },
  {
    "q": "The SI unit of work done by a couple is:",
    "options": [
      "Newton-meter",
      "Joule",
      "Both A and B",
      "Watt"
    ],
    "ans": "Both A and B",
    "explanation": "Work done by a couple (torque×angle) has units equivalent to newton-metre/joule."
  },
  {
    "q": "The principle of conservation of energy is applicable to:",
    "options": [
      "Mechanical energy only",
      "All forms of energy",
      "Heat energy only",
      "Electrical energy only"
    ],
    "ans": "All forms of energy",
    "explanation": "Conservation of energy applies to all forms of energy."
  },
  {
    "q": "The mirror used in a searchlight is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "Parabolic mirror"
    ],
    "ans": "Parabolic mirror",
    "explanation": "Searchlights use parabolic mirrors to produce a parallel beam."
  },
  {
    "q": "The power of a lens is given by:",
    "options": [
      "P = 1/f",
      "P = f",
      "P = uv",
      "None"
    ],
    "ans": "P = 1/f",
    "explanation": "Lens power P = 1/f."
  },
  {
    "q": "The echo is not heard if the distance is less than:",
    "options": [
      "17 m",
      "10 m",
      "20 m",
      "5 m"
    ],
    "ans": "17 m",
    "explanation": "An echo isn't distinctly heard if the reflecting surface is closer than about 17m."
  },
  {
    "q": "The lens formula is:",
    "options": [
      "1/f = 1/v - 1/u",
      "1/f = 1/v + 1/u",
      "f = uv/(u+v)",
      "None"
    ],
    "ans": "1/f = 1/v - 1/u",
    "explanation": "The lens formula is 1/f = 1/v − 1/u."
  },
  {
    "q": "The device used to measure electric power is:",
    "options": [
      "Wattmeter",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    "ans": "Wattmeter",
    "explanation": "A wattmeter measures electric power."
  },
  {
    "q": "The magnetic field due to a straight current-carrying wire is:",
    "options": [
      "Circular",
      "Straight",
      "Elliptical",
      "None"
    ],
    "ans": "Circular",
    "explanation": "The magnetic field around a straight current-carrying wire is circular."
  },
  {
    "q": "The upthrust is maximum when the body is:",
    "options": [
      "Completely immersed",
      "Partially immersed",
      "Floating",
      "Sinking"
    ],
    "ans": "Completely immersed",
    "explanation": "Upthrust is maximum when a body is completely immersed."
  },
  {
    "q": "The image formed by a concave mirror when the object is at the centre of curvature is:",
    "options": [
      "Real, inverted and same size",
      "Virtual and erect",
      "Real and diminished",
      "Virtual and magnified"
    ],
    "ans": "Real, inverted and same size",
    "explanation": "At the centre of curvature, a concave mirror forms a real, inverted image of the same size."
  },
  {
    "q": "The refractive index is the ratio of:",
    "options": [
      "Speed of light in vacuum to speed in medium",
      "Speed in medium to vacuum",
      "Frequency",
      "Wavelength"
    ],
    "ans": "Speed of light in vacuum to speed in medium",
    "explanation": "Refractive index = speed of light in vacuum / speed in the medium."
  },
  {
    "q": "The instrument used to measure relative humidity is:",
    "options": [
      "Hygrometer",
      "Barometer",
      "Thermometer",
      "Anemometer"
    ],
    "ans": "Hygrometer",
    "explanation": "A hygrometer measures relative humidity."
  },
  {
    "q": "The angle of incidence equal to the angle of reflection is the law of:",
    "options": [
      "Reflection",
      "Refraction",
      "Diffraction",
      "Interference"
    ],
    "ans": "Reflection",
    "explanation": "Equal angle of incidence and reflection is the law of reflection."
  },
  {
    "q": "The SI unit of torque is:",
    "options": [
      "Newton-meter",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "ans": "Newton-meter",
    "explanation": "Torque's SI unit is newton-metre."
  },
  {
    "q": "The principle used in a submarine is:",
    "options": [
      "Archimedes’ principle",
      "Pascal’s law",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Archimedes’ principle",
    "explanation": "Submarines operate using Archimedes' principle."
  },
  {
    "q": "The mirror used in a periscope is:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "None"
    ],
    "ans": "Plane mirror",
    "explanation": "A periscope uses plane mirrors."
  },
  {
    "q": "The power of accommodation of the human eye is maximum for:",
    "options": [
      "Young person",
      "Old person",
      "Child",
      "Adult"
    ],
    "ans": "Young person",
    "explanation": "Accommodation power is greatest in young eyes."
  },
  {
    "q": "The direction of induced current opposes the change according to:",
    "options": [
      "Lenz’s law",
      "Faraday’s law",
      "Ohm’s law",
      "Newton’s law"
    ],
    "ans": "Lenz’s law",
    "explanation": "Lenz's law describes induced current opposing the change causing it."
  },
  {
    "q": "The buoyant force on a floating body is equal to:",
    "options": [
      "Weight of the body",
      "Weight of liquid displaced",
      "Volume of body",
      "Density of body"
    ],
    "ans": "Weight of liquid displaced",
    "explanation": "A floating body's buoyant force equals the weight of liquid displaced."
  },
  {
    "q": "The focal length of a convex mirror is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinity"
    ],
    "ans": "Positive",
    "explanation": "A convex mirror's focal length is positive by convention."
  },
  {
    "q": "The SI unit of angular velocity is:",
    "options": [
      "rad/s",
      "m/s",
      "rad",
      "degree/s"
    ],
    "ans": "rad/s",
    "explanation": "Angular velocity's SI unit is radians per second."
  },
  {
    "q": "The law of conservation of momentum is a consequence of:",
    "options": [
      "Newton’s first law",
      "Newton’s second law",
      "Newton’s third law",
      "Law of gravitation"
    ],
    "ans": "Newton’s third law",
    "explanation": "Conservation of momentum follows from Newton's third law."
  },
  {
    "q": "The mirror used in a shaving mirror is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "None"
    ],
    "ans": "Concave mirror",
    "explanation": "Shaving mirrors are concave to magnify the reflection."
  },
  {
    "q": "The velocity of sound in air increases with:",
    "options": [
      "Decrease in temperature",
      "Increase in temperature",
      "Increase in pressure",
      "Decrease in humidity"
    ],
    "ans": "Increase in temperature",
    "explanation": "Sound travels faster in air as temperature increases."
  },
  {
    "q": "The device used to measure depth of sea is:",
    "options": [
      "Sonar",
      "Radar",
      "Barometer",
      "Hygrometer"
    ],
    "ans": "Sonar",
    "explanation": "Sonar is used to measure sea depth."
  },
  {
    "q": "The refractive index of diamond is approximately:",
    "options": [
      "1.5",
      "2.42",
      "1.33",
      "1.0"
    ],
    "ans": "2.42",
    "explanation": "Diamond has a refractive index of about 2.42."
  },
  {
    "q": "The SI unit of self-inductance is:",
    "options": [
      "Henry",
      "Farad",
      "Ohm",
      "Volt"
    ],
    "ans": "Henry",
    "explanation": "Self-inductance is measured in henries."
  },
  {
    "q": "The principle used in hydraulic brakes is:",
    "options": [
      "Pascal’s law",
      "Archimedes’ principle",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Pascal’s law",
    "explanation": "Hydraulic brakes operate on Pascal's law."
  },
  {
    "q": "The radius of curvature of a plane mirror is:",
    "options": [
      "Zero",
      "Infinity",
      "Positive",
      "Negative"
    ],
    "ans": "Infinity",
    "explanation": "A plane mirror's radius of curvature is effectively infinite."
  },
  {
    "q": "The blue colour of the sky is due to:",
    "options": [
      "Reflection of light",
      "Refraction of light",
      "Scattering of light",
      "Dispersion of light"
    ],
    "ans": "Scattering of light",
    "explanation": "The sky's blue colour comes from scattering of light."
  },
  {
    "q": "The SI unit of illuminance is:",
    "options": [
      "Lux",
      "Candela",
      "Lumen",
      "Watt"
    ],
    "ans": "Lux",
    "explanation": "Illuminance is measured in lux."
  },
  {
    "q": "The transformer is used to change:",
    "options": [
      "Voltage",
      "Current",
      "Frequency",
      "Power"
    ],
    "ans": "Voltage",
    "explanation": "A transformer changes voltage level."
  },
  {
    "q": "The upthrust on a body in a liquid is equal to:",
    "options": [
      "Weight of the body",
      "Weight of liquid displaced",
      "Volume of the body",
      "Density of liquid"
    ],
    "ans": "Weight of liquid displaced",
    "explanation": "Upthrust equals the weight of liquid displaced."
  },
  {
    "q": "The image formed by a convex lens when the object is between F and 2F is:",
    "options": [
      "Real, inverted and magnified",
      "Virtual and erect",
      "Real and diminished",
      "Virtual and inverted"
    ],
    "ans": "Real, inverted and magnified",
    "explanation": "Between F and 2F, a convex lens forms a real, inverted, magnified image."
  },
  {
    "q": "The speed of light in glass is:",
    "options": [
      "3 × 10⁸ m/s",
      "Less than 3 × 10⁸ m/s",
      "Greater than 3 × 10⁸ m/s",
      "Zero"
    ],
    "ans": "Less than 3 × 10⁸ m/s",
    "explanation": "Light travels slower in glass than in vacuum."
  },
  {
    "q": "The instrument used to detect the direction of current is:",
    "options": [
      "Galvanometer",
      "Voltmeter",
      "Ammeter",
      "Multimeter"
    ],
    "ans": "Galvanometer",
    "explanation": "A galvanometer can detect the direction of small currents."
  },
  {
    "q": "The angle between the incident ray and the reflected ray is called:",
    "options": [
      "Angle of deviation",
      "Angle of incidence",
      "Angle of reflection",
      "Critical angle"
    ],
    "ans": "Angle of deviation",
    "explanation": "The angle between incident and reflected rays (via the normal) relates to reflection geometry; commonly termed angle of deviation here."
  },
  {
    "q": "The SI unit of electric field is:",
    "options": [
      "Newton/Coulomb",
      "Volt/meter",
      "Both A and B",
      "Ampere/meter"
    ],
    "ans": "Both A and B",
    "explanation": "Electric field can be expressed as N/C or V/m."
  },
  {
    "q": "The lift in an aeroplane is due to:",
    "options": [
      "Bernoulli’s principle",
      "Pascal’s law",
      "Archimedes’ principle",
      "Boyle’s law"
    ],
    "ans": "Bernoulli’s principle",
    "explanation": "Aeroplane lift arises from Bernoulli's principle."
  },
  {
    "q": "The mirror formula for a concave mirror is:",
    "options": [
      "1/f = 1/v + 1/u",
      "1/f = 1/v - 1/u",
      "f = uv/(u+v)",
      "None of these"
    ],
    "ans": "1/f = 1/v + 1/u",
    "explanation": "The concave mirror formula is 1/f = 1/v + 1/u."
  },
  {
    "q": "The colour with maximum wavelength is:",
    "options": [
      "Red",
      "Violet",
      "Blue",
      "Green"
    ],
    "ans": "Red",
    "explanation": "Red light has the maximum (longest) wavelength."
  },
  {
    "q": "The SI unit of sound intensity level is:",
    "options": [
      "Decibel",
      "Hertz",
      "Watt/m²",
      "Joule"
    ],
    "ans": "Decibel",
    "explanation": "Sound intensity level is measured in decibels."
  },
  {
    "q": "The objective lens of a telescope is:",
    "options": [
      "Convex lens of large focal length",
      "Concave lens",
      "Convex lens of short focal length",
      "None"
    ],
    "ans": "Convex lens of large focal length",
    "explanation": "A telescope's objective lens is convex with a large focal length."
  },
  {
    "q": "The direction of force on a moving charge in a magnetic field is given by:",
    "options": [
      "Fleming’s left hand rule",
      "Fleming’s right hand rule",
      "Right hand thumb rule",
      "Left hand thumb rule"
    ],
    "ans": "Fleming’s left hand rule",
    "explanation": "Fleming's left hand rule gives the force on a moving charge in a field."
  },
  {
    "q": "The buoyant force is maximum when the body is:",
    "options": [
      "Completely immersed",
      "Partially immersed",
      "Floating",
      "Sinking"
    ],
    "ans": "Completely immersed",
    "explanation": "Buoyant force is maximum when a body is fully immersed."
  },
  {
    "q": "The refractive index is greater for:",
    "options": [
      "Vacuum",
      "Air",
      "Water",
      "Diamond"
    ],
    "ans": "Diamond",
    "explanation": "Diamond has the highest refractive index among the options."
  },
  {
    "q": "The instrument used to measure wind speed is:",
    "options": [
      "Anemometer",
      "Barometer",
      "Hygrometer",
      "Thermometer"
    ],
    "ans": "Anemometer",
    "explanation": "An anemometer measures wind speed."
  },
  {
    "q": "The law of reflection is:",
    "options": [
      "Angle of incidence = Angle of reflection",
      "Angle of incidence + Angle of reflection = 90°",
      "Angle of incidence > Angle of reflection",
      "None"
    ],
    "ans": "Angle of incidence = Angle of reflection",
    "explanation": "The law of reflection: angle of incidence equals angle of reflection."
  },
  {
    "q": "The SI unit of moment of force is:",
    "options": [
      "Newton-meter",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "ans": "Newton-meter",
    "explanation": "Moment of force (torque) is measured in newton-metres."
  },
  {
    "q": "The principle of conservation of energy states that energy can be:",
    "options": [
      "Created",
      "Destroyed",
      "Transformed from one form to another",
      "None"
    ],
    "ans": "Transformed from one form to another",
    "explanation": "Energy is transformed from one form to another, never created or destroyed."
  },
  {
    "q": "The mirror used in a headlight is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "Parabolic mirror"
    ],
    "ans": "Parabolic mirror",
    "explanation": "Headlights use parabolic mirrors to produce a focused beam."
  },
  {
    "q": "The SI unit of viscosity is:",
    "options": [
      "Poise",
      "Pascal-second",
      "Both A and B",
      "Newton/m²"
    ],
    "ans": "Pascal-second",
    "explanation": "The true SI unit of viscosity is the pascal-second."
  },
  {
    "q": "The minimum distance for hearing an echo is:",
    "options": [
      "17 m",
      "10 m",
      "20 m",
      "5 m"
    ],
    "ans": "17 m",
    "explanation": "An echo needs at least about 17m distance to be distinctly heard."
  },
  {
    "q": "The device used to measure electric energy consumed is:",
    "options": [
      "Wattmeter",
      "Energy meter",
      "Voltmeter",
      "Ammeter"
    ],
    "ans": "Energy meter",
    "explanation": "An energy meter measures electric energy consumed."
  },
  {
    "q": "The apparent loss in weight of a body in a liquid is equal to:",
    "options": [
      "Weight of the body",
      "Weight of liquid displaced",
      "Volume of body",
      "Density of liquid"
    ],
    "ans": "Weight of liquid displaced",
    "explanation": "Apparent weight loss in liquid equals the weight of liquid displaced."
  },
  {
    "q": "The image formed by a convex lens when the object is at 2F is:",
    "options": [
      "Real, inverted and same size",
      "Virtual and erect",
      "Real and diminished",
      "Virtual and magnified"
    ],
    "ans": "Real, inverted and same size",
    "explanation": "At 2F, a convex lens forms a real, inverted image of the same size."
  },
  {
    "q": "The speed of light is minimum in:",
    "options": [
      "Vacuum",
      "Air",
      "Water",
      "Glass"
    ],
    "ans": "Glass",
    "explanation": "Light travels slowest in glass among the options given (highest refractive index)."
  },
  {
    "q": "The instrument used to measure electric resistance is:",
    "options": [
      "Ohmmeter",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    "ans": "Ohmmeter",
    "explanation": "An ohmmeter measures electric resistance."
  },
  {
    "q": "The angle of incidence for total internal reflection must be:",
    "options": [
      "Greater than critical angle",
      "Less than critical angle",
      "Equal to critical angle",
      "90°"
    ],
    "ans": "Greater than critical angle",
    "explanation": "Total internal reflection needs angle of incidence greater than the critical angle."
  },
  {
    "q": "The SI unit of angular momentum is:",
    "options": [
      "kg m²/s",
      "Newton-meter",
      "Joule",
      "Watt"
    ],
    "ans": "kg m²/s",
    "explanation": "Angular momentum's SI unit is kg·m²/s."
  },
  {
    "q": "The principle used in ships to float is:",
    "options": [
      "Archimedes’ principle",
      "Pascal’s law",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Archimedes’ principle",
    "explanation": "Ships float according to Archimedes' principle."
  },
  {
    "q": "The mirror used in a kaleidoscope is:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "None"
    ],
    "ans": "Plane mirror",
    "explanation": "A kaleidoscope uses plane mirrors."
  },
  {
    "q": "The power of accommodation is maximum in:",
    "options": [
      "Young eyes",
      "Old eyes",
      "Child eyes",
      "Adult eyes"
    ],
    "ans": "Young eyes",
    "explanation": "Accommodation power is greatest in young eyes."
  },
  {
    "q": "Lenz’s law is a consequence of the law of conservation of:",
    "options": [
      "Energy",
      "Momentum",
      "Mass",
      "Charge"
    ],
    "ans": "Energy",
    "explanation": "Lenz's law follows from conservation of energy."
  },
  {
    "q": "The buoyant force acts in the:",
    "options": [
      "Upward direction",
      "Downward direction",
      "Horizontal direction",
      "None"
    ],
    "ans": "Upward direction",
    "explanation": "Buoyant force acts upward on an immersed body."
  },
  {
    "q": "The image formed by a convex mirror when the object is at infinity is:",
    "options": [
      "Virtual, erect and highly diminished",
      "Real and inverted",
      "Real and diminished",
      "Virtual and magnified"
    ],
    "ans": "Virtual, erect and highly diminished",
    "explanation": "A convex mirror gives a highly diminished, virtual, erect image for a distant object."
  },
  {
    "q": "The SI unit of gravitational constant G is:",
    "options": [
      "Nm²/kg²",
      "m/s²",
      "kg m/s",
      "Newton"
    ],
    "ans": "Nm²/kg²",
    "explanation": "The gravitational constant G has SI units N·m²/kg²."
  },
  {
    "q": "The apparent weight of a body in a lift moving upwards with acceleration is:",
    "options": [
      "m(g + a)",
      "m(g - a)",
      "mg",
      "ma"
    ],
    "ans": "m(g + a)",
    "explanation": "Apparent weight in an upward-accelerating lift is m(g+a)."
  },
  {
    "q": "The mirror used in a solar furnace is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "Parabolic mirror"
    ],
    "ans": "Parabolic mirror",
    "explanation": "Solar furnaces use parabolic mirrors to concentrate sunlight."
  },
  {
    "q": "The velocity of sound is minimum in:",
    "options": [
      "Solids",
      "Liquids",
      "Gases",
      "Vacuum"
    ],
    "ans": "Gases",
    "explanation": "Sound travels slowest through gases."
  },
  {
    "q": "The device used to measure earthquake intensity is:",
    "options": [
      "Seismograph",
      "Barometer",
      "Hygrometer",
      "Anemometer"
    ],
    "ans": "Seismograph",
    "explanation": "A seismograph measures earthquake intensity."
  },
  {
    "q": "The refractive index of water is approximately:",
    "options": [
      "1.33",
      "1.5",
      "2.42",
      "1.0"
    ],
    "ans": "1.33",
    "explanation": "Water's refractive index is about 1.33."
  },
  {
    "q": "The SI unit of mutual inductance is:",
    "options": [
      "Henry",
      "Farad",
      "Ohm",
      "Volt"
    ],
    "ans": "Henry",
    "explanation": "Mutual inductance is measured in henries."
  },
  {
    "q": "The principle used in a hydraulic press is:",
    "options": [
      "Pascal’s law",
      "Archimedes’ principle",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Pascal’s law",
    "explanation": "A hydraulic press works on Pascal's law."
  },
  {
    "q": "The twinkling of stars is due to:",
    "options": [
      "Atmospheric refraction",
      "Reflection",
      "Scattering",
      "Dispersion"
    ],
    "ans": "Atmospheric refraction",
    "explanation": "Twinkling of stars is due to atmospheric refraction."
  },
  {
    "q": "The SI unit of luminous flux is:",
    "options": [
      "Lumen",
      "Candela",
      "Lux",
      "Watt"
    ],
    "ans": "Lumen",
    "explanation": "Luminous flux is measured in lumens."
  },
  {
    "q": "A step-up transformer increases:",
    "options": [
      "Voltage",
      "Current",
      "Power",
      "Frequency"
    ],
    "ans": "Voltage",
    "explanation": "A step-up transformer increases voltage."
  },
  {
    "q": "The apparent loss in weight of a body immersed in liquid is equal to:",
    "options": [
      "Weight of liquid displaced",
      "Weight of body",
      "Volume of body",
      "Density of liquid"
    ],
    "ans": "Weight of liquid displaced",
    "explanation": "Apparent weight loss equals the weight of liquid displaced."
  },
  {
    "q": "The speed of light in diamond is:",
    "options": [
      "Highest",
      "Lowest",
      "Same as vacuum",
      "Zero"
    ],
    "ans": "Lowest",
    "explanation": "Light travels slowest in diamond due to its high refractive index."
  },
  {
    "q": "The instrument used to measure small currents is:",
    "options": [
      "Galvanometer",
      "Voltmeter",
      "Ammeter",
      "Multimeter"
    ],
    "ans": "Galvanometer",
    "explanation": "A galvanometer detects small currents."
  },
  {
    "q": "Total internal reflection occurs when light travels from:",
    "options": [
      "Denser to rarer medium",
      "Rarer to denser medium",
      "Air to glass",
      "Glass to air"
    ],
    "ans": "Denser to rarer medium",
    "explanation": "Total internal reflection occurs going from a denser to rarer medium."
  },
  {
    "q": "The lift force on an aeroplane wing is due to:",
    "options": [
      "Bernoulli’s principle",
      "Pascal’s law",
      "Archimedes’ principle",
      "Boyle’s law"
    ],
    "ans": "Bernoulli’s principle",
    "explanation": "Lift on a wing arises from Bernoulli's principle."
  },
  {
    "q": "The lens maker’s formula is used to find:",
    "options": [
      "Focal length",
      "Power",
      "Magnification",
      "Image distance"
    ],
    "ans": "Focal length",
    "explanation": "The lens maker's formula finds focal length from lens geometry."
  },
  {
    "q": "The colour with shortest wavelength is:",
    "options": [
      "Violet",
      "Red",
      "Green",
      "Yellow"
    ],
    "ans": "Violet",
    "explanation": "Violet light has the shortest wavelength."
  },
  {
    "q": "The SI unit of sound pressure level is:",
    "options": [
      "Decibel",
      "Hertz",
      "Watt/m²",
      "Joule"
    ],
    "ans": "Decibel",
    "explanation": "Sound pressure level is measured in decibels."
  },
  {
    "q": "The eyepiece of a microscope is:",
    "options": [
      "Convex lens",
      "Concave lens",
      "Plane lens",
      "None"
    ],
    "ans": "Convex lens",
    "explanation": "A microscope's eyepiece is a convex lens."
  },
  {
    "q": "The force on a current-carrying conductor in a magnetic field is given by:",
    "options": [
      "Fleming’s left hand rule",
      "Fleming’s right hand rule",
      "Right hand thumb rule",
      "Left hand thumb rule"
    ],
    "ans": "Fleming’s left hand rule",
    "explanation": "Fleming's left hand rule gives the force direction on a current-carrying conductor."
  },
  {
    "q": "The buoyant force on a body depends on:",
    "options": [
      "Density of liquid",
      "Volume of body immersed",
      "Both A and B",
      "None"
    ],
    "ans": "Both A and B",
    "explanation": "Buoyant force depends on liquid density and immersed volume."
  },
  {
    "q": "The refractive index is:",
    "options": [
      "Speed of light in vacuum / speed in medium",
      "Speed in medium / speed in vacuum",
      "Frequency ratio",
      "Wavelength ratio"
    ],
    "ans": "Speed of light in vacuum / speed in medium",
    "explanation": "Refractive index = speed in vacuum / speed in medium."
  },
  {
    "q": "The instrument used to measure atmospheric humidity is:",
    "options": [
      "Hygrometer",
      "Barometer",
      "Thermometer",
      "Anemometer"
    ],
    "ans": "Hygrometer",
    "explanation": "A hygrometer measures atmospheric humidity."
  },
  {
    "q": "The law of reflection states that:",
    "options": [
      "Angle of incidence = Angle of reflection",
      "Angle of incidence + Angle of reflection = 90°",
      "Angle of incidence > Angle of reflection",
      "None"
    ],
    "ans": "Angle of incidence = Angle of reflection",
    "explanation": "The law of reflection: angle of incidence equals angle of reflection."
  },
  {
    "q": "The principle of a ship floating is based on:",
    "options": [
      "Archimedes’ principle",
      "Pascal’s law",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Archimedes’ principle",
    "explanation": "A ship floats according to Archimedes' principle."
  },
  {
    "q": "The power of accommodation of the human eye decreases with:",
    "options": [
      "Age",
      "Exercise",
      "Diet",
      "None"
    ],
    "ans": "Age",
    "explanation": "Accommodation power decreases with age."
  },
  {
    "q": "Lenz’s law is based on the conservation of:",
    "options": [
      "Energy",
      "Momentum",
      "Mass",
      "Charge"
    ],
    "ans": "Energy",
    "explanation": "Lenz's law is based on conservation of energy."
  },
  {
    "q": "The buoyant force acts:",
    "options": [
      "Upward",
      "Downward",
      "Horizontal",
      "None"
    ],
    "ans": "Upward",
    "explanation": "Buoyant force acts upward."
  },
  {
    "q": "The image formed by a convex mirror when the object is close to the mirror is:",
    "options": [
      "Virtual, erect and diminished",
      "Real and inverted",
      "Real and magnified",
      "Virtual and inverted"
    ],
    "ans": "Virtual, erect and diminished",
    "explanation": "A convex mirror gives a virtual, erect, diminished image close up too."
  },
  {
    "q": "The instrument used to measure resistance is:",
    "options": [
      "Ohmmeter",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    "ans": "Ohmmeter",
    "explanation": "An ohmmeter measures resistance."
  },
  {
    "q": "The condition for total internal reflection is:",
    "options": [
      "Angle of incidence > critical angle",
      "Angle of incidence < critical angle",
      "Angle of incidence = critical angle",
      "90°"
    ],
    "ans": "Angle of incidence > critical angle",
    "explanation": "Total internal reflection requires angle of incidence greater than critical angle."
  },
  {
    "q": "The SI unit of moment of inertia is:",
    "options": [
      "kg m²",
      "Newton-meter",
      "Joule",
      "Watt"
    ],
    "ans": "kg m²",
    "explanation": "Moment of inertia's SI unit is kg·m²."
  },
  {
    "q": "The principle used in a hydraulic jack is:",
    "options": [
      "Pascal’s law",
      "Archimedes’ principle",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Pascal’s law",
    "explanation": "A hydraulic jack works on Pascal's law."
  },
  {
    "q": "The mirror used in a dentist’s mirror is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "None"
    ],
    "ans": "Concave mirror",
    "explanation": "Dentists use concave mirrors."
  },
  {
    "q": "The near point of a normal eye is:",
    "options": [
      "25 cm",
      "200 cm",
      "Infinity",
      "0 cm"
    ],
    "ans": "25 cm",
    "explanation": "The near point of a normal eye is about 25cm."
  },
  {
    "q": "Faraday’s law is related to:",
    "options": [
      "Electromagnetic induction",
      "Electrostatics",
      "Magnetostatics",
      "Current electricity"
    ],
    "ans": "Electromagnetic induction",
    "explanation": "Faraday's law describes electromagnetic induction."
  },
  {
    "q": "The apparent weight of a body in a freely falling lift is:",
    "options": [
      "Zero",
      "mg",
      "m(g+a)",
      "m(g-a)"
    ],
    "ans": "Zero",
    "explanation": "In a freely falling lift, apparent weight is zero."
  },
  {
    "q": "The image formed by a concave mirror when the object is at infinity is:",
    "options": [
      "Real, inverted and highly diminished",
      "Virtual and erect",
      "Real and magnified",
      "Virtual and inverted"
    ],
    "ans": "Real, inverted and highly diminished",
    "explanation": "A concave mirror gives a real, inverted, highly diminished image for a distant object."
  },
  {
    "q": "The refractive index of a medium is 1.5. The speed of light in that medium is:",
    "options": [
      "2 × 10⁸ m/s",
      "3 × 10⁸ m/s",
      "1.5 × 10⁸ m/s",
      "4 × 10⁸ m/s"
    ],
    "ans": "2 × 10⁸ m/s",
    "explanation": "Speed = c/n = 3×10^8/1.5 = 2×10^8 m/s."
  },
  {
    "q": "The instrument used to measure wind direction is:",
    "options": [
      "Wind vane",
      "Anemometer",
      "Hygrometer",
      "Barometer"
    ],
    "ans": "Wind vane",
    "explanation": "A wind vane measures wind direction."
  },
  {
    "q": "The angle between incident ray and normal is:",
    "options": [
      "Angle of incidence",
      "Angle of reflection",
      "Angle of deviation",
      "Critical angle"
    ],
    "ans": "Angle of incidence",
    "explanation": "The angle between the incident ray and the normal is the angle of incidence."
  },
  {
    "q": "The SI unit of coefficient of viscosity is:",
    "options": [
      "Pascal-second",
      "Poise",
      "Both A and B",
      "Newton/m²"
    ],
    "ans": "Pascal-second",
    "explanation": "The SI unit of viscosity coefficient is the pascal-second."
  },
  {
    "q": "The centre of gravity of a uniform rod is at its:",
    "options": [
      "Centre",
      "End",
      "One-third from end",
      "None"
    ],
    "ans": "Centre",
    "explanation": "A uniform rod's centre of gravity is at its centre."
  },
  {
    "q": "The mirror used in a torch is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "Parabolic mirror"
    ],
    "ans": "Concave mirror",
    "explanation": "Torches typically use small concave reflectors."
  },
  {
    "q": "The velocity of sound in water is approximately:",
    "options": [
      "330 m/s",
      "1500 m/s",
      "5000 m/s",
      "3 × 10⁸ m/s"
    ],
    "ans": "1500 m/s",
    "explanation": "Sound travels at about 1500 m/s in water."
  },
  {
    "q": "The device used to measure blood pressure is:",
    "options": [
      "Sphygmomanometer",
      "Barometer",
      "Hygrometer",
      "Anemometer"
    ],
    "ans": "Sphygmomanometer",
    "explanation": "A sphygmomanometer measures blood pressure."
  },
  {
    "q": "The refractive index is maximum for:",
    "options": [
      "Air",
      "Water",
      "Glass",
      "Diamond"
    ],
    "ans": "Diamond",
    "explanation": "Diamond has the highest refractive index of common materials."
  },
  {
    "q": "The SI unit of magnetic flux density is:",
    "options": [
      "Tesla",
      "Weber",
      "Henry",
      "Ohm"
    ],
    "ans": "Tesla",
    "explanation": "Magnetic flux density is measured in tesla."
  },
  {
    "q": "The principle used in a siphon is:",
    "options": [
      "Atmospheric pressure",
      "Pascal’s law",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Atmospheric pressure",
    "explanation": "A siphon operates due to atmospheric pressure."
  },
  {
    "q": "The red colour of the sky at sunrise and sunset is due to:",
    "options": [
      "Scattering of light",
      "Reflection",
      "Refraction",
      "Dispersion"
    ],
    "ans": "Scattering of light",
    "explanation": "Red skies at sunrise/sunset result from scattering of light."
  },
  {
    "q": "The SI unit of luminous intensity is:",
    "options": [
      "Candela",
      "Lumen",
      "Lux",
      "Watt"
    ],
    "ans": "Candela",
    "explanation": "Luminous intensity is measured in candela."
  },
  {
    "q": "A step-down transformer decreases:",
    "options": [
      "Voltage",
      "Current",
      "Power",
      "Frequency"
    ],
    "ans": "Voltage",
    "explanation": "A step-down transformer decreases voltage."
  },
  {
    "q": "The weight of a body in water is:",
    "options": [
      "Less than in air",
      "Greater than in air",
      "Same as in air",
      "Zero"
    ],
    "ans": "Less than in air",
    "explanation": "A body weighs less in water due to upthrust."
  },
  {
    "q": "The instrument used to compare emf of cells is:",
    "options": [
      "Potentiometer",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    "ans": "Potentiometer",
    "explanation": "A potentiometer compares the emf of cells."
  },
  {
    "q": "The critical angle is maximum for:",
    "options": [
      "Diamond",
      "Glass",
      "Water",
      "Air"
    ],
    "ans": "Water",
    "explanation": "Water has a larger critical angle than glass or diamond (lower refractive index)."
  },
  {
    "q": "The SI unit of electric potential is:",
    "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "ans": "Volt",
    "explanation": "Electric potential is measured in volts."
  },
  {
    "q": "The lift on an aeroplane wing is due to:",
    "options": [
      "Difference in pressure",
      "Pascal’s law",
      "Archimedes’ principle",
      "Boyle’s law"
    ],
    "ans": "Difference in pressure",
    "explanation": "Lift on a wing is due to a pressure difference above and below it."
  },
  {
    "q": "The lens maker’s formula is:",
    "options": [
      "1/f = (μ − 1)(1/R₁ − 1/R₂)",
      "1/f = 1/v − 1/u",
      "f = uv/(u+v)",
      "None"
    ],
    "ans": "1/f = (μ − 1)(1/R₁ − 1/R₂)",
    "explanation": "The lens maker's formula is 1/f = (μ−1)(1/R1 − 1/R2)."
  },
  {
    "q": "The colour with minimum frequency is:",
    "options": [
      "Red",
      "Violet",
      "Blue",
      "Green"
    ],
    "ans": "Red",
    "explanation": "Red light has the minimum frequency among visible colours."
  },
  {
    "q": "The SI unit of intensity of sound is:",
    "options": [
      "Watt/m²",
      "Decibel",
      "Hertz",
      "Joule"
    ],
    "ans": "Watt/m²",
    "explanation": "Sound intensity is measured in watts per square metre."
  },
  {
    "q": "The objective lens of a compound microscope is:",
    "options": [
      "Convex lens of short focal length",
      "Concave lens",
      "Convex lens of long focal length",
      "None"
    ],
    "ans": "Convex lens of short focal length",
    "explanation": "A compound microscope's objective is a short-focal-length convex lens."
  },
  {
    "q": "The force experienced by a current-carrying conductor in a magnetic field is:",
    "options": [
      "F = BIL sinθ",
      "F = qvB sinθ",
      "Both",
      "None"
    ],
    "ans": "F = BIL sinθ",
    "explanation": "Force on a current-carrying conductor is F = BIL sinθ."
  },
  {
    "q": "The buoyant force is independent of:",
    "options": [
      "Depth of immersion",
      "Density of liquid",
      "Volume immersed",
      "Acceleration due to gravity"
    ],
    "ans": "Depth of immersion",
    "explanation": "Buoyant force is independent of depth of immersion (once fully immersed)."
  },
  {
    "q": "The image formed by a convex mirror when the object is between pole and infinity is:",
    "options": [
      "Virtual, erect and diminished",
      "Real and inverted",
      "Real and magnified",
      "Virtual and inverted"
    ],
    "ans": "Virtual, erect and diminished",
    "explanation": "A convex mirror gives a virtual, erect, diminished image for any object position."
  },
  {
    "q": "The refractive index of vacuum is:",
    "options": [
      "1",
      "1.33",
      "1.5",
      "2.42"
    ],
    "ans": "1",
    "explanation": "Vacuum has a refractive index of exactly 1."
  },
  {
    "q": "The instrument used to measure rainfall is:",
    "options": [
      "Rain gauge",
      "Anemometer",
      "Hygrometer",
      "Barometer"
    ],
    "ans": "Rain gauge",
    "explanation": "A rain gauge measures rainfall."
  },
  {
    "q": "The law of reflection is applicable to:",
    "options": [
      "Plane surfaces only",
      "Curved surfaces",
      "Both",
      "None"
    ],
    "ans": "Both",
    "explanation": "The law of reflection applies to both plane and curved surfaces."
  },
  {
    "q": "The SI unit of angular acceleration is:",
    "options": [
      "rad/s²",
      "m/s²",
      "rad",
      "degree/s²"
    ],
    "ans": "rad/s²",
    "explanation": "Angular acceleration's SI unit is rad/s²."
  },
  {
    "q": "The principle of a submarine is based on:",
    "options": [
      "Archimedes’ principle",
      "Pascal’s law",
      "Bernoulli’s principle",
      "Boyle’s law"
    ],
    "ans": "Archimedes’ principle",
    "explanation": "Submarines work via Archimedes' principle."
  },
  {
    "q": "The far point of a normal eye is:",
    "options": [
      "Infinity",
      "25 cm",
      "200 cm",
      "0 cm"
    ],
    "ans": "Infinity",
    "explanation": "The far point of a normal eye is at infinity."
  },
  {
    "q": "The induced emf in a coil is proportional to:",
    "options": [
      "Rate of change of magnetic flux",
      "Magnetic field",
      "Area",
      "Number of turns"
    ],
    "ans": "Rate of change of magnetic flux",
    "explanation": "Induced emf is proportional to the rate of change of magnetic flux."
  },
  {
    "q": "The apparent weight of a body in a lift moving downwards with acceleration a is:",
    "options": [
      "m(g − a)",
      "m(g + a)",
      "mg",
      "ma"
    ],
    "ans": "m(g − a)",
    "explanation": "Apparent weight in a downward-accelerating lift is m(g−a)."
  },
  {
    "q": "The image formed by a concave mirror when the object is at focus is:",
    "options": [
      "Real, inverted and highly magnified",
      "Virtual and erect",
      "Real and diminished",
      "Virtual and inverted"
    ],
    "ans": "Real, inverted and highly magnified",
    "explanation": "At the focus, a concave mirror forms a highly magnified image (at infinity)."
  },
  {
    "q": "The speed of light in water is:",
    "options": [
      "2.25 × 10⁸ m/s",
      "3 × 10⁸ m/s",
      "1.5 × 10⁸ m/s",
      "4 × 10⁸ m/s"
    ],
    "ans": "2.25 × 10⁸ m/s",
    "explanation": "Light travels at about 2.25×10^8 m/s in water."
  },
  {
    "q": "The instrument used to measure small resistance is:",
    "options": [
      "Wheatstone bridge",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    "ans": "Wheatstone bridge",
    "explanation": "A Wheatstone bridge measures small resistances precisely."
  },
  {
    "q": "The SI unit of radius of gyration is:",
    "options": [
      "Meter",
      "kg m²",
      "Newton",
      "Joule"
    ],
    "ans": "Meter",
    "explanation": "Radius of gyration is measured in metres."
  },
  {
    "q": "The principle used in a Venturi meter is:",
    "options": [
      "Bernoulli’s principle",
      "Pascal’s law",
      "Archimedes’ principle",
      "Boyle’s law"
    ],
    "ans": "Bernoulli’s principle",
    "explanation": "A Venturi meter uses Bernoulli's principle."
  },
  {
    "q": "The mirror used in a reflecting telescope is:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "None"
    ],
    "ans": "Concave mirror",
    "explanation": "Reflecting telescopes use a concave mirror."
  },
  {
    "q": "The near point of a hypermetropic eye is:",
    "options": [
      "Greater than 25 cm",
      "Less than 25 cm",
      "Infinity",
      "0 cm"
    ],
    "ans": "Greater than 25 cm",
    "explanation": "A hypermetropic eye's near point is farther than 25cm."
  },
  {
    "q": "The magnitude of induced emf is given by:",
    "options": [
      "Faraday’s law",
      "Lenz’s law",
      "Ohm’s law",
      "Newton’s law"
    ],
    "ans": "Faraday’s law",
    "explanation": "Faraday's law gives the magnitude of induced emf."
  },
  {
    "q": "The weight of a body at the centre of the earth is:",
    "options": [
      "Zero",
      "mg",
      "m(g+a)",
      "Infinite"
    ],
    "ans": "Zero",
    "explanation": "At Earth's centre, gravitational forces cancel, so weight is zero."
  },
  {
    "q": "The refractive index is minimum for:",
    "options": [
      "Vacuum",
      "Air",
      "Water",
      "Glass"
    ],
    "ans": "Vacuum",
    "explanation": "Vacuum has the minimum (lowest) refractive index."
  },
  {
    "q": "The instrument used to measure atmospheric pressure is:",
    "options": [
      "Barometer",
      "Hygrometer",
      "Thermometer",
      "Anemometer"
    ],
    "ans": "Barometer",
    "explanation": "A barometer measures atmospheric pressure."
  },
  {
    "q": "The angle of refraction is the angle between:",
    "options": [
      "Refracted ray and normal",
      "Incident ray and normal",
      "Incident ray and refracted ray",
      "None"
    ],
    "ans": "Refracted ray and normal",
    "explanation": "The angle of refraction is between the refracted ray and the normal."
  },
  {
    "q": "The SI unit of stress is:",
    "options": [
      "Pascal",
      "Newton",
      "Joule",
      "Watt"
    ],
    "ans": "Pascal",
    "explanation": "Stress is measured in pascals."
  }
],
  "PUTME_BIOLOGY": [
  {
    "q": "Methanogens are found in:",
    "options": [
      "Salt lakes",
      "Guts of cows",
      "Deserts",
      "Soil"
    ],
    "ans": "Guts of cows",
    "explanation": "Methanogens are anaerobic archaea found in environments like cow guts."
  },
  {
    "q": "Where is chlorophyll located in the cytoplasm?",
    "options": [
      "Mitochondria",
      "Plasma membrane",
      "Thylakoid membrane",
      "Nucleus"
    ],
    "ans": "Thylakoid membrane",
    "explanation": "Chlorophyll is located in the thylakoid membranes of chloroplasts."
  },
  {
    "q": "Where does photosynthesis take place in plants?",
    "options": [
      "Chloroplasts",
      "Cytosol",
      "Cell wall",
      "Cytoplasm"
    ],
    "ans": "Chloroplasts",
    "explanation": "Photosynthesis takes place in chloroplasts."
  },
  {
    "q": "Where is the thyroid gland located?",
    "options": [
      "Upper chest",
      "Neck, below the larynx",
      "Abdomen",
      "Brain"
    ],
    "ans": "Neck, below the larynx",
    "explanation": "The thyroid gland sits in the neck, below the larynx."
  },
  {
    "q": "In the thyroid gland, when there is a lack of iodine, efficiency:",
    "options": [
      "Increases",
      "Decreases",
      "Stays the same",
      "Becomes toxic"
    ],
    "ans": "Decreases",
    "explanation": "Iodine deficiency reduces thyroid hormone production efficiency."
  },
  {
    "q": "The main element in the thyroid gland is:",
    "options": [
      "Calcium",
      "Iron",
      "Iodine",
      "Sodium"
    ],
    "ans": "Iodine",
    "explanation": "Iodine is essential for thyroid hormone synthesis."
  },
  {
    "q": "The transfer of pollen grain from the anther to stigma of the same plant is:",
    "options": [
      "Cross-pollination",
      "Self-pollination (Autogamy)",
      "Cleistogamy",
      "Xenogamy"
    ],
    "ans": "Self-pollination (Autogamy)",
    "explanation": "Self-pollination (autogamy) is transfer of pollen within the same plant."
  },
  {
    "q": "The major building block of proteins is:",
    "options": [
      "Nucleotides",
      "Amino acids",
      "Glucose units",
      "Fatty acids"
    ],
    "ans": "Amino acids",
    "explanation": "Amino acids are the building blocks of proteins."
  },
  {
    "q": "Rhizopus feeds:",
    "options": [
      "Parasitically",
      "Saprophytically",
      "Photosynthetically",
      "Autotrophically"
    ],
    "ans": "Saprophytically",
    "explanation": "Rhizopus is a saprophytic fungus, feeding on dead organic matter."
  },
  {
    "q": "The tissue for conducting water in plants is:",
    "options": [
      "Phloem",
      "Xylem",
      "Cambium",
      "Epidermis"
    ],
    "ans": "Xylem",
    "explanation": "Xylem conducts water in plants."
  },
  {
    "q": "Net movement of water from high to low potential along a membrane is:",
    "options": [
      "Diffusion",
      "Osmosis",
      "Facilitated diffusion",
      "Active transport"
    ],
    "ans": "Osmosis",
    "explanation": "Osmosis is net water movement from high to low water potential across a membrane."
  },
  {
    "q": "The instrument to listen to internal body sounds is:",
    "options": [
      "Stethoscope",
      "Barometer",
      "Periscope",
      "Hydrometer"
    ],
    "ans": "Stethoscope",
    "explanation": "A stethoscope is used to listen to internal body sounds."
  },
  {
    "q": "Organism segmented with mouth and anus is:",
    "options": [
      "Mollusca",
      "Annelida",
      "Platyhelminthes",
      "Nematoda"
    ],
    "ans": "Annelida",
    "explanation": "Annelids are segmented worms with a mouth and anus."
  },
  {
    "q": "Formation of identical twins at birth is due to:",
    "options": [
      "Fusion of two eggs",
      "Fertilized egg divides into two embryos",
      "Different sperm cells",
      "Multiple fertilized eggs"
    ],
    "ans": "Fertilized egg divides into two embryos",
    "explanation": "Identical twins form when a fertilized egg splits into two embryos."
  },
  {
    "q": "Pancreatic Beta cells produce:",
    "options": [
      "Glucagon",
      "Somatostatin",
      "Insulin",
      "Gastrin"
    ],
    "ans": "Insulin",
    "explanation": "Pancreatic beta cells produce insulin."
  },
  {
    "q": "Germination technique in which cotyledons go above ground after hypocotyl elongation is:",
    "options": [
      "Hypogeal",
      "Epigeal",
      "Vivipary",
      "Dormancy"
    ],
    "ans": "Epigeal",
    "explanation": "Epigeal germination brings cotyledons above ground."
  },
  {
    "q": "Which blood group does not have any antibody?",
    "options": [
      "A",
      "B",
      "O",
      "AB"
    ],
    "ans": "AB",
    "explanation": "Blood group AB has neither anti-A nor anti-B antibodies."
  },
  {
    "q": "What part of the body protects the brain?",
    "options": [
      "Ribs",
      "Clavicle",
      "Sternum",
      "Cranium"
    ],
    "ans": "Cranium",
    "explanation": "The cranium protects the brain."
  },
  {
    "q": "Alteration of genetic material and information is known as:",
    "options": [
      "Adaptation",
      "Mutation",
      "Translation",
      "Photosynthesis"
    ],
    "ans": "Mutation",
    "explanation": "Mutation is an alteration of genetic material."
  },
  {
    "q": "What is the color of chlorophyll?",
    "options": [
      "Red",
      "Green",
      "Blue",
      "Yellow"
    ],
    "ans": "Green",
    "explanation": "Chlorophyll is green."
  },
  {
    "q": "DNA and RNA belong to which class of acids?",
    "options": [
      "Fatty acids",
      "Amino acids",
      "Nucleic acids",
      "Polyacids"
    ],
    "ans": "Nucleic acids",
    "explanation": "DNA and RNA are nucleic acids."
  },
  {
    "q": "What type of cells lack a nucleus?",
    "options": [
      "Animal cells",
      "Prokaryotic cells",
      "Fungal cells",
      "Eukaryotic cells"
    ],
    "ans": "Prokaryotic cells",
    "explanation": "Prokaryotic cells lack a membrane-bound nucleus."
  },
  {
    "q": "Water uptake by the roots occurs via:",
    "options": [
      "Diffusion",
      "Osmosis",
      "Transpiration",
      "Respiration"
    ],
    "ans": "Osmosis",
    "explanation": "Roots absorb water mainly by osmosis."
  },
  {
    "q": "Transpiration is:",
    "options": [
      "Water absorption",
      "Water in roots",
      "Photosynthesis",
      "Water evaporation through leaves"
    ],
    "ans": "Water evaporation through leaves",
    "explanation": "Transpiration is water evaporation through leaves."
  },
  {
    "q": "Irish moss is a:",
    "options": [
      "Blue-green alga",
      "Red alga",
      "Brown alga",
      "Green alga"
    ],
    "ans": "Red alga",
    "explanation": "Irish moss is a red alga."
  },
  {
    "q": "What type of bond is in amino acids?",
    "options": [
      "Glycosidic bond",
      "Ionic bond",
      "Peptide bond",
      "Hydrogen bond"
    ],
    "ans": "Peptide bond",
    "explanation": "Amino acids link via peptide bonds to form proteins."
  },
  {
    "q": "Hematopoiesis refers to:",
    "options": [
      "Bone growth",
      "Muscle formation",
      "Blood cell formation",
      "Oxygen transport"
    ],
    "ans": "Blood cell formation",
    "explanation": "Hematopoiesis is the formation of blood cells."
  },
  {
    "q": "The causative agent of powdery mildew is:",
    "options": [
      "Bacteria",
      "Virus",
      "Algae",
      "Fungus"
    ],
    "ans": "Fungus",
    "explanation": "Powdery mildew is caused by fungi."
  },
  {
    "q": "Unhealthy growth of tissue due to higher pressure on artery walls is called:",
    "options": [
      "Diabetes",
      "Hypertension",
      "Hypotension",
      "Cardiac arrest"
    ],
    "ans": "Hypertension",
    "explanation": "High pressure on artery walls is hypertension."
  },
  {
    "q": "The highest dilution of antibody that can react with its specific antigen is called:",
    "options": [
      "Affinity",
      "Titer",
      "Strength",
      "Efficiency"
    ],
    "ans": "Titer",
    "explanation": "Titer is the highest antibody dilution that still reacts with antigen."
  },
  {
    "q": "The percentage of water in the brain is:",
    "options": [
      "50%",
      "83%",
      "60%",
      "73%"
    ],
    "ans": "73%",
    "explanation": "The brain is roughly 73% water."
  },
  {
    "q": "The most abundant type of chlorophyll in plants is:",
    "options": [
      "Chlorophyll D",
      "Chlorophyll B",
      "Chlorophyll A",
      "Chlorophyll C"
    ],
    "ans": "Chlorophyll A",
    "explanation": "Chlorophyll A is the most abundant form in plants."
  },
  {
    "q": "The normal pH of blood is (average):",
    "options": [
      "6.0",
      "8.5",
      "5.5",
      "7.4"
    ],
    "ans": "7.4",
    "explanation": "Average blood pH is about 7.4."
  },
  {
    "q": "Most species of aphids feed on:",
    "options": [
      "Other insects",
      "Fungi",
      "Dead leaves",
      "Plant sap"
    ],
    "ans": "Plant sap",
    "explanation": "Aphids feed on plant sap."
  },
  {
    "q": "What is responsible for the viscosity of blood?",
    "options": [
      "Water content",
      "Hematocrit and plasma proteins",
      "Temperature",
      "White blood cells"
    ],
    "ans": "Hematocrit and plasma proteins",
    "explanation": "Blood viscosity depends on hematocrit and plasma proteins."
  },
  {
    "q": "The type of placenta found in humans is:",
    "options": [
      "Zonary",
      "Diffuse",
      "Cotyledonary",
      "Discoidal (Hemochorial)"
    ],
    "ans": "Discoidal (Hemochorial)",
    "explanation": "Humans have a discoidal (hemochorial) placenta."
  },
  {
    "q": "The average pulse rate range for an adult:",
    "options": [
      "20–40 bpm",
      "40–60 bpm",
      "60–100 bpm",
      "100–120 bpm"
    ],
    "ans": "60–100 bpm",
    "explanation": "Normal adult pulse rate is 60-100 bpm."
  },
  {
    "q": "In rabbits, fertilization occurs in the:",
    "options": [
      "Uterus",
      "Fallopian tube",
      "Ovary",
      "Vagina"
    ],
    "ans": "Fallopian tube",
    "explanation": "Fertilization in rabbits occurs in the fallopian tube."
  },
  {
    "q": "\"Soldiers\" of the body refers to:",
    "options": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma"
    ],
    "ans": "White blood cells",
    "explanation": "White blood cells are the body's 'soldiers' against infection."
  },
  {
    "q": "Yeast is rich in:",
    "options": [
      "Chlorophyll",
      "Starch",
      "Proteins and B vitamins",
      "Fats"
    ],
    "ans": "Proteins and B vitamins",
    "explanation": "Yeast is rich in protein and B vitamins."
  },
  {
    "q": "Glycogen is stored in:",
    "options": [
      "Stomach",
      "Kidneys",
      "Liver and muscles",
      "Skin"
    ],
    "ans": "Liver and muscles",
    "explanation": "Glycogen is stored mainly in the liver and muscles."
  },
  {
    "q": "The organelles commonly referred to as the powerhouse of the cell is:",
    "options": [
      "Nucleus",
      "Ribosome",
      "Mitochondria",
      "Golgi body"
    ],
    "ans": "Mitochondria",
    "explanation": "Mitochondria are the powerhouse of the cell."
  },
  {
    "q": "Who first coined the term \"Bacteriophage\"?",
    "options": [
      "Louis Pasteur",
      "Alexander Fleming",
      "Félix d'Hérelle",
      "Edward Jenner"
    ],
    "ans": "Félix d'Hérelle",
    "explanation": "Félix d'Hérelle coined the term 'bacteriophage'."
  },
  {
    "q": "Who first coined the word \"Vaccine\"?",
    "options": [
      "Edward Jenner",
      "Alexander Fleming",
      "Gregor Mendel",
      "Joseph Lister"
    ],
    "ans": "Edward Jenner",
    "explanation": "Edward Jenner coined the term 'vaccine'."
  },
  {
    "q": "Oviparous animals are those that:",
    "options": [
      "Give birth to live young",
      "Lay eggs",
      "Feed with milk",
      "Undergo metamorphosis"
    ],
    "ans": "Lay eggs",
    "explanation": "Oviparous animals reproduce by laying eggs."
  },
  {
    "q": "Angiosperm seeds use micropyle to:",
    "options": [
      "Pass nutrients",
      "Absorb water for germination",
      "Exchange gases",
      "Store food"
    ],
    "ans": "Absorb water for germination",
    "explanation": "The micropyle allows water absorption for germination."
  },
  {
    "q": "The smallest organ in the body is:",
    "options": [
      "Heart",
      "Spleen",
      "Pituitary",
      "Pineal body"
    ],
    "ans": "Pineal body",
    "explanation": "The pineal gland/body is the smallest organ."
  },
  {
    "q": "How many bones make the skull?",
    "options": [
      "20",
      "29",
      "15",
      "22"
    ],
    "ans": "22",
    "explanation": "The human skull is made of 22 bones."
  },
  {
    "q": "How many bones are in the ankle?",
    "options": [
      "5",
      "8",
      "9",
      "7"
    ],
    "ans": "7",
    "explanation": "The ankle has 7 tarsal bones."
  },
  {
    "q": "How many bones in the face?",
    "options": [
      "10",
      "16",
      "12",
      "14"
    ],
    "ans": "14",
    "explanation": "The face has 14 bones."
  },
  {
    "q": "Trypsin can be found in which part of the body?",
    "options": [
      "Mouth",
      "Stomach",
      "Liver",
      "Small intestine"
    ],
    "ans": "Small intestine",
    "explanation": "Trypsin acts in the small intestine."
  },
  {
    "q": "Peat moss is used in transplanting because of:",
    "options": [
      "Its weight",
      "Its minerals",
      "Water-retention properties",
      "Acidity"
    ],
    "ans": "Water-retention properties",
    "explanation": "Peat moss's water-retention properties make it useful for transplanting."
  },
  {
    "q": "The engulfment of solid particles is termed:",
    "options": [
      "Photosynthesis",
      "Phagocytosis (Endocytosis)",
      "Diffusion",
      "Filtration"
    ],
    "ans": "Phagocytosis (Endocytosis)",
    "explanation": "Phagocytosis is the engulfment of solid particles by a cell."
  },
  {
    "q": "A biotechnology role in food production is:",
    "options": [
      "Mining",
      "Programming",
      "Fermentation",
      "Welding"
    ],
    "ans": "Fermentation",
    "explanation": "Fermentation is a key biotechnology process in food production."
  },
  {
    "q": "The major function of cellulose in plants is:",
    "options": [
      "Energy storage",
      "Structural support",
      "Transport",
      "Respiration"
    ],
    "ans": "Structural support",
    "explanation": "Cellulose provides structural support in plant cell walls."
  },
  {
    "q": "What is the function of ECG?",
    "options": [
      "Blood sugar monitoring",
      "Brain activity measurement",
      "Blood pressure check",
      "Monitoring heart activity"
    ],
    "ans": "Monitoring heart activity",
    "explanation": "An ECG monitors the heart's electrical activity."
  },
  {
    "q": "Liverwort spores dispersion is by:",
    "options": [
      "Water",
      "Animals",
      "Self-burst",
      "Wind"
    ],
    "ans": "Wind",
    "explanation": "Liverwort spores are dispersed by wind."
  },
  {
    "q": "Which of these are essential fatty acids?",
    "options": [
      "Palmitic and Stearic",
      "Linoleic and Palmitic",
      "Omega-3, Omega-6",
      "Lauric and Palmitic"
    ],
    "ans": "Omega-3, Omega-6",
    "explanation": "Omega-3 and omega-6 fatty acids are essential fatty acids."
  },
  {
    "q": "The key factors sustaining an ecosystem are:",
    "options": [
      "Food only",
      "Sunlight and food only",
      "Climate, water, nutrients",
      "Humidity only"
    ],
    "ans": "Climate, water, nutrients",
    "explanation": "Ecosystems depend on climate, water, and nutrients."
  },
  {
    "q": "What is the use of an artificial pacemaker in the heart of patients?",
    "options": [
      "Cure infection",
      "Regulating heartbeat",
      "Increase muscle",
      "Remove clots"
    ],
    "ans": "Regulating heartbeat",
    "explanation": "Artificial pacemakers regulate heartbeat rhythm."
  },
  {
    "q": "A plant or plant-like organism that reproduces by spores, without flowers or seeds, is classified as:",
    "options": [
      "Bryophyte",
      "Gymnosperm",
      "Cryptogam",
      "Angiosperm"
    ],
    "ans": "Cryptogam",
    "explanation": "Cryptogams reproduce by spores, without flowers or seeds."
  },
  {
    "q": "A hypotonic solution contains:",
    "options": [
      "High solute concentration",
      "Equal solute concentration",
      "Low solute concentration",
      "None of the above"
    ],
    "ans": "Low solute concentration",
    "explanation": "A hypotonic solution has a lower solute concentration than the cell."
  },
  {
    "q": "The process by which living cells break down organic materials for energy via oxidation and reduction is called:",
    "options": [
      "Photosynthesis",
      "Fermentation",
      "Protein synthesis",
      "Cellular respiration"
    ],
    "ans": "Cellular respiration",
    "explanation": "Cellular respiration breaks down organic material via oxidation for energy."
  },
  {
    "q": "Who developed the smallpox vaccine?",
    "options": [
      "Louis Pasteur",
      "Robert Koch",
      "Jonas Salk",
      "Edward Jenner"
    ],
    "ans": "Edward Jenner",
    "explanation": "Edward Jenner developed the smallpox vaccine."
  },
  {
    "q": "Bacteria belong to a kingdom called:",
    "options": [
      "Plantae",
      "Protista",
      "Fungi",
      "Monera"
    ],
    "ans": "Monera",
    "explanation": "Bacteria belong to the kingdom Monera."
  },
  {
    "q": "Which of the following is a monosaccharide?",
    "options": [
      "Sucrose",
      "Maltose",
      "Lactose",
      "Glucose"
    ],
    "ans": "Glucose",
    "explanation": "Glucose is a monosaccharide (simple sugar)."
  },
  {
    "q": "Circadian rhythm refers to:",
    "options": [
      "Digestive cycle",
      "24-hour biological cycle",
      "Lunar cycle",
      "Annual growth"
    ],
    "ans": "24-hour biological cycle",
    "explanation": "Circadian rhythm is a roughly 24-hour biological cycle."
  },
  {
    "q": "Which of the following causes abscesses on the skin of arms and legs?",
    "options": [
      "Salmonella",
      "Staphylococcus aureus",
      "Bacillus subtilis",
      "Clostridium botulinum"
    ],
    "ans": "Staphylococcus aureus",
    "explanation": "Staphylococcus aureus commonly causes skin abscesses."
  },
  {
    "q": "... are prokaryotic but capable of photosynthesizing:",
    "options": [
      "Euglena",
      "Algae",
      "Cyanobacteria",
      "Fungi"
    ],
    "ans": "Cyanobacteria",
    "explanation": "Cyanobacteria are prokaryotes capable of photosynthesis."
  },
  {
    "q": "What plant species produces flowers?",
    "options": [
      "Gymnosperms",
      "Angiosperms",
      "Mosses",
      "Ferns"
    ],
    "ans": "Angiosperms",
    "explanation": "Angiosperms are flowering plants."
  },
  {
    "q": "What are fossils?",
    "options": [
      "Living animals",
      "Remains or imprints of ancient organisms",
      "New species",
      "Small insects"
    ],
    "ans": "Remains or imprints of ancient organisms",
    "explanation": "Fossils are remains or imprints of ancient organisms."
  },
  {
    "q": "Biomolecule that stores genetic material is:",
    "options": [
      "DNA/RNA",
      "Carbohydrate",
      "Protein",
      "Lipid"
    ],
    "ans": "DNA/RNA",
    "explanation": "DNA/RNA store genetic information."
  },
  {
    "q": "Fruits that develop from an ovary without fertilization are termed:",
    "options": [
      "Parthenocarpic",
      "Pollinated",
      "Symbiotic",
      "Viviparous"
    ],
    "ans": "Parthenocarpic",
    "explanation": "Parthenocarpic fruits develop without fertilization."
  },
  {
    "q": "The process of exchanging glucose for ATP is:",
    "options": [
      "Diffusion",
      "Photosynthesis",
      "Transpiration",
      "Cellular respiration"
    ],
    "ans": "Cellular respiration",
    "explanation": "Cellular respiration converts glucose into usable ATP."
  },
  {
    "q": "The asexual copy of an organism is termed:",
    "options": [
      "Clone",
      "Offspring",
      "Hybrid",
      "Twin"
    ],
    "ans": "Clone",
    "explanation": "A clone is a genetically identical asexual copy."
  },
  {
    "q": "Oozing out of water from the root tip is:",
    "options": [
      "Transpiration",
      "Absorption",
      "Evaporation",
      "Guttation"
    ],
    "ans": "Guttation",
    "explanation": "Guttation is water oozing from root/leaf tips."
  },
  {
    "q": "Which is the vestigial bony part of the human skeleton?",
    "options": [
      "Scapula",
      "Ribs",
      "Coccyx",
      "Sternum"
    ],
    "ans": "Coccyx",
    "explanation": "The coccyx is a vestigial bony structure in humans."
  },
  {
    "q": "Which kind of transport is present in the xylem?",
    "options": [
      "Active",
      "Passive",
      "Endocytosis",
      "Facilitated"
    ],
    "ans": "Passive",
    "explanation": "Xylem transport is passive (driven by transpiration pull)."
  },
  {
    "q": "The plants that grow on salty habitats are called:",
    "options": [
      "Hydrophytes",
      "Epiphytes",
      "Xerophytes",
      "Halophytes"
    ],
    "ans": "Halophytes",
    "explanation": "Halophytes grow in salty habitats."
  },
  {
    "q": "Photosynthetic pigments are located on the:",
    "options": [
      "Cell wall",
      "Cytoplasm",
      "Mitochondria",
      "Thylakoid membrane"
    ],
    "ans": "Thylakoid membrane",
    "explanation": "Photosynthetic pigments are located in the thylakoid membrane."
  },
  {
    "q": "Prokaryotic cells lack:",
    "options": [
      "Ribosomes",
      "Cell membrane",
      "Membrane-bound organelles and nucleus",
      "Cytoplasm"
    ],
    "ans": "Membrane-bound organelles and nucleus",
    "explanation": "Prokaryotic cells lack membrane-bound organelles and a true nucleus."
  },
  {
    "q": "Hemoglobin is present in:",
    "options": [
      "White blood cells",
      "Plasma",
      "Platelets",
      "Red blood cells"
    ],
    "ans": "Red blood cells",
    "explanation": "Hemoglobin is found in red blood cells."
  },
  {
    "q": "Water intake in the root is by:",
    "options": [
      "Diffusion",
      "Active transport",
      "Osmosis",
      "Capillary action"
    ],
    "ans": "Osmosis",
    "explanation": "Roots take up water mainly by osmosis."
  },
  {
    "q": "Libyodrilus is an example of ... found in Nigeria:",
    "options": [
      "Earthworm",
      "Termite",
      "Beetle",
      "Earthworm"
    ],
    "ans": "Earthworm",
    "explanation": "Libyodrilus is a genus of earthworm found in Nigeria."
  },
  {
    "q": "Photolysis of water takes place in the:",
    "options": [
      "Stroma",
      "Thylakoid membranes",
      "Cytoplasm",
      "Outer membrane"
    ],
    "ans": "Thylakoid membranes",
    "explanation": "Photolysis of water occurs in the thylakoid membranes."
  },
  {
    "q": "Which process moves the magnesium ion into the root?",
    "options": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Passive transport"
    ],
    "ans": "Active transport",
    "explanation": "Mineral ions like magnesium enter roots via active transport."
  },
  {
    "q": "A balancing organ in humans is called:",
    "options": [
      "Eye",
      "Nose",
      "Ear (Vestibular system)",
      "Ear (Vestibular system)"
    ],
    "ans": "Ear (Vestibular system)",
    "explanation": "The vestibular system in the ear controls balance."
  },
  {
    "q": "When water enters a plant due to injury or break in guard cells or epidermis, what is this entry called?",
    "options": [
      "Diffusion",
      "Guttation",
      "Filtration",
      "Imbibition"
    ],
    "ans": "Imbibition",
    "explanation": "Imbibition is water entry through injured plant surfaces."
  },
  {
    "q": "Excessive intake of carbohydrates causes:",
    "options": [
      "Diabetes",
      "Protein deficiency",
      "Obesity",
      "Anemia"
    ],
    "ans": "Obesity",
    "explanation": "Excess carbohydrate intake can lead to obesity."
  },
  {
    "q": "What is the exact function of mitochondria in a cell?",
    "options": [
      "Protein synthesis",
      "Lipid storage",
      "ATP production (energy generation)",
      "Photosynthesis"
    ],
    "ans": "ATP production (energy generation)",
    "explanation": "Mitochondria generate ATP (cellular energy)."
  },
  {
    "q": "The function of phloem in plants is:",
    "options": [
      "Transport water",
      "Provide support",
      "Transport food from leaves to other parts",
      "Absorb nutrients"
    ],
    "ans": "Transport food from leaves to other parts",
    "explanation": "Phloem transports food from leaves to other plant parts."
  },
  {
    "q": "In a flower, the second whorl is the:",
    "options": [
      "Calyx",
      "Androecium",
      "Gynoecium",
      "Corolla"
    ],
    "ans": "Corolla",
    "explanation": "The corolla (petals) is the second whorl of a flower."
  },
  {
    "q": "Plaque buildup in arteries is known as:",
    "options": [
      "Aneurysm",
      "Arteriosclerosis",
      "Atherosclerosis",
      "Thrombosis"
    ],
    "ans": "Atherosclerosis",
    "explanation": "Atherosclerosis is plaque buildup in arteries."
  },
  {
    "q": "Plaque buildup in arteries is known as: (Repeated)",
    "options": [
      "Aneurysm",
      "Arteriosclerosis",
      "Atherosclerosis",
      "Thrombosis"
    ],
    "ans": "Atherosclerosis",
    "explanation": "Atherosclerosis is plaque buildup in arteries."
  },
  {
    "q": "The normal weight range of a newborn baby is:",
    "options": [
      "1.0–2.0 kg",
      "2.5–4.5 kg",
      "4.5–6.0 kg",
      "1.5–3.0 kg"
    ],
    "ans": "2.5–4.5 kg",
    "explanation": "Normal newborn weight is about 2.5-4.5 kg."
  },
  {
    "q": "What are the main types of germination?",
    "options": [
      "Asexual and sexual",
      "Epigeal and hypogeal",
      "Passive and active",
      "Complete and incomplete"
    ],
    "ans": "Epigeal and hypogeal",
    "explanation": "Epigeal and hypogeal are the two main germination types."
  },
  {
    "q": "Prokaryotic cells have which size of ribosomes?",
    "options": [
      "50S",
      "70S",
      "80S",
      "90S"
    ],
    "ans": "70S",
    "explanation": "Prokaryotic ribosomes are 70S."
  },
  {
    "q": "What is the largest gland in the human body?",
    "options": [
      "Pancreas",
      "Thyroid",
      "Liver",
      "Spleen"
    ],
    "ans": "Liver",
    "explanation": "The liver is the largest gland in the body."
  },
  {
    "q": "What is the botanical name for Irish Moss?",
    "options": [
      "Spirogyra",
      "Ulva",
      "Chondrus crispus",
      "Fucus"
    ],
    "ans": "Chondrus crispus",
    "explanation": "Irish Moss's botanical name is Chondrus crispus."
  },
  {
    "q": "Amphibians of the plant kingdom are:",
    "options": [
      "Algae",
      "Pteridophytes",
      "Bryophytes",
      "Gymnosperms"
    ],
    "ans": "Bryophytes",
    "explanation": "Bryophytes are called amphibians of the plant kingdom (need water to reproduce)."
  },
  {
    "q": "The study of plant fossils is called:",
    "options": [
      "Paleontology",
      "Archaeology",
      "Paleobotany",
      "Anthropology"
    ],
    "ans": "Paleobotany",
    "explanation": "Paleobotany is the study of plant fossils."
  },
  {
    "q": "Pouch animals are also called:",
    "options": [
      "Monotremes",
      "Marsupials",
      "Rodents",
      "Lagomorphs"
    ],
    "ans": "Marsupials",
    "explanation": "Marsupials carry young in a pouch."
  },
  {
    "q": "What is dentinogenesis?",
    "options": [
      "Formation of enamel",
      "Tooth decay process",
      "Formation of dentin in teeth",
      "Breakdown of dentine"
    ],
    "ans": "Formation of dentin in teeth",
    "explanation": "Dentinogenesis is the formation of dentin in teeth."
  },
  {
    "q": "Odontoblasts are:",
    "options": [
      "Tooth enamel cells",
      "Nerve cells",
      "Cells producing dentin",
      "Gum cells"
    ],
    "ans": "Cells producing dentin",
    "explanation": "Odontoblasts are cells that produce dentin."
  },
  {
    "q": "The most important colloid in the body is:",
    "options": [
      "Water",
      "Blood plasma",
      "Cytoplasm",
      "Protoplasm"
    ],
    "ans": "Protoplasm",
    "explanation": "Protoplasm is considered the body's most important colloidal system."
  },
  {
    "q": "The cause of malaria is:",
    "options": [
      "Bacteria",
      "Virus",
      "Plasmodium",
      "Fungi"
    ],
    "ans": "Plasmodium",
    "explanation": "Malaria is caused by Plasmodium parasites."
  },
  {
    "q": "What causes abscesses on the skin of arms and legs?",
    "options": [
      "Viral infections",
      "Fungal infections",
      "Bacterial infections (Staphylococcus aureus)",
      "Parasites"
    ],
    "ans": "Bacterial infections (Staphylococcus aureus)",
    "explanation": "Staphylococcus aureus bacteria commonly cause skin abscesses."
  },
  {
    "q": "Vermicology is the scientific study of:",
    "options": [
      "Worms",
      "Fungi",
      "Bacteria",
      "Insects"
    ],
    "ans": "Worms",
    "explanation": "Vermicology is the study of worms."
  },
  {
    "q": "Which hormone stimulates hydrochloric acid secretion in the human stomach?",
    "options": [
      "Insulin",
      "Glucagon",
      "Gastrin",
      "Secretin"
    ],
    "ans": "Gastrin",
    "explanation": "Gastrin stimulates hydrochloric acid secretion in the stomach."
  },
  {
    "q": "The organelle responsible for breaking down waste material in the cell is the:",
    "options": [
      "Mitochondrion",
      "Ribosome",
      "Lysosome",
      "Golgi apparatus"
    ],
    "ans": "Lysosome",
    "explanation": "Lysosomes break down waste material in the cell."
  },
  {
    "q": "Hemoglobin is found in:",
    "options": [
      "White blood cells",
      "Red blood cells",
      "Plasma",
      "Platelets"
    ],
    "ans": "Red blood cells",
    "explanation": "Hemoglobin is found in red blood cells."
  },
  {
    "q": "Drosophila melanogaster is a:",
    "options": [
      "Plant species",
      "Virus",
      "Fruit fly species",
      "Bacterial species"
    ],
    "ans": "Fruit fly species",
    "explanation": "Drosophila melanogaster is a fruit fly species."
  },
  {
    "q": "The function of pancreatic alpha cells is to:",
    "options": [
      "Secrete insulin",
      "Secrete digestive enzymes",
      "Secrete glucagon to raise blood sugar levels",
      "Absorb nutrients"
    ],
    "ans": "Secrete glucagon to raise blood sugar levels",
    "explanation": "Pancreatic alpha cells secrete glucagon to raise blood sugar."
  },
  {
    "q": "Which of the following is a thalloid plant?",
    "options": [
      "Moss",
      "Fern",
      "Sphagnum",
      "Pine"
    ],
    "ans": "Moss",
    "explanation": "Mosses have a simple thallus-like plant body among the options given."
  },
  {
    "q": "Approximately what percentage of the human body mass is water?",
    "options": [
      "50%",
      "60%",
      "75%",
      "85%"
    ],
    "ans": "60%",
    "explanation": "Roughly 60% of human body mass is water."
  },
  {
    "q": "A nucleotide is characterized by having:",
    "options": [
      "A double helix structure",
      "A sugar, phosphate group, and a nitrogenous base",
      "Only nitrogenous bases",
      "Proteins and lipids"
    ],
    "ans": "A sugar, phosphate group, and a nitrogenous base",
    "explanation": "A nucleotide has a sugar, phosphate group, and nitrogenous base."
  },
  {
    "q": "Triploblastic animals have:",
    "options": [
      "Ectoderm and endoderm only",
      "Mesoderm and ectoderm only",
      "Ectoderm, mesoderm, and endoderm",
      "Only endoderm"
    ],
    "ans": "Ectoderm, mesoderm, and endoderm",
    "explanation": "Triploblastic animals have ectoderm, mesoderm, and endoderm."
  },
  {
    "q": "Animals that live in trees are:",
    "options": [
      "Terrestrial",
      "Aquatic",
      "Fossorial",
      "Arboreal"
    ],
    "ans": "Arboreal",
    "explanation": "Arboreal animals live in trees."
  },
  {
    "q": "Plants that grow in wet habitats are called:",
    "options": [
      "Xerophytes",
      "Halophytes",
      "Mesophytes",
      "Hydrophytes"
    ],
    "ans": "Hydrophytes",
    "explanation": "Hydrophytes grow in wet/aquatic habitats."
  },
  {
    "q": "Accumulation of pus in the leg caused by infection is called:",
    "options": [
      "Cellulitis",
      "Gangrene",
      "Ulcer",
      "Abscess"
    ],
    "ans": "Abscess",
    "explanation": "An abscess is a localized pus accumulation from infection."
  },
  {
    "q": "The causative agent of elephantiasis is:",
    "options": [
      "Plasmodium",
      "Trypanosoma",
      "Wuchereria bancrofti",
      "Schistosoma"
    ],
    "ans": "Wuchereria bancrofti",
    "explanation": "Elephantiasis is caused by Wuchereria bancrofti."
  },
  {
    "q": "The causative agent of dourine is:",
    "options": [
      "Trypanosoma brucei",
      "Trypanosoma cruzi",
      "Trypanosoma gambiense",
      "Trypanosoma equiperdum"
    ],
    "ans": "Trypanosoma equiperdum",
    "explanation": "Dourine is caused by Trypanosoma equiperdum."
  },
  {
    "q": "Which animal serves as a vector for the Zika virus?",
    "options": [
      "Tsetse fly",
      "Housefly",
      "Mosquito",
      "Tick"
    ],
    "ans": "Mosquito",
    "explanation": "Mosquitoes are the main vector for Zika virus."
  },
  {
    "q": "How many bones make up the adult human skeleton?",
    "options": [
      "206",
      "210",
      "201",
      "220"
    ],
    "ans": "206",
    "explanation": "The adult human skeleton has 206 bones."
  },
  {
    "q": "An example of a flat bone is the:",
    "options": [
      "Femur",
      "Radius",
      "Scapula",
      "Tibia"
    ],
    "ans": "Scapula",
    "explanation": "The scapula is a flat bone."
  },
  {
    "q": "Cardiac movement relates to:",
    "options": [
      "Voluntary muscle contraction",
      "Skeletal muscle movement",
      "Involuntary rhythmic contraction of the heart muscle",
      "Movement of smooth muscles in the intestines"
    ],
    "ans": "Involuntary rhythmic contraction of the heart muscle",
    "explanation": "Cardiac movement is the heart's involuntary rhythmic contraction."
  },
  {
    "q": "The only long bone lying horizontally in the human body is the:",
    "options": [
      "Femur",
      "Humerus",
      "Tibia",
      "Clavicle"
    ],
    "ans": "Clavicle",
    "explanation": "The clavicle is the only long bone that lies horizontally."
  },
  {
    "q": "Which bacterium causes pus formation in the leg?",
    "options": [
      "Streptococcus",
      "Pseudomonas",
      "Staphylococcus aureus",
      "Clostridium"
    ],
    "ans": "Staphylococcus aureus",
    "explanation": "Staphylococcus aureus causes pus formation in the leg."
  },
  {
    "q": "The enzyme that produces ATP is:",
    "options": [
      "Hexokinase",
      "Lactase",
      "ATP synthase",
      "DNA polymerase"
    ],
    "ans": "ATP synthase",
    "explanation": "ATP synthase is the enzyme that produces ATP."
  },
  {
    "q": "In Cnidarians, nerves are arranged in:",
    "options": [
      "Brain",
      "Spinal cord",
      "Plexuses (nerve nets)",
      "Central nervous system"
    ],
    "ans": "Plexuses (nerve nets)",
    "explanation": "Cnidarian nerves form diffuse nerve nets (plexuses)."
  },
  {
    "q": "Which enzyme is secreted in an inactive form to prevent self-digestion?",
    "options": [
      "Pepsin",
      "Amylase",
      "Lipase",
      "Trypsin"
    ],
    "ans": "Trypsin",
    "explanation": "Trypsin is secreted as inactive trypsinogen to prevent self-digestion."
  },
  {
    "q": "The \"S\" in 70S ribosome stands for:",
    "options": [
      "Size",
      "Structure",
      "Svedberg unit",
      "Strength"
    ],
    "ans": "Svedberg unit",
    "explanation": "'S' in 70S ribosome refers to the Svedberg sedimentation unit."
  },
  {
    "q": "Plants that live in places neither too wet nor too dry are called:",
    "options": [
      "Xerophytes",
      "Hydrophytes",
      "Mesophytes",
      "Halophytes"
    ],
    "ans": "Mesophytes",
    "explanation": "Mesophytes grow in moderately moist (neither wet nor dry) habitats."
  },
  {
    "q": "Unhealthy growth of tissues due to high pressure in artery walls is called:",
    "options": [
      "Hypotension",
      "Edema",
      "Hypertrophy",
      "Ischemia"
    ],
    "ans": "Hypertrophy",
    "explanation": "Hypertrophy is unhealthy tissue growth from high arterial pressure."
  },
  {
    "q": "The primary pigment found in human red blood cells is:",
    "options": [
      "Melanin",
      "Chlorophyll",
      "Hemoglobin",
      "Keratin"
    ],
    "ans": "Hemoglobin",
    "explanation": "Hemoglobin is the pigment in red blood cells."
  },
  {
    "q": "The valve that prevents backflow of blood from the left ventricle to the left atrium is the:",
    "options": [
      "Semilunar valve",
      "Mitral (bicuspid) valve",
      "Tricuspid valve",
      "Pulmonary valve"
    ],
    "ans": "Mitral (bicuspid) valve",
    "explanation": "The mitral (bicuspid) valve prevents backflow from left ventricle to left atrium."
  },
  {
    "q": "The main site for absorption of nutrients in humans is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "ans": "Small intestine",
    "explanation": "The small intestine is the main site of nutrient absorption."
  },
  {
    "q": "What is the function of white pulp in the spleen?",
    "options": [
      "Filters urine",
      "Stores glycogen",
      "Produces bile",
      "Immune response and producing lymphocytes"
    ],
    "ans": "Immune response and producing lymphocytes",
    "explanation": "White pulp in the spleen handles immune response and lymphocyte production."
  },
  {
    "q": "Which vitamin is required for calcium absorption in the intestines?",
    "options": [
      "Vitamin C",
      "Vitamin K",
      "Vitamin B12",
      "Vitamin D"
    ],
    "ans": "Vitamin D",
    "explanation": "Vitamin D is needed for calcium absorption in the intestines."
  },
  {
    "q": "Which process is responsible for the breaking down of glucose to release energy in the absence of oxygen?",
    "options": [
      "Photosynthesis",
      "Aerobic respiration",
      "Anaerobic respiration (Fermentation)",
      "Chemiosmosis"
    ],
    "ans": "Anaerobic respiration (Fermentation)",
    "explanation": "Anaerobic respiration (fermentation) breaks down glucose without oxygen."
  },
  {
    "q": "In plants, the opening and closing of stomata is regulated by:",
    "options": [
      "Epidermal cells",
      "Xylem vessels",
      "Guard cells",
      "Mesophyll cells"
    ],
    "ans": "Guard cells",
    "explanation": "Guard cells regulate stomatal opening and closing."
  },
  {
    "q": "In genetics, a cross between an individual with an unknown genotype and a homozygous recessive individual is called a:",
    "options": [
      "Dihybrid cross",
      "Test cross",
      "Monohybrid cross",
      "Back cross"
    ],
    "ans": "Test cross",
    "explanation": "A test cross crosses an unknown genotype with a homozygous recessive individual."
  },
  {
    "q": "Which of these is not found in prokaryotic cells?",
    "options": [
      "Plasma membrane",
      "Nuclear envelope",
      "Ribosomes",
      "Cell wall"
    ],
    "ans": "Nuclear envelope",
    "explanation": "Prokaryotic cells lack a nuclear envelope."
  },
  {
    "q": "Which is responsible for the transmission of impulses away from the neuron cell body?",
    "options": [
      "Dendrite",
      "Myelin sheath",
      "Axon",
      "Synapse"
    ],
    "ans": "Axon",
    "explanation": "The axon carries impulses away from the neuron cell body."
  },
  {
    "q": "The mineral essential for the formation of thyroid hormones is:",
    "options": [
      "Iron",
      "Calcium",
      "Magnesium",
      "Iodine"
    ],
    "ans": "Iodine",
    "explanation": "Iodine is essential for thyroid hormone formation."
  },
  {
    "q": "Which human organ stores bile?",
    "options": [
      "Pancreas",
      "Spleen",
      "Gall bladder",
      "Large intestine"
    ],
    "ans": "Gall bladder",
    "explanation": "The gall bladder stores bile."
  },
  {
    "q": "The egg cell in flowering plants is produced in the:",
    "options": [
      "Style",
      "Stigma",
      "Sepal",
      "Ovule"
    ],
    "ans": "Ovule",
    "explanation": "The egg cell forms within the ovule."
  },
  {
    "q": "DNA replication occurs during which phase of the cell cycle?",
    "options": [
      "G1 phase",
      "S phase",
      "G2 phase",
      "M phase"
    ],
    "ans": "S phase",
    "explanation": "DNA replication occurs during S phase of the cell cycle."
  },
  {
    "q": "The basic structural and functional unit of the kidney is:",
    "options": [
      "Alveolus",
      "Islet",
      "Glomerulus",
      "Nephron"
    ],
    "ans": "Nephron",
    "explanation": "The nephron is the kidney's structural and functional unit."
  },
  {
    "q": "The largest organ of the human body is the:",
    "options": [
      "Liver",
      "Large intestine",
      "Lungs",
      "Skin"
    ],
    "ans": "Skin",
    "explanation": "The skin is the largest organ in the human body."
  },
  {
    "q": "Which vitamin prevents scurvy?",
    "options": [
      "B12",
      "D",
      "K",
      "C"
    ],
    "ans": "C",
    "explanation": "Vitamin C prevents scurvy."
  },
  {
    "q": "Photosynthesis occurs predominantly in which tissue of the leaf?",
    "options": [
      "Xylem",
      "Phloem",
      "Palisade mesophyll",
      "Epidermis"
    ],
    "ans": "Palisade mesophyll",
    "explanation": "Photosynthesis occurs mainly in the palisade mesophyll of leaves."
  },
  {
    "q": "What is the function of hemoglobin?",
    "options": [
      "Produce hormones",
      "Transport carbohydrates",
      "Absorb fat",
      "Carry oxygen"
    ],
    "ans": "Carry oxygen",
    "explanation": "Hemoglobin's function is to carry oxygen."
  },
  {
    "q": "The cell wall of fungi is composed mainly of:",
    "options": [
      "Cellulose",
      "Starch",
      "Protein",
      "Chitin"
    ],
    "ans": "Chitin",
    "explanation": "Fungal cell walls are mainly composed of chitin."
  },
  {
    "q": "The structure in the mammalian ear that maintains balance is the:",
    "options": [
      "Cochlea",
      "Ear drum",
      "Auditory nerve",
      "Semicircular canal"
    ],
    "ans": "Semicircular canal",
    "explanation": "Semicircular canals in the ear maintain balance."
  },
  {
    "q": "Plants lose water mainly through:",
    "options": [
      "Stem",
      "Flower",
      "Roots",
      "Leaves"
    ],
    "ans": "Leaves",
    "explanation": "Plants lose most water through their leaves."
  },
  {
    "q": "A person with genotype \"IAIB\" has blood group:",
    "options": [
      "O",
      "A",
      "B",
      "AB"
    ],
    "ans": "AB",
    "explanation": "Genotype IAIB gives blood group AB."
  },
  {
    "q": "The monomer of proteins is:",
    "options": [
      "Nucleic acid",
      "Fatty acid",
      "Glucose",
      "Amino acid"
    ],
    "ans": "Amino acid",
    "explanation": "Amino acids are the monomers of proteins."
  },
  {
    "q": "The main function of the large intestine is to:",
    "options": [
      "Digest food",
      "Absorb proteins",
      "Produce enzymes",
      "Absorb water"
    ],
    "ans": "Absorb water",
    "explanation": "The large intestine's main role is absorbing water."
  },
  {
    "q": "Basic units of life are:",
    "options": [
      "Tissues",
      "Organs",
      "Organelles",
      "Cells"
    ],
    "ans": "Cells",
    "explanation": "Cells are the basic unit of life."
  },
  {
    "q": "Which chemical is used to test for starch?",
    "options": [
      "Benedict's solution",
      "Iodine solution",
      "Biuret solution",
      "Fehling's solution"
    ],
    "ans": "Iodine solution",
    "explanation": "Iodine solution is used to test for starch (turns blue-black)."
  },
  {
    "q": "Mitosis results in the formation of:",
    "options": [
      "Four gametes",
      "Two identical daughter cells",
      "Cells with different DNA",
      "One daughter cell"
    ],
    "ans": "Two identical daughter cells",
    "explanation": "Mitosis produces two genetically identical daughter cells."
  },
  {
    "q": "Which part of the brain controls balance and muscle coordination?",
    "options": [
      "Medulla",
      "Cerebrum",
      "Cerebellum",
      "Thalamus"
    ],
    "ans": "Cerebellum",
    "explanation": "The cerebellum controls balance and muscle coordination."
  },
  {
    "q": "The offspring produced by sexual reproduction are:",
    "options": [
      "Clones",
      "Identical",
      "Genetically unrelated",
      "Genetically variable"
    ],
    "ans": "Genetically variable",
    "explanation": "Sexual reproduction produces genetically variable offspring."
  },
  {
    "q": "In plants, phototropism is growth in response to:",
    "options": [
      "Wind",
      "Gravity",
      "Water",
      "Light"
    ],
    "ans": "Light",
    "explanation": "Phototropism is plant growth in response to light."
  },
  {
    "q": "The lens in the human eye is:",
    "options": [
      "Concave",
      "Convex",
      "Planar",
      "Biconcave"
    ],
    "ans": "Convex",
    "explanation": "The human eye lens is convex."
  },
  {
    "q": "Which process occurs in plant roots to absorb water?",
    "options": [
      "Diffusion",
      "Photosynthesis",
      "Respiration",
      "Osmosis"
    ],
    "ans": "Osmosis",
    "explanation": "Roots absorb water mainly through osmosis."
  },
  {
    "q": "In which organelle does aerobic respiration mainly occur?",
    "options": [
      "Nucleus",
      "Mitochondrion",
      "Chloroplast",
      "Golgi apparatus"
    ],
    "ans": "Mitochondrion",
    "explanation": "Aerobic respiration mainly occurs in mitochondria."
  },
  {
    "q": "The main function of white blood cells is:",
    "options": [
      "Carry oxygen",
      "Carry carbon dioxide",
      "Defend against disease",
      "Control blood pressure"
    ],
    "ans": "Defend against disease",
    "explanation": "White blood cells defend the body against disease."
  },
  {
    "q": "Calcium is important for:",
    "options": [
      "Growth of hair",
      "Vision",
      "Circulation",
      "Bone and tooth formation"
    ],
    "ans": "Bone and tooth formation",
    "explanation": "Calcium is essential for bone and tooth formation."
  },
  {
    "q": "The largest type of vertebrae in the human body is the:",
    "options": [
      "Cervical",
      "Thoracic",
      "Lumbar",
      "Sacral"
    ],
    "ans": "Lumbar",
    "explanation": "Lumbar vertebrae are the largest in the vertebral column."
  },
  {
    "q": "The innermost layer of mammalian tooth is:",
    "options": [
      "Dentine",
      "Enamel",
      "Cementum",
      "Pulp cavity"
    ],
    "ans": "Pulp cavity",
    "explanation": "The pulp cavity is the innermost layer of a tooth."
  },
  {
    "q": "The period between birth and sexual maturity is called:",
    "options": [
      "Senescence",
      "Adolescence",
      "Gestation",
      "Infancy"
    ],
    "ans": "Adolescence",
    "explanation": "Adolescence spans birth's growth period to sexual maturity."
  },
  {
    "q": "Deficiency of iron in the diet leads to:",
    "options": [
      "Kwashiorkor",
      "Rickets",
      "Marasmus",
      "Anemia"
    ],
    "ans": "Anemia",
    "explanation": "Iron deficiency leads to anemia."
  },
  {
    "q": "The main product of anaerobic respiration in plants is:",
    "options": [
      "Lactic acid",
      "Glucose",
      "Ethanol",
      "Oxygen"
    ],
    "ans": "Ethanol",
    "explanation": "Ethanol is the main product of anaerobic respiration in plants."
  },
  {
    "q": "The three main types of muscles in the human body are:",
    "options": [
      "Cardiac, cartilage, smooth",
      "Cardiac, skeletal, fat",
      "Collagen, smooth, voluntary",
      "Cardiac, skeletal, smooth"
    ],
    "ans": "Cardiac, skeletal, smooth",
    "explanation": "The three muscle types are cardiac, skeletal, and smooth."
  },
  {
    "q": "Which part of the flower develops into a fruit after fertilization?",
    "options": [
      "Stamen",
      "Style",
      "Sepal",
      "Ovary"
    ],
    "ans": "Ovary",
    "explanation": "The ovary develops into the fruit after fertilization."
  },
  {
    "q": "The condition in which the lens of the eye becomes cloudy is called:",
    "options": [
      "Astigmatism",
      "Cataract",
      "Glaucoma",
      "Conjunctivitis"
    ],
    "ans": "Cataract",
    "explanation": "Cataract is clouding of the eye's lens."
  },
  {
    "q": "What is the main function of the ribosome?",
    "options": [
      "Fat synthesis",
      "Protein synthesis",
      "DNA replication",
      "Cell division"
    ],
    "ans": "Protein synthesis",
    "explanation": "Ribosomes carry out protein synthesis."
  },
  {
    "q": "The vertebral column is also known as the:",
    "options": [
      "Ribcage",
      "Sternum",
      "Spine",
      "Backbone"
    ],
    "ans": "Backbone",
    "explanation": "The vertebral column is also called the backbone/spine."
  },
  {
    "q": "Which of the following is the smallest unit of heredity?",
    "options": [
      "Chromosome",
      "Organelle",
      "Nucleus",
      "Gene"
    ],
    "ans": "Gene",
    "explanation": "The gene is the smallest unit of heredity."
  },
  {
    "q": "The function of contractile vacuole in paramecium is:",
    "options": [
      "Reproduction",
      "Movement",
      "Photosynthesis",
      "Osmoregulation"
    ],
    "ans": "Osmoregulation",
    "explanation": "The contractile vacuole in paramecium performs osmoregulation."
  },
  {
    "q": "The enzyme that breaks down proteins in the stomach is:",
    "options": [
      "Amylase",
      "Maltase",
      "Lipase",
      "Pepsin"
    ],
    "ans": "Pepsin",
    "explanation": "Pepsin breaks down proteins in the stomach."
  },
  {
    "q": "The number of pairs of ribs in the human body is:",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "ans": "12",
    "explanation": "Humans have 12 pairs of ribs."
  },
  {
    "q": "Which plant tissue is responsible for the transport of organic food?",
    "options": [
      "Cambium",
      "Epidermis",
      "Xylem",
      "Phloem"
    ],
    "ans": "Phloem",
    "explanation": "Phloem transports organic food in plants."
  },
  {
    "q": "Which process occurs in yeast to produce bread and alcohol?",
    "options": [
      "Photosynthesis",
      "Respiration",
      "Fermentation",
      "Hydrolysis"
    ],
    "ans": "Fermentation",
    "explanation": "Fermentation by yeast produces bread's rise and alcohol."
  },
  {
    "q": "The function of the epiglottis is to:",
    "options": [
      "Increase the surface area of intestines",
      "Filter bacteria from air",
      "Initiate breathing",
      "Prevent food from entering the windpipe"
    ],
    "ans": "Prevent food from entering the windpipe",
    "explanation": "The epiglottis prevents food from entering the windpipe."
  },
  {
    "q": "The disease caused by a deficiency of Vitamin D in children is:",
    "options": [
      "Scurvy",
      "Pellagra",
      "Rickets",
      "Anemia"
    ],
    "ans": "Rickets",
    "explanation": "Vitamin D deficiency in children causes rickets."
  },
  {
    "q": "The process by which food is moved through the esophagus is:",
    "options": [
      "Diffusion",
      "Retraction",
      "Reflection",
      "Peristalsis"
    ],
    "ans": "Peristalsis",
    "explanation": "Peristalsis moves food through the esophagus."
  },
  {
    "q": "The enzyme that digests fats in the human digestive system is:",
    "options": [
      "Amylase",
      "Pepsin",
      "Trypsin",
      "Lipase"
    ],
    "ans": "Lipase",
    "explanation": "Lipase digests fats in the digestive system."
  },
  {
    "q": "The process of cell division that results in two identical daughter cells is:",
    "options": [
      "Meiosis",
      "Mitosis",
      "Binary fission",
      "Budding"
    ],
    "ans": "Mitosis",
    "explanation": "Mitosis produces two identical daughter cells."
  },
  {
    "q": "The process by which green plants lose water vapor through pores is:",
    "options": [
      "Respiration",
      "Photosynthesis",
      "Absorption",
      "Transpiration"
    ],
    "ans": "Transpiration",
    "explanation": "Transpiration is water vapour loss through leaf pores."
  },
  {
    "q": "The functional unit of the liver is the:",
    "options": [
      "Nephron",
      "Alveolus",
      "Lobule",
      "Villus"
    ],
    "ans": "Lobule",
    "explanation": "The lobule is the liver's functional unit."
  },
  {
    "q": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    "options": [
      "Pulmonary artery",
      "Aorta",
      "Pulmonary vein",
      "Vena cava"
    ],
    "ans": "Pulmonary vein",
    "explanation": "Pulmonary veins carry oxygenated blood from lungs to heart."
  },
  {
    "q": "The process by which plants manufacture their food is called:",
    "options": [
      "Respiration",
      "Transpiration",
      "Photosynthesis",
      "Germination"
    ],
    "ans": "Photosynthesis",
    "explanation": "Photosynthesis is how plants manufacture food."
  },
  {
    "q": "Which part of the nephron is responsible for ultrafiltration?",
    "options": [
      "Loop of Henle",
      "Collecting duct",
      "Glomerulus",
      "Distal convoluted tubule"
    ],
    "ans": "Glomerulus",
    "explanation": "The glomerulus performs ultrafiltration in the nephron."
  },
  {
    "q": "The largest chamber of the human heart is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "ans": "Left ventricle",
    "explanation": "The left ventricle is the heart's largest, most muscular chamber."
  },
  {
    "q": "Which vitamin helps in blood clotting?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ],
    "ans": "Vitamin K",
    "explanation": "Vitamin K assists blood clotting."
  },
  {
    "q": "The basic unit of classification is the:",
    "options": [
      "Family",
      "Order",
      "Species",
      "Genus"
    ],
    "ans": "Species",
    "explanation": "Species is the basic unit of biological classification."
  },
  {
    "q": "Which hormone regulates blood glucose by lowering it?",
    "options": [
      "Adrenaline",
      "Insulin",
      "Glucagon",
      "Thyroxine"
    ],
    "ans": "Insulin",
    "explanation": "Insulin lowers blood glucose levels."
  },
  {
    "q": "Which part of a flower develops into a seed after fertilization?",
    "options": [
      "Ovary",
      "Ovule",
      "Petal",
      "Stigma"
    ],
    "ans": "Ovule",
    "explanation": "The ovule develops into a seed after fertilization."
  },
  {
    "q": "Which organ removes excess water and urea from the blood?",
    "options": [
      "Liver",
      "Skin",
      "Kidney",
      "Pancreas"
    ],
    "ans": "Kidney",
    "explanation": "The kidney removes excess water and urea from blood."
  },
  {
    "q": "The largest artery in the body is the:",
    "options": [
      "Pulmonary artery",
      "Coronary artery",
      "Aorta",
      "Carotid artery"
    ],
    "ans": "Aorta",
    "explanation": "The aorta is the body's largest artery."
  },
  {
    "q": "The fluid part of blood is called:",
    "options": [
      "Serum",
      "Plasma",
      "Lymph",
      "Platelets"
    ],
    "ans": "Plasma",
    "explanation": "Plasma is the fluid portion of blood."
  },
  {
    "q": "Which disease is caused by Vitamin C deficiency?",
    "options": [
      "Rickets",
      "Pellagra",
      "Beriberi",
      "Scurvy"
    ],
    "ans": "Scurvy",
    "explanation": "Vitamin C deficiency causes scurvy."
  },
  {
    "q": "Which organ produces bile?",
    "options": [
      "Pancreas",
      "Gall bladder",
      "Liver",
      "Small intestine"
    ],
    "ans": "Liver",
    "explanation": "The liver produces bile."
  },
  {
    "q": "The smallest blood vessels are called:",
    "options": [
      "Veins",
      "Venules",
      "Capillaries",
      "Arteries"
    ],
    "ans": "Capillaries",
    "explanation": "Capillaries are the smallest blood vessels."
  },
  {
    "q": "Which kingdom contains mushrooms?",
    "options": [
      "Plantae",
      "Animalia",
      "Protista",
      "Fungi"
    ],
    "ans": "Fungi",
    "explanation": "Mushrooms belong to the kingdom Fungi."
  },
  {
    "q": "The movement of manufactured food through the phloem is known as:",
    "options": [
      "Translocation",
      "Transpiration",
      "Diffusion",
      "Osmosis"
    ],
    "ans": "Translocation",
    "explanation": "Translocation is the movement of food through phloem."
  },
  {
    "q": "Which gas is released during photosynthesis?",
    "options": [
      "Carbon dioxide",
      "Nitrogen",
      "Oxygen",
      "Hydrogen"
    ],
    "ans": "Oxygen",
    "explanation": "Oxygen is released during photosynthesis."
  },
  {
    "q": "The longest bone in the human body is the:",
    "options": [
      "Tibia",
      "Humerus",
      "Femur",
      "Radius"
    ],
    "ans": "Femur",
    "explanation": "The femur is the longest bone in the human body."
  },
  {
    "q": "Which organ is responsible for hearing?",
    "options": [
      "Nose",
      "Eye",
      "Ear",
      "Tongue"
    ],
    "ans": "Ear",
    "explanation": "The ear is responsible for hearing."
  },
  {
    "q": "The outer protective covering of plant cells is the:",
    "options": [
      "Plasma membrane",
      "Cytoplasm",
      "Cell wall",
      "Nucleus"
    ],
    "ans": "Cell wall",
    "explanation": "The cell wall is the outer protective covering of plant cells."
  },
  {
    "q": "Which blood cells are responsible for blood clotting?",
    "options": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma cells"
    ],
    "ans": "Platelets",
    "explanation": "Platelets are responsible for blood clotting."
  },
  {
    "q": "Which scientist is regarded as the Father of Genetics?",
    "options": [
      "Charles Darwin",
      "Louis Pasteur",
      "Gregor Mendel",
      "Robert Hooke"
    ],
    "ans": "Gregor Mendel",
    "explanation": "Gregor Mendel is regarded as the Father of Genetics."
  },
  {
    "q": "The opening through which pollen enters the ovule is the:",
    "options": [
      "Hilum",
      "Micropyle",
      "Funicle",
      "Chalaza"
    ],
    "ans": "Micropyle",
    "explanation": "The micropyle is the opening through which pollen enters the ovule."
  },
  {
    "q": "Which process produces gametes in animals?",
    "options": [
      "Mitosis",
      "Binary fission",
      "Meiosis",
      "Budding"
    ],
    "ans": "Meiosis",
    "explanation": "Meiosis produces gametes in animals."
  },
  {
    "q": "Which organelle is responsible for packaging and secretion of proteins?",
    "options": [
      "Ribosome",
      "Lysosome",
      "Golgi apparatus",
      "Vacuole"
    ],
    "ans": "Golgi apparatus",
    "explanation": "The Golgi apparatus packages and secretes proteins."
  },
  {
    "q": "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
    "options": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Vena cava"
    ],
    "ans": "Pulmonary artery",
    "explanation": "The pulmonary artery carries deoxygenated blood to the lungs."
  },
  {
    "q": "The process by which green plants lose water vapour is called:",
    "options": [
      "Respiration",
      "Transpiration",
      "Diffusion",
      "Excretion"
    ],
    "ans": "Transpiration",
    "explanation": "Transpiration is water vapour loss from plants."
  },
  {
    "q": "Which tissue transports manufactured food in flowering plants?",
    "options": [
      "Xylem",
      "Phloem",
      "Cambium",
      "Cortex"
    ],
    "ans": "Phloem",
    "explanation": "Phloem transports manufactured food in flowering plants."
  },
  {
    "q": "The largest part of the human brain is the:",
    "options": [
      "Cerebellum",
      "Cerebrum",
      "Medulla oblongata",
      "Hypothalamus"
    ],
    "ans": "Cerebrum",
    "explanation": "The cerebrum is the largest part of the human brain."
  },
  {
    "q": "The pigment responsible for the red colour of blood is:",
    "options": [
      "Melanin",
      "Chlorophyll",
      "Hemoglobin",
      "Keratin"
    ],
    "ans": "Hemoglobin",
    "explanation": "Hemoglobin gives blood its red colour."
  },
  {
    "q": "Which process results in the formation of four haploid cells?",
    "options": [
      "Binary fission",
      "Mitosis",
      "Meiosis",
      "Budding"
    ],
    "ans": "Meiosis",
    "explanation": "Meiosis produces four haploid cells."
  },
  {
    "q": "The male reproductive organ of a flower is called the:",
    "options": [
      "Pistil",
      "Stamen",
      "Sepal",
      "Ovule"
    ],
    "ans": "Stamen",
    "explanation": "The stamen is the male reproductive organ of a flower."
  },
  {
    "q": "Which microorganism is used in the production of yoghurt?",
    "options": [
      "Rhizopus",
      "Lactobacillus",
      "Plasmodium",
      "Amoeba"
    ],
    "ans": "Lactobacillus",
    "explanation": "Lactobacillus is used to produce yoghurt."
  },
  {
    "q": "Which part of the alimentary canal absorbs most digested food?",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "ans": "Small intestine",
    "explanation": "The small intestine absorbs most digested food."
  },
  {
    "q": "Which mineral is essential for the formation of hemoglobin?",
    "options": [
      "Calcium",
      "Iron",
      "Sodium",
      "Potassium"
    ],
    "ans": "Iron",
    "explanation": "Iron is essential for hemoglobin formation."
  },
  {
    "q": "The process by which organisms maintain a constant internal environment is known as:",
    "options": [
      "Respiration",
      "Adaptation",
      "Homeostasis",
      "Evolution"
    ],
    "ans": "Homeostasis",
    "explanation": "Homeostasis maintains a constant internal environment."
  },
  {
    "q": "Which of the following is a connective tissue?",
    "options": [
      "Muscle",
      "Nervous tissue",
      "Blood",
      "Epithelium"
    ],
    "ans": "Blood",
    "explanation": "Blood is classified as a connective tissue."
  },
  {
    "q": "Which chamber of the heart has the thickest muscular wall?",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "ans": "Left ventricle",
    "explanation": "The left ventricle has the heart's thickest muscular wall."
  },
  {
    "q": "The exchange of gases in the lungs takes place in the:",
    "options": [
      "Bronchi",
      "Trachea",
      "Alveoli",
      "Larynx"
    ],
    "ans": "Alveoli",
    "explanation": "Gas exchange in the lungs occurs in the alveoli."
  },
  {
    "q": "Which of the following is a characteristic of mammals?",
    "options": [
      "Lay soft eggs",
      "Have feathers",
      "Possess mammary glands",
      "Breathe through gills"
    ],
    "ans": "Possess mammary glands",
    "explanation": "Possessing mammary glands is a defining mammal characteristic."
  },
  {
    "q": "The cell membrane is mainly composed of:",
    "options": [
      "Lipids and proteins",
      "Starch and cellulose",
      "Chitin and proteins",
      "Water and minerals"
    ],
    "ans": "Lipids and proteins",
    "explanation": "The cell membrane is mainly composed of lipids and proteins."
  },
  {
    "q": "Which disease is caused by the Human Immunodeficiency Virus (HIV)?",
    "options": [
      "Tuberculosis",
      "Malaria",
      "AIDS",
      "Cholera"
    ],
    "ans": "AIDS",
    "explanation": "HIV causes AIDS."
  },
  {
    "q": "Which organ is responsible for detoxification of harmful substances in the body?",
    "options": [
      "Liver",
      "Kidney",
      "Spleen",
      "Pancreas"
    ],
    "ans": "Liver",
    "explanation": "The liver detoxifies harmful substances in the body."
  },
  {
    "q": "The movement of minerals from the soil into root hairs occurs mainly by:",
    "options": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Capillary action"
    ],
    "ans": "Active transport",
    "explanation": "Minerals move into root hairs mainly via active transport."
  },
  {
    "q": "Which of the following is an example of an excretory product in plants?",
    "options": [
      "Oxygen only",
      "Glucose",
      "Resins",
      "Starch"
    ],
    "ans": "Resins",
    "explanation": "Resins are an example of an excretory product in plants."
  },
  {
    "q": "Which blood group is regarded as the universal donor?",
    "options": [
      "A",
      "B",
      "O",
      "AB"
    ],
    "ans": "O",
    "explanation": "Blood group O is the universal donor."
  },
  {
    "q": "Which blood group is regarded as the universal recipient?",
    "options": [
      "A",
      "B",
      "O",
      "AB"
    ],
    "ans": "AB",
    "explanation": "Blood group AB is the universal recipient."
  },
  {
    "q": "The organelle that contains digestive enzymes is the:",
    "options": [
      "Ribosome",
      "Mitochondrion",
      "Lysosome",
      "Centriole"
    ],
    "ans": "Lysosome",
    "explanation": "Lysosomes contain digestive enzymes."
  },
  {
    "q": "Which process is responsible for the growth and repair of body tissues?",
    "options": [
      "Meiosis",
      "Mitosis",
      "Fertilization",
      "Mutation"
    ],
    "ans": "Mitosis",
    "explanation": "Mitosis drives growth and repair of body tissues."
  },
  {
    "q": "Which organelle is known as the control center of the cell?",
    "options": [
      "Mitochondrion",
      "Nucleus",
      "Ribosome",
      "Golgi apparatus"
    ],
    "ans": "Nucleus",
    "explanation": "The nucleus is the cell's control center."
  },
  {
    "q": "Which process involves the fusion of male and female gametes?",
    "options": [
      "Pollination",
      "Germination",
      "Fertilization",
      "Budding"
    ],
    "ans": "Fertilization",
    "explanation": "Fertilization is the fusion of male and female gametes."
  },
  {
    "q": "The green pigment responsible for trapping light energy is called:",
    "options": [
      "Xanthophyll",
      "Carotene",
      "Chlorophyll",
      "Anthocyanin"
    ],
    "ans": "Chlorophyll",
    "explanation": "Chlorophyll traps light energy for photosynthesis."
  },
  {
    "q": "Which part of the digestive system stores bile?",
    "options": [
      "Liver",
      "Gall bladder",
      "Pancreas",
      "Duodenum"
    ],
    "ans": "Gall bladder",
    "explanation": "The gall bladder stores bile."
  },
  {
    "q": "Which tissue is responsible for growth in the length of a plant?",
    "options": [
      "Permanent tissue",
      "Apical meristem",
      "Epidermis",
      "Cortex"
    ],
    "ans": "Apical meristem",
    "explanation": "The apical meristem drives growth in plant length."
  },
  {
    "q": "Which disease is caused by a deficiency of iodine?",
    "options": [
      "Diabetes mellitus",
      "Goitre",
      "Scurvy",
      "Beriberi"
    ],
    "ans": "Goitre",
    "explanation": "Iodine deficiency causes goitre."
  },
  {
    "q": "Which blood vessel has the thickest wall?",
    "options": [
      "Artery",
      "Vein",
      "Capillary",
      "Venule"
    ],
    "ans": "Artery",
    "explanation": "Arteries have the thickest walls among blood vessels."
  },
  {
    "q": "Which part of the eye controls the amount of light entering it?",
    "options": [
      "Cornea",
      "Lens",
      "Iris",
      "Retina"
    ],
    "ans": "Iris",
    "explanation": "The iris controls how much light enters the eye."
  },
  {
    "q": "Which kingdom includes unicellular organisms such as Amoeba and Paramecium?",
    "options": [
      "Monera",
      "Protista",
      "Fungi",
      "Plantae"
    ],
    "ans": "Protista",
    "explanation": "Protista includes unicellular organisms like Amoeba and Paramecium."
  },
  {
    "q": "The structural and functional unit of the nervous system is the:",
    "options": [
      "Nephron",
      "Axon",
      "Neuron",
      "Synapse"
    ],
    "ans": "Neuron",
    "explanation": "The neuron is the nervous system's structural and functional unit."
  },
  {
    "q": "Which enzyme converts starch into maltose?",
    "options": [
      "Amylase",
      "Pepsin",
      "Lipase",
      "Trypsin"
    ],
    "ans": "Amylase",
    "explanation": "Amylase converts starch into maltose."
  },
  {
    "q": "Which component of blood transports oxygen?",
    "options": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma"
    ],
    "ans": "Red blood cells",
    "explanation": "Red blood cells transport oxygen."
  },
  {
    "q": "Which part of the flower receives pollen grains during pollination?",
    "options": [
      "Anther",
      "Stigma",
      "Ovary",
      "Sepal"
    ],
    "ans": "Stigma",
    "explanation": "The stigma receives pollen grains during pollination."
  },
  {
    "q": "Which process is responsible for the release of energy from food in living cells?",
    "options": [
      "Digestion",
      "Excretion",
      "Respiration",
      "Translocation"
    ],
    "ans": "Respiration",
    "explanation": "Respiration releases energy from food in living cells."
  },
  {
    "q": "The bones of the vertebral column protect the:",
    "options": [
      "Heart",
      "Kidneys",
      "Spinal cord",
      "Lungs"
    ],
    "ans": "Spinal cord",
    "explanation": "The vertebral column protects the spinal cord."
  },
  {
    "q": "Which organ produces insulin in the human body?",
    "options": [
      "Liver",
      "Gall bladder",
      "Pancreas",
      "Spleen"
    ],
    "ans": "Pancreas",
    "explanation": "The pancreas produces insulin."
  },
  {
    "q": "Which of the following is an example of a monocotyledonous plant?",
    "options": [
      "Bean",
      "Groundnut",
      "Maize",
      "Mango"
    ],
    "ans": "Maize",
    "explanation": "Maize is a monocotyledonous plant."
  },
  {
    "q": "The site of protein synthesis in a cell is the:",
    "options": [
      "Mitochondrion",
      "Golgi apparatus",
      "Ribosome",
      "Vacuole"
    ],
    "ans": "Ribosome",
    "explanation": "Ribosomes are the site of protein synthesis."
  },
  {
    "q": "Which part of the human ear contains the organ of hearing?",
    "options": [
      "Semicircular canals",
      "Cochlea",
      "Auditory nerve",
      "Tympanic membrane"
    ],
    "ans": "Cochlea",
    "explanation": "The cochlea contains the organ of hearing."
  },
  {
    "q": "Which process allows water molecules to move across a selectively permeable membrane?",
    "options": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Endocytosis"
    ],
    "ans": "Osmosis",
    "explanation": "Osmosis moves water across a selectively permeable membrane."
  },
  {
    "q": "The disease caused by a deficiency of protein in children is:",
    "options": [
      "Kwashiorkor",
      "Marasmus",
      "Scurvy",
      "Rickets"
    ],
    "ans": "Kwashiorkor",
    "explanation": "Protein deficiency in children causes kwashiorkor."
  },
  {
    "q": "Which type of immunity is acquired through vaccination?",
    "options": [
      "Natural active immunity",
      "Natural passive immunity",
      "Artificial active immunity",
      "Artificial passive immunity"
    ],
    "ans": "Artificial active immunity",
    "explanation": "Vaccination confers artificial active immunity."
  },
  {
    "q": "Which organelle contains chlorophyll in plant cells?",
    "options": [
      "Chloroplast",
      "Mitochondrion",
      "Ribosome",
      "Nucleus"
    ],
    "ans": "Chloroplast",
    "explanation": "Chloroplasts contain chlorophyll in plant cells."
  },
  {
    "q": "The process by which plants respond to gravity is known as:",
    "options": [
      "Phototropism",
      "Geotropism",
      "Hydrotropism",
      "Thigmotropism"
    ],
    "ans": "Geotropism",
    "explanation": "Geotropism is a plant's growth response to gravity."
  },
  {
    "q": "Which chamber of the heart receives oxygenated blood from the lungs?",
    "options": [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle"
    ],
    "ans": "Left atrium",
    "explanation": "The left atrium receives oxygenated blood from the lungs."
  },
  {
    "q": "Which part of the human brain controls breathing and heartbeat?",
    "options": [
      "Cerebrum",
      "Cerebellum",
      "Medulla oblongata",
      "Hypothalamus"
    ],
    "ans": "Medulla oblongata",
    "explanation": "The medulla oblongata controls breathing and heartbeat."
  },
  {
    "q": "Which of the following is the site of fertilization in humans?",
    "options": [
      "Uterus",
      "Fallopian tube (Oviduct)",
      "Ovary",
      "Vagina"
    ],
    "ans": "Fallopian tube (Oviduct)",
    "explanation": "Fertilization in humans occurs in the fallopian tube."
  },
  {
    "q": "Which process involves the loss of water droplets through the margins of leaves?",
    "options": [
      "Transpiration",
      "Guttation",
      "Diffusion",
      "Osmosis"
    ],
    "ans": "Guttation",
    "explanation": "Guttation is water droplet loss through leaf margins."
  },
  {
    "q": "Which blood vessel carries deoxygenated blood from the body to the heart?",
    "options": [
      "Aorta",
      "Pulmonary vein",
      "Pulmonary artery",
      "Vena cava"
    ],
    "ans": "Vena cava",
    "explanation": "The vena cava carries deoxygenated blood to the heart."
  },
  {
    "q": "Which part of a seed develops into the shoot of a young plant?",
    "options": [
      "Radicle",
      "Plumule",
      "Cotyledon",
      "Endosperm"
    ],
    "ans": "Plumule",
    "explanation": "The plumule develops into a seedling's shoot."
  },
  {
    "q": "Which organelle is responsible for intracellular digestion?",
    "options": [
      "Ribosome",
      "Golgi apparatus",
      "Lysosome",
      "Centriole"
    ],
    "ans": "Lysosome",
    "explanation": "Lysosomes carry out intracellular digestion."
  },
  {
    "q": "Which of the following diseases is caused by a virus?",
    "options": [
      "Tuberculosis",
      "Typhoid fever",
      "Cholera",
      "Measles"
    ],
    "ans": "Measles",
    "explanation": "Measles is caused by a virus."
  },
  {
    "q": "The opening and closing of stomata are controlled by the:",
    "options": [
      "Epidermal cells",
      "Guard cells",
      "Companion cells",
      "Mesophyll cells"
    ],
    "ans": "Guard cells",
    "explanation": "Guard cells control stomatal opening and closing."
  },
  {
    "q": "Which of the following is the largest part of the alimentary canal?",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "ans": "Small intestine",
    "explanation": "The small intestine is the longest part of the alimentary canal."
  },
  {
    "q": "Which of the following organisms reproduces by budding?",
    "options": [
      "Amoeba",
      "Rhizopus",
      "Yeast",
      "Spirogyra"
    ],
    "ans": "Yeast",
    "explanation": "Yeast reproduces by budding."
  },
  {
    "q": "Which blood cells are responsible for body defense against infection?",
    "options": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma"
    ],
    "ans": "White blood cells",
    "explanation": "White blood cells defend the body against infection."
  },
  {
    "q": "Which process removes nitrogenous waste products from the body?",
    "options": [
      "Digestion",
      "Respiration",
      "Excretion",
      "Circulation"
    ],
    "ans": "Excretion",
    "explanation": "Excretion removes nitrogenous waste from the body."
  },
  {
    "q": "Which of the following is an example of a renewable natural resource?",
    "options": [
      "Coal",
      "Petroleum",
      "Forest",
      "Natural gas"
    ],
    "ans": "Forest",
    "explanation": "Forests are a renewable natural resource."
  },
  {
    "q": "Which structure connects a muscle to a bone?",
    "options": [
      "Ligament",
      "Tendon",
      "Cartilage",
      "Synovial membrane"
    ],
    "ans": "Tendon",
    "explanation": "Tendons connect muscle to bone."
  },
  {
    "q": "The main function of the red blood cells is to:",
    "options": [
      "Fight infection",
      "Clot blood",
      "Transport oxygen",
      "Produce antibodies"
    ],
    "ans": "Transport oxygen",
    "explanation": "Red blood cells mainly transport oxygen."
  },
  {
    "q": "Which part of the eye contains light-sensitive cells?",
    "options": [
      "Iris",
      "Lens",
      "Retina",
      "Cornea"
    ],
    "ans": "Retina",
    "explanation": "The retina contains light-sensitive cells."
  },
  {
    "q": "Which of the following organisms is a decomposer?",
    "options": [
      "Grasshopper",
      "Mushroom",
      "Goat",
      "Lizard"
    ],
    "ans": "Mushroom",
    "explanation": "Mushrooms (fungi) act as decomposers."
  },
  {
    "q": "Which process is responsible for the movement of water from the roots to the leaves?",
    "options": [
      "Diffusion",
      "Active transport",
      "Transpiration pull",
      "Plasmolysis"
    ],
    "ans": "Transpiration pull",
    "explanation": "Transpiration pull draws water from roots to leaves."
  },
  {
    "q": "The human heart normally has how many chambers?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "ans": "Four",
    "explanation": "The human heart has four chambers."
  },
  {
    "q": "Which of the following is the primary source of energy for living organisms?",
    "options": [
      "The Sun",
      "Wind",
      "Water",
      "Minerals"
    ],
    "ans": "The Sun",
    "explanation": "The Sun is the primary energy source for living organisms."
  },
  {
    "q": "Which part of the flower contains the ovules?",
    "options": [
      "Stigma",
      "Style",
      "Ovary",
      "Anther"
    ],
    "ans": "Ovary",
    "explanation": "The ovary contains the ovules."
  },
  {
    "q": "Which type of joint is found at the shoulder?",
    "options": [
      "Hinge joint",
      "Pivot joint",
      "Ball-and-socket joint",
      "Gliding joint"
    ],
    "ans": "Ball-and-socket joint",
    "explanation": "The shoulder is a ball-and-socket joint."
  },
  {
    "q": "Which process results in variation among offspring during sexual reproduction?",
    "options": [
      "Binary fission",
      "Budding",
      "Meiosis",
      "Mitosis"
    ],
    "ans": "Meiosis",
    "explanation": "Meiosis creates genetic variation among offspring."
  },
  {
    "q": "Which part of the nephron is mainly responsible for the reabsorption of water?",
    "options": [
      "Glomerulus",
      "Bowman's capsule",
      "Loop of Henle",
      "Renal artery"
    ],
    "ans": "Loop of Henle",
    "explanation": "The Loop of Henle reabsorbs most water in the nephron."
  },
  {
    "q": "Which of the following is regarded as the powerhouse of the cell because it produces ATP?",
    "options": [
      "Ribosome",
      "Golgi apparatus",
      "Nucleus",
      "Mitochondrion"
    ],
    "ans": "Mitochondrion",
    "explanation": "Mitochondria are the cell's powerhouse, producing ATP."
  },
  {
    "q": "The liquid portion of the cytoplasm excluding the organelles is called:",
    "options": [
      "Nucleoplasm",
      "Cytosol",
      "Protoplasm",
      "Matrix"
    ],
    "ans": "Cytosol",
    "explanation": "Cytosol is the liquid part of cytoplasm excluding organelles."
  },
  {
    "q": "Which part of the flower produces pollen grains?",
    "options": [
      "Stigma",
      "Ovary",
      "Anther",
      "Sepal"
    ],
    "ans": "Anther",
    "explanation": "The anther produces pollen grains."
  },
  {
    "q": "The functional unit of the nervous system is the:",
    "options": [
      "Nephron",
      "Osteon",
      "Neuron",
      "Alveolus"
    ],
    "ans": "Neuron",
    "explanation": "The neuron is the nervous system's functional unit."
  },
  {
    "q": "Which of the following is a polysaccharide?",
    "options": [
      "Glucose",
      "Fructose",
      "Maltose",
      "Glycogen"
    ],
    "ans": "Glycogen",
    "explanation": "Glycogen is a polysaccharide."
  },
  {
    "q": "Which chamber of the heart pumps oxygenated blood to the body?",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "ans": "Left ventricle",
    "explanation": "The left ventricle pumps oxygenated blood to the body."
  },
  {
    "q": "Which plant hormone promotes cell elongation?",
    "options": [
      "Auxin",
      "Ethylene",
      "Abscisic acid",
      "Cytokinin"
    ],
    "ans": "Auxin",
    "explanation": "Auxin is the plant hormone that promotes cell elongation."
  },
  {
    "q": "Which of these diseases is caused by a protozoan?",
    "options": [
      "Tuberculosis",
      "Malaria",
      "Cholera",
      "Tetanus"
    ],
    "ans": "Malaria",
    "explanation": "Malaria is caused by a protozoan (Plasmodium)."
  },
  {
    "q": "The process by which plants bend towards light is known as:",
    "options": [
      "Phototropism",
      "Geotropism",
      "Hydrotropism",
      "Thigmotropism"
    ],
    "ans": "Phototropism",
    "explanation": "Phototropism is plant bending towards light."
  },
  {
    "q": "Which blood component transports antibodies?",
    "options": [
      "Red blood cells",
      "Platelets",
      "Plasma",
      "Hemoglobin"
    ],
    "ans": "Plasma",
    "explanation": "Plasma transports antibodies in the blood."
  },
  {
    "q": "Which organ secretes bile?",
    "options": [
      "Liver",
      "Gall bladder",
      "Pancreas",
      "Duodenum"
    ],
    "ans": "Liver",
    "explanation": "The liver secretes bile."
  },
  {
    "q": "Which of the following is a characteristic of xylem vessels?",
    "options": [
      "Living cells at maturity",
      "Thick lignified walls",
      "Transport sugars",
      "Contain companion cells"
    ],
    "ans": "Thick lignified walls",
    "explanation": "Xylem vessels have thick, lignified walls."
  },
  {
    "q": "The genetic makeup of an organism is known as its:",
    "options": [
      "Phenotype",
      "Genotype",
      "Allele",
      "Chromosome"
    ],
    "ans": "Genotype",
    "explanation": "Genotype is an organism's genetic makeup."
  },
  {
    "q": "Which scientist proposed the theory of natural selection?",
    "options": [
      "Gregor Mendel",
      "Charles Darwin",
      "Robert Hooke",
      "Louis Pasteur"
    ],
    "ans": "Charles Darwin",
    "explanation": "Charles Darwin proposed the theory of natural selection."
  },
  {
    "q": "The site of aerobic respiration in the cell is the:",
    "options": [
      "Nucleus",
      "Cytoplasm",
      "Mitochondrion",
      "Chloroplast"
    ],
    "ans": "Mitochondrion",
    "explanation": "Aerobic respiration occurs in the mitochondrion."
  },
  {
    "q": "Which vitamin is also known as ascorbic acid?",
    "options": [
      "Vitamin A",
      "Vitamin B₁₂",
      "Vitamin C",
      "Vitamin D"
    ],
    "ans": "Vitamin C",
    "explanation": "Vitamin C is also called ascorbic acid."
  },
  {
    "q": "Which organ filters lymph?",
    "options": [
      "Liver",
      "Kidney",
      "Lymph node",
      "Pancreas"
    ],
    "ans": "Lymph node",
    "explanation": "Lymph nodes filter lymph."
  },
  {
    "q": "The opening in the diaphragm through which food passes is the:",
    "options": [
      "Glottis",
      "Trachea",
      "Esophagus",
      "Bronchus"
    ],
    "ans": "Esophagus",
    "explanation": "The esophagus passes through an opening in the diaphragm."
  },
  {
    "q": "Which part of the eye is responsible for sharp vision?",
    "options": [
      "Iris",
      "Cornea",
      "Fovea (Yellow spot)",
      "Optic nerve"
    ],
    "ans": "Fovea (Yellow spot)",
    "explanation": "The fovea provides the eye's sharpest vision."
  },
  {
    "q": "Which type of reproduction involves only one parent?",
    "options": [
      "Asexual reproduction",
      "Sexual reproduction",
      "Cross-fertilization",
      "Conjugation"
    ],
    "ans": "Asexual reproduction",
    "explanation": "Asexual reproduction involves only one parent."
  },
  {
    "q": "Which of the following organisms belongs to the phylum Annelida?",
    "options": [
      "Tapeworm",
      "Roundworm",
      "Earthworm",
      "Snail"
    ],
    "ans": "Earthworm",
    "explanation": "The earthworm belongs to phylum Annelida."
  },
  {
    "q": "Which gas is most abundant in the atmosphere?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ],
    "ans": "Nitrogen",
    "explanation": "Nitrogen is the most abundant atmospheric gas."
  },
  {
    "q": "Which organ is responsible for the production of urine?",
    "options": [
      "Bladder",
      "Kidney",
      "Ureter",
      "Urethra"
    ],
    "ans": "Kidney",
    "explanation": "The kidney produces urine."
  },
  {
    "q": "Which of the following is an example of incomplete metamorphosis?",
    "options": [
      "Butterfly",
      "Housefly",
      "Grasshopper",
      "Mosquito"
    ],
    "ans": "Grasshopper",
    "explanation": "Grasshoppers undergo incomplete metamorphosis."
  },
  {
    "q": "Which part of the alimentary canal receives bile and pancreatic juice?",
    "options": [
      "Stomach",
      "Duodenum",
      "Ileum",
      "Colon"
    ],
    "ans": "Duodenum",
    "explanation": "The duodenum receives bile and pancreatic juice."
  },
  {
    "q": "Which structure anchors a tooth to the jawbone?",
    "options": [
      "Enamel",
      "Dentine",
      "Periodontal ligament",
      "Pulp cavity"
    ],
    "ans": "Periodontal ligament",
    "explanation": "The periodontal ligament anchors a tooth to the jawbone."
  },
  {
    "q": "Each time a normal inspiration or expiration occurs, about 500cm3 of air moves in and out of the lung. This is the _____ air",
    "options": [
      "Residual",
      "Tidal",
      "Lung capacity",
      "Vital capacity"
    ],
    "ans": "Tidal",
    "explanation": "Tidal air is the volume of air inhaled and exhaled during each normal resting breath, about 500cm3."
  },
  {
    "q": "The only living cells in the xylem are the",
    "options": [
      "Collenchyma",
      "Tracheids",
      "Parenchyma",
      "None of the above"
    ],
    "ans": "Parenchyma",
    "explanation": "Of the four xylem elements (tracheids, vessels, xylem parenchyma, xylem fibres), only the xylem parenchyma cells are living."
  },
  {
    "q": "Presbyopia is associated with",
    "options": [
      "Aging",
      "Nutrition",
      "Neoplasm",
      "All of the above"
    ],
    "ans": "Aging",
    "explanation": "Presbyopia is an age-related form of farsightedness caused by the lens losing elasticity."
  },
  {
    "q": "One of these is wrong about the phylum Porifera",
    "options": [
      "They achieve tissue level of organization",
      "They have skeletal material called spicules",
      "They reproduce asexually by budding",
      "They reproduce sexually by fragmentation"
    ],
    "ans": "They achieve tissue level of organization",
    "explanation": "Porifera (sponges) are at the cellular level of organization, not the tissue level, so this statement is incorrect."
  },
  {
    "q": "The term Archaea belongs to which hierarchical classification",
    "options": [
      "Kingdom",
      "Species",
      "Domain",
      "Division"
    ],
    "ans": "Domain",
    "explanation": "Domain is the highest taxonomic rank, split into Eubacteria, Archaea, and Eukarya."
  },
  {
    "q": "Which of the following does not form the nucleolus",
    "options": [
      "Protein",
      "DNA",
      "RNA",
      "Ribosomes"
    ],
    "ans": "Ribosomes",
    "explanation": "The nucleolus is made of DNA, RNA, and protein, and it is the site where ribosomes are produced — not the other way round."
  },
  {
    "q": "Which of these organisms belongs to the second largest phylum in the animal kingdom",
    "options": [
      "Squid",
      "Insects",
      "Earthworm",
      "Flatworms"
    ],
    "ans": "Squid",
    "explanation": "Mollusca is the second largest animal phylum after Arthropoda, and the squid is a mollusc."
  },
  {
    "q": "Bacteriophage is a _____",
    "options": [
      "Bacteria",
      "Virus",
      "Parasite",
      "Phagus"
    ],
    "ans": "Virus",
    "explanation": "A bacteriophage is a virus that infects and replicates within bacteria."
  },
  {
    "q": "Dryopteris is a",
    "options": [
      "Moss",
      "Fungi",
      "Virus",
      "Ferns"
    ],
    "ans": "Ferns",
    "explanation": "Dryopteris (wood fern) is a genus of ferns."
  },
  {
    "q": "Axile placentation can be found in",
    "options": [
      "Coconut",
      "Tomato",
      "Water leaf",
      "All the above"
    ],
    "ans": "Tomato",
    "explanation": "Tomato exhibits axile placentation, where ovules are attached to a central axis."
  },
  {
    "q": "One of the most important features used in distinguishing a dicot root from a monocot root is",
    "options": [
      "Piliferous layer",
      "Pith",
      "Cortex",
      "Parathyroid"
    ],
    "ans": "Pith",
    "explanation": "A pith is present at the centre of a monocot root but is absent (or very small) in a dicot root, which instead has a solid vascular core."
  },
  {
    "q": "The prothallus in ferns",
    "options": [
      "Is the dominant stage in the life cycle of the generation",
      "Is the gametophyte generation",
      "Is found on the top of the fern leaves",
      "Is covered by an indusium"
    ],
    "ans": "Is the gametophyte generation",
    "explanation": "The prothallus is the small, flat, heart-shaped gametophyte generation of a fern."
  },
  {
    "q": "Complete flower is one that",
    "options": [
      "Has four organs attached to the floral stalk by a receptacle",
      "Has five organs attached to the floral stalk by a receptacle",
      "Has its three organs above the ovary",
      "None of the above"
    ],
    "ans": "Has four organs attached to the floral stalk by a receptacle",
    "explanation": "A complete flower has all four floral parts — sepals, petals, stamens, and pistils — attached to the receptacle."
  },
  {
    "q": "Which type of placentation is evident in the pawpaw?",
    "options": [
      "Parietal",
      "Basal",
      "Marginal",
      "None of the above"
    ],
    "ans": "Parietal",
    "explanation": "Pawpaw and cucumber show parietal placentation, while legumes like peas and beans show marginal placentation."
  },
  {
    "q": "A flower that can be cut longitudinally into 2 equal halves from any plane is said to be",
    "options": [
      "Complete",
      "Regular",
      "Radially symmetrical",
      "Bilaterally symmetrical"
    ],
    "ans": "Radially symmetrical",
    "explanation": "Radial symmetry allows a flower to be divided into equal halves along any plane, unlike bilateral symmetry which allows only one such plane."
  },
  {
    "q": "The cochlear duct of the cochlea is filled with",
    "options": [
      "Perilymph",
      "Endolymph",
      "Water",
      "Sap"
    ],
    "ans": "Endolymph",
    "explanation": "The cochlear duct lies between the scala vestibuli and scala tympani and is filled with endolymph."
  },
  {
    "q": "Pick out the wrong option",
    "options": [
      "Stolon is a type of hyphae",
      "Sporangiophore is a type of hyphae",
      "Rhizoid is a type of hyphae",
      "None"
    ],
    "ans": "Stolon is a type of hyphae",
    "explanation": "Stolon, sporangiophore, and rhizoid are all specialized hyphae types found in fungi such as Rhizopus."
  },
  {
    "q": "Perilymph surrounds",
    "options": [
      "Cochlear duct",
      "Outer ear",
      "Bony labyrinth",
      "Membranous labyrinth"
    ],
    "ans": "Membranous labyrinth",
    "explanation": "Perilymph is found within the bony labyrinth and surrounds the membranous labyrinth."
  },
  {
    "q": "The ability of an organism to live successfully in an environment is known as",
    "options": [
      "Succession",
      "Resistance",
      "Competition",
      "Adaptation"
    ],
    "ans": "Adaptation",
    "explanation": "Adaptation is the ability of an organism to adjust and survive successfully in its environment."
  },
  {
    "q": "Sporangiophores bear:",
    "options": [
      "Sporophytes",
      "Sporangia",
      "Spicules",
      "None of the above"
    ],
    "ans": "Sporangia",
    "explanation": "Sporangiophores are specialized fungal hyphae that bear the sporangia, which produce spores."
  },
  {
    "q": "Competition involves:",
    "options": [
      "A struggle for the abundant resources in the environment",
      "A struggle between different species for scarce resources",
      "A struggle between different organisms for scarce resources",
      "A struggle between the same species for scarce resources"
    ],
    "ans": "A struggle between different organisms for scarce resources",
    "explanation": "Competition is broadly a struggle between organisms — of the same or different species — for limited (scarce) resources."
  },
  {
    "q": "Regulation of internal environment can simply be called",
    "options": [
      "Haemostasis",
      "Metabolism",
      "Hormonal regulation",
      "None of the above"
    ],
    "ans": "None of the above",
    "explanation": "The regulation of the internal environment is called homeostasis, which is not haemostasis (the process that prevents excessive bleeding) — so none of the listed options is correct."
  },
  {
    "q": "Which of the following pregnant mothers will have to undergo treatment for their baby to be born safe?",
    "options": [
      "A rhesus positive mother with rhesus negative baby",
      "A rhesus negative mother with rhesus negative baby",
      "A rhesus positive mother with rhesus positive baby",
      "None of the above"
    ],
    "ans": "None of the above",
    "explanation": "Treatment is needed when a rhesus-negative mother carries a rhesus-positive baby, a combination not listed among the given options, so none of the above applies."
  },
  {
    "q": "The part of the brain responsible for heart beat",
    "options": [
      "Medulla",
      "Spinal cord",
      "Cerebellum",
      "Pons"
    ],
    "ans": "Medulla",
    "explanation": "The medulla oblongata regulates involuntary functions such as heartbeat and breathing."
  },
  {
    "q": "The center of intelligence and reasoning in humans is what part of the brain?",
    "options": [
      "Spinal cord",
      "Grey matter",
      "Cerebrum",
      "Cerebellum"
    ],
    "ans": "Cerebrum",
    "explanation": "The cerebrum (cerebral cortex) is regarded as the centre of intelligence and reasoning."
  },
  {
    "q": "The Rhesus factor of blood was first identified in",
    "options": [
      "Human females",
      "Human males",
      "Monkeys",
      "Chimpanzees"
    ],
    "ans": "Monkeys",
    "explanation": "The Rhesus (Rh) factor was first identified in Rhesus monkeys, from which it takes its name."
  },
  {
    "q": "Which of the following has no vaccine?",
    "options": [
      "COVID-19",
      "Tuberculosis",
      "Malaria",
      "None of the above"
    ],
    "ans": "Malaria",
    "explanation": "Malaria still has no widely available conventional vaccine, largely due to the adaptability of the parasite."
  },
  {
    "q": "Which of these explains a community",
    "options": [
      "Group of organisms found in several habitats",
      "Group of populations found in several habitats",
      "Group of many populations of different species living in the same habitat",
      "Group of populations of the same species living in the same habitat"
    ],
    "ans": "Group of many populations of different species living in the same habitat",
    "explanation": "A community consists of populations of different species that live together in the same habitat."
  },
  {
    "q": "The number of hydrogen bonds between Guanine and Cytosine, and between Adenine and Thymine in DNA are:",
    "options": [
      "1, 2",
      "3, 2",
      "3, 1",
      "2, 1"
    ],
    "ans": "3, 2",
    "explanation": "Guanine pairs with Cytosine via 3 hydrogen bonds, while Adenine pairs with Thymine via 2 hydrogen bonds."
  },
  {
    "q": "Which of these is true as regards the internal structure of a plant",
    "options": [
      "Phloem is the innermost tissue in the internal structure of the plant",
      "Sieve tube is the living part of the phloem",
      "Pericycle is not capable of cell division",
      "Xylem is arranged in a star-shaped pattern in a dicot root"
    ],
    "ans": "Xylem is arranged in a star-shaped pattern in a dicot root",
    "explanation": "In a dicot root, the xylem is arranged in a distinctive star (or X) shaped pattern at the centre."
  },
  {
    "q": "What is the vital capacity of our lungs",
    "options": [
      "Inspiratory reserve volume plus functional residual capacity",
      "Total lung capacity minus expiratory reserve volume",
      "Inspiratory reserve volume plus expiratory reserve volume",
      "Total lung capacity minus residual volume"
    ],
    "ans": "Total lung capacity minus residual volume",
    "explanation": "Vital capacity is the total lung capacity minus the residual volume — the maximum amount of air that can be exhaled after maximal inhalation."
  },],
  "PUTME_ENGLISH": [
  {
    "q": "Which of the following is true about butterflies and moths?",
    "options": [
      "They belong to different orders",
      "They are both Lepidoptera",
      "Butterflies are insects while moths are not",
      "Butterflies fly faster than other Lepidoptera"
    ],
    "ans": "They are both Lepidoptera",
    "explanation": "Butterflies and moths both belong to the insect order Lepidoptera."
  },
  {
    "q": "One of his greatest achievements ________ the restoration of order and stability to the company.",
    "options": [
      "was",
      "were",
      "have been",
      "Are"
    ],
    "ans": "was",
    "explanation": "'One' is the singular subject, taking the singular verb 'was'."
  },
  {
    "q": "If I had heard this earlier, I ________ given him the job.",
    "options": [
      "would not have",
      "would have not",
      "will not have",
      "will have not"
    ],
    "ans": "would not have",
    "explanation": "Third conditional needs 'would not have' + past participle, in that word order."
  },
  {
    "q": "Mr. Smith had worked here before leaving for the UK ________?",
    "options": [
      "isn’t it",
      "wasn’t it",
      "didn’t he",
      "hadn’t he"
    ],
    "ans": "hadn’t he",
    "explanation": "Past perfect statement 'had worked' takes the tag 'hadn't he'."
  },
  {
    "q": "Who saw the accused ________ the purse from the complainant’s handbag?",
    "options": [
      "take",
      "took",
      "taken",
      "takes"
    ],
    "ans": "take",
    "explanation": "'Saw' + object + bare infinitive: 'saw the accused take'."
  },
  {
    "q": "________ bring a letter of authority before they can collect the money?",
    "options": [
      "needs he",
      "need he",
      "he needs",
      "does he need"
    ],
    "ans": "need he",
    "explanation": "Question form with modal 'need': 'need he bring...'"
  },
  {
    "q": "Surely, he ________ come in person if he doesn’t want to!",
    "options": [
      "need not",
      "does not need",
      "did not need",
      "need to"
    ],
    "ans": "need not",
    "explanation": "'Need not' expresses lack of obligation."
  },
  {
    "q": "Fortunately, my father ________ the scene before the explosion occurred.",
    "options": [
      "has just left",
      "just left",
      "had just left",
      "is just leaving"
    ],
    "ans": "had just left",
    "explanation": "Past perfect 'had just left' shows an action completed before another past event."
  },
  {
    "q": "The rainstorm did a lot of ________ to the houses and trees in the area.",
    "options": [
      "damages",
      "damaging",
      "damage",
      "havocs"
    ],
    "ans": "damage",
    "explanation": "'Damage' is uncountable in this sense (a lot of damage)."
  },
  {
    "q": "You are not allowed to carry ________ on this flight.",
    "options": [
      "much luggage",
      "many luggages",
      "few luggages",
      "more luggage"
    ],
    "ans": "more luggage",
    "explanation": "'More luggage' fits the context of an airline carrying restriction."
  },
  {
    "q": "It is no longer easy for graduates to secure ________.",
    "options": [
      "employment",
      "many employments",
      "employments",
      "an employment"
    ],
    "ans": "employment",
    "explanation": "'Employment' is uncountable and takes no article here."
  },
  {
    "q": "If you would listen, I could give you ________.",
    "options": [
      "a valuable advice",
      "some valuable advices",
      "valuable advise",
      "valuable advice"
    ],
    "ans": "valuable advice",
    "explanation": "'Advice' is uncountable — 'valuable advice', no article, no plural."
  },
  {
    "q": "That load is ________ heavy for a child of his age to carry.",
    "options": [
      "very",
      "most",
      "much",
      "too"
    ],
    "ans": "too",
    "explanation": "'Too heavy' expresses excess beyond capability."
  },
  {
    "q": "Tunji was ________ hungry that he ate the food meant for his three sisters.",
    "options": [
      "so",
      "extremely",
      "very",
      "quite"
    ],
    "ans": "so",
    "explanation": "'So...that' is the correct correlative structure for this result clause."
  },
  {
    "q": "On my way to the post office, I ________ my old classmate.",
    "options": [
      "stop to greet",
      "stopped to greet",
      "had stopped greeting",
      "stopped greeting"
    ],
    "ans": "stopped to greet",
    "explanation": "'Stopped to greet' means paused in order to greet (purpose)."
  },
  {
    "q": "The celebrations were rounded ________ with a novelty match.",
    "options": [
      "off",
      "up",
      "down",
      "out"
    ],
    "ans": "off",
    "explanation": "'Rounded off' means concluded/completed."
  },
  {
    "q": "As fresh fruits were scarce in the dry season, we had to ________ tinned fruits.",
    "options": [
      "make do with",
      "make up for",
      "take out",
      "take up with"
    ],
    "ans": "make do with",
    "explanation": "'Make do with' means to manage using a substitute."
  },
  {
    "q": "They are ________ new employees at the headquarters of the factory.",
    "options": [
      "Taking up",
      "Taking after",
      "Taking on",
      "Taking over"
    ],
    "ans": "Taking on",
    "explanation": "'Taking on' new employees means hiring them."
  },
  {
    "q": "We look forward to ________ ourselves at the party.",
    "options": [
      "enjoy",
      "have enjoyed",
      "be enjoying",
      "enjoying"
    ],
    "ans": "enjoying",
    "explanation": "'Look forward to' is followed by a gerund: 'enjoying'."
  },
  {
    "q": "Sherifat did not behave ________ her parents’ wishes.",
    "options": [
      "with accordance to",
      "in accordance about",
      "with accordance in",
      "in accordance with"
    ],
    "ans": "in accordance with",
    "explanation": "'In accordance with' is the correct idiomatic phrase."
  },
  {
    "q": "Are you keen ________ joining me in this venture?",
    "options": [
      "at",
      "in",
      "on",
      "about"
    ],
    "ans": "on",
    "explanation": "'Keen on' is the correct preposition collocation."
  },
  {
    "q": "Do you notice John and Comfort glancing at ________?",
    "options": [
      "themselves",
      "the other",
      "each other",
      "their selves"
    ],
    "ans": "each other",
    "explanation": "'Each other' is used for two people looking at one another."
  },
  {
    "q": "The corrupt bank manager was arrested and convicted ________.",
    "options": [
      "on the long run",
      "at the long run",
      "in the long run",
      "after the long run"
    ],
    "ans": "in the long run",
    "explanation": "'In the long run' means eventually/ultimately."
  },
  {
    "q": "I cannot travel in an open car because I am allergic ________ dust.",
    "options": [
      "with",
      "to",
      "from",
      "by"
    ],
    "ans": "to",
    "explanation": "'Allergic to' is the correct preposition."
  },
  {
    "q": "If you keep trying, you’ll succeed ________ the end.",
    "options": [
      "by",
      "at",
      "with",
      "in"
    ],
    "ans": "in",
    "explanation": "'Succeed in the end' is the correct idiomatic phrase."
  },
  {
    "q": "For our Sunday lunch, Mother always cooked a ________.",
    "options": [
      "large pot of thick, spicy groundnut soup",
      "large, think, spicy pot to groundnut soup",
      "large, spicy, think groundnut put of soup",
      "large, spicy pot of thick groundnut soup"
    ],
    "ans": "large pot of thick, spicy groundnut soup",
    "explanation": "Correct adjective order and phrasing: 'large pot of thick, spicy groundnut soup'."
  },
  {
    "q": "Don’t believe all ________ he has told you.",
    "options": [
      "what",
      "which",
      "that",
      "there"
    ],
    "ans": "that",
    "explanation": "'All that' is the correct relative construction."
  },
  {
    "q": "He succeeded ________ the odds he faced.",
    "options": [
      "after",
      "despite",
      "even on",
      "in addition to"
    ],
    "ans": "despite",
    "explanation": "'Despite the odds' is the correct idiomatic use."
  },
  {
    "q": "Please let me have ________ salt in my soup.",
    "options": [
      "a little",
      "few",
      "a small",
      "a few  Emphatic Stress"
    ],
    "ans": "a little",
    "explanation": "'A little' is used with uncountable nouns like salt."
  },
  {
    "q": "MARY loves brown shoes. Which question does this answer?",
    "options": [
      "What colour of shoes does Mary love?",
      "Does MARY hate brown shoes?",
      "Who loves brown shoes?",
      "Does MARY love brown gowns?"
    ],
    "ans": "Who loves brown shoes?",
    "explanation": "Emphasis on MARY calls for 'Who loves brown shoes?'"
  },
  {
    "q": "It rained ALL day yesterday. Which question does this answer?",
    "options": [
      "For how long did it rain yesterday?",
      "When did it rain all day?",
      "Was it dry all day yesterday?",
      "Did it rain all day last week?"
    ],
    "ans": "For how long did it rain yesterday?",
    "explanation": "Emphasis on ALL day calls for a duration question."
  },
  {
    "q": "The ROBBERS attacked the bus at night. Which question does this answer?",
    "options": [
      "Did the policemen attack the bus?",
      "Did the robbers attack the train?",
      "Where did the robbers attack the bus?",
      "Did the robbers attack the bus during the day?"
    ],
    "ans": "Where did the robbers attack the bus?",
    "explanation": "The only well-formed WH-question consistent with the sentence's facts."
  },
  {
    "q": "The three boys arrived by AIR. Which question does this answer?",
    "options": [
      "Did the three boys leave by air?",
      "How did the three boys arrive?",
      "How many boys arrived by air?",
      "Did the three girls arrive by air?"
    ],
    "ans": "How did the three boys arrive?",
    "explanation": "Emphasis on AIR calls for 'How did they arrive?'"
  },
  {
    "q": "Nigeria won the Africa Cup FOOTBALL competition. Which question does this answer?",
    "options": [
      "Did Cameroon win the African cup football competition?",
      "Did Nigeria win the African cup handball competition?",
      "Did Nigeria win the World cup football competition?",
      "Did Nigeria lose the African cup football competition?  Phonetics / Oral English"
    ],
    "ans": "Did Nigeria win the African cup handball competition?",
    "explanation": "Emphasis on FOOTBALL is tested by contrasting it with handball."
  },
  {
    "q": "Which word contains the sound /u/?",
    "options": [
      "Pool",
      "Look",
      "Flood",
      "crude"
    ],
    "ans": "Pool",
    "explanation": "'Pool' contains the long vowel sound /u:/."
  },
  {
    "q": "Which word contains the sound /l/?",
    "options": [
      "English",
      "Leave",
      "Case",
      "kept"
    ],
    "ans": "Leave",
    "explanation": "'Leave' begins with the /l/ sound."
  },
  {
    "q": "Which word contains the sound /ʊ/?",
    "options": [
      "Hot",
      "Blood",
      "Lurk",
      "verse"
    ],
    "ans": "Blood",
    "explanation": "Best match among the given options for this vowel sound."
  },
  {
    "q": "Which word contains the sound /j/?",
    "options": [
      "Jam",
      "George",
      "Gauge",
      "yam"
    ],
    "ans": "yam",
    "explanation": "'Yam' begins with the /j/ (y) sound."
  },
  {
    "q": "Which word contains the sound /z/?",
    "options": [
      "insist",
      "resign",
      "loose",
      "bats"
    ],
    "ans": "resign",
    "explanation": "'Resign' is pronounced with a /z/ sound (re-zine)."
  },
  {
    "q": "“To put up with” means “to tolerate”. What type of verb is that?",
    "options": [
      "Transitive verb",
      "Intransitive verb",
      "Auxiliary verb",
      "Phrasal verb"
    ],
    "ans": "Phrasal verb",
    "explanation": "'Put up with' is a phrasal verb."
  },
  {
    "q": "“Wily” means:",
    "options": [
      "Slow and sleepy",
      "Sly or cunning",
      "Kind",
      "Angry"
    ],
    "ans": "Sly or cunning",
    "explanation": "'Wily' means sly or cunning."
  },
  {
    "q": "Which is NOT a difference between auxiliary verb and modal verb?",
    "options": [
      "Auxiliaries form verb phrases",
      "Modals show possibility, necessity, or obligation",
      "Will/Have are auxiliaries, can/may are modals",
      "Both only appear in present tense"
    ],
    "ans": "Both only appear in present tense",
    "explanation": "Auxiliaries and modals both appear across tenses, not only present — so this statement is false, making it 'not a difference'."
  },
  {
    "q": "In English, numbers are limited to:",
    "options": [
      "Whole and decimal",
      "Binary and hexadecimal",
      "Cardinal and ordinal",
      "Roman and Arabic  Lexis & Structure"
    ],
    "ans": "Cardinal and ordinal",
    "explanation": "English numbers are cardinal (one, two) and ordinal (first, second)."
  },
  {
    "q": "The passive form of “The lecturer delivered the lecture well” is:",
    "options": [
      "The lecture is being delivered well",
      "The lecture delivers well",
      "The lecture was delivered well by the lecturer",
      "The lecturer was delivered well by the lecture"
    ],
    "ans": "The lecture was delivered well by the lecturer",
    "explanation": "Passive: 'The lecture was delivered well by the lecturer.'"
  },
  {
    "q": "The transfer of pollen grain from the anther to the stigma of the same plant is:",
    "options": [
      "Cross-pollination",
      "Self-pollination (Autogamy)",
      "Cleistogamy",
      "Xenogamy"
    ],
    "ans": "Self-pollination (Autogamy)",
    "explanation": "Self-pollination (autogamy) transfers pollen within the same plant."
  },
  {
    "q": "Which of the following is the correct spelling?",
    "options": [
      "accomodation",
      "accommodation",
      "acommodation",
      "accomodation"
    ],
    "ans": "accommodation",
    "explanation": "'Accommodation' is the correct spelling (double c, double m)."
  },
  {
    "q": "The antonym of “diligent” is:",
    "options": [
      "hardworking",
      "lazy",
      "careful",
      "honest"
    ],
    "ans": "lazy",
    "explanation": "'Lazy' is the antonym of 'diligent'."
  },
  {
    "q": "He was accused of ________ the funds of the company.",
    "options": [
      "embezzling",
      "stealing",
      "taking",
      "removing"
    ],
    "ans": "embezzling",
    "explanation": "'Embezzling' precisely matches misappropriating company funds."
  },
  {
    "q": "Neither the teacher nor the students ________ present at the meeting.",
    "options": [
      "was",
      "were",
      "is",
      "has been"
    ],
    "ans": "were",
    "explanation": "With 'neither...nor', the verb agrees with the nearer subject ('students', plural)."
  },
  {
    "q": "The synonym of “meticulous” is:",
    "options": [
      "careless",
      "careful",
      "fast",
      "slow"
    ],
    "ans": "careful",
    "explanation": "'Careful' is closest in meaning to 'meticulous'."
  },
  {
    "q": "If it rains tomorrow, we ________ the match.",
    "options": [
      "cancel",
      "would cancel",
      "will cancel",
      "would have cancelled"
    ],
    "ans": "will cancel",
    "explanation": "First conditional: 'If it rains, we will cancel.'"
  },
  {
    "q": "The girl ________ is my sister.",
    "options": [
      "who you saw her",
      "whom you saw",
      "whose you saw",
      "who you saw"
    ],
    "ans": "whom you saw",
    "explanation": "'Whom you saw' is the correct object relative pronoun form."
  },
  {
    "q": "He is the boy ________ I gave the book.",
    "options": [
      "to whom",
      "whom",
      "who",
      "whose"
    ],
    "ans": "to whom",
    "explanation": "'To whom I gave the book' is the correct formal structure."
  },
  {
    "q": "The committee ________ its report next week.",
    "options": [
      "will submit",
      "submits",
      "submitted",
      "is submitting"
    ],
    "ans": "will submit",
    "explanation": "Future action: 'will submit'."
  },
  {
    "q": "One of the boys ________ absent yesterday.",
    "options": [
      "was",
      "were",
      "are",
      "have been"
    ],
    "ans": "was",
    "explanation": "'One' is singular, taking 'was'."
  },
  {
    "q": "My brother is good ________ mathematics.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "ans": "at",
    "explanation": "'Good at' is the correct preposition."
  },
  {
    "q": "She is afraid ________ dogs.",
    "options": [
      "from",
      "of",
      "with",
      "by"
    ],
    "ans": "of",
    "explanation": "'Afraid of' is the correct preposition."
  },
  {
    "q": "The teacher said that the earth ________ round.",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "ans": "is",
    "explanation": "Universal truths often keep present tense even in reported speech."
  },
  {
    "q": "Had I known, I ________ helped him.",
    "options": [
      "would",
      "will",
      "would have",
      "shall"
    ],
    "ans": "would have",
    "explanation": "Third conditional: 'Had I known, I would have helped.'"
  },
  {
    "q": "The man ________ car was stolen is my neighbour.",
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "ans": "whose",
    "explanation": "'Whose car' shows possession."
  },
  {
    "q": "We ________ the work before he arrived.",
    "options": [
      "have finished",
      "had finished",
      "finish",
      "finished"
    ],
    "ans": "had finished",
    "explanation": "Past perfect for an action completed before another past action."
  },
  {
    "q": "This is the house ________ Jack built.",
    "options": [
      "which",
      "who",
      "where",
      "whom"
    ],
    "ans": "which",
    "explanation": "'Which' refers to 'the house' (a thing)."
  },
  {
    "q": "He ran as fast as he ________.",
    "options": [
      "can",
      "could",
      "will",
      "may"
    ],
    "ans": "could",
    "explanation": "Past tense 'could' matches 'ran' (past)."
  },
  {
    "q": "The news ________ good.",
    "options": [
      "are",
      "were",
      "is",
      "have been"
    ],
    "ans": "is",
    "explanation": "'News' is grammatically singular/uncountable."
  },
  {
    "q": "Choose the word that is most nearly opposite in meaning to “hostile”:",
    "options": [
      "friendly",
      "angry",
      "cruel",
      "violent"
    ],
    "ans": "friendly",
    "explanation": "'Friendly' is the opposite of 'hostile'."
  },
  {
    "q": "The word “ubiquitous” means:",
    "options": [
      "rare",
      "present everywhere",
      "hidden",
      "dangerous"
    ],
    "ans": "present everywhere",
    "explanation": "'Ubiquitous' means present everywhere."
  },
  {
    "q": "Identify the odd one out:",
    "options": [
      "beautiful",
      "pretty",
      "handsome",
      "ugly"
    ],
    "ans": "ugly",
    "explanation": "'Ugly' is the odd one out — the others are all synonyms for attractive."
  },
  {
    "q": "The government ________ measures to curb inflation.",
    "options": [
      "have taken",
      "has taken",
      "is taken",
      "were taken"
    ],
    "ans": "has taken",
    "explanation": "Collective 'government' commonly takes singular 'has' in this context."
  },
  {
    "q": "She prefers tea ________ coffee.",
    "options": [
      "than",
      "from",
      "to",
      "over"
    ],
    "ans": "to",
    "explanation": "'Prefer X to Y' is the standard structure."
  },
  {
    "q": "The boy was accused of ________ a lie.",
    "options": [
      "telling",
      "saying",
      "speaking",
      "talking"
    ],
    "ans": "telling",
    "explanation": "'Telling a lie' is the standard collocation."
  },
  {
    "q": "We should ________ the poor.",
    "options": [
      "help",
      "to help",
      "helped",
      "helping"
    ],
    "ans": "help",
    "explanation": "Modal 'should' takes the bare infinitive: 'should help'."
  },
  {
    "q": "The principal as well as the teachers ________ absent.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "ans": "is",
    "explanation": "'As well as' doesn't pluralize the subject; 'principal' stays singular."
  },
  {
    "q": "He is one of those who ________ always late.",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "ans": "are",
    "explanation": "'Those who' takes a plural verb."
  },
  {
    "q": "The book ________ on the table.",
    "options": [
      "is lying",
      "is laying",
      "lies",
      "lays"
    ],
    "ans": "is lying",
    "explanation": "'Lie' (intransitive, to rest) fits 'the book is lying on the table'."
  },
  {
    "q": "Neither of the two boys ________ responsible.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "ans": "is",
    "explanation": "'Neither' is grammatically singular."
  },
  {
    "q": "The police ________ the thief yesterday.",
    "options": [
      "arrest",
      "arrested",
      "have arrested",
      "had arrested"
    ],
    "ans": "arrested",
    "explanation": "Simple past: 'arrested'."
  },
  {
    "q": "I wish I ________ a car.",
    "options": [
      "have",
      "had",
      "has",
      "would have"
    ],
    "ans": "had",
    "explanation": "Hypothetical wish uses past tense: 'I wish I had a car.'"
  },
  {
    "q": "He behaved as if he ________ the owner.",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "ans": "were",
    "explanation": "Subjunctive 'were' after 'as if'."
  },
  {
    "q": "The child ________ by the dog.",
    "options": [
      "was bitten",
      "bit",
      "has bitten",
      "had bit"
    ],
    "ans": "was bitten",
    "explanation": "Passive voice: 'was bitten'."
  },
  {
    "q": "Choose the correctly spelt word:",
    "options": [
      "recieve",
      "receive",
      "recive",
      "receve"
    ],
    "ans": "receive",
    "explanation": "'Receive' is the correct spelling."
  },
  {
    "q": "The opposite of “generous” is:",
    "options": [
      "kind",
      "stingy",
      "rich",
      "poor"
    ],
    "ans": "stingy",
    "explanation": "'Stingy' is the opposite of 'generous'."
  },
  {
    "q": "He died ________ cancer.",
    "options": [
      "of",
      "from",
      "with",
      "by"
    ],
    "ans": "of",
    "explanation": "'Died of' an illness/disease is the standard collocation."
  },
  {
    "q": "The man ________ I spoke to is my uncle.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "ans": "whom",
    "explanation": "'Whom' is the object of 'spoke to'."
  },
  {
    "q": "She sings ________.",
    "options": [
      "good",
      "well",
      "better",
      "best"
    ],
    "ans": "well",
    "explanation": "'Well' is the adverb form (sings well)."
  },
  {
    "q": "This house belongs to ________.",
    "options": [
      "me",
      "mine",
      "my",
      "I"
    ],
    "ans": "me",
    "explanation": "Object pronoun 'me' follows the preposition 'to'."
  },
  {
    "q": "We have been friends ________ childhood.",
    "options": [
      "since",
      "from",
      "for",
      "at"
    ],
    "ans": "since",
    "explanation": "'Since childhood' marks a starting point in time."
  },
  {
    "q": "The train ________ before we reached the station.",
    "options": [
      "left",
      "had left",
      "has left",
      "was leaving"
    ],
    "ans": "had left",
    "explanation": "Past perfect for an action before another past action."
  },
  {
    "q": "He is fond ________ playing football.",
    "options": [
      "of",
      "with",
      "in",
      "at"
    ],
    "ans": "of",
    "explanation": "'Fond of' is the correct preposition."
  },
  {
    "q": "The jury ________ its verdict.",
    "options": [
      "has given",
      "have given",
      "give",
      "gave"
    ],
    "ans": "gave",
    "explanation": "Simple past 'gave' fits the collective 'jury' acting as one unit."
  },
  {
    "q": "The synonym of “arduous” is:",
    "options": [
      "easy",
      "difficult",
      "simple",
      "smooth"
    ],
    "ans": "difficult",
    "explanation": "'Difficult' is closest in meaning to 'arduous'."
  },
  {
    "q": "The antonym of “obsolete” is:",
    "options": [
      "modern",
      "ancient",
      "old",
      "outdated"
    ],
    "ans": "modern",
    "explanation": "'Modern' is the opposite of 'obsolete'."
  },
  {
    "q": "She ________ to the market every day.",
    "options": [
      "go",
      "goes",
      "went",
      "gone"
    ],
    "ans": "goes",
    "explanation": "Present simple, third person: 'goes'."
  },
  {
    "q": "If I ________ you, I would apologize.",
    "options": [
      "am",
      "was",
      "were",
      "have been"
    ],
    "ans": "were",
    "explanation": "Subjunctive 'were' in hypothetical conditionals."
  },
  {
    "q": "The baby was ________ by the nurse.",
    "options": [
      "looked after",
      "looked for",
      "looked up",
      "looked on"
    ],
    "ans": "looked after",
    "explanation": "'Looked after' means cared for."
  },
  {
    "q": "He is suffering ________ malaria.",
    "options": [
      "with",
      "from",
      "of",
      "by"
    ],
    "ans": "from",
    "explanation": "'Suffering from' an illness is the standard collocation."
  },
  {
    "q": "The book is ________ the shelf.",
    "options": [
      "in",
      "on",
      "at",
      "over"
    ],
    "ans": "on",
    "explanation": "'On the shelf' is the correct preposition."
  },
  {
    "q": "We ________ the movie yesterday.",
    "options": [
      "watch",
      "watched",
      "have watched",
      "had watched"
    ],
    "ans": "watched",
    "explanation": "Simple past: 'watched'."
  },
  {
    "q": "This is the reason ________ I left early.",
    "options": [
      "why",
      "that",
      "which",
      "where"
    ],
    "ans": "why",
    "explanation": "'The reason why' is the standard relative structure."
  },
  {
    "q": "He speaks English as if he ________ a native speaker.",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "ans": "were",
    "explanation": "Subjunctive 'were' after 'as if'."
  },
  {
    "q": "The teacher asked the students ________ quiet.",
    "options": [
      "to keep",
      "keep",
      "kept",
      "keeping"
    ],
    "ans": "to keep",
    "explanation": "'Asked...to keep' uses the infinitive after 'ask someone'."
  },
  {
    "q": "Neither John nor his brothers ________ coming.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "ans": "are",
    "explanation": "With 'neither...nor', the verb agrees with the nearer subject ('brothers')."
  },
  {
    "q": "The cat jumped ________ the table.",
    "options": [
      "on",
      "over",
      "under",
      "into"
    ],
    "ans": "over",
    "explanation": "'Jumped over' the table."
  },
  {
    "q": "I have lived here ________ ten years.",
    "options": [
      "since",
      "for",
      "from",
      "at"
    ],
    "ans": "for",
    "explanation": "'For' + duration ('for ten years')."
  },
  {
    "q": "The boy ________ the ball.",
    "options": [
      "throw",
      "threw",
      "thrown",
      "throwing"
    ],
    "ans": "threw",
    "explanation": "Simple past: 'threw'."
  },
  {
    "q": "She is the girl ________ won the prize.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "ans": "who",
    "explanation": "'Who' refers to 'the girl' (a person, subject)."
  },
  {
    "q": "They have been working ________ morning.",
    "options": [
      "since",
      "for",
      "from",
      "at"
    ],
    "ans": "since",
    "explanation": "'Since morning' marks a starting point."
  },
  {
    "q": "The news ________ surprising.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "ans": "is",
    "explanation": "'News' is grammatically singular."
  },
  {
    "q": "He would rather die ________ beg.",
    "options": [
      "than",
      "then",
      "to",
      "from"
    ],
    "ans": "than",
    "explanation": "'Would rather...than' is the correct structure."
  },
  {
    "q": "The train arrived ________ time.",
    "options": [
      "on",
      "in",
      "at",
      "by"
    ],
    "ans": "on",
    "explanation": "'On time' is the standard idiom."
  },
  {
    "q": "Choose the word nearest in meaning to “benevolent”:",
    "options": [
      "kind",
      "cruel",
      "selfish",
      "harsh"
    ],
    "ans": "kind",
    "explanation": "'Kind' is closest in meaning to 'benevolent'."
  },
  {
    "q": "The opposite of “transparent” is:",
    "options": [
      "clear",
      "opaque",
      "bright",
      "visible"
    ],
    "ans": "opaque",
    "explanation": "'Opaque' is the opposite of 'transparent'."
  },
  {
    "q": "He ________ his keys on the table.",
    "options": [
      "lie",
      "lay",
      "laid",
      "lain"
    ],
    "ans": "laid",
    "explanation": "'Laid' is the past tense of transitive 'lay' (to place something)."
  },
  {
    "q": "We ________ to Lagos next week.",
    "options": [
      "travel",
      "travelled",
      "will travel",
      "have travelled"
    ],
    "ans": "will travel",
    "explanation": "Future plan: 'will travel'."
  },
  {
    "q": "This is the place ________ we met.",
    "options": [
      "which",
      "where",
      "that",
      "who"
    ],
    "ans": "where",
    "explanation": "'Where' refers to a place."
  },
  {
    "q": "She ________ her homework before dinner.",
    "options": [
      "finish",
      "finished",
      "has finished",
      "had finished"
    ],
    "ans": "finished",
    "explanation": "Simple past: 'finished'."
  },
  {
    "q": "The man ________ wallet was stolen reported to the police.",
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "ans": "whose",
    "explanation": "'Whose wallet' shows possession."
  },
  {
    "q": "I am not used ________ driving at night.",
    "options": [
      "to",
      "for",
      "with",
      "at"
    ],
    "ans": "to",
    "explanation": "'Used to' + gerund (be accustomed to)."
  },
  {
    "q": "He denied ________ the money.",
    "options": [
      "to steal",
      "stealing",
      "stole",
      "stolen"
    ],
    "ans": "stealing",
    "explanation": "'Deny' is followed by a gerund: 'denied stealing'."
  },
  {
    "q": "The committee members ________ their decision.",
    "options": [
      "has announced",
      "have announced",
      "is announced",
      "was announced"
    ],
    "ans": "have announced",
    "explanation": "'Members' is plural, taking 'have announced'."
  },
  {
    "q": "She sings ________ than her sister.",
    "options": [
      "good",
      "better",
      "best",
      "well"
    ],
    "ans": "better",
    "explanation": "Comparative form: 'better'."
  },
  {
    "q": "The policeman ________ the thief.",
    "options": [
      "catch",
      "caught",
      "has caught",
      "had caught"
    ],
    "ans": "caught",
    "explanation": "Simple past: 'caught'."
  },
  {
    "q": "We went to the cinema ________ spite of the rain.",
    "options": [
      "in",
      "despite",
      "although",
      "even"
    ],
    "ans": "in",
    "explanation": "'In spite of' is the correct idiom."
  },
  {
    "q": "He is allergic ________ penicillin.",
    "options": [
      "with",
      "to",
      "from",
      "for"
    ],
    "ans": "to",
    "explanation": "'Allergic to' is the correct preposition."
  },
  {
    "q": "The students ________ the examination.",
    "options": [
      "pass",
      "passed",
      "have passed",
      "had passed"
    ],
    "ans": "passed",
    "explanation": "Simple past: 'passed'."
  },
  {
    "q": "This novel is ________ interesting.",
    "options": [
      "much",
      "very",
      "many",
      "lot"
    ],
    "ans": "very",
    "explanation": "'Very interesting' is the standard intensifier."
  },
  {
    "q": "He has two brothers; one is a doctor, ________ is a lawyer.",
    "options": [
      "another",
      "the other",
      "other",
      "others"
    ],
    "ans": "the other",
    "explanation": "With exactly two items, the second is 'the other'."
  },
  {
    "q": "The price of fuel ________ increased again.",
    "options": [
      "has",
      "have",
      "is",
      "was"
    ],
    "ans": "has",
    "explanation": "'Price' is singular, taking 'has'."
  },
  {
    "q": "She asked me ________ I was going.",
    "options": [
      "where",
      "when",
      "why",
      "how"
    ],
    "ans": "where",
    "explanation": "Reported question: 'asked me where I was going'."
  },
  {
    "q": "The boy ________ to school every day.",
    "options": [
      "walk",
      "walks",
      "walked",
      "walking"
    ],
    "ans": "walks",
    "explanation": "Present simple, third person: 'walks'."
  },
  {
    "q": "The antonym of “optimistic” is:",
    "options": [
      "hopeful",
      "pessimistic",
      "cheerful",
      "positive"
    ],
    "ans": "pessimistic",
    "explanation": "'Pessimistic' is the antonym of 'optimistic'."
  },
  {
    "q": "He ________ in the army for ten years.",
    "options": [
      "serve",
      "served",
      "has served",
      "had served"
    ],
    "ans": "has served",
    "explanation": "Present perfect for a duration continuing to now: 'has served'."
  },
  {
    "q": "The letter was written ________ a pen.",
    "options": [
      "with",
      "by",
      "in",
      "on"
    ],
    "ans": "with",
    "explanation": "'With a pen' shows the instrument used."
  },
  {
    "q": "She is fond of ________ music. B) listening to (The question appears to have a typo. Grammatically, the correct expression is \"fond of listening to music.\" Among the given options, B) listening is the intended answer.)",
    "options": [
      "listen",
      "listening",
      "to listen",
      "listened"
    ],
    "ans": "listening",
    "explanation": "'Fond of listening to' is the intended standard phrase."
  },
  {
    "q": "They ________ the match by three goals.",
    "options": [
      "win",
      "won",
      "have won",
      "had won"
    ],
    "ans": "won",
    "explanation": "Simple past: 'won'."
  },
  {
    "q": "This is the book ________ I told you about.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "ans": "which",
    "explanation": "'Which' refers to 'the book' (a thing)."
  },
  {
    "q": "He behaved as though he ________ everything.",
    "options": [
      "know",
      "knew",
      "knows",
      "known"
    ],
    "ans": "knew",
    "explanation": "Subjunctive-style past 'knew' after 'as though'."
  },
  {
    "q": "The children ________ playing when it started raining.",
    "options": [
      "was",
      "were",
      "is",
      "are"
    ],
    "ans": "were",
    "explanation": "Past continuous, plural subject: 'were playing'."
  },
  {
    "q": "I ________ him yesterday at the market.",
    "options": [
      "see",
      "saw",
      "have seen",
      "had seen"
    ],
    "ans": "saw",
    "explanation": "Simple past: 'saw'."
  },
  {
    "q": "The opposite of “abundant” is:",
    "options": [
      "plentiful",
      "scarce",
      "enough",
      "rich"
    ],
    "ans": "scarce",
    "explanation": "'Scarce' is the opposite of 'abundant'."
  },
  {
    "q": "She ________ her keys at home.",
    "options": [
      "forget",
      "forgot",
      "has forgotten",
      "had forgotten"
    ],
    "ans": "forgot",
    "explanation": "Simple past: 'forgot'."
  },
  {
    "q": "If he ________ harder, he would have passed.",
    "options": [
      "works",
      "worked",
      "had worked",
      "has worked"
    ],
    "ans": "had worked",
    "explanation": "Third conditional: 'If he had worked harder, he would have passed.'"
  },
  {
    "q": "The dog barked ________ the stranger.",
    "options": [
      "at",
      "on",
      "with",
      "to"
    ],
    "ans": "at",
    "explanation": "'Barked at' is the correct preposition."
  },
  {
    "q": "He has been living here ________ 2015.",
    "options": [
      "for",
      "since",
      "from",
      "at"
    ],
    "ans": "since",
    "explanation": "'Since 2015' marks a starting point in time."
  },
  {
    "q": "The man ________ I borrowed the book is my lecturer.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "ans": "whom",
    "explanation": "'Whom' is the object of 'borrowed...from'."
  },
  {
    "q": "They ________ the news on television.",
    "options": [
      "watch",
      "watched",
      "have watched",
      "had watched"
    ],
    "ans": "watched",
    "explanation": "Simple past: 'watched'."
  },
  {
    "q": "He speaks as if he ________ the president.",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "ans": "were",
    "explanation": "Subjunctive 'were' after 'as if'."
  },
  {
    "q": "The teacher told the students ________ silent.",
    "options": [
      "to keep",
      "keep",
      "kept",
      "keeping"
    ],
    "ans": "to keep",
    "explanation": "'Told...to keep' uses the infinitive."
  },
  {
    "q": "Either the manager or his assistants ________ responsible.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "ans": "are",
    "explanation": "With 'either...or', the verb agrees with the nearer subject ('assistants')."
  },
  {
    "q": "The bird flew ________ the tree.",
    "options": [
      "on",
      "over",
      "under",
      "into"
    ],
    "ans": "over",
    "explanation": "'Flew over' the tree."
  },
  {
    "q": "We have known each other ________ many years.",
    "options": [
      "since",
      "for",
      "from",
      "at"
    ],
    "ans": "for",
    "explanation": "'For' + duration ('for many years')."
  },
  {
    "q": "She ________ the letter before going out.",
    "options": [
      "write",
      "wrote",
      "has written",
      "had written"
    ],
    "ans": "wrote",
    "explanation": "Simple past: 'wrote'."
  },
  {
    "q": "The lady ________ dress is red is my aunt.",
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "ans": "whose",
    "explanation": "'Whose dress' shows possession."
  },
  {
    "q": "They have been waiting ________ two hours.",
    "options": [
      "since",
      "for",
      "from",
      "at"
    ],
    "ans": "for",
    "explanation": "'For' + duration ('for two hours')."
  },
  {
    "q": "The information ________ useful.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "ans": "is",
    "explanation": "'Information' is uncountable/singular."
  },
  {
    "q": "He would prefer to walk ________ take a taxi.",
    "options": [
      "than (Although idiomatic English is \"would rather walk than take a taxi\" or \"would prefer to walk rather than take a taxi,\" this is the intended answer.)",
      "rather",
      "to",
      "instead"
    ],
    "ans": "rather",
    "explanation": "'Would prefer to walk rather (than) take a taxi' is the intended phrase."
  },
  {
    "q": "The plane arrived ________ schedule.",
    "options": [
      "on",
      "in",
      "at",
      "by"
    ],
    "ans": "on",
    "explanation": "'On schedule' is the standard idiom."
  },
  {
    "q": "Choose the word nearest in meaning to “diligent”:",
    "options": [
      "lazy",
      "hardworking",
      "careless",
      "slow"
    ],
    "ans": "hardworking",
    "explanation": "'Hardworking' is closest in meaning to 'diligent'."
  },
  {
    "q": "The opposite of “voluntary” is:",
    "options": [
      "willing",
      "compulsory",
      "free",
      "optional"
    ],
    "ans": "compulsory",
    "explanation": "'Compulsory' is the opposite of 'voluntary'."
  },
  {
    "q": "He ________ the ball across the field.",
    "options": [
      "kick",
      "kicked",
      "has kicked",
      "had kicked"
    ],
    "ans": "kicked",
    "explanation": "Simple past: 'kicked'."
  },
  {
    "q": "We ________ the party next weekend.",
    "options": [
      "attend",
      "attended",
      "will attend",
      "have attended"
    ],
    "ans": "will attend",
    "explanation": "Future plan: 'will attend'."
  },
  {
    "q": "This is the school ________ I studied.",
    "options": [
      "which",
      "where",
      "that",
      "who"
    ],
    "ans": "where",
    "explanation": "'Where' refers to a place ('the school')."
  },
  {
    "q": "She ________ her assignment before the deadline.",
    "options": [
      "complete",
      "completed",
      "has completed",
      "had completed"
    ],
    "ans": "completed",
    "explanation": "Simple past: 'completed'."
  },
  {
    "q": "The boy ________ bicycle was stolen cried bitterly.",
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "ans": "whose",
    "explanation": "'Whose bicycle' shows possession."
  },
  {
    "q": "I am not accustomed ________ waking up early.",
    "options": [
      "to",
      "for",
      "with",
      "at"
    ],
    "ans": "to",
    "explanation": "'Accustomed to' + gerund."
  },
  {
    "q": "He admitted ________ the mistake.",
    "options": [
      "to make",
      "making",
      "made",
      "make"
    ],
    "ans": "making",
    "explanation": "'Admit' is followed by a gerund: 'admitted making'."
  },
  {
    "q": "The panel ________ its findings yesterday.",
    "options": [
      "has released",
      "have released",
      "released",
      "was released"
    ],
    "ans": "released",
    "explanation": "Simple past: 'released'."
  },
  {
    "q": "She dances ________ than her friends.",
    "options": [
      "graceful",
      "more gracefully",
      "most gracefully",
      "gracefully"
    ],
    "ans": "more gracefully",
    "explanation": "Comparative adverb: 'more gracefully'."
  },
  {
    "q": "The security guard ________ the intruder.",
    "options": [
      "catch",
      "caught",
      "has caught",
      "had caught"
    ],
    "ans": "caught",
    "explanation": "Simple past: 'caught'."
  },
  {
    "q": "They succeeded ________ all odds.",
    "options": [
      "in spite",
      "despite",
      "although",
      "even"
    ],
    "ans": "despite",
    "explanation": "'Despite all odds' is the correct idiom."
  },
  {
    "q": "She is allergic ________ nuts.",
    "options": [
      "with",
      "to",
      "from",
      "for"
    ],
    "ans": "to",
    "explanation": "'Allergic to' is the correct preposition."
  },
  {
    "q": "The students ________ the test successfully.",
    "options": [
      "pass",
      "passed",
      "have passed",
      "had passed"
    ],
    "ans": "passed",
    "explanation": "Simple past: 'passed'."
  },
  {
    "q": "The weather is ________ cold today.",
    "options": [
      "much",
      "very",
      "many",
      "lot"
    ],
    "ans": "very",
    "explanation": "'Very cold' is the standard intensifier."
  },
  {
    "q": "He has three sisters; one is married, ________ are single.",
    "options": [
      "another",
      "the others",
      "other",
      "others"
    ],
    "ans": "the others",
    "explanation": "With more than two remaining, use 'the others'."
  },
  {
    "q": "The cost of living ________ risen sharply.",
    "options": [
      "has",
      "have",
      "is",
      "was"
    ],
    "ans": "has",
    "explanation": "'Cost' is singular, taking 'has'."
  },
  {
    "q": "She asked me ________ I needed help.",
    "options": [
      "where",
      "when",
      "if",
      "how"
    ],
    "ans": "if",
    "explanation": "Reported yes/no question uses 'if': 'asked me if I needed help.'"
  },
  {
    "q": "The children ________ to school every morning.",
    "options": [
      "go",
      "goes",
      "went",
      "gone"
    ],
    "ans": "go",
    "explanation": "Present simple, plural subject: 'go'."
  },
  {
    "q": "The antonym of “courageous” is:",
    "options": [
      "brave",
      "cowardly",
      "bold",
      "fearless"
    ],
    "ans": "cowardly",
    "explanation": "'Cowardly' is the antonym of 'courageous'."
  },
  {
    "q": "She ________ in that company for five years.",
    "options": [
      "work",
      "worked",
      "has worked",
      "had worked"
    ],
    "ans": "has worked",
    "explanation": "Present perfect for duration up to now: 'has worked'."
  },
  {
    "q": "The message was written ________ pencil.",
    "options": [
      "with",
      "by",
      "in",
      "on"
    ],
    "ans": "with",
    "explanation": "'With a pencil' shows the instrument used."
  },
  {
    "q": "He is interested ________ learning French.",
    "options": [
      "to",
      "in",
      "on",
      "at  s196. They ________ the championship last season. A) win B) won C) have won D) had won"
    ],
    "ans": "in",
    "explanation": "'Interested in' is the correct preposition."
  },
  {
    "q": "This is the movie ________ everyone is talking about.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "ans": "which",
    "explanation": "'Which' refers to 'the movie' (a thing)."
  },
  {
    "q": "He acted as though he ________ the boss.",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "ans": "were",
    "explanation": "Subjunctive 'were' after 'as though'."
  },
  {
    "q": "The pupils ________ playing when the bell rang.",
    "options": [
      "was",
      "were",
      "is",
      "are"
    ],
    "ans": "were",
    "explanation": "Past continuous, plural subject: 'were playing'."
  },
  {
    "q": "I ________ her at the airport yesterday.",
    "options": [
      "see",
      "saw",
      "have seen",
      "had seen"
    ],
    "ans": "saw",
    "explanation": "Simple past: 'saw'."
  },
  {
    "q": "The synonym of “prudent” is:",
    "options": [
      "careless",
      "wise",
      "stubborn",
      "foolish"
    ],
    "ans": "wise",
    "explanation": "'Wise' is closest in meaning to 'prudent'."
  },
  {
    "q": "The opposite of “expand” is:",
    "options": [
      "increase",
      "contract",
      "enlarge",
      "extend"
    ],
    "ans": "contract",
    "explanation": "'Contract' is the opposite of 'expand'."
  },
  {
    "q": "Neither the principal nor the teachers ________ aware of the incident.",
    "options": [
      "was",
      "were",
      "is",
      "has been"
    ],
    "ans": "were",
    "explanation": "With 'neither...nor', the verb agrees with the nearer subject ('teachers')."
  },
  {
    "q": "If I had seen him, I ________ the message.",
    "options": [
      "deliver",
      "will deliver",
      "would have delivered",
      "would deliver"
    ],
    "ans": "would have delivered",
    "explanation": "Third conditional: 'I would have delivered the message.'"
  },
  {
    "q": "She insisted ________ paying the bill herself.",
    "options": [
      "in",
      "on",
      "at",
      "with"
    ],
    "ans": "on",
    "explanation": "'Insisted on' is the correct preposition."
  },
  {
    "q": "The committee ________ its final report tomorrow.",
    "options": [
      "will present",
      "presents",
      "presented",
      "has presented"
    ],
    "ans": "will present",
    "explanation": "Future action: 'will present'."
  },
  {
    "q": "He was absent ________ school yesterday.",
    "options": [
      "at",
      "in",
      "from",
      "on"
    ],
    "ans": "from",
    "explanation": "'Absent from' is the correct preposition."
  },
  {
    "q": "We have known each other ________ childhood.",
    "options": [
      "since",
      "for",
      "from",
      "at"
    ],
    "ans": "since",
    "explanation": "'Since childhood' marks a starting point."
  },
  {
    "q": "The woman ________ son won the scholarship is a nurse.",
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "ans": "whose",
    "explanation": "'Whose son' shows possession."
  },
  {
    "q": "The students were advised to ________ attention in class.",
    "options": [
      "make",
      "do",
      "pay",
      "give"
    ],
    "ans": "pay",
    "explanation": "'Pay attention' is the standard collocation."
  },
  {
    "q": "The antonym of “hostile” is:",
    "options": [
      "friendly",
      "cruel",
      "harsh",
      "violent"
    ],
    "ans": "friendly",
    "explanation": "'Friendly' is the antonym of 'hostile'."
  },
  {
    "q": "He is capable ________ solving difficult problems.",
    "options": [
      "with",
      "of",
      "in",
      "to"
    ],
    "ans": "of",
    "explanation": "'Capable of' is the correct preposition."
  },
  {
    "q": "The police ________ investigating the robbery.",
    "options": [
      "are",
      "is",
      "was",
      "has been"
    ],
    "ans": "are",
    "explanation": "Collective 'police' takes plural verb: 'are investigating'."
  },
  {
    "q": "I wish I ________ more time to prepare.",
    "options": [
      "have",
      "had",
      "has",
      "will have"
    ],
    "ans": "had",
    "explanation": "Hypothetical wish uses past tense: 'I wish I had more time.'"
  },
  {
    "q": "She walked into the room ________.",
    "options": [
      "quiet",
      "quietly",
      "quietness",
      "quieter"
    ],
    "ans": "quietly",
    "explanation": "Adverb form: 'quietly'."
  },
  {
    "q": "He succeeded ________ all expectations.",
    "options": [
      "in",
      "beyond",
      "over",
      "above"
    ],
    "ans": "beyond",
    "explanation": "'Succeeded beyond expectations' is the correct idiom."
  },
  {
    "q": "The baby was ________ by its mother.",
    "options": [
      "looked after",
      "looked into",
      "looked over",
      "looked up"
    ],
    "ans": "looked after",
    "explanation": "'Looked after' means cared for."
  },
  {
    "q": "Choose the word nearest in meaning to “reluctant”.",
    "options": [
      "eager",
      "unwilling",
      "cheerful",
      "active"
    ],
    "ans": "unwilling",
    "explanation": "'Unwilling' is closest in meaning to 'reluctant'."
  },
  {
    "q": "By this time next year, they ________ the project.",
    "options": [
      "complete",
      "completed",
      "will have completed",
      "have completed"
    ],
    "ans": "will have completed",
    "explanation": "Future perfect: 'will have completed'."
  },
  {
    "q": "He is one of the players who ________ always punctual.",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "ans": "are",
    "explanation": "'Players who' takes a plural verb: 'are'."
  },
  {
    "q": "We arrived ________ the airport before noon.",
    "options": [
      "on",
      "at",
      "in",
      "into"
    ],
    "ans": "at",
    "explanation": "'At the airport' is the correct preposition."
  },
  {
    "q": "The principal, together with the teachers, ________ present.",
    "options": [
      "was",
      "were",
      "are",
      "have been"
    ],
    "ans": "was",
    "explanation": "'Together with' doesn't pluralize the subject; 'principal' stays singular."
  },
  {
    "q": "She apologized ________ coming late.",
    "options": [
      "for",
      "of",
      "about",
      "with"
    ],
    "ans": "for",
    "explanation": "'Apologized for' is the correct preposition."
  },
  {
    "q": "The word “elated” means:",
    "options": [
      "disappointed",
      "very happy",
      "confused",
      "frightened"
    ],
    "ans": "very happy",
    "explanation": "'Elated' means very happy."
  },
  {
    "q": "The old man died ________ a heart attack.",
    "options": [
      "of",
      "from",
      "with",
      "by"
    ],
    "ans": "of",
    "explanation": "'Died of' an illness is the standard collocation."
  },
  {
    "q": "If she studies hard, she ________ the examination.",
    "options": [
      "passed",
      "would pass",
      "will pass",
      "had passed"
    ],
    "ans": "will pass",
    "explanation": "First conditional: 'If she studies, she will pass.'"
  },
  {
    "q": "This is the teacher ________ taught us Mathematics.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "ans": "who",
    "explanation": "'Who' refers to a person ('the teacher')."
  },
  {
    "q": "The meeting has been put ________ until next week.",
    "options": [
      "out",
      "off to",
      "off",
      "away"
    ],
    "ans": "off",
    "explanation": "'Put off' means postponed."
  },
  {
    "q": "The synonym of “vital” is:",
    "options": [
      "weak",
      "essential",
      "optional",
      "doubtful"
    ],
    "ans": "essential",
    "explanation": "'Essential' is closest in meaning to 'vital'."
  },
  {
    "q": "The children were prevented ________ entering the building.",
    "options": [
      "from",
      "to",
      "by",
      "with"
    ],
    "ans": "from",
    "explanation": "'Prevented from' is the correct preposition."
  },
  {
    "q": "She is married ________ a doctor.",
    "options": [
      "with",
      "by",
      "to",
      "for"
    ],
    "ans": "to",
    "explanation": "'Married to' is the correct preposition."
  },
  {
    "q": "Hardly had we arrived ________ it started raining.",
    "options": [
      "when",
      "than (Exam setters sometimes use this incorrectly, but the correct English is \"when.\" If following standard English, the correct answer should be A) when.)",
      "before",
      "then"
    ],
    "ans": "when",
    "explanation": "'Hardly...when' is the standard correct correlative structure."
  },
  {
    "q": "The word nearest in meaning to “scarcity” is:",
    "options": [
      "plenty",
      "shortage",
      "comfort",
      "wealth"
    ],
    "ans": "shortage",
    "explanation": "'Shortage' is closest in meaning to 'scarcity'."
  },
  {
    "q": "The opposite of “accept” is:",
    "options": [
      "admit",
      "reject",
      "receive",
      "approve"
    ],
    "ans": "reject",
    "explanation": "'Reject' is the opposite of 'accept'."
  },
  {
    "q": "He denied ________ the window.",
    "options": [
      "to break",
      "breaking",
      "broke",
      "broken"
    ],
    "ans": "breaking",
    "explanation": "'Deny' is followed by a gerund: 'denied breaking'."
  },
  {
    "q": "The manager asked us ________ quietly.",
    "options": [
      "sit",
      "to sit",
      "sitting",
      "sat"
    ],
    "ans": "to sit",
    "explanation": "'Asked us to sit' uses the infinitive."
  },
  {
    "q": "My father is interested ________ agriculture.",
    "options": [
      "on",
      "in",
      "to",
      "with"
    ],
    "ans": "in",
    "explanation": "'Interested in' is the correct preposition."
  },
  {
    "q": "The jury ________ its decision after two hours.",
    "options": [
      "announced",
      "announce",
      "have announced",
      "are announcing"
    ],
    "ans": "announced",
    "explanation": "Simple past: 'announced'."
  },
  {
    "q": "The boy was accused of ________ during the examination.",
    "options": [
      "cheat",
      "cheating",
      "cheated",
      "to cheat"
    ],
    "ans": "cheating",
    "explanation": "'Accused of' + gerund: 'cheating'."
  },
  {
    "q": "He is taller ________ his elder brother.",
    "options": [
      "with",
      "to",
      "than",
      "from"
    ],
    "ans": "than",
    "explanation": "Comparative: 'taller than'."
  },
  {
    "q": "The doctor advised him to cut down ________ sugar.",
    "options": [
      "in",
      "on",
      "with",
      "for"
    ],
    "ans": "on",
    "explanation": "'Cut down on' is the correct phrasal verb."
  },
  {
    "q": "The opposite of “optimistic” is:",
    "options": [
      "cheerful",
      "pessimistic",
      "hopeful",
      "confident"
    ],
    "ans": "pessimistic",
    "explanation": "'Pessimistic' is the opposite of 'optimistic'."
  },
  {
    "q": "We are looking forward to ________ from you soon.",
    "options": [
      "hear",
      "hearing",
      "heard",
      "have heard"
    ],
    "ans": "hearing",
    "explanation": "'Looking forward to' + gerund: 'hearing'."
  },
  {
    "q": "The teacher praised the pupils ________ their excellent performance.",
    "options": [
      "for",
      "with",
      "by",
      "on"
    ],
    "ans": "for",
    "explanation": "'Praised...for' is the correct preposition."
  },
  {
    "q": "The word “feasible” means:",
    "options": [
      "impossible",
      "practicable",
      "dangerous",
      "uncertain"
    ],
    "ans": "practicable",
    "explanation": "'Feasible' means practicable/achievable."
  },
  {
    "q": "Despite the heavy rainfall, the match was ________.",
    "options": [
      "called on",
      "called in",
      "called off",
      "called at"
    ],
    "ans": "called off",
    "explanation": "'Called off' means cancelled."
  },
  {
    "q": "The synonym of “candid” is:",
    "options": [
      "dishonest",
      "frank",
      "proud",
      "timid"
    ],
    "ans": "frank",
    "explanation": "'Frank' is closest in meaning to 'candid'."
  },
  {
    "q": "The opposite of “rigid” is:",
    "options": [
      "hard",
      "flexible",
      "strong",
      "rough"
    ],
    "ans": "flexible",
    "explanation": "'Flexible' is the opposite of 'rigid'."
  },
  {
    "q": "She ________ to church every Sunday.",
    "options": [
      "go",
      "goes",
      "going",
      "gone"
    ],
    "ans": "goes",
    "explanation": "Present simple, third person: 'goes'."
  },
  {
    "q": "If they had informed us earlier, we ________ attended the meeting.",
    "options": [
      "will have",
      "would",
      "would have",
      "shall have"
    ],
    "ans": "would have",
    "explanation": "Third conditional: 'we would have attended'."
  },
  {
    "q": "He was accused ________ stealing the company's money.",
    "options": [
      "for",
      "of",
      "with",
      "by"
    ],
    "ans": "of",
    "explanation": "'Accused of' is the correct preposition."
  },
  {
    "q": "The students ________ the assignment before the deadline.",
    "options": [
      "submit",
      "submitted",
      "had submitted",
      "have submit"
    ],
    "ans": "submitted",
    "explanation": "Simple past: 'submitted'."
  },
  {
    "q": "The lady ________ handbag was stolen reported the matter immediately.",
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "ans": "whose",
    "explanation": "'Whose handbag' shows possession."
  },
  {
    "q": "We have lived in this town ________ 2018.",
    "options": [
      "for",
      "since",
      "from",
      "at"
    ],
    "ans": "since",
    "explanation": "'Since 2018' marks a starting point."
  },
  {
    "q": "The baby was crying because it was ________.",
    "options": [
      "hunger",
      "hungry",
      "hungrily",
      "hungered"
    ],
    "ans": "hungry",
    "explanation": "Adjective form: 'hungry'."
  },
  {
    "q": "The opposite of “prosperity” is:",
    "options": [
      "wealth",
      "poverty",
      "fortune",
      "abundance"
    ],
    "ans": "poverty",
    "explanation": "'Poverty' is the opposite of 'prosperity'."
  },
  {
    "q": "Neither of the answers ________ correct.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "ans": "is",
    "explanation": "'Neither' is grammatically singular."
  },
  {
    "q": "He succeeded ________ convincing the board.",
    "options": [
      "in",
      "at",
      "on",
      "with"
    ],
    "ans": "in",
    "explanation": "'Succeeded in convincing' is the correct preposition."
  },
  {
    "q": "The word nearest in meaning to “abandon” is:",
    "options": [
      "continue",
      "desert",
      "protect",
      "preserve"
    ],
    "ans": "desert",
    "explanation": "'Desert' is closest in meaning to 'abandon'."
  },
  {
    "q": "We were prevented ________ entering the hall.",
    "options": [
      "from",
      "by",
      "with",
      "at"
    ],
    "ans": "from",
    "explanation": "'Prevented from' is the correct preposition."
  },
  {
    "q": "She behaves as if she ________ everything.",
    "options": [
      "knows",
      "know",
      "knew",
      "known"
    ],
    "ans": "knew",
    "explanation": "Subjunctive 'were' after 'as if'."
  },
  {
    "q": "The meeting was postponed ________ next Monday.",
    "options": [
      "in",
      "on",
      "until",
      "by"
    ],
    "ans": "until",
    "explanation": "'Postponed until' is the correct preposition."
  },
  {
    "q": "My uncle is good ________ fixing electrical appliances.",
    "options": [
      "in",
      "with",
      "at",
      "for"
    ],
    "ans": "at",
    "explanation": "'Good at' is the correct preposition."
  },
  {
    "q": "The opposite of “victory” is:",
    "options": [
      "triumph",
      "defeat",
      "success",
      "progress"
    ],
    "ans": "defeat",
    "explanation": "'Defeat' is the opposite of 'victory'."
  },
  {
    "q": "The teacher advised the pupils ________ harder.",
    "options": [
      "study",
      "to study",
      "studying",
      "studied"
    ],
    "ans": "to study",
    "explanation": "'Advised...to study' uses the infinitive."
  },
  {
    "q": "The news ________ announced yesterday.",
    "options": [
      "was",
      "were",
      "are",
      "have been"
    ],
    "ans": "was",
    "explanation": "'News' is grammatically singular."
  },
  {
    "q": "I would rather stay at home ________ go out in the rain.",
    "options": [
      "than",
      "then",
      "to",
      "instead"
    ],
    "ans": "than",
    "explanation": "'Would rather...than' is the correct structure."
  },
  {
    "q": "The word “lucid” means:",
    "options": [
      "confusing",
      "clear",
      "difficult",
      "hidden"
    ],
    "ans": "clear",
    "explanation": "'Lucid' means clear."
  },
  {
    "q": "He is fond ________ reading novels.",
    "options": [
      "of",
      "in",
      "on",
      "at"
    ],
    "ans": "of",
    "explanation": "'Fond of' is the correct preposition."
  },
  {
    "q": "The principal, as well as the vice-principal, ________ present.",
    "options": [
      "was",
      "were",
      "are",
      "have been"
    ],
    "ans": "was",
    "explanation": "'As well as' doesn't pluralize the subject; 'principal' stays singular."
  },
  {
    "q": "The manager congratulated us ________ our success.",
    "options": [
      "on",
      "for",
      "at",
      "with"
    ],
    "ans": "on",
    "explanation": "'Congratulated...on' is the correct preposition."
  },
  {
    "q": "She has been waiting ________ over an hour.",
    "options": [
      "for",
      "since",
      "from",
      "at"
    ],
    "ans": "for",
    "explanation": "'For' + duration ('for over an hour')."
  },
  {
    "q": "The opposite of “maximum” is:",
    "options": [
      "highest",
      "minimum",
      "greatest",
      "fullest"
    ],
    "ans": "minimum",
    "explanation": "'Minimum' is the opposite of 'maximum'."
  },
  {
    "q": "We ________ the work before the visitors arrived.",
    "options": [
      "finish",
      "finished",
      "had finished",
      "have finished"
    ],
    "ans": "had finished",
    "explanation": "Past perfect for an action before another past action."
  },
  {
    "q": "The boy ________ won the debate is my cousin.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "ans": "who",
    "explanation": "'Who' refers to 'the boy' (a person, subject)."
  },
  {
    "q": "She apologized ________ her rude behaviour.",
    "options": [
      "for",
      "of",
      "on",
      "with"
    ],
    "ans": "for",
    "explanation": "'Apologized for' is the correct preposition."
  },
  {
    "q": "The synonym of “fragile” is:",
    "options": [
      "strong",
      "delicate",
      "solid",
      "firm"
    ],
    "ans": "delicate",
    "explanation": "'Delicate' is closest in meaning to 'fragile'."
  },
  {
    "q": "The children ________ quietly in the classroom.",
    "options": [
      "sits",
      "sat",
      "sitting",
      "seat"
    ],
    "ans": "sat",
    "explanation": "Simple past: 'sat'."
  },
  {
    "q": "The train arrived exactly ________ time.",
    "options": [
      "on",
      "in",
      "by",
      "at"
    ],
    "ans": "on",
    "explanation": "'On time' is the standard idiom."
  },
  {
    "q": "I am looking forward to ________ from my brother.",
    "options": [
      "hear",
      "hearing",
      "heard",
      "hears"
    ],
    "ans": "hearing",
    "explanation": "'Looking forward to' + gerund: 'hearing'."
  },
  {
    "q": "He was absent ________ the ceremony because he was ill.",
    "options": [
      "at",
      "on",
      "from",
      "in"
    ],
    "ans": "from",
    "explanation": "'Absent from' is the correct preposition."
  },
  {
    "q": "The word nearest in meaning to “hostile” is:",
    "options": [
      "friendly",
      "unfriendly",
      "peaceful",
      "generous"
    ],
    "ans": "unfriendly",
    "explanation": "'Unfriendly' is closest in meaning to 'hostile'."
  },
  {
    "q": "The opposite of “victorious” is:",
    "options": [
      "successful",
      "defeated",
      "joyful",
      "proud"
    ],
    "ans": "defeated",
    "explanation": "'Defeated' is the opposite of 'victorious'."
  },
  {
    "q": "The students were warned against ________ during the examination.",
    "options": [
      "cheat",
      "cheating",
      "cheated",
      "to cheat"
    ],
    "ans": "cheating",
    "explanation": "'Warned against' + gerund: 'cheating'."
  },
  {
    "q": "The woman ________ we met yesterday is a lawyer.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "ans": "whom",
    "explanation": "'Whom' is the object of 'met'."
  },
  {
    "q": "Hard work often leads ________ success.",
    "options": [
      "to",
      "for",
      "into",
      "with"
    ],
    "ans": "to",
    "explanation": "'Leads to success' is the correct preposition."
  },
  {
    "q": "The committee ________ reached a unanimous decision.",
    "options": [
      "has",
      "have",
      "are",
      "were"
    ],
    "ans": "has",
    "explanation": "Collective 'committee' as a unit takes 'has'."
  },
  {
    "q": "The opposite of “temporary” is:",
    "options": [
      "brief",
      "short-lived",
      "permanent",
      "passing"
    ],
    "ans": "permanent",
    "explanation": "'Permanent' is the opposite of 'temporary'."
  },
  {
    "q": "He denied ________ the confidential documents.",
    "options": [
      "to leak",
      "leaking",
      "leaked",
      "leak"
    ],
    "ans": "leaking",
    "explanation": "'Deny' is followed by a gerund: 'denied leaking'."
  },
  {
    "q": "We should always be grateful ________ our parents.",
    "options": [
      "with",
      "to",
      "for",
      "at"
    ],
    "ans": "to",
    "explanation": "'Grateful to' is the correct preposition."
  },
  {
    "q": "The word “resilient” means:",
    "options": [
      "weak",
      "able to recover quickly",
      "lazy",
      "impatient"
    ],
    "ans": "able to recover quickly",
    "explanation": "'Resilient' means able to recover quickly."
  },
  {
    "q": "If she studies consistently, she ________ excellent grades.",
    "options": [
      "obtained",
      "would obtain",
      "will obtain",
      "had obtained"
    ],
    "ans": "will obtain",
    "explanation": "First conditional: 'If she studies, she will obtain.'"
  },
  {
    "q": "The chairman thanked everyone for ________ the meeting a success.",
    "options": [
      "make",
      "making",
      "made",
      "to make"
    ],
    "ans": "making",
    "explanation": "'Thanked...for making' uses the gerund."
  }
],
  "PUTME_GENERAL_KNOWLEDGE": [
  {
    "q": "Mr. Dele Giwa was killed through a letter bomb on:",
    "options": [
      "October 19, 1986",
      "September 17, 1987",
      "October 19, 1985",
      "September 17, 1986",
      "October 19, 1987"
    ],
    "ans": "October 19, 1986",
    "explanation": "Dele Giwa was assassinated by a letter bomb on 19 October 1986."
  },
  {
    "q": "Which of the following is not a spice?",
    "options": [
      "Rye",
      "Saffron",
      "Ginger",
      "Cloves",
      "Nutmeg"
    ],
    "ans": "Rye",
    "explanation": "Rye is a grain, not a spice."
  },
  {
    "q": "Desmond Tutu was awarded the Nobel Peace Prize in:",
    "options": [
      "1983",
      "1987",
      "2001",
      "2000",
      "1984"
    ],
    "ans": "1984",
    "explanation": "Desmond Tutu received the Nobel Peace Prize in 1984."
  },
  {
    "q": "The largest continent in the world by land area is:",
    "options": [
      "Africa",
      "Asia",
      "Europe",
      "North America",
      "Australia"
    ],
    "ans": "Asia",
    "explanation": "Asia is the largest continent by land area."
  },
  {
    "q": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars",
      "Saturn",
      "Mercury"
    ],
    "ans": "Mars",
    "explanation": "Mars is known as the Red Planet."
  },
  {
    "q": "The currency of Japan is:",
    "options": [
      "Won",
      "Dollar",
      "Yen",
      "Peso",
      "Baht"
    ],
    "ans": "Yen",
    "explanation": "Japan's currency is the Yen."
  },
  {
    "q": "Who was the first President of Nigeria?",
    "options": [
      "Olusegun Obasanjo",
      "Dr. Nnamdi Azikiwe",
      "Shehu Shagari",
      "Yakubu Gowon",
      "Ernest Shonekan"
    ],
    "ans": "Dr. Nnamdi Azikiwe",
    "explanation": "Dr. Nnamdi Azikiwe was Nigeria's first President."
  },
  {
    "q": "Which organ of government is responsible for interpreting the Constitution?",
    "options": [
      "Executive",
      "Legislature",
      "Judiciary",
      "Police",
      "Civil Service"
    ],
    "ans": "Judiciary",
    "explanation": "The Judiciary interprets the Constitution."
  },
  {
    "q": "The headquarters of the African Union is located in:",
    "options": [
      "Abuja",
      "Nairobi",
      "Addis Ababa",
      "Cairo",
      "Accra"
    ],
    "ans": "Addis Ababa",
    "explanation": "The African Union is headquartered in Addis Ababa."
  },
  {
    "q": "The longest river in Africa is the:",
    "options": [
      "Congo River",
      "River Nile",
      "River Niger",
      "River Benue",
      "Zambezi River"
    ],
    "ans": "River Nile",
    "explanation": "The Nile is the longest river in Africa."
  },
  {
    "q": "Which Nigerian state is known as the \"Gateway State\"?",
    "options": [
      "Lagos",
      "Oyo",
      "Ogun",
      "Ondo",
      "Ekiti"
    ],
    "ans": "Ogun",
    "explanation": "Ogun State is known as the Gateway State."
  },
  {
    "q": "The capital of Ogun State is:",
    "options": [
      "Ijebu-Ode",
      "Abeokuta",
      "Sagamu",
      "Ilaro",
      "Ota"
    ],
    "ans": "Abeokuta",
    "explanation": "Abeokuta is the capital of Ogun State."
  },
  {
    "q": "Which university is located in Ago-Iwoye, Ogun State?",
    "options": [
      "University of Lagos",
      "Federal University of Agriculture, Abeokuta",
      "Olabisi Onabanjo University",
      "Tai Solarin University of Education",
      "Covenant University"
    ],
    "ans": "Olabisi Onabanjo University",
    "explanation": "Olabisi Onabanjo University is located in Ago-Iwoye, Ogun State."
  },
  {
    "q": "The Nigerian Coat of Arms contains all of the following except:",
    "options": [
      "Two horses",
      "An eagle",
      "A black shield",
      "A lion",
      "Green and white colours"
    ],
    "ans": "A lion",
    "explanation": "The Nigerian Coat of Arms features two horses, an eagle, a black shield, and green/white colours — not a lion."
  },
  {
    "q": "Which of the following is the highest court in Nigeria?",
    "options": [
      "Court of Appeal",
      "Federal High Court",
      "Supreme Court",
      "National Industrial Court",
      "High Court"
    ],
    "ans": "Supreme Court",
    "explanation": "The Supreme Court is Nigeria's highest court."
  },
  {
    "q": "The official currency of Nigeria is the:",
    "options": [
      "Cedi",
      "Naira",
      "Dollar",
      "Pound",
      "Franc"
    ],
    "ans": "Naira",
    "explanation": "Nigeria's official currency is the Naira."
  },
  {
    "q": "The National Youth Service Corps (NYSC) was established in:",
    "options": [
      "1960",
      "1967",
      "1973",
      "1976",
      "1983"
    ],
    "ans": "1973",
    "explanation": "The NYSC was established in 1973."
  },
  {
    "q": "Which of these countries shares a border with Nigeria?",
    "options": [
      "Ghana",
      "Cameroon",
      "Liberia",
      "Sierra Leone",
      "Togo"
    ],
    "ans": "Cameroon",
    "explanation": "Cameroon shares a border with Nigeria."
  },
  {
    "q": "The Nigerian flag was designed by:",
    "options": [
      "Obafemi Awolowo",
      "Dr. Nnamdi Azikiwe",
      "Michael Taiwo Akinkunmi",
      "Sir Abubakar Tafawa Balewa",
      "Wole Soyinka"
    ],
    "ans": "Michael Taiwo Akinkunmi",
    "explanation": "Michael Taiwo Akinkunmi designed the Nigerian flag."
  },
  {
    "q": "The first military Head of State of Nigeria was:",
    "options": [
      "Yakubu Gowon",
      "Major General J.T.U. Aguiyi-Ironsi",
      "Murtala Mohammed",
      "Ibrahim Babangida",
      "Muhammadu Buhari"
    ],
    "ans": "Major General J.T.U. Aguiyi-Ironsi",
    "explanation": "Major General J.T.U. Aguiyi-Ironsi was Nigeria's first military Head of State."
  },
  {
    "q": "Which of the following oceans is the largest?",
    "options": [
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
      "Southern Ocean",
      "Atlantic Ocean"
    ],
    "ans": "Pacific Ocean",
    "explanation": "The Pacific Ocean is the largest ocean."
  },
  {
    "q": "The headquarters of the United Nations is located in:",
    "options": [
      "Geneva",
      "Paris",
      "London",
      "New York"
    ],
    "ans": "New York",
    "explanation": "The UN headquarters is in New York."
  },
  {
    "q": "Which Nigerian city is popularly known as the \"Centre of Excellence\"?",
    "options": [
      "Lagos",
      "Ibadan",
      "Port Harcourt",
      "Kano"
    ],
    "ans": "Lagos",
    "explanation": "Lagos is known as the Centre of Excellence."
  },
  {
    "q": "Nigeria gained independence from Britain in:",
    "options": [
      "October 1, 1959",
      "October 1, 1960",
      "October 1, 1963",
      "October 1, 1966"
    ],
    "ans": "October 1, 1960",
    "explanation": "Nigeria gained independence on October 1, 1960."
  },
  {
    "q": "The first Executive President of Nigeria was:",
    "options": [
      "Dr. Nnamdi Azikiwe",
      "Alhaji Shehu Shagari",
      "Chief Obafemi Awolowo",
      "Alhaji Tafawa Balewa"
    ],
    "ans": "Alhaji Shehu Shagari",
    "explanation": "Alhaji Shehu Shagari was Nigeria's first Executive President."
  },
  {
    "q": "Which of the following is the largest organ in the human body?",
    "options": [
      "Heart",
      "Liver",
      "Skin",
      "Kidney"
    ],
    "ans": "Skin",
    "explanation": "The skin is the largest organ in the human body."
  },
  {
    "q": "The headquarters of ECOWAS is located in:",
    "options": [
      "Accra",
      "Abuja",
      "Lagos",
      "Dakar"
    ],
    "ans": "Abuja",
    "explanation": "ECOWAS is headquartered in Abuja."
  },
  {
    "q": "The instrument used to measure atmospheric pressure is called:",
    "options": [
      "Barometer",
      "Thermometer",
      "Hygrometer",
      "Hydrometer"
    ],
    "ans": "Barometer",
    "explanation": "A barometer measures atmospheric pressure."
  },
  {
    "q": "The official residence of the President of Nigeria is known as:",
    "options": [
      "Aso Villa",
      "Aso Rock Villa",
      "Dodan Barracks",
      "Eagle House"
    ],
    "ans": "Aso Villa",
    "explanation": "The President's official residence is known as Aso Villa."
  },
  {
    "q": "Which of the following is not a member of the United Nations Security Council permanently?",
    "options": [
      "China",
      "Russia",
      "France",
      "Nigeria"
    ],
    "ans": "Nigeria",
    "explanation": "Nigeria is not a permanent UN Security Council member (the five are US, UK, France, Russia, China)."
  },
  {
    "q": "The largest ocean in the world is the:",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "ans": "Pacific Ocean",
    "explanation": "The Pacific Ocean is the largest ocean."
  },
  {
    "q": "The currency used in Ghana is:",
    "options": [
      "Naira",
      "Cedi",
      "Franc",
      "Shilling"
    ],
    "ans": "Cedi",
    "explanation": "Ghana's currency is the Cedi."
  },
  {
    "q": "Which blood group is regarded as the universal donor?",
    "options": [
      "O Negative",
      "AB Positive",
      "A Positive",
      "B Negative"
    ],
    "ans": "O Negative",
    "explanation": "O Negative blood is the universal donor type."
  },
  {
    "q": "The headquarters of UNESCO is in:",
    "options": [
      "London",
      "Paris",
      "Geneva",
      "New York"
    ],
    "ans": "Paris",
    "explanation": "UNESCO is headquartered in Paris."
  },
  {
    "q": "The largest desert in the world is the:",
    "options": [
      "Kalahari Desert",
      "Sahara Desert",
      "Namib Desert",
      "Gobi Desert"
    ],
    "ans": "Sahara Desert",
    "explanation": "The Sahara is the world's largest hot desert."
  },
  {
    "q": "Which gas is most abundant in the Earth's atmosphere?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    "ans": "Nitrogen",
    "explanation": "Nitrogen is the most abundant gas in Earth's atmosphere."
  },
  {
    "q": "The first man to walk on the moon was:",
    "options": [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins"
    ],
    "ans": "Neil Armstrong",
    "explanation": "Neil Armstrong was the first man to walk on the moon."
  },
  {
    "q": "The longest river in Nigeria is:",
    "options": [
      "River Niger",
      "River Benue",
      "River Ogun",
      "River Cross"
    ],
    "ans": "River Niger",
    "explanation": "The River Niger is the longest river in Nigeria."
  },
  {
    "q": "Which of the following is not a renewable source of energy?",
    "options": [
      "Wind",
      "Solar",
      "Hydroelectric",
      "Coal"
    ],
    "ans": "Coal",
    "explanation": "Coal is a non-renewable fossil fuel."
  },
  {
    "q": "The capital city of Canada is:",
    "options": [
      "Toronto",
      "Montreal",
      "Ottawa",
      "Vancouver"
    ],
    "ans": "Ottawa",
    "explanation": "Ottawa is the capital of Canada."
  },
  {
    "q": "Which planet is the largest in the Solar System?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter",
      "Neptune"
    ],
    "ans": "Jupiter",
    "explanation": "Jupiter is the largest planet in the Solar System."
  },
  {
    "q": "The chemical symbol for sodium is:",
    "options": [
      "So",
      "Na",
      "Sd",
      "Sn"
    ],
    "ans": "Na",
    "explanation": "Sodium's chemical symbol is Na."
  },
  {
    "q": "Which Nigerian state is known as the \"Sunshine State\"?",
    "options": [
      "Ekiti",
      "Ondo",
      "Osun",
      "Ogun"
    ],
    "ans": "Ondo",
    "explanation": "Ondo State is known as the Sunshine State."
  },
  {
    "q": "The first Secretary-General of the United Nations was:",
    "options": [
      "Trygve Lie",
      "Kofi Annan",
      "Ban Ki-moon",
      "Boutros Boutros-Ghali"
    ],
    "ans": "Trygve Lie",
    "explanation": "Trygve Lie was the first UN Secretary-General."
  },
  {
    "q": "Which of these countries is not in Africa?",
    "options": [
      "Kenya",
      "Uganda",
      "Yemen",
      "Tanzania"
    ],
    "ans": "Yemen",
    "explanation": "Yemen is in the Middle East, not Africa."
  },
  {
    "q": "Which vitamin is mainly produced when the skin is exposed to sunlight?",
    "options": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin D",
      "Vitamin K"
    ],
    "ans": "Vitamin D",
    "explanation": "Vitamin D is produced when skin is exposed to sunlight."
  },
  {
    "q": "Which of the following is the smallest unit of a living organism?",
    "options": [
      "Cell",
      "Tissue",
      "Organ",
      "System"
    ],
    "ans": "Cell",
    "explanation": "The cell is the smallest unit of a living organism."
  },
  {
    "q": "Which of the following countries is referred to as the \"Giant of Africa\"?",
    "options": [
      "Nigeria",
      "South Africa",
      "Egypt",
      "Ethiopia"
    ],
    "ans": "Nigeria",
    "explanation": "Nigeria is referred to as the Giant of Africa."
  },
  {
    "q": "The headquarters of the World Health Organization (WHO) is located in:",
    "options": [
      "Paris",
      "Geneva",
      "New York",
      "Vienna"
    ],
    "ans": "Geneva",
    "explanation": "The WHO is headquartered in Geneva."
  },
  {
    "q": "The first Nigerian to become Secretary-General of the Commonwealth was:",
    "options": [
      "Emeka Anyaoku",
      "Chief Anthony Enahoro",
      "Emeka Anyaoku",
      "Ibrahim Gambari"
    ],
    "ans": "Emeka Anyaoku",
    "explanation": "Emeka Anyaoku was the first Nigerian Commonwealth Secretary-General."
  },
  {
    "q": "Which of the following is the tallest mountain in Africa?",
    "options": [
      "Mount Kenya",
      "Mount Kilimanjaro",
      "Mount Elgon",
      "Mount Cameroon"
    ],
    "ans": "Mount Kilimanjaro",
    "explanation": "Mount Kilimanjaro is the tallest mountain in Africa."
  },
  {
    "q": "The colour at the centre of the Nigerian flag represents:",
    "options": [
      "Peace",
      "Peace and Unity",
      "Agriculture",
      "Strength"
    ],
    "ans": "Peace and Unity",
    "explanation": "White in the Nigerian flag represents peace and unity."
  },
  {
    "q": "Which of the following is the largest producer of cocoa in Africa?",
    "options": [
      "Nigeria",
      "Côte d'Ivoire",
      "Ghana",
      "Cameroon"
    ],
    "ans": "Côte d'Ivoire",
    "explanation": "Côte d'Ivoire is Africa's largest cocoa producer."
  },
  {
    "q": "The national anthem currently in use in Nigeria begins with:",
    "options": [
      "Nigeria, We Hail Thee",
      "Arise, O Compatriots",
      "Great Nation, Great People",
      "Unity and Faith"
    ],
    "ans": "Nigeria, We Hail Thee",
    "explanation": "Nigeria's current national anthem, reinstated in May 2024, is 'Nigeria, We Hail Thee'."
  },
  {
    "q": "The longest-serving military Head of State in Nigeria was:",
    "options": [
      "Yakubu Gowon",
      "General Ibrahim Babangida",
      "General Sani Abacha",
      "General Muhammadu Buhari"
    ],
    "ans": "Yakubu Gowon",
    "explanation": "Yakubu Gowon ruled for about 9 years (1966-1975), longer than any other Nigerian military head of state."
  },
  {
    "q": "Which of the following is not a member of ECOWAS?",
    "options": [
      "Ghana",
      "Senegal",
      "Liberia",
      "Cameroon"
    ],
    "ans": "Cameroon",
    "explanation": "Cameroon is not a member of ECOWAS."
  },
  {
    "q": "The first woman to become a professor in Nigeria was:",
    "options": [
      "Dora Akunyili",
      "Grace Alele-Williams",
      "Ngozi Okonjo-Iweala",
      "Oby Ezekwesili"
    ],
    "ans": "Grace Alele-Williams",
    "explanation": "Grace Alele-Williams became Nigeria's first female professor."
  },
  {
    "q": "Which of the following is the largest lake in Africa?",
    "options": [
      "Lake Tanganyika",
      "Lake Victoria",
      "Lake Chad",
      "Lake Malawi"
    ],
    "ans": "Lake Victoria",
    "explanation": "Lake Victoria is the largest lake in Africa."
  },
  {
    "q": "The Nigerian currency is printed by the:",
    "options": [
      "Central Bank of Nigeria",
      "Nigerian Security Printing and Minting Plc",
      "Federal Ministry of Finance",
      "Nigerian Customs Service"
    ],
    "ans": "Nigerian Security Printing and Minting Plc",
    "explanation": "The Nigerian Security Printing and Minting Plc prints the naira."
  },
  {
    "q": "The first Nigerian university is:",
    "options": [
      "University of Ibadan",
      "University of Lagos",
      "Obafemi Awolowo University",
      "Ahmadu Bello University"
    ],
    "ans": "University of Ibadan",
    "explanation": "The University of Ibadan is Nigeria's first university."
  },
  {
    "q": "Which of the following is the largest island in the world?",
    "options": [
      "Madagascar",
      "Borneo",
      "Greenland",
      "New Guinea"
    ],
    "ans": "Greenland",
    "explanation": "Greenland is the world's largest island."
  },
  {
    "q": "The headquarters of the International Court of Justice is in:",
    "options": [
      "Geneva",
      "Brussels",
      "The Hague",
      "Vienna"
    ],
    "ans": "The Hague",
    "explanation": "The International Court of Justice is headquartered in The Hague."
  },
  {
    "q": "Which of the following is not one of the three arms of government?",
    "options": [
      "Executive",
      "Legislature",
      "Judiciary",
      "Electoral"
    ],
    "ans": "Electoral",
    "explanation": "Electoral is not one of the three arms of government (Executive, Legislature, Judiciary)."
  },
  {
    "q": "The first Nigerian to win the Nobel Prize was:",
    "options": [
      "Chinua Achebe",
      "Wole Soyinka",
      "Ben Okri",
      "Cyprian Ekwensi"
    ],
    "ans": "Wole Soyinka",
    "explanation": "Wole Soyinka was the first Nigerian to win a Nobel Prize (Literature, 1986)."
  },
  {
    "q": "Which of the following countries is completely surrounded by South Africa?",
    "options": [
      "Botswana",
      "Eswatini",
      "Lesotho",
      "Namibia"
    ],
    "ans": "Lesotho",
    "explanation": "Lesotho is completely surrounded by South Africa."
  },
  {
    "q": "The official residence of the Governor of Ogun State is located in:",
    "options": [
      "Sagamu",
      "Abeokuta",
      "Ijebu-Ode",
      "Ota"
    ],
    "ans": "Abeokuta",
    "explanation": "The Ogun State Governor's residence is in Abeokuta."
  },
  {
    "q": "The headquarters of the Nigerian National Petroleum Company Limited (NNPCL) is in:",
    "options": [
      "Port Harcourt",
      "Abuja",
      "Warri",
      "Lagos"
    ],
    "ans": "Abuja",
    "explanation": "The NNPCL is headquartered in Abuja."
  },
  {
    "q": "Which of the following is the smallest planet in the Solar System?",
    "options": [
      "Mercury",
      "Mars",
      "Venus",
      "Pluto"
    ],
    "ans": "Mercury",
    "explanation": "Mercury is the smallest planet in the Solar System."
  },
  {
    "q": "The longest bridge in Nigeria is:",
    "options": [
      "Third Mainland Bridge",
      "Fourth Mainland Bridge",
      "River Niger Bridge",
      "Carter Bridge"
    ],
    "ans": "Third Mainland Bridge",
    "explanation": "The Third Mainland Bridge is the longest bridge in Nigeria."
  },
  {
    "q": "Which of the following is not a renewable natural resource?",
    "options": [
      "Forest",
      "Water",
      "Wind",
      "Petroleum"
    ],
    "ans": "Petroleum",
    "explanation": "Petroleum is a non-renewable resource."
  },
  {
    "q": "The first Executive Governor of Ogun State was:",
    "options": [
      "Olusegun Osoba",
      "Chief Olabisi Onabanjo",
      "Gbenga Daniel",
      "Ibikunle Amosun"
    ],
    "ans": "Chief Olabisi Onabanjo",
    "explanation": "Chief Olabisi Onabanjo was Ogun State's first Executive Governor."
  },
  {
    "q": "Which of the following countries is known as the \"Land of the Rising Sun\"?",
    "options": [
      "China",
      "Japan",
      "South Korea",
      "Thailand"
    ],
    "ans": "Japan",
    "explanation": "Japan is known as the Land of the Rising Sun."
  },
  {
    "q": "The first Nigerian female Vice-Chancellor was:",
    "options": [
      "Dora Akunyili",
      "Grace Alele-Williams",
      "Ngozi Okonjo-Iweala",
      "Oby Ezekwesili"
    ],
    "ans": "Grace Alele-Williams",
    "explanation": "Grace Alele-Williams was Nigeria's first female Vice-Chancellor."
  },
  {
    "q": "Which of the following is the headquarters of the Economic Community of West African States (ECOWAS)?",
    "options": [
      "Abuja",
      "Accra",
      "Lagos",
      "Dakar"
    ],
    "ans": "Abuja",
    "explanation": "ECOWAS headquarters is in Abuja."
  },
  {
    "q": "Which of the following is the official language of Nigeria?",
    "options": [
      "Hausa",
      "Yoruba",
      "Igbo",
      "English"
    ],
    "ans": "English",
    "explanation": "English is Nigeria's official language."
  },
  {
    "q": "The largest producer of crude oil in Africa is:",
    "options": [
      "Nigeria",
      "Algeria",
      "Libya",
      "Angola"
    ],
    "ans": "Nigeria",
    "explanation": "Nigeria is Africa's largest crude oil producer."
  },
  {
    "q": "Which of the following is the smallest state in Nigeria by land area?",
    "options": [
      "Anambra",
      "Lagos",
      "Imo",
      "Abia"
    ],
    "ans": "Lagos",
    "explanation": "Lagos is Nigeria's smallest state by land area."
  },
  {
    "q": "The Nigerian National Assembly consists of:",
    "options": [
      "House of Representatives only",
      "Senate only",
      "Senate and House of Representatives",
      "Senate, House of Representatives and State Assemblies"
    ],
    "ans": "Senate and House of Representatives",
    "explanation": "The National Assembly comprises the Senate and House of Representatives."
  },
  {
    "q": "The study of earthquakes is known as:",
    "options": [
      "Geography",
      "Meteorology",
      "Seismology",
      "Geology"
    ],
    "ans": "Seismology",
    "explanation": "Seismology is the study of earthquakes."
  },
  {
    "q": "Which of the following is not a primary colour?",
    "options": [
      "Red",
      "Blue",
      "Yellow",
      "Green"
    ],
    "ans": "Green",
    "explanation": "Green is not a primary colour (red, blue, yellow are)."
  },
  {
    "q": "The Commonwealth of Nations was formerly known as the:",
    "options": [
      "Allied Nations",
      "British Commonwealth",
      "Colonial Union",
      "British Empire"
    ],
    "ans": "British Empire",
    "explanation": "The Commonwealth of Nations was formerly the British Empire."
  },
  {
    "q": "Which of the following is the hardest naturally occurring substance?",
    "options": [
      "Gold",
      "Iron",
      "Diamond",
      "Quartz"
    ],
    "ans": "Diamond",
    "explanation": "Diamond is the hardest naturally occurring substance."
  },
  {
    "q": "Which Nigerian state is known as the \"Centre of Excellence\"?",
    "options": [
      "Lagos State",
      "Ogun State",
      "Rivers State",
      "Oyo State"
    ],
    "ans": "Lagos State",
    "explanation": "Lagos State is known as the Centre of Excellence."
  },
  {
    "q": "The headquarters of the Nigerian Stock Exchange is located in:",
    "options": [
      "Lagos",
      "Abuja",
      "Kano",
      "Port Harcourt"
    ],
    "ans": "Lagos",
    "explanation": "The Nigerian Stock Exchange is headquartered in Lagos."
  },
  {
    "q": "Which of the following is the largest internal organ in the human body?",
    "options": [
      "Heart",
      "Liver",
      "Kidney",
      "Lung"
    ],
    "ans": "Liver",
    "explanation": "The liver is the largest internal organ."
  },
  {
    "q": "The first capital of Nigeria was:",
    "options": [
      "Lagos",
      "Abuja",
      "Calabar",
      "Ibadan"
    ],
    "ans": "Lagos",
    "explanation": "Lagos was Nigeria's first capital."
  },
  {
    "q": "Which of the following is the main function of red blood cells?",
    "options": [
      "Fight infections",
      "Transport oxygen",
      "Produce hormones",
      "Aid digestion"
    ],
    "ans": "Transport oxygen",
    "explanation": "Red blood cells mainly transport oxygen."
  },
  {
    "q": "The international organization responsible for global aviation is:",
    "options": [
      "WHO",
      "UNESCO",
      "ICAO",
      "FIFA"
    ],
    "ans": "ICAO",
    "explanation": "ICAO oversees global aviation."
  },
  {
    "q": "Which of the following is the capital city of Australia?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    "ans": "Canberra",
    "explanation": "Canberra is Australia's capital."
  },
  {
    "q": "The largest mammal in the world is the:",
    "options": [
      "Elephant",
      "Hippopotamus",
      "Blue Whale",
      "Giraffe"
    ],
    "ans": "Blue Whale",
    "explanation": "The blue whale is the largest mammal."
  },
  {
    "q": "Which of the following is the chemical symbol for gold?",
    "options": [
      "Ag",
      "Au",
      "Gd",
      "Go"
    ],
    "ans": "Au",
    "explanation": "Gold's chemical symbol is Au."
  },
  {
    "q": "The body responsible for conducting elections in Nigeria is:",
    "options": [
      "EFCC",
      "ICPC",
      "INEC",
      "NPC"
    ],
    "ans": "INEC",
    "explanation": "INEC conducts elections in Nigeria."
  },
  {
    "q": "Which of the following is the fastest land animal?",
    "options": [
      "Lion",
      "Leopard",
      "Cheetah",
      "Tiger"
    ],
    "ans": "Cheetah",
    "explanation": "The cheetah is the fastest land animal."
  },
  {
    "q": "The headquarters of the World Bank is located in:",
    "options": [
      "Geneva",
      "London",
      "Washington, D.C.",
      "New York"
    ],
    "ans": "Washington, D.C.",
    "explanation": "The World Bank is headquartered in Washington, D.C."
  },
  {
    "q": "Which of the following countries is not a member of the African Union?",
    "options": [
      "Kenya",
      "Ghana",
      "Morocco",
      "Spain"
    ],
    "ans": "Spain",
    "explanation": "Spain is not a member of the African Union (it's not an African country)."
  },
  {
    "q": "The first Nigerian to become President of the International Court of Justice was:",
    "options": [
      "Taslim Elias",
      "Bola Ajibola",
      "Mohammed Uwais",
      "Walter Onnoghen"
    ],
    "ans": "Taslim Elias",
    "explanation": "Taslim Elias was the first Nigerian President of the International Court of Justice."
  },
  {
    "q": "Which Nigerian city is popularly referred to as the \"Coal City\"?",
    "options": [
      "Enugu",
      "Jos",
      "Enugu",
      "Makurdi"
    ],
    "ans": "Enugu",
    "explanation": "Enugu is popularly known as the Coal City."
  },
  {
    "q": "The first African country to gain independence was:",
    "options": [
      "Nigeria",
      "Ghana",
      "Liberia",
      "Ethiopia"
    ],
    "ans": "Ghana",
    "explanation": "Ghana was the first African country to gain independence (1957)."
  },
  {
    "q": "Which of the following is the largest producer of coffee in the world?",
    "options": [
      "Colombia",
      "Brazil",
      "Vietnam",
      "Ethiopia"
    ],
    "ans": "Brazil",
    "explanation": "Brazil is the world's largest coffee producer."
  },
  {
    "q": "The SI unit of electric current is:",
    "options": [
      "Volt",
      "Ohm",
      "Ampere",
      "Watt"
    ],
    "ans": "Ampere",
    "explanation": "The ampere is the SI unit of electric current."
  },
  {
    "q": "Which of the following is the capital of Kwara State?",
    "options": [
      "Offa",
      "Omu-Aran",
      "Ilorin",
      "Jebba"
    ],
    "ans": "Ilorin",
    "explanation": "Ilorin is the capital of Kwara State."
  },
  {
    "q": "The first Nigerian university established by an Act of Parliament was:",
    "options": [
      "University of Ibadan",
      "University of Nigeria, Nsukka",
      "Ahmadu Bello University",
      "University of Lagos"
    ],
    "ans": "University of Nigeria, Nsukka",
    "explanation": "University of Nigeria, Nsukka was the first Nigerian-established university by Act of Parliament."
  },
  {
    "q": "Which of the following animals is a reptile?",
    "options": [
      "Bat",
      "Whale",
      "Crocodile",
      "Dolphin"
    ],
    "ans": "Crocodile",
    "explanation": "The crocodile is a reptile."
  },
  {
    "q": "The Nigerian Police Force was established in:",
    "options": [
      "1910",
      "1930",
      "1945",
      "1960"
    ],
    "ans": "1930",
    "explanation": "The Nigerian Police Force was formally established in 1930."
  },
  {
    "q": "Which of the following is the largest continent by population?",
    "options": [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    "ans": "Asia",
    "explanation": "Asia is the most populous continent."
  },
  {
    "q": "The headquarters of FIFA is located in:",
    "options": [
      "Paris",
      "London",
      "Zürich, Switzerland",
      "Geneva"
    ],
    "ans": "Zürich, Switzerland",
    "explanation": "FIFA is headquartered in Zürich, Switzerland."
  },
  {
    "q": "Which of the following is the capital of Cross River State?",
    "options": [
      "Uyo",
      "Calabar",
      "Ikom",
      "Ogoja"
    ],
    "ans": "Calabar",
    "explanation": "Calabar is the capital of Cross River State."
  },
  {
    "q": "The first military coup in Nigeria took place in:",
    "options": [
      "1963",
      "1966",
      "1967",
      "1975"
    ],
    "ans": "1966",
    "explanation": "Nigeria's first military coup took place in 1966."
  },
  {
    "q": "Which of the following is not a greenhouse gas?",
    "options": [
      "Carbon dioxide",
      "Methane",
      "Nitrous oxide",
      "Nitrogen"
    ],
    "ans": "Nitrogen",
    "explanation": "Nitrogen (N2) is not a greenhouse gas."
  },
  {
    "q": "Which of the following is the largest ethnic group in Nigeria?",
    "options": [
      "Igbo",
      "Yoruba",
      "Hausa-Fulani",
      "Tiv"
    ],
    "ans": "Hausa-Fulani",
    "explanation": "Hausa-Fulani is Nigeria's largest ethnic group."
  },
  {
    "q": "The headquarters of the Nigerian Communications Commission (NCC) is located in:",
    "options": [
      "Abuja",
      "Lagos",
      "Kano",
      "Port Harcourt"
    ],
    "ans": "Abuja",
    "explanation": "The NCC is headquartered in Abuja."
  },
  {
    "q": "Which of the following is the world's largest rainforest?",
    "options": [
      "Congo Rainforest",
      "Amazon Rainforest",
      "Daintree Rainforest",
      "Sundarbans"
    ],
    "ans": "Amazon Rainforest",
    "explanation": "The Amazon Rainforest is the world's largest rainforest."
  },
  {
    "q": "The capital of Ekiti State is:",
    "options": [
      "Ikere-Ekiti",
      "Ado-Ekiti",
      "Ilawe-Ekiti",
      "Ijero-Ekiti"
    ],
    "ans": "Ado-Ekiti",
    "explanation": "Ado-Ekiti is the capital of Ekiti State."
  },
  {
    "q": "Which of the following is not a member of the Commonwealth of Nations?",
    "options": [
      "Canada",
      "Australia",
      "France",
      "India"
    ],
    "ans": "France",
    "explanation": "France is not a member of the Commonwealth of Nations."
  },
  {
    "q": "The instrument used to measure wind speed is called:",
    "options": [
      "Barometer",
      "Hygrometer",
      "Anemometer",
      "Thermometer"
    ],
    "ans": "Anemometer",
    "explanation": "An anemometer measures wind speed."
  },
  {
    "q": "Which of the following is the largest organ of the United Nations?",
    "options": [
      "General Assembly",
      "Security Council",
      "International Court of Justice",
      "Secretariat"
    ],
    "ans": "General Assembly",
    "explanation": "The General Assembly is the largest organ of the UN."
  },
  {
    "q": "Which of the following countries has the largest population in Africa?",
    "options": [
      "Nigeria",
      "Egypt",
      "Ethiopia",
      "South Africa"
    ],
    "ans": "Nigeria",
    "explanation": "Nigeria has the largest population in Africa."
  },
  {
    "q": "The first Executive Governor of Lagos State was:",
    "options": [
      "Lateef Jakande",
      "Alhaji Lateef Jakande",
      "Bola Tinubu",
      "Mobolaji Johnson"
    ],
    "ans": "Lateef Jakande",
    "explanation": "Alhaji Lateef Jakande was Lagos State's first Executive Governor."
  },
  {
    "q": "Which of the following is the capital of Niger State?",
    "options": [
      "Bida",
      "Minna",
      "Suleja",
      "Kontagora"
    ],
    "ans": "Minna",
    "explanation": "Minna is the capital of Niger State."
  },
  {
    "q": "Which of the following is the smallest bird in the world?",
    "options": [
      "Sparrow",
      "Hummingbird",
      "Pigeon",
      "Parrot"
    ],
    "ans": "Hummingbird",
    "explanation": "The hummingbird is the smallest bird."
  },
  {
    "q": "The headquarters of the International Monetary Fund (IMF) is located in:",
    "options": [
      "New York",
      "Geneva",
      "Washington, D.C.",
      "Paris"
    ],
    "ans": "Washington, D.C.",
    "explanation": "The IMF is headquartered in Washington, D.C."
  },
  {
    "q": "Which Nigerian state is known as the \"Treasure Base of the Nation\"?",
    "options": [
      "Delta",
      "Rivers",
      "Bayelsa",
      "Akwa Ibom"
    ],
    "ans": "Rivers",
    "explanation": "Rivers State is known as the Treasure Base of the Nation."
  },
  {
    "q": "Which of the following is the capital of Taraba State?",
    "options": [
      "Wukari",
      "Jalingo",
      "Bali",
      "Gembu"
    ],
    "ans": "Jalingo",
    "explanation": "Jalingo is the capital of Taraba State."
  },
  {
    "q": "The headquarters of the Nigerian Bar Association (NBA) is located in:",
    "options": [
      "Abuja",
      "Lagos",
      "Ibadan",
      "Benin City"
    ],
    "ans": "Lagos",
    "explanation": "The Nigerian Bar Association is headquartered in Lagos."
  },
  {
    "q": "Which of the following is the largest freshwater lake in Africa?",
    "options": [
      "Lake Chad",
      "Lake Victoria",
      "Lake Tanganyika",
      "Lake Malawi"
    ],
    "ans": "Lake Victoria",
    "explanation": "Lake Victoria is Africa's largest freshwater lake."
  },
  {
    "q": "The process by which green plants manufacture their food is known as:",
    "options": [
      "Respiration",
      "Transpiration",
      "Photosynthesis",
      "Germination"
    ],
    "ans": "Photosynthesis",
    "explanation": "Photosynthesis is how green plants manufacture food."
  },
  {
    "q": "Which of the following countries is called the \"Land of a Thousand Hills\"?",
    "options": [
      "Kenya",
      "Uganda",
      "Rwanda",
      "Tanzania"
    ],
    "ans": "Rwanda",
    "explanation": "Rwanda is called the Land of a Thousand Hills."
  },
  {
    "q": "Which of the following is the capital city of Osun State?",
    "options": [
      "Ilesa",
      "Ede",
      "Osogbo",
      "Ife"
    ],
    "ans": "Osogbo",
    "explanation": "Osogbo is the capital of Osun State."
  },
  {
    "q": "The Nobel Peace Prize is awarded in:",
    "options": [
      "Sweden",
      "Norway",
      "Denmark",
      "Finland"
    ],
    "ans": "Norway",
    "explanation": "The Nobel Peace Prize is awarded in Norway."
  },
  {
    "q": "Which of the following is the smallest continent by land area?",
    "options": [
      "Europe",
      "Antarctica",
      "Australia",
      "South America"
    ],
    "ans": "Australia",
    "explanation": "Australia is the smallest continent by land area."
  },
  {
    "q": "Which of the following is the chemical symbol for silver?",
    "options": [
      "Ag",
      "Au",
      "Si",
      "Sr"
    ],
    "ans": "Ag",
    "explanation": "Silver's chemical symbol is Ag."
  },
  {
    "q": "Which of the following is the headquarters of the International Labour Organization (ILO)?",
    "options": [
      "New York",
      "Geneva",
      "Paris",
      "Brussels"
    ],
    "ans": "Geneva",
    "explanation": "The ILO is headquartered in Geneva."
  },
  {
    "q": "Which Nigerian state is known as the \"Land of Honour and Integrity\"?",
    "options": [
      "Ondo",
      "Ekiti",
      "Osun",
      "Kogi"
    ],
    "ans": "Ondo",
    "explanation": "Ondo State is known as the Land of Honour and Integrity."
  },
  {
    "q": "Which of the following is the capital of Gombe State?",
    "options": [
      "Kaltungo",
      "Billiri",
      "Gombe",
      "Bajoga"
    ],
    "ans": "Gombe",
    "explanation": "Gombe is the capital of Gombe State."
  },
  {
    "q": "The SI unit of force is:",
    "options": [
      "Joule",
      "Watt",
      "Newton",
      "Pascal"
    ],
    "ans": "Newton",
    "explanation": "The newton is the SI unit of force."
  },
  {
    "q": "Which of the following is the largest producer of palm oil in the world?",
    "options": [
      "Nigeria",
      "Indonesia",
      "Malaysia",
      "Thailand"
    ],
    "ans": "Indonesia",
    "explanation": "Indonesia is the world's largest palm oil producer."
  },
  {
    "q": "Which of the following is the official residence of the Secretary-General of the United Nations?",
    "options": [
      "Geneva",
      "Paris",
      "New York",
      "Vienna"
    ],
    "ans": "New York",
    "explanation": "The UN Secretary-General's official residence is in New York."
  },
  {
    "q": "Which of the following is the capital of Nasarawa State?",
    "options": [
      "Keffi",
      "Akwanga",
      "Lafia",
      "Doma"
    ],
    "ans": "Lafia",
    "explanation": "Lafia is the capital of Nasarawa State."
  },
  {
    "q": "The headquarters of INTERPOL is located in:",
    "options": [
      "Paris",
      "Lyon, France",
      "Brussels",
      "Geneva"
    ],
    "ans": "Lyon, France",
    "explanation": "INTERPOL is headquartered in Lyon, France."
  },
  {
    "q": "Which of the following is the fastest bird in the world?",
    "options": [
      "Eagle",
      "Peregrine Falcon",
      "Hawk",
      "Ostrich"
    ],
    "ans": "Peregrine Falcon",
    "explanation": "The Peregrine Falcon is the fastest bird."
  },
  {
    "q": "Which of the following is the largest volcano in Africa?",
    "options": [
      "Mount Kenya",
      "Mount Elgon",
      "Mount Kilimanjaro",
      "Mount Meru"
    ],
    "ans": "Mount Kilimanjaro",
    "explanation": "Mount Kilimanjaro is Africa's largest volcano."
  },
  {
    "q": "The currency used in South Africa is:",
    "options": [
      "Dollar",
      "Shilling",
      "Rand",
      "Franc"
    ],
    "ans": "Rand",
    "explanation": "South Africa's currency is the Rand."
  },
  {
    "q": "Which of the following is the capital city of Kogi State?",
    "options": [
      "Okene",
      "Kabba",
      "Lokoja",
      "Idah"
    ],
    "ans": "Lokoja",
    "explanation": "Lokoja is the capital of Kogi State."
  },
  {
    "q": "Which of the following is the largest ocean trench in the world?",
    "options": [
      "Java Trench",
      "Tonga Trench",
      "Mariana Trench",
      "Peru-Chile Trench"
    ],
    "ans": "Mariana Trench",
    "explanation": "The Mariana Trench is the largest/deepest ocean trench."
  },
  {
    "q": "Which of the following is the headquarters of the United Nations Children's Fund (UNICEF)?",
    "options": [
      "Geneva",
      "Paris",
      "New York",
      "Vienna"
    ],
    "ans": "New York",
    "explanation": "UNICEF is headquartered in New York."
  },
  {
    "q": "Which Nigerian state is known as the \"Food Basket of the Nation\"?",
    "options": [
      "Kaduna",
      "Benue",
      "Plateau",
      "Niger"
    ],
    "ans": "Benue",
    "explanation": "Benue State is known as the Food Basket of the Nation."
  },
  {
    "q": "Which of the following is the capital of Adamawa State?",
    "options": [
      "Mubi",
      "Yola",
      "Numan",
      "Ganye"
    ],
    "ans": "Yola",
    "explanation": "Yola is the capital of Adamawa State."
  },
  {
    "q": "The headquarters of the International Atomic Energy Agency (IAEA) is located in:",
    "options": [
      "Geneva",
      "Paris",
      "Vienna",
      "Brussels"
    ],
    "ans": "Vienna",
    "explanation": "The IAEA is headquartered in Vienna."
  },
  {
    "q": "Which of the following is the largest island in Africa?",
    "options": [
      "Madagascar",
      "Zanzibar",
      "Bioko",
      "Seychelles"
    ],
    "ans": "Madagascar",
    "explanation": "Madagascar is the largest island in Africa."
  },
  {
    "q": "The SI unit of power is:",
    "options": [
      "Joule",
      "Newton",
      "Watt",
      "Pascal"
    ],
    "ans": "Watt",
    "explanation": "The watt is the SI unit of power."
  },
  {
    "q": "Which of the following is the capital of Bauchi State?",
    "options": [
      "Azare",
      "Misau",
      "Bauchi",
      "Jama'are"
    ],
    "ans": "Bauchi",
    "explanation": "Bauchi is the capital of Bauchi State."
  },
  {
    "q": "Which African country was formerly known as Abyssinia?",
    "options": [
      "Eritrea",
      "Ethiopia",
      "Somalia",
      "Sudan"
    ],
    "ans": "Ethiopia",
    "explanation": "Ethiopia was formerly known as Abyssinia."
  },
  {
    "q": "The headquarters of the World Trade Organization (WTO) is located in:",
    "options": [
      "New York",
      "Geneva",
      "Paris",
      "Brussels"
    ],
    "ans": "Geneva",
    "explanation": "The WTO is headquartered in Geneva."
  },
  {
    "q": "Which of the following is the largest gland in the human body?",
    "options": [
      "Pancreas",
      "Liver",
      "Thyroid",
      "Pituitary"
    ],
    "ans": "Liver",
    "explanation": "The liver is the largest gland in the human body."
  },
  {
    "q": "The first Nigerian to become Chief Justice of Nigeria was:",
    "options": [
      "Teslim Elias",
      "Sir Adetokunbo Ademola",
      "Mohammed Bello",
      "Alfa Belgore"
    ],
    "ans": "Sir Adetokunbo Ademola",
    "explanation": "Sir Adetokunbo Ademola was Nigeria's first indigenous Chief Justice."
  },
  {
    "q": "Which of the following is the capital of Zamfara State?",
    "options": [
      "Kaura Namoda",
      "Talata Mafara",
      "Gusau",
      "Anka"
    ],
    "ans": "Gusau",
    "explanation": "Gusau is the capital of Zamfara State."
  },
  {
    "q": "The chemical symbol for iron is:",
    "options": [
      "Ir",
      "Fe",
      "In",
      "Fi"
    ],
    "ans": "Fe",
    "explanation": "Iron's chemical symbol is Fe."
  },
  {
    "q": "Which of the following is the largest country in Africa by land area?",
    "options": [
      "Nigeria",
      "Sudan",
      "Algeria",
      "Democratic Republic of the Congo"
    ],
    "ans": "Algeria",
    "explanation": "Algeria is Africa's largest country by land area."
  },
  {
    "q": "Which of the following is the official residence of the Governor of the Central Bank of Nigeria?",
    "options": [
      "CBN House, Lagos",
      "Abuja",
      "Minna",
      "Kaduna"
    ],
    "ans": "Abuja",
    "explanation": "The CBN Governor's official residence is in Abuja."
  },
  {
    "q": "The headquarters of the Nigerian Television Authority (NTA) is located in:",
    "options": [
      "Lagos",
      "Abuja",
      "Ibadan",
      "Enugu"
    ],
    "ans": "Abuja",
    "explanation": "The NTA is headquartered in Abuja."
  },
  {
    "q": "Which of the following is the capital city of Ebonyi State?",
    "options": [
      "Afikpo",
      "Abakaliki",
      "Onueke",
      "Ikwo"
    ],
    "ans": "Abakaliki",
    "explanation": "Abakaliki is the capital of Ebonyi State."
  },
  {
    "q": "Which of the following gases is essential for human respiration?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Hydrogen",
      "Helium"
    ],
    "ans": "Oxygen",
    "explanation": "Oxygen is essential for human respiration."
  },
  {
    "q": "Which Nigerian state is known as the \"Salt of the Nation\"?",
    "options": [
      "Sokoto",
      "Kano",
      "Ebonyi",
      "Kebbi"
    ],
    "ans": "Ebonyi",
    "explanation": "Ebonyi State is known as the Salt of the Nation."
  },
  {
    "q": "Which of the following is the headquarters of the Nigerian Ports Authority (NPA)?",
    "options": [
      "Lagos",
      "Abuja",
      "Warri",
      "Calabar"
    ],
    "ans": "Lagos",
    "explanation": "The Nigerian Ports Authority is headquartered in Lagos."
  },
  {
    "q": "The largest planet in the Solar System is:",
    "options": [
      "Saturn",
      "Earth",
      "Jupiter",
      "Uranus"
    ],
    "ans": "Jupiter",
    "explanation": "Jupiter is the largest planet in the Solar System."
  },
  {
    "q": "Which of the following is the capital of Bayelsa State?",
    "options": [
      "Brass",
      "Yenagoa",
      "Ogbia",
      "Sagbama"
    ],
    "ans": "Yenagoa",
    "explanation": "Yenagoa is the capital of Bayelsa State."
  },
  {
    "q": "The first African Secretary-General of the United Nations was:",
    "options": [
      "Kofi Annan",
      "Boutros Boutros-Ghali",
      "Salim Ahmed Salim",
      "Javier Pérez de Cuéllar"
    ],
    "ans": "Boutros Boutros-Ghali",
    "explanation": "Boutros Boutros-Ghali of Egypt was the first African UN Secretary-General."
  },
  {
    "q": "Which of the following is the largest bird in the world?",
    "options": [
      "Eagle",
      "Albatross",
      "Ostrich",
      "Falcon"
    ],
    "ans": "Ostrich",
    "explanation": "The ostrich is the largest bird in the world."
  },
  {
    "q": "Which of the following is the capital of Jigawa State?",
    "options": [
      "Hadejia",
      "Dutse",
      "Gumel",
      "Birnin Kudu"
    ],
    "ans": "Dutse",
    "explanation": "Dutse is the capital of Jigawa State."
  },
  {
    "q": "Which of the following is the smallest bone in the human body?",
    "options": [
      "Femur",
      "Tibia",
      "Stapes",
      "Fibula"
    ],
    "ans": "Stapes",
    "explanation": "The stapes, in the ear, is the smallest bone in the human body."
  },
  {
    "q": "Which of the following countries is called the \"Land of the Midnight Sun\"?",
    "options": [
      "Sweden",
      "Norway",
      "Finland",
      "Iceland"
    ],
    "ans": "Norway",
    "explanation": "Norway is known as the Land of the Midnight Sun."
  },
  {
    "q": "Which of the following is the capital city of Yobe State?",
    "options": [
      "Potiskum",
      "Nguru",
      "Damaturu",
      "Gashua"
    ],
    "ans": "Damaturu",
    "explanation": "Damaturu is the capital of Yobe State."
  },
  {
    "q": "The headquarters of the International Committee of the Red Cross (ICRC) is located in:",
    "options": [
      "Geneva",
      "New York",
      "Vienna",
      "Brussels"
    ],
    "ans": "Geneva",
    "explanation": "The ICRC is headquartered in Geneva."
  },
  {
    "q": "Which of the following is the largest species of cat in the world?",
    "options": [
      "Lion",
      "Leopard",
      "Tiger",
      "Cheetah"
    ],
    "ans": "Tiger",
    "explanation": "The tiger is the largest species of cat."
  },
  {
    "q": "Which of the following is the capital of Borno State?",
    "options": [
      "Biu",
      "Monguno",
      "Maiduguri",
      "Gwoza"
    ],
    "ans": "Maiduguri",
    "explanation": "Maiduguri is the capital of Borno State."
  },
  {
    "q": "The headquarters of the International Telecommunication Union (ITU) is located in:",
    "options": [
      "New York",
      "Geneva",
      "Paris",
      "Vienna"
    ],
    "ans": "Geneva",
    "explanation": "The ITU is headquartered in Geneva."
  },
  {
    "q": "Which of the following is the largest peninsula in the world?",
    "options": [
      "Iberian Peninsula",
      "Arabian Peninsula",
      "Arabian Peninsula",
      "Balkan Peninsula"
    ],
    "ans": "Arabian Peninsula",
    "explanation": "The Arabian Peninsula is the world's largest peninsula."
  },
  {
    "q": "The currency of China is:",
    "options": [
      "Yen",
      "Won",
      "Yuan (Renminbi)",
      "Baht"
    ],
    "ans": "Yuan (Renminbi)",
    "explanation": "China's currency is the Yuan (Renminbi)."
  },
  {
    "q": "Which of the following is the capital of Akwa Ibom State?",
    "options": [
      "Ikot Ekpene",
      "Eket",
      "Uyo",
      "Oron"
    ],
    "ans": "Uyo",
    "explanation": "Uyo is the capital of Akwa Ibom State."
  },
  {
    "q": "The instrument used to measure earthquakes is called a:",
    "options": [
      "Thermometer",
      "Barometer",
      "Seismograph",
      "Anemometer"
    ],
    "ans": "Seismograph",
    "explanation": "A seismograph measures earthquakes."
  },
  {
    "q": "Which of the following is the largest desert in Africa?",
    "options": [
      "Kalahari Desert",
      "Sahara Desert",
      "Namib Desert",
      "Libyan Desert"
    ],
    "ans": "Sahara Desert",
    "explanation": "The Sahara is Africa's largest desert."
  },
  {
    "q": "Which of the following is the capital city of Katsina State?",
    "options": [
      "Daura",
      "Funtua",
      "Katsina",
      "Malumfashi"
    ],
    "ans": "Katsina",
    "explanation": "Katsina is the capital of Katsina State."
  },
  {
    "q": "The headquarters of the Organization of Petroleum Exporting Countries (OPEC) is located in:",
    "options": [
      "Riyadh",
      "Vienna",
      "Geneva",
      "Abu Dhabi"
    ],
    "ans": "Vienna",
    "explanation": "OPEC is headquartered in Vienna."
  },
  {
    "q": "Which of the following is the largest producer of natural rubber in the world?",
    "options": [
      "Indonesia",
      "Thailand",
      "Malaysia",
      "Vietnam"
    ],
    "ans": "Thailand",
    "explanation": "Thailand is the world's largest producer of natural rubber."
  },
  {
    "q": "Which of the following is the capital of Sokoto State?",
    "options": [
      "Tambuwal",
      "Wurno",
      "Sokoto",
      "Gwadabawa"
    ],
    "ans": "Sokoto",
    "explanation": "Sokoto is the capital of Sokoto State."
  },
  {
    "q": "The first Nigerian to become President of the United Nations General Assembly was:",
    "options": [
      "Emeka Anyaoku",
      "Joseph Nanven Garba",
      "Ibrahim Gambari",
      "Joy Ogwu"
    ],
    "ans": "Joseph Nanven Garba",
    "explanation": "Joseph Nanven Garba was the first Nigerian President of the UN General Assembly."
  },
  {
    "q": "Which of the following is the longest mountain range in the world?",
    "options": [
      "Rocky Mountains",
      "Andes Mountains",
      "Himalayas",
      "Alps"
    ],
    "ans": "Andes Mountains",
    "explanation": "The Andes is the world's longest mountain range."
  },
  {
    "q": "Which of the following is the capital of Plateau State?",
    "options": [
      "Pankshin",
      "Shendam",
      "Jos",
      "Bukuru"
    ],
    "ans": "Jos",
    "explanation": "Jos is the capital of Plateau State."
  },
  {
    "q": "The headquarters of the Food and Agriculture Organization (FAO) is located in:",
    "options": [
      "Geneva",
      "Paris",
      "Rome",
      "Vienna"
    ],
    "ans": "Rome",
    "explanation": "The FAO is headquartered in Rome."
  },
  {
    "q": "Which of the following is the smallest continent by population?",
    "options": [
      "Europe",
      "South America",
      "Australia",
      "Antarctica"
    ],
    "ans": "Antarctica",
    "explanation": "Antarctica has essentially no permanent population, making it smallest by population."
  },
  {
    "q": "Which of the following is the capital of Kebbi State?",
    "options": [
      "Yauri",
      "Argungu",
      "Birnin Kebbi",
      "Zuru"
    ],
    "ans": "Birnin Kebbi",
    "explanation": "Birnin Kebbi is the capital of Kebbi State."
  },
  {
    "q": "The chemical symbol for potassium is:",
    "options": [
      "P",
      "Pt",
      "K",
      "Po"
    ],
    "ans": "K",
    "explanation": "Potassium's chemical symbol is K."
  },
  {
    "q": "Which of the following is the largest producer of cocoa in the world?",
    "options": [
      "Côte d'Ivoire",
      "Ghana",
      "Nigeria",
      "Cameroon"
    ],
    "ans": "Côte d'Ivoire",
    "explanation": "Côte d'Ivoire is the world's largest cocoa producer."
  },
  {
    "q": "Which of the following is the capital city of Kaduna State?",
    "options": [
      "Zaria",
      "Kafanchan",
      "Kaduna",
      "Soba"
    ],
    "ans": "Kaduna",
    "explanation": "Kaduna is the capital of Kaduna State."
  },
  {
    "q": "The headquarters of the International Olympic Committee (IOC) is located in:",
    "options": [
      "Geneva",
      "Lausanne, Switzerland",
      "Zurich",
      "Paris"
    ],
    "ans": "Lausanne, Switzerland",
    "explanation": "The IOC is headquartered in Lausanne, Switzerland."
  },
  {
    "q": "Which of the following is the largest freshwater fish in the world?",
    "options": [
      "Catfish",
      "Nile Perch",
      "Beluga Sturgeon",
      "Salmon"
    ],
    "ans": "Beluga Sturgeon",
    "explanation": "The Beluga Sturgeon is the largest freshwater fish."
  },
  {
    "q": "Which of the following is the capital of Edo State?",
    "options": [
      "Auchi",
      "Ekpoma",
      "Benin City",
      "Uromi"
    ],
    "ans": "Benin City",
    "explanation": "Benin City is the capital of Edo State."
  },
  {
    "q": "The first woman to serve as Nigeria's Minister of Finance was:",
    "options": [
      "Ngozi Okonjo-Iweala",
      "Kemi Adeosun",
      "Nenadi Usman",
      "Esther Nenadi Usman"
    ],
    "ans": "Ngozi Okonjo-Iweala",
    "explanation": "Ngozi Okonjo-Iweala was Nigeria's first female Minister of Finance."
  },
  {
    "q": "Which of the following is the headquarters of the African Development Bank (AfDB)?",
    "options": [
      "Addis Ababa",
      "Abidjan, Côte d'Ivoire",
      "Nairobi",
      "Cairo"
    ],
    "ans": "Abidjan, Côte d'Ivoire",
    "explanation": "The African Development Bank is headquartered in Abidjan, Côte d'Ivoire."
  }
],
  "PUTME_MATHEMATICS": [
  {
    "q": "Without using tables, evaluate (243)^1/5 × (0.09)^-1 × (125)^-2/3",
    "options": [
      "4",
      "¾",
      "3",
      "4/3"
    ],
    "ans": "4/3",
    "explanation": ""
  },
  {
    "q": "Three consecutive positive integers a, b and c are such that b² = 4(a + c). Find the value of c",
    "options": [
      "6",
      "3",
      "9",
      "5"
    ],
    "ans": "9",
    "explanation": ""
  },
  {
    "q": "Find the principal which amounts to N4,400 at simple interest in 5 years at 2% per annum.",
    "options": [
      "N3,800",
      "N5,200",
      "N5,000",
      "N4,000"
    ],
    "ans": "N4,000",
    "explanation": ""
  },
  {
    "q": "The sum of the first 20 terms of the progression 3, 6, 12, … is",
    "options": [
      "3(2^21 – 1)",
      "3(2^20 – 1)",
      "3(2^20 + 1)",
      "3(2^21 + 1)"
    ],
    "ans": "3(2^20 – 1)",
    "explanation": ""
  },
  {
    "q": "Mr. Robson bought bags of orange for N2,500 each. He sold them for N90,000 at a loss of 20%. How many bags of orange did he buy?",
    "options": [
      "60",
      "80",
      "50",
      "45"
    ],
    "ans": "45",
    "explanation": ""
  },
  {
    "q": "The second and fifth terms of a geometric progression are 21 and 567 respectively. Find the first term and the common ratio of the progression.",
    "options": [
      "3, 7",
      "7, 3",
      "-7, 3",
      "-3, 7"
    ],
    "ans": "7, 3",
    "explanation": ""
  },
  {
    "q": "Tunse bought a house for N1,250,000 and spent N350,000 to renovate it. He then sold the house for N2,000,000. What is the percentage gain?",
    "options": [
      "40%",
      "65%",
      "35%",
      "45%"
    ],
    "ans": "45%",
    "explanation": ""
  },
  {
    "q": "List the integral values that satisfy the inequality -2 < 7 – 3x ≤ 10",
    "options": [
      "-1, 0, 1, 2",
      "-2, 0, 1",
      "1, 2, 3",
      "0, 1, 2"
    ],
    "ans": "-1, 0, 1, 2",
    "explanation": ""
  },
  {
    "q": "In a class, 120 students speak English or French or both. 70 speak English and 55 speak French. How many speak English but not French?",
    "options": [
      "45",
      "50",
      "55",
      "65"
    ],
    "ans": "65",
    "explanation": ""
  },
  {
    "q": "The lengths of the sides of a right-angled triangle are ym, (3y – 1)m and (3y + 1)m. Find y.",
    "options": [
      "12",
      "9",
      "8",
      "4"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "Uche, Adamu and Ope share profit on a business deal. Uche received ⅓ of the profit and Adamu received ⅔ of the remainder. If Ope received the remaining N12,000, how much profit did they share?",
    "options": [
      "N54,000",
      "N58,000",
      "N48,000",
      "N42,000"
    ],
    "ans": "N54,000",
    "explanation": ""
  },
  {
    "q": "A ladder resting on a vertical wall makes an angle whose tangent is 2.5 with the ground. If the distance between the foot of the ladder and the wall is 60cm, what is the length of the ladder?",
    "options": [
      "2m",
      "1.6m",
      "0.8m",
      "1.3m"
    ],
    "ans": "1.3m",
    "explanation": ""
  },
  {
    "q": "Three students share a bag of garri in such a way that the first student took ¼ of the garri and the second ¾ of the remainder. What fraction of the bag of garri did the third student take?",
    "options": [
      "3/16",
      "2/9",
      "⅗",
      "4/15"
    ],
    "ans": "3/16",
    "explanation": ""
  },
  {
    "q": "Solve the simultaneous linear equations 2x + 5y = 11, 7x + 4y = 2",
    "options": [
      "27/34, 34/27",
      "-34/27, 73/27",
      "⅔, ⅘",
      "⅓, ⅖"
    ],
    "ans": "-34/27, 73/27",
    "explanation": ""
  },
  {
    "q": "If x + 1 is a factor of x³ + 3x² + Kx + 4, find the value of K.",
    "options": [
      "6",
      "4",
      "-4",
      "3"
    ],
    "ans": "6",
    "explanation": ""
  },
  {
    "q": "Paul and his friend Peter went to buy an article costing N600. Peter had 10% of the cost and Paul 40% of the remainder. How much did they have altogether?",
    "options": [
      "N320",
      "N440",
      "N276",
      "N196"
    ],
    "ans": "N276",
    "explanation": ""
  },
  {
    "q": "Find all values of x satisfying the inequality -14 ≤ 4 – 3x ≤ 31",
    "options": [
      "-6 ≤ x ≤ 9",
      "-9 ≤ x ≤ 6",
      "5 ≤ x ≤ 8",
      "6 ≤ x ≤ 12"
    ],
    "ans": "-9 ≤ x ≤ 6",
    "explanation": ""
  },
  {
    "q": "What factor is common to all the expressions x² - x, 2x² - x - 1 and x² - 1?",
    "options": [
      "(2x - 1)",
      "(x + 1)",
      "(x - 1)",
      "No factor"
    ],
    "ans": "No factor",
    "explanation": ""
  },
  {
    "q": "Find the sum to infinity of the series 3 + 2 + 4/3 + 8/9 + 16/27 + …",
    "options": [
      "270",
      "9",
      "27",
      "90"
    ],
    "ans": "9",
    "explanation": ""
  },
  {
    "q": "Find the number of sides of a regular polygon whose interior angle is twice the exterior angle.",
    "options": [
      "5",
      "6",
      "8",
      "9"
    ],
    "ans": "6",
    "explanation": ""
  },
  {
    "q": "Find the value of p, if the line which passes through (-1, -p) and (-2p, 2) is parallel to the line 2y + 8x – 17 = 0",
    "options": [
      "6/7",
      "4/7",
      "⅖",
      "-6/7"
    ],
    "ans": "6/7",
    "explanation": ""
  },
  {
    "q": "Obtain a maximum value of the function f(x) = x³ - 12x + 11",
    "options": [
      "-15",
      "27",
      "15",
      "27"
    ],
    "ans": "27",
    "explanation": ""
  },
  {
    "q": "If y = 5cos(-6x), dy/dx is",
    "options": [
      "30sin(-6x)",
      "5sin(-6x)",
      "-30sin(-6x)",
      "-30cos(-6x)"
    ],
    "ans": "30sin(-6x)",
    "explanation": ""
  },
  {
    "q": "Find the variance of the numbers k, k + 1, k + 2",
    "options": [
      "⅓",
      "3",
      "⅔",
      "1"
    ],
    "ans": "⅓",
    "explanation": ""
  },
  {
    "q": "At what value of x is the function y = x² - 6x - 7 minimum?",
    "options": [
      "3",
      "5",
      "6",
      "2"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "The chances of three independent events P, Q, R occurring are ½, ⅔, ¼ respectively. What are the chances of P and Q only occurring?",
    "options": [
      "¼",
      "⅔",
      "1/12",
      "½"
    ],
    "ans": "1/12",
    "explanation": ""
  },
  {
    "q": "If x and y represent the mean and the median respectively of the marks 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, find x/y correct to 1 decimal place.",
    "options": [
      "1",
      "3",
      "5",
      "2"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "Find the point on the plane where the curve y = 2x² - 2x + 9 has 2 as gradient.",
    "options": [
      "(2, 4)",
      "(3, 5)",
      "(1, 3)",
      "(1, 4)"
    ],
    "ans": "(1, 3)",
    "explanation": ""
  },
  {
    "q": "Find the equation of the line through (5, 7) parallel to the line 7x + 5y – 5 = 0",
    "options": [
      "5y + 7x = 70",
      "7x + 5y = 7",
      "5x + 7y = 110",
      "y + 5x = 70"
    ],
    "ans": "5y + 7x = 70",
    "explanation": ""
  },
  {
    "q": "A school's budget allocations: Science N35,000,000; Education N25,000,000; Law N20,000,000; Social/Management N20,000,000. In a pie chart, the angle corresponding to Science is",
    "options": [
      "90°",
      "126°",
      "45°",
      "100°"
    ],
    "ans": "126°",
    "explanation": ""
  },
  {
    "q": "Simplify 3⅓ - 1¼ × ⅔ + 1⅖",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "Find the distance between points A(-4, 5) and B(-3, 2)",
    "options": [
      "10",
      "2√5",
      "3",
      "√58"
    ],
    "ans": "√58",
    "explanation": ""
  },
  {
    "q": "Number of children: 0,1,2,3,4,5,6 with families: 7,11,6,7,7,5,3. Find the mode and median respectively of the distribution.",
    "options": [
      "3, 1",
      "1, 2",
      "1, 6",
      "1, 1"
    ],
    "ans": "1, 2",
    "explanation": ""
  },
  {
    "q": "Rationalize (4√7 + √2)/(√2 - √7)",
    "options": [
      "-√14 - 6",
      "2√14 - 6",
      "-3√14 - 28",
      "√14 - 8"
    ],
    "ans": "-√14 - 6",
    "explanation": ""
  },
  {
    "q": "A housewife bought five yams at Y34 per yam and three oranges at Y5 each, where Y is a currency in base six. Find the total amount spent.",
    "options": [
      "Y2256",
      "Y2526",
      "Y3256",
      "Y3526"
    ],
    "ans": "Y3256",
    "explanation": ""
  },
  {
    "q": "Justice starts a 5km walk from P on a bearing 023°. He then walks 4km on a bearing of 113° to Q. What is the bearing of Q from P?",
    "options": [
      "67.4°",
      "23°",
      "90.4°",
      "113°"
    ],
    "ans": "67.4°",
    "explanation": ""
  },
  {
    "q": "Divide the L.C.M. of 36, 54 and 90 by their H.C.F.",
    "options": [
      "15",
      "20",
      "30",
      "45"
    ],
    "ans": "30",
    "explanation": ""
  },
  {
    "q": "If 125_x = 201_0, find x.",
    "options": [
      "4",
      "5",
      "3",
      "2"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Simplify 4⅓ – (2½ - 1⅗)",
    "options": [
      "7/30",
      "2½",
      "3 1/10",
      "3 13/30"
    ],
    "ans": "3 13/30",
    "explanation": ""
  },
  {
    "q": "If the ratio x:y = 3:5 and y:z = 4:7, find the ratio x:y:z",
    "options": [
      "15 : 28 : 84",
      "12 : 20 : 35",
      "3 : 5 : 4",
      "5 : 4 : 7"
    ],
    "ans": "12 : 20 : 35",
    "explanation": ""
  },
  {
    "q": "The number 327,036 was corrected to 327,000. Which of the following can exactly describe the degree of approximation used? I. to 3 significant figures II. to 4 significant figures III. to the nearest hundred IV. to the nearest thousand",
    "options": [
      "I and III only",
      "II and IV only",
      "I, II and III only",
      "I, II, III and IV"
    ],
    "ans": "I, II, III and IV",
    "explanation": ""
  },
  {
    "q": "If 101010₂ = x₁₀ + 1111₂, the value of x is",
    "options": [
      "32",
      "27",
      "19",
      "13"
    ],
    "ans": "27",
    "explanation": ""
  },
  {
    "q": "The population of a school is 1,376. Express this to three significant figures.",
    "options": [
      "1,370",
      "1,376",
      "1,380",
      "138"
    ],
    "ans": "1,380",
    "explanation": ""
  },
  {
    "q": "A labourer's daily wage is N50 for the first 10 days and N100 for the next 9 days. Find the daily wage for the remaining working day if the average daily wage is N90.80.",
    "options": [
      "N110",
      "N105",
      "N95",
      "N92.50"
    ],
    "ans": "N95",
    "explanation": ""
  },
  {
    "q": "Find the value of x if 4logx + 5logx – 7logx = log16",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "A motorist drives from P to Q at an average speed of 80 km/hr and returns from Q to P at 50 km/hr. Find the average speed for the round trip.",
    "options": [
      "53.3 km/hr",
      "60.0 km/hr",
      "62.5 km/hr",
      "65.0 km/hr"
    ],
    "ans": "53.3 km/hr",
    "explanation": ""
  },
  {
    "q": "If X = {1,2,3,4,5,6}, Y = {2,4,5,7} and Z = {1,4,5}, which of the following is/are correct? I. n(X∪Y∪Z) = 13 II. (X∩Y)∪Z = X∩(Y∪Z) III. n(X∩Y∩Z) = 2",
    "options": [
      "I only",
      "II only",
      "I and III only",
      "II and III only"
    ],
    "ans": "I and III only",
    "explanation": ""
  },
  {
    "q": "X sold a radio set to Y at a profit of 10% and Y sold it for N2,612.50 at a loss of 5%. What was the cost of the radio to X?",
    "options": [
      "N2,500",
      "N2,488",
      "N2,375",
      "N2,272"
    ],
    "ans": "N2,500",
    "explanation": ""
  },
  {
    "q": "Factorize: 6^(2m+1) + 7(6^m) - 5",
    "options": [
      "[3(6^m) + 5][2(6^m) – 1]",
      "[3(6^m) – 5][2(6^m) + 1]",
      "[3(6^m) – 5][3(6^m) + 1]",
      "[2(6^m) + 5][3(6^m) – 1]"
    ],
    "ans": "[3(6^m) + 5][2(6^m) – 1]",
    "explanation": ""
  },
  {
    "q": "The minimum point on the curve y = x² – 4x + 3 is",
    "options": [
      "(2, -1)",
      "(0, 3)",
      "(1, 0)",
      "(2, -4)"
    ],
    "ans": "(2, -1)",
    "explanation": ""
  },
  {
    "q": "In a class of 120 students, 75 offer Geography and 60 offer Economics; every student offers at least one. How many offer both?",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "ans": "15",
    "explanation": ""
  },
  {
    "q": "How many total outcomes are there when two fair dice are tossed together?",
    "options": [
      "12",
      "24",
      "36",
      "42"
    ],
    "ans": "36",
    "explanation": ""
  },
  {
    "q": "When two dice are tossed, what is the probability that the sum is divisible by 3?",
    "options": [
      "1/6",
      "1/4",
      "1/3",
      "1/2"
    ],
    "ans": "1/3",
    "explanation": ""
  },
  {
    "q": "Find the area of a sector of a circle with radius 8cm and angle 135°.",
    "options": [
      "37.7 cm²",
      "56.5 cm²",
      "75.4 cm²",
      "94.2 cm²"
    ],
    "ans": "75.4 cm²",
    "explanation": ""
  },
  {
    "q": "Simplify: 2^x × 8^(x-1) = 32. Find x.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Solve for x: log₂(x) + log₂(x-2) = 3",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "The nth term of an AP is given by Tn = 3n + 2. Find the sum of the first 15 terms.",
    "options": [
      "360",
      "375",
      "390",
      "405"
    ],
    "ans": "390",
    "explanation": ""
  },
  {
    "q": "Find the 8th term of the GP 2, 6, 18, …",
    "options": [
      "4374",
      "2187",
      "1458",
      "4368"
    ],
    "ans": "4374",
    "explanation": ""
  },
  {
    "q": "A rectangular field has length 15m and width 8m. Find the length of its diagonal.",
    "options": [
      "15m",
      "17m",
      "19m",
      "23m"
    ],
    "ans": "17m",
    "explanation": ""
  },
  {
    "q": "Find the area of a triangle with sides 7cm, 8cm and 9cm using Heron's formula.",
    "options": [
      "24 cm²",
      "26.8 cm²",
      "30 cm²",
      "32 cm²"
    ],
    "ans": "26.8 cm²",
    "explanation": ""
  },
  {
    "q": "A cone has base radius 6cm and height 8cm. Find its slant height.",
    "options": [
      "8cm",
      "9cm",
      "10cm",
      "14cm"
    ],
    "ans": "10cm",
    "explanation": ""
  },
  {
    "q": "Find the volume of a cylinder with radius 7cm and height 10cm. (Use π = 22/7)",
    "options": [
      "1540 cm³",
      "1400 cm³",
      "770 cm³",
      "2200 cm³"
    ],
    "ans": "1540 cm³",
    "explanation": ""
  },
  {
    "q": "Two events A and B are independent with P(A) = 0.4, P(B) = 0.5. Find P(A∩B).",
    "options": [
      "0.9",
      "0.2",
      "0.1",
      "0.45"
    ],
    "ans": "0.2",
    "explanation": ""
  },
  {
    "q": "A bag contains 5 red and 3 blue balls. One ball is drawn at random. Find the probability that it is blue.",
    "options": [
      "3/8",
      "5/8",
      "1/3",
      "3/5"
    ],
    "ans": "3/8",
    "explanation": ""
  },
  {
    "q": "The mean of 5 numbers is 12. If one number is removed the mean becomes 11. Find the removed number.",
    "options": [
      "14",
      "15",
      "16",
      "20"
    ],
    "ans": "16",
    "explanation": ""
  },
  {
    "q": "Find the median of the numbers 12, 9, 15, 7, 20, 18, 10.",
    "options": [
      "10",
      "12",
      "15",
      "14"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "If sin θ = 3/5 and θ is acute, find cos θ.",
    "options": [
      "3/4",
      "4/5",
      "5/4",
      "5/3"
    ],
    "ans": "4/5",
    "explanation": ""
  },
  {
    "q": "Find the value of θ, 0° ≤ θ ≤ 90°, if tan θ = 1.",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "ans": "45°",
    "explanation": ""
  },
  {
    "q": "A ship sails 8km due north then 6km due east. Find its distance from the starting point.",
    "options": [
      "8km",
      "9km",
      "10km",
      "14km"
    ],
    "ans": "10km",
    "explanation": ""
  },
  {
    "q": "Simplify (2x²y³)² ÷ (4xy²)",
    "options": [
      "x³y⁴",
      "x²y³",
      "4x³y⁴",
      "x⁴y⁶"
    ],
    "ans": "x³y⁴",
    "explanation": ""
  },
  {
    "q": "Factorize x² - 5x + 6",
    "options": [
      "(x-1)(x-6)",
      "(x-2)(x-3)",
      "(x+2)(x+3)",
      "(x-6)(x+1)"
    ],
    "ans": "(x-2)(x-3)",
    "explanation": ""
  },
  {
    "q": "Solve the quadratic equation x² - 7x + 12 = 0",
    "options": [
      "x = 2, 5",
      "x = 3, 4",
      "x = 1, 6",
      "x = -3, -4"
    ],
    "ans": "x = 3, 4",
    "explanation": ""
  },
  {
    "q": "Find the sum of the roots of 2x² - 5x + 3 = 0.",
    "options": [
      "3/2",
      "5/2",
      "-5/2",
      "3"
    ],
    "ans": "5/2",
    "explanation": ""
  },
  {
    "q": "Find the product of the roots of 2x² - 5x + 3 = 0.",
    "options": [
      "3/2",
      "5/2",
      "2/3",
      "-3/2"
    ],
    "ans": "3/2",
    "explanation": ""
  },
  {
    "q": "Make r the subject of the formula A = πr².",
    "options": [
      "r = A/π",
      "r = √(A/π)",
      "r = √A/π",
      "r = πA"
    ],
    "ans": "r = √(A/π)",
    "explanation": ""
  },
  {
    "q": "If y varies directly as x and y = 20 when x = 4, find y when x = 9.",
    "options": [
      "36",
      "40",
      "45",
      "50"
    ],
    "ans": "45",
    "explanation": ""
  },
  {
    "q": "If y varies inversely as x and y = 6 when x = 4, find y when x = 8.",
    "options": [
      "2",
      "3",
      "4",
      "12"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Convert 235₈ to base 10.",
    "options": [
      "141",
      "157",
      "163",
      "149"
    ],
    "ans": "157",
    "explanation": ""
  },
  {
    "q": "Convert 45 (base 10) to binary.",
    "options": [
      "101101",
      "101110",
      "110101",
      "100101"
    ],
    "ans": "101101",
    "explanation": ""
  },
  {
    "q": "Simplify: 3/4 + 2/3 ÷ 1/6",
    "options": [
      "3½",
      "4¾",
      "5¼",
      "4⅓"
    ],
    "ans": "4¾",
    "explanation": ""
  },
  {
    "q": "A trader bought an article for N800 and sold it at a profit of 25%. Find the selling price.",
    "options": [
      "N900",
      "N1000",
      "N1050",
      "N1100"
    ],
    "ans": "N1000",
    "explanation": ""
  },
  {
    "q": "An article is sold for N690 at a loss of 8%. Find the cost price.",
    "options": [
      "N700",
      "N720",
      "N740",
      "N750"
    ],
    "ans": "N750",
    "explanation": ""
  },
  {
    "q": "Simple interest on a sum of money for 3 years at 5% per annum is N450. Find the principal.",
    "options": [
      "N2,500",
      "N3,000",
      "N3,500",
      "N4,000"
    ],
    "ans": "N3,000",
    "explanation": ""
  },
  {
    "q": "A sum of N5,000 is invested at 8% per annum simple interest for 4 years. Find the total amount.",
    "options": [
      "N6,400",
      "N6,600",
      "N6,800",
      "N7,000"
    ],
    "ans": "N6,600",
    "explanation": ""
  },
  {
    "q": "Find the value of x if 3^(2x-1) = 27.",
    "options": [
      "1",
      "1.5",
      "2",
      "2.5"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Simplify √48 - √27 + √12",
    "options": [
      "√3",
      "2√3",
      "3√3",
      "4√3"
    ],
    "ans": "3√3",
    "explanation": ""
  },
  {
    "q": "If the interior angle of a regular polygon is 150°, find the number of sides.",
    "options": [
      "10",
      "12",
      "14",
      "15"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "Find the sum of the interior angles of a regular octagon.",
    "options": [
      "900°",
      "1080°",
      "1260°",
      "1440°"
    ],
    "ans": "1080°",
    "explanation": ""
  },
  {
    "q": "A circle has a circumference of 44cm. Find its radius. (π = 22/7)",
    "options": [
      "5cm",
      "6cm",
      "7cm",
      "8cm"
    ],
    "ans": "7cm",
    "explanation": ""
  },
  {
    "q": "Find the area of a circle with diameter 14cm. (π = 22/7)",
    "options": [
      "144 cm²",
      "150 cm²",
      "154 cm²",
      "160 cm²"
    ],
    "ans": "154 cm²",
    "explanation": ""
  },
  {
    "q": "A right circular cylinder has radius 3cm and height 7cm. Find its curved surface area. (π = 22/7)",
    "options": [
      "120 cm²",
      "132 cm²",
      "140 cm²",
      "150 cm²"
    ],
    "ans": "132 cm²",
    "explanation": ""
  },
  {
    "q": "Find the number of ways of arranging the letters of the word \"MATHS\".",
    "options": [
      "60",
      "100",
      "120",
      "720"
    ],
    "ans": "120",
    "explanation": ""
  },
  {
    "q": "In how many ways can 3 students be selected from a group of 8 students?",
    "options": [
      "24",
      "36",
      "48",
      "56"
    ],
    "ans": "56",
    "explanation": ""
  },
  {
    "q": "Find the probability of getting a head and a tail when two fair coins are tossed.",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    "ans": "1/2",
    "explanation": ""
  },
  {
    "q": "The first term of an AP is 4 and the common difference is 3. Find the 12th term.",
    "options": [
      "33",
      "35",
      "37",
      "40"
    ],
    "ans": "37",
    "explanation": ""
  },
  {
    "q": "If the sum of the first n terms of an AP is Sn = n² + 2n, find the first term.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Find the gradient of the line joining points (2,3) and (6,11).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Find the equation of the line with gradient 3 passing through (1,2).",
    "options": [
      "y = 3x + 1",
      "y = 3x - 1",
      "y = 3x - 2",
      "y = 3x + 2"
    ],
    "ans": "y = 3x - 1",
    "explanation": ""
  },
  {
    "q": "A committee of 4 is to be chosen from 6 men and 4 women. In how many ways can this be done if the committee must contain exactly 2 men?",
    "options": [
      "60",
      "75",
      "90",
      "100"
    ],
    "ans": "90",
    "explanation": ""
  },
  {
    "q": "If P(A) = 0.3, P(B) = 0.4 and P(A∪B) = 0.58, find P(A∩B).",
    "options": [
      "0.1",
      "0.12",
      "0.15",
      "0.2"
    ],
    "ans": "0.12",
    "explanation": ""
  },
  {
    "q": "Simplify (3⁴ × 3⁻²) ÷ 3⁻³",
    "options": [
      "81",
      "243",
      "729",
      "27"
    ],
    "ans": "243",
    "explanation": ""
  },
  {
    "q": "Solve: 2(x-3) = 3(x+1) - 5",
    "options": [
      "-4",
      "4",
      "-2",
      "2"
    ],
    "ans": "-4",
    "explanation": ""
  },
  {
    "q": "Find the value of x: 5x - 3 = 3x + 11",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "ans": "7",
    "explanation": ""
  },
  {
    "q": "If f(x) = 2x² - 3x + 1, find f(-2).",
    "options": [
      "11",
      "13",
      "15",
      "17"
    ],
    "ans": "15",
    "explanation": ""
  },
  {
    "q": "Find the remainder when x³ - 2x² + 3x - 5 is divided by x - 2.",
    "options": [
      "-1",
      "0",
      "1",
      "2"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "Solve for x: (x-3)/2 + (x+1)/3 = 4",
    "options": [
      "5",
      "6",
      "6.2",
      "7"
    ],
    "ans": "6.2",
    "explanation": ""
  },
  {
    "q": "Expand and simplify (x+3)(x-3)",
    "options": [
      "x² - 9",
      "x² + 9",
      "x² - 6x + 9",
      "x² + 6x - 9"
    ],
    "ans": "x² - 9",
    "explanation": ""
  },
  {
    "q": "Factorize completely: 2x² + 5x - 3",
    "options": [
      "(2x-1)(x+3)",
      "(2x+1)(x-3)",
      "(x-1)(2x+3)",
      "(2x-3)(x+1)"
    ],
    "ans": "(2x-1)(x+3)",
    "explanation": ""
  },
  {
    "q": "If 2x + y = 7 and x - y = 2, find x and y.",
    "options": [
      "x=3, y=1",
      "x=2, y=3",
      "x=1, y=5",
      "x=4, y=-1"
    ],
    "ans": "x=3, y=1",
    "explanation": ""
  },
  {
    "q": "Find the value of k for which x = 2 is a root of x² - kx + 6 = 0",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "The sum of two numbers is 15 and their product is 56. Find the numbers.",
    "options": [
      "7 and 8",
      "6 and 9",
      "5 and 10",
      "4 and 11"
    ],
    "ans": "7 and 8",
    "explanation": ""
  },
  {
    "q": "A man is 4 times as old as his son. In 5 years, he will be 3 times as old. Find the son's present age.",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "ans": "10",
    "explanation": ""
  },
  {
    "q": "Find three consecutive even numbers whose sum is 72.",
    "options": [
      "20, 22, 24",
      "22, 24, 26",
      "24, 26, 28",
      "18, 20, 22"
    ],
    "ans": "22, 24, 26",
    "explanation": ""
  },
  {
    "q": "The angles of a triangle are in the ratio 2:3:4. Find the largest angle.",
    "options": [
      "60°",
      "70°",
      "80°",
      "90°"
    ],
    "ans": "80°",
    "explanation": ""
  },
  {
    "q": "Two supplementary angles are in ratio 2:7. Find the smaller angle.",
    "options": [
      "20°",
      "40°",
      "60°",
      "140°"
    ],
    "ans": "40°",
    "explanation": ""
  },
  {
    "q": "Find x if the angles (3x+10)° and (2x+20)° are complementary.",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "A ladder 13m long leans against a wall with its foot 5m from the wall base. How high up the wall does the ladder reach?",
    "options": [
      "10m",
      "11m",
      "12m",
      "13m"
    ],
    "ans": "12m",
    "explanation": ""
  },
  {
    "q": "Find the perimeter of a rectangle whose length is twice its width and area is 200cm².",
    "options": [
      "50cm",
      "60cm",
      "70cm",
      "80cm"
    ],
    "ans": "60cm",
    "explanation": ""
  },
  {
    "q": "A cuboid has dimensions 5cm × 4cm × 3cm. Find its total surface area.",
    "options": [
      "84cm²",
      "94cm²",
      "104cm²",
      "60cm²"
    ],
    "ans": "94cm²",
    "explanation": ""
  },
  {
    "q": "Find the volume of a cube of side 6cm.",
    "options": [
      "196",
      "206",
      "216",
      "226"
    ],
    "ans": "216",
    "explanation": ""
  },
  {
    "q": "A sphere has radius 3cm. Find its volume. (π = 22/7)",
    "options": [
      "100.5cm³",
      "113.1cm³",
      "120.0cm³",
      "150.7cm³"
    ],
    "ans": "113.1cm³",
    "explanation": ""
  },
  {
    "q": "Find the surface area of a sphere with radius 7cm. (π = 22/7)",
    "options": [
      "588cm²",
      "600cm²",
      "616cm²",
      "630cm²"
    ],
    "ans": "616cm²",
    "explanation": ""
  },
  {
    "q": "In a survey of 100 students, 60 like Mathematics, 45 like English, and 25 like both. How many like neither?",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "ans": "20",
    "explanation": ""
  },
  {
    "q": "In a class of 50 students, everyone takes at least one of Physics or Chemistry. 30 take Physics and 25 take Chemistry. How many take both?",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "If n(A) = 20, n(B) = 15, n(A∩B) = 8, find n(A∪B).",
    "options": [
      "23",
      "27",
      "35",
      "43"
    ],
    "ans": "27",
    "explanation": ""
  },
  {
    "q": "A die is rolled once. Find the probability of getting a number greater than 4.",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "ans": "1/3",
    "explanation": ""
  },
  {
    "q": "A card is drawn from a standard deck of 52 cards. Find the probability that it is a king.",
    "options": [
      "1/13",
      "1/26",
      "1/52",
      "4/13"
    ],
    "ans": "1/13",
    "explanation": ""
  },
  {
    "q": "Two dice are rolled. Find the probability that the sum is 7.",
    "options": [
      "1/12",
      "1/9",
      "1/6",
      "1/4"
    ],
    "ans": "1/6",
    "explanation": ""
  },
  {
    "q": "The mean of 10 numbers is 15. If two numbers, 20 and 25, are added to the set, find the new mean.",
    "options": [
      "15.5",
      "16",
      "16.25",
      "17"
    ],
    "ans": "16.25",
    "explanation": ""
  },
  {
    "q": "Find the standard deviation of 2, 4, 6, 8, 10.",
    "options": [
      "2",
      "2.83",
      "3",
      "4"
    ],
    "ans": "2.83",
    "explanation": ""
  },
  {
    "q": "The marks of 6 students are 5, 7, 8, 9, 10, 15. Find the range.",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "ans": "10",
    "explanation": ""
  },
  {
    "q": "Find the mode of the data set: 3, 5, 5, 7, 8, 8, 8, 9",
    "options": [
      "5",
      "7",
      "8",
      "9"
    ],
    "ans": "8",
    "explanation": ""
  },
  {
    "q": "If sin θ = 0.6, find θ (to the nearest degree), 0° ≤ θ ≤ 90°.",
    "options": [
      "30°",
      "37°",
      "45°",
      "53°"
    ],
    "ans": "37°",
    "explanation": ""
  },
  {
    "q": "In a right triangle, one angle is 30° and the hypotenuse is 10cm. Find the length of the side opposite the 30° angle.",
    "options": [
      "5cm",
      "5√3cm",
      "8.7cm",
      "10cm"
    ],
    "ans": "5cm",
    "explanation": ""
  },
  {
    "q": "Find the value of cos 60° + sin 30°.",
    "options": [
      "0.5",
      "1",
      "1.5",
      "2"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "A tower is 50m high. Find the angle of elevation of the top from a point 50m away on level ground.",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "ans": "45°",
    "explanation": ""
  },
  {
    "q": "Find the equation of a circle with centre (2, -3) and radius 5.",
    "options": [
      "(x-2)² + (y+3)² = 25",
      "(x+2)² + (y-3)² = 25",
      "(x-2)² + (y-3)² = 5",
      "(x+2)² + (y+3)² = 10"
    ],
    "ans": "(x-2)² + (y+3)² = 25",
    "explanation": ""
  },
  {
    "q": "Find the midpoint of the line segment joining (-2,5) and (6,-1).",
    "options": [
      "(2, 2)",
      "(4, 2)",
      "(2, 3)",
      "(1, 2)"
    ],
    "ans": "(2, 2)",
    "explanation": ""
  },
  {
    "q": "Find the length of the line segment joining (1,2) and (4,6).",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "Two lines y = 2x + 3 and y = mx - 1 are perpendicular. Find m.",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "ans": "-1/2",
    "explanation": ""
  },
  {
    "q": "Find the value of x in the equation 4^(x+1) = 64",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Simplify: (2⁵ × 2⁻³) ÷ 2⁻¹",
    "options": [
      "4",
      "6",
      "8",
      "16"
    ],
    "ans": "8",
    "explanation": ""
  },
  {
    "q": "If log₁₀2 = 0.301, find log₁₀8.",
    "options": [
      "0.602",
      "0.903",
      "1.204",
      "0.301"
    ],
    "ans": "0.903",
    "explanation": ""
  },
  {
    "q": "Find x if log_x 81 = 4.",
    "options": [
      "2",
      "3",
      "4",
      "9"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Convert 0.75 to a fraction in its lowest terms.",
    "options": [
      "3/4",
      "7/10",
      "3/5",
      "5/8"
    ],
    "ans": "3/4",
    "explanation": ""
  },
  {
    "q": "Express 2/5 as a percentage.",
    "options": [
      "20%",
      "25%",
      "40%",
      "50%"
    ],
    "ans": "40%",
    "explanation": ""
  },
  {
    "q": "A number is increased by 20% to give 96. Find the original number.",
    "options": [
      "72",
      "76",
      "80",
      "84"
    ],
    "ans": "80",
    "explanation": ""
  },
  {
    "q": "A number decreased by 15% gives 68. Find the original number.",
    "options": [
      "75",
      "78",
      "80",
      "82"
    ],
    "ans": "80",
    "explanation": ""
  },
  {
    "q": "Find the LCM of 12, 18 and 24.",
    "options": [
      "36",
      "48",
      "72",
      "96"
    ],
    "ans": "72",
    "explanation": ""
  },
  {
    "q": "Find the HCF of 24, 36 and 60.",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "Simplify: √50 + √18",
    "options": [
      "6√2",
      "7√2",
      "8√2",
      "9√2"
    ],
    "ans": "8√2",
    "explanation": ""
  },
  {
    "q": "Rationalize 1/(√5 - √3)",
    "options": [
      "(√5+√3)/2",
      "(√5-√3)/2",
      "√5+√3",
      "(√5+√3)/8"
    ],
    "ans": "(√5+√3)/2",
    "explanation": ""
  },
  {
    "q": "If 3x - 2y = 12 and x + y = 9, find x and y.",
    "options": [
      "x=6, y=3",
      "x=5, y=4",
      "x=7, y=2",
      "x=4, y=5"
    ],
    "ans": "x=6, y=3",
    "explanation": ""
  },
  {
    "q": "Find the inverse of f(x) = 2x + 5.",
    "options": [
      "f⁻¹(x) = (x-5)/2",
      "f⁻¹(x) = (x+5)/2",
      "f⁻¹(x) = 2x-5",
      "f⁻¹(x) = (x-2)/5"
    ],
    "ans": "f⁻¹(x) = (x-5)/2",
    "explanation": ""
  },
  {
    "q": "If f(x) = 3x - 1 and g(x) = x + 2, find (f∘g)(x).",
    "options": [
      "3x+5",
      "3x+1",
      "3x-5",
      "3x+2"
    ],
    "ans": "3x+5",
    "explanation": ""
  },
  {
    "q": "If f(x) = x² + 1, find f(g(2)) where g(x) = 2x - 3.",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Find the domain restriction of f(x) = 1/(x-4).",
    "options": [
      "x ≠ 0",
      "x ≠ 4",
      "x ≠ -4",
      "all real x"
    ],
    "ans": "x ≠ 4",
    "explanation": ""
  },
  {
    "q": "In the binomial expansion of (1 + x)⁴, find the coefficient of x².",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "ans": "6",
    "explanation": ""
  },
  {
    "q": "Find the middle term of the expansion (x + y)⁶.",
    "options": [
      "15x³y³",
      "20x³y³",
      "20x⁴y²",
      "15x⁴y²"
    ],
    "ans": "20x³y³",
    "explanation": ""
  },
  {
    "q": "Find the sum of the first 10 terms of the AP 5, 8, 11, …",
    "options": [
      "170",
      "180",
      "185",
      "190"
    ],
    "ans": "185",
    "explanation": ""
  },
  {
    "q": "Find the number of terms in the AP 4, 7, 10, …, 100.",
    "options": [
      "30",
      "31",
      "32",
      "33"
    ],
    "ans": "33",
    "explanation": ""
  },
  {
    "q": "The 3rd term of a GP is 12 and the 6th term is 96. Find the common ratio.",
    "options": [
      "2",
      "3",
      "4",
      "1/2"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Find the sum to infinity of the GP 8, 4, 2, 1, …",
    "options": [
      "12",
      "14",
      "16",
      "18"
    ],
    "ans": "16",
    "explanation": ""
  },
  {
    "q": "A car travels 240km in 3 hours. Find its average speed.",
    "options": [
      "70km/h",
      "75km/h",
      "80km/h",
      "90km/h"
    ],
    "ans": "80km/h",
    "explanation": ""
  },
  {
    "q": "A train travels at 60km/h for 2 hours then at 90km/h for 1 hour. Find the average speed for the whole journey.",
    "options": [
      "65km/h",
      "70km/h",
      "75km/h",
      "80km/h"
    ],
    "ans": "70km/h",
    "explanation": ""
  },
  {
    "q": "Two cars start from the same point and travel in opposite directions, one at 50km/h and the other at 70km/h. After how many hours will they be 360km apart?",
    "options": [
      "2",
      "2.5",
      "3",
      "3.5"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "A cyclist covers a distance in 4 hours at 15km/h. How long will it take to cover the same distance at 20km/h?",
    "options": [
      "2.5h",
      "3h",
      "3.5h",
      "4.5h"
    ],
    "ans": "3h",
    "explanation": ""
  },
  {
    "q": "A sum of money doubles itself in 8 years at simple interest. Find the rate percent per annum.",
    "options": [
      "10%",
      "12.5%",
      "15%",
      "20%"
    ],
    "ans": "12.5%",
    "explanation": ""
  },
  {
    "q": "Find the compound interest on N2,000 for 2 years at 10% per annum.",
    "options": [
      "N400",
      "N420",
      "N440",
      "N460"
    ],
    "ans": "N420",
    "explanation": ""
  },
  {
    "q": "A sum invested at compound interest amounts to N4,840 in 2 years at 10% per annum. Find the principal.",
    "options": [
      "N3,800",
      "N4,000",
      "N4,200",
      "N4,400"
    ],
    "ans": "N4,000",
    "explanation": ""
  },
  {
    "q": "In what ratio must a trader mix two types of rice costing N200 and N260 per kg to get a mixture costing N230 per kg?",
    "options": [
      "1:1",
      "2:3",
      "3:2",
      "1:2"
    ],
    "ans": "1:1",
    "explanation": ""
  },
  {
    "q": "Convert 3/8 to a decimal.",
    "options": [
      "0.325",
      "0.375",
      "0.425",
      "0.475"
    ],
    "ans": "0.375",
    "explanation": ""
  },
  {
    "q": "Simplify 110₂ + 101₂ (in binary)",
    "options": [
      "1001",
      "1010",
      "1011",
      "1101"
    ],
    "ans": "1011",
    "explanation": ""
  },
  {
    "q": "Convert 234₅ (base 5) to base 10.",
    "options": [
      "59",
      "65",
      "69",
      "74"
    ],
    "ans": "69",
    "explanation": ""
  },
  {
    "q": "A purse contains N1 coins and 50k coins totaling N45. There are 60 coins altogether. How many N1 coins are there?",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "ans": "30",
    "explanation": ""
  },
  {
    "q": "A father is 4 times as old as his son. Five years ago, he was 7 times as old. Find the son's present age.",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "ans": "10",
    "explanation": ""
  },
  {
    "q": "Find the value of x if 2^(3x) = 4^(x+2)",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "Simplify (a³b²)⁻¹ × a²b⁴",
    "options": [
      "b²/a",
      "a/b²",
      "ab²",
      "1/(ab²)"
    ],
    "ans": "b²/a",
    "explanation": ""
  },
  {
    "q": "Solve the inequality 3x - 5 > 2x + 1",
    "options": [
      "x > 4",
      "x > 5",
      "x > 6",
      "x > 7"
    ],
    "ans": "x > 6",
    "explanation": ""
  },
  {
    "q": "Solve the inequality -3x + 6 ≤ 0",
    "options": [
      "x ≤ 2",
      "x ≥ 2",
      "x ≤ -2",
      "x ≥ -2"
    ],
    "ans": "x ≥ 2",
    "explanation": ""
  },
  {
    "q": "A vector has components (3,4). Find its magnitude.",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "Given vectors a = (2,3) and b = (1,-1), find a + b.",
    "options": [
      "(3,2)",
      "(1,4)",
      "(3,4)",
      "(1,2)"
    ],
    "ans": "(3,2)",
    "explanation": ""
  },
  {
    "q": "Given vectors a = (4,-2) and b = (-1,3), find 2a - b.",
    "options": [
      "(9,-7)",
      "(7,-1)",
      "(9,-1)",
      "(7,-7)"
    ],
    "ans": "(9,-7)",
    "explanation": ""
  },
  {
    "q": "Find the angle between the vectors (1,0) and (0,1).",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "ans": "90°",
    "explanation": ""
  },
  {
    "q": "A matrix A = [[2,1],[3,4]]. Find its determinant.",
    "options": [
      "3",
      "5",
      "7",
      "11"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "Find the determinant of [[1,2],[3,4]].",
    "options": [
      "-2",
      "2",
      "-10",
      "10"
    ],
    "ans": "-2",
    "explanation": ""
  },
  {
    "q": "A matrix B = [[5,0],[0,5]] is called a",
    "options": [
      "identity matrix",
      "scalar matrix",
      "zero matrix",
      "singular matrix"
    ],
    "ans": "scalar matrix",
    "explanation": ""
  },
  {
    "q": "Find the value of x for which the matrix [[x,2],[3,4]] is singular.",
    "options": [
      "1",
      "1.5",
      "2",
      "2.5"
    ],
    "ans": "1.5",
    "explanation": ""
  },
  {
    "q": "Differentiate y = 3x² - 4x + 7 with respect to x.",
    "options": [
      "6x - 4",
      "3x - 4",
      "6x + 4",
      "3x² - 4"
    ],
    "ans": "6x - 4",
    "explanation": ""
  },
  {
    "q": "Find dy/dx if y = (2x + 1)³",
    "options": [
      "3(2x+1)²",
      "6(2x+1)²",
      "6(2x+1)",
      "2(2x+1)³"
    ],
    "ans": "6(2x+1)²",
    "explanation": ""
  },
  {
    "q": "If y = x³ - 3x, find the values of x where dy/dx = 0.",
    "options": [
      "x = 0, 1",
      "x = -1, 1",
      "x = 1, 2",
      "x = -2, 2"
    ],
    "ans": "x = -1, 1",
    "explanation": ""
  },
  {
    "q": "Integrate ∫(4x³ - 2x) dx",
    "options": [
      "x⁴ - x² + C",
      "4x⁴ - 2x² + C",
      "x³ - x + C",
      "x⁴ + x² + C"
    ],
    "ans": "x⁴ - x² + C",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫₀² (2x) dx",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "Find the area enclosed between the curve y = x² and the x-axis from x=0 to x=3.",
    "options": [
      "6",
      "9",
      "12",
      "18"
    ],
    "ans": "9",
    "explanation": ""
  },
  {
    "q": "A committee of 5 people is to be selected from 7 men and 5 women. In how many ways can this be done if there must be exactly 3 men?",
    "options": [
      "200",
      "300",
      "350",
      "420"
    ],
    "ans": "350",
    "explanation": ""
  },
  {
    "q": "Find the number of ways of selecting a chairperson and a secretary from a group of 8 people.",
    "options": [
      "28",
      "56",
      "64",
      "72"
    ],
    "ans": "56",
    "explanation": ""
  },
  {
    "q": "In how many ways can the letters of the word \"LEVEL\" be arranged?",
    "options": [
      "20",
      "24",
      "30",
      "60"
    ],
    "ans": "30",
    "explanation": ""
  },
  {
    "q": "A bag contains 4 white and 6 black balls. Two balls are drawn without replacement. Find the probability that both are white.",
    "options": [
      "1/15",
      "2/15",
      "3/15",
      "4/15"
    ],
    "ans": "2/15",
    "explanation": ""
  },
  {
    "q": "Find the probability that a leap year selected at random has 53 Sundays.",
    "options": [
      "1/7",
      "2/7",
      "3/7",
      "1/2"
    ],
    "ans": "2/7",
    "explanation": ""
  },
  {
    "q": "If P(A) = 1/3 and P(B|A) = 1/2, find P(A∩B).",
    "options": [
      "1/6",
      "1/5",
      "1/4",
      "1/3"
    ],
    "ans": "1/6",
    "explanation": ""
  },
  {
    "q": "Simplify (5² × 5³) ÷ 5⁴",
    "options": [
      "1",
      "5",
      "25",
      "125"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "Find x: 7^(x-1) = 49",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Simplify: (x² - 9)/(x - 3)",
    "options": [
      "x + 3",
      "x - 3",
      "x² + 3",
      "x + 9"
    ],
    "ans": "x + 3",
    "explanation": ""
  },
  {
    "q": "Simplify (x² + 5x + 6)/(x + 2)",
    "options": [
      "x + 3",
      "x + 2",
      "x - 3",
      "x + 6"
    ],
    "ans": "x + 3",
    "explanation": ""
  },
  {
    "q": "If x:y = 5:3 and y:z = 9:4, find x:z.",
    "options": [
      "15:4",
      "5:4",
      "9:4",
      "20:12"
    ],
    "ans": "15:4",
    "explanation": ""
  },
  {
    "q": "Divide N840 among A, B and C in the ratio 3:4:5. Find B's share.",
    "options": [
      "N210",
      "N280",
      "N350",
      "N420"
    ],
    "ans": "N280",
    "explanation": ""
  },
  {
    "q": "A map has a scale of 1:50000. Find the actual distance represented by 4cm on the map, in km.",
    "options": [
      "1km",
      "1.5km",
      "2km",
      "2.5km"
    ],
    "ans": "2km",
    "explanation": ""
  },
  {
    "q": "The exchange rate is $1 = N1500. Find the value in naira of $250.",
    "options": [
      "N300,000",
      "N350,000",
      "N375,000",
      "N400,000"
    ],
    "ans": "N375,000",
    "explanation": ""
  },
  {
    "q": "A trader marks up goods by 30% then gives a discount of 10% on the marked price. Find the overall percentage profit.",
    "options": [
      "15%",
      "17%",
      "20%",
      "23%"
    ],
    "ans": "17%",
    "explanation": ""
  },
  {
    "q": "Find the value of x if the ratio 2x:3 = 8:6",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Find the next term in the sequence 2, 5, 10, 17, 26, …",
    "options": [
      "33",
      "35",
      "37",
      "39"
    ],
    "ans": "37",
    "explanation": ""
  },
  {
    "q": "Find the nth term formula for the sequence 3, 7, 11, 15, …",
    "options": [
      "4n - 1",
      "4n + 1",
      "3n + 1",
      "4n - 3"
    ],
    "ans": "4n - 1",
    "explanation": ""
  },
  {
    "q": "Find the sum of the first 8 terms of the AP with first term 2 and common difference 5.",
    "options": [
      "140",
      "148",
      "156",
      "164"
    ],
    "ans": "156",
    "explanation": ""
  },
  {
    "q": "If the 4th term of an AP is 20 and the 9th term is 40, find the common difference.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "Find the sum of an infinite GP with first term 12 and common ratio 1/3.",
    "options": [
      "16",
      "18",
      "20",
      "24"
    ],
    "ans": "18",
    "explanation": ""
  },
  {
    "q": "Find the 6th term of the GP whose first term is 5 and common ratio is -2.",
    "options": [
      "-160",
      "160",
      "-80",
      "80"
    ],
    "ans": "-160",
    "explanation": ""
  },
  {
    "q": "Find the perimeter of a semicircle with radius 7cm. (π = 22/7)",
    "options": [
      "28cm",
      "30cm",
      "36cm",
      "44cm"
    ],
    "ans": "36cm",
    "explanation": ""
  },
  {
    "q": "Find the area of a trapezium with parallel sides 8cm and 12cm and height 5cm.",
    "options": [
      "40cm²",
      "45cm²",
      "50cm²",
      "60cm²"
    ],
    "ans": "50cm²",
    "explanation": ""
  },
  {
    "q": "Find the area of a parallelogram with base 10cm and height 6cm.",
    "options": [
      "30cm²",
      "40cm²",
      "50cm²",
      "60cm²"
    ],
    "ans": "60cm²",
    "explanation": ""
  },
  {
    "q": "A rhombus has diagonals 10cm and 24cm. Find its area.",
    "options": [
      "100cm²",
      "120cm²",
      "140cm²",
      "240cm²"
    ],
    "ans": "120cm²",
    "explanation": ""
  },
  {
    "q": "Find the circumference of a circle with radius 14cm. (π = 22/7)",
    "options": [
      "44cm",
      "66cm",
      "88cm",
      "99cm"
    ],
    "ans": "88cm",
    "explanation": ""
  },
  {
    "q": "A pizza is cut into 8 equal slices. Find the angle at the centre subtended by each slice.",
    "options": [
      "30°",
      "36°",
      "45°",
      "60°"
    ],
    "ans": "45°",
    "explanation": ""
  },
  {
    "q": "Find the number of sides of a polygon whose sum of interior angles is 1440°.",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "ans": "10",
    "explanation": ""
  },
  {
    "q": "Two similar triangles have corresponding sides in ratio 2:3. Find the ratio of their areas.",
    "options": [
      "2:3",
      "4:6",
      "4:9",
      "8:27"
    ],
    "ans": "4:9",
    "explanation": ""
  },
  {
    "q": "Two similar cubes have corresponding sides in ratio 2:3. Find the ratio of their volumes.",
    "options": [
      "2:3",
      "4:9",
      "6:9",
      "8:27"
    ],
    "ans": "8:27",
    "explanation": ""
  },
  {
    "q": "A solid cone is melted and recast into a solid sphere of the same volume, with the sphere having radius 6cm. Find the volume of the cone. (π = 22/7)",
    "options": [
      "850cm³",
      "880cm³",
      "905.1cm³",
      "950cm³"
    ],
    "ans": "905.1cm³",
    "explanation": ""
  },
  {
    "q": "A cylindrical tank has radius 3.5m and height 4m. Find its volume. (π = 22/7)",
    "options": [
      "140m³",
      "150m³",
      "154m³",
      "160m³"
    ],
    "ans": "154m³",
    "explanation": ""
  },
  {
    "q": "Find x if sin(2x) = cos(30°), 0° ≤ x ≤ 90°.",
    "options": [
      "15°",
      "20°",
      "30°",
      "45°"
    ],
    "ans": "30°",
    "explanation": ""
  },
  {
    "q": "Simplify sin²θ + cos²θ",
    "options": [
      "0",
      "1",
      "2",
      "sin2θ"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "If tanθ = 4/3, find sinθ (θ acute).",
    "options": [
      "3/5",
      "4/5",
      "5/4",
      "5/3"
    ],
    "ans": "4/5",
    "explanation": ""
  },
  {
    "q": "Find the value of sin 90° - cos 0°.",
    "options": [
      "-1",
      "0",
      "1",
      "2"
    ],
    "ans": "0",
    "explanation": ""
  },
  {
    "q": "A ladder leans against a wall making an angle of 60° with the ground. If the foot of the ladder is 4m from the wall, find the length of the ladder.",
    "options": [
      "6m",
      "7m",
      "8m",
      "9m"
    ],
    "ans": "8m",
    "explanation": ""
  },
  {
    "q": "Two points A(1,1) and B(4,5). Find the gradient of AB.",
    "options": [
      "3/4",
      "4/3",
      "5/3",
      "1"
    ],
    "ans": "4/3",
    "explanation": ""
  },
  {
    "q": "Find the equation of a line parallel to y = 4x - 2 passing through (2,3).",
    "options": [
      "y = 4x - 5",
      "y = 4x + 5",
      "y = 4x - 2",
      "y = 4x + 2"
    ],
    "ans": "y = 4x - 5",
    "explanation": ""
  },
  {
    "q": "Find the x-intercept of the line 2x + 3y = 12.",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "ans": "6",
    "explanation": ""
  },
  {
    "q": "Find the y-intercept of the line 3x - 4y = 8.",
    "options": [
      "-2",
      "2",
      "-8",
      "8"
    ],
    "ans": "-2",
    "explanation": ""
  },
  {
    "q": "A committee of 3 is chosen from 5 men and 3 women. Find the number of ways the committee can have at least 1 woman.",
    "options": [
      "36",
      "40",
      "46",
      "50"
    ],
    "ans": "46",
    "explanation": ""
  },
  {
    "q": "Find the number of ways to arrange 5 different books on a shelf.",
    "options": [
      "60",
      "100",
      "120",
      "720"
    ],
    "ans": "120",
    "explanation": ""
  },
  {
    "q": "Find the number of 3-digit numbers that can be formed from digits 1,2,3,4,5 without repetition.",
    "options": [
      "60",
      "100",
      "120",
      "125"
    ],
    "ans": "60",
    "explanation": ""
  },
  {
    "q": "A box contains 3 red, 4 blue and 5 green balls. Find the probability of drawing a red ball.",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "3/4"
    ],
    "ans": "1/4",
    "explanation": ""
  },
  {
    "q": "Two unbiased coins are tossed. Find the probability of getting at least one head.",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    "ans": "3/4",
    "explanation": ""
  },
  {
    "q": "Find the mean of the numbers 4, 8, 12, 16, 20.",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "Find the median of 3, 7, 9, 12, 15, 20.",
    "options": [
      "9",
      "10",
      "10.5",
      "12"
    ],
    "ans": "10.5",
    "explanation": ""
  },
  {
    "q": "The variance of a data set is 16. Find its standard deviation.",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "A frequency table shows scores 2 (freq 3), 4 (freq 5), 6 (freq 2). Find the mean score.",
    "options": [
      "3.5",
      "3.8",
      "4.0",
      "4.2"
    ],
    "ans": "3.8",
    "explanation": ""
  },
  {
    "q": "If the mean of 5 numbers is 20, find the sum of the numbers.",
    "options": [
      "80",
      "90",
      "100",
      "110"
    ],
    "ans": "100",
    "explanation": ""
  },
  {
    "q": "Find the probability of not getting a 6 when a die is thrown once.",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "5/6"
    ],
    "ans": "5/6",
    "explanation": ""
  },
  {
    "q": "A number when divided by 15 leaves remainder 7. Find the remainder when the same number is divided by 5.",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "ans": "2",
    "explanation": ""
  },
  {
    "q": "Find the smallest number which when divided by 4, 5 and 6 leaves remainder 3 in each case.",
    "options": [
      "60",
      "63",
      "66",
      "69"
    ],
    "ans": "63",
    "explanation": ""
  },
  {
    "q": "Find the sum of the first 20 positive integers.",
    "options": [
      "190",
      "200",
      "210",
      "220"
    ],
    "ans": "210",
    "explanation": ""
  },
  {
    "q": "Simplify 2√3 × 3√12",
    "options": [
      "24",
      "30",
      "36",
      "42"
    ],
    "ans": "36",
    "explanation": ""
  },
  {
    "q": "Simplify (√2 + √3)²",
    "options": [
      "5 + 2√6",
      "5 + √6",
      "5 - 2√6",
      "6 + 2√6"
    ],
    "ans": "5 + 2√6",
    "explanation": ""
  },
  {
    "q": "Find x: √(x+5) = 4",
    "options": [
      "9",
      "11",
      "13",
      "16"
    ],
    "ans": "11",
    "explanation": ""
  },
  {
    "q": "Solve for x: 2^x = 1/8",
    "options": [
      "-3",
      "-2",
      "2",
      "3"
    ],
    "ans": "-3",
    "explanation": ""
  },
  {
    "q": "If log₂8 = 3, find log₂32.",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "Simplify log₁₀100 + log₁₀10",
    "options": [
      "2",
      "3",
      "10",
      "1000"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "If log x = 2 (base 10), find x.",
    "options": [
      "10",
      "20",
      "100",
      "1000"
    ],
    "ans": "100",
    "explanation": ""
  },
  {
    "q": "Express log(8) in terms of log 2.",
    "options": [
      "2log2",
      "3log2",
      "4log2",
      "log2"
    ],
    "ans": "3log2",
    "explanation": ""
  },
  {
    "q": "Solve: 3(x-2) - 2(x+1) = 5",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "ans": "13",
    "explanation": ""
  },
  {
    "q": "Solve: x/3 + x/4 = 7",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "ans": "12",
    "explanation": ""
  },
  {
    "q": "If 3 men can build a wall in 8 days, how many days will 4 men take (same rate)?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "ans": "6",
    "explanation": ""
  },
  {
    "q": "6 workers can complete a task in 10 days. How many workers are needed to complete it in 4 days?",
    "options": [
      "12",
      "15",
      "18",
      "20"
    ],
    "ans": "15",
    "explanation": ""
  },
  {
    "q": "A tap fills a tank in 6 hours, another fills it in 3 hours. Working together, how long to fill the tank?",
    "options": [
      "1.5h",
      "2h",
      "2.5h",
      "3h"
    ],
    "ans": "2h",
    "explanation": ""
  },
  {
    "q": "Pipe A can fill a tank in 4 hours and pipe B can empty it in 6 hours. If both are opened together, how long to fill the tank?",
    "options": [
      "10h",
      "12h",
      "14h",
      "16h"
    ],
    "ans": "12h",
    "explanation": ""
  },
  {
    "q": "Find the area of a square whose perimeter is 48cm.",
    "options": [
      "120cm²",
      "132cm²",
      "144cm²",
      "156cm²"
    ],
    "ans": "144cm²",
    "explanation": ""
  },
  {
    "q": "Find the length of the diagonal of a square with side 10cm.",
    "options": [
      "10cm",
      "12cm",
      "14.1cm",
      "20cm"
    ],
    "ans": "14.1cm",
    "explanation": ""
  },
  {
    "q": "The angle of elevation of the top of a tower from a point 30m away is 30°. Find the height of the tower.",
    "options": [
      "15m",
      "17.3m",
      "20m",
      "25.9m"
    ],
    "ans": "17.3m",
    "explanation": ""
  },
  {
    "q": "From the top of a cliff 60m high, the angle of depression of a boat is 30°. Find the distance of the boat from the base of the cliff.",
    "options": [
      "60m",
      "90m",
      "103.9m",
      "120m"
    ],
    "ans": "103.9m",
    "explanation": ""
  },
  {
    "q": "Find the bearing of a point Q from P if Q is due east of P.",
    "options": [
      "000°",
      "090°",
      "180°",
      "270°"
    ],
    "ans": "090°",
    "explanation": ""
  },
  {
    "q": "A point Q is on a bearing of 135° from P. Find the bearing of P from Q.",
    "options": [
      "045°",
      "225°",
      "315°",
      "135°"
    ],
    "ans": "315°",
    "explanation": ""
  },
  {
    "q": "Find the value of x in the equation cos x = sin 40°, 0° ≤ x ≤ 90°.",
    "options": [
      "40°",
      "45°",
      "50°",
      "60°"
    ],
    "ans": "50°",
    "explanation": ""
  },
  {
    "q": "Simplify 2 sin30° cos30°",
    "options": [
      "1/2",
      "√3/2",
      "1",
      "√3"
    ],
    "ans": "√3/2",
    "explanation": ""
  },
  {
    "q": "Find the number of subsets of a set with 5 elements.",
    "options": [
      "10",
      "16",
      "25",
      "32"
    ],
    "ans": "32",
    "explanation": ""
  },
  {
    "q": "If A = {1,2,3,4} and B = {3,4,5,6}, find A∩B.",
    "options": [
      "{1,2}",
      "{3,4}",
      "{5,6}",
      "{1,2,3,4,5,6}"
    ],
    "ans": "{3,4}",
    "explanation": ""
  },
  {
    "q": "If A = {1,2,3,4} and B = {3,4,5,6}, find A∪B.",
    "options": [
      "{3,4}",
      "{1,2,5,6}",
      "{1,2,3,4,5,6}",
      "{1,2,3,4}"
    ],
    "ans": "{1,2,3,4,5,6}",
    "explanation": ""
  },
  {
    "q": "If U = {1,2,…,10} and A = {2,4,6,8,10}, find A' (complement of A).",
    "options": [
      "{1,3,5,7,9}",
      "{2,4,6,8,10}",
      "{1,2,3}",
      "{ }"
    ],
    "ans": "{1,3,5,7,9}",
    "explanation": ""
  },
  {
    "q": "In a survey, 40 people like tea, 35 like coffee, 15 like both, and 10 like neither. Find the total number of people surveyed.",
    "options": [
      "60",
      "65",
      "70",
      "75"
    ],
    "ans": "70",
    "explanation": ""
  },
  {
    "q": "Find the number of elements in the power set of a set with 4 elements.",
    "options": [
      "8",
      "12",
      "16",
      "32"
    ],
    "ans": "16",
    "explanation": ""
  },
  {
    "q": "A number x is such that 40% of x is 60. Find x.",
    "options": [
      "120",
      "130",
      "140",
      "150"
    ],
    "ans": "150",
    "explanation": ""
  },
  {
    "q": "If ⅗ of a number is 45, find the number.",
    "options": [
      "60",
      "65",
      "70",
      "75"
    ],
    "ans": "75",
    "explanation": ""
  },
  {
    "q": "A shop reduces the price of an item from N500 to N400. Find the percentage reduction.",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "ans": "20%",
    "explanation": ""
  },
  {
    "q": "An item's price increased from N250 to N300. Find the percentage increase.",
    "options": [
      "15%",
      "18%",
      "20%",
      "25%"
    ],
    "ans": "20%",
    "explanation": ""
  },
  {
    "q": "Find 15% of 240.",
    "options": [
      "32",
      "34",
      "36",
      "38"
    ],
    "ans": "36",
    "explanation": ""
  },
  {
    "q": "If 25% of a number is 20, find 75% of the same number.",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "ans": "60",
    "explanation": ""
  },
  {
    "q": "Find the value of (2x - 1)(x + 4) when x = 3.",
    "options": [
      "30",
      "32",
      "35",
      "40"
    ],
    "ans": "35",
    "explanation": ""
  },
  {
    "q": "If a = 2, b = -3, evaluate a² - b²",
    "options": [
      "-5",
      "5",
      "-1",
      "1"
    ],
    "ans": "-5",
    "explanation": ""
  },
  {
    "q": "Simplify (a+b)² - (a-b)²",
    "options": [
      "2ab",
      "4ab",
      "a² + b²",
      "2a² + 2b²"
    ],
    "ans": "4ab",
    "explanation": ""
  },
  {
    "q": "Factorize a² - b²",
    "options": [
      "(a-b)(a+b)",
      "(a+b)²",
      "(a-b)²",
      "a² - 2ab + b²"
    ],
    "ans": "(a-b)(a+b)",
    "explanation": ""
  },
  {
    "q": "Solve x² - 4 = 0",
    "options": [
      "x = 2 only",
      "x = -2 only",
      "x = ±2",
      "x = 4"
    ],
    "ans": "x = ±2",
    "explanation": ""
  },
  {
    "q": "Solve x² + 6x + 9 = 0",
    "options": [
      "x = -3 (repeated)",
      "x = 3",
      "x = ±3",
      "no real solution"
    ],
    "ans": "x = -3 (repeated)",
    "explanation": ""
  },
  {
    "q": "Find the discriminant of 2x² - 4x + 1 = 0.",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "ans": "8",
    "explanation": ""
  },
  {
    "q": "Find the nature of roots of x² + 2x + 5 = 0.",
    "options": [
      "real and equal",
      "real and distinct",
      "no real roots",
      "rational roots"
    ],
    "ans": "no real roots",
    "explanation": ""
  },
  {
    "q": "Find the coordinates of the point where the line y = 2x - 4 crosses the x-axis.",
    "options": [
      "(0,2)",
      "(2,0)",
      "(0,-4)",
      "(-4,0)"
    ],
    "ans": "(2,0)",
    "explanation": ""
  },
  {
    "q": "Find the coordinates of the point where the line y = 2x - 4 crosses the y-axis.",
    "options": [
      "(0,2)",
      "(2,0)",
      "(0,-4)",
      "(-4,0)"
    ],
    "ans": "(0,-4)",
    "explanation": ""
  },
  {
    "q": "Two dice are thrown. Find the probability that both show the same number.",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "1/4"
    ],
    "ans": "1/6",
    "explanation": ""
  },
  {
    "q": "A bag has 6 balls numbered 1 to 6. Two balls are drawn without replacement. Find the probability that both numbers are even.",
    "options": [
      "1/5",
      "1/6",
      "1/3",
      "2/5"
    ],
    "ans": "1/5",
    "explanation": ""
  },
  {
    "q": "Find the probability that a number selected from 1 to 20 is a multiple of 4.",
    "options": [
      "1/5",
      "1/4",
      "3/10",
      "2/5"
    ],
    "ans": "1/4",
    "explanation": ""
  },
  {
    "q": "Find the probability that a number selected from 1 to 30 is a prime number.",
    "options": [
      "1/4",
      "1/3",
      "2/5",
      "3/10"
    ],
    "ans": "1/3",
    "explanation": ""
  },
  {
    "q": "Find the sum of the interior angles of a regular decagon (10 sides).",
    "options": [
      "1260°",
      "1440°",
      "1620°",
      "1800°"
    ],
    "ans": "1440°",
    "explanation": ""
  },
  {
    "q": "Find the value of x if the exterior angle of a regular polygon with x sides is 24°.",
    "options": [
      "12",
      "14",
      "15",
      "18"
    ],
    "ans": "15",
    "explanation": ""
  },
  {
    "q": "Differentiate y = (3x² + 1)⁵ with respect to x.",
    "options": [
      "30x(3x²+1)⁴",
      "15x(3x²+1)⁴",
      "5(3x²+1)⁴",
      "30x²(3x²+1)⁴"
    ],
    "ans": "30x(3x²+1)⁴",
    "explanation": ""
  },
  {
    "q": "Differentiate y = sin(3x)cos(2x) with respect to x.",
    "options": [
      "3cos3x cos2x - 2sin3x sin2x",
      "3cos3x cos2x + 2sin3x sin2x",
      "-3sin3x cos2x - 2cos3x sin2x",
      "3sin3x cos2x - 2cos3x sin2x"
    ],
    "ans": "3cos3x cos2x - 2sin3x sin2x",
    "explanation": ""
  },
  {
    "q": "Differentiate y = ln(x² + 1).",
    "options": [
      "2x/(x²+1)",
      "1/(x²+1)",
      "x/(x²+1)",
      "2/(x²+1)"
    ],
    "ans": "2x/(x²+1)",
    "explanation": ""
  },
  {
    "q": "Differentiate y = e^(3x²).",
    "options": [
      "6x·e^(3x²)",
      "3x²·e^(3x²)",
      "e^(3x²)",
      "6·e^(3x²)"
    ],
    "ans": "6x·e^(3x²)",
    "explanation": ""
  },
  {
    "q": "Find dy/dx if y = xˣ.",
    "options": [
      "xˣ(ln x + 1)",
      "xˣ ln x",
      "x·xˣ⁻¹",
      "xˣ/x"
    ],
    "ans": "xˣ(ln x + 1)",
    "explanation": ""
  },
  {
    "q": "Find d²y/dx² if y = x⁴ - 3x² + 2.",
    "options": [
      "12x² - 6",
      "12x² + 6",
      "4x² - 6",
      "12x - 6"
    ],
    "ans": "12x² - 6",
    "explanation": ""
  },
  {
    "q": "If x² + y² = 25, find dy/dx.",
    "options": [
      "-x/y",
      "x/y",
      "-y/x",
      "y/x"
    ],
    "ans": "-x/y",
    "explanation": ""
  },
  {
    "q": "Find dy/dx if xy + y² = 7.",
    "options": [
      "-y/(x+2y)",
      "y/(x+2y)",
      "-x/(x+2y)",
      "-y/(2y-x)"
    ],
    "ans": "-y/(x+2y)",
    "explanation": ""
  },
  {
    "q": "Find the derivative of y = tan(2x).",
    "options": [
      "2sec²(2x)",
      "sec²(2x)",
      "2sec(2x)tan(2x)",
      "tan²(2x)"
    ],
    "ans": "2sec²(2x)",
    "explanation": ""
  },
  {
    "q": "Differentiate y = (2x-1)/(x+3) using the quotient rule.",
    "options": [
      "7/(x+3)²",
      "-7/(x+3)²",
      "5/(x+3)²",
      "1/(x+3)²"
    ],
    "ans": "7/(x+3)²",
    "explanation": ""
  },
  {
    "q": "Find the stationary points of y = 2x³ - 3x² - 12x + 5.",
    "options": [
      "x = 2, -1",
      "x = 1, -2",
      "x = 0, 2",
      "x = -2, 1"
    ],
    "ans": "x = 2, -1",
    "explanation": ""
  },
  {
    "q": "For y = 2x³ - 3x² - 12x + 5, determine the nature of the stationary point at x = 2.",
    "options": [
      "Maximum",
      "Minimum",
      "Point of inflection",
      "Cannot be determined"
    ],
    "ans": "Minimum",
    "explanation": ""
  },
  {
    "q": "For y = 2x³ - 3x² - 12x + 5, determine the nature of the stationary point at x = -1.",
    "options": [
      "Maximum",
      "Minimum",
      "Point of inflection",
      "Saddle point"
    ],
    "ans": "Maximum",
    "explanation": ""
  },
  {
    "q": "Find the point of inflection of y = x³ - 6x² + 9x + 1.",
    "options": [
      "x = 1",
      "x = 2",
      "x = 3",
      "x = 0"
    ],
    "ans": "x = 2",
    "explanation": ""
  },
  {
    "q": "Find the maximum value of y = -x² + 4x + 1.",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "A rectangular box with a square base is to have a volume of 32 cubic units. Find the side of the square base that minimizes the total surface area.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "Find the maximum area of a rectangle inscribed in a semicircle of radius r (with its base on the diameter), expressed in terms of r.",
    "options": [
      "r²/2",
      "r²",
      "2r²",
      "πr²/2"
    ],
    "ans": "r²",
    "explanation": ""
  },
  {
    "q": "A ladder 5m long leans against a vertical wall. The bottom slides away from the wall at 2 m/s. Find the rate at which the top slides down when the bottom is 3m from the wall.",
    "options": [
      "1 m/s",
      "1.5 m/s",
      "2 m/s",
      "2.5 m/s"
    ],
    "ans": "1.5 m/s",
    "explanation": ""
  },
  {
    "q": "The radius of a circle increases at 3 cm/s. Find the rate of increase of its area when the radius is 5cm.",
    "options": [
      "15π cm²/s",
      "20π cm²/s",
      "25π cm²/s",
      "30π cm²/s"
    ],
    "ans": "30π cm²/s",
    "explanation": ""
  },
  {
    "q": "The volume of a sphere increases at 8π cm³/s. Find the rate of increase of the radius when r = 2cm.",
    "options": [
      "0.25 cm/s",
      "0.5 cm/s",
      "1 cm/s",
      "2 cm/s"
    ],
    "ans": "0.5 cm/s",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ x² eˣ dx.",
    "options": [
      "eˣ(x² - 2x + 2) + C",
      "eˣ(x² + 2x + 2) + C",
      "eˣ(x² - 2x - 2) + C",
      "eˣ(x² - 2) + C"
    ],
    "ans": "eˣ(x² - 2x + 2) + C",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ x cos x dx.",
    "options": [
      "x sin x + cos x + C",
      "x sin x - cos x + C",
      "-x sin x + cos x + C",
      "x cos x - sin x + C"
    ],
    "ans": "x sin x + cos x + C",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ ln x dx.",
    "options": [
      "x ln x - x + C",
      "x ln x + x + C",
      "ln x - x + C",
      "x/ln x + C"
    ],
    "ans": "x ln x - x + C",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ (2x)/(x²+1) dx.",
    "options": [
      "ln(x²+1) + C",
      "2ln(x²+1) + C",
      "ln(x) + C",
      "(x²+1)² + C"
    ],
    "ans": "ln(x²+1) + C",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ sin²x dx.",
    "options": [
      "x/2 - (sin2x)/4 + C",
      "x/2 + (sin2x)/4 + C",
      "-cos2x/2 + C",
      "x - sinx cosx + 2C"
    ],
    "ans": "x/2 - (sin2x)/4 + C",
    "explanation": ""
  },
  {
    "q": "Evaluate the definite integral ∫₀^(π/2) cos x dx.",
    "options": [
      "0",
      "1",
      "π/2",
      "-1"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫₁³ (2x - 1) dx.",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "ans": "6",
    "explanation": ""
  },
  {
    "q": "Find the area enclosed between the curve y = x² and the line y = x.",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "1"
    ],
    "ans": "1/6",
    "explanation": ""
  },
  {
    "q": "Find the volume generated when the region bounded by y = x², the x-axis, x = 0 and x = 2, is rotated about the x-axis.",
    "options": [
      "16π/5",
      "32π/5",
      "64π/5",
      "8π"
    ],
    "ans": "32π/5",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ e^(2x) dx.",
    "options": [
      "½e^(2x) + C",
      "2e^(2x) + C",
      "e^(2x) + C",
      "e^(2x)/x + C"
    ],
    "ans": "½e^(2x) + C",
    "explanation": ""
  },
  {
    "q": "Evaluate ∫ (3x² - 4x + 5) dx.",
    "options": [
      "x³ - 2x² + 5x + C",
      "3x³ - 4x² + 5x + C",
      "x³ - 2x² + 5x",
      "x³ + 2x² + 5x + C"
    ],
    "ans": "x³ - 2x² + 5x + C",
    "explanation": ""
  },
  {
    "q": "Find the general solution of dy/dx = 3x².",
    "options": [
      "y = x³ + C",
      "y = 3x² + C",
      "y = x³",
      "y = x³/3 + C"
    ],
    "ans": "y = x³ + C",
    "explanation": ""
  },
  {
    "q": "Solve the differential equation dy/dx = y/x, expressing the general solution.",
    "options": [
      "y = kx",
      "y = ke^x",
      "y = k/x",
      "y = kx²"
    ],
    "ans": "y = kx",
    "explanation": ""
  },
  {
    "q": "Find the particular solution of dy/dx = 2x given that y = 5 when x = 0.",
    "options": [
      "y = x² + 5",
      "y = x² + 2",
      "y = 2x + 5",
      "y = x² - 5"
    ],
    "ans": "y = x² + 5",
    "explanation": ""
  },
  {
    "q": "Find lim(x→2) (x² - 4)/(x - 2).",
    "options": [
      "0",
      "2",
      "4",
      "undefined"
    ],
    "ans": "4",
    "explanation": ""
  },
  {
    "q": "Find lim(x→0) sin(3x)/x.",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Find lim(x→∞) (3x² + 2x)/(x² - 5).",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "ans": "3",
    "explanation": ""
  },
  {
    "q": "Find lim(x→0) (1 - cos x)/x².",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "ans": "1/2",
    "explanation": ""
  },
  {
    "q": "Differentiate y = sec x.",
    "options": [
      "sec x tan x",
      "sec²x",
      "-sec x tan x",
      "tan x"
    ],
    "ans": "sec x tan x",
    "explanation": ""
  },
  {
    "q": "Differentiate y = cot x.",
    "options": [
      "-csc²x",
      "csc²x",
      "-sec²x",
      "cot²x"
    ],
    "ans": "-csc²x",
    "explanation": ""
  },
  {
    "q": "Find d/dx [x² ln x].",
    "options": [
      "2x ln x + x",
      "2x ln x",
      "x ln x + x",
      "2 ln x + x"
    ],
    "ans": "2x ln x + x",
    "explanation": ""
  },
  {
    "q": "Find d/dx [eˣ sin x].",
    "options": [
      "eˣ(sinx + cosx)",
      "eˣ sinx",
      "eˣ(cosx - sinx)",
      "eˣ cosx"
    ],
    "ans": "eˣ(sinx + cosx)",
    "explanation": ""
  },
  {
    "q": "Find the second derivative of y = sin x.",
    "options": [
      "-sin x",
      "sin x",
      "-cos x",
      "cos x"
    ],
    "ans": "-sin x",
    "explanation": ""
  },
  {
    "q": "Find the third derivative of y = x⁵.",
    "options": [
      "60x²",
      "20x³",
      "120x",
      "60x"
    ],
    "ans": "60x²",
    "explanation": ""
  },
  {
    "q": "Evaluate lim(x→0) (eˣ - 1)/x.",
    "options": [
      "0",
      "1",
      "e",
      "∞"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "The displacement of a particle is s(t) = t³ - 6t² + 9t. Find the time(s) when the particle is momentarily at rest.",
    "options": [
      "t = 1, 3",
      "t = 0, 3",
      "t = 1, 4",
      "t = 2, 3"
    ],
    "ans": "t = 1, 3",
    "explanation": ""
  },
  {
    "q": "For s(t) = t³ - 6t² + 9t, find the acceleration at t = 2.",
    "options": [
      "0",
      "2",
      "-2",
      "4"
    ],
    "ans": "0",
    "explanation": ""
  },
  {
    "q": "Find the equation of the tangent to the curve y = x² - 3x + 2 at the point where x = 1.",
    "options": [
      "y = -x + 1",
      "y = x - 1",
      "y = -x - 1",
      "y = x + 1"
    ],
    "ans": "y = -x + 1",
    "explanation": ""
  },
  {
    "q": "Find the equation of the normal to the curve y = x² at the point (1,1).",
    "options": [
      "y = -½x + 3/2",
      "y = ½x + 1/2",
      "y = -2x + 3",
      "y = 2x - 1"
    ],
    "ans": "y = -½x + 3/2",
    "explanation": ""
  },
  {
    "q": "If y' = 2 and y'' = 4 at a point on a curve, evaluate the radius of curvature (1 + y'²)^(3/2) / y'' at that point.",
    "options": [
      "5√5/4",
      "5/4",
      "√5/4",
      "25/4"
    ],
    "ans": "5√5/4",
    "explanation": ""
  }
],
  "PUTME_CRK": [
  {
    "q": "God rejected Saul as king of Israel primarily because he",
    "options": [
      "failed to defeat the Philistines.",
      "refused to build an altar to God.",
      "disobeyed God's command by sparing Agag and the best livestock.",
      "appointed David as his successor."
    ],
    "ans": "disobeyed God's command by sparing Agag and the best livestock.",
    "explanation": "Disobeyed God's command by sparing Agag and the best livestock."
  },
  {
    "q": "According to the Book of Genesis, the covenant God made with Abraham was sealed through",
    "options": [
      "water baptism.",
      "circumcision.",
      "sacrifice at Shiloh.",
      "the Passover feast."
    ],
    "ans": "circumcision.",
    "explanation": "Circumcision."
  },
  {
    "q": "When Elijah challenged the prophets of Baal on Mount Carmel, the people finally acknowledged that",
    "options": [
      "Baal was the true god.",
      "Elijah was the new king.",
      "the LORD alone is God.",
      "the prophets deserved another opportunity."
    ],
    "ans": "the LORD alone is God.",
    "explanation": "The LORD alone is God."
  },
  {
    "q": "The primary reason Nathan confronted David after the death of Uriah was to",
    "options": [
      "appoint Solomon as king.",
      "restore Joab's position.",
      "pronounce God's judgment on David's sin.",
      "command David to rebuild Jerusalem."
    ],
    "ans": "pronounce God's judgment on David's sin.",
    "explanation": "Pronounce God's judgment on David's sin."
  },
  {
    "q": "Which king introduced idol worship into Judah by placing pagan altars in the Temple?",
    "options": [
      "Hezekiah",
      "Josiah",
      "Manasseh",
      "Jehoshaphat"
    ],
    "ans": "Manasseh",
    "explanation": "Manasseh."
  },
  {
    "q": "Joseph's interpretation of Pharaoh's dreams led directly to",
    "options": [
      "Joseph becoming commander of the Egyptian army.",
      "Joseph becoming governor over Egypt.",
      "the release of the Israelites from slavery.",
      "Jacob becoming king of Egypt."
    ],
    "ans": "Joseph becoming governor over Egypt.",
    "explanation": "Joseph becoming governor over Egypt."
  },
  {
    "q": "The major lesson from the Parable of the Good Samaritan is that",
    "options": [
      "wealth guarantees salvation.",
      "priests are always righteous.",
      "true neighbourliness is shown through practical compassion.",
      "Jews should avoid Samaritans."
    ],
    "ans": "true neighbourliness is shown through practical compassion.",
    "explanation": "True neighbourliness is shown through practical compassion."
  },
  {
    "q": "Jesus said that the greatest commandment is to",
    "options": [
      "obey the Roman government.",
      "fast regularly.",
      "love God with all one's heart, soul, mind, and strength.",
      "give offerings every Sabbath."
    ],
    "ans": "love God with all one's heart, soul, mind, and strength.",
    "explanation": "Love God with all one's heart, soul, mind, and strength."
  },
  {
    "q": "The miracle at Cana primarily demonstrated Jesus'",
    "options": [
      "concern for political leaders.",
      "rejection of Jewish customs.",
      "divine authority and glory.",
      "opposition to marriage ceremonies."
    ],
    "ans": "divine authority and glory.",
    "explanation": "Divine authority and glory."
  },
  {
    "q": "The main reason Peter denied Jesus three times was",
    "options": [
      "hatred for Jesus.",
      "fear of being arrested and persecuted.",
      "lack of faith in miracles.",
      "disagreement with the disciples."
    ],
    "ans": "fear of being arrested and persecuted.",
    "explanation": "Fear of being arrested and persecuted."
  },
  {
    "q": "During the temptation in the wilderness, Jesus consistently responded to Satan by",
    "options": [
      "performing miracles.",
      "praying silently.",
      "quoting the Scriptures.",
      "calling angels for help."
    ],
    "ans": "quoting the Scriptures.",
    "explanation": "Quoting the Scriptures."
  },
  {
    "q": "Which disciple doubted Jesus' resurrection until he saw Him personally?",
    "options": [
      "Andrew",
      "Philip",
      "Thomas",
      "Matthew"
    ],
    "ans": "Thomas",
    "explanation": "Thomas."
  },
  {
    "q": "The purpose of the Jerusalem Council recorded in Acts 15 was mainly to determine",
    "options": [
      "where Paul should preach next.",
      "whether Gentile converts should observe the Mosaic law, especially circumcision.",
      "who should replace Judas Iscariot.",
      "where the Temple should be rebuilt."
    ],
    "ans": "whether Gentile converts should observe the Mosaic law, especially circumcision.",
    "explanation": "Whether Gentile converts should observe the Mosaic law, especially circumcision."
  },
  {
    "q": "According to Paul, the greatest Christian virtue is",
    "options": [
      "faith.",
      "hope.",
      "love.",
      "patience."
    ],
    "ans": "love.",
    "explanation": "Love."
  },
  {
    "q": "The first Christian martyr was",
    "options": [
      "James.",
      "Stephen.",
      "Barnabas.",
      "Silas."
    ],
    "ans": "Stephen.",
    "explanation": "Stephen."
  },
  {
    "q": "The event that marked the official beginning of the Christian Church was",
    "options": [
      "the baptism of Jesus.",
      "the transfiguration.",
      "the coming of the Holy Spirit on the Day of Pentecost.",
      "Paul's conversion."
    ],
    "ans": "the coming of the Holy Spirit on the Day of Pentecost.",
    "explanation": "The coming of the Holy Spirit on the Day of Pentecost."
  },
  {
    "q": "God's question to Cain, \"Where is your brother Abel?\" was intended primarily to",
    "options": [
      "obtain information.",
      "give Cain an opportunity to confess his sin.",
      "locate Abel's body.",
      "accuse Adam."
    ],
    "ans": "give Cain an opportunity to confess his sin.",
    "explanation": "Give Cain an opportunity to confess his sin."
  },
  {
    "q": "The major reason God destroyed the world through the Flood was",
    "options": [
      "human ignorance.",
      "widespread wickedness and corruption.",
      "Noah's request.",
      "failure to build the ark quickly."
    ],
    "ans": "widespread wickedness and corruption.",
    "explanation": "Widespread wickedness and corruption."
  },
  {
    "q": "Which prophet confronted King Ahab over the murder of Naboth?",
    "options": [
      "Elisha",
      "Amos",
      "Elijah",
      "Isaiah"
    ],
    "ans": "Elijah",
    "explanation": "Elijah."
  },
  {
    "q": "The principal lesson from Jesus washing the disciples' feet is",
    "options": [
      "ceremonial cleanliness.",
      "hospitality to strangers.",
      "humility and servant leadership.",
      "respect for Jewish customs."
    ],
    "ans": "humility and servant leadership.",
    "explanation": "Humility and servant leadership."
  },
  {
    "q": "The greatest reason Judas Iscariot betrayed Jesus was",
    "options": [
      "political disagreement.",
      "greed and unbelief.",
      "fear of persecution.",
      "pressure from the disciples."
    ],
    "ans": "greed and unbelief.",
    "explanation": "Greed and unbelief."
  },
  {
    "q": "At the conversion of Saul, Ananias was instructed by God to",
    "options": [
      "imprison Saul.",
      "rebuke Saul publicly.",
      "restore Saul's sight and baptize him.",
      "send Saul back to Jerusalem."
    ],
    "ans": "restore Saul's sight and baptize him.",
    "explanation": "Restore Saul's sight and baptize him."
  },
  {
    "q": "Which of the following best explains the significance of Jesus' resurrection?",
    "options": [
      "It fulfilled Roman law.",
      "It ended the Jewish priesthood immediately.",
      "It demonstrated Christ's victory over sin and death.",
      "It abolished the Ten Commandments."
    ],
    "ans": "It demonstrated Christ's victory over sin and death.",
    "explanation": "It demonstrated Christ's victory over sin and death."
  },
  {
    "q": "The major reason King Solomon's kingdom was later divided was because",
    "options": [
      "Israel lost a war.",
      "Solomon became poor.",
      "Solomon turned away from God by following foreign gods.",
      "David cursed the kingdom."
    ],
    "ans": "Solomon turned away from God by following foreign gods.",
    "explanation": "Solomon turned away from God by following foreign gods."
  },
  {
    "q": "According to the Beatitudes, those who hunger and thirst after righteousness shall",
    "options": [
      "inherit the earth.",
      "see God.",
      "be filled.",
      "obtain mercy."
    ],
    "ans": "be filled.",
    "explanation": "Be filled."
  },
  {
    "q": "The main reason God chose Moses to lead the Israelites out of Egypt was because he",
    "options": [
      "was educated in Pharaoh's palace.",
      "belonged to the tribe of Judah.",
      "was chosen by God despite his weaknesses.",
      "had defeated the Egyptians in battle."
    ],
    "ans": "was chosen by God despite his weaknesses.",
    "explanation": "Was chosen by God despite his weaknesses."
  },
  {
    "q": "The significance of the Passover feast to the Israelites was that it",
    "options": [
      "marked the beginning of harvest.",
      "celebrated the birth of Moses.",
      "commemorated God's deliverance of Israel from Egypt.",
      "marked the coronation of Joshua."
    ],
    "ans": "commemorated God's deliverance of Israel from Egypt.",
    "explanation": "Commemorated God's deliverance of Israel from Egypt."
  },
  {
    "q": "Why did God refuse Moses permission to enter the Promised Land?",
    "options": [
      "He doubted God's existence.",
      "He disobeyed God by striking the rock instead of speaking to it.",
      "He failed to appoint Joshua.",
      "He worshipped the golden calf."
    ],
    "ans": "He disobeyed God by striking the rock instead of speaking to it.",
    "explanation": "He disobeyed God by striking the rock instead of speaking to it."
  },
  {
    "q": "The primary lesson from the story of Job is that",
    "options": [
      "righteous people never suffer.",
      "suffering always results from personal sin.",
      "believers should remain faithful to God even in suffering.",
      "wealth is a sign of holiness."
    ],
    "ans": "believers should remain faithful to God even in suffering.",
    "explanation": "Believers should remain faithful to God even in suffering."
  },
  {
    "q": "Daniel was thrown into the lions' den because he",
    "options": [
      "refused to obey King Nebuchadnezzar.",
      "continued praying to God despite the king's decree.",
      "interpreted the king's dream wrongly.",
      "insulted the Babylonian officials."
    ],
    "ans": "continued praying to God despite the king's decree.",
    "explanation": "Continued praying to God despite the king's decree."
  },
  {
    "q": "The writing on the wall during Belshazzar's feast signified",
    "options": [
      "victory over the Persians.",
      "God's blessing upon Babylon.",
      "God's judgment and the fall of Babylon.",
      "Daniel's appointment as king."
    ],
    "ans": "God's judgment and the fall of Babylon.",
    "explanation": "God's judgment and the fall of Babylon."
  },
  {
    "q": "Which prophet married Gomer to illustrate Israel's unfaithfulness to God?",
    "options": [
      "Amos",
      "Micah",
      "Hosea",
      "Joel"
    ],
    "ans": "Hosea",
    "explanation": "Hosea."
  },
  {
    "q": "Jesus healed the man born blind mainly to demonstrate",
    "options": [
      "the superiority of medicine.",
      "the works and glory of God.",
      "the authority of the Pharisees.",
      "the importance of fasting."
    ],
    "ans": "the works and glory of God.",
    "explanation": "The works and glory of God."
  },
  {
    "q": "In the Parable of the Sower, the seed that fell among thorns represents those who",
    "options": [
      "immediately reject the gospel.",
      "understand but forget the message.",
      "allow worldly cares and riches to choke God's word.",
      "joyfully endure persecution."
    ],
    "ans": "allow worldly cares and riches to choke God's word.",
    "explanation": "Allow worldly cares and riches to choke God's word."
  },
  {
    "q": "The raising of Lazarus from the dead primarily revealed Jesus as",
    "options": [
      "a prophet like Elijah.",
      "a miracle worker only.",
      "the Resurrection and the Life.",
      "the greatest physician."
    ],
    "ans": "the Resurrection and the Life.",
    "explanation": "The Resurrection and the Life."
  },
  {
    "q": "Why did Jesus cleanse the Temple?",
    "options": [
      "To destroy Jewish worship.",
      "Because sacrifices were forbidden.",
      "Because the Temple had become a marketplace instead of a house of prayer.",
      "To remove the Roman soldiers."
    ],
    "ans": "Because the Temple had become a marketplace instead of a house of prayer.",
    "explanation": "Because the Temple had become a marketplace instead of a house of prayer."
  },
  {
    "q": "The Great Commission commanded believers to",
    "options": [
      "establish political kingdoms.",
      "build magnificent temples.",
      "make disciples of all nations.",
      "remain permanently in Jerusalem."
    ],
    "ans": "make disciples of all nations.",
    "explanation": "Make disciples of all nations."
  },
  {
    "q": "The Ethiopian eunuch understood Isaiah's prophecy after",
    "options": [
      "Peter explained it.",
      "Philip explained it.",
      "Barnabas interpreted it.",
      "Paul preached to him."
    ],
    "ans": "Philip explained it.",
    "explanation": "Philip explained it."
  },
  {
    "q": "Dorcas (Tabitha) was widely known among believers because of her",
    "options": [
      "prophetic gifts.",
      "missionary journeys.",
      "acts of charity and good works.",
      "ability to heal the sick."
    ],
    "ans": "acts of charity and good works.",
    "explanation": "Acts of charity and good works."
  },
  {
    "q": "Peter's vision of the sheet containing different animals mainly taught that",
    "options": [
      "Jews should stop eating meat.",
      "all animals are sacred.",
      "God accepts Gentiles as well as Jews through faith.",
      "dietary laws should be strengthened."
    ],
    "ans": "God accepts Gentiles as well as Jews through faith.",
    "explanation": "God accepts Gentiles as well as Jews through faith."
  },
  {
    "q": "Which church was rebuked in Revelation for being \"lukewarm\"?",
    "options": [
      "Smyrna",
      "Ephesus",
      "Laodicea",
      "Philadelphia"
    ],
    "ans": "Laodicea",
    "explanation": "Laodicea."
  },
  {
    "q": "Jesus described Himself as the Good Shepherd because He",
    "options": [
      "owned many sheep.",
      "preferred living in villages.",
      "lays down His life for His sheep.",
      "appointed shepherds in Israel."
    ],
    "ans": "lays down His life for His sheep.",
    "explanation": "Lays down His life for His sheep."
  },
  {
    "q": "The principal reason Ananias and Sapphira died was because they",
    "options": [
      "refused to pay taxes.",
      "lied to the Holy Spirit about the proceeds of their land.",
      "failed to attend worship.",
      "opposed Peter publicly."
    ],
    "ans": "lied to the Holy Spirit about the proceeds of their land.",
    "explanation": "Lied to the Holy Spirit about the proceeds of their land."
  },
  {
    "q": "According to Paul, the body of a believer is",
    "options": [
      "an ordinary human body only.",
      "a temporary prison.",
      "the temple of the Holy Spirit.",
      "irrelevant to Christian living."
    ],
    "ans": "the temple of the Holy Spirit.",
    "explanation": "The temple of the Holy Spirit."
  },
  {
    "q": "The primary purpose of the gifts of the Holy Spirit is",
    "options": [
      "to make believers wealthy.",
      "to distinguish church leaders.",
      "to build up and edify the Church.",
      "to replace love."
    ],
    "ans": "to build up and edify the Church.",
    "explanation": "To build up and edify the Church."
  },
  {
    "q": "Why did Jonah initially refuse to preach in Nineveh?",
    "options": [
      "He did not know the way.",
      "He feared wild animals.",
      "He did not want the Ninevites to receive God's mercy.",
      "He was too old to travel."
    ],
    "ans": "He did not want the Ninevites to receive God's mercy.",
    "explanation": "He did not want the Ninevites to receive God's mercy."
  },
  {
    "q": "The rebuilding of Jerusalem's wall under Nehemiah mainly demonstrated",
    "options": [
      "military strength.",
      "faith, leadership, and perseverance despite opposition.",
      "Israel's economic prosperity.",
      "Roman cooperation."
    ],
    "ans": "faith, leadership, and perseverance despite opposition.",
    "explanation": "Faith, leadership, and perseverance despite opposition."
  },
  {
    "q": "Which miracle immediately followed Peter's sermon on the Day of Pentecost?",
    "options": [
      "Raising Dorcas from the dead.",
      "Healing the lame man at the Beautiful Gate.",
      "Raising Eutychus.",
      "Healing Aeneas."
    ],
    "ans": "Healing the lame man at the Beautiful Gate.",
    "explanation": "Healing the lame man at the Beautiful Gate."
  },
  {
    "q": "According to the Sermon on the Mount, believers are described as",
    "options": [
      "rulers of the earth.",
      "judges of sinners only.",
      "the salt of the earth and the light of the world.",
      "heirs of political authority."
    ],
    "ans": "the salt of the earth and the light of the world.",
    "explanation": "The salt of the earth and the light of the world."
  },
  {
    "q": "Which statement best summarizes the central message of the Gospel?",
    "options": [
      "Good works alone guarantee salvation.",
      "Keeping the Law is sufficient for eternal life.",
      "Wealth is evidence of God's approval.",
      "Salvation comes through faith in Jesus Christ, whose death and resurrection provide forgiveness of sins and eternal life."
    ],
    "ans": "Salvation comes through faith in Jesus Christ, whose death and resurrection provide forgiveness of sins and eternal life.",
    "explanation": "Salvation comes through faith in Jesus Christ, whose death and resurrection provide forgiveness of sins and eternal life."
  },
  {
    "q": "Why did God reject Cain's offering?",
    "options": [
      "It was offered too late.",
      "It was too small.",
      "Cain's heart and attitude toward God were unacceptable.",
      "It was offered outside the Garden of Eden."
    ],
    "ans": "Cain's heart and attitude toward God were unacceptable.",
    "explanation": "Cain's heart and attitude toward God were unacceptable."
  },
  {
    "q": "The rainbow after the Flood was a sign of God's",
    "options": [
      "punishment of Noah.",
      "covenant with Abraham.",
      "covenant never again to destroy the earth by flood.",
      "promise to make Israel a great nation."
    ],
    "ans": "covenant never again to destroy the earth by flood.",
    "explanation": "Covenant never again to destroy the earth by flood."
  },
  {
    "q": "Why did Abraham leave his homeland?",
    "options": [
      "To escape famine.",
      "God called him to a land He would show him.",
      "He was expelled by his family.",
      "He wanted to become king."
    ],
    "ans": "God called him to a land He would show him.",
    "explanation": "God called him to a land He would show him."
  },
  {
    "q": "Jacob received the name \"Israel\" because he",
    "options": [
      "conquered Canaan.",
      "built twelve altars.",
      "wrestled with God and prevailed.",
      "became ruler over Egypt."
    ],
    "ans": "wrestled with God and prevailed.",
    "explanation": "Wrestled with God and prevailed."
  },
  {
    "q": "Which event demonstrated Joseph's forgiveness toward his brothers?",
    "options": [
      "He imprisoned them permanently.",
      "He sent them back empty-handed.",
      "He revealed himself to them and provided for their families.",
      "He handed them over to Pharaoh."
    ],
    "ans": "He revealed himself to them and provided for their families.",
    "explanation": "He revealed himself to them and provided for their families."
  },
  {
    "q": "Why did God harden Pharaoh's heart during the Exodus?",
    "options": [
      "To prevent Israel from leaving.",
      "To display His power and make His name known among the nations.",
      "Because Pharaoh was righteous.",
      "To prolong Israel's suffering unnecessarily."
    ],
    "ans": "To display His power and make His name known among the nations.",
    "explanation": "To display His power and make His name known among the nations."
  },
  {
    "q": "The bronze serpent lifted by Moses in the wilderness symbolized",
    "options": [
      "Israel's military victory.",
      "Egypt's defeat.",
      "God's provision of healing through faith and obedience.",
      "the worship of serpents."
    ],
    "ans": "God's provision of healing through faith and obedience.",
    "explanation": "God's provision of healing through faith and obedience."
  },
  {
    "q": "Why did Joshua command the priests to carry the Ark around Jericho?",
    "options": [
      "To encourage the soldiers.",
      "To frighten the Canaanites.",
      "Because God instructed that strategy for Israel's victory.",
      "To dedicate the city to God."
    ],
    "ans": "Because God instructed that strategy for Israel's victory.",
    "explanation": "Because God instructed that strategy for Israel's victory."
  },
  {
    "q": "The major lesson from Gideon's victory over the Midianites is that",
    "options": [
      "large armies always win battles.",
      "victory comes through God's power rather than human strength.",
      "military weapons are unnecessary.",
      "fear guarantees success."
    ],
    "ans": "victory comes through God's power rather than human strength.",
    "explanation": "Victory comes through God's power rather than human strength."
  },
  {
    "q": "Why was Samson eventually captured by the Philistines?",
    "options": [
      "He lacked physical strength.",
      "He disobeyed his parents.",
      "He revealed the secret of his Nazirite vow to Delilah.",
      "God abandoned Israel permanently."
    ],
    "ans": "He revealed the secret of his Nazirite vow to Delilah.",
    "explanation": "He revealed the secret of his Nazirite vow to Delilah."
  },
  {
    "q": "Hannah dedicated Samuel to the Lord because",
    "options": [
      "Eli commanded her to do so.",
      "she was fulfilling the vow she made to God.",
      "Samuel preferred to live in the Temple.",
      "Elkanah insisted on it."
    ],
    "ans": "she was fulfilling the vow she made to God.",
    "explanation": "She was fulfilling the vow she made to God."
  },
  {
    "q": "David refused to kill Saul because he believed Saul was",
    "options": [
      "stronger than he was.",
      "the Lord's anointed.",
      "protected by the Philistines.",
      "innocent of every wrongdoing."
    ],
    "ans": "the Lord's anointed.",
    "explanation": "The Lord's anointed."
  },
  {
    "q": "Why did Solomon ask God for wisdom instead of riches?",
    "options": [
      "He already possessed great wealth.",
      "He desired wisdom to govern God's people justly.",
      "He disliked material possessions.",
      "His father instructed him to do so."
    ],
    "ans": "He desired wisdom to govern God's people justly.",
    "explanation": "He desired wisdom to govern God's people justly."
  },
  {
    "q": "Elijah was taken to heaven in",
    "options": [
      "a pillar of fire.",
      "a cloud of smoke.",
      "a whirlwind with chariots and horses of fire.",
      "the Ark of the Covenant."
    ],
    "ans": "a whirlwind with chariots and horses of fire.",
    "explanation": "A whirlwind with chariots and horses of fire."
  },
  {
    "q": "Elisha's miracle of multiplying the widow's oil teaches that God",
    "options": [
      "blesses only the wealthy.",
      "is able to provide abundantly for those who trust Him.",
      "discourages borrowing.",
      "values oil above food."
    ],
    "ans": "is able to provide abundantly for those who trust Him.",
    "explanation": "Is able to provide abundantly for those who trust Him."
  },
  {
    "q": "Why was Naaman initially unwilling to wash in the River Jordan?",
    "options": [
      "The river was dry.",
      "He feared drowning.",
      "He considered the instruction too simple and the river inferior.",
      "Elisha refused to meet him."
    ],
    "ans": "He considered the instruction too simple and the river inferior.",
    "explanation": "He considered the instruction too simple and the river inferior."
  },
  {
    "q": "King Josiah became notable because he",
    "options": [
      "built the first Temple.",
      "conquered Babylon.",
      "led a national religious reform after the Book of the Law was found.",
      "introduced idol worship."
    ],
    "ans": "led a national religious reform after the Book of the Law was found.",
    "explanation": "Led a national religious reform after the Book of the Law was found."
  },
  {
    "q": "Why was Shadrach, Meshach, and Abednego thrown into the fiery furnace?",
    "options": [
      "They criticized the king.",
      "They refused to worship Nebuchadnezzar's golden image.",
      "They disobeyed Daniel.",
      "They failed to pay taxes."
    ],
    "ans": "They refused to worship Nebuchadnezzar's golden image.",
    "explanation": "They refused to worship Nebuchadnezzar's golden image."
  },
  {
    "q": "The greatest lesson from the story of Esther is that",
    "options": [
      "political influence is everything.",
      "God can use courage and faithfulness to preserve His people.",
      "queens should never advise kings.",
      "fasting guarantees earthly riches."
    ],
    "ans": "God can use courage and faithfulness to preserve His people.",
    "explanation": "God can use courage and faithfulness to preserve His people."
  },
  {
    "q": "Jesus' statement, \"I am the Bread of Life,\" primarily means that",
    "options": [
      "He supplied food to Israel permanently.",
      "He alone satisfies humanity's deepest spiritual needs.",
      "bread is more important than prayer.",
      "physical hunger no longer exists."
    ],
    "ans": "He alone satisfies humanity's deepest spiritual needs.",
    "explanation": "He alone satisfies humanity's deepest spiritual needs."
  },
  {
    "q": "Why did Jesus raise Jairus' daughter?",
    "options": [
      "To increase His popularity.",
      "To impress the Pharisees.",
      "To demonstrate His authority over death and strengthen faith.",
      "Because Jairus was wealthy."
    ],
    "ans": "To demonstrate His authority over death and strengthen faith.",
    "explanation": "To demonstrate His authority over death and strengthen faith."
  },
  {
    "q": "In the Parable of the Ten Virgins, the oil mainly symbolizes",
    "options": [
      "material wealth.",
      "political influence.",
      "spiritual preparedness and readiness for Christ's return.",
      "religious traditions."
    ],
    "ans": "spiritual preparedness and readiness for Christ's return.",
    "explanation": "Spiritual preparedness and readiness for Christ's return."
  },
  {
    "q": "The main lesson from the Parable of the Talents is that believers should",
    "options": [
      "avoid taking risks.",
      "seek wealth above all else.",
      "faithfully use the gifts and opportunities God has entrusted to them.",
      "work only when rewards are guaranteed."
    ],
    "ans": "faithfully use the gifts and opportunities God has entrusted to them.",
    "explanation": "Faithfully use the gifts and opportunities God has entrusted to them."
  },
  {
    "q": "Why did Jesus weep at the tomb of Lazarus?",
    "options": [
      "He doubted God's power.",
      "He feared death.",
      "He showed compassion for human suffering and grief.",
      "He had forgotten His mission."
    ],
    "ans": "He showed compassion for human suffering and grief.",
    "explanation": "He showed compassion for human suffering and grief."
  },
  {
    "q": "According to Jesus, the greatest evidence that someone is His disciple is",
    "options": [
      "performing many miracles.",
      "giving large offerings.",
      "possessing great knowledge of Scripture.",
      "having genuine love for one another."
    ],
    "ans": "having genuine love for one another.",
    "explanation": "Having genuine love for one another."
  },
  {
    "q": "Why did Jesus tell the rich young ruler to sell all he had and give to the poor?",
    "options": [
      "Wealth is inherently sinful.",
      "Jesus wanted to make him poor.",
      "His possessions had become a greater priority than God.",
      "The disciples needed money."
    ],
    "ans": "His possessions had become a greater priority than God.",
    "explanation": "His possessions had become a greater priority than God."
  },
  {
    "q": "The woman who anointed Jesus with expensive perfume demonstrated",
    "options": [
      "political loyalty.",
      "desire for recognition.",
      "sacrificial love and devotion.",
      "obedience to Jewish law only."
    ],
    "ans": "sacrificial love and devotion.",
    "explanation": "Sacrificial love and devotion."
  },
  {
    "q": "Why did Jesus curse the barren fig tree?",
    "options": [
      "He was hungry and angry.",
      "The tree belonged to His enemies.",
      "It symbolized fruitless religion and hypocrisy.",
      "It blocked the road to Jerusalem."
    ],
    "ans": "It symbolized fruitless religion and hypocrisy.",
    "explanation": "It symbolized fruitless religion and hypocrisy."
  },
  {
    "q": "The main purpose of Jesus' transfiguration was to",
    "options": [
      "appoint Peter as leader.",
      "reveal His divine glory and strengthen the disciples' faith.",
      "replace Moses and Elijah.",
      "begin His earthly kingdom."
    ],
    "ans": "reveal His divine glory and strengthen the disciples' faith.",
    "explanation": "Reveal His divine glory and strengthen the disciples' faith."
  },
  {
    "q": "Why did the Pharisee and the tax collector receive different outcomes in Jesus' parable?",
    "options": [
      "One was rich and the other poor.",
      "One prayed longer than the other.",
      "One was humble before God while the other was self-righteous.",
      "One was a Jew and the other a Gentile."
    ],
    "ans": "One was humble before God while the other was self-righteous.",
    "explanation": "One was humble before God while the other was self-righteous."
  },
  {
    "q": "The statement \"Man shall not live by bread alone\" teaches that",
    "options": [
      "food is unnecessary.",
      "fasting should never end.",
      "spiritual nourishment from God is more important than physical food.",
      "wealth guarantees happiness."
    ],
    "ans": "spiritual nourishment from God is more important than physical food.",
    "explanation": "Spiritual nourishment from God is more important than physical food."
  },
  {
    "q": "Why did Jesus choose fishermen as some of His first disciples?",
    "options": [
      "They were wealthy.",
      "They were willing to leave everything and follow Him.",
      "They had political influence.",
      "They were religious leaders."
    ],
    "ans": "They were willing to leave everything and follow Him.",
    "explanation": "They were willing to leave everything and follow Him."
  },
  {
    "q": "The primary lesson from Peter walking on water is that",
    "options": [
      "storms can always be avoided.",
      "faith in Christ overcomes fear and doubt.",
      "miracles happen automatically.",
      "water can support human weight."
    ],
    "ans": "faith in Christ overcomes fear and doubt.",
    "explanation": "Faith in Christ overcomes fear and doubt."
  },
  {
    "q": "Why was the widow's offering praised by Jesus?",
    "options": [
      "It was the largest amount given.",
      "She gave publicly.",
      "She gave sacrificially from what little she had.",
      "She was known by the priests."
    ],
    "ans": "She gave sacrificially from what little she had.",
    "explanation": "She gave sacrificially from what little she had."
  },
  {
    "q": "Jesus' prayer in Gethsemane reveals His",
    "options": [
      "unwillingness to obey God.",
      "fear of the disciples.",
      "complete submission to the Father's will.",
      "desire to escape secretly."
    ],
    "ans": "complete submission to the Father's will.",
    "explanation": "Complete submission to the Father's will."
  },
  {
    "q": "Why was Barabbas released instead of Jesus?",
    "options": [
      "Pilate believed Barabbas was innocent.",
      "The crowd demanded Barabbas' release and Jesus' crucifixion.",
      "Barabbas bribed Pilate.",
      "The disciples requested it."
    ],
    "ans": "The crowd demanded Barabbas' release and Jesus' crucifixion.",
    "explanation": "The crowd demanded Barabbas' release and Jesus' crucifixion."
  },
  {
    "q": "The tearing of the Temple veil at Jesus' death symbolized",
    "options": [
      "the destruction of Jerusalem.",
      "the end of Roman rule.",
      "direct access to God through Christ.",
      "the removal of the priesthood."
    ],
    "ans": "direct access to God through Christ.",
    "explanation": "Direct access to God through Christ."
  },
  {
    "q": "Why did Jesus appear to His disciples after the resurrection?",
    "options": [
      "To establish a political kingdom.",
      "To confirm His resurrection and strengthen their faith.",
      "To destroy the Romans.",
      "To appoint a new high priest."
    ],
    "ans": "To confirm His resurrection and strengthen their faith.",
    "explanation": "To confirm His resurrection and strengthen their faith."
  },
  {
    "q": "The major lesson from the conversion of Zacchaeus is that",
    "options": [
      "tax collectors cannot be saved.",
      "wealth prevents salvation.",
      "genuine repentance produces transformed behavior.",
      "salvation depends on social status."
    ],
    "ans": "genuine repentance produces transformed behavior.",
    "explanation": "Genuine repentance produces transformed behavior."
  },
  {
    "q": "Why did the apostles appoint seven men in Acts 6?",
    "options": [
      "To replace the disciples.",
      "To become church pastors.",
      "To oversee the distribution of food and meet practical needs.",
      "To collect taxes."
    ],
    "ans": "To oversee the distribution of food and meet practical needs.",
    "explanation": "To oversee the distribution of food and meet practical needs."
  },
  {
    "q": "Stephen's speech before the Sanhedrin emphasized Israel's history of",
    "options": [
      "military victories.",
      "economic prosperity.",
      "resisting God's messengers and purposes.",
      "religious perfection."
    ],
    "ans": "resisting God's messengers and purposes.",
    "explanation": "Resisting God's messengers and purposes."
  },
  {
    "q": "Saul's conversion on the road to Damascus demonstrates that",
    "options": [
      "salvation comes through education.",
      "God's grace can transform even His fiercest opponents.",
      "persecution strengthens faith automatically.",
      "miracles are reserved for apostles."
    ],
    "ans": "God's grace can transform even His fiercest opponents.",
    "explanation": "God's grace can transform even His fiercest opponents."
  },
  {
    "q": "Why was Peter imprisoned by Herod?",
    "options": [
      "He refused to pay taxes.",
      "He insulted Roman officials.",
      "Herod sought to suppress the growing Christian movement.",
      "He attempted to overthrow the government."
    ],
    "ans": "Herod sought to suppress the growing Christian movement.",
    "explanation": "Herod sought to suppress the growing Christian movement."
  },
  {
    "q": "The primary purpose of spiritual gifts according to Paul is",
    "options": [
      "personal fame.",
      "financial gain.",
      "service and edification of the church.",
      "replacing church leadership."
    ],
    "ans": "service and edification of the church.",
    "explanation": "Service and edification of the church."
  },
  {
    "q": "Paul's teaching on the body of Christ emphasizes",
    "options": [
      "equality of abilities.",
      "independence among believers.",
      "unity and interdependence among members.",
      "competition among Christians."
    ],
    "ans": "unity and interdependence among members.",
    "explanation": "Unity and interdependence among members."
  },
  {
    "q": "Why did Paul and Silas remain in prison after the earthquake in Philippi?",
    "options": [
      "They were afraid to leave.",
      "The doors remained locked.",
      "They wanted to prevent the jailer from harming himself and to witness to him.",
      "Roman law forbade escape."
    ],
    "ans": "They wanted to prevent the jailer from harming himself and to witness to him.",
    "explanation": "They wanted to prevent the jailer from harming himself and to witness to him."
  },
  {
    "q": "The message to the church in Ephesus warned believers against",
    "options": [
      "poverty.",
      "persecution.",
      "abandoning their first love.",
      "false prophets only."
    ],
    "ans": "abandoning their first love.",
    "explanation": "Abandoning their first love."
  },
  {
    "q": "According to James, faith without works is",
    "options": [
      "immature.",
      "incomplete.",
      "dead.",
      "unnecessary."
    ],
    "ans": "dead.",
    "explanation": "Dead."
  },
  {
    "q": "The central theme of the Book of Revelation is",
    "options": [
      "the rise of political empires.",
      "the destruction of Christianity.",
      "Christ's ultimate victory and the final triumph of God's kingdom.",
      "the rebuilding of the Temple."
    ],
    "ans": "Christ's ultimate victory and the final triumph of God's kingdom.",
    "explanation": "Christ's ultimate victory and the final triumph of God's kingdom."
  },
  {
    "q": "Which statement best summarizes the purpose of Christ's death on the cross?",
    "options": [
      "To establish an earthly government.",
      "To become a moral example only.",
      "To abolish all laws immediately.",
      "To reconcile humanity to God through the forgiveness of sins and redemption."
    ],
    "ans": "To reconcile humanity to God through the forgiveness of sins and redemption.",
    "explanation": "To reconcile humanity to God through the forgiveness of sins and redemption."
  },
  {
    "q": "God called Abraham to sacrifice Isaac primarily to",
    "options": [
      "punish Abraham for his past mistakes.",
      "test Isaac's courage.",
      "test Abraham's faith and obedience.",
      "provide food for the priests."
    ],
    "ans": "test Abraham's faith and obedience.",
    "explanation": "Test Abraham's faith and obedience."
  },
  {
    "q": "The destruction of Sodom and Gomorrah teaches that God",
    "options": [
      "overlooks persistent wickedness.",
      "punishes only foreigners.",
      "judges unrepentant sin but rescues the righteous.",
      "destroys every sinful city immediately."
    ],
    "ans": "judges unrepentant sin but rescues the righteous.",
    "explanation": "Judges unrepentant sin but rescues the righteous."
  },
  {
    "q": "Jacob's dream at Bethel primarily revealed",
    "options": [
      "Israel's future military victories.",
      "God's presence, covenant, and continued guidance.",
      "the location of the Promised Land.",
      "the destruction of Egypt."
    ],
    "ans": "God's presence, covenant, and continued guidance.",
    "explanation": "God's presence, covenant, and continued guidance."
  },
  {
    "q": "Joseph's refusal to commit adultery with Potiphar's wife demonstrates",
    "options": [
      "fear of imprisonment.",
      "respect for Potiphar only.",
      "loyalty to God and moral integrity.",
      "dislike for Egyptian culture."
    ],
    "ans": "loyalty to God and moral integrity.",
    "explanation": "Loyalty to God and moral integrity."
  },
  {
    "q": "Why did God send the ten plagues upon Egypt?",
    "options": [
      "To destroy the Egyptians completely.",
      "To compel Pharaoh to release Israel and demonstrate God's supremacy.",
      "To enrich the Israelites.",
      "To establish Moses as king."
    ],
    "ans": "To compel Pharaoh to release Israel and demonstrate God's supremacy.",
    "explanation": "To compel Pharaoh to release Israel and demonstrate God's supremacy."
  },
  {
    "q": "The giving of the Ten Commandments at Mount Sinai emphasized",
    "options": [
      "military discipline.",
      "Israel's covenant relationship and obedience to God.",
      "economic prosperity.",
      "agricultural development."
    ],
    "ans": "Israel's covenant relationship and obedience to God.",
    "explanation": "Israel's covenant relationship and obedience to God."
  },
  {
    "q": "Why did the Israelites wander in the wilderness for forty years?",
    "options": [
      "They lacked food and water.",
      "Moses became too old to lead them.",
      "They rebelled against God and refused to trust His promise.",
      "Joshua delayed the journey."
    ],
    "ans": "They rebelled against God and refused to trust His promise.",
    "explanation": "They rebelled against God and refused to trust His promise."
  },
  {
    "q": "Rahab was spared during the destruction of Jericho because she",
    "options": [
      "was the king's daughter.",
      "protected the Israelite spies and demonstrated faith in God.",
      "escaped before the attack.",
      "paid tribute to Joshua."
    ],
    "ans": "protected the Israelite spies and demonstrated faith in God.",
    "explanation": "Protected the Israelite spies and demonstrated faith in God."
  },
  {
    "q": "The main lesson from Ruth's loyalty to Naomi is",
    "options": [
      "wealth determines faithfulness.",
      "family ties are unnecessary.",
      "loyalty, love, and faithfulness are rewarded by God.",
      "widows should never remarry."
    ],
    "ans": "loyalty, love, and faithfulness are rewarded by God.",
    "explanation": "Loyalty, love, and faithfulness are rewarded by God."
  },
  {
    "q": "Samuel's response, \"Speak, Lord, for your servant is listening,\" illustrates",
    "options": [
      "fear of Eli.",
      "desire for leadership.",
      "readiness to obey God's call.",
      "concern about the Philistines."
    ],
    "ans": "readiness to obey God's call.",
    "explanation": "Readiness to obey God's call."
  },
  {
    "q": "David's victory over Goliath teaches that",
    "options": [
      "physical strength is most important.",
      "military experience guarantees victory.",
      "faith in God is greater than human ability.",
      "giants cannot defeat young men."
    ],
    "ans": "faith in God is greater than human ability.",
    "explanation": "Faith in God is greater than human ability."
  },
  {
    "q": "Solomon's prayer at the dedication of the Temple emphasized that",
    "options": [
      "God lives only in the Temple.",
      "God hears the prayers of those who sincerely seek Him.",
      "sacrifices alone bring forgiveness.",
      "Jerusalem would never be destroyed."
    ],
    "ans": "God hears the prayers of those who sincerely seek Him.",
    "explanation": "God hears the prayers of those who sincerely seek Him."
  },
  {
    "q": "Why did Elijah flee after defeating the prophets of Baal?",
    "options": [
      "He feared the Philistines.",
      "He doubted God's existence.",
      "Queen Jezebel threatened to kill him.",
      "He wanted to return to Tishbe."
    ],
    "ans": "Queen Jezebel threatened to kill him.",
    "explanation": "Queen Jezebel threatened to kill him."
  },
  {
    "q": "Elisha healed Naaman of leprosy after Naaman",
    "options": [
      "offered expensive gifts.",
      "obeyed God's instruction to wash seven times in the Jordan River.",
      "built an altar.",
      "fasted for forty days."
    ],
    "ans": "obeyed God's instruction to wash seven times in the Jordan River.",
    "explanation": "Obeyed God's instruction to wash seven times in the Jordan River."
  },
  {
    "q": "Daniel's interpretation of Nebuchadnezzar's dream revealed God's",
    "options": [
      "approval of Babylon forever.",
      "preference for earthly kingdoms.",
      "sovereignty over all kingdoms and history.",
      "rejection of prophecy."
    ],
    "ans": "sovereignty over all kingdoms and history.",
    "explanation": "Sovereignty over all kingdoms and history."
  },
  {
    "q": "The prophet Amos strongly condemned Israel because of",
    "options": [
      "poor military strength.",
      "social injustice and religious hypocrisy.",
      "lack of education.",
      "failure to build cities."
    ],
    "ans": "social injustice and religious hypocrisy.",
    "explanation": "Social injustice and religious hypocrisy."
  },
  {
    "q": "Why did Jonah become angry after Nineveh repented?",
    "options": [
      "The king insulted him.",
      "The people rejected his message.",
      "God showed mercy instead of destroying the city.",
      "He was forced to remain in Nineveh."
    ],
    "ans": "God showed mercy instead of destroying the city.",
    "explanation": "God showed mercy instead of destroying the city."
  },
  {
    "q": "Jesus healed the paralytic lowered through the roof primarily to demonstrate His authority to",
    "options": [
      "perform medical miracles only.",
      "teach in synagogues.",
      "forgive sins as well as heal diseases.",
      "appoint disciples."
    ],
    "ans": "forgive sins as well as heal diseases.",
    "explanation": "Forgive sins as well as heal diseases."
  },
  {
    "q": "The feeding of the five thousand demonstrated Jesus'",
    "options": [
      "political influence.",
      "military leadership.",
      "compassion and divine power to provide.",
      "desire to become king."
    ],
    "ans": "compassion and divine power to provide.",
    "explanation": "Compassion and divine power to provide."
  },
  {
    "q": "Why did Jesus rebuke the Pharisees for their traditions?",
    "options": [
      "They observed the Sabbath.",
      "They studied the Scriptures.",
      "They placed human traditions above God's commandments.",
      "They prayed publicly."
    ],
    "ans": "They placed human traditions above God's commandments.",
    "explanation": "They placed human traditions above God's commandments."
  },
  {
    "q": "The Parable of the Lost Sheep emphasizes that",
    "options": [
      "all sheep should remain together.",
      "shepherds should never leave their flock.",
      "God rejoices over the repentance of one sinner.",
      "sinners cannot return to God."
    ],
    "ans": "God rejoices over the repentance of one sinner.",
    "explanation": "God rejoices over the repentance of one sinner."
  },
  {
    "q": "Which event immediately preceded Jesus' triumphal entry into Jerusalem?",
    "options": [
      "The Transfiguration.",
      "The raising of Lazarus.",
      "The temptation in the wilderness.",
      "The wedding at Cana."
    ],
    "ans": "The raising of Lazarus.",
    "explanation": "The raising of Lazarus."
  },
  {
    "q": "Why did Jesus pray for those who crucified Him?",
    "options": [
      "He feared the Roman soldiers.",
      "He wanted to avoid death.",
      "He demonstrated God's forgiveness even toward His enemies.",
      "He hoped they would release Him."
    ],
    "ans": "He demonstrated God's forgiveness even toward His enemies.",
    "explanation": "He demonstrated God's forgiveness even toward His enemies."
  },
  {
    "q": "According to Paul, believers overcome evil by",
    "options": [
      "avoiding unbelievers.",
      "retaliating against enemies.",
      "overcoming evil with good.",
      "withdrawing from society."
    ],
    "ans": "overcoming evil with good.",
    "explanation": "Overcoming evil with good."
  },
  {
    "q": "The central message of the Book of Hebrews is that",
    "options": [
      "Moses is greater than Christ.",
      "angels are superior to believers.",
      "the Old Covenant remains sufficient for salvation.",
      "Jesus Christ is the perfect and final High Priest whose sacrifice is complete and sufficient for salvation."
    ],
    "ans": "Jesus Christ is the perfect and final High Priest whose sacrifice is complete and sufficient for salvation.",
    "explanation": "Jesus Christ is the perfect and final High Priest whose sacrifice is complete and sufficient for salvation."
  },
  {
    "q": "Why did God confuse the language of the builders of the Tower of Babel?",
    "options": [
      "They lacked building materials.",
      "They wanted to build a temple.",
      "They became proud and sought to exalt themselves instead of God.",
      "They refused to offer sacrifices."
    ],
    "ans": "They became proud and sought to exalt themselves instead of God.",
    "explanation": "They became proud and sought to exalt themselves instead of God."
  },
  {
    "q": "Abraham's willingness to offer Isaac foreshadowed",
    "options": [
      "the building of Solomon's Temple.",
      "Israel's conquest of Canaan.",
      "God offering His only Son for the salvation of humanity.",
      "the appointment of Moses."
    ],
    "ans": "God offering His only Son for the salvation of humanity.",
    "explanation": "God offering His only Son for the salvation of humanity."
  },
  {
    "q": "Why did Esau lose his birthright?",
    "options": [
      "Jacob stole it by force.",
      "He despised it and exchanged it for a meal.",
      "Isaac disinherited him.",
      "Rebekah cancelled it."
    ],
    "ans": "He despised it and exchanged it for a meal.",
    "explanation": "He despised it and exchanged it for a meal."
  },
  {
    "q": "Joseph's statement, \"You meant evil against me, but God meant it for good,\" teaches that",
    "options": [
      "evil is acceptable.",
      "suffering should always be avoided.",
      "God can accomplish His purpose even through human evil.",
      "revenge is unnecessary because evil never succeeds."
    ],
    "ans": "God can accomplish His purpose even through human evil.",
    "explanation": "God can accomplish His purpose even through human evil."
  },
  {
    "q": "Why did Miriam become leprous?",
    "options": [
      "She worshipped idols.",
      "She disobeyed Pharaoh.",
      "She spoke against Moses and questioned God's choice of leader.",
      "She refused to cross the Red Sea."
    ],
    "ans": "She spoke against Moses and questioned God's choice of leader.",
    "explanation": "She spoke against Moses and questioned God's choice of leader."
  },
  {
    "q": "Balaam's donkey spoke because",
    "options": [
      "it had supernatural powers.",
      "God enabled it to rebuke Balaam's disobedience.",
      "Balaam imagined the incident.",
      "the angel commanded it directly."
    ],
    "ans": "God enabled it to rebuke Balaam's disobedience.",
    "explanation": "God enabled it to rebuke Balaam's disobedience."
  },
  {
    "q": "The sin of Achan after the fall of Jericho resulted in",
    "options": [
      "Israel's immediate exile.",
      "Israel's defeat at Ai until the sin was judged.",
      "Joshua losing leadership.",
      "the destruction of the Ark."
    ],
    "ans": "Israel's defeat at Ai until the sin was judged.",
    "explanation": "Israel's defeat at Ai until the sin was judged."
  },
  {
    "q": "Deborah's leadership in Israel demonstrates that",
    "options": [
      "only kings could lead Israel.",
      "women could not serve God publicly.",
      "God can raise faithful leaders regardless of gender.",
      "military strength alone brings victory."
    ],
    "ans": "God can raise faithful leaders regardless of gender.",
    "explanation": "God can raise faithful leaders regardless of gender."
  },
  {
    "q": "Why did God choose David instead of his older brothers?",
    "options": [
      "David was physically stronger.",
      "David was the eldest son.",
      "God looks at the heart rather than outward appearance.",
      "Samuel preferred David."
    ],
    "ans": "God looks at the heart rather than outward appearance.",
    "explanation": "God looks at the heart rather than outward appearance."
  },
  {
    "q": "The primary reason Uzzah died after touching the Ark of the Covenant was that",
    "options": [
      "he was an enemy of Israel.",
      "he violated God's command concerning the Ark's holiness.",
      "the Ark was cursed.",
      "David ordered his execution."
    ],
    "ans": "he violated God's command concerning the Ark's holiness.",
    "explanation": "He violated God's command concerning the Ark's holiness."
  },
  {
    "q": "Elijah heard God's voice on Mount Horeb through",
    "options": [
      "an earthquake.",
      "fire.",
      "a mighty wind.",
      "a still, small voice."
    ],
    "ans": "a still, small voice.",
    "explanation": "A still, small voice."
  },
  {
    "q": "Why did King Uzziah become a leper?",
    "options": [
      "He worshipped Baal.",
      "He refused to pay tribute.",
      "He unlawfully attempted to burn incense in the Temple.",
      "He persecuted the prophets."
    ],
    "ans": "He unlawfully attempted to burn incense in the Temple.",
    "explanation": "He unlawfully attempted to burn incense in the Temple."
  },
  {
    "q": "The prophet Isaiah's vision of God in the Temple emphasized God's",
    "options": [
      "military strength.",
      "wealth.",
      "holiness and majesty.",
      "political authority."
    ],
    "ans": "holiness and majesty.",
    "explanation": "Holiness and majesty."
  },
  {
    "q": "The valley of dry bones in Ezekiel's vision symbolized",
    "options": [
      "the destruction of Babylon.",
      "the future restoration of Israel by God's power.",
      "the final judgment only.",
      "the defeat of Egypt."
    ],
    "ans": "the future restoration of Israel by God's power.",
    "explanation": "The future restoration of Israel by God's power."
  },
  {
    "q": "Why did Jesus say, \"Render unto Caesar what is Caesar's\"?",
    "options": [
      "Taxes guarantee salvation.",
      "Government should control religion.",
      "Believers have responsibilities to both civil authorities and God.",
      "Rome owned the Temple."
    ],
    "ans": "Believers have responsibilities to both civil authorities and God.",
    "explanation": "Believers have responsibilities to both civil authorities and God."
  },
  {
    "q": "The greatest lesson from the Parable of the Unforgiving Servant is that",
    "options": [
      "debts should never be cancelled.",
      "punishment is always preferable.",
      "those who receive God's forgiveness must forgive others.",
      "justice should replace mercy."
    ],
    "ans": "those who receive God's forgiveness must forgive others.",
    "explanation": "Those who receive God's forgiveness must forgive others."
  },
  {
    "q": "Jesus raised the widow's son at Nain primarily because of His",
    "options": [
      "desire for popularity.",
      "friendship with the family.",
      "compassion for the grieving widow.",
      "opposition to Roman rule."
    ],
    "ans": "compassion for the grieving widow.",
    "explanation": "Compassion for the grieving widow."
  },
  {
    "q": "Why did Jesus refuse to perform miracles for Herod?",
    "options": [
      "He lacked power.",
      "He feared Herod.",
      "Herod sought entertainment rather than truth or repentance.",
      "Pilate forbade Him."
    ],
    "ans": "Herod sought entertainment rather than truth or repentance.",
    "explanation": "Herod sought entertainment rather than truth or repentance."
  },
  {
    "q": "Peter's restoration after denying Jesus demonstrates",
    "options": [
      "failure cannot be forgiven.",
      "apostles are perfect.",
      "sincere repentance is met with God's forgiveness and restoration.",
      "leadership belongs only to those who never fail."
    ],
    "ans": "sincere repentance is met with God's forgiveness and restoration.",
    "explanation": "Sincere repentance is met with God's forgiveness and restoration."
  },
  {
    "q": "The conversion of Cornelius proved that",
    "options": [
      "only Roman soldiers can be saved.",
      "circumcision is unnecessary for Jews.",
      "salvation through Christ is available to Gentiles as well as Jews.",
      "Peter became the ruler of the Church."
    ],
    "ans": "salvation through Christ is available to Gentiles as well as Jews.",
    "explanation": "Salvation through Christ is available to Gentiles as well as Jews."
  },
  {
    "q": "Paul's sermon at Athens focused on",
    "options": [
      "overthrowing Roman rule.",
      "condemning Greek education.",
      "introducing the Athenians to the unknown God through Jesus Christ.",
      "rebuilding the Temple."
    ],
    "ans": "introducing the Athenians to the unknown God through Jesus Christ.",
    "explanation": "Introducing the Athenians to the unknown God through Jesus Christ."
  },
  {
    "q": "According to Paul, the fruit of the Spirit primarily reflects",
    "options": [
      "miraculous abilities.",
      "intellectual achievement.",
      "the character produced by the Holy Spirit in believers.",
      "church leadership positions."
    ],
    "ans": "the character produced by the Holy Spirit in believers.",
    "explanation": "The character produced by the Holy Spirit in believers."
  },
  {
    "q": "The message to the church at Smyrna encouraged believers to",
    "options": [
      "seek wealth.",
      "avoid persecution.",
      "remain faithful even unto death.",
      "leave the city immediately."
    ],
    "ans": "remain faithful even unto death.",
    "explanation": "Remain faithful even unto death."
  },
  {
    "q": "According to 1 Peter, believers are described as",
    "options": [
      "citizens of Rome.",
      "children of Abraham only.",
      "a chosen generation, a royal priesthood, and a holy nation.",
      "rulers over angels."
    ],
    "ans": "a chosen generation, a royal priesthood, and a holy nation.",
    "explanation": "A chosen generation, a royal priesthood, and a holy nation."
  },
  {
    "q": "Which statement best summarizes the biblical meaning of grace?",
    "options": [
      "Human effort earns salvation.",
      "Good works remove all sin.",
      "Wealth proves God's acceptance.",
      "Grace is God's unmerited favor, freely given to sinners through Jesus Christ."
    ],
    "ans": "Grace is God's unmerited favor, freely given to sinners through Jesus Christ.",
    "explanation": "Grace is God's unmerited favor, freely given to sinners through Jesus Christ."
  },
  {
    "q": "Why did God choose Noah to build the ark?",
    "options": [
      "He was the oldest man on earth.",
      "He was a skilled carpenter.",
      "He was righteous and walked faithfully with God.",
      "He lived near the sea."
    ],
    "ans": "He was righteous and walked faithfully with God.",
    "explanation": "He was righteous and walked faithfully with God."
  },
  {
    "q": "Melchizedek is significant in the Bible because he",
    "options": [
      "was the first king of Israel.",
      "defeated Pharaoh in battle.",
      "was both king and priest, foreshadowing Christ's eternal priesthood.",
      "built the Temple in Jerusalem."
    ],
    "ans": "was both king and priest, foreshadowing Christ's eternal priesthood.",
    "explanation": "Was both king and priest, foreshadowing Christ's eternal priesthood."
  },
  {
    "q": "Why did Lot's wife become a pillar of salt?",
    "options": [
      "She refused to leave Sodom.",
      "She disobeyed the angels by speaking to the people.",
      "She looked back in disobedience despite God's warning.",
      "She attempted to save her possessions."
    ],
    "ans": "She looked back in disobedience despite God's warning.",
    "explanation": "She looked back in disobedience despite God's warning."
  },
  {
    "q": "Jacob's blessing of Ephraim over Manasseh teaches that",
    "options": [
      "age always determines blessing.",
      "the eldest child is always rejected.",
      "God's choice is based on His sovereign purpose rather than human tradition.",
      "parents should favour younger children."
    ],
    "ans": "God's choice is based on His sovereign purpose rather than human tradition.",
    "explanation": "God's choice is based on His sovereign purpose rather than human tradition."
  },
  {
    "q": "Why did Moses remove his sandals before the burning bush?",
    "options": [
      "The ground was too hot.",
      "He was preparing for a journey.",
      "He stood on holy ground before God's presence.",
      "God commanded him to wash his feet."
    ],
    "ans": "He stood on holy ground before God's presence.",
    "explanation": "He stood on holy ground before God's presence."
  },
  {
    "q": "The purpose of the Day of Atonement in Israel was to",
    "options": [
      "celebrate the harvest.",
      "appoint judges.",
      "make atonement for the sins of the nation.",
      "crown a new king."
    ],
    "ans": "make atonement for the sins of the nation.",
    "explanation": "Make atonement for the sins of the nation."
  },
  {
    "q": "Why did Korah, Dathan, and Abiram perish?",
    "options": [
      "They refused to enter Canaan.",
      "They rebelled against God's appointed leadership.",
      "They worshipped Baal.",
      "They stole the Ark of the Covenant."
    ],
    "ans": "They rebelled against God's appointed leadership.",
    "explanation": "They rebelled against God's appointed leadership."
  },
  {
    "q": "Joshua's farewell speech challenged Israel to",
    "options": [
      "make peace with idol worshippers.",
      "choose whom they would serve—the LORD or other gods.",
      "return to Egypt.",
      "appoint another prophet."
    ],
    "ans": "choose whom they would serve—the LORD or other gods.",
    "explanation": "Choose whom they would serve—the LORD or other gods."
  },
  {
    "q": "Jephthah's story teaches believers to",
    "options": [
      "avoid making promises to God.",
      "be careful and thoughtful before making vows.",
      "never go to war.",
      "reject leadership."
    ],
    "ans": "be careful and thoughtful before making vows.",
    "explanation": "Be careful and thoughtful before making vows."
  },
  {
    "q": "Why was Samuel displeased when Israel demanded a king?",
    "options": [
      "Kings were forbidden forever.",
      "Samuel wanted to remain king.",
      "Israel rejected God's direct rule over them.",
      "Saul was from the tribe of Benjamin."
    ],
    "ans": "Israel rejected God's direct rule over them.",
    "explanation": "Israel rejected God's direct rule over them."
  },
  {
    "q": "David spared Saul's life in the cave at En-gedi because he",
    "options": [
      "feared Saul's soldiers.",
      "hoped to receive a reward.",
      "respected God's anointed king and left judgment to God.",
      "could not reach Saul."
    ],
    "ans": "respected God's anointed king and left judgment to God.",
    "explanation": "Respected God's anointed king and left judgment to God."
  },
  {
    "q": "Why did God grant Hezekiah fifteen additional years of life?",
    "options": [
      "Hezekiah defeated Assyria.",
      "Isaiah requested it.",
      "God answered Hezekiah's sincere prayer and saw his tears.",
      "Jerusalem needed another king."
    ],
    "ans": "God answered Hezekiah's sincere prayer and saw his tears.",
    "explanation": "God answered Hezekiah's sincere prayer and saw his tears."
  },
  {
    "q": "Jeremiah was known as the \"weeping prophet\" because he",
    "options": [
      "was physically weak.",
      "deeply grieved over Judah's sin and coming judgment.",
      "lost his family in battle.",
      "was imprisoned throughout his ministry."
    ],
    "ans": "deeply grieved over Judah's sin and coming judgment.",
    "explanation": "Deeply grieved over Judah's sin and coming judgment."
  },
  {
    "q": "The prophecy of the \"Suffering Servant\" in Isaiah 53 primarily refers to",
    "options": [
      "Jeremiah.",
      "King David.",
      "Jesus Christ.",
      "John the Baptist."
    ],
    "ans": "Jesus Christ.",
    "explanation": "Jesus Christ."
  },
  {
    "q": "Why did the wise men visit Jesus after His birth?",
    "options": [
      "They wanted political alliance.",
      "They came to worship the newborn King after seeing His star.",
      "Joseph invited them.",
      "Caesar sent them."
    ],
    "ans": "They came to worship the newborn King after seeing His star.",
    "explanation": "They came to worship the newborn King after seeing His star."
  },
  {
    "q": "John the Baptist's central message was",
    "options": [
      "build the Temple.",
      "overthrow Roman rule.",
      "repent, for the kingdom of heaven is near.",
      "prepare for war."
    ],
    "ans": "repent, for the kingdom of heaven is near.",
    "explanation": "Repent, for the kingdom of heaven is near."
  },
  {
    "q": "Jesus' baptism by John mainly marked",
    "options": [
      "the forgiveness of Jesus' sins.",
      "His need for repentance.",
      "the beginning of His public ministry and the Father's approval.",
      "His appointment as High Priest."
    ],
    "ans": "the beginning of His public ministry and the Father's approval.",
    "explanation": "The beginning of His public ministry and the Father's approval."
  },
  {
    "q": "Why did Jesus call Matthew despite his occupation?",
    "options": [
      "Matthew was wealthy.",
      "Matthew was a priest.",
      "Jesus came to call sinners to repentance.",
      "Matthew was related to Peter."
    ],
    "ans": "Jesus came to call sinners to repentance.",
    "explanation": "Jesus came to call sinners to repentance."
  },
  {
    "q": "In the Parable of the Mustard Seed, the Kingdom of God is compared to something that",
    "options": [
      "begins large and becomes smaller.",
      "starts small but grows remarkably.",
      "disappears completely.",
      "cannot be seen."
    ],
    "ans": "starts small but grows remarkably.",
    "explanation": "Starts small but grows remarkably."
  },
  {
    "q": "Why did Jesus calm the storm?",
    "options": [
      "To impress the crowds.",
      "To demonstrate His knowledge of nature.",
      "To reveal His authority over creation and strengthen His disciples' faith.",
      "To avoid arriving late."
    ],
    "ans": "To reveal His authority over creation and strengthen His disciples' faith.",
    "explanation": "To reveal His authority over creation and strengthen His disciples' faith."
  },
  {
    "q": "Martha was gently corrected by Jesus because she",
    "options": [
      "refused to serve Him.",
      "was distracted with many activities instead of listening to His teaching.",
      "criticized Lazarus.",
      "rejected Mary's help."
    ],
    "ans": "was distracted with many activities instead of listening to His teaching.",
    "explanation": "Was distracted with many activities instead of listening to His teaching."
  },
  {
    "q": "The Parable of the Rich Fool warns against",
    "options": [
      "farming.",
      "saving money.",
      "trusting in earthly wealth while neglecting God.",
      "owning property."
    ],
    "ans": "trusting in earthly wealth while neglecting God.",
    "explanation": "Trusting in earthly wealth while neglecting God."
  },
  {
    "q": "Why did Jesus commend the faith of the Roman centurion?",
    "options": [
      "He built many synagogues.",
      "He believed Jesus could heal by His word alone.",
      "He gave large offerings.",
      "He became a disciple immediately."
    ],
    "ans": "He believed Jesus could heal by His word alone.",
    "explanation": "He believed Jesus could heal by His word alone."
  },
  {
    "q": "Paul's statement, \"I have fought the good fight, I have finished the race,\" expresses",
    "options": [
      "disappointment with ministry.",
      "regret for becoming a Christian.",
      "faithful perseverance in serving Christ until the end.",
      "his desire to return to Judaism."
    ],
    "ans": "faithful perseverance in serving Christ until the end.",
    "explanation": "Faithful perseverance in serving Christ until the end."
  },
  {
    "q": "According to the New Testament, the greatest hope of every believer is",
    "options": [
      "earthly prosperity.",
      "political freedom.",
      "long life on earth.",
      "eternal life through Jesus Christ and the resurrection of the dead."
    ],
    "ans": "eternal life through Jesus Christ and the resurrection of the dead.",
    "explanation": "Eternal life through Jesus Christ and the resurrection of the dead."
  },
  {
    "q": "After Elijah was taken to heaven, the first miracle performed by Elisha was",
    "options": [
      "healing Naaman's leprosy.",
      "parting the River Jordan with Elijah's mantle.",
      "raising the Shunammite's son.",
      "multiplying the widow's oil."
    ],
    "ans": "parting the River Jordan with Elijah's mantle.",
    "explanation": "Parting the River Jordan with Elijah's mantle."
  },
  {
    "q": "The chief reason God chose Cyrus, a Persian king, in His plan was to",
    "options": [
      "make him king of Israel.",
      "destroy the Temple in Jerusalem.",
      "permit the Jews to return from exile and rebuild the Temple.",
      "replace Zerubbabel as governor."
    ],
    "ans": "permit the Jews to return from exile and rebuild the Temple.",
    "explanation": "Permit the Jews to return from exile and rebuild the Temple."
  },
  {
    "q": "Which prophet rebuked David after he conducted a census of Israel?",
    "options": [
      "Nathan.",
      "Samuel.",
      "Gad.",
      "Ahijah."
    ],
    "ans": "Nathan.",
    "explanation": "Nathan."
  },
  {
    "q": "The rebuilding of the Temple after the Babylonian exile was led principally by",
    "options": [
      "Ezra and Nehemiah.",
      "Zerubbabel and Joshua the High Priest.",
      "Haggai and Zechariah.",
      "Ezra and Haggai."
    ],
    "ans": "Zerubbabel and Joshua the High Priest.",
    "explanation": "Zerubbabel and Joshua the High Priest."
  },
  {
    "q": "Why did King Rehoboam lose most of the kingdom immediately after succeeding Solomon?",
    "options": [
      "He introduced idol worship.",
      "He failed to build the Temple.",
      "He rejected the wise counsel of the elders and oppressed the people.",
      "He refused to fight the Philistines."
    ],
    "ans": "He rejected the wise counsel of the elders and oppressed the people.",
    "explanation": "He rejected the wise counsel of the elders and oppressed the people."
  },
  {
    "q": "Jesus' statement, \"You are the salt of the earth,\" teaches that believers should",
    "options": [
      "isolate themselves from society.",
      "become political rulers.",
      "positively influence the world through godly character.",
      "avoid associating with unbelievers."
    ],
    "ans": "positively influence the world through godly character.",
    "explanation": "Positively influence the world through godly character."
  },
  {
    "q": "Why did Jesus heal the man with the withered hand on the Sabbath?",
    "options": [
      "To abolish the Sabbath completely.",
      "To challenge Roman authority.",
      "To teach that doing good is lawful on the Sabbath.",
      "To impress the Pharisees."
    ],
    "ans": "To teach that doing good is lawful on the Sabbath.",
    "explanation": "To teach that doing good is lawful on the Sabbath."
  },
  {
    "q": "The Parable of the Hidden Treasure teaches that",
    "options": [
      "wealth should be hidden.",
      "Christians should seek earthly riches.",
      "the Kingdom of God is worth sacrificing everything to obtain.",
      "treasures guarantee happiness."
    ],
    "ans": "the Kingdom of God is worth sacrificing everything to obtain.",
    "explanation": "The Kingdom of God is worth sacrificing everything to obtain."
  },
  {
    "q": "Why did Jesus refuse Satan's offer of all the kingdoms of the world?",
    "options": [
      "They were too small.",
      "Worship belongs to God alone.",
      "He preferred Galilee.",
      "Satan had no authority."
    ],
    "ans": "Worship belongs to God alone.",
    "explanation": "Worship belongs to God alone."
  },
  {
    "q": "The miracle of walking on water revealed Jesus'",
    "options": [
      "knowledge of nature only.",
      "physical strength.",
      "divine authority over the forces of nature.",
      "ability to swim."
    ],
    "ans": "divine authority over the forces of nature.",
    "explanation": "Divine authority over the forces of nature."
  },
  {
    "q": "At the Last Supper, Jesus broke the bread primarily as a symbol of",
    "options": [
      "the feeding of the five thousand.",
      "Israel's deliverance from Egypt.",
      "His body that would be given for humanity.",
      "unity among the apostles only."
    ],
    "ans": "His body that would be given for humanity.",
    "explanation": "His body that would be given for humanity."
  },
  {
    "q": "Jesus taught that the greatest person in the Kingdom of Heaven is the one who",
    "options": [
      "performs the most miracles.",
      "possesses the greatest wealth.",
      "humbles himself like a little child.",
      "has the highest position."
    ],
    "ans": "humbles himself like a little child.",
    "explanation": "Humbles himself like a little child."
  },
  {
    "q": "The principal reason Jesus prayed all night before choosing the Twelve Apostles was to",
    "options": [
      "avoid the Pharisees.",
      "impress His followers.",
      "seek the Father's guidance before making an important decision.",
      "prepare for the Passover."
    ],
    "ans": "seek the Father's guidance before making an important decision.",
    "explanation": "Seek the Father's guidance before making an important decision."
  },
  {
    "q": "Why did Paul rebuke Peter at Antioch?",
    "options": [
      "Peter denied Christ again.",
      "Peter preached false doctrine.",
      "Peter withdrew from Gentile believers out of fear of Jewish Christians.",
      "Peter refused to preach."
    ],
    "ans": "Peter withdrew from Gentile believers out of fear of Jewish Christians.",
    "explanation": "Peter withdrew from Gentile believers out of fear of Jewish Christians."
  },
  {
    "q": "The primary purpose of water baptism in the New Testament is to",
    "options": [
      "remove original sin automatically.",
      "guarantee salvation.",
      "publicly identify with Christ's death, burial, and resurrection.",
      "become a church leader."
    ],
    "ans": "publicly identify with Christ's death, burial, and resurrection.",
    "explanation": "Publicly identify with Christ's death, burial, and resurrection."
  },
  {
    "q": "According to Paul, believers should forgive one another because",
    "options": [
      "forgiveness is optional.",
      "revenge belongs to believers.",
      "God in Christ has forgiven them.",
      "punishment is unnecessary."
    ],
    "ans": "God in Christ has forgiven them.",
    "explanation": "God in Christ has forgiven them."
  },
  {
    "q": "Which church in Revelation was commended for testing false apostles?",
    "options": [
      "Pergamum.",
      "Ephesus.",
      "Sardis.",
      "Thyatira."
    ],
    "ans": "Ephesus.",
    "explanation": "Ephesus."
  },
  {
    "q": "The phrase \"faith comes by hearing\" emphasizes the importance of",
    "options": [
      "dreams and visions.",
      "miracles only.",
      "hearing the message of God's Word.",
      "religious traditions."
    ],
    "ans": "hearing the message of God's Word.",
    "explanation": "Hearing the message of God's Word."
  },
  {
    "q": "According to James, true religion before God includes",
    "options": [
      "observing festivals only.",
      "offering many sacrifices.",
      "caring for orphans and widows while remaining morally pure.",
      "praying three times daily."
    ],
    "ans": "caring for orphans and widows while remaining morally pure.",
    "explanation": "Caring for orphans and widows while remaining morally pure."
  },
  {
    "q": "The main purpose of spiritual discipline such as prayer and fasting is to",
    "options": [
      "earn salvation.",
      "gain public recognition.",
      "deepen one's relationship with God and strengthen faith.",
      "obtain material wealth."
    ],
    "ans": "deepen one's relationship with God and strengthen faith.",
    "explanation": "Deepen one's relationship with God and strengthen faith."
  },
  {
    "q": "Jesus taught that whoever wants to become great must first become",
    "options": [
      "wealthy.",
      "educated.",
      "a servant of others.",
      "politically influential."
    ],
    "ans": "a servant of others.",
    "explanation": "A servant of others."
  },
  {
    "q": "The greatest evidence of genuine repentance according to the ministry of John the Baptist is",
    "options": [
      "public confession alone.",
      "frequent fasting.",
      "producing fruits worthy of repentance.",
      "regular attendance at the synagogue."
    ],
    "ans": "producing fruits worthy of repentance.",
    "explanation": "Producing fruits worthy of repentance."
  },
  {
    "q": "According to Hebrews, Jesus is superior to the Old Testament priests because He",
    "options": [
      "belonged to the tribe of Levi.",
      "offered animal sacrifices daily.",
      "offered Himself once for all as the perfect sacrifice for sin.",
      "ministered only in the earthly Temple."
    ],
    "ans": "offered Himself once for all as the perfect sacrifice for sin.",
    "explanation": "Offered Himself once for all as the perfect sacrifice for sin."
  },
  {
    "q": "The central message of the Parable of the Wise and Foolish Builders is that",
    "options": [
      "building houses is important.",
      "wisdom comes with age.",
      "obedience to Christ's teachings provides a firm foundation for life.",
      "storms should always be avoided."
    ],
    "ans": "obedience to Christ's teachings provides a firm foundation for life.",
    "explanation": "Obedience to Christ's teachings provides a firm foundation for life."
  },
  {
    "q": "Which of the following best summarizes the overall message of the Bible?",
    "options": [
      "Human beings can save themselves through good works.",
      "Wealth and prosperity are the highest goals of life.",
      "Religion alone guarantees eternal life.",
      "God lovingly accomplishes humanity's redemption through Jesus Christ, calling people to faith, repentance, obedience, and eternal fellowship with Him."
    ],
    "ans": "God lovingly accomplishes humanity's redemption through Jesus Christ, calling people to faith, repentance, obedience, and eternal fellowship with Him.",
    "explanation": "God lovingly accomplishes humanity's redemption through Jesus Christ, calling people to faith, repentance, obedience, and eternal fellowship with Him."
  },
  {
    "q": "Why did God establish the cities of refuge in Israel?",
    "options": [
      "To protect foreign merchants.",
      "To imprison criminals permanently.",
      "To provide protection for persons who killed unintentionally until a fair trial was held.",
      "To train Israelite soldiers."
    ],
    "ans": "To provide protection for persons who killed unintentionally until a fair trial was held.",
    "explanation": "To provide protection for persons who killed unintentionally until a fair trial was held."
  },
  {
    "q": "The primary reason Joshua renewed the covenant at Shechem was to",
    "options": [
      "appoint another leader.",
      "divide the Promised Land again.",
      "reaffirm Israel's commitment to serve the LORD alone.",
      "prepare for another battle."
    ],
    "ans": "reaffirm Israel's commitment to serve the LORD alone.",
    "explanation": "Reaffirm Israel's commitment to serve the LORD alone."
  },
  {
    "q": "Why did Gideon ask God for signs involving the fleece?",
    "options": [
      "He doubted God's existence.",
      "He wanted to impress the Israelites.",
      "He sought assurance of God's promise before confronting the Midianites.",
      "He wanted to delay the battle."
    ],
    "ans": "He sought assurance of God's promise before confronting the Midianites.",
    "explanation": "He sought assurance of God's promise before confronting the Midianites."
  },
  {
    "q": "The Nazirite vow required Samson to",
    "options": [
      "avoid meat permanently.",
      "live in the Temple.",
      "abstain from wine, avoid touching dead bodies, and never cut his hair.",
      "fast every Sabbath."
    ],
    "ans": "abstain from wine, avoid touching dead bodies, and never cut his hair.",
    "explanation": "Abstain from wine, avoid touching dead bodies, and never cut his hair."
  },
  {
    "q": "Why did King Saul consult the medium at Endor?",
    "options": [
      "He wanted to worship idols.",
      "He wished to become a prophet.",
      "God no longer answered him, and he desperately sought guidance before battle.",
      "Samuel instructed him to do so."
    ],
    "ans": "God no longer answered him, and he desperately sought guidance before battle.",
    "explanation": "God no longer answered him, and he desperately sought guidance before battle."
  },
  {
    "q": "David's desire to build the Temple was declined because",
    "options": [
      "he lacked sufficient wealth.",
      "Jerusalem was too small.",
      "he had shed much blood, so God chose Solomon to build it.",
      "the Ark had been lost."
    ],
    "ans": "he had shed much blood, so God chose Solomon to build it.",
    "explanation": "He had shed much blood, so God chose Solomon to build it."
  },
  {
    "q": "Why was Elijah fed by ravens during the drought?",
    "options": [
      "To demonstrate the intelligence of birds.",
      "Elijah refused human assistance.",
      "God miraculously provided for His prophet during a time of famine.",
      "There were no people living nearby."
    ],
    "ans": "God miraculously provided for His prophet during a time of famine.",
    "explanation": "God miraculously provided for His prophet during a time of famine."
  },
  {
    "q": "The prophet Haggai encouraged the returned exiles mainly to",
    "options": [
      "rebuild Jerusalem's walls.",
      "rebuild the Temple of the LOR",
      "establish a monarchy.",
      "conquer neighboring nations."
    ],
    "ans": "rebuild the Temple of the LOR",
    "explanation": "Rebuild the Temple of the LOR."
  },
  {
    "q": "Why did Zechariah encourage the Jews by saying, \"Not by might nor by power, but by my Spirit\"?",
    "options": [
      "Israel possessed a large army.",
      "God's work would succeed through His Spirit rather than human strength.",
      "The Persians had withdrawn their support.",
      "Zerubbabel was a military commander."
    ],
    "ans": "God's work would succeed through His Spirit rather than human strength.",
    "explanation": "God's work would succeed through His Spirit rather than human strength."
  },
  {
    "q": "Jesus healed the centurion's servant without visiting his house because",
    "options": [
      "the servant had already recovered.",
      "Jesus was too busy.",
      "the centurion demonstrated remarkable faith in Jesus' authority.",
      "Jewish law prevented Him from entering."
    ],
    "ans": "the centurion demonstrated remarkable faith in Jesus' authority.",
    "explanation": "The centurion demonstrated remarkable faith in Jesus' authority."
  },
  {
    "q": "Why did Jesus say that it is easier for a camel to pass through the eye of a needle than for a rich man to enter God's kingdom?",
    "options": [
      "Wealth is sinful in itself.",
      "Trusting in riches can prevent wholehearted dependence on God.",
      "Rich people cannot become Christians.",
      "Poverty guarantees salvation."
    ],
    "ans": "Trusting in riches can prevent wholehearted dependence on God.",
    "explanation": "Trusting in riches can prevent wholehearted dependence on God."
  },
  {
    "q": "The woman with the issue of blood was healed because of her",
    "options": [
      "medical treatment.",
      "family influence.",
      "faith in Jesus Christ.",
      "long period of fasting."
    ],
    "ans": "faith in Jesus Christ.",
    "explanation": "Faith in Jesus Christ."
  },
  {
    "q": "Why did Jesus send out the disciples two by two?",
    "options": [
      "To reduce travel expenses.",
      "To increase their popularity.",
      "To strengthen their witness and ministry through mutual support.",
      "To compete with one another."
    ],
    "ans": "To strengthen their witness and ministry through mutual support.",
    "explanation": "To strengthen their witness and ministry through mutual support."
  },
  {
    "q": "The principal lesson from the Parable of the Rich Man and Lazarus is that",
    "options": [
      "poverty automatically leads to heaven.",
      "wealth is forbidden.",
      "one's response to God in this life has eternal consequences.",
      "Abraham judges the dead."
    ],
    "ans": "one's response to God in this life has eternal consequences.",
    "explanation": "One's response to God in this life has eternal consequences."
  },
  {
    "q": "Why did Jesus commend the persistent widow in His parable?",
    "options": [
      "She was wealthy.",
      "She demonstrated perseverance in seeking justice.",
      "She bribed the judge.",
      "She belonged to a royal family."
    ],
    "ans": "She demonstrated perseverance in seeking justice.",
    "explanation": "She demonstrated perseverance in seeking justice."
  },
  {
    "q": "Which miracle immediately followed Jesus' triumphal entry into Jerusalem?",
    "options": [
      "Feeding the four thousand.",
      "Healing Bartimaeus.",
      "Cleansing the Temple.",
      "Raising Jairus' daughter."
    ],
    "ans": "Cleansing the Temple.",
    "explanation": "Cleansing the Temple."
  },
  {
    "q": "Thomas' confession, \"My Lord and my God,\" demonstrates",
    "options": [
      "his disappointment.",
      "his fear of the Jews.",
      "his recognition of Jesus' divine nature after the resurrection.",
      "his appointment as leader of the apostles."
    ],
    "ans": "his recognition of Jesus' divine nature after the resurrection.",
    "explanation": "His recognition of Jesus' divine nature after the resurrection."
  },
  {
    "q": "Why did the apostles choose Matthias?",
    "options": [
      "To replace Peter.",
      "To replace James.",
      "To take the place of Judas Iscariot among the Twelve.",
      "To become the first deacon."
    ],
    "ans": "To take the place of Judas Iscariot among the Twelve.",
    "explanation": "To take the place of Judas Iscariot among the Twelve."
  },
  {
    "q": "The conversion of Lydia is significant because she",
    "options": [
      "became queen of Philippi.",
      "was the first Roman governor.",
      "was among the first recorded converts in Europe.",
      "built the Temple in Jerusalem."
    ],
    "ans": "was among the first recorded converts in Europe.",
    "explanation": "Was among the first recorded converts in Europe."
  },
  {
    "q": "Why did Paul write the Epistle to the Galatians?",
    "options": [
      "To explain church leadership only.",
      "To defend justification by faith against legalism.",
      "To discuss the Second Coming exclusively.",
      "To appoint Timothy as bishop."
    ],
    "ans": "To defend justification by faith against legalism.",
    "explanation": "To defend justification by faith against legalism."
  },
  {
    "q": "According to Paul, the Christian's spiritual armor is necessary because",
    "options": [
      "believers fight physical wars.",
      "Satan can never tempt Christians.",
      "believers struggle against spiritual forces of evil.",
      "persecution has ended."
    ],
    "ans": "believers struggle against spiritual forces of evil.",
    "explanation": "Believers struggle against spiritual forces of evil."
  },
  {
    "q": "The greatest mark of Christian maturity according to Ephesians 4 is",
    "options": [
      "performing miracles.",
      "speaking many languages.",
      "growing into the fullness and character of Christ.",
      "becoming a church elder."
    ],
    "ans": "growing into the fullness and character of Christ.",
    "explanation": "Growing into the fullness and character of Christ."
  },
  {
    "q": "According to Peter, believers should always be ready to",
    "options": [
      "defend themselves physically.",
      "condemn unbelievers.",
      "give a reason for the hope they have, with gentleness and respect.",
      "avoid difficult questions."
    ],
    "ans": "give a reason for the hope they have, with gentleness and respect.",
    "explanation": "Give a reason for the hope they have, with gentleness and respect."
  },
  {
    "q": "The Book of Revelation describes the New Jerusalem primarily as",
    "options": [
      "the rebuilt earthly Jerusalem.",
      "the headquarters of the Roman Empire.",
      "the eternal dwelling place of God with His redeemed people.",
      "the capital of Israel during the Millennium."
    ],
    "ans": "the eternal dwelling place of God with His redeemed people.",
    "explanation": "The eternal dwelling place of God with His redeemed people."
  },
  {
    "q": "Which of the following best summarizes the purpose of the Christian life according to the New Testament?",
    "options": [
      "To acquire wealth and influence.",
      "To avoid all suffering.",
      "To observe religious rituals only.",
      "To glorify God through faith in Christ, holy living, love for others, and faithful service until His return."
    ],
    "ans": "To glorify God through faith in Christ, holy living, love for others, and faithful service until His return.",
    "explanation": "To glorify God through faith in Christ, holy living, love for others, and faithful service until His return."
  },
  {
    "q": "After the Israelites crossed the Jordan River, Joshua commanded twelve stones to be set up primarily to",
    "options": [
      "mark Israel's territorial boundary.",
      "decorate the camp at Gilgal.",
      "serve as a memorial of God's miraculous deliverance for future generations.",
      "build an altar for sacrifices."
    ],
    "ans": "serve as a memorial of God's miraculous deliverance for future generations.",
    "explanation": "Serve as a memorial of God's miraculous deliverance for future generations."
  },
  {
    "q": "Why did God reduce Gideon's army from 32,000 to 300 men?",
    "options": [
      "There was insufficient food for the soldiers.",
      "Gideon requested a smaller army.",
      "God wanted Israel to know that victory comes from Him, not human strength.",
      "The Midianites were few in number."
    ],
    "ans": "God wanted Israel to know that victory comes from Him, not human strength.",
    "explanation": "God wanted Israel to know that victory comes from Him, not human strength."
  },
  {
    "q": "Samuel anointed David as king while Saul was still reigning because",
    "options": [
      "Saul had died secretly.",
      "David demanded the throne.",
      "God had rejected Saul for his disobedience and chosen David.",
      "Jesse requested Samuel's visit."
    ],
    "ans": "God had rejected Saul for his disobedience and chosen David.",
    "explanation": "God had rejected Saul for his disobedience and chosen David."
  },
  {
    "q": "Why did David refuse to drink the water brought from Bethlehem by his mighty men?",
    "options": [
      "The water was contaminated.",
      "He disliked water from Bethlehem.",
      "He considered it too costly because they had risked their lives to obtain it.",
      "He was observing a fast."
    ],
    "ans": "He considered it too costly because they had risked their lives to obtain it.",
    "explanation": "He considered it too costly because they had risked their lives to obtain it."
  },
  {
    "q": "Solomon asked for wisdom because",
    "options": [
      "he lacked wealth.",
      "he desired military success.",
      "he wanted to govern God's people with justice and understanding.",
      "his advisers persuaded him."
    ],
    "ans": "he wanted to govern God's people with justice and understanding.",
    "explanation": "He wanted to govern God's people with justice and understanding."
  },
  {
    "q": "The ministry of Elisha differed from Elijah's in that Elisha",
    "options": [
      "performed no miracles.",
      "preached only to kings.",
      "performed many miracles that emphasized God's compassion and provision.",
      "remained permanently in Jerusalem."
    ],
    "ans": "performed many miracles that emphasized God's compassion and provision.",
    "explanation": "Performed many miracles that emphasized God's compassion and provision."
  },
  {
    "q": "The major reason Josiah instituted religious reforms was because",
    "options": [
      "Babylon attacked Judah.",
      "the Book of the Law was discovered in the Temple.",
      "Jeremiah became king.",
      "Egypt demanded reforms."
    ],
    "ans": "the Book of the Law was discovered in the Temple.",
    "explanation": "The Book of the Law was discovered in the Temple."
  },
  {
    "q": "Ezekiel's symbolic act of lying on his side represented",
    "options": [
      "the military defeat of Egypt.",
      "God's judgment on Israel and Judah because of their sins.",
      "the rebuilding of Jerusalem.",
      "the coming of the Messiah."
    ],
    "ans": "God's judgment on Israel and Judah because of their sins.",
    "explanation": "God's judgment on Israel and Judah because of their sins."
  },
  {
    "q": "Why did Daniel continue praying openly despite the king's decree?",
    "options": [
      "He wanted public attention.",
      "He intended to challenge the government.",
      "His loyalty to God was greater than his fear of human authority.",
      "He forgot about the decree."
    ],
    "ans": "His loyalty to God was greater than his fear of human authority.",
    "explanation": "His loyalty to God was greater than his fear of human authority."
  },
  {
    "q": "The prophet Malachi condemned the priests mainly because they",
    "options": [
      "failed to collect taxes.",
      "refused to build synagogues.",
      "offered defective sacrifices and dishonored God's name.",
      "abandoned Jerusalem."
    ],
    "ans": "offered defective sacrifices and dishonored God's name.",
    "explanation": "Offered defective sacrifices and dishonored God's name."
  },
  {
    "q": "Jesus said that no one can serve two masters because",
    "options": [
      "every master is unjust.",
      "wealth is forbidden.",
      "one cannot wholeheartedly serve both God and material riches.",
      "Christians should avoid employment."
    ],
    "ans": "one cannot wholeheartedly serve both God and material riches.",
    "explanation": "One cannot wholeheartedly serve both God and material riches."
  },
  {
    "q": "The miracle of Jesus healing the ten lepers teaches that",
    "options": [
      "only Jews receive God's blessings.",
      "gratitude should accompany God's blessings.",
      "sickness is always caused by sin.",
      "leprosy has no cure."
    ],
    "ans": "gratitude should accompany God's blessings.",
    "explanation": "Gratitude should accompany God's blessings."
  },
  {
    "q": "Why did Jesus praise the faith of the Syrophoenician woman?",
    "options": [
      "She belonged to Israel.",
      "She offered expensive gifts.",
      "She humbly persisted in trusting Jesus despite initial discouragement.",
      "She was related to the disciples."
    ],
    "ans": "She humbly persisted in trusting Jesus despite initial discouragement.",
    "explanation": "She humbly persisted in trusting Jesus despite initial discouragement."
  },
  {
    "q": "The Transfiguration revealed that Jesus",
    "options": [
      "was equal only to Moses.",
      "replaced all the prophets.",
      "is God's beloved Son whose authority surpasses that of Moses and Elijah.",
      "intended to remain on the mountain."
    ],
    "ans": "is God's beloved Son whose authority surpasses that of Moses and Elijah.",
    "explanation": "Is God's beloved Son whose authority surpasses that of Moses and Elijah."
  },
  {
    "q": "Jesus' command to \"love your enemies\" primarily teaches believers to",
    "options": [
      "ignore injustice.",
      "avoid defending the truth.",
      "reflect God's mercy even toward those who oppose them.",
      "approve sinful behavior."
    ],
    "ans": "reflect God's mercy even toward those who oppose them.",
    "explanation": "Reflect God's mercy even toward those who oppose them."
  },
  {
    "q": "Why did Jesus wash His disciples' feet before the Last Supper?",
    "options": [
      "Jewish custom required it.",
      "The servants were absent.",
      "He wanted to model humility and servant leadership.",
      "The disciples' feet were injured."
    ],
    "ans": "He wanted to model humility and servant leadership.",
    "explanation": "He wanted to model humility and servant leadership."
  },
  {
    "q": "Peter's sermon on the Day of Pentecost resulted in",
    "options": [
      "about five hundred conversions.",
      "exactly one thousand baptisms.",
      "about three thousand people accepting the gospel.",
      "the immediate conversion of King Herod."
    ],
    "ans": "about three thousand people accepting the gospel.",
    "explanation": "About three thousand people accepting the gospel."
  },
  {
    "q": "Paul's conversion demonstrates that",
    "options": [
      "education guarantees salvation.",
      "persecution pleases God.",
      "God's grace can completely transform even the fiercest opponent of the gospel.",
      "miracles occur only to apostles."
    ],
    "ans": "God's grace can completely transform even the fiercest opponent of the gospel.",
    "explanation": "God's grace can completely transform even the fiercest opponent of the gospel."
  },
  {
    "q": "Why did Paul and Barnabas separate before the second missionary journey?",
    "options": [
      "They disagreed over doctrine.",
      "They disagreed about taking John Mark along.",
      "Barnabas abandoned the faith.",
      "Paul retired from ministry."
    ],
    "ans": "They disagreed about taking John Mark along.",
    "explanation": "They disagreed about taking John Mark along."
  },
  {
    "q": "According to Romans, Abraham was justified because of his",
    "options": [
      "circumcision.",
      "obedience to the Law of Moses.",
      "faith in God's promise.",
      "generosity to the poor."
    ],
    "ans": "faith in God's promise.",
    "explanation": "Faith in God's promise."
  },
  {
    "q": "Paul described love as the greatest virtue because",
    "options": [
      "it produces wealth.",
      "it brings political influence.",
      "it outlasts spiritual gifts and perfectly reflects God's nature.",
      "it replaces faith and hope."
    ],
    "ans": "it outlasts spiritual gifts and perfectly reflects God's nature.",
    "explanation": "It outlasts spiritual gifts and perfectly reflects God's nature."
  },
  {
    "q": "According to Ephesians, salvation is by grace through faith so that",
    "options": [
      "believers may boast in themselves.",
      "only Jews may be saved.",
      "no one can boast of earning salvation by works.",
      "good works become unnecessary."
    ],
    "ans": "no one can boast of earning salvation by works.",
    "explanation": "No one can boast of earning salvation by works."
  },
  {
    "q": "The principal message of the Book of James is that",
    "options": [
      "faith eliminates the need for obedience.",
      "Christians should avoid trials.",
      "genuine faith is demonstrated through righteous living and good works.",
      "wealth is the sign of true spirituality."
    ],
    "ans": "genuine faith is demonstrated through righteous living and good works.",
    "explanation": "Genuine faith is demonstrated through righteous living and good works."
  },
  {
    "q": "According to Revelation, those whose names are written in the Book of Life will",
    "options": [
      "reign in the Roman Empire.",
      "escape all earthly suffering.",
      "inherit eternal life in God's everlasting kingdom.",
      "become angels."
    ],
    "ans": "inherit eternal life in God's everlasting kingdom.",
    "explanation": "Inherit eternal life in God's everlasting kingdom."
  },
  {
    "q": "Which of the following best summarizes Jesus' teaching about discipleship?",
    "options": [
      "Follow Christ only when it is convenient.",
      "Seek wealth before serving God.",
      "Avoid suffering at all costs.",
      "Deny yourself, take up your cross daily, and faithfully follow Him in obedience and love."
    ],
    "ans": "Deny yourself, take up your cross daily, and faithfully follow Him in obedience and love.",
    "explanation": "Deny yourself, take up your cross daily, and faithfully follow Him in obedience and love."
  },
  {
    "q": "Why did Abraham pay tithes to Melchizedek?",
    "options": [
      "Melchizedek demanded it.",
      "It was a royal tax.",
      "He recognized Melchizedek as the priest of the Most High God and honored God with the victory.",
      "He wanted forgiveness of sins."
    ],
    "ans": "He recognized Melchizedek as the priest of the Most High God and honored God with the victory.",
    "explanation": "He recognized Melchizedek as the priest of the Most High God and honored God with the victory."
  },
  {
    "q": "The significance of the ram caught in the thicket during Abraham's sacrifice of Isaac was that it",
    "options": [
      "became Israel's national symbol.",
      "replaced Isaac permanently as Abraham's son.",
      "symbolized God's provision of a substitute sacrifice.",
      "fulfilled Jacob's blessing."
    ],
    "ans": "symbolized God's provision of a substitute sacrifice.",
    "explanation": "Symbolized God's provision of a substitute sacrifice."
  },
  {
    "q": "Why did Jacob serve Laban for fourteen years?",
    "options": [
      "He had no money to return home.",
      "He desired to marry Rachel after being deceived into marrying Leah first.",
      "He was enslaved by Laban.",
      "God commanded him to remain there."
    ],
    "ans": "He desired to marry Rachel after being deceived into marrying Leah first.",
    "explanation": "He desired to marry Rachel after being deceived into marrying Leah first."
  },
  {
    "q": "Moses' intercession after Israel worshipped the golden calf demonstrates",
    "options": [
      "that God changes His character.",
      "Moses' political ambition.",
      "the role of faithful intercession on behalf of sinful people.",
      "that idolatry has little consequence."
    ],
    "ans": "the role of faithful intercession on behalf of sinful people.",
    "explanation": "The role of faithful intercession on behalf of sinful people."
  },
  {
    "q": "The cloud by day and the pillar of fire by night primarily symbolized",
    "options": [
      "Israel's military strength.",
      "the power of Moses.",
      "God's continual presence, guidance, and protection.",
      "the changing seasons."
    ],
    "ans": "God's continual presence, guidance, and protection.",
    "explanation": "God's continual presence, guidance, and protection."
  },
  {
    "q": "Why did the Israelites keep manna in the Ark of the Covenant?",
    "options": [
      "It was used for sacrifices.",
      "It became Israel's national food.",
      "It served as a memorial of God's provision in the wilderness.",
      "It prevented famine."
    ],
    "ans": "It served as a memorial of God's provision in the wilderness.",
    "explanation": "It served as a memorial of God's provision in the wilderness."
  },
  {
    "q": "Joshua's encounter with the Commander of the LORD's army teaches that",
    "options": [
      "Joshua became an angel.",
      "Israel should avoid battles.",
      "victory belongs to God, and His people must submit to His authority.",
      "Jericho surrendered peacefully."
    ],
    "ans": "victory belongs to God, and His people must submit to His authority.",
    "explanation": "Victory belongs to God, and His people must submit to His authority."
  },
  {
    "q": "Why did Boaz agree to marry Ruth?",
    "options": [
      "He was forced by the elders.",
      "He fulfilled the responsibility of a kinsman-redeemer according to Israelite law.",
      "Naomi commanded him.",
      "Ruth was wealthy."
    ],
    "ans": "He fulfilled the responsibility of a kinsman-redeemer according to Israelite law.",
    "explanation": "He fulfilled the responsibility of a kinsman-redeemer according to Israelite law."
  },
  {
    "q": "David's prayer in Psalm 51 reveals that true repentance includes",
    "options": [
      "making excuses for sin.",
      "blaming others.",
      "sincere confession and a desire for a renewed heart.",
      "offering expensive sacrifices only."
    ],
    "ans": "sincere confession and a desire for a renewed heart.",
    "explanation": "Sincere confession and a desire for a renewed heart."
  },
  {
    "q": "Why was Elijah discouraged after his victory on Mount Carmel?",
    "options": [
      "The people rejected God immediately.",
      "Jezebel threatened to kill him, and he felt alone in serving God.",
      "He lost his prophetic gift.",
      "Ahab imprisoned him."
    ],
    "ans": "Jezebel threatened to kill him, and he felt alone in serving God.",
    "explanation": "Jezebel threatened to kill him, and he felt alone in serving God."
  },
  {
    "q": "Elisha's healing of the poisoned stew demonstrates that",
    "options": [
      "prophets were physicians.",
      "God is able to provide and preserve life in times of need.",
      "vegetables should be avoided.",
      "miracles occur by chance."
    ],
    "ans": "God is able to provide and preserve life in times of need.",
    "explanation": "God is able to provide and preserve life in times of need."
  },
  {
    "q": "King Hezekiah trusted God during the Assyrian invasion by",
    "options": [
      "surrendering Jerusalem.",
      "seeking Egypt's military support.",
      "praying to God and seeking the counsel of Isaiah.",
      "fleeing from Judah."
    ],
    "ans": "praying to God and seeking the counsel of Isaiah.",
    "explanation": "Praying to God and seeking the counsel of Isaiah."
  },
  {
    "q": "The prophet Micah summarized God's requirement for humanity as",
    "options": [
      "offering more sacrifices.",
      "building larger temples.",
      "acting justly, loving mercy, and walking humbly with God.",
      "fasting every week."
    ],
    "ans": "acting justly, loving mercy, and walking humbly with God.",
    "explanation": "Acting justly, loving mercy, and walking humbly with God."
  },
  {
    "q": "Jesus' statement, \"The Sabbath was made for man,\" teaches that",
    "options": [
      "the Sabbath should be abolished.",
      "people should never observe the Sabbath.",
      "God's laws are intended for humanity's good, not as burdens.",
      "work is forbidden every day."
    ],
    "ans": "God's laws are intended for humanity's good, not as burdens.",
    "explanation": "God's laws are intended for humanity's good, not as burdens."
  },
  {
    "q": "The Parable of the Pharisee and the Tax Collector teaches that",
    "options": [
      "public prayer is wrong.",
      "tax collectors are naturally righteous.",
      "God justifies the humble rather than the self-righteous.",
      "fasting guarantees acceptance before God."
    ],
    "ans": "God justifies the humble rather than the self-righteous.",
    "explanation": "God justifies the humble rather than the self-righteous."
  },
  {
    "q": "Jesus healed Bartimaeus because",
    "options": [
      "Bartimaeus was wealthy.",
      "the disciples requested it.",
      "Bartimaeus persistently expressed faith in Jesus as the Son of David.",
      "Bartimaeus was related to Jesus."
    ],
    "ans": "Bartimaeus persistently expressed faith in Jesus as the Son of David.",
    "explanation": "Bartimaeus persistently expressed faith in Jesus as the Son of David."
  },
  {
    "q": "The cursing of the fig tree serves as a warning against",
    "options": [
      "farming without irrigation.",
      "planting fruit trees.",
      "outward religion that produces no spiritual fruit.",
      "traveling during harvest."
    ],
    "ans": "outward religion that produces no spiritual fruit.",
    "explanation": "Outward religion that produces no spiritual fruit."
  },
  {
    "q": "Why did Jesus delay going to Lazarus after hearing he was sick?",
    "options": [
      "He was afraid of the Jews.",
      "He forgot about Lazarus.",
      "He intended to reveal God's glory through Lazarus' resurrection.",
      "Martha told Him not to come."
    ],
    "ans": "He intended to reveal God's glory through Lazarus' resurrection.",
    "explanation": "He intended to reveal God's glory through Lazarus' resurrection."
  },
  {
    "q": "Paul's imprisonment in Rome demonstrates that",
    "options": [
      "God's work ends in suffering.",
      "prison prevents the spread of the gospel.",
      "God can use difficult circumstances to advance His purposes.",
      "Christians should avoid preaching publicly."
    ],
    "ans": "God can use difficult circumstances to advance His purposes.",
    "explanation": "God can use difficult circumstances to advance His purposes."
  },
  {
    "q": "According to Romans 12, believers should",
    "options": [
      "conform to worldly values.",
      "avoid serving others.",
      "be transformed by the renewing of their minds.",
      "withdraw completely from society."
    ],
    "ans": "be transformed by the renewing of their minds.",
    "explanation": "Be transformed by the renewing of their minds."
  },
  {
    "q": "Paul's description of the Church as the Body of Christ emphasizes",
    "options": [
      "competition among believers.",
      "equality of spiritual gifts.",
      "unity with diversity of functions.",
      "independence from Christ."
    ],
    "ans": "unity with diversity of functions.",
    "explanation": "Unity with diversity of functions."
  },
  {
    "q": "According to Philippians 2, Christ demonstrated humility by",
    "options": [
      "refusing to become human.",
      "avoiding suffering.",
      "emptying Himself, taking the form of a servant, and becoming obedient unto death.",
      "remaining in heaven."
    ],
    "ans": "emptying Himself, taking the form of a servant, and becoming obedient unto death.",
    "explanation": "Emptying Himself, taking the form of a servant, and becoming obedient unto death."
  },
  {
    "q": "The Book of Hebrews teaches that the Old Testament sacrifices were",
    "options": [
      "permanently sufficient for sin.",
      "unnecessary from the beginning.",
      "temporary shadows pointing to Christ's perfect sacrifice.",
      "superior to Christ's sacrifice."
    ],
    "ans": "temporary shadows pointing to Christ's perfect sacrifice.",
    "explanation": "Temporary shadows pointing to Christ's perfect sacrifice."
  },
  {
    "q": "According to 1 John, anyone who claims to love God but hates a fellow believer",
    "options": [
      "is spiritually mature.",
      "needs more education.",
      "is not living in the truth of God's love.",
      "will receive greater rewards."
    ],
    "ans": "is not living in the truth of God's love.",
    "explanation": "Is not living in the truth of God's love."
  },
  {
    "q": "Which statement best summarizes the mission of the Church according to the New Testament?",
    "options": [
      "To gain political control over nations.",
      "To accumulate wealth and influence.",
      "To preserve Jewish traditions only.",
      "To proclaim the gospel, make disciples, worship God, serve others, and glorify Christ until He returns."
    ],
    "ans": "To proclaim the gospel, make disciples, worship God, serve others, and glorify Christ until He returns.",
    "explanation": "To proclaim the gospel, make disciples, worship God, serve others, and glorify Christ until He returns."
  },
  {
    "q": "Why did God instruct Moses to construct the Tabernacle according to the pattern shown on the mountain?",
    "options": [
      "To display Israel's artistic skills.",
      "To impress the surrounding nations.",
      "It symbolized God's dwelling among His people and pointed to heavenly realities.",
      "It was intended as a permanent temple."
    ],
    "ans": "It symbolized God's dwelling among His people and pointed to heavenly realities.",
    "explanation": "It symbolized God's dwelling among His people and pointed to heavenly realities."
  },
  {
    "q": "Why did Nadab and Abihu die before the LORD?",
    "options": [
      "They refused to become priests.",
      "They offered too many sacrifices.",
      "They offered unauthorized (strange) fire before the LORD, contrary to His command.",
      "They abandoned the Tabernacle."
    ],
    "ans": "They offered unauthorized (strange) fire before the LORD, contrary to His command.",
    "explanation": "They offered unauthorized (strange) fire before the LORD, contrary to His command."
  },
  {
    "q": "The primary purpose of the Year of Jubilee in Israel was to",
    "options": [
      "celebrate military victories.",
      "increase taxation.",
      "restore property, free slaves, and provide social and economic renewal.",
      "appoint judges."
    ],
    "ans": "restore property, free slaves, and provide social and economic renewal.",
    "explanation": "Restore property, free slaves, and provide social and economic renewal."
  },
  {
    "q": "Why did Balaam bless Israel instead of cursing them?",
    "options": [
      "Balak changed his mind.",
      "Balaam pitied the Israelites.",
      "God overruled Balaam and put blessings in his mouth.",
      "Israel defeated Moab first."
    ],
    "ans": "God overruled Balaam and put blessings in his mouth.",
    "explanation": "God overruled Balaam and put blessings in his mouth."
  },
  {
    "q": "The request of the daughters of Zelophehad resulted in",
    "options": [
      "the division of Judah.",
      "the appointment of Joshua.",
      "a law allowing daughters to inherit when there were no sons.",
      "the cancellation of inheritance laws."
    ],
    "ans": "a law allowing daughters to inherit when there were no sons.",
    "explanation": "A law allowing daughters to inherit when there were no sons."
  },
  {
    "q": "Jesus taught that the greatest commandment is to",
    "options": [
      "obey every civil law.",
      "honor religious leaders.",
      "love God with all your heart, soul, mind, and strength.",
      "give generously to the poor."
    ],
    "ans": "love God with all your heart, soul, mind, and strength.",
    "explanation": "Love God with all your heart, soul, mind, and strength."
  },
  {
    "q": "Which event demonstrated Jesus' authority over evil spirits?",
    "options": [
      "Turning water into wine.",
      "Feeding the five thousand.",
      "Casting out the demons from the Gadarene demoniac.",
      "Walking on water."
    ],
    "ans": "Casting out the demons from the Gadarene demoniac.",
    "explanation": "Casting out the demons from the Gadarene demoniac."
  },
  {
    "q": "The Parable of the Workers in the Vineyard primarily teaches that",
    "options": [
      "wages should always be equal.",
      "hard work guarantees salvation.",
      "God is sovereign and gracious in rewarding His servants.",
      "late workers should not be employed."
    ],
    "ans": "God is sovereign and gracious in rewarding His servants.",
    "explanation": "God is sovereign and gracious in rewarding His servants."
  },
  {
    "q": "Why did Jesus commend the poor widow who gave two small coins?",
    "options": [
      "She gave more money than everyone else.",
      "She donated publicly.",
      "She gave all she had, demonstrating wholehearted trust in God.",
      "She was related to the priests."
    ],
    "ans": "She gave all she had, demonstrating wholehearted trust in God.",
    "explanation": "She gave all she had, demonstrating wholehearted trust in God."
  },
  {
    "q": "The miracle at Cana revealed Jesus'",
    "options": [
      "desire for popularity.",
      "concern for business success.",
      "divine power and marked the beginning of His public signs.",
      "authority over the Roman government."
    ],
    "ans": "divine power and marked the beginning of His public signs.",
    "explanation": "Divine power and marked the beginning of His public signs."
  },
  {
    "q": "Why did Paul insist on appealing to Caesar?",
    "options": [
      "He feared the Jews.",
      "He wanted to become a Roman official.",
      "He exercised his legal right as a Roman citizen and advanced God's purpose of reaching Rome.",
      "Festus advised him to do so."
    ],
    "ans": "He exercised his legal right as a Roman citizen and advanced God's purpose of reaching Rome.",
    "explanation": "He exercised his legal right as a Roman citizen and advanced God's purpose of reaching Rome."
  },
  {
    "q": "According to Romans, \"the wages of sin\" is",
    "options": [
      "poverty.",
      "sickness.",
      "death.",
      "suffering."
    ],
    "ans": "death.",
    "explanation": "Death."
  },
  {
    "q": "According to 2 Corinthians, believers are ambassadors for Christ because they",
    "options": [
      "represent earthly governments.",
      "replace the apostles.",
      "represent Christ and proclaim the message of reconciliation.",
      "possess political authority."
    ],
    "ans": "represent Christ and proclaim the message of reconciliation.",
    "explanation": "Represent Christ and proclaim the message of reconciliation."
  },
  {
    "q": "According to Colossians, Christ is described as",
    "options": [
      "the greatest prophet only.",
      "the first created being.",
      "the image of the invisible God and the head of the Church.",
      "the last Old Testament priest."
    ],
    "ans": "the image of the invisible God and the head of the Church.",
    "explanation": "The image of the invisible God and the head of the Church."
  },
  {
    "q": "Peter encouraged suffering Christians to",
    "options": [
      "seek revenge against persecutors.",
      "abandon their faith.",
      "rejoice because they share in Christ's sufferings.",
      "flee from every trial."
    ],
    "ans": "rejoice because they share in Christ's sufferings.",
    "explanation": "Rejoice because they share in Christ's sufferings."
  },
  {
    "q": "The main emphasis of Jude's letter is to",
    "options": [
      "explain church administration.",
      "discuss the Second Coming only.",
      "urge believers to contend earnestly for the faith against false teachers.",
      "appoint new apostles."
    ],
    "ans": "urge believers to contend earnestly for the faith against false teachers.",
    "explanation": "Urge believers to contend earnestly for the faith against false teachers."
  },
  {
    "q": "According to Revelation, the \"Alpha and Omega\" refers to",
    "options": [
      "Moses.",
      "John.",
      "Jesus Christ, the eternal beginning and the end.",
      "the Holy Spirit."
    ],
    "ans": "Jesus Christ, the eternal beginning and the end.",
    "explanation": "Jesus Christ, the eternal beginning and the end."
  },
  {
    "q": "Why did Jesus tell Nicodemus that one must be \"born again\"?",
    "options": [
      "To become a Jew.",
      "To begin life a second time physically.",
      "Spiritual rebirth is necessary to enter the Kingdom of God.",
      "To fulfill the Law of Moses."
    ],
    "ans": "Spiritual rebirth is necessary to enter the Kingdom of God.",
    "explanation": "Spiritual rebirth is necessary to enter the Kingdom of God."
  },
  {
    "q": "The Parable of the Good Samaritan teaches that",
    "options": [
      "only relatives deserve kindness.",
      "religious leaders always help others.",
      "true love for one's neighbor is shown through practical compassion.",
      "Samaritans were superior to Jews."
    ],
    "ans": "true love for one's neighbor is shown through practical compassion.",
    "explanation": "True love for one's neighbor is shown through practical compassion."
  },
  {
    "q": "Why did Jesus say, \"I am the Vine, you are the branches\"?",
    "options": [
      "To teach agriculture.",
      "To compare Himself with Moses.",
      "Believers must remain in Him to bear spiritual fruit.",
      "To explain Israel's economy."
    ],
    "ans": "Believers must remain in Him to bear spiritual fruit.",
    "explanation": "Believers must remain in Him to bear spiritual fruit."
  },
  {
    "q": "According to Acts, the Holy Spirit came upon the disciples at Pentecost primarily to",
    "options": [
      "make them wealthy.",
      "appoint them as kings.",
      "empower them to be effective witnesses for Christ.",
      "establish a political kingdom."
    ],
    "ans": "empower them to be effective witnesses for Christ.",
    "explanation": "Empower them to be effective witnesses for Christ."
  },
  {
    "q": "According to 1 Corinthians 13, without love,",
    "options": [
      "faith is impossible.",
      "prayer is ineffective.",
      "even the greatest gifts and sacrifices amount to nothing.",
      "wisdom cannot exist."
    ],
    "ans": "even the greatest gifts and sacrifices amount to nothing.",
    "explanation": "Even the greatest gifts and sacrifices amount to nothing."
  },
  {
    "q": "The principal purpose of Christ's resurrection was to",
    "options": [
      "prove Rome was powerless.",
      "restore Israel's monarchy.",
      "demonstrate His victory over sin and death and guarantee believers' resurrection.",
      "end Jewish worship."
    ],
    "ans": "demonstrate His victory over sin and death and guarantee believers' resurrection.",
    "explanation": "Demonstrate His victory over sin and death and guarantee believers' resurrection."
  },
  {
    "q": "According to Revelation 21, one of the greatest blessings of the new creation is that",
    "options": [
      "there will be no work.",
      "everyone will become an angel.",
      "God will dwell with His people, and there will be no more death, sorrow, or pain.",
      "Jerusalem will rule all nations."
    ],
    "ans": "God will dwell with His people, and there will be no more death, sorrow, or pain.",
    "explanation": "God will dwell with His people, and there will be no more death, sorrow, or pain."
  },
  {
    "q": "Which of the following best summarizes the central message of Christian Religious Knowledge?",
    "options": [
      "Human effort alone leads to righteousness.",
      "Religious rituals are sufficient for salvation.",
      "Material prosperity is God's highest purpose for humanity.",
      "God reveals Himself through Scripture and Jesus Christ, calling humanity to repentance, faith, holy living, love, and eternal fellowship with Him."
    ],
    "ans": "God reveals Himself through Scripture and Jesus Christ, calling humanity to repentance, faith, holy living, love, and eternal fellowship with Him.",
    "explanation": "God reveals Himself through Scripture and Jesus Christ, calling humanity to repentance, faith, holy living, love, and eternal fellowship with Him."
  }
  ],
  "PUTME_LITERATURE": [
  {
    "q": "A major function of literature in society is to",
    "options": [
      "entertain readers alone.",
      "preserve only historical records.",
      "reflect human experiences while educating, entertaining, and criticizing society.",
      "promote political propaganda exclusively."
    ],
    "ans": "reflect human experiences while educating, entertaining, and criticizing society.",
    "explanation": "Reflect human experiences while educating, entertaining, and criticizing society."
  },
  {
    "q": "Which of the following best distinguishes tragedy from comedy?",
    "options": [
      "Tragedy always contains songs, while comedy does not.",
      "Comedy is written only in prose.",
      "Tragedy ends with the downfall of the protagonist, while comedy usually ends happily.",
      "Tragedy is always longer than comedy."
    ],
    "ans": "Tragedy ends with the downfall of the protagonist, while comedy usually ends happily.",
    "explanation": "Tragedy ends with the downfall of the protagonist, while comedy usually ends happily."
  },
  {
    "q": "In literature, the central conflict of a work is the",
    "options": [
      "first event in the plot.",
      "conclusion of the story.",
      "struggle between opposing forces that drives the plot.",
      "setting in which the events occur."
    ],
    "ans": "struggle between opposing forces that drives the plot.",
    "explanation": "Struggle between opposing forces that drives the plot."
  },
  {
    "q": "A character whose personality develops significantly during the course of a story is known as a",
    "options": [
      "flat character.",
      "stock character.",
      "dynamic character.",
      "static character."
    ],
    "ans": "dynamic character.",
    "explanation": "Dynamic character."
  },
  {
    "q": "The statement, \"The wind whispered through the lonely trees,\" illustrates",
    "options": [
      "hyperbole.",
      "irony.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which literary device is employed when a writer intentionally hints at future events?",
    "options": [
      "Flashback.",
      "Foreshadowing.",
      "Satire.",
      "Paradox."
    ],
    "ans": "Foreshadowing.",
    "explanation": "Foreshadowing."
  },
  {
    "q": "The sequence of events in a literary work is known as",
    "options": [
      "atmosphere.",
      "motif.",
      "plot.",
      "diction."
    ],
    "ans": "plot.",
    "explanation": "Plot."
  },
  {
    "q": "In drama, the conversation between two or more characters is called",
    "options": [
      "aside.",
      "monologue.",
      "dialogue.",
      "soliloquy."
    ],
    "ans": "dialogue.",
    "explanation": "Dialogue."
  },
  {
    "q": "A speech delivered by a character alone on stage to reveal inner thoughts is called",
    "options": [
      "dialogue.",
      "aside.",
      "soliloquy.",
      "chorus."
    ],
    "ans": "soliloquy.",
    "explanation": "Soliloquy."
  },
  {
    "q": "The emotional release experienced by the audience at the end of a tragedy is referred to as",
    "options": [
      "suspense.",
      "climax.",
      "catharsis.",
      "denouement."
    ],
    "ans": "catharsis.",
    "explanation": "Catharsis."
  },
  {
    "q": "Which of the following is NOT a feature of tragedy?",
    "options": [
      "Noble protagonist.",
      "Tragic flaw.",
      "Catastrophic ending.",
      "Comic relief as the major objective."
    ],
    "ans": "Comic relief as the major objective.",
    "explanation": "Comic relief as the major objective."
  },
  {
    "q": "A narrative poem that tells a story is known as",
    "options": [
      "lyric.",
      "ballad.",
      "ode.",
      "elegy."
    ],
    "ans": "ballad.",
    "explanation": "Ballad."
  },
  {
    "q": "The repetition of consonant sounds at the end or middle of words is known as",
    "options": [
      "alliteration.",
      "assonance.",
      "consonance.",
      "onomatopoeia."
    ],
    "ans": "consonance.",
    "explanation": "Consonance."
  },
  {
    "q": "Which of the following best defines dramatic irony?",
    "options": [
      "The audience knows less than the characters.",
      "The narrator conceals the truth.",
      "The audience knows more than one or more characters.",
      "The ending contradicts the beginning."
    ],
    "ans": "The audience knows more than one or more characters.",
    "explanation": "The audience knows more than one or more characters."
  },
  {
    "q": "The main purpose of satire is to",
    "options": [
      "praise individuals.",
      "entertain without criticism.",
      "expose and ridicule human or societal weaknesses for correction.",
      "describe historical events accurately."
    ],
    "ans": "expose and ridicule human or societal weaknesses for correction.",
    "explanation": "Expose and ridicule human or societal weaknesses for correction."
  },
  {
    "q": "A poem written to mourn the death of someone is called",
    "options": [
      "sonnet.",
      "ode.",
      "elegy.",
      "epic."
    ],
    "ans": "elegy.",
    "explanation": "Elegy."
  },
  {
    "q": "The turning point in a literary work is known as the",
    "options": [
      "exposition.",
      "resolution.",
      "climax.",
      "prologue."
    ],
    "ans": "climax.",
    "explanation": "Climax."
  },
  {
    "q": "Which of the following is the best example of an oxymoron?",
    "options": [
      "Bitter truth.",
      "Deafening silence.",
      "As brave as a lion.",
      "Endless journey."
    ],
    "ans": "Deafening silence.",
    "explanation": "Deafening silence."
  },
  {
    "q": "In literary criticism, the atmosphere of a work refers to its",
    "options": [
      "grammatical structure.",
      "narrative sequence.",
      "emotional mood created for the reader.",
      "historical background."
    ],
    "ans": "emotional mood created for the reader.",
    "explanation": "Emotional mood created for the reader."
  },
  {
    "q": "The statement, \"The classroom was a zoo,\" is an example of",
    "options": [
      "simile.",
      "euphemism.",
      "metaphor.",
      "irony."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following literary forms is primarily intended for stage performance?",
    "options": [
      "Novel.",
      "Short story.",
      "Drama.",
      "Biography."
    ],
    "ans": "Drama.",
    "explanation": "Drama."
  },
  {
    "q": "A narrator who is also a participant in the story uses the",
    "options": [
      "third-person omniscient point of view.",
      "third-person limited point of view.",
      "first-person point of view.",
      "objective point of view."
    ],
    "ans": "first-person point of view.",
    "explanation": "First-person point of view."
  },
  {
    "q": "In poetry, rhythm is achieved mainly through",
    "options": [
      "punctuation.",
      "paragraphing.",
      "the patterned arrangement of stressed and unstressed syllables.",
      "capitalization."
    ],
    "ans": "the patterned arrangement of stressed and unstressed syllables.",
    "explanation": "The patterned arrangement of stressed and unstressed syllables."
  },
  {
    "q": "A literary work that imitates another work in order to ridicule it is known as",
    "options": [
      "allegory.",
      "fable.",
      "parody.",
      "romance."
    ],
    "ans": "parody.",
    "explanation": "Parody."
  },
  {
    "q": "Which of the following best describes theme in literature?",
    "options": [
      "The sequence of events in a story.",
      "The physical location where the story occurs.",
      "The writer's choice of vocabulary.",
      "The central idea or underlying message conveyed by the work."
    ],
    "ans": "The central idea or underlying message conveyed by the work.",
    "explanation": "The central idea or underlying message conveyed by the work."
  },
  {
    "q": "A character who serves as a contrast to another character in order to highlight particular qualities is called a",
    "options": [
      "protagonist.",
      "antagonist.",
      "foil.",
      "confidant."
    ],
    "ans": "foil.",
    "explanation": "Foil."
  },
  {
    "q": "In a tragedy, the error in judgment or weakness that leads to the downfall of the hero is known as",
    "options": [
      "catharsis.",
      "hubris.",
      "hamartia.",
      "climax."
    ],
    "ans": "hamartia.",
    "explanation": "Hamartia."
  },
  {
    "q": "Which of the following literary devices involves a deliberate exaggeration for emphasis?",
    "options": [
      "Irony.",
      "Euphemism.",
      "Hyperbole.",
      "Metonymy."
    ],
    "ans": "Hyperbole.",
    "explanation": "Hyperbole."
  },
  {
    "q": "The statement, \"He is the black sheep of the family,\" illustrates",
    "options": [
      "irony.",
      "simile.",
      "metaphor.",
      "apostrophe."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "A play that combines serious and humorous elements is best described as",
    "options": [
      "melodrama.",
      "farce.",
      "tragicomedy.",
      "masque."
    ],
    "ans": "tragicomedy.",
    "explanation": "Tragicomedy."
  },
  {
    "q": "Which of the following best defines an anti-climax?",
    "options": [
      "The highest point of suspense.",
      "A disappointing shift from an important event to a trivial one.",
      "The introduction of the main conflict.",
      "The conclusion of a tragedy."
    ],
    "ans": "A disappointing shift from an important event to a trivial one.",
    "explanation": "A disappointing shift from an important event to a trivial one."
  },
  {
    "q": "The use of an object, person, or event to represent a deeper meaning is known as",
    "options": [
      "imagery.",
      "motif.",
      "symbolism.",
      "allusion."
    ],
    "ans": "symbolism.",
    "explanation": "Symbolism."
  },
  {
    "q": "A poem consisting of fourteen lines with a fixed rhyme scheme is called a",
    "options": [
      "ballad.",
      "ode.",
      "sonnet.",
      "epic."
    ],
    "ans": "sonnet.",
    "explanation": "Sonnet."
  },
  {
    "q": "Which of the following is NOT a characteristic of an epic?",
    "options": [
      "Supernatural intervention.",
      "Heroic exploits.",
      "National significance.",
      "Limited setting and few characters."
    ],
    "ans": "Limited setting and few characters.",
    "explanation": "Limited setting and few characters."
  },
  {
    "q": "The expression, \"Time is a thief,\" is an example of",
    "options": [
      "personification.",
      "simile.",
      "metaphor.",
      "paradox."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "The dominant feeling created throughout a literary work is its",
    "options": [
      "diction.",
      "point of view.",
      "mood.",
      "subplot."
    ],
    "ans": "mood.",
    "explanation": "Mood."
  },
  {
    "q": "A narrator who knows the thoughts and feelings of every character is",
    "options": [
      "first-person narrator.",
      "objective narrator.",
      "third-person omniscient narrator.",
      "third-person limited narrator."
    ],
    "ans": "third-person omniscient narrator.",
    "explanation": "Third-person omniscient narrator."
  },
  {
    "q": "Which literary device is used when a part represents the whole?",
    "options": [
      "Metaphor.",
      "Euphemism.",
      "Synecdoche.",
      "Oxymoron."
    ],
    "ans": "Synecdoche.",
    "explanation": "Synecdoche."
  },
  {
    "q": "The phrase, \"The pen is mightier than the sword,\" illustrates",
    "options": [
      "irony.",
      "alliteration.",
      "metonymy.",
      "onomatopoeia."
    ],
    "ans": "metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "In literature, suspense is primarily created to",
    "options": [
      "reduce tension.",
      "keep the reader eager to know what happens next.",
      "reveal the ending immediately.",
      "introduce comic relief."
    ],
    "ans": "keep the reader eager to know what happens next.",
    "explanation": "Keep the reader eager to know what happens next."
  },
  {
    "q": "Which of the following is the best example of dramatic irony?",
    "options": [
      "A reader predicts the ending.",
      "A narrator forgets an event.",
      "The audience knows a disguised character's identity while another character does not.",
      "Two characters misunderstand each other."
    ],
    "ans": "The audience knows a disguised character's identity while another character does not.",
    "explanation": "The audience knows a disguised character's identity while another character does not."
  },
  {
    "q": "A recurring idea, image, or symbol in a literary work is known as",
    "options": [
      "plot.",
      "setting.",
      "motif.",
      "exposition."
    ],
    "ans": "motif.",
    "explanation": "Motif."
  },
  {
    "q": "The expression, \"The stars danced across the sky,\" contains",
    "options": [
      "simile.",
      "metaphor.",
      "personification.",
      "litotes."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "The final resolution of a literary work is called the",
    "options": [
      "exposition.",
      "climax.",
      "denouement.",
      "conflict."
    ],
    "ans": "denouement.",
    "explanation": "Denouement."
  },
  {
    "q": "A literary work that teaches a moral lesson through animals as characters is called a",
    "options": [
      "myth.",
      "legend.",
      "fable.",
      "satire."
    ],
    "ans": "fable.",
    "explanation": "Fable."
  },
  {
    "q": "Which of the following figures of speech contains two contradictory ideas that appear true?",
    "options": [
      "Hyperbole.",
      "Irony.",
      "Paradox.",
      "Euphemism."
    ],
    "ans": "Paradox.",
    "explanation": "Paradox."
  },
  {
    "q": "The phrase, \"The buzzing bees busily buzzed,\" mainly illustrates",
    "options": [
      "consonance.",
      "alliteration.",
      "euphemism.",
      "metaphor."
    ],
    "ans": "alliteration.",
    "explanation": "Alliteration."
  },
  {
    "q": "In drama, instructions given to actors but not spoken aloud are called",
    "options": [
      "prologues.",
      "epilogues.",
      "stage directions.",
      "choruses."
    ],
    "ans": "stage directions.",
    "explanation": "Stage directions."
  },
  {
    "q": "Which of the following best explains the term \"setting\"?",
    "options": [
      "The central conflict of the story.",
      "The writer's attitude toward the subject.",
      "The time, place, and social environment in which the events occur.",
      "The sequence of events in a narrative."
    ],
    "ans": "The time, place, and social environment in which the events occur.",
    "explanation": "The time, place, and social environment in which the events occur."
  },
  {
    "q": "The primary purpose of imagery in literature is to",
    "options": [
      "increase the number of characters.",
      "make the plot more complicated.",
      "provide comic entertainment only.",
      "create vivid sensory impressions that enhance the reader's experience."
    ],
    "ans": "create vivid sensory impressions that enhance the reader's experience.",
    "explanation": "Create vivid sensory impressions that enhance the reader's experience."
  },
  {
    "q": "Which of the following best describes an epilogue in a play?",
    "options": [
      "The first speech before the play begins.",
      "A speech introducing the major characters.",
      "A concluding speech or section that reveals the outcome of the events.",
      "A dialogue between the hero and the villain."
    ],
    "ans": "A concluding speech or section that reveals the outcome of the events.",
    "explanation": "A concluding speech or section that reveals the outcome of the events."
  },
  {
    "q": "In literary criticism, verisimilitude refers to",
    "options": [
      "the beauty of language.",
      "the moral lesson of a story.",
      "the appearance of reality or truthfulness in a literary work.",
      "the use of symbolism."
    ],
    "ans": "the appearance of reality or truthfulness in a literary work.",
    "explanation": "The appearance of reality or truthfulness in a literary work."
  },
  {
    "q": "Which of the following is NOT a characteristic of a flat character?",
    "options": [
      "One-dimensional personality.",
      "Predictable behaviour.",
      "Little or no development.",
      "Undergoes significant psychological change."
    ],
    "ans": "Undergoes significant psychological change.",
    "explanation": "Undergoes significant psychological change."
  },
  {
    "q": "The statement, \"The leaves danced joyfully in the wind,\" contains",
    "options": [
      "hyperbole.",
      "simile.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In drama, an interruption in the chronological order of events to present an earlier incident is called",
    "options": [
      "foreshadowing.",
      "suspense.",
      "flashback.",
      "denouement."
    ],
    "ans": "flashback.",
    "explanation": "Flashback."
  },
  {
    "q": "Which of the following literary devices appeals primarily to the sense of hearing?",
    "options": [
      "Visual imagery.",
      "Auditory imagery.",
      "Tactile imagery.",
      "Gustatory imagery."
    ],
    "ans": "Auditory imagery.",
    "explanation": "Auditory imagery."
  },
  {
    "q": "The expression, \"He fought like a lion,\" is an example of",
    "options": [
      "metaphor.",
      "simile.",
      "irony.",
      "apostrophe."
    ],
    "ans": "simile.",
    "explanation": "Simile."
  },
  {
    "q": "Which of the following is a major feature of Romantic poetry?",
    "options": [
      "Scientific experiments.",
      "Political speeches.",
      "Emphasis on imagination and nature.",
      "Industrial development."
    ],
    "ans": "Emphasis on imagination and nature.",
    "explanation": "Emphasis on imagination and nature."
  },
  {
    "q": "In literature, the antagonist is the character who",
    "options": [
      "narrates the story.",
      "assists the protagonist.",
      "opposes the protagonist.",
      "provides comic relief."
    ],
    "ans": "opposes the protagonist.",
    "explanation": "Opposes the protagonist."
  },
  {
    "q": "A literary work that ridicules human foolishness through humour is best described as",
    "options": [
      "parody.",
      "allegory.",
      "satire.",
      "romance."
    ],
    "ans": "satire.",
    "explanation": "Satire."
  },
  {
    "q": "Which of the following is the principal function of a chorus in classical drama?",
    "options": [
      "To fight the hero.",
      "To replace the narrator.",
      "To comment on the action and guide the audience's interpretation.",
      "To introduce comic relief only."
    ],
    "ans": "To comment on the action and guide the audience's interpretation.",
    "explanation": "To comment on the action and guide the audience's interpretation."
  },
  {
    "q": "The statement, \"The city never sleeps,\" illustrates",
    "options": [
      "synecdoche.",
      "paradox.",
      "personification.",
      "understatement."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best defines diction?",
    "options": [
      "The order of events.",
      "The physical setting.",
      "The writer's choice and use of words.",
      "The writer's biography."
    ],
    "ans": "The writer's choice and use of words.",
    "explanation": "The writer's choice and use of words."
  },
  {
    "q": "A story with two parallel plots is said to contain",
    "options": [
      "exposition.",
      "conflict.",
      "a subplot.",
      "an aside."
    ],
    "ans": "a subplot.",
    "explanation": "A subplot."
  },
  {
    "q": "The expression, \"His heart is made of stone,\" suggests",
    "options": [
      "literal hardness.",
      "emotional coldness or lack of compassion.",
      "physical strength.",
      "courage in battle."
    ],
    "ans": "emotional coldness or lack of compassion.",
    "explanation": "Emotional coldness or lack of compassion."
  },
  {
    "q": "Which of the following literary devices involves a reference to a well-known person, place, event, or work?",
    "options": [
      "Symbolism.",
      "Metaphor.",
      "Allusion.",
      "Euphemism."
    ],
    "ans": "Allusion.",
    "explanation": "Allusion."
  },
  {
    "q": "The climax of a literary work is the point where",
    "options": [
      "the setting is introduced.",
      "the main character is described.",
      "the conflict reaches its highest intensity.",
      "the story comes to an end."
    ],
    "ans": "the conflict reaches its highest intensity.",
    "explanation": "The conflict reaches its highest intensity."
  },
  {
    "q": "In poetry, a stanza is",
    "options": [
      "the title of the poem.",
      "the rhythm of the poem.",
      "a group of related lines forming a unit.",
      "the rhyme scheme."
    ],
    "ans": "a group of related lines forming a unit.",
    "explanation": "A group of related lines forming a unit."
  },
  {
    "q": "Which of the following is an example of verbal irony?",
    "options": [
      "A firefighter fears fire.",
      "Saying \"What lovely weather!\" during a heavy storm.",
      "A character unknowingly walks into danger.",
      "A poor man becomes rich."
    ],
    "ans": "Saying \"What lovely weather!\" during a heavy storm.",
    "explanation": "Saying \"What lovely weather!\" during a heavy storm."
  },
  {
    "q": "The primary function of foreshadowing is to",
    "options": [
      "explain previous events.",
      "prepare readers for future developments in the story.",
      "introduce comic scenes.",
      "describe the setting."
    ],
    "ans": "prepare readers for future developments in the story.",
    "explanation": "Prepare readers for future developments in the story."
  },
  {
    "q": "Which of the following best describes an elegy?",
    "options": [
      "A humorous poem.",
      "A narrative poem.",
      "A poem expressing sorrow for the dead.",
      "A poem celebrating victory."
    ],
    "ans": "A poem expressing sorrow for the dead.",
    "explanation": "A poem expressing sorrow for the dead."
  },
  {
    "q": "The use of the phrase \"sweet sorrow\" is an example of",
    "options": [
      "paradox.",
      "oxymoron.",
      "hyperbole.",
      "euphemism."
    ],
    "ans": "oxymoron.",
    "explanation": "Oxymoron."
  },
  {
    "q": "A character who remains essentially unchanged throughout a literary work is known as a",
    "options": [
      "dynamic character.",
      "round character.",
      "static character.",
      "tragic hero."
    ],
    "ans": "static character.",
    "explanation": "Static character."
  },
  {
    "q": "Which of the following best explains dramatic tension?",
    "options": [
      "The beauty of dramatic language.",
      "The arrangement of scenes.",
      "The uncertainty and emotional strain created by unresolved conflict.",
      "The use of stage directions."
    ],
    "ans": "The uncertainty and emotional strain created by unresolved conflict.",
    "explanation": "The uncertainty and emotional strain created by unresolved conflict."
  },
  {
    "q": "Which of the following statements about theme is most accurate?",
    "options": [
      "A literary work can have only one theme.",
      "Theme is always stated directly by the author.",
      "Theme is the same as the plot summary.",
      "Theme is the underlying idea or message that emerges through the events and characters of the work."
    ],
    "ans": "Theme is the underlying idea or message that emerges through the events and characters of the work.",
    "explanation": "Theme is the underlying idea or message that emerges through the events and characters of the work."
  },
  {
    "q": "A character who possesses both admirable qualities and significant weaknesses is best described as a",
    "options": [
      "stock character.",
      "flat character.",
      "round character.",
      "static character."
    ],
    "ans": "round character.",
    "explanation": "Round character."
  },
  {
    "q": "Which of the following best explains the term denotation?",
    "options": [
      "The emotional meaning attached to a word.",
      "The literal or dictionary meaning of a word.",
      "The symbolic meaning of a word.",
      "The historical origin of a word."
    ],
    "ans": "The literal or dictionary meaning of a word.",
    "explanation": "The literal or dictionary meaning of a word."
  },
  {
    "q": "The emotional associations suggested by a word rather than its literal meaning constitute its",
    "options": [
      "diction.",
      "connotation.",
      "imagery.",
      "syntax."
    ],
    "ans": "connotation.",
    "explanation": "Connotation."
  },
  {
    "q": "Which of the following literary devices is illustrated in the expression \"The White House announced...\"?",
    "options": [
      "Synecdoche.",
      "Metonymy.",
      "Hyperbole.",
      "Allegory."
    ],
    "ans": "Metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "A literary work in which characters, events, and settings represent abstract ideas is known as",
    "options": [
      "satire.",
      "parody.",
      "allegory.",
      "romance."
    ],
    "ans": "allegory.",
    "explanation": "Allegory."
  },
  {
    "q": "Which of the following is NOT an essential element of drama?",
    "options": [
      "Dialogue.",
      "Conflict.",
      "Action.",
      "Narration."
    ],
    "ans": "Narration.",
    "explanation": "Narration."
  },
  {
    "q": "In dramatic performance, an aside is",
    "options": [
      "a speech delivered to the audience after the play.",
      "a remark intended for the audience but unheard by other characters on stage.",
      "a speech delivered by the chorus.",
      "a conversation between two characters."
    ],
    "ans": "a remark intended for the audience but unheard by other characters on stage.",
    "explanation": "A remark intended for the audience but unheard by other characters on stage."
  },
  {
    "q": "The statement, \"The crown will address the nation tonight,\" illustrates",
    "options": [
      "symbolism.",
      "synecdoche.",
      "metonymy.",
      "irony."
    ],
    "ans": "metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "Which of the following is the best example of situational irony?",
    "options": [
      "A character speaks to the audience privately.",
      "The audience knows the villain's identity before the hero.",
      "A fire station burns down unexpectedly.",
      "A poet exaggerates an event."
    ],
    "ans": "A fire station burns down unexpectedly.",
    "explanation": "A fire station burns down unexpectedly."
  },
  {
    "q": "The opening section of a literary work where background information is provided is known as",
    "options": [
      "climax.",
      "resolution.",
      "exposition.",
      "denouement."
    ],
    "ans": "exposition.",
    "explanation": "Exposition."
  },
  {
    "q": "In poetry, the pattern of stressed and unstressed syllables is known as",
    "options": [
      "stanza.",
      "rhyme.",
      "metre.",
      "refrain."
    ],
    "ans": "metre.",
    "explanation": "Metre."
  },
  {
    "q": "Which of the following best describes a refrain?",
    "options": [
      "The first line of a poem.",
      "The final stanza of a poem.",
      "A line or group of lines repeated at intervals in a poem.",
      "The title of a poem."
    ],
    "ans": "A line or group of lines repeated at intervals in a poem.",
    "explanation": "A line or group of lines repeated at intervals in a poem."
  },
  {
    "q": "A literary work that ridicules a particular author's style by imitation is called",
    "options": [
      "satire.",
      "allegory.",
      "parody.",
      "elegy."
    ],
    "ans": "parody.",
    "explanation": "Parody."
  },
  {
    "q": "The phrase \"The buzzing of bees\" is an example of",
    "options": [
      "alliteration.",
      "consonance.",
      "onomatopoeia.",
      "assonance."
    ],
    "ans": "onomatopoeia.",
    "explanation": "Onomatopoeia."
  },
  {
    "q": "Which of the following best explains the purpose of a prologue?",
    "options": [
      "To conclude the play.",
      "To resolve the conflict.",
      "To introduce the audience to the background of the story.",
      "To praise the main character."
    ],
    "ans": "To introduce the audience to the background of the story.",
    "explanation": "To introduce the audience to the background of the story."
  },
  {
    "q": "In literature, pathos refers to",
    "options": [
      "comic entertainment.",
      "logical reasoning.",
      "the evocation of pity or deep emotion.",
      "exaggerated humour."
    ],
    "ans": "the evocation of pity or deep emotion.",
    "explanation": "The evocation of pity or deep emotion."
  },
  {
    "q": "The expression \"He has a heart of gold\" is an example of",
    "options": [
      "irony.",
      "simile.",
      "metaphor.",
      "euphemism."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following is NOT a feature of an effective plot?",
    "options": [
      "Unity.",
      "Causality.",
      "Suspense.",
      "Random sequence of unrelated events."
    ],
    "ans": "Random sequence of unrelated events.",
    "explanation": "Random sequence of unrelated events."
  },
  {
    "q": "In a novel, the person through whose eyes the story is mainly told is called the",
    "options": [
      "antagonist.",
      "protagonist.",
      "narrator.",
      "foil."
    ],
    "ans": "narrator.",
    "explanation": "Narrator."
  },
  {
    "q": "The repetition of vowel sounds in nearby words is known as",
    "options": [
      "consonance.",
      "alliteration.",
      "assonance.",
      "onomatopoeia."
    ],
    "ans": "assonance.",
    "explanation": "Assonance."
  },
  {
    "q": "Which of the following best defines a stock character?",
    "options": [
      "A character who changes throughout the story.",
      "A stereotyped character recognized by predictable traits.",
      "A character who narrates the story.",
      "A tragic hero."
    ],
    "ans": "A stereotyped character recognized by predictable traits.",
    "explanation": "A stereotyped character recognized by predictable traits."
  },
  {
    "q": "The literary device in which an inanimate object represents an abstract concept is known as",
    "options": [
      "allusion.",
      "irony.",
      "symbolism.",
      "understatement."
    ],
    "ans": "symbolism.",
    "explanation": "Symbolism."
  },
  {
    "q": "Which of the following best describes comic relief?",
    "options": [
      "The conclusion of a comedy.",
      "The beginning of a tragic play.",
      "A humorous scene introduced to reduce tension in a serious work.",
      "The punishment of the villain."
    ],
    "ans": "A humorous scene introduced to reduce tension in a serious work.",
    "explanation": "A humorous scene introduced to reduce tension in a serious work."
  },
  {
    "q": "The chief purpose of characterization in literature is to",
    "options": [
      "lengthen the story.",
      "increase the number of scenes.",
      "reveal the personalities, motives, and development of characters.",
      "describe only the physical appearance of characters."
    ],
    "ans": "reveal the personalities, motives, and development of characters.",
    "explanation": "Reveal the personalities, motives, and development of characters."
  },
  {
    "q": "Which of the following best distinguishes literature from ordinary writing?",
    "options": [
      "It is always fictional.",
      "It always follows historical facts.",
      "It is written only in verse.",
      "It makes imaginative and artistic use of language to communicate human experience and ideas."
    ],
    "ans": "It makes imaginative and artistic use of language to communicate human experience and ideas.",
    "explanation": "It makes imaginative and artistic use of language to communicate human experience and ideas."
  },
  {
    "q": "The narrator who reports only observable actions and speech without revealing the thoughts of characters is known as",
    "options": [
      "first-person narrator.",
      "third-person omniscient narrator.",
      "objective narrator.",
      "third-person limited narrator."
    ],
    "ans": "objective narrator.",
    "explanation": "Objective narrator."
  },
  {
    "q": "In literature, a conflict between a character and his conscience is classified as",
    "options": [
      "man versus society.",
      "man versus nature.",
      "man versus self.",
      "man versus man."
    ],
    "ans": "man versus self.",
    "explanation": "Man versus self."
  },
  {
    "q": "Which of the following best defines an archetype?",
    "options": [
      "A humorous character in a play.",
      "A poem with no rhyme.",
      "A universal symbol, character, or pattern that recurs across literary works.",
      "A speech delivered by the protagonist."
    ],
    "ans": "A universal symbol, character, or pattern that recurs across literary works.",
    "explanation": "A universal symbol, character, or pattern that recurs across literary works."
  },
  {
    "q": "The statement, \"The sun smiled upon the village,\" illustrates",
    "options": [
      "hyperbole.",
      "simile.",
      "personification.",
      "paradox."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following literary forms is usually written in prose and is longer than a novella?",
    "options": [
      "Fable.",
      "Short story.",
      "Novel.",
      "Ballad."
    ],
    "ans": "Novel.",
    "explanation": "Novel."
  },
  {
    "q": "A poem that celebrates or praises a person, object, or event is called",
    "options": [
      "elegy.",
      "sonnet.",
      "ode.",
      "epic."
    ],
    "ans": "ode.",
    "explanation": "Ode."
  },
  {
    "q": "Which of the following is the primary function of conflict in literature?",
    "options": [
      "To introduce the setting.",
      "To increase the number of characters.",
      "To generate tension and move the plot forward.",
      "To explain the author's biography."
    ],
    "ans": "To generate tension and move the plot forward.",
    "explanation": "To generate tension and move the plot forward."
  },
  {
    "q": "The literary device in which contradictory terms appear together is",
    "options": [
      "paradox.",
      "oxymoron.",
      "irony.",
      "euphemism."
    ],
    "ans": "oxymoron.",
    "explanation": "Oxymoron."
  },
  {
    "q": "The expression \"The classroom erupted in laughter\" contains",
    "options": [
      "simile.",
      "alliteration.",
      "hyperbole.",
      "apostrophe."
    ],
    "ans": "hyperbole.",
    "explanation": "Hyperbole."
  },
  {
    "q": "Which of the following best describes suspense?",
    "options": [
      "The explanation of previous events.",
      "The conclusion of a story.",
      "The uncertainty that keeps readers eager to know what happens next.",
      "The emotional atmosphere of a poem."
    ],
    "ans": "The uncertainty that keeps readers eager to know what happens next.",
    "explanation": "The uncertainty that keeps readers eager to know what happens next."
  },
  {
    "q": "In drama, the division of a major section of a play is known as",
    "options": [
      "stanza.",
      "episode.",
      "act.",
      "refrain."
    ],
    "ans": "act.",
    "explanation": "Act."
  },
  {
    "q": "Which of the following is the most important feature of a tragic hero?",
    "options": [
      "He must always be a king.",
      "He must always die in battle.",
      "He possesses a tragic flaw that contributes to his downfall.",
      "He never makes mistakes."
    ],
    "ans": "He possesses a tragic flaw that contributes to his downfall.",
    "explanation": "He possesses a tragic flaw that contributes to his downfall."
  },
  {
    "q": "The phrase \"The kettle is boiling\" is an example of",
    "options": [
      "paradox.",
      "symbolism.",
      "metonymy.",
      "irony."
    ],
    "ans": "metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "Which of the following best explains the term tone?",
    "options": [
      "The sequence of events in a story.",
      "The location where events occur.",
      "The writer's attitude toward the subject or audience.",
      "The emotional state of the protagonist."
    ],
    "ans": "The writer's attitude toward the subject or audience.",
    "explanation": "The writer's attitude toward the subject or audience."
  },
  {
    "q": "The repeated use of the same consonant sound at the beginning of nearby words is",
    "options": [
      "consonance.",
      "assonance.",
      "alliteration.",
      "euphony."
    ],
    "ans": "alliteration.",
    "explanation": "Alliteration."
  },
  {
    "q": "Which of the following is NOT a type of conflict commonly found in literature?",
    "options": [
      "Man versus self.",
      "Man versus society.",
      "Man versus nature.",
      "Man versus narrator."
    ],
    "ans": "Man versus narrator.",
    "explanation": "Man versus narrator."
  },
  {
    "q": "The literary device in which an absent person or abstract idea is directly addressed is known as",
    "options": [
      "aside.",
      "soliloquy.",
      "apostrophe.",
      "allegory."
    ],
    "ans": "apostrophe.",
    "explanation": "Apostrophe."
  },
  {
    "q": "The statement, \"Justice is blind,\" is an example of",
    "options": [
      "irony.",
      "euphemism.",
      "personification.",
      "synecdoche."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best defines theme?",
    "options": [
      "The sequence of actions.",
      "The climax of the story.",
      "The central idea explored through the events and characters.",
      "The writer's vocabulary."
    ],
    "ans": "The central idea explored through the events and characters.",
    "explanation": "The central idea explored through the events and characters."
  },
  {
    "q": "The final outcome of a conflict in a literary work is known as the",
    "options": [
      "exposition.",
      "complication.",
      "resolution.",
      "climax."
    ],
    "ans": "resolution.",
    "explanation": "Resolution."
  },
  {
    "q": "Which of the following best distinguishes a novella from a novel?",
    "options": [
      "A novella contains only dialogue.",
      "A novella is written in verse.",
      "A novella is generally shorter and less complex than a novel.",
      "A novella has no plot."
    ],
    "ans": "A novella is generally shorter and less complex than a novel.",
    "explanation": "A novella is generally shorter and less complex than a novel."
  },
  {
    "q": "The expression \"The wind howled angrily through the night\" mainly illustrates",
    "options": [
      "metaphor.",
      "irony.",
      "personification.",
      "litotes."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following is the primary purpose of symbolism in literature?",
    "options": [
      "To make stories longer.",
      "To entertain children.",
      "To give deeper meaning beyond the literal level.",
      "To simplify difficult ideas."
    ],
    "ans": "To give deeper meaning beyond the literal level.",
    "explanation": "To give deeper meaning beyond the literal level."
  },
  {
    "q": "A character who opposes the values or goals of the protagonist is called the",
    "options": [
      "narrator.",
      "confidant.",
      "antagonist.",
      "foil."
    ],
    "ans": "antagonist.",
    "explanation": "Antagonist."
  },
  {
    "q": "Which of the following best explains why literature remains relevant across generations?",
    "options": [
      "It records only historical facts.",
      "It avoids controversial issues.",
      "It presents imaginary worlds without practical value.",
      "It explores universal human experiences, values, and conflicts that remain meaningful over time"
    ],
    "ans": "It explores universal human experiences, values, and conflicts that remain meaningful over time",
    "explanation": "It explores universal human experiences, values, and conflicts that remain meaningful over time."
  },
  {
    "q": "A character who reveals the thoughts, qualities, or weaknesses of another character by contrast is known as",
    "options": [
      "confidant.",
      "protagonist.",
      "foil.",
      "narrator."
    ],
    "ans": "foil.",
    "explanation": "Foil."
  },
  {
    "q": "Which of the following best explains comic relief in a tragedy?",
    "options": [
      "It changes the tragedy into a comedy.",
      "It introduces the climax of the play.",
      "It provides humorous scenes that temporarily reduce emotional tension.",
      "It concludes the tragic action."
    ],
    "ans": "It provides humorous scenes that temporarily reduce emotional tension.",
    "explanation": "It provides humorous scenes that temporarily reduce emotional tension."
  },
  {
    "q": "The phrase \"The ship ploughed through the sea\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "irony.",
      "paradox."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following is NOT an essential feature of a novel?",
    "options": [
      "Plot.",
      "Characterization.",
      "Setting.",
      "Stage directions."
    ],
    "ans": "Stage directions.",
    "explanation": "Stage directions."
  },
  {
    "q": "In literary criticism, verbal irony occurs when",
    "options": [
      "a character behaves unexpectedly.",
      "the speaker says something but intends the opposite meaning.",
      "the audience knows more than the characters.",
      "events produce an unexpected result."
    ],
    "ans": "the speaker says something but intends the opposite meaning.",
    "explanation": "The speaker says something but intends the opposite meaning."
  },
  {
    "q": "Which of the following best defines an epic?",
    "options": [
      "A short humorous poem.",
      "A poem mourning the dead.",
      "A long narrative poem celebrating the heroic deeds of a legendary figure.",
      "A dramatic performance accompanied by music."
    ],
    "ans": "A long narrative poem celebrating the heroic deeds of a legendary figure.",
    "explanation": "A long narrative poem celebrating the heroic deeds of a legendary figure."
  },
  {
    "q": "The expression \"The streets swallowed the crowd\" contains",
    "options": [
      "hyperbole.",
      "symbolism.",
      "personification.",
      "understatement."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In a literary work, the sequence exposition → rising action → climax → falling action → resolution refers to the",
    "options": [
      "narrative voice.",
      "characterization.",
      "plot structure.",
      "dramatic irony."
    ],
    "ans": "plot structure.",
    "explanation": "Plot structure."
  },
  {
    "q": "Which of the following best describes euphony?",
    "options": [
      "The repetition of harsh consonant sounds.",
      "The use of contradictory expressions.",
      "The use of pleasant, harmonious sounds in language.",
      "The omission of conjunctions."
    ],
    "ans": "The use of pleasant, harmonious sounds in language.",
    "explanation": "The use of pleasant, harmonious sounds in language."
  },
  {
    "q": "The chief purpose of flashback in a narrative is to",
    "options": [
      "create humour.",
      "conclude the story.",
      "reveal important past events that explain the present action.",
      "increase suspense by delaying the climax."
    ],
    "ans": "reveal important past events that explain the present action.",
    "explanation": "Reveal important past events that explain the present action."
  },
  {
    "q": "The statement \"Success has many fathers, but failure is an orphan\" illustrates",
    "options": [
      "simile.",
      "hyperbole.",
      "personification.",
      "litotes."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "A character who remains unchanged despite major events in the story is",
    "options": [
      "dynamic.",
      "round.",
      "static.",
      "tragic."
    ],
    "ans": "static.",
    "explanation": "Static."
  },
  {
    "q": "Which of the following literary devices involves giving human qualities to animals or objects?",
    "options": [
      "Apostrophe.",
      "Hyperbole.",
      "Personification.",
      "Oxymoron."
    ],
    "ans": "Personification.",
    "explanation": "Personification."
  },
  {
    "q": "The major purpose of a subplot is to",
    "options": [
      "replace the main plot.",
      "complement and enrich the main plot.",
      "confuse the audience.",
      "eliminate the conflict."
    ],
    "ans": "complement and enrich the main plot.",
    "explanation": "Complement and enrich the main plot."
  },
  {
    "q": "Which of the following is the best example of situational irony?",
    "options": [
      "A character speaks directly to the audience.",
      "A king disguises himself as a servant.",
      "A doctor becomes seriously ill from a preventable disease.",
      "A narrator predicts future events."
    ],
    "ans": "A doctor becomes seriously ill from a preventable disease.",
    "explanation": "A doctor becomes seriously ill from a preventable disease."
  },
  {
    "q": "The phrase \"The world is a stage\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "euphemism.",
      "irony."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following best explains the function of imagery in poetry?",
    "options": [
      "To increase the number of stanzas.",
      "To establish the rhyme scheme.",
      "To create vivid mental pictures and sensory experiences.",
      "To explain the poet's biography."
    ],
    "ans": "To create vivid mental pictures and sensory experiences.",
    "explanation": "To create vivid mental pictures and sensory experiences."
  },
  {
    "q": "In drama, the person against whom the protagonist struggles is the",
    "options": [
      "narrator.",
      "confidant.",
      "antagonist.",
      "chorus."
    ],
    "ans": "antagonist.",
    "explanation": "Antagonist."
  },
  {
    "q": "Which of the following is most closely associated with lyric poetry?",
    "options": [
      "Heroic adventures.",
      "National history.",
      "Personal emotions and feelings.",
      "Political campaigns."
    ],
    "ans": "Personal emotions and feelings.",
    "explanation": "Personal emotions and feelings."
  },
  {
    "q": "The literary device in which an object or event stands for a broader idea is",
    "options": [
      "metonymy.",
      "synecdoche.",
      "symbolism.",
      "paradox."
    ],
    "ans": "symbolism.",
    "explanation": "Symbolism."
  },
  {
    "q": "Which of the following is NOT a characteristic of a ballad?",
    "options": [
      "It tells a story.",
      "It often has dialogue.",
      "It is usually meant to be sung.",
      "It is always written in blank verse."
    ],
    "ans": "It is always written in blank verse.",
    "explanation": "It is always written in blank verse."
  },
  {
    "q": "The phrase \"The stars winked at us\" illustrates",
    "options": [
      "allusion.",
      "hyperbole.",
      "personification.",
      "satire."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In literary appreciation, suspension of disbelief means",
    "options": [
      "rejecting unrealistic events.",
      "believing every story is factual.",
      "temporarily accepting fictional events as believable while reading.",
      "ignoring the author's message."
    ],
    "ans": "temporarily accepting fictional events as believable while reading.",
    "explanation": "Temporarily accepting fictional events as believable while reading."
  },
  {
    "q": "The chief function of the resolution in a literary work is to",
    "options": [
      "introduce the characters.",
      "develop suspense.",
      "bring the major conflicts to a conclusion.",
      "establish the setting."
    ],
    "ans": "bring the major conflicts to a conclusion.",
    "explanation": "Bring the major conflicts to a conclusion."
  },
  {
    "q": "Which of the following statements about literature is most accurate?",
    "options": [
      "Literature deals only with imaginary events.",
      "Literature must always teach a moral lesson.",
      "Literature is valuable only when it reflects historical facts.",
      "Literature uses artistic language to explore human experiences, values, conflicts, and ideas in ways that remain meaningful across different cultures and generations."
    ],
    "ans": "Literature uses artistic language to explore human experiences, values, conflicts, and ideas in ways that remain meaningful across different cultures and generations.",
    "explanation": "Literature uses artistic language to explore human experiences, values, conflicts, and ideas in ways that remain meaningful across different cultures and generations."
  },
  {
    "q": "Which of the following best explains the term blank verse?",
    "options": [
      "Poetry without rhythm.",
      "Poetry without meaning.",
      "Unrhymed poetry written in regular metrical lines, usually iambic pentameter.",
      "Poetry written entirely in prose."
    ],
    "ans": "Unrhymed poetry written in regular metrical lines, usually iambic pentameter.",
    "explanation": "Unrhymed poetry written in regular metrical lines, usually iambic pentameter."
  },
  {
    "q": "The statement \"Death laid his icy hands upon him\" illustrates",
    "options": [
      "apostrophe.",
      "simile.",
      "personification.",
      "irony."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following is the principal function of dialogue in a novel?",
    "options": [
      "To replace narration completely.",
      "To introduce the setting only.",
      "To reveal character, advance the plot, and develop conflict.",
      "To provide comic relief only."
    ],
    "ans": "To reveal character, advance the plot, and develop conflict.",
    "explanation": "To reveal character, advance the plot, and develop conflict."
  },
  {
    "q": "A literary work that presents animals with human qualities primarily to teach moral lessons is known as",
    "options": [
      "an epic.",
      "a romance.",
      "a fable.",
      "a parody."
    ],
    "ans": "a fable.",
    "explanation": "A fable."
  },
  {
    "q": "Which of the following best distinguishes setting from atmosphere?",
    "options": [
      "Setting is imaginary while atmosphere is real.",
      "Atmosphere refers only to weather conditions.",
      "Setting refers to time and place, while atmosphere refers to the emotional feeling created by the work.",
      "Setting is more important than atmosphere."
    ],
    "ans": "Setting refers to time and place, while atmosphere refers to the emotional feeling created by the work.",
    "explanation": "Setting refers to time and place, while atmosphere refers to the emotional feeling created by the work."
  },
  {
    "q": "The literary device in which an author hints at future events is",
    "options": [
      "flashback.",
      "climax.",
      "foreshadowing.",
      "satire."
    ],
    "ans": "foreshadowing.",
    "explanation": "Foreshadowing."
  },
  {
    "q": "Which of the following best defines understatement?",
    "options": [
      "A deliberate exaggeration for emphasis.",
      "A deliberate presentation of something as less important than it actually is.",
      "A humorous imitation of another work.",
      "A contradictory statement."
    ],
    "ans": "A deliberate presentation of something as less important than it actually is.",
    "explanation": "A deliberate presentation of something as less important than it actually is."
  },
  {
    "q": "The phrase \"The classroom was so quiet that you could hear a pin drop\" illustrates",
    "options": [
      "metaphor.",
      "irony.",
      "hyperbole.",
      "litotes."
    ],
    "ans": "hyperbole.",
    "explanation": "Hyperbole."
  },
  {
    "q": "In literature, a motif is",
    "options": [
      "the writer's opinion.",
      "the climax of a story.",
      "a recurring image, idea, symbol, or situation that supports the theme.",
      "the title of a literary work."
    ],
    "ans": "a recurring image, idea, symbol, or situation that supports the theme.",
    "explanation": "A recurring image, idea, symbol, or situation that supports the theme."
  },
  {
    "q": "Which of the following is NOT a feature of a round character?",
    "options": [
      "Complex personality.",
      "Realistic behaviour.",
      "Multiple traits.",
      "One-dimensional characterization."
    ],
    "ans": "One-dimensional characterization.",
    "explanation": "One-dimensional characterization."
  },
  {
    "q": "The phrase \"He was as stubborn as a mule\" is an example of",
    "options": [
      "metaphor.",
      "simile.",
      "irony.",
      "euphemism."
    ],
    "ans": "simile.",
    "explanation": "Simile."
  },
  {
    "q": "In dramatic performance, the written instructions concerning movements, gestures, and scenery are known as",
    "options": [
      "acts.",
      "scenes.",
      "stage directions.",
      "dialogues."
    ],
    "ans": "stage directions.",
    "explanation": "Stage directions."
  },
  {
    "q": "Which of the following literary devices is illustrated by the statement \"The skies wept all night\"?",
    "options": [
      "alliteration.",
      "apostrophe.",
      "personification.",
      "metonymy."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "The chief purpose of characterization is to",
    "options": [
      "decorate the language of a story.",
      "introduce comic scenes.",
      "reveal the personalities, motives, relationships, and growth of characters.",
      "determine the setting."
    ],
    "ans": "reveal the personalities, motives, relationships, and growth of characters.",
    "explanation": "Reveal the personalities, motives, relationships, and growth of characters."
  },
  {
    "q": "Which of the following best describes an aside?",
    "options": [
      "A speech delivered after the play.",
      "A long speech by one character alone.",
      "A brief remark intended for the audience but unheard by other characters on stage.",
      "A conversation among several characters."
    ],
    "ans": "A brief remark intended for the audience but unheard by other characters on stage.",
    "explanation": "A brief remark intended for the audience but unheard by other characters on stage."
  },
  {
    "q": "The use of \"bread\" to represent food generally is an example of",
    "options": [
      "metaphor.",
      "metonymy.",
      "synecdoche.",
      "irony."
    ],
    "ans": "metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "Which of the following best defines theme?",
    "options": [
      "The author's biography.",
      "The sequence of events.",
      "The central idea or insight explored throughout a literary work.",
      "The emotional mood of a poem."
    ],
    "ans": "The central idea or insight explored throughout a literary work.",
    "explanation": "The central idea or insight explored throughout a literary work."
  },
  {
    "q": "A poem that expresses deep personal emotions is most likely to be",
    "options": [
      "an epic.",
      "a ballad.",
      "a lyric.",
      "a mock epic."
    ],
    "ans": "a lyric.",
    "explanation": "A lyric."
  },
  {
    "q": "Which of the following is the most important characteristic of satire?",
    "options": [
      "It praises human virtues.",
      "It focuses mainly on romance.",
      "It exposes human or societal faults through wit, irony, or ridicule.",
      "It narrates heroic adventures."
    ],
    "ans": "It exposes human or societal faults through wit, irony, or ridicule.",
    "explanation": "It exposes human or societal faults through wit, irony, or ridicule."
  },
  {
    "q": "The statement \"Silence is sometimes the loudest answer\" is an example of",
    "options": [
      "hyperbole.",
      "paradox.",
      "simile.",
      "metonymy."
    ],
    "ans": "paradox.",
    "explanation": "Paradox."
  },
  {
    "q": "The emotional atmosphere created by a literary work is known as its",
    "options": [
      "diction.",
      "plot.",
      "mood.",
      "syntax."
    ],
    "ans": "mood.",
    "explanation": "Mood."
  },
  {
    "q": "Which of the following best explains the function of conflict in literature?",
    "options": [
      "It provides stage directions.",
      "It introduces literary devices.",
      "It creates tension that drives the development of the plot.",
      "It replaces characterization."
    ],
    "ans": "It creates tension that drives the development of the plot.",
    "explanation": "It creates tension that drives the development of the plot."
  },
  {
    "q": "Which of the following is an example of auditory imagery?",
    "options": [
      "The golden sunset spread across the hills.",
      "The rough bark scratched his hands.",
      "The thunder roared across the valley.",
      "The sweet aroma filled the kitchen."
    ],
    "ans": "The thunder roared across the valley.",
    "explanation": "The thunder roared across the valley."
  },
  {
    "q": "In literature, denouement refers to",
    "options": [
      "the introduction of the setting.",
      "the highest point of suspense.",
      "the final unraveling and resolution of the plot after the climax.",
      "the tragic flaw of the protagonist."
    ],
    "ans": "the final unraveling and resolution of the plot after the climax.",
    "explanation": "The final unraveling and resolution of the plot after the climax."
  },
  {
    "q": "Which of the following statements is most accurate about effective literature?",
    "options": [
      "It depends mainly on difficult vocabulary.",
      "It avoids conflict and controversy.",
      "It is valuable only when it is historically accurate.",
      "It combines artistic expression with meaningful exploration of human life, making it relevant across cultures and generations."
    ],
    "ans": "It combines artistic expression with meaningful exploration of human life, making it relevant across cultures and generations.",
    "explanation": "It combines artistic expression with meaningful exploration of human life, making it relevant across cultures and generations."
  },
  {
    "q": "The literary technique in which the end of a story returns to ideas or events introduced at the beginning is known as",
    "options": [
      "flashback.",
      "foreshadowing.",
      "circular structure.",
      "episodic narration."
    ],
    "ans": "circular structure.",
    "explanation": "Circular structure."
  },
  {
    "q": "A tragedy evokes pity and fear primarily in order to",
    "options": [
      "entertain the audience.",
      "glorify the tragic hero.",
      "produce catharsis in the audience.",
      "encourage political reform."
    ],
    "ans": "produce catharsis in the audience.",
    "explanation": "Produce catharsis in the audience."
  },
  {
    "q": "The phrase \"The wind sang softly through the trees\" is an example of",
    "options": [
      "hyperbole.",
      "simile.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best distinguishes a novella from a short story?",
    "options": [
      "A novella is always written in verse.",
      "A short story has more characters than a novella.",
      "A novella is longer and allows greater character and plot development than a short story.",
      "A novella contains only one setting."
    ],
    "ans": "A novella is longer and allows greater character and plot development than a short story.",
    "explanation": "A novella is longer and allows greater character and plot development than a short story."
  },
  {
    "q": "In literature, an author's style is best described as the",
    "options": [
      "sequence of events in a story.",
      "historical period of the work.",
      "distinctive manner in which the author uses language and literary techniques.",
      "emotional response of the reader."
    ],
    "ans": "distinctive manner in which the author uses language and literary techniques.",
    "explanation": "Distinctive manner in which the author uses language and literary techniques."
  },
  {
    "q": "Which of the following is the best example of dramatic irony?",
    "options": [
      "A poor man unexpectedly becomes wealthy.",
      "A character says the opposite of what he means.",
      "The audience knows a poisoned drink is deadly, but the character drinks it unknowingly.",
      "A hero disguises himself as a servant."
    ],
    "ans": "The audience knows a poisoned drink is deadly, but the character drinks it unknowingly.",
    "explanation": "The audience knows a poisoned drink is deadly, but the character drinks it unknowingly."
  },
  {
    "q": "The phrase \"The trees clapped their hands\" contains",
    "options": [
      "metaphor.",
      "apostrophe.",
      "personification.",
      "paradox."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best defines free verse?",
    "options": [
      "Poetry written in prose form.",
      "Poetry with regular metre and rhyme.",
      "Poetry without a fixed rhyme scheme or regular metre.",
      "Poetry containing only one stanza."
    ],
    "ans": "Poetry without a fixed rhyme scheme or regular metre.",
    "explanation": "Poetry without a fixed rhyme scheme or regular metre."
  },
  {
    "q": "The chief purpose of allusion in literature is to",
    "options": [
      "increase the length of a story.",
      "entertain children.",
      "enrich meaning by referring to well-known people, events, or works.",
      "summarize the plot."
    ],
    "ans": "enrich meaning by referring to well-known people, events, or works.",
    "explanation": "Enrich meaning by referring to well-known people, events, or works."
  },
  {
    "q": "Which of the following is NOT a feature of satire?",
    "options": [
      "Irony.",
      "Ridicule.",
      "Wit.",
      "Heroic celebration."
    ],
    "ans": "Heroic celebration.",
    "explanation": "Heroic celebration."
  },
  {
    "q": "The expression \"The river swallowed the canoe\" illustrates",
    "options": [
      "synecdoche.",
      "irony.",
      "personification.",
      "litotes."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In drama, the division of an act into smaller units is known as",
    "options": [
      "episodes.",
      "stanzas.",
      "scenes.",
      "choruses."
    ],
    "ans": "scenes.",
    "explanation": "Scenes."
  },
  {
    "q": "Which of the following best explains internal conflict?",
    "options": [
      "A struggle between nations.",
      "A struggle between two families.",
      "A psychological or emotional struggle within a character.",
      "A struggle against nature."
    ],
    "ans": "A psychological or emotional struggle within a character.",
    "explanation": "A psychological or emotional struggle within a character."
  },
  {
    "q": "The statement \"The crown has declared war\" is an example of",
    "options": [
      "symbolism.",
      "paradox.",
      "metonymy.",
      "hyperbole."
    ],
    "ans": "metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "Which literary device is illustrated in \"The silence was deafening\"?",
    "options": [
      "paradox.",
      "oxymoron.",
      "euphemism.",
      "litotes."
    ],
    "ans": "oxymoron.",
    "explanation": "Oxymoron."
  },
  {
    "q": "Which of the following is the primary purpose of an epilogue?",
    "options": [
      "To introduce the plot.",
      "To create suspense.",
      "To conclude the story and reveal what happens after the main action.",
      "To introduce the protagonist."
    ],
    "ans": "To conclude the story and reveal what happens after the main action.",
    "explanation": "To conclude the story and reveal what happens after the main action."
  },
  {
    "q": "In poetry, the repetition of identical consonant sounds at the beginning of words is known as",
    "options": [
      "assonance.",
      "consonance.",
      "alliteration.",
      "onomatopoeia."
    ],
    "ans": "alliteration.",
    "explanation": "Alliteration."
  },
  {
    "q": "A literary work whose events symbolize moral or spiritual truths throughout is best described as",
    "options": [
      "a parody.",
      "a satire.",
      "an allegory.",
      "a romance."
    ],
    "ans": "an allegory.",
    "explanation": "An allegory."
  },
  {
    "q": "Which of the following best describes the protagonist?",
    "options": [
      "The character who narrates every story.",
      "The most humorous character.",
      "The principal character whose actions drive the plot.",
      "The oldest character in the work."
    ],
    "ans": "The principal character whose actions drive the plot.",
    "explanation": "The principal character whose actions drive the plot."
  },
  {
    "q": "The phrase \"The classroom was a battlefield\" is an example of",
    "options": [
      "irony.",
      "simile.",
      "metaphor.",
      "apostrophe."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following is most closely associated with epic poetry?",
    "options": [
      "Personal emotions.",
      "Mourning the dead.",
      "Heroic exploits of a legendary figure that affect an entire people or nation.",
      "Romantic love."
    ],
    "ans": "Heroic exploits of a legendary figure that affect an entire people or nation.",
    "explanation": "Heroic exploits of a legendary figure that affect an entire people or nation."
  },
  {
    "q": "In literary appreciation, point of view refers to",
    "options": [
      "the writer's nationality.",
      "the theme of the work.",
      "the perspective from which the story is narrated.",
      "the historical setting."
    ],
    "ans": "the perspective from which the story is narrated.",
    "explanation": "The perspective from which the story is narrated."
  },
  {
    "q": "Which of the following is the best example of situational irony?",
    "options": [
      "The audience knows the villain's plan.",
      "A speaker says the opposite of what he means.",
      "A police station is robbed during a security conference.",
      "A poet compares life to a journey."
    ],
    "ans": "A police station is robbed during a security conference.",
    "explanation": "A police station is robbed during a security conference."
  },
  {
    "q": "The primary function of imagery in literature is to",
    "options": [
      "increase the number of literary devices.",
      "create difficult vocabulary.",
      "appeal to the senses and make descriptions vivid and memorable.",
      "shorten the plot."
    ],
    "ans": "appeal to the senses and make descriptions vivid and memorable.",
    "explanation": "Appeal to the senses and make descriptions vivid and memorable."
  },
  {
    "q": "Which of the following best summarizes the essence of Literature in English as a subject?",
    "options": [
      "It studies grammar and sentence construction only.",
      "It focuses mainly on historical facts and biographies.",
      "It is concerned only with poems and plays.",
      "It examines imaginative works to understand language, human experiences, artistic expression, themes, characterization, and literary techniques."
    ],
    "ans": "It examines imaginative works to understand language, human experiences, artistic expression, themes, characterization, and literary techniques.",
    "explanation": "It examines imaginative works to understand language, human experiences, artistic expression, themes, characterization, and literary techniques."
  },
  {
    "q": "In literary criticism, the term deus ex machina refers to",
    "options": [
      "the downfall of the tragic hero.",
      "the final speech of the protagonist.",
      "an unexpected or improbable intervention that suddenly resolves the conflict.",
      "the use of supernatural beings as major characters."
    ],
    "ans": "an unexpected or improbable intervention that suddenly resolves the conflict.",
    "explanation": "An unexpected or improbable intervention that suddenly resolves the conflict."
  },
  {
    "q": "The expression \"The thunder growled angrily across the hills\" illustrates",
    "options": [
      "hyperbole.",
      "irony.",
      "personification.",
      "apostrophe."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best explains stream of consciousness?",
    "options": [
      "A story narrated by several characters.",
      "A poem written without punctuation.",
      "A narrative technique that presents the continuous flow of a character's thoughts and feelings.",
      "A dramatic dialogue between two characters."
    ],
    "ans": "A narrative technique that presents the continuous flow of a character's thoughts and feelings.",
    "explanation": "A narrative technique that presents the continuous flow of a character's thoughts and feelings."
  },
  {
    "q": "The statement \"She is the pillar of the family\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "irony.",
      "paradox."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following literary devices involves the use of clues to suggest future events?",
    "options": [
      "Flashback.",
      "Suspense.",
      "Foreshadowing.",
      "Allegory."
    ],
    "ans": "Foreshadowing.",
    "explanation": "Foreshadowing."
  },
  {
    "q": "Which of the following is NOT a characteristic of a successful tragic hero?",
    "options": [
      "Noble qualities.",
      "Tragic flaw.",
      "Ability to evoke pity and fear.",
      "Complete moral perfection without weakness."
    ],
    "ans": "Complete moral perfection without weakness.",
    "explanation": "Complete moral perfection without weakness."
  },
  {
    "q": "The phrase \"The city awoke before dawn\" contains",
    "options": [
      "symbolism.",
      "metonymy.",
      "personification.",
      "understatement."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In poetry, the arrangement of rhyming lines is called the",
    "options": [
      "metre.",
      "refrain.",
      "rhyme scheme.",
      "stanza."
    ],
    "ans": "rhyme scheme.",
    "explanation": "Rhyme scheme."
  },
  {
    "q": "Which of the following is the best example of dramatic irony?",
    "options": [
      "A character unexpectedly wins a competition.",
      "A speaker exaggerates his suffering.",
      "The audience knows the true identity of a disguised king while the other characters do not.",
      "A narrator tells the story backward."
    ],
    "ans": "The audience knows the true identity of a disguised king while the other characters do not.",
    "explanation": "The audience knows the true identity of a disguised king while the other characters do not."
  },
  {
    "q": "The principal purpose of satire is to",
    "options": [
      "entertain children through fantasy.",
      "celebrate heroic achievements.",
      "expose and criticize human folly or social injustice through wit and ridicule.",
      "explain scientific discoveries."
    ],
    "ans": "expose and criticize human folly or social injustice through wit and ridicule.",
    "explanation": "Expose and criticize human folly or social injustice through wit and ridicule."
  },
  {
    "q": "Which of the following best defines diction?",
    "options": [
      "The sequence of events in a story.",
      "The narrator's point of view.",
      "The author's deliberate choice of words to achieve specific effects.",
      "The emotional atmosphere of a work."
    ],
    "ans": "The author's deliberate choice of words to achieve specific effects.",
    "explanation": "The author's deliberate choice of words to achieve specific effects."
  },
  {
    "q": "The statement \"Hope is the thing with feathers\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "irony.",
      "euphemism."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following best explains the significance of setting?",
    "options": [
      "It merely indicates where the story begins.",
      "It only identifies the geographical location.",
      "It shapes characters, influences events, and contributes to the overall meaning of the work.",
      "It replaces characterization."
    ],
    "ans": "It shapes characters, influences events, and contributes to the overall meaning of the work.",
    "explanation": "It shapes characters, influences events, and contributes to the overall meaning of the work."
  },
  {
    "q": "The expression \"The classroom erupted with laughter\" illustrates",
    "options": [
      "litotes.",
      "paradox.",
      "hyperbole.",
      "symbolism."
    ],
    "ans": "hyperbole.",
    "explanation": "Hyperbole."
  },
  {
    "q": "Which of the following is most characteristic of lyric poetry?",
    "options": [
      "It narrates national history.",
      "It celebrates military victories.",
      "It expresses personal emotions, reflections, and feelings.",
      "It presents dramatic dialogue."
    ],
    "ans": "It expresses personal emotions, reflections, and feelings.",
    "explanation": "It expresses personal emotions, reflections, and feelings."
  },
  {
    "q": "A literary work that ridicules another work by imitating its style is called",
    "options": [
      "allegory.",
      "satire.",
      "parody.",
      "romance."
    ],
    "ans": "parody.",
    "explanation": "Parody."
  },
  {
    "q": "The literary device in which an object, event, or person consistently represents a deeper meaning is known as",
    "options": [
      "metonymy.",
      "synecdoche.",
      "symbolism.",
      "irony."
    ],
    "ans": "symbolism.",
    "explanation": "Symbolism."
  },
  {
    "q": "Which of the following best defines tone?",
    "options": [
      "The sequence of actions in the story.",
      "The mood experienced by the reader.",
      "The writer's attitude toward the subject or audience as revealed through language.",
      "The personality of the protagonist."
    ],
    "ans": "The writer's attitude toward the subject or audience as revealed through language.",
    "explanation": "The writer's attitude toward the subject or audience as revealed through language."
  },
  {
    "q": "The phrase \"The forest welcomed the travelers\" illustrates",
    "options": [
      "apostrophe.",
      "oxymoron.",
      "personification.",
      "allusion."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best explains the function of a foil?",
    "options": [
      "To narrate the story objectively.",
      "To resolve the central conflict.",
      "To emphasize another character's qualities through contrast.",
      "To provide comic relief."
    ],
    "ans": "To emphasize another character's qualities through contrast.",
    "explanation": "To emphasize another character's qualities through contrast."
  },
  {
    "q": "In literature, verisimilitude refers to",
    "options": [
      "the beauty of poetic language.",
      "the arrangement of dramatic scenes.",
      "the quality of appearing true to life or believable.",
      "the emotional tone of a poem."
    ],
    "ans": "the quality of appearing true to life or believable.",
    "explanation": "The quality of appearing true to life or believable."
  },
  {
    "q": "Which of the following is the best example of verbal irony?",
    "options": [
      "A pilot is afraid of heights.",
      "Saying \"Excellent job!\" to someone who has performed very poorly.",
      "A king disguises himself as a beggar.",
      "The audience knows more than the actors."
    ],
    "ans": "Saying \"Excellent job!\" to someone who has performed very poorly.",
    "explanation": "Saying \"Excellent job!\" to someone who has performed very poorly."
  },
  {
    "q": "The chief purpose of conflict in a literary work is to",
    "options": [
      "describe the setting.",
      "reveal the author's biography.",
      "create tension that develops character and advances the plot.",
      "establish the point of view."
    ],
    "ans": "create tension that develops character and advances the plot.",
    "explanation": "Create tension that develops character and advances the plot."
  },
  {
    "q": "Which of the following is NOT one of the three major genres of literature?",
    "options": [
      "Drama.",
      "Poetry.",
      "Prose.",
      "Biography."
    ],
    "ans": "Biography.",
    "explanation": "Biography."
  },
  {
    "q": "Which of the following best summarizes the importance of literary devices in literature?",
    "options": [
      "They make literary works unnecessarily difficult.",
      "They are used only in poetry.",
      "They replace the need for themes and characterization.",
      "They enrich meaning, improve artistic expression, create vivid effects, and deepen the reader's understanding of a literary work."
    ],
    "ans": "They enrich meaning, improve artistic expression, create vivid effects, and deepen the reader's understanding of a literary work.",
    "explanation": "They enrich meaning, improve artistic expression, create vivid effects, and deepen the reader's understanding of a literary work."
  },
  {
    "q": "Which of the following best defines a bildungsroman?",
    "options": [
      "A novel written entirely in dialogue.",
      "A novel that focuses on war and politics.",
      "A novel that traces the psychological and moral growth of a character from youth to maturity.",
      "A novel written in verse."
    ],
    "ans": "A novel that traces the psychological and moral growth of a character from youth to maturity.",
    "explanation": "A novel that traces the psychological and moral growth of a character from youth to maturity."
  },
  {
    "q": "The expression \"The ocean embraced the shore\" illustrates",
    "options": [
      "hyperbole.",
      "irony.",
      "personification.",
      "paradox."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In literature, hubris refers to",
    "options": [
      "fear of failure.",
      "loyalty to one's country.",
      "excessive pride or self-confidence that often leads to a tragic downfall.",
      "love for wealth."
    ],
    "ans": "excessive pride or self-confidence that often leads to a tragic downfall.",
    "explanation": "Excessive pride or self-confidence that often leads to a tragic downfall."
  },
  {
    "q": "Which of the following best explains the function of foreshadowing?",
    "options": [
      "It summarizes previous events.",
      "It concludes the plot.",
      "It creates suspense by suggesting future developments.",
      "It introduces comic relief."
    ],
    "ans": "It creates suspense by suggesting future developments.",
    "explanation": "It creates suspense by suggesting future developments."
  },
  {
    "q": "The phrase \"Books are windows to the world\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "synecdoche.",
      "irony."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following is the principal purpose of flashback?",
    "options": [
      "To increase the number of characters.",
      "To reveal future events.",
      "To provide earlier events that help explain the present action.",
      "To create comic scenes."
    ],
    "ans": "To provide earlier events that help explain the present action.",
    "explanation": "To provide earlier events that help explain the present action."
  },
  {
    "q": "The expression \"The wind whispered through the valley\" contains",
    "options": [
      "symbolism.",
      "apostrophe.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following is NOT a feature of epic poetry?",
    "options": [
      "A heroic central figure.",
      "National or cultural significance.",
      "Supernatural intervention.",
      "Focus on personal love and private emotions only."
    ],
    "ans": "Focus on personal love and private emotions only.",
    "explanation": "Focus on personal love and private emotions only."
  },
  {
    "q": "In literary appreciation, mood refers to",
    "options": [
      "the writer's choice of words.",
      "the narrator's opinion.",
      "the emotional atmosphere experienced by the reader.",
      "the sequence of events."
    ],
    "ans": "the emotional atmosphere experienced by the reader.",
    "explanation": "The emotional atmosphere experienced by the reader."
  },
  {
    "q": "The phrase \"The classroom became a marketplace\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "irony.",
      "litotes."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following best describes blank verse?",
    "options": [
      "Poetry with no rhythm.",
      "Poetry with irregular metre and no rhyme.",
      "Unrhymed poetry written in regular metrical lines, especially iambic pentameter.",
      "Poetry consisting of fourteen lines."
    ],
    "ans": "Unrhymed poetry written in regular metrical lines, especially iambic pentameter.",
    "explanation": "Unrhymed poetry written in regular metrical lines, especially iambic pentameter."
  },
  {
    "q": "Which of the following literary devices involves referring to a famous historical event or person to deepen meaning?",
    "options": [
      "Symbolism.",
      "Hyperbole.",
      "Allusion.",
      "Satire."
    ],
    "ans": "Allusion.",
    "explanation": "Allusion."
  },
  {
    "q": "The chief function of dialogue in drama is to",
    "options": [
      "describe the scenery only.",
      "provide the author's biography.",
      "reveal character, develop conflict, and move the action forward.",
      "replace stage directions."
    ],
    "ans": "reveal character, develop conflict, and move the action forward.",
    "explanation": "Reveal character, develop conflict, and move the action forward."
  },
  {
    "q": "The statement \"Justice wears a blindfold\" is an example of",
    "options": [
      "hyperbole.",
      "irony.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best explains dramatic tension?",
    "options": [
      "The arrangement of scenes in a play.",
      "The emotional state of the playwright.",
      "The suspense and uncertainty arising from unresolved conflict.",
      "The humorous aspect of tragedy."
    ],
    "ans": "The suspense and uncertainty arising from unresolved conflict.",
    "explanation": "The suspense and uncertainty arising from unresolved conflict."
  },
  {
    "q": "Which of the following best defines assonance?",
    "options": [
      "The repetition of consonant sounds at the beginning of words.",
      "The repetition of similar vowel sounds in nearby words.",
      "The repetition of identical words.",
      "The repetition of final consonant sounds only."
    ],
    "ans": "The repetition of similar vowel sounds in nearby words.",
    "explanation": "The repetition of similar vowel sounds in nearby words."
  },
  {
    "q": "The phrase \"The moon smiled upon the earth\" illustrates",
    "options": [
      "paradox.",
      "metaphor.",
      "personification.",
      "apostrophe."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best describes the denouement of a literary work?",
    "options": [
      "The introduction of conflict.",
      "The highest point of suspense.",
      "The final resolution following the climax.",
      "The first appearance of the protagonist."
    ],
    "ans": "The final resolution following the climax.",
    "explanation": "The final resolution following the climax."
  },
  {
    "q": "In literature, the protagonist is the character who",
    "options": [
      "opposes the hero.",
      "narrates every story.",
      "occupies the central position in the conflict.",
      "provides comic relief."
    ],
    "ans": "occupies the central position in the conflict.",
    "explanation": "Occupies the central position in the conflict."
  },
  {
    "q": "The statement \"He eats like a horse\" is an example of",
    "options": [
      "metaphor.",
      "simile.",
      "irony.",
      "symbolism."
    ],
    "ans": "simile.",
    "explanation": "Simile."
  },
  {
    "q": "Which of the following is the best example of situational irony?",
    "options": [
      "A speaker says the opposite of what he means.",
      "The audience knows the villain's identity before the hero.",
      "A lifeguard drowns while attempting to rescue another swimmer.",
      "A character talks to himself on stage."
    ],
    "ans": "A lifeguard drowns while attempting to rescue another swimmer.",
    "explanation": "A lifeguard drowns while attempting to rescue another swimmer."
  },
  {
    "q": "The primary function of symbolism is to",
    "options": [
      "make literature more difficult to understand.",
      "replace characterization.",
      "communicate deeper meanings through objects, actions, or characters.",
      "eliminate the need for themes."
    ],
    "ans": "communicate deeper meanings through objects, actions, or characters.",
    "explanation": "Communicate deeper meanings through objects, actions, or characters."
  },
  {
    "q": "Which of the following best explains characterization?",
    "options": [
      "The order in which events occur.",
      "The arrangement of scenes in a play.",
      "The methods by which an author creates and develops characters.",
      "The description of the setting."
    ],
    "ans": "The methods by which an author creates and develops characters.",
    "explanation": "The methods by which an author creates and develops characters."
  },
  {
    "q": "The statement \"Knowledge is a key that opens many doors\" is an example of",
    "options": [
      "paradox.",
      "metaphor.",
      "hyperbole.",
      "allusion."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following best summarizes the purpose of studying Literature in English?",
    "options": [
      "To memorize the biographies of writers only.",
      "To learn English grammar exclusively.",
      "To identify literary genres without interpretation.",
      "To develop critical thinking, appreciate artistic language, understand human experiences, and analyze literary techniques across prose, poetry, and drama."
    ],
    "ans": "To develop critical thinking, appreciate artistic language, understand human experiences, and analyze literary techniques across prose, poetry, and drama.",
    "explanation": "To develop critical thinking, appreciate artistic language, understand human experiences, and analyze literary techniques across prose, poetry, and drama."
  },
  {
    "q": "In literature, the term in medias res refers to a narrative that",
    "options": [
      "begins with the background of the main characters.",
      "starts with the resolution of the conflict.",
      "begins in the middle of the action before earlier events are revealed.",
      "ends with an unexpected twist."
    ],
    "ans": "begins in the middle of the action before earlier events are revealed.",
    "explanation": "Begins in the middle of the action before earlier events are revealed."
  },
  {
    "q": "The expression \"The stars smiled upon the travelers\" is an example of",
    "options": [
      "hyperbole.",
      "simile.",
      "personification.",
      "apostrophe."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best explains the purpose of comic relief in a tragedy?",
    "options": [
      "To replace the tragic plot.",
      "To remove the tragic hero from the stage.",
      "To relieve emotional tension temporarily without destroying the seriousness of the play.",
      "To introduce the climax."
    ],
    "ans": "To relieve emotional tension temporarily without destroying the seriousness of the play.",
    "explanation": "To relieve emotional tension temporarily without destroying the seriousness of the play."
  },
  {
    "q": "The phrase \"His voice was music to my ears\" illustrates",
    "options": [
      "irony.",
      "metaphor.",
      "synecdoche.",
      "allusion."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following literary devices involves the repetition of consonant sounds within or at the end of nearby words?",
    "options": [
      "Assonance.",
      "Alliteration.",
      "Consonance.",
      "Onomatopoeia."
    ],
    "ans": "Consonance.",
    "explanation": "Consonance."
  },
  {
    "q": "In literary appreciation, the climax of a story is the point at which",
    "options": [
      "the setting is introduced.",
      "the conflict begins.",
      "the central conflict reaches its highest intensity.",
      "the story comes to an end."
    ],
    "ans": "the central conflict reaches its highest intensity.",
    "explanation": "The central conflict reaches its highest intensity."
  },
  {
    "q": "Which of the following is the best example of verbal irony?",
    "options": [
      "A teacher praises a student who scores 2% by saying, \"Outstanding performance!\"",
      "A king loses his throne unexpectedly.",
      "The audience knows a secret unknown to the hero.",
      "A teacher praises a student who scores 2% by saying, \"Outstanding performance!\""
    ],
    "ans": "A teacher praises a student who scores 2% by saying, \"Outstanding performance!\"",
    "explanation": "A teacher praises a student who scores 2% by saying, \"Outstanding performance!\"."
  },
  {
    "q": "The statement \"The walls have ears\" illustrates",
    "options": [
      "paradox.",
      "synecdoche.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best defines anagnorisis in tragedy?",
    "options": [
      "The tragic hero's death.",
      "The opening speech of the chorus.",
      "The moment of critical discovery or recognition by the protagonist.",
      "The final punishment of the villain."
    ],
    "ans": "The moment of critical discovery or recognition by the protagonist.",
    "explanation": "The moment of critical discovery or recognition by the protagonist."
  },
  {
    "q": "A poem written to celebrate an important public event or distinguished person is best described as",
    "options": [
      "elegy.",
      "ballad.",
      "ode.",
      "sonnet."
    ],
    "ans": "ode.",
    "explanation": "Ode."
  },
  {
    "q": "The phrase \"The nation mourned its fallen heroes\" uses nation to represent the people and is an example of",
    "options": [
      "symbolism.",
      "metonymy.",
      "hyperbole.",
      "paradox."
    ],
    "ans": "metonymy.",
    "explanation": "Metonymy."
  },
  {
    "q": "Which of the following best explains external conflict?",
    "options": [
      "A struggle within a character's mind.",
      "A struggle between a character and an outside force such as another person, society, or nature.",
      "A conflict between the narrator and the audience.",
      "A disagreement between the author and the reader."
    ],
    "ans": "A struggle between a character and an outside force such as another person, society, or nature.",
    "explanation": "A struggle between a character and an outside force such as another person, society, or nature."
  },
  {
    "q": "The statement \"Books are faithful companions\" is an example of",
    "options": [
      "simile.",
      "irony.",
      "metaphor.",
      "litotes."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following is NOT a characteristic of a lyric poem?",
    "options": [
      "It expresses personal feelings.",
      "It is usually short.",
      "It emphasizes emotion.",
      "It always narrates heroic exploits."
    ],
    "ans": "It always narrates heroic exploits.",
    "explanation": "It always narrates heroic exploits."
  },
  {
    "q": "The chief purpose of imagery in literature is to",
    "options": [
      "confuse the reader.",
      "increase the number of literary devices.",
      "create vivid sensory experiences that enrich meaning.",
      "summarize the plot."
    ],
    "ans": "create vivid sensory experiences that enrich meaning.",
    "explanation": "Create vivid sensory experiences that enrich meaning."
  },
  {
    "q": "Which of the following literary terms refers to the author's arrangement of events to achieve maximum artistic effect?",
    "options": [
      "Theme.",
      "Diction.",
      "Plot.",
      "Mood."
    ],
    "ans": "Plot.",
    "explanation": "Plot."
  },
  {
    "q": "The statement \"Experience is the best teacher\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "personification.",
      "apostrophe."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "In drama, the protagonist differs from the antagonist because the protagonist",
    "options": [
      "always survives.",
      "narrates the story.",
      "is the central character whose goals are opposed by the antagonist.",
      "always possesses supernatural powers."
    ],
    "ans": "is the central character whose goals are opposed by the antagonist.",
    "explanation": "Is the central character whose goals are opposed by the antagonist."
  },
  {
    "q": "Which of the following best explains the relationship between theme and motif?",
    "options": [
      "They are exactly the same.",
      "Theme develops motif.",
      "A motif is a recurring element that helps reinforce the theme.",
      "A theme is always shorter than a motif."
    ],
    "ans": "A motif is a recurring element that helps reinforce the theme.",
    "explanation": "A motif is a recurring element that helps reinforce the theme."
  },
  {
    "q": "The phrase \"The angry sea swallowed the boat\" contains",
    "options": [
      "irony.",
      "synecdoche.",
      "personification.",
      "euphemism."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following is the best definition of suspense?",
    "options": [
      "The emotional atmosphere of a work.",
      "The final resolution of a story.",
      "The uncertainty that keeps readers or audiences eager to know the outcome of events.",
      "The introduction to a literary work."
    ],
    "ans": "The uncertainty that keeps readers or audiences eager to know the outcome of events.",
    "explanation": "The uncertainty that keeps readers or audiences eager to know the outcome of events."
  },
  {
    "q": "Which of the following best distinguishes a round character from a flat character?",
    "options": [
      "A round character appears only in drama.",
      "A flat character always narrates the story.",
      "A round character is complex and develops realistically, while a flat character is simple and one-dimensional.",
      "A flat character is always the antagonist."
    ],
    "ans": "A round character is complex and develops realistically, while a flat character is simple and one-dimensional.",
    "explanation": "A round character is complex and develops realistically, while a flat character is simple and one-dimensional."
  },
  {
    "q": "The statement \"The wind screamed through the broken windows\" illustrates",
    "options": [
      "apostrophe.",
      "paradox.",
      "personification.",
      "metonymy."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best explains the importance of point of view in literature?",
    "options": [
      "It determines the title of the work.",
      "It controls the length of the story.",
      "It shapes how readers receive information and interpret events and characters.",
      "It replaces characterization."
    ],
    "ans": "It shapes how readers receive information and interpret events and characters.",
    "explanation": "It shapes how readers receive information and interpret events and characters."
  },
  {
    "q": "Which of the following best summarizes the relationship among plot, characterization, setting, and theme?",
    "options": [
      "They function independently of one another.",
      "Theme determines only the ending of the story.",
      "Setting is more important than characterization.",
      "They work together to create a unified literary work that conveys the author's artistic vision and message."
    ],
    "ans": "They work together to create a unified literary work that conveys the author's artistic vision and message.",
    "explanation": "They work together to create a unified literary work that conveys the author's artistic vision and message."
  },
  {
    "q": "Which of the following best defines an epigraph in literature?",
    "options": [
      "The final paragraph of a novel.",
      "The title page of a literary work.",
      "A quotation or brief statement placed at the beginning of a literary work to suggest its theme.",
      "The author's biography."
    ],
    "ans": "A quotation or brief statement placed at the beginning of a literary work to suggest its theme.",
    "explanation": "A quotation or brief statement placed at the beginning of a literary work to suggest its theme."
  },
  {
    "q": "The expression \"The night wrapped the village in darkness\" is an example of",
    "options": [
      "simile.",
      "irony.",
      "personification.",
      "litotes."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best explains the term epiphany?",
    "options": [
      "The beginning of a tragedy.",
      "The climax of a comedy.",
      "A sudden moment of insight or realization experienced by a character.",
      "The final speech of the narrator."
    ],
    "ans": "A sudden moment of insight or realization experienced by a character.",
    "explanation": "A sudden moment of insight or realization experienced by a character."
  },
  {
    "q": "The statement \"He has climbed the ladder of success\" illustrates",
    "options": [
      "paradox.",
      "metaphor.",
      "synecdoche.",
      "irony."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following literary devices is most effective in creating suspense?",
    "options": [
      "Symbolism.",
      "Hyperbole.",
      "Foreshadowing.",
      "Euphemism."
    ],
    "ans": "Foreshadowing.",
    "explanation": "Foreshadowing."
  },
  {
    "q": "Which of the following is NOT a feature of a well-constructed plot?",
    "options": [
      "Unity of action.",
      "Logical sequence of events.",
      "Cause-and-effect relationship.",
      "Frequent unrelated episodes without connection."
    ],
    "ans": "Frequent unrelated episodes without connection.",
    "explanation": "Frequent unrelated episodes without connection."
  },
  {
    "q": "The statement \"The heavens rejoiced with the people\" illustrates",
    "options": [
      "allusion.",
      "apostrophe.",
      "personification.",
      "metonymy."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following best defines catharsis?",
    "options": [
      "The introduction of conflict.",
      "The tragic flaw of the hero.",
      "The emotional purification or release experienced by the audience after a tragedy.",
      "The final speech of the chorus."
    ],
    "ans": "The emotional purification or release experienced by the audience after a tragedy.",
    "explanation": "The emotional purification or release experienced by the audience after a tragedy."
  },
  {
    "q": "Which of the following literary devices is illustrated in \"The buzzing bees buzzed busily\"?",
    "options": [
      "Assonance.",
      "Alliteration.",
      "Metaphor.",
      "Oxymoron."
    ],
    "ans": "Alliteration.",
    "explanation": "Alliteration."
  },
  {
    "q": "The primary purpose of setting in literature is to",
    "options": [
      "replace characterization.",
      "provide only geographical information.",
      "establish the time, place, and environment that influence the events and characters.",
      "summarize the plot."
    ],
    "ans": "establish the time, place, and environment that influence the events and characters.",
    "explanation": "Establish the time, place, and environment that influence the events and characters."
  },
  {
    "q": "Which of the following is the best example of dramatic irony?",
    "options": [
      "A poor man suddenly becomes rich.",
      "A speaker exaggerates an event.",
      "The audience knows that a letter is forged, but the main character believes it is genuine.",
      "A poet compares love to fire."
    ],
    "ans": "The audience knows that a letter is forged, but the main character believes it is genuine.",
    "explanation": "The audience knows that a letter is forged, but the main character believes it is genuine."
  },
  {
    "q": "The expression \"The mountains stood as silent guardians\" contains",
    "options": [
      "paradox.",
      "simile.",
      "personification.",
      "satire."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "In literature, characterization may be achieved through all of the following EXCEPT",
    "options": [
      "dialogue.",
      "actions.",
      "thoughts.",
      "page numbering."
    ],
    "ans": "page numbering.",
    "explanation": "Page numbering."
  },
  {
    "q": "Which of the following best explains the purpose of a prologue?",
    "options": [
      "To conclude the story.",
      "To reveal the tragic flaw.",
      "To introduce the background, context, or major conflict before the main action begins.",
      "To summarize the ending."
    ],
    "ans": "To introduce the background, context, or major conflict before the main action begins.",
    "explanation": "To introduce the background, context, or major conflict before the main action begins."
  },
  {
    "q": "The phrase \"Life is a journey\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "irony.",
      "euphemism."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following best defines symbolism?",
    "options": [
      "The arrangement of scenes.",
      "The repetition of sounds.",
      "The use of objects, characters, or events to represent deeper meanings beyond their literal sense.",
      "The sequence of events in a story."
    ],
    "ans": "The use of objects, characters, or events to represent deeper meanings beyond their literal sense.",
    "explanation": "The use of objects, characters, or events to represent deeper meanings beyond their literal sense."
  },
  {
    "q": "The expression \"The fire danced across the field\" illustrates",
    "options": [
      "hyperbole.",
      "apostrophe.",
      "personification.",
      "litotes."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following is the principal aim of satire?",
    "options": [
      "To praise political leaders.",
      "To entertain without criticism.",
      "To expose human weaknesses and social evils for correction through wit and irony.",
      "To narrate historical events accurately."
    ],
    "ans": "To expose human weaknesses and social evils for correction through wit and irony.",
    "explanation": "To expose human weaknesses and social evils for correction through wit and irony."
  },
  {
    "q": "Which of the following best distinguishes theme from subject matter?",
    "options": [
      "They mean exactly the same thing.",
      "Subject matter is always deeper than theme.",
      "Subject matter is what the work is about, while theme is the underlying idea or message developed from it.",
      "Theme refers only to the title."
    ],
    "ans": "Subject matter is what the work is about, while theme is the underlying idea or message developed from it.",
    "explanation": "Subject matter is what the work is about, while theme is the underlying idea or message developed from it."
  },
  {
    "q": "The statement \"The wind carried the villagers' prayers\" is an example of",
    "options": [
      "irony.",
      "symbolism.",
      "personification.",
      "metonymy."
    ],
    "ans": "personification.",
    "explanation": "Personification."
  },
  {
    "q": "Which of the following is most likely to strengthen the credibility of a fictional narrative?",
    "options": [
      "Excessive coincidence.",
      "Constant supernatural intervention without purpose.",
      "Consistent characterization and believable cause-and-effect relationships.",
      "Random changes in the setting."
    ],
    "ans": "Consistent characterization and believable cause-and-effect relationships.",
    "explanation": "Consistent characterization and believable cause-and-effect relationships."
  },
  {
    "q": "In literary criticism, universality refers to",
    "options": [
      "writing that is accepted in every country.",
      "literature written in many languages.",
      "themes and experiences that remain meaningful to people across cultures and generations.",
      "stories set in different continents."
    ],
    "ans": "themes and experiences that remain meaningful to people across cultures and generations.",
    "explanation": "Themes and experiences that remain meaningful to people across cultures and generations."
  },
  {
    "q": "The phrase \"His words pierced my heart\" is an example of",
    "options": [
      "simile.",
      "metaphor.",
      "paradox.",
      "apostrophe."
    ],
    "ans": "metaphor.",
    "explanation": "Metaphor."
  },
  {
    "q": "Which of the following contributes most directly to the development of a literary theme?",
    "options": [
      "The title alone.",
      "The number of chapters.",
      "The author's photograph.",
      "The interaction of plot, characterization, conflict, setting, and symbolism."
    ],
    "ans": "The interaction of plot, characterization, conflict, setting, and symbolism.",
    "explanation": "The interaction of plot, characterization, conflict, setting, and symbolism."
  },
  {
    "q": "Which of the following statements best reflects the purpose of studying Literature in English at the UTME/Post-UTME level?",
    "options": [
      "To memorize literary terms without application.",
      "To study grammar alone.",
      "To identify authors and publication dates only.",
      "To develop analytical skills by interpreting prose, poetry, and drama through themes, characterization, plot, style, setting, and literary devices."
    ],
    "ans": "To develop analytical skills by interpreting prose, poetry, and drama through themes, characterization, plot, style, setting, and literary devices.",
    "explanation": "To develop analytical skills by interpreting prose, poetry, and drama through themes, characterization, plot, style, setting, and literary devices."
  }
  ],
  "PUTME_ECONOMICS": [
  {
    "q": "In a free market economy, the \"invisible hand\" as described by Adam Smith primarily ensures:",
    "options": [
      "equitable distribution of income",
      "government intervention to correct market failures",
      "efficient allocation of resources through price signals",
      "elimination of all forms of monopoly power"
    ],
    "ans": "efficient allocation of resources through price signals",
    "explanation": "The invisible hand describes markets self-regulating via price signals, without government intervention."
  },
  {
    "q": "Which of the following best illustrates the concept of \"economic rent\" in the context of factor payments?",
    "options": [
      "Wages paid to unskilled labour in a competitive market",
      "Payment to a factor above its transfer earnings",
      "Interest on capital borrowed for production",
      "Profit earned by an entrepreneur due to innovation"
    ],
    "ans": "Payment to a factor above its transfer earnings",
    "explanation": ""
  },
  {
    "q": "A normative statement in Economics differs from a positive one because it:",
    "options": [
      "can be tested empirically using data",
      "involves value judgments about what ought to be",
      "describes relationships between economic variables",
      "focuses solely on microeconomic behaviour"
    ],
    "ans": "involves value judgments about what ought to be",
    "explanation": ""
  },
  {
    "q": "If the production possibility frontier (PPF) of a country shifts outward due to technological improvement in agriculture but not in manufacturing, this implies:",
    "options": [
      "increased opportunity cost of producing manufactured goods",
      "biased technical progress favouring one sector",
      "overall economic inefficiency",
      "reduced scarcity in the economy"
    ],
    "ans": "increased opportunity cost of producing manufactured goods",
    "explanation": ""
  },
  {
    "q": "In Nigeria's mixed economy, the role of the government in price control during periods of inflation is best described as an attempt to:",
    "options": [
      "achieve Pareto optimality",
      "correct market failure due to externalities",
      "enforce laissez-faire principles",
      "maximise private sector profits"
    ],
    "ans": "correct market failure due to externalities",
    "explanation": ""
  },
  {
    "q": "The law of diminishing marginal utility implies that:",
    "options": [
      "total utility increases at a decreasing rate",
      "marginal utility increases with consumption",
      "consumers will always prefer more expensive goods",
      "indifference curves are always convex to the origin"
    ],
    "ans": "total utility increases at a decreasing rate",
    "explanation": ""
  },
  {
    "q": "A consumer's budget line will shift parallel to the right when:",
    "options": [
      "the price of one good falls while income remains constant",
      "money income increases with constant prices",
      "preferences change in favour of one good",
      "the price of both goods increase proportionally"
    ],
    "ans": "money income increases with constant prices",
    "explanation": ""
  },
  {
    "q": "Which of the following is not a characteristic of perfect competition?",
    "options": [
      "Homogeneous products",
      "Free entry and exit",
      "Perfect knowledge among buyers and sellers",
      "Significant influence of individual firms on market price"
    ],
    "ans": "Significant influence of individual firms on market price",
    "explanation": ""
  },
  {
    "q": "The kinked demand curve model is most applicable to:",
    "options": [
      "perfect competition",
      "oligopoly with interdependent firms",
      "monopoly with barriers to entry",
      "monopolistic competition"
    ],
    "ans": "oligopoly with interdependent firms",
    "explanation": ""
  },
  {
    "q": "If the cross elasticity of demand between two goods is positive and high, they are:",
    "options": [
      "complements",
      "substitutes",
      "inferior goods",
      "Giffen goods"
    ],
    "ans": "substitutes",
    "explanation": ""
  },
  {
    "q": "The incidence of a tax on a good with perfectly inelastic supply falls entirely on:",
    "options": [
      "the buyer",
      "the seller",
      "shared equally",
      "the government"
    ],
    "ans": "the seller",
    "explanation": "When supply is perfectly inelastic, sellers can't reduce quantity to avoid the tax, so they bear the full burden."
  },
  {
    "q": "In the long run, a firm in monopolistic competition earns:",
    "options": [
      "supernormal profit",
      "normal profit only",
      "losses",
      "economic rent"
    ],
    "ans": "normal profit only",
    "explanation": ""
  },
  {
    "q": "Which of the following is a major criticism of the capitalist system in developing economies like Nigeria?",
    "options": [
      "Overemphasis on central planning",
      "Tendency towards income inequality and exploitation",
      "Absence of private property rights",
      "Lack of consumer sovereignty"
    ],
    "ans": "Tendency towards income inequality and exploitation",
    "explanation": ""
  },
  {
    "q": "The multiplier effect in Keynesian economics is weakened by:",
    "options": [
      "high marginal propensity to consume",
      "high marginal propensity to save",
      "low taxes",
      "increased government spending"
    ],
    "ans": "high marginal propensity to save",
    "explanation": ""
  },
  {
    "q": "Structural unemployment in Nigeria is primarily caused by:",
    "options": [
      "mismatch between skills and job requirements",
      "seasonal variations in agriculture",
      "cyclical downturns in demand",
      "frictional job searching"
    ],
    "ans": "mismatch between skills and job requirements",
    "explanation": ""
  },
  {
    "q": "The \"tragedy of the commons\" refers to:",
    "options": [
      "overuse of resources that are rival but non- excludable",
      "government failure in public goods provision",
      "excessive saving leading to recession",
      "monopoly pricing strategies"
    ],
    "ans": "overuse of resources that are rival but non- excludable",
    "explanation": ""
  },
  {
    "q": "In the circular flow of income, injections include all the following except:",
    "options": [
      "exports",
      "government spending",
      "imports",
      "investment"
    ],
    "ans": "imports",
    "explanation": ""
  },
  {
    "q": "A rightward shift in the supply curve could result from:",
    "options": [
      "an increase in the price of the good",
      "technological improvement",
      "rise in input costs",
      "imposition of a tax"
    ],
    "ans": "technological improvement",
    "explanation": ""
  },
  {
    "q": "The liquidity preference theory of interest rate is associated with:",
    "options": [
      "classical economists",
      "Keynes",
      "Marx",
      "Adam Smith"
    ],
    "ans": "Keynes",
    "explanation": ""
  },
  {
    "q": "Nigeria's membership in OPEC primarily affects its:",
    "options": [
      "agricultural policy",
      "fiscal federalism",
      "oil revenue and production quotas",
      "manufacturing sector growth"
    ],
    "ans": "oil revenue and production quotas",
    "explanation": ""
  },
  {
    "q": "An inferior good is one for which demand:",
    "options": [
      "increases as income rises",
      "decreases as income rises",
      "remains constant regardless of price",
      "is perfectly elastic"
    ],
    "ans": "decreases as income rises",
    "explanation": ""
  },
  {
    "q": "The main objective of the Structural Adjustment Programme (SAP) in Nigeria was to:",
    "options": [
      "promote import substitution",
      "diversify the economy and reduce oil dependence",
      "nationalise key industries",
      "increase government subsidies"
    ],
    "ans": "diversify the economy and reduce oil dependence",
    "explanation": ""
  },
  {
    "q": "If a country's GDP at current prices is rising but real GDP is falling, this indicates:",
    "options": [
      "deflation",
      "economic growth",
      "inflation",
      "recession"
    ],
    "ans": "inflation",
    "explanation": ""
  },
  {
    "q": "The demand for labour is described as:",
    "options": [
      "derived demand",
      "composite demand",
      "joint demand",
      "competitive demand"
    ],
    "ans": "derived demand",
    "explanation": ""
  },
  {
    "q": "In a centrally planned economy, the \"what to produce\" question is answered by:",
    "options": [
      "consumer sovereignty",
      "price mechanism",
      "government planning authority",
      "market forces"
    ],
    "ans": "government planning authority",
    "explanation": ""
  },
  {
    "q": "The balance of payments deficit can be financed by:",
    "options": [
      "drawing down on foreign reserves",
      "increasing domestic money supply",
      "reducing government expenditure",
      "imposing price controls"
    ],
    "ans": "drawing down on foreign reserves",
    "explanation": ""
  },
  {
    "q": "Which of the following is a direct tax in Nigeria?",
    "options": [
      "Value Added Tax (VAT)",
      "Company Income Tax",
      "Excise duty",
      "Import tariff"
    ],
    "ans": "Company Income Tax",
    "explanation": ""
  },
  {
    "q": "Economic development differs from economic growth in that it emphasises:",
    "options": [
      "increase in real GDP only",
      "improvement in quality of life and structural changes",
      "rise in population",
      "short-term fluctuations"
    ],
    "ans": "improvement in quality of life and structural changes",
    "explanation": ""
  },
  {
    "q": "The \"terms of trade\" for Nigeria is likely to be unfavourable because of:",
    "options": [
      "reliance on primary product exports",
      "strong manufacturing base",
      "diversified export portfolio",
      "high level of industrialisation"
    ],
    "ans": "reliance on primary product exports",
    "explanation": ""
  },
  {
    "q": "A monopolist maximises profit when:",
    "options": [
      "marginal cost equals average cost",
      "marginal revenue equals marginal cost",
      "price equals marginal cost",
      "average revenue equals average cost"
    ],
    "ans": "marginal revenue equals marginal cost",
    "explanation": ""
  },
  {
    "q": "Fiscal policy is most effective in reducing unemployment when the economy is in:",
    "options": [
      "a liquidity trap",
      "a recessionary gap",
      "full employment",
      "stagflation"
    ],
    "ans": "a recessionary gap",
    "explanation": ""
  },
  {
    "q": "The main cause of rural-urban migration in Nigeria is:",
    "options": [
      "better employment opportunities in urban areas",
      "equal development in rural areas",
      "high agricultural productivity",
      "government subsidies on farm inputs"
    ],
    "ans": "better employment opportunities in urban areas",
    "explanation": ""
  },
  {
    "q": "If the price elasticity of supply of a commodity is greater than one, supply is said to be:",
    "options": [
      "inelastic",
      "unitary elastic",
      "elastic",
      "perfectly inelastic"
    ],
    "ans": "elastic",
    "explanation": ""
  },
  {
    "q": "The Central Bank of Nigeria uses Open Market Operations primarily to:",
    "options": [
      "control inflation through money supply",
      "increase government revenue",
      "promote foreign trade",
      "regulate commercial bank profits"
    ],
    "ans": "control inflation through money supply",
    "explanation": ""
  },
  {
    "q": "Which of the following is an example of a merit good?",
    "options": [
      "Cigarettes",
      "Education",
      "Luxury cars",
      "Gambling services"
    ],
    "ans": "Education",
    "explanation": ""
  },
  {
    "q": "In the theory of consumer behaviour, the consumer is at equilibrium when:",
    "options": [
      "marginal utility per naira is equal for all goods",
      "total utility is maximised",
      "income is fully spent",
      "prices are constant"
    ],
    "ans": "marginal utility per naira is equal for all goods",
    "explanation": ""
  },
  {
    "q": "The National Debt in Nigeria can lead to:",
    "options": [
      "crowding out of private investment",
      "increased foreign reserves",
      "lower tax rates",
      "reduced inflation"
    ],
    "ans": "crowding out of private investment",
    "explanation": ""
  },
  {
    "q": "A country experiencing persistent balance of trade surplus is likely to have:",
    "options": [
      "appreciating currency",
      "depreciating currency",
      "high unemployment",
      "deflationary pressure"
    ],
    "ans": "appreciating currency",
    "explanation": ""
  },
  {
    "q": "The law of increasing opportunity cost implies that the PPF is:",
    "options": [
      "a straight line",
      "bowed outward",
      "perfectly vertical",
      "horizontal"
    ],
    "ans": "bowed outward",
    "explanation": ""
  },
  {
    "q": "Privatisation in Nigeria is most likely to lead to:",
    "options": [
      "increased government bureaucracy",
      "improved efficiency and innovation",
      "higher unemployment in all sectors",
      "reduced foreign investment"
    ],
    "ans": "improved efficiency and innovation",
    "explanation": ""
  },
  {
    "q": "The Human Development Index (HDI) includes all the following except:",
    "options": [
      "life expectancy",
      "education level",
      "per capita income",
      "military strength"
    ],
    "ans": "military strength",
    "explanation": ""
  },
  {
    "q": "Stagflation is a situation characterised by:",
    "options": [
      "high inflation and high unemployment",
      "low inflation and high growth",
      "deflation and low unemployment",
      "balanced budget"
    ],
    "ans": "high inflation and high unemployment",
    "explanation": ""
  },
  {
    "q": "The main function of the Stock Exchange is to:",
    "options": [
      "provide long-term capital to companies",
      "control monetary policy",
      "regulate foreign exchange",
      "collect taxes"
    ],
    "ans": "provide long-term capital to companies",
    "explanation": ""
  },
  {
    "q": "An increase in the cash reserve ratio by the CBN will:",
    "options": [
      "increase the lending capacity of commercial banks",
      "decrease the money supply",
      "lower interest rates",
      "encourage borrowing"
    ],
    "ans": "decrease the money supply",
    "explanation": ""
  },
  {
    "q": "The concept of \"economies of scale\" explains why:",
    "options": [
      "average cost falls as output increases in the long run",
      "marginal cost always exceeds average cost",
      "firms always operate at minimum efficiency",
      "small firms dominate the market"
    ],
    "ans": "average cost falls as output increases in the long run",
    "explanation": ""
  },
  {
    "q": "Which of the following is a demerit of the socialist economic system?",
    "options": [
      "Lack of incentive for hard work",
      "High level of consumer sovereignty",
      "Rapid technological innovation",
      "Efficient resource allocation"
    ],
    "ans": "Lack of incentive for hard work",
    "explanation": ""
  },
  {
    "q": "The \"infant industry argument\" is used to justify:",
    "options": [
      "free trade",
      "protectionism/tariffs",
      "complete deregulation",
      "export subsidies only"
    ],
    "ans": "protectionism/tariffs",
    "explanation": ""
  },
  {
    "q": "Gross Domestic Product (GDP) differs from Gross National Product (GNP) because GNP includes:",
    "options": [
      "net income from abroad",
      "depreciation",
      "indirect taxes",
      "government expenditure"
    ],
    "ans": "net income from abroad",
    "explanation": ""
  },
  {
    "q": "The most common cause of demand-pull inflation is:",
    "options": [
      "increase in aggregate supply",
      "excessive aggregate demand",
      "rise in production costs",
      "fall in money supply"
    ],
    "ans": "excessive aggregate demand",
    "explanation": ""
  },
  {
    "q": "In Nigeria, the three tiers of government share revenue mainly through:",
    "options": [
      "the Federation Account",
      "individual income tax",
      "value added tax exclusively",
      "customs duties only"
    ],
    "ans": "the Federation Account",
    "explanation": ""
  },
  {
    "q": "The Phillips Curve illustrates a short-run trade-off between:",
    "options": [
      "inflation and unemployment",
      "interest rates and investment",
      "GDP growth and balance of payments",
      "money supply and price level"
    ],
    "ans": "inflation and unemployment",
    "explanation": ""
  },
  {
    "q": "In Nigeria, the phenomenon where oil revenue leads to neglect of agriculture is known as:",
    "options": [
      "terms of trade deterioration",
      "Dutch disease",
      "multiplier effect",
      "balance of payments surplus trap"
    ],
    "ans": "Dutch disease",
    "explanation": ""
  },
  {
    "q": "If the marginal propensity to consume (MPC) is 0.8, the value of the multiplier is:",
    "options": [
      "1.25",
      "5",
      "0.2",
      "4"
    ],
    "ans": "5",
    "explanation": ""
  },
  {
    "q": "A regressive tax system burdens:",
    "options": [
      "higher income earners more",
      "lower income earners proportionately more",
      "only corporate entities",
      "middle-class consumers exclusively"
    ],
    "ans": "lower income earners proportionately more",
    "explanation": ""
  },
  {
    "q": "The Lorenz Curve is used to measure:",
    "options": [
      "income inequality",
      "price elasticity of demand",
      "economic growth rate",
      "terms of trade"
    ],
    "ans": "income inequality",
    "explanation": ""
  },
  {
    "q": "Which of the following is not a function of money?",
    "options": [
      "Medium of exchange",
      "Store of value",
      "Unit of account",
      "Tool for central planning"
    ],
    "ans": "Tool for central planning",
    "explanation": ""
  },
  {
    "q": "Cost-push inflation in Nigeria can be triggered by:",
    "options": [
      "increase in aggregate demand",
      "rise in the cost of imported raw materials",
      "reduction in government spending",
      "technological advancement"
    ],
    "ans": "rise in the cost of imported raw materials",
    "explanation": ""
  },
  {
    "q": "The term \"human capital\" refers to:",
    "options": [
      "physical infrastructure",
      "skills and knowledge embodied in the workforce",
      "natural resources",
      "financial assets of individuals"
    ],
    "ans": "skills and knowledge embodied in the workforce",
    "explanation": ""
  },
  {
    "q": "In international trade, the concept of comparative advantage implies that a country should:",
    "options": [
      "produce all goods it needs domestically",
      "specialize in goods with lower opportunity cost",
      "impose high tariffs on all imports",
      "avoid trade with developing nations"
    ],
    "ans": "specialize in goods with lower opportunity cost",
    "explanation": ""
  },
  {
    "q": "Devaluation of the Naira is likely to:",
    "options": [
      "worsen the balance of payments deficit immediately",
      "make exports cheaper and imports dearer",
      "reduce domestic inflation",
      "increase government revenue from oil"
    ],
    "ans": "make exports cheaper and imports dearer",
    "explanation": ""
  },
  {
    "q": "The Harrod-Domar model primarily focuses on the relationship between:",
    "options": [
      "savings, capital-output ratio, and growth",
      "consumption and marginal utility",
      "money supply and velocity of circulation",
      "fiscal deficit and public debt"
    ],
    "ans": "savings, capital-output ratio, and growth",
    "explanation": ""
  },
  {
    "q": "A public good is characterised by:",
    "options": [
      "rivalry and excludability",
      "non-rivalry and non- excludability",
      "high opportunity cost",
      "private sector provision only"
    ],
    "ans": "non-rivalry and non- excludability",
    "explanation": ""
  },
  {
    "q": "The main objective of privatisation in Nigeria was to:",
    "options": [
      "increase government control over the economy",
      "improve efficiency and reduce fiscal burden",
      "promote socialism",
      "eliminate all foreign investment"
    ],
    "ans": "improve efficiency and reduce fiscal burden",
    "explanation": ""
  },
  {
    "q": "If demand is unitary elastic, a 10% increase in price will lead to:",
    "options": [
      "10% increase in total revenue",
      "10% decrease in total revenue",
      "no change in total revenue",
      "more than 10% change in quantity demanded"
    ],
    "ans": "no change in total revenue",
    "explanation": ""
  },
  {
    "q": "The \"terms of trade\" for a country improves when:",
    "options": [
      "export prices rise relative to import prices",
      "import prices rise faster than export prices",
      "volume of exports decreases",
      "currency appreciates significantly"
    ],
    "ans": "export prices rise relative to import prices",
    "explanation": ""
  },
  {
    "q": "The demand curve for a Giffen good is:",
    "options": [
      "upward sloping",
      "downward sloping",
      "perfectly elastic",
      "perfectly inelastic"
    ],
    "ans": "upward sloping",
    "explanation": ""
  },
  {
    "q": "Monetary policy is more effective than fiscal policy when the economy suffers from:",
    "options": [
      "liquidity trap",
      "high inflation",
      "recession",
      "balance of payments surplus"
    ],
    "ans": "high inflation",
    "explanation": "Monetary policy is actually LEAST effective in a liquidity trap — that's the classic Keynesian argument for fiscal policy instead."
  },
  {
    "q": "The main reason for the establishment of the Nigerian Stock Exchange is to:",
    "options": [
      "provide short-term loans to businesses",
      "mobilise long-term capital for investment",
      "regulate foreign exchange rates",
      "collect taxes from companies"
    ],
    "ans": "mobilise long-term capital for investment",
    "explanation": ""
  },
  {
    "q": "Which of the following is an example of an indirect tax?",
    "options": [
      "Personal income tax",
      "Company income tax",
      "Value Added Tax (VAT)",
      "Capital gains tax"
    ],
    "ans": "Value Added Tax (VAT)",
    "explanation": ""
  },
  {
    "q": "Economic growth can be measured by:",
    "options": [
      "increase in nominal GDP",
      "increase in real GDP per capita",
      "rise in population",
      "increase in government expenditure"
    ],
    "ans": "increase in real GDP per capita",
    "explanation": ""
  },
  {
    "q": "The main objective of the African Development Bank is to:",
    "options": [
      "promote political unity in Africa",
      "provide financial and technical assistance for development",
      "regulate trade among African countries",
      "enforce human rights"
    ],
    "ans": "provide financial and technical assistance for development",
    "explanation": ""
  },
  {
    "q": "A budget deficit occurs when:",
    "options": [
      "government revenue exceeds expenditure",
      "government expenditure exceeds revenue",
      "exports exceed imports",
      "imports exceed exports"
    ],
    "ans": "government expenditure exceeds revenue",
    "explanation": ""
  },
  {
    "q": "The law of comparative advantage was propounded by:",
    "options": [
      "Adam Smith",
      "David Ricardo",
      "John Maynard Keynes",
      "Karl Marx"
    ],
    "ans": "David Ricardo",
    "explanation": ""
  },
  {
    "q": "In Nigeria, the Petroleum Profit Tax is paid by:",
    "options": [
      "all manufacturing companies",
      "oil exploration and production companies",
      "commercial banks",
      "agricultural firms"
    ],
    "ans": "oil exploration and production companies",
    "explanation": ""
  },
  {
    "q": "Which of the following is a characteristic of a developing economy?",
    "options": [
      "High per capita income",
      "High level of industrialisation",
      "High rate of population growth and low savings",
      "Advanced technology"
    ],
    "ans": "High rate of population growth and low savings",
    "explanation": ""
  },
  {
    "q": "The Bretton Woods institutions include:",
    "options": [
      "IMF and World Bank",
      "OPEC and ECOWAS",
      "UN and AU",
      "WTO and ILO"
    ],
    "ans": "IMF and World Bank",
    "explanation": ""
  },
  {
    "q": "An increase in the bank rate by the Central Bank will lead to:",
    "options": [
      "increase in money supply",
      "decrease in lending by commercial banks",
      "lower interest rates",
      "higher investment"
    ],
    "ans": "decrease in lending by commercial banks",
    "explanation": ""
  },
  {
    "q": "The main cause of unemployment in Nigeria is:",
    "options": [
      "high population growth rate",
      "low level of industrialisation",
      "both A and B",
      "excessive government spending"
    ],
    "ans": "both A and B",
    "explanation": ""
  },
  {
    "q": "The concept of \"consumer surplus\" refers to:",
    "options": [
      "the difference between what consumers are willing to pay and what they actually pay",
      "total revenue minus total cost",
      "profit made by producers",
      "government subsidy on goods"
    ],
    "ans": "the difference between what consumers are willing to pay and what they actually pay",
    "explanation": ""
  },
  {
    "q": "Which of the following is not a function of commercial banks?",
    "options": [
      "Accepting deposits",
      "Granting loans",
      "Issuing currency",
      "Providing safe custody"
    ],
    "ans": "Issuing currency",
    "explanation": ""
  },
  {
    "q": "The National Economic Empowerment and Development Strategy (NEEDS) aimed at:",
    "options": [
      "poverty reduction and wealth creation",
      "military expansion",
      "religious harmony",
      "cultural preservation only"
    ],
    "ans": "poverty reduction and wealth creation",
    "explanation": ""
  },
  {
    "q": "A fall in the exchange rate of the Naira will make:",
    "options": [
      "imports cheaper",
      "exports more expensive",
      "imports more expensive",
      "domestic goods less competitive"
    ],
    "ans": "imports more expensive",
    "explanation": ""
  },
  {
    "q": "The production function shows the relationship between:",
    "options": [
      "input and output",
      "price and quantity demanded",
      "savings and investment",
      "revenue and expenditure"
    ],
    "ans": "input and output",
    "explanation": ""
  },
  {
    "q": "Which of the following is a capital-intensive industry?",
    "options": [
      "Agriculture",
      "Petroleum refining",
      "Handicraft",
      "Retail trading"
    ],
    "ans": "Petroleum refining",
    "explanation": ""
  },
  {
    "q": "The main objective of taxation is:",
    "options": [
      "revenue generation only",
      "redistribution of income and economic stabilisation",
      "punishment of citizens",
      "funding political parties"
    ],
    "ans": "redistribution of income and economic stabilisation",
    "explanation": ""
  },
  {
    "q": "The International Monetary Fund (IMF) was established to:",
    "options": [
      "provide long-term development loans",
      "promote international monetary cooperation",
      "regulate world trade",
      "enforce human rights"
    ],
    "ans": "promote international monetary cooperation",
    "explanation": ""
  },
  {
    "q": "A progressive tax system means:",
    "options": [
      "tax rate increases as income increases",
      "tax rate decreases as income increases",
      "same tax rate for all",
      "no tax on high income"
    ],
    "ans": "tax rate increases as income increases",
    "explanation": ""
  },
  {
    "q": "The main problem of agricultural development in Nigeria is:",
    "options": [
      "inadequate credit facilities and poor infrastructure",
      "excess rainfall",
      "too many farmers",
      "high mechanisation"
    ],
    "ans": "inadequate credit facilities and poor infrastructure",
    "explanation": ""
  },
  {
    "q": "Which of the following is a feature of monopoly?",
    "options": [
      "Many sellers",
      "Free entry",
      "Single seller",
      "Perfect knowledge"
    ],
    "ans": "Single seller",
    "explanation": ""
  },
  {
    "q": "The marginal propensity to save (MPS) + marginal propensity to consume (MPC) is always equal to:",
    "options": [
      "0",
      "1",
      "infinity",
      "negative value"
    ],
    "ans": "1",
    "explanation": ""
  },
  {
    "q": "The Economic Community of West African States (ECOWAS) was formed to:",
    "options": [
      "promote regional integration and trade",
      "create a single currency only",
      "fight wars",
      "promote military alliance"
    ],
    "ans": "promote regional integration and trade",
    "explanation": ""
  },
  {
    "q": "Inflation can be controlled by:",
    "options": [
      "increasing government spending",
      "reducing money supply",
      "lowering taxes",
      "increasing imports"
    ],
    "ans": "reducing money supply",
    "explanation": ""
  },
  {
    "q": "The supply of labour depends on:",
    "options": [
      "wage rate and working conditions",
      "only population size",
      "government policy only",
      "weather conditions"
    ],
    "ans": "wage rate and working conditions",
    "explanation": ""
  },
  {
    "q": "Which of the following is not an objective of the Central Bank of Nigeria?",
    "options": [
      "Price stability",
      "Issuance of currency",
      "Profit maximisation",
      "Financial system stability"
    ],
    "ans": "Profit maximisation",
    "explanation": ""
  },
  {
    "q": "The \"invisible trade\" refers to:",
    "options": [
      "trade in goods",
      "trade in services",
      "barter trade",
      "illegal trade"
    ],
    "ans": "trade in services",
    "explanation": ""
  },
  {
    "q": "A country with a high dependency ratio has:",
    "options": [
      "many working-age people",
      "high proportion of children and elderly",
      "low birth rate",
      "high savings rate"
    ],
    "ans": "high proportion of children and elderly",
    "explanation": ""
  },
  {
    "q": "The main advantage of a joint-stock company is:",
    "options": [
      "unlimited liability",
      "access to large capital",
      "secrecy of operations",
      "easy dissolution"
    ],
    "ans": "access to large capital",
    "explanation": ""
  },
  {
    "q": "Which of the following causes a shift in the demand curve?",
    "options": [
      "Change in price of the commodity",
      "Change in consumer income",
      "Change in supply",
      "Change in technology"
    ],
    "ans": "Change in consumer income",
    "explanation": ""
  },
  {
    "q": "The World Trade Organisation (WTO) aims at:",
    "options": [
      "promoting free and fair trade among nations",
      "providing military aid",
      "regulating population",
      "controlling climate change"
    ],
    "ans": "promoting free and fair trade among nations",
    "explanation": ""
  },
  {
    "q": "Economic recession is characterised by:",
    "options": [
      "rising GDP",
      "falling output and rising unemployment",
      "low inflation",
      "high investment"
    ],
    "ans": "falling output and rising unemployment",
    "explanation": ""
  },
  {
    "q": " The main objective of the Nigerian National Petroleum Corporation (NNPC) is to:",
    "options": [
      "regulate all industries",
      "manage oil resources and exploration",
      "control agricultural production",
      "issue currency"
    ],
    "ans": "manage oil resources and exploration",
    "explanation": ""
  },
  {
    "q": " A decrease in the supply of a commodity will lead to:",
    "options": [
      "lower equilibrium price",
      "higher equilibrium price",
      "no change in price",
      "higher quantity demanded"
    ],
    "ans": "higher equilibrium price",
    "explanation": ""
  },
  {
    "q": " The break-even point for a firm is where:",
    "options": [
      "total revenue equals total cost",
      "marginal cost is zero",
      "average cost is minimum",
      "profit is maximum"
    ],
    "ans": "total revenue equals total cost",
    "explanation": ""
  },
  {
    "q": " Which of the following is a cause of inflation in Nigeria?",
    "options": [
      "Increase in agricultural output",
      "Persistent budget deficits",
      "Reduction in money supply",
      "Fall in import prices"
    ],
    "ans": "Persistent budget deficits",
    "explanation": ""
  },
  {
    "q": " The law of demand states that:",
    "options": [
      "price and quantity demanded are directly related",
      "price and quantity demanded are inversely related",
      "supply determines demand",
      "demand is always constant"
    ],
    "ans": "price and quantity demanded are inversely related",
    "explanation": ""
  },
  {
    "q": " The Federal Inland Revenue Service (FIRS) is responsible for:",
    "options": [
      "collecting customs duties",
      "collecting internal taxes",
      "regulating banks",
      "issuing licences"
    ],
    "ans": "collecting internal taxes",
    "explanation": ""
  },
  {
    "q": " An example of a fixed cost is:",
    "options": [
      "raw materials",
      "rent of factory building",
      "wages of casual workers",
      "electricity bills"
    ],
    "ans": "rent of factory building",
    "explanation": ""
  },
  {
    "q": " The main problem facing West African economies is:",
    "options": [
      "political instability and low savings",
      "excess capital",
      "advanced technology",
      "high literacy rate"
    ],
    "ans": "political instability and low savings",
    "explanation": ""
  },
  {
    "q": " The elasticity of supply is said to be unitary when:",
    "options": [
      "percentage change in quantity supplied equals percentage change in price",
      "supply is perfectly inelastic",
      "supply is perfectly elastic",
      "quantity supplied does not change with price"
    ],
    "ans": "percentage change in quantity supplied equals percentage change in price",
    "explanation": ""
  },
  {
    "q": " Which of the following is a feature of a command economy?",
    "options": [
      "Private ownership of means of production",
      "Central planning by government",
      "Consumer sovereignty",
      "Free market forces"
    ],
    "ans": "Central planning by government",
    "explanation": ""
  },
  {
    "q": " The balance of trade is favourable when:",
    "options": [
      "imports exceed exports",
      "exports exceed imports",
      "capital inflow is high",
      "reserves are depleted"
    ],
    "ans": "exports exceed imports",
    "explanation": ""
  },
  {
    "q": " The main aim of the National Youth Service Corps (NYSC) is to:",
    "options": [
      "promote national unity",
      "increase agricultural production",
      "reduce unemployment permanently",
      "train military personnel"
    ],
    "ans": "promote national unity",
    "explanation": ""
  },
  {
    "q": " A shift in the supply curve to the right indicates:",
    "options": [
      "increase in supply",
      "decrease in supply",
      "increase in demand",
      "decrease in demand"
    ],
    "ans": "increase in supply",
    "explanation": ""
  },
  {
    "q": " The theory of absolute advantage was developed by:",
    "options": [
      "David Ricardo",
      "Adam Smith",
      "John Maynard Keynes",
      "Karl Marx"
    ],
    "ans": "Adam Smith",
    "explanation": ""
  },
  {
    "q": " Which of the following is not a function of the money market?",
    "options": [
      "Providing short-term funds",
      "Providing long-term capital",
      "Facilitating liquidity management",
      "Discounting bills"
    ],
    "ans": "Providing long-term capital",
    "explanation": ""
  },
  {
    "q": " The main cause of rural poverty in Nigeria is:",
    "options": [
      "low agricultural productivity",
      "high urban wages",
      "advanced rural infrastructure",
      "excess government subsidy"
    ],
    "ans": "low agricultural productivity",
    "explanation": ""
  },
  {
    "q": " A public limited liability company is owned by:",
    "options": [
      "government only",
      "the general public through shares",
      "one individual",
      "family members only"
    ],
    "ans": "the general public through shares",
    "explanation": ""
  },
  {
    "q": " The marginal revenue curve for a monopolist is:",
    "options": [
      "above the average revenue curve",
      "below the average revenue curve",
      "the same as average revenue",
      "horizontal"
    ],
    "ans": "below the average revenue curve",
    "explanation": ""
  },
  {
    "q": " The Economic and Financial Crimes Commission (EFCC) was established to:",
    "options": [
      "fight corruption and economic crimes",
      "regulate the stock market",
      "issue currency",
      "manage foreign reserves"
    ],
    "ans": "fight corruption and economic crimes",
    "explanation": ""
  },
  {
    "q": " Which of the following will cause a leftward shift in the demand curve?",
    "options": [
      "Increase in consumer income",
      "Decrease in the price of a substitute",
      "Increase in population",
      "Favourable taste and fashion"
    ],
    "ans": "Decrease in the price of a substitute",
    "explanation": ""
  },
  {
    "q": " The main objective of the African Union (AU) is to:",
    "options": [
      "promote African unity and development",
      "create a single currency immediately",
      "establish a military alliance only",
      "regulate religion"
    ],
    "ans": "promote African unity and development",
    "explanation": ""
  },
  {
    "q": " Fixed deposit is also known as:",
    "options": [
      "current account",
      "time deposit",
      "savings account",
      "call deposit"
    ],
    "ans": "time deposit",
    "explanation": ""
  },
  {
    "q": " The opportunity cost of attending school is:",
    "options": [
      "school fees",
      "the earnings forgone by not working",
      "cost of books",
      "transportation cost"
    ],
    "ans": "the earnings forgone by not working",
    "explanation": ""
  },
  {
    "q": " Which of the following is an example of a quasi-public good?",
    "options": [
      "National defence",
      "Toll road",
      "Air",
      "Street lighting"
    ],
    "ans": "Toll road",
    "explanation": ""
  },
  {
    "q": " The main source of revenue for local governments in Nigeria is:",
    "options": [
      "federation account allocation",
      "personal income tax only",
      "customs duties",
      "company tax"
    ],
    "ans": "federation account allocation",
    "explanation": ""
  },
  {
    "q": " The production of goods and services in large quantities is known as:",
    "options": [
      "mass production",
      "subsistence production",
      "artisanal production",
      "cottage production"
    ],
    "ans": "mass production",
    "explanation": ""
  },
  {
    "q": " An increase in the minimum wage will most likely lead to:",
    "options": [
      "higher unemployment in the short run",
      "lower cost of production",
      "reduced inflation",
      "higher employment"
    ],
    "ans": "higher unemployment in the short run",
    "explanation": ""
  },
  {
    "q": " The main function of the Nigerian Ports Authority is to:",
    "options": [
      "regulate shipping and port operations",
      "issue currency",
      "collect taxes",
      "manage agriculture"
    ],
    "ans": "regulate shipping and port operations",
    "explanation": ""
  },
  {
    "q": " Which of the following is a determinant of supply?",
    "options": [
      "Consumer taste",
      "Technology",
      "Income of consumers",
      "Price of related goods in demand"
    ],
    "ans": "Technology",
    "explanation": ""
  },
  {
    "q": " The IMF provides:",
    "options": [
      "long-term development loans",
      "short-term balance of payments support",
      "military aid",
      "educational grants only"
    ],
    "ans": "short-term balance of payments support",
    "explanation": ""
  },
  {
    "q": " A country operating on its production possibility frontier is said to be:",
    "options": [
      "inefficient",
      "productively efficient",
      "in recession",
      "experiencing inflation"
    ],
    "ans": "productively efficient",
    "explanation": ""
  },
  {
    "q": " The main cause of the 1980s debt crisis in Nigeria was:",
    "options": [
      "fall in oil prices",
      "increase in agricultural exports",
      "high industrial output",
      "low population growth"
    ],
    "ans": "fall in oil prices",
    "explanation": ""
  },
  {
    "q": " Which market structure has the highest degree of price control?",
    "options": [
      "Perfect competition",
      "Monopoly",
      "Monopolistic competition",
      "Oligopoly"
    ],
    "ans": "Monopoly",
    "explanation": ""
  },
  {
    "q": " The Consumer Price Index (CPI) is used to measure:",
    "options": [
      "inflation rate",
      "unemployment rate",
      "GDP growth",
      "balance of payments"
    ],
    "ans": "inflation rate",
    "explanation": ""
  },
  {
    "q": " The main objective of the Vision 20:2020 was to:",
    "options": [
      "make Nigeria one of the top 20 economies by 2020",
      "reduce population",
      "promote military power",
      "establish new states"
    ],
    "ans": "make Nigeria one of the top 20 economies by 2020",
    "explanation": ""
  },
  {
    "q": " A fall in interest rate will most likely lead to:",
    "options": [
      "decrease in investment",
      "increase in borrowing and investment",
      "higher savings",
      "lower consumption"
    ],
    "ans": "increase in borrowing and investment",
    "explanation": ""
  },
  {
    "q": " The main advantage of international trade is:",
    "options": [
      "access to goods not produced domestically",
      "increased unemployment",
      "reduced specialisation",
      "higher prices for consumers"
    ],
    "ans": "access to goods not produced domestically",
    "explanation": ""
  },
  {
    "q": " Which of the following is not a source of public revenue?",
    "options": [
      "Taxes",
      "Fees and fines",
      "Borrowing",
      "Profit from private companies"
    ],
    "ans": "Profit from private companies",
    "explanation": ""
  },
  {
    "q": " The marginal cost curve intersects the average cost curve at the point where average cost is:",
    "options": [
      "rising",
      "falling",
      "at its minimum",
      "zero"
    ],
    "ans": "at its minimum",
    "explanation": ""
  },
  {
    "q": " The main problem of marketing boards in Nigeria was:",
    "options": [
      "inefficiency and corruption",
      "too much competition",
      "low prices for farmers",
      "excess production"
    ],
    "ans": "inefficiency and corruption",
    "explanation": ""
  },
  {
    "q": " The exchange rate system in Nigeria is:",
    "options": [
      "fixed exchange rate",
      "floating exchange rate",
      "gold standard",
      "barter system"
    ],
    "ans": "floating exchange rate",
    "explanation": ""
  },
  {
    "q": " Which of the following is a capital flight?",
    "options": [
      "Investment of local funds abroad",
      "Inflow of foreign capital",
      "Increase in exports",
      "Reduction in imports"
    ],
    "ans": "Investment of local funds abroad",
    "explanation": ""
  },
  {
    "q": " The main function of the National Assembly is to:",
    "options": [
      "make laws",
      "implement policies",
      "interpret laws",
      "enforce laws"
    ],
    "ans": "make laws",
    "explanation": ""
  },
  {
    "q": " An increase in the retirement age will:",
    "options": [
      "reduce the labour force",
      "increase the labour force",
      "have no effect",
      "increase unemployment immediately"
    ],
    "ans": "increase the labour force",
    "explanation": ""
  },
  {
    "q": " The main objective of the Structural Adjustment Programme (SAP) was:",
    "options": [
      "diversification of the economy",
      "nationalisation of industries",
      "increase in subsidies",
      "reduction in foreign investment"
    ],
    "ans": "diversification of the economy",
    "explanation": ""
  },
  {
    "q": " Which of the following is a characteristic of oligopoly?",
    "options": [
      "Many sellers",
      "Interdependence among few firms",
      "Free entry and exit",
      "Perfect competition"
    ],
    "ans": "Interdependence among few firms",
    "explanation": ""
  },
  {
    "q": " The main source of foreign exchange in Nigeria is:",
    "options": [
      "oil exports",
      "agricultural exports",
      "tourism",
      "remittances only"
    ],
    "ans": "oil exports",
    "explanation": ""
  },
  {
    "q": " A budget surplus means:",
    "options": [
      "government revenue exceeds expenditure",
      "expenditure exceeds revenue",
      "balanced budget",
      "deficit financing"
    ],
    "ans": "government revenue exceeds expenditure",
    "explanation": ""
  },
  {
    "q": " The main aim of advertising is to:",
    "options": [
      "shift the demand curve to the right",
      "reduce cost of production",
      "increase supply",
      "lower prices"
    ],
    "ans": "shift the demand curve to the right",
    "explanation": ""
  },
  {
    "q": " The United Nations Development Programme (UNDP) focuses on:",
    "options": [
      "human development and poverty reduction",
      "military cooperation",
      "space exploration",
      "religious activities"
    ],
    "ans": "human development and poverty reduction",
    "explanation": ""
  }
],
  "PUTME_COMMERCE": [
  {
    "q": "Which of the following is the primary objective of commerce?",
    "options": [
      "Production of goods only",
      "Extraction of raw materials",
      "Distribution of goods and services from producers to consumers",
      "Conversion of raw materials into finished goods"
    ],
    "ans": "Distribution of goods and services from producers to consumers",
    "explanation": "Commerce's primary role is distributing goods/services from producers to consumers."
  },
  {
    "q": "A retailer buys goods worth ₦850,000 at a trade discount of 15%. What is the amount payable?",
    "options": [
      "₦700,000",
      "₦722,500",
      "₦765,000",
      "₦827,500"
    ],
    "ans": "₦722,500",
    "explanation": "850,000 x 0.85 = 722,500 after 15% trade discount."
  },
  {
    "q": "Which of the following documents gives legal authority to a carrier to deliver goods to the rightful owner?",
    "options": [
      "Invoice",
      "Delivery Note",
      "Bill of Lading",
      "Debit Note"
    ],
    "ans": "Bill of Lading",
    "explanation": "A Bill of Lading gives the carrier legal authority to deliver goods to the rightful owner."
  },
  {
    "q": "Which function is performed mainly by commercial banks?",
    "options": [
      "Printing currency",
      "Issuing treasury bills",
      "Accepting deposits and granting loans",
      "Regulating exchange rates"
    ],
    "ans": "Accepting deposits and granting loans",
    "explanation": "Accepting deposits and granting loans is the core commercial banking function."
  },
  {
    "q": "A business organization owned by two or more persons but not more than twenty is known as",
    "options": [
      "Sole proprietorship",
      "Partnership",
      "Cooperative society",
      "Public corporation"
    ],
    "ans": "Partnership",
    "explanation": "A partnership has 2-20 members."
  },
  {
    "q": "Which of the following is an invisible export?",
    "options": [
      "Cocoa",
      "Crude oil",
      "Timber",
      "Banking services"
    ],
    "ans": "Banking services",
    "explanation": "Banking services are an invisible export (a service, not a physical good)."
  },
  {
    "q": "Which type of cheque cannot be cashed across the counter?",
    "options": [
      "Open cheque",
      "Crossed cheque",
      "Order cheque",
      "Bearer cheque"
    ],
    "ans": "Crossed cheque",
    "explanation": "A crossed cheque must be paid through a bank account, not cashed at the counter."
  },
  {
    "q": "Which of the following is NOT a feature of a public limited company?",
    "options": [
      "Separate legal entity",
      "Perpetual succession",
      "Unlimited liability of shareholders",
      "Ability to raise capital through shares"
    ],
    "ans": "Unlimited liability of shareholders",
    "explanation": "PLC shareholders have LIMITED liability, not unlimited."
  },
  {
    "q": "The difference between gross profit and net profit is mainly",
    "options": [
      "Cost of sales",
      "Operating expenses",
      "Sales returns",
      "Purchases"
    ],
    "ans": "Operating expenses",
    "explanation": "Operating expenses are what's deducted from gross profit to get net profit."
  },
  {
    "q": "Which aid to trade provides protection against financial loss arising from unforeseen risks?",
    "options": [
      "Advertising",
      "Insurance",
      "Banking",
      "Warehousing"
    ],
    "ans": "Insurance",
    "explanation": "Insurance protects against financial loss from unforeseen risks."
  },
  {
    "q": "Which of the following is a function of the wholesaler?",
    "options": [
      "Produces finished goods",
      "Manufactures raw materials",
      "Breaks bulk for retailers",
      "Fixes government prices"
    ],
    "ans": "Breaks bulk for retailers",
    "explanation": "Wholesalers break bulk, buying large quantities and selling smaller amounts to retailers."
  },
  {
    "q": "The document sent by a seller to notify a buyer that his account has been credited is",
    "options": [
      "Credit Transfer Slip",
      "Debit Note",
      "Credit Note",
      "Statement of Account"
    ],
    "ans": "Credit Note",
    "explanation": "A Credit Note notifies a buyer that their account has been credited."
  },
  {
    "q": "Which pricing policy is most suitable when introducing a completely new product into a competitive market?",
    "options": [
      "Monopoly pricing",
      "Penetration pricing",
      "Cost-plus pricing",
      "Premium pricing"
    ],
    "ans": "Penetration pricing",
    "explanation": "Penetration pricing (low initial price) is standard for entering a competitive market."
  },
  {
    "q": "Which of the following encourages impulse buying?",
    "options": [
      "Warehousing",
      "Packaging only",
      "Point-of-sale display",
      "Trade association"
    ],
    "ans": "Point-of-sale display",
    "explanation": "Point-of-sale displays are designed to trigger impulse buying."
  },
  {
    "q": "The major source of finance for a sole proprietor is",
    "options": [
      "Debentures",
      "Preference shares",
      "Personal savings",
      "Public subscription"
    ],
    "ans": "Personal savings",
    "explanation": "Personal savings is the main finance source for sole proprietors."
  },
  {
    "q": "Which means of transport is most suitable for bulky, low-value goods over long distances inland?",
    "options": [
      "Air transport",
      "Pipeline transport",
      "Rail transport",
      "Helicopter transport"
    ],
    "ans": "Rail transport",
    "explanation": "Rail transport suits bulky, low-value goods over long inland distances."
  },
  {
    "q": "Which of the following is NOT an instrument of international trade?",
    "options": [
      "Bill of Exchange",
      "Letter of Credit",
      "Treasury Bill",
      "Bill of Lading"
    ],
    "ans": "Treasury Bill",
    "explanation": "A Treasury Bill is a government security, not a trade instrument."
  },
  {
    "q": "A market structure with many sellers offering differentiated products is known as",
    "options": [
      "Perfect competition",
      "Monopoly",
      "Monopolistic competition",
      "Oligopoly"
    ],
    "ans": "Monopolistic competition",
    "explanation": "Monopolistic competition has many sellers with differentiated products."
  },
  {
    "q": "Which of the following is an example of indirect tax?",
    "options": [
      "Personal Income Tax",
      "Company Income Tax",
      "Value Added Tax (VAT)",
      "Capital Gains Tax"
    ],
    "ans": "Value Added Tax (VAT)",
    "explanation": "VAT is an indirect tax (levied on goods/services, passed to the buyer)."
  },
  {
    "q": "A manufacturer appoints only one distributor in a geographical area. This method is known as",
    "options": [
      "Intensive distribution",
      "Selective distribution",
      "Exclusive distribution",
      "Wholesale distribution"
    ],
    "ans": "Exclusive distribution",
    "explanation": "Exclusive distribution appoints one distributor per geographical area."
  },
  {
    "q": "Which document accompanies goods delivered to a buyer and enables the buyer to verify the quantity received?",
    "options": [
      "Invoice",
      "Receipt",
      "Delivery Note",
      "Quotation"
    ],
    "ans": "Delivery Note",
    "explanation": "A Delivery Note accompanies goods, letting the buyer verify quantity received."
  },
  {
    "q": "Which of the following is the greatest advantage of e-commerce to consumers?",
    "options": [
      "Increased taxation",
      "Convenience of buying from any location",
      "Elimination of competition",
      "Reduced product variety"
    ],
    "ans": "Convenience of buying from any location",
    "explanation": "E-commerce's key consumer benefit is buying convenience from anywhere."
  },
  {
    "q": "Which of the following would most likely increase the working capital of a business?",
    "options": [
      "Purchase of machinery for cash",
      "Repayment of long-term loan",
      "Collection of debts from customers",
      "Payment of dividends"
    ],
    "ans": "Collection of debts from customers",
    "explanation": "Collecting debts from customers converts receivables into cash, increasing working capital."
  },
  {
    "q": "Which of the following organizations exists mainly to protect consumers against substandard products?",
    "options": [
      "Manufacturers Association of Nigeria (MAN)",
      "Nigerian Stock Exchange",
      "Consumer Protection Council",
      "Nigerian Ports Authority"
    ],
    "ans": "Consumer Protection Council",
    "explanation": "The Consumer Protection Council protects consumers against substandard products."
  },
  {
    "q": "The process by which a business identifies customer needs and satisfies them profitably is known as",
    "options": [
      "Merchandising",
      "Promotion",
      "Distribution",
      "Marketing"
    ],
    "ans": "Marketing",
    "explanation": "Marketing identifies and profitably satisfies customer needs."
  },
  {
    "q": "Which of the following is the main reason for establishing a warehouse?",
    "options": [
      "To advertise products",
      "To manufacture goods",
      "To store goods until they are needed",
      "To transport goods"
    ],
    "ans": "To store goods until they are needed",
    "explanation": "Warehouses exist mainly to store goods until they're needed."
  },
  {
    "q": "The stock exchange market is primarily concerned with the buying and selling of",
    "options": [
      "Consumer goods",
      "Foreign currencies",
      "Securities and shares",
      "Agricultural products"
    ],
    "ans": "Securities and shares",
    "explanation": "The stock exchange deals in buying/selling securities and shares."
  },
  {
    "q": "Which of the following is NOT a function of the Central Bank?",
    "options": [
      "Banker to the government",
      "Issuing legal tender",
      "Supervising commercial banks",
      "Selling goods directly to consumers"
    ],
    "ans": "Selling goods directly to consumers",
    "explanation": "Central banks don't sell goods directly to consumers."
  },
  {
    "q": "A cheque marked \"Not Negotiable\" means that",
    "options": [
      "It cannot be deposited into a bank account.",
      "The transferee cannot obtain a better title than the transferor.",
      "It cannot be crossed.",
      "It must be paid immediately."
    ],
    "ans": "The transferee cannot obtain a better title than the transferor.",
    "explanation": "'Not negotiable' means the transferee can't get better title than the transferor had."
  },
  {
    "q": "Which of the following methods of communication provides the fastest exchange of official business information across different countries?",
    "options": [
      "Postal service",
      "Courier service",
      "Electronic mail (E-mail)",
      "Surface mail"
    ],
    "ans": "Electronic mail (E-mail)",
    "explanation": "Email provides the fastest official cross-border business communication."
  },
  {
    "q": "Which of the following is an example of an intangible asset?",
    "options": [
      "Motor vehicle",
      "Goodwill",
      "Furniture",
      "Machinery"
    ],
    "ans": "Goodwill",
    "explanation": "Goodwill is a classic intangible asset."
  },
  {
    "q": "The reward paid to shareholders for investing in a company is called",
    "options": [
      "Interest",
      "Commission",
      "Dividend",
      "Premium"
    ],
    "ans": "Dividend",
    "explanation": "Dividend is the reward paid to shareholders."
  },
  {
    "q": "Which document is prepared by the seller before goods are dispatched, showing the description and prices of goods?",
    "options": [
      "Receipt",
      "Credit Note",
      "Invoice",
      "Delivery Note"
    ],
    "ans": "Invoice",
    "explanation": "An Invoice is prepared before dispatch, showing description and prices."
  },
  {
    "q": "Which of the following is a disadvantage of road transport?",
    "options": [
      "Door-to-door service",
      "Flexibility of movement",
      "High maintenance cost and traffic congestion",
      "Suitable for short-distance movement"
    ],
    "ans": "High maintenance cost and traffic congestion",
    "explanation": "High maintenance cost and traffic congestion are road transport disadvantages."
  },
  {
    "q": "A business that purchases goods directly from manufacturers and sells to retailers is known as a",
    "options": [
      "Broker",
      "Agent",
      "Wholesaler",
      "Commission merchant"
    ],
    "ans": "Wholesaler",
    "explanation": "A wholesaler buys from manufacturers and sells to retailers."
  },
  {
    "q": "Which of the following is NOT a characteristic of money?",
    "options": [
      "Durability",
      "Portability",
      "Divisibility",
      "Perishability"
    ],
    "ans": "Perishability",
    "explanation": "Money must be durable, not perishable — perishability is the opposite of a money characteristic."
  },
  {
    "q": "Which of the following documents is issued by a bank to guarantee payment to an exporter?",
    "options": [
      "Bank Draft",
      "Letter of Credit",
      "Cheque Book",
      "Standing Order"
    ],
    "ans": "Letter of Credit",
    "explanation": "A Letter of Credit is a bank's guarantee of payment to an exporter."
  },
  {
    "q": "Which of the following types of insurance provides compensation for loss resulting from theft?",
    "options": [
      "Marine Insurance",
      "Fire Insurance",
      "Burglary Insurance",
      "Fidelity Guarantee Insurance"
    ],
    "ans": "Burglary Insurance",
    "explanation": "Burglary insurance covers loss from theft."
  },
  {
    "q": "A reduction in the catalogue price of goods allowed by a manufacturer to a wholesaler is called",
    "options": [
      "Cash discount",
      "Trade discount",
      "Quantity discount",
      "Rebate"
    ],
    "ans": "Trade discount",
    "explanation": "Trade discount is a reduction off the catalogue price for trade buyers like wholesalers."
  },
  {
    "q": "Which of the following is a major advantage of containerization in international trade?",
    "options": [
      "It increases customs duties.",
      "It reduces handling costs and minimizes damage to goods.",
      "It discourages exports.",
      "It increases transit time."
    ],
    "ans": "It reduces handling costs and minimizes damage to goods.",
    "explanation": "Containerization reduces handling costs and minimizes damage to goods."
  },
  {
    "q": "Which of the following is the principal objective of advertising?",
    "options": [
      "To increase taxation",
      "To reduce production costs",
      "To create demand for goods and services",
      "To eliminate competitors"
    ],
    "ans": "To create demand for goods and services",
    "explanation": "Advertising's principal objective is creating demand for goods/services."
  },
  {
    "q": "A person who negotiates contracts on behalf of another person but does not take ownership of the goods is known as",
    "options": [
      "Retailer",
      "Wholesaler",
      "Agent",
      "Consumer"
    ],
    "ans": "Agent",
    "explanation": "An agent negotiates contracts without taking ownership of the goods."
  },
  {
    "q": "Which of the following factors is most likely to influence the choice of a suitable means of transport?",
    "options": [
      "Colour of the goods",
      "Nature, weight and value of the goods",
      "Religion of the transporter",
      "Number of employees"
    ],
    "ans": "Nature, weight and value of the goods",
    "explanation": "Nature, weight, and value of goods most influence transport mode choice."
  },
  {
    "q": "Which of the following business organizations has the greatest ability to raise capital?",
    "options": [
      "Sole proprietorship",
      "Partnership",
      "Cooperative society",
      "Public limited company"
    ],
    "ans": "Public limited company",
    "explanation": "Public limited companies can raise the most capital, via public share issues."
  },
  {
    "q": "Which of the following is NOT a function of packaging?",
    "options": [
      "Protection of goods",
      "Identification of products",
      "Promotion of sales",
      "Fixing market prices"
    ],
    "ans": "Fixing market prices",
    "explanation": "Fixing market prices is not a packaging function."
  },
  {
    "q": "Which of the following is regarded as the oldest form of exchange?",
    "options": [
      "Banking",
      "Money economy",
      "Barter system",
      "Electronic payment"
    ],
    "ans": "Barter system",
    "explanation": "Barter is the oldest known form of exchange."
  },
  {
    "q": "Which of the following is an advantage of hire purchase to consumers?",
    "options": [
      "Immediate ownership without payment",
      "Payment for goods by instalments",
      "Goods are obtained free of charge",
      "Lower total cost than cash purchase in all cases"
    ],
    "ans": "Payment for goods by instalments",
    "explanation": "Hire purchase lets consumers pay for goods in instalments."
  },
  {
    "q": "Which of the following is the major function of a chamber of commerce?",
    "options": [
      "Manufacturing goods",
      "Fixing salaries of workers",
      "Promoting and protecting the interests of businesses",
      "Collecting taxes"
    ],
    "ans": "Promoting and protecting the interests of businesses",
    "explanation": "A chamber of commerce promotes and protects business interests."
  },
  {
    "q": "Which of the following is a current liability?",
    "options": [
      "Building",
      "Goodwill",
      "Motor vehicle",
      "Bank overdraft"
    ],
    "ans": "Bank overdraft",
    "explanation": "A bank overdraft is a current liability."
  },
  {
    "q": "A business receives ₦600,000 as cash sales and ₦900,000 as credit sales during a month. If customers later return goods worth ₦100,000 from the credit sales, the net sales for the month will be",
    "options": [
      "₦1,300,000",
      "₦1,400,000",
      "₦1,500,000",
      "₦1,600,000"
    ],
    "ans": "₦1,400,000",
    "explanation": "600,000 + 900,000 - 100,000 returns = 1,400,000 net sales."
  },
  {
    "q": "Which of the following is the greatest disadvantage of a sole proprietorship?",
    "options": [
      "Prompt decision-making",
      "Business secrecy",
      "Close supervision",
      "Unlimited liability"
    ],
    "ans": "Unlimited liability",
    "explanation": "Unlimited liability is the sole proprietor's biggest risk/disadvantage."
  },
  {
    "q": "Which of the following documents acknowledges payment received from a customer?",
    "options": [
      "Invoice",
      "Debit Note",
      "Receipt",
      "Delivery Note"
    ],
    "ans": "Receipt",
    "explanation": "A Receipt acknowledges payment received."
  },
  {
    "q": "The amount by which current assets exceed current liabilities is known as",
    "options": [
      "Fixed capital",
      "Authorized capital",
      "Working capital",
      "Loan capital"
    ],
    "ans": "Working capital",
    "explanation": "Working capital = current assets minus current liabilities."
  },
  {
    "q": "Which of the following is NOT a function of a retailer?",
    "options": [
      "Breaking bulk",
      "Providing after-sales services",
      "Granting credit to customers",
      "Manufacturing consumer goods"
    ],
    "ans": "Manufacturing consumer goods",
    "explanation": "Manufacturing consumer goods is not a retailer function."
  },
  {
    "q": "The process by which a company buys back its own shares from shareholders is known as",
    "options": [
      "Share conversion",
      "Share buy-back",
      "Share consolidation",
      "Share splitting"
    ],
    "ans": "Share buy-back",
    "explanation": "A company buying back its own shares is a share buy-back."
  },
  {
    "q": "Which of the following is the most suitable means of transport for transporting crude oil?",
    "options": [
      "Rail transport",
      "Road transport",
      "Air transport",
      "Pipeline transport"
    ],
    "ans": "Pipeline transport",
    "explanation": "Pipeline transport is standard for moving crude oil."
  },
  {
    "q": "Which of the following is classified as a fixed asset?",
    "options": [
      "Cash at bank",
      "Stock of goods",
      "Debtors",
      "Land and buildings"
    ],
    "ans": "Land and buildings",
    "explanation": "Land and buildings are classified as fixed assets."
  },
  {
    "q": "A business with an annual turnover exceeding its break-even point is most likely to",
    "options": [
      "Make a loss",
      "Earn a profit",
      "Suspend operations",
      "Become insolvent"
    ],
    "ans": "Earn a profit",
    "explanation": "Turnover exceeding break-even point means the business is earning a profit."
  },
  {
    "q": "Which of the following is NOT a feature of money?",
    "options": [
      "Acceptability",
      "Divisibility",
      "Portability",
      "Colour uniformity"
    ],
    "ans": "Colour uniformity",
    "explanation": "Colour uniformity is not a defining characteristic of money."
  },
  {
    "q": "Which of the following is the main function of the Nigerian Stock Exchange?",
    "options": [
      "Collect taxes",
      "Regulate commercial banks",
      "Facilitate the buying and selling of securities",
      "Issue banknotes"
    ],
    "ans": "Facilitate the buying and selling of securities",
    "explanation": "The Nigerian Stock Exchange facilitates buying/selling of securities."
  },
  {
    "q": "Which of the following insurance policies covers loss caused by dishonesty of employees?",
    "options": [
      "Marine Insurance",
      "Fire Insurance",
      "Fidelity Guarantee Insurance",
      "Burglary Insurance"
    ],
    "ans": "Fidelity Guarantee Insurance",
    "explanation": "Fidelity Guarantee Insurance covers losses from employee dishonesty."
  },
  {
    "q": "Which method of payment instructs a bank to pay a fixed amount regularly to a named beneficiary?",
    "options": [
      "Bank draft",
      "Certified cheque",
      "Letter of credit",
      "Standing order"
    ],
    "ans": "Standing order",
    "explanation": "A standing order instructs a bank to pay a fixed amount regularly."
  },
  {
    "q": "Which of the following is an example of home trade?",
    "options": [
      "Nigeria importing machinery from China",
      "Ghana exporting cocoa to Nigeria",
      "Kano selling groundnuts to Lagos",
      "South Africa importing oil from Nigeria"
    ],
    "ans": "Kano selling groundnuts to Lagos",
    "explanation": "Kano to Lagos trade is domestic (home) trade, within the same country."
  },
  {
    "q": "Which of the following is an indirect aid to trade?",
    "options": [
      "Manufacturing",
      "Mining",
      "Banking",
      "Farming"
    ],
    "ans": "Banking",
    "explanation": "Banking is an indirect aid to trade (supports trade rather than being trade itself)."
  },
  {
    "q": "Which of the following is most likely to increase the demand for a product?",
    "options": [
      "Increase in price with constant income",
      "Effective advertising campaign",
      "Increase in taxation",
      "Poor packaging"
    ],
    "ans": "Effective advertising campaign",
    "explanation": "Effective advertising campaigns increase demand for a product."
  },
  {
    "q": "Which of the following is the principal objective of warehousing?",
    "options": [
      "To reduce production cost",
      "To advertise goods",
      "To ensure continuous availability of goods",
      "To determine selling prices"
    ],
    "ans": "To ensure continuous availability of goods",
    "explanation": "Warehousing's principal objective is ensuring continuous availability of goods."
  },
  {
    "q": "Which of the following business organizations enjoys perpetual succession?",
    "options": [
      "Sole proprietorship",
      "Partnership",
      "Cooperative society",
      "Limited liability company"
    ],
    "ans": "Limited liability company",
    "explanation": "Limited liability companies enjoy perpetual succession, unaffected by owner changes."
  },
  {
    "q": "Which document is prepared by the buyer requesting the seller to supply certain goods?",
    "options": [
      "Quotation",
      "Invoice",
      "Order",
      "Credit Note"
    ],
    "ans": "Order",
    "explanation": "An Order is sent by a buyer requesting the seller to supply goods."
  },
  {
    "q": "A business transaction in which payment is made immediately after delivery is known as",
    "options": [
      "Hire purchase",
      "Cash sale",
      "Deferred payment",
      "Instalment sale"
    ],
    "ans": "Cash sale",
    "explanation": "A cash sale is paid for immediately on delivery."
  },
  {
    "q": "Which of the following is NOT a function of advertising?",
    "options": [
      "Creating awareness",
      "Persuading consumers",
      "Informing the public",
      "Manufacturing products"
    ],
    "ans": "Manufacturing products",
    "explanation": "Manufacturing products is not a function of advertising."
  },
  {
    "q": "Which of the following factors determines the location of a retail shop most?",
    "options": [
      "Colour of the building",
      "Accessibility to customers",
      "Age of the owner",
      "Number of competitors alone"
    ],
    "ans": "Accessibility to customers",
    "explanation": "Accessibility to customers is the top factor in retail shop location."
  },
  {
    "q": "Which of the following is a major source of internal finance for a company?",
    "options": [
      "Bank overdraft",
      "Debentures",
      "Retained earnings",
      "Mortgage loan"
    ],
    "ans": "Retained earnings",
    "explanation": "Retained earnings are a business's main internal finance source."
  },
  {
    "q": "Which of the following is an example of an external economy of scale?",
    "options": [
      "Improved managerial efficiency within the firm",
      "Better supervision of workers",
      "Development of good roads and infrastructure",
      "Better production planning"
    ],
    "ans": "Development of good roads and infrastructure",
    "explanation": "External economies of scale come from outside the firm, like infrastructure development."
  },
  {
    "q": "Which of the following is a major function of branding?",
    "options": [
      "To reduce transportation costs",
      "To eliminate competitors completely",
      "To distinguish one product from another",
      "To increase import duties"
    ],
    "ans": "To distinguish one product from another",
    "explanation": "Branding's major function is distinguishing one product from another."
  },
  {
    "q": "A trader purchased goods worth ₦480,000 subject to a 10% trade discount and later received a 5% cash discount for early payment. How much did the trader finally pay?",
    "options": [
      "₦410,400",
      "₦421,200",
      "₦410,400",
      "₦432,000"
    ],
    "ans": "₦410,400",
    "explanation": "480,000 x 0.9 = 432,000 after trade discount, x 0.95 = 410,400 after cash discount."
  },
  {
    "q": "Which of the following is the primary objective of a consumers' cooperative society?",
    "options": [
      "To maximize profit for shareholders",
      "To manufacture goods at low cost",
      "To provide goods to members at reasonable prices",
      "To export locally produced goods"
    ],
    "ans": "To provide goods to members at reasonable prices",
    "explanation": "Consumer cooperatives exist to supply members goods at reasonable prices."
  },
  {
    "q": "Which of the following would most likely reduce the liquidity of a business?",
    "options": [
      "Collection of debts from customers",
      "Purchase of machinery with cash",
      "Increase in cash sales",
      "Sale of old equipment for cash"
    ],
    "ans": "Purchase of machinery with cash",
    "explanation": "Paying cash for machinery reduces available cash, lowering liquidity."
  },
  {
    "q": "A company issued 500,000 ordinary shares of ₦2.00 each at ₦2.50 per share. The excess of ₦0.50 per share is credited to",
    "options": [
      "Revenue Reserve",
      "General Reserve",
      "Share Premium Account",
      "Capital Redemption Reserve"
    ],
    "ans": "Share Premium Account",
    "explanation": "The excess over nominal value on share issue goes to the Share Premium Account."
  },
  {
    "q": "Which of the following is NOT an advantage of road transport?",
    "options": [
      "Door-to-door service",
      "Flexibility in routing",
      "Suitable for short distances",
      "Lowest cost for transporting bulky goods over long distances"
    ],
    "ans": "Lowest cost for transporting bulky goods over long distances",
    "explanation": "Road transport is NOT the lowest-cost option for bulky goods over long distances — rail/sea usually are."
  },
  {
    "q": "The amount charged by an agent for services rendered is known as",
    "options": [
      "Interest",
      "Rent",
      "Commission",
      "Dividend"
    ],
    "ans": "Commission",
    "explanation": "Commission is the fee paid to an agent for services rendered."
  },
  {
    "q": "Which of the following documents is prepared by a seller to correct an overcharge made to a customer?",
    "options": [
      "Debit Note",
      "Credit Note",
      "Statement of Account",
      "Receipt"
    ],
    "ans": "Credit Note",
    "explanation": "A Credit Note is issued to reduce a buyer's balance after an overcharge."
  },
  {
    "q": "Which of the following is an example of an invisible import?",
    "options": [
      "Rice imported from Thailand",
      "Imported vehicles",
      "Payment for foreign insurance services",
      "Imported machinery"
    ],
    "ans": "Payment for foreign insurance services",
    "explanation": "Payment for foreign insurance services is an invisible import (a service, not physical goods)."
  },
  {
    "q": "Which of the following is the major function of a warehouse warrant?",
    "options": [
      "It serves as a cheque.",
      "It authorizes payment for goods.",
      "It serves as evidence of ownership of goods stored in a warehouse.",
      "It transfers ownership of land."
    ],
    "ans": "It serves as evidence of ownership of goods stored in a warehouse.",
    "explanation": "A warehouse warrant serves as evidence of ownership of stored goods."
  },
  {
    "q": "A fall in the value of a country's currency relative to foreign currencies is called",
    "options": [
      "Appreciation",
      "Depreciation",
      "Inflation",
      "Deflation"
    ],
    "ans": "Depreciation",
    "explanation": "A fall in currency value relative to others is depreciation."
  },
  {
    "q": "Which of the following is NOT a function of the wholesaler?",
    "options": [
      "Financing retailers through credit",
      "Breaking bulk",
      "Warehousing goods",
      "Producing finished goods"
    ],
    "ans": "Producing finished goods",
    "explanation": "Producing finished goods is a manufacturer's job, not a wholesaler's."
  },
  {
    "q": "Which type of retail outlet mainly deals in self-service?",
    "options": [
      "Hawking",
      "Kiosk",
      "Supermarket",
      "Market stall"
    ],
    "ans": "Supermarket",
    "explanation": "Supermarkets are the classic self-service retail format."
  },
  {
    "q": "Which of the following is a source of long-term finance for a company?",
    "options": [
      "Bank overdraft",
      "Trade credit",
      "Debentures",
      "Outstanding expenses"
    ],
    "ans": "Debentures",
    "explanation": "Debentures are a long-term finance source (borrowed capital)."
  },
  {
    "q": "Which of the following best explains the term \"goodwill\" in business?",
    "options": [
      "Cash kept in the bank",
      "Unsold stock of goods",
      "The reputation of a business that attracts customers",
      "The value of machinery"
    ],
    "ans": "The reputation of a business that attracts customers",
    "explanation": "Goodwill is the reputation that attracts and retains customers."
  },
  {
    "q": "Which of the following is NOT a characteristic of a partnership?",
    "options": [
      "Mutual agency",
      "Profit sharing",
      "Limited number of partners",
      "Perpetual succession"
    ],
    "ans": "Perpetual succession",
    "explanation": "Partnerships dissolve on a partner's death/withdrawal — they don't have perpetual succession."
  },
  {
    "q": "A business sells goods costing ₦480,000 for ₦600,000. What is the gross profit percentage based on cost?",
    "options": [
      "20%",
      "22.5%",
      "25%",
      "30%"
    ],
    "ans": "25%",
    "explanation": "Profit = 600,000-480,000 = 120,000; on cost: 120,000/480,000 = 25%."
  },
  {
    "q": "Which of the following is the principal reason for branding products?",
    "options": [
      "To increase production cost",
      "To reduce competition completely",
      "To distinguish products from competing brands",
      "To eliminate advertising"
    ],
    "ans": "To distinguish products from competing brands",
    "explanation": "Branding's main purpose is distinguishing products from competitors' brands."
  },
  {
    "q": "Which of the following is NOT a function of insurance?",
    "options": [
      "Indemnification",
      "Risk sharing",
      "Financial protection",
      "Elimination of all business risks"
    ],
    "ans": "Elimination of all business risks",
    "explanation": "Insurance compensates for loss but can't eliminate all business risk entirely."
  },
  {
    "q": "Which of the following is the greatest advantage of specialization in commerce?",
    "options": [
      "Reduction in customers",
      "Increased efficiency and expertise",
      "Higher transportation costs",
      "Elimination of competition"
    ],
    "ans": "Increased efficiency and expertise",
    "explanation": "Specialization's key advantage is increased efficiency and expertise."
  },
  {
    "q": "Which of the following is classified as a trade association in Nigeria?",
    "options": [
      "Central Bank of Nigeria",
      "Nigerian Customs Service",
      "Manufacturers Association of Nigeria (MAN)",
      "Federal Inland Revenue Service"
    ],
    "ans": "Manufacturers Association of Nigeria (MAN)",
    "explanation": "Manufacturers Association of Nigeria (MAN) is a trade association."
  },
  {
    "q": "Which of the following methods of payment is safest for settling international transactions?",
    "options": [
      "Cash payment",
      "Personal cheque",
      "Letter of Credit",
      "Postal order"
    ],
    "ans": "Letter of Credit",
    "explanation": "A Letter of Credit is the safest payment method for international trade."
  },
  {
    "q": "Which of the following is an example of variable cost?",
    "options": [
      "Factory building rent",
      "Insurance premium",
      "Cost of raw materials used in production",
      "Salaries of permanent directors"
    ],
    "ans": "Cost of raw materials used in production",
    "explanation": "Raw materials cost varies directly with output — a classic variable cost."
  },
  {
    "q": "Which of the following factors would most likely increase consumer demand for a product?",
    "options": [
      "Poor quality packaging",
      "Increase in price while income remains constant",
      "Increase in consumers' disposable income",
      "High unemployment"
    ],
    "ans": "Increase in consumers' disposable income",
    "explanation": "Rising disposable income typically increases consumer demand."
  },
  {
    "q": "Which of the following is the major purpose of trade fairs?",
    "options": [
      "To collect taxes from businesses",
      "To regulate commercial banks",
      "To promote products and establish business contacts",
      "To determine exchange rates"
    ],
    "ans": "To promote products and establish business contacts",
    "explanation": "Trade fairs promote products and help establish business contacts."
  },
  {
    "q": "A retailer purchased goods worth ₦720,000 and sold them for ₦900,000. If operating expenses amounted to ₦60,000, what is the net profit?",
    "options": [
      "₦100,000",
      "₦120,000",
      "₦120,000",
      "₦180,000"
    ],
    "ans": "₦120,000",
    "explanation": "Gross profit 900,000-720,000=180,000, less 60,000 expenses = 120,000 net profit."
  },
  {
    "q": "Which of the following best describes commerce?",
    "options": [
      "The extraction of minerals from the earth",
      "The cultivation of crops and rearing of animals",
      "The transformation of raw materials into finished goods",
      "The activities involved in the distribution and exchange of goods and services"
    ],
    "ans": "The activities involved in the distribution and exchange of goods and services",
    "explanation": "Commerce is best described as the activities involved in distributing/exchanging goods and services."
  },
  {
    "q": "A business has current assets of ₦3,250,000 and current liabilities of ₦1,850,000. What is its working capital?",
    "options": [
      "₦1,250,000",
      "₦1,400,000",
      "₦1,850,000",
      "₦3,250,000"
    ],
    "ans": "₦1,400,000",
    "explanation": "3,250,000 - 1,850,000 = 1,400,000 working capital."
  },
  {
    "q": "Which of the following business organizations is most suitable for providing essential public utilities such as electricity and water?",
    "options": [
      "Sole proprietorship",
      "Partnership",
      "Cooperative society",
      "Public corporation"
    ],
    "ans": "Public corporation",
    "explanation": "Public corporations typically provide essential public utilities like electricity/water."
  },
  {
    "q": "A trader bought 500 bags of rice at ₦82,000 per bag and sold each at ₦95,000. What was the total gross profit?",
    "options": [
      "₦5,500,000",
      "₦6,000,000",
      "₦6,500,000",
      "₦7,000,000"
    ],
    "ans": "₦6,500,000",
    "explanation": "Cost 500x82,000=41,000,000; revenue 500x95,000=47,500,000; profit=6,500,000."
  },
  {
    "q": "Which of the following is NOT a function of the Nigerian Ports Authority?",
    "options": [
      "Providing port facilities",
      "Managing harbours",
      "Ensuring safe navigation in ports",
      "Manufacturing export goods"
    ],
    "ans": "Manufacturing export goods",
    "explanation": "Manufacturing export goods isn't an NPA function — NPA manages ports/harbours."
  },
  {
    "q": "The process whereby one company takes control of another company by purchasing a majority of its shares is called",
    "options": [
      "Amalgamation",
      "Acquisition",
      "Liquidation",
      "Privatization"
    ],
    "ans": "Acquisition",
    "explanation": "Acquisition is one company taking control by buying a majority of another's shares."
  },
  {
    "q": "Which of the following is regarded as the safest investment during periods of economic uncertainty?",
    "options": [
      "Ordinary shares",
      "Preference shares",
      "Treasury Bills",
      "Debentures"
    ],
    "ans": "Treasury Bills",
    "explanation": "Treasury Bills are considered the safest investment during economic uncertainty."
  },
  {
    "q": "Which of the following documents is issued by a carrier acknowledging receipt of goods for shipment?",
    "options": [
      "Invoice",
      "Delivery Note",
      "Bill of Lading",
      "Consular Invoice"
    ],
    "ans": "Bill of Lading",
    "explanation": "A Bill of Lading is issued by a carrier acknowledging receipt of goods for shipment."
  },
  {
    "q": "A reduction in the selling price of goods to encourage quick payment is known as",
    "options": [
      "Trade discount",
      "Cash discount",
      "Quantity discount",
      "Seasonal discount"
    ],
    "ans": "Cash discount",
    "explanation": "Cash discount reduces price to encourage prompt payment."
  },
  {
    "q": "Which of the following is an advantage of specialization to a retailer?",
    "options": [
      "Increased production costs",
      "Higher storage expenses",
      "Better knowledge of products sold",
      "Elimination of competition"
    ],
    "ans": "Better knowledge of products sold",
    "explanation": "Specialization gives a retailer better product knowledge — a key advantage."
  },
  {
    "q": "Which of the following is NOT a feature of e-commerce?",
    "options": [
      "Online payment",
      "Electronic communication",
      "Internet-based transactions",
      "Face-to-face bargaining before every sale"
    ],
    "ans": "Face-to-face bargaining before every sale",
    "explanation": "Face-to-face bargaining before every sale is NOT a feature of e-commerce."
  },
  {
    "q": "A company issued 400,000 ordinary shares of ₦5 each. What is its issued share capital?",
    "options": [
      "₦400,000",
      "₦800,000",
      "₦1,000,000",
      "₦2,000,000"
    ],
    "ans": "₦2,000,000",
    "explanation": "400,000 shares x N5 = N2,000,000 issued share capital."
  },
  {
    "q": "Which of the following is the major function of a chamber of commerce?",
    "options": [
      "Fixing prices of goods",
      "Employing workers for industries",
      "Promoting commercial and industrial interests",
      "Granting import licences"
    ],
    "ans": "Promoting commercial and industrial interests",
    "explanation": "A chamber of commerce promotes commercial and industrial interests."
  },
  {
    "q": "Which of the following is an example of an external source of finance?",
    "options": [
      "Retained earnings",
      "Sale of obsolete equipment",
      "Personal savings",
      "Bank loan"
    ],
    "ans": "Bank loan",
    "explanation": "A bank loan is an external (outside the business) finance source."
  },
  {
    "q": "Which of the following is most likely to increase the sales of seasonal products?",
    "options": [
      "Reduced publicity",
      "High taxation",
      "Intensive advertising before the season",
      "Increased import duty"
    ],
    "ans": "Intensive advertising before the season",
    "explanation": "Intensive advertising before the season boosts sales of seasonal products."
  },
  {
    "q": "Which of the following is NOT an objective of warehousing?",
    "options": [
      "Stabilization of prices",
      "Protection of goods",
      "Ensuring regular supply",
      "Manufacturing finished goods"
    ],
    "ans": "Manufacturing finished goods",
    "explanation": "Manufacturing finished goods isn't a warehousing objective."
  },
  {
    "q": "Which of the following insurance policies compensates an employer against losses caused by dishonest employees?",
    "options": [
      "Marine Insurance",
      "Fire Insurance",
      "Fidelity Guarantee Insurance",
      "Motor Vehicle Insurance"
    ],
    "ans": "Fidelity Guarantee Insurance",
    "explanation": "Fidelity Guarantee Insurance compensates employers for losses from dishonest employees."
  },
  {
    "q": "Which one of the following methods of transport is least affected by traffic congestion?",
    "options": [
      "Road",
      "Rail",
      "Inland waterways",
      "Air transport"
    ],
    "ans": "Air transport",
    "explanation": "Air transport, being airborne, is least affected by ground traffic congestion."
  },
  {
    "q": "Which of the following is a major function of the Central Bank in controlling inflation?",
    "options": [
      "Producing consumer goods",
      "Building roads",
      "Regulating money supply through monetary policy",
      "Importing food items"
    ],
    "ans": "Regulating money supply through monetary policy",
    "explanation": "Central Bank controls inflation mainly by regulating money supply through monetary policy."
  },
  {
    "q": "A trader purchased goods worth ₦960,000 less 20% trade discount. How much did the trader actually pay before any cash discount?",
    "options": [
      "₦672,000",
      "₦768,000",
      "₦792,000",
      "₦864,000"
    ],
    "ans": "₦768,000",
    "explanation": "960,000 x 0.8 = 768,000 after 20% trade discount."
  },
  {
    "q": "Which of the following is NOT an example of a public utility?",
    "options": [
      "Electricity supply",
      "Water supply",
      "Postal service",
      "Shoe manufacturing"
    ],
    "ans": "Shoe manufacturing",
    "explanation": "Shoe manufacturing is production, not a public utility."
  },
  {
    "q": "Which of the following is the greatest benefit of branding to producers?",
    "options": [
      "It increases transportation costs.",
      "It reduces production automatically.",
      "It creates product identity and customer loyalty.",
      "It eliminates all competitors."
    ],
    "ans": "It creates product identity and customer loyalty.",
    "explanation": "Branding's greatest benefit to producers is creating identity and customer loyalty."
  },
  {
    "q": "Which of the following is most likely to discourage smuggling?",
    "options": [
      "High import duties",
      "Efficient border surveillance and moderate tariffs",
      "Scarcity of goods",
      "High inflation"
    ],
    "ans": "Efficient border surveillance and moderate tariffs",
    "explanation": "Efficient border surveillance and moderate tariffs discourage smuggling."
  },
  {
    "q": "Which of the following is an example of direct service?",
    "options": [
      "Banking",
      "Insurance",
      "Hairdressing",
      "Warehousing"
    ],
    "ans": "Hairdressing",
    "explanation": "Hairdressing is a direct (personal) service rendered directly to the customer."
  },
  {
    "q": "A retailer sold goods for ₦1,800,000 which cost ₦1,350,000. If operating expenses amounted to ₦180,000, the net profit was",
    "options": [
      "₦180,000",
      "₦225,000",
      "₦270,000",
      "₦450,000"
    ],
    "ans": "₦270,000",
    "explanation": "Gross profit 1,800,000-1,350,000=450,000, less 180,000 expenses = 270,000 net profit."
  },
  {
    "q": "Which of the following best explains the concept of commerce?",
    "options": [
      "It is concerned only with buying and selling.",
      "It deals only with the production of goods.",
      "It involves only transportation and communication.",
      "It comprises all activities that facilitate the distribution and exchange of goods and services from producers to consumers."
    ],
    "ans": "It comprises all activities that facilitate the distribution and exchange of goods and services from producers to consumers.",
    "explanation": "Commerce comprises all activities facilitating distribution/exchange from producer to consumer."
  },
  {
    "q": "Which of the following is the principal objective of consumer protection agencies?",
    "options": [
      "To maximize producers' profits",
      "To regulate political activities",
      "To safeguard consumers against unfair trade practices",
      "To increase government revenue"
    ],
    "ans": "To safeguard consumers against unfair trade practices",
    "explanation": "Consumer protection agencies exist to safeguard against unfair trade practices."
  },
  {
    "q": "A business purchased goods worth ₦2,500,000 on credit. It paid ₦1,600,000 immediately and settled the balance within the discount period, enjoying a 5% cash discount. How much did the business finally pay?",
    "options": [
      "₦2,455,000",
      "₦2,455,000",
      "₦2,375,000",
      "₦2,500,000"
    ],
    "ans": "₦2,455,000",
    "explanation": "2,500,000-1,600,000=900,000 balance; 900,000 x 0.95 = 855,000; total paid = 1,600,000+855,000=2,455,000."
  },
  {
    "q": "Which of the following is NOT a function of the wholesaler?",
    "options": [
      "Financing retailers through credit facilities",
      "Warehousing goods",
      "Breaking bulk for retailers",
      "Determining government monetary policy"
    ],
    "ans": "Determining government monetary policy",
    "explanation": "Determining monetary policy is a central bank function, not a wholesaler's."
  },
  {
    "q": "The process by which government transfers ownership of public enterprises to private investors is known as",
    "options": [
      "Commercialization",
      "Nationalization",
      "Privatization",
      "Liberalization"
    ],
    "ans": "Privatization",
    "explanation": "Privatization is government transferring public enterprise ownership to private investors."
  },
  {
    "q": "Which of the following documents is issued by a buyer when returning damaged goods to the seller?",
    "options": [
      "Credit Note",
      "Debit Note",
      "Invoice",
      "Receipt"
    ],
    "ans": "Debit Note",
    "explanation": "A buyer issues a Debit Note when returning goods, notifying the supplier of the reduced balance owed."
  },
  {
    "q": "A major advantage of containerization in international trade is that it",
    "options": [
      "Increases customs duties",
      "Encourages pilferage",
      "Reduces handling cost and transit time",
      "Eliminates insurance"
    ],
    "ans": "Reduces handling cost and transit time",
    "explanation": "Containerization mainly reduces handling costs and transit time."
  },
  {
    "q": "Which of the following is an example of a deferred payment system?",
    "options": [
      "Cash purchase",
      "Hire purchase",
      "Barter trade",
      "Counter trade"
    ],
    "ans": "Hire purchase",
    "explanation": "Hire purchase is a classic deferred payment system."
  },
  {
    "q": "The minimum number of persons required to form a public limited company is",
    "options": [
      "Two",
      "Three",
      "Seven",
      "Twenty"
    ],
    "ans": "Seven",
    "explanation": "Nigerian commerce curriculum states seven persons minimum for a public limited company."
  },
  {
    "q": "Which of the following is regarded as the oldest aid to trade?",
    "options": [
      "Banking",
      "Insurance",
      "Transportation",
      "Advertising"
    ],
    "ans": "Transportation",
    "explanation": "Transportation is regarded as the oldest aid to trade."
  },
  {
    "q": "A company whose liabilities exceed its assets is said to be",
    "options": [
      "Profitable",
      "Liquid",
      "Insolvent",
      "Efficient"
    ],
    "ans": "Insolvent",
    "explanation": "A company whose liabilities exceed its assets is insolvent."
  },
  {
    "q": "Which of the following is NOT a feature of ordinary shares?",
    "options": [
      "Voting rights",
      "Dividend depends on profit",
      "Shareholders are owners of the company",
      "Fixed annual dividend"
    ],
    "ans": "Fixed annual dividend",
    "explanation": "Ordinary shares don't carry a fixed dividend — that's a feature of preference shares."
  },
  {
    "q": "Which of the following organizations regulates activities in the Nigerian capital market?",
    "options": [
      "Central Bank of Nigeria",
      "Securities and Exchange Commission (SEC)",
      "Federal Inland Revenue Service",
      "Nigerian Customs Service"
    ],
    "ans": "Securities and Exchange Commission (SEC)",
    "explanation": "The Securities and Exchange Commission (SEC) regulates Nigeria's capital market."
  },
  {
    "q": "The amount paid by an insurer to restore the insured to the financial position occupied before a loss is known as",
    "options": [
      "Premium",
      "Contribution",
      "Indemnity",
      "Compensation fee"
    ],
    "ans": "Indemnity",
    "explanation": "Indemnity means restoring the insured to their pre-loss financial position."
  },
  {
    "q": "Which of the following is NOT an example of current assets?",
    "options": [
      "Cash at bank",
      "Stock of goods",
      "Trade receivables",
      "Factory building"
    ],
    "ans": "Factory building",
    "explanation": "A factory building is a fixed asset, not a current asset."
  },
  {
    "q": "The process of informing potential customers about the availability and usefulness of a product is called",
    "options": [
      "Merchandising",
      "Warehousing",
      "Promotion",
      "Packaging"
    ],
    "ans": "Promotion",
    "explanation": "Promotion informs potential customers about a product's availability and usefulness."
  },
  {
    "q": "A trader bought goods worth ₦960,000 less 15% trade discount. If he later received a further 4% cash discount, how much did he eventually pay?",
    "options": [
      "₦783,360",
      "₦783,360",
      "₦816,000",
      "₦921,600"
    ],
    "ans": "₦783,360",
    "explanation": "960,000 x 0.85 = 816,000 after trade discount; x 0.96 = 783,360 after cash discount."
  },
  {
    "q": "Which of the following is the greatest disadvantage of air transport?",
    "options": [
      "High speed",
      "Safety",
      "High operating cost",
      "Reliability"
    ],
    "ans": "High operating cost",
    "explanation": "High operating cost is air transport's biggest disadvantage."
  },
  {
    "q": "Which of the following is a characteristic of a cheque?",
    "options": [
      "It earns interest automatically.",
      "It is issued only by the Central Bank.",
      "It is an order by a customer directing a bank to pay a specified sum.",
      "It can only be used internationally."
    ],
    "ans": "It is an order by a customer directing a bank to pay a specified sum.",
    "explanation": "A cheque is an order from a customer directing their bank to pay a specified sum."
  },
  {
    "q": "Which of the following factors will most likely increase the demand for luxury goods?",
    "options": [
      "Fall in consumers' income",
      "Increase in disposable income",
      "Rise in unemployment",
      "Increase in taxation"
    ],
    "ans": "Increase in disposable income",
    "explanation": "Rising disposable income increases demand for luxury goods."
  },
  {
    "q": "Which of the following is the primary function of advertising agencies?",
    "options": [
      "Manufacturing products",
      "Warehousing finished goods",
      "Planning and executing advertising campaigns",
      "Transporting goods"
    ],
    "ans": "Planning and executing advertising campaigns",
    "explanation": "Advertising agencies plan and execute advertising campaigns."
  },
  {
    "q": "A retailer sells directly to the final consumer because the retailer",
    "options": [
      "Produces the goods sold",
      "Is the last link in the chain of distribution",
      "Fixes market prices",
      "Imports all products"
    ],
    "ans": "Is the last link in the chain of distribution",
    "explanation": "A retailer sells directly to the final consumer, the last link in distribution."
  },
  {
    "q": "Which of the following is NOT a function of the Central Bank?",
    "options": [
      "Banker to commercial banks",
      "Issuing legal tender",
      "Managing external reserves",
      "Accepting savings deposits from the general public"
    ],
    "ans": "Accepting savings deposits from the general public",
    "explanation": "Accepting savings deposits from the public is a commercial bank function, not a central bank one."
  },
  {
    "q": "Which of the following is an advantage of e-banking?",
    "options": [
      "It eliminates fraud completely.",
      "It removes the need for banks.",
      "It provides customers with 24-hour access to banking services.",
      "It prevents online transactions."
    ],
    "ans": "It provides customers with 24-hour access to banking services.",
    "explanation": "E-banking's key advantage is 24-hour access to banking services."
  },
  {
    "q": "The goodwill of a business is best described as",
    "options": [
      "The total value of its buildings",
      "The amount of cash in hand",
      "The value of unsold stock",
      "The reputation that enables it to earn higher profits than similar businesses"
    ],
    "ans": "The reputation that enables it to earn higher profits than similar businesses",
    "explanation": "Goodwill is the reputation that lets a business earn higher profits than similar rivals."
  },
  {
    "q": "Which of the following best explains why commerce is indispensable in a modern economy?",
    "options": [
      "It replaces production activities.",
      "It discourages specialization.",
      "It eliminates competition among producers.",
      "It bridges the gap between producers and consumers by facilitating exchange and distribution."
    ],
    "ans": "It bridges the gap between producers and consumers by facilitating exchange and distribution.",
    "explanation": "Commerce bridges producers and consumers via exchange and distribution."
  },
  {
    "q": "Which of the following is the most important function of warehousing during periods of seasonal production?",
    "options": [
      "To increase the selling price of goods",
      "To encourage hoarding by consumers",
      "To ensure continuous supply of goods throughout the year",
      "To reduce consumers' income"
    ],
    "ans": "To ensure continuous supply of goods throughout the year",
    "explanation": "Warehousing ensures continuous supply despite seasonal production."
  },
  {
    "q": "Which of the following documents is issued by a seller to indicate the amount owed after previous transactions?",
    "options": [
      "Delivery Note",
      "Receipt",
      "Quotation",
      "Statement of Account"
    ],
    "ans": "Statement of Account",
    "explanation": "A Statement of Account shows the amount currently owed after prior transactions."
  },
  {
    "q": "Which of the following is the major advantage of specialization in commerce?",
    "options": [
      "Reduction in employment opportunities",
      "Increased efficiency and productivity",
      "Elimination of competition",
      "Increase in production cost"
    ],
    "ans": "Increased efficiency and productivity",
    "explanation": "Specialization's major commercial advantage is increased efficiency and productivity."
  },
  {
    "q": "Which of the following business organizations has the greatest continuity despite the death of its owners?",
    "options": [
      "Sole proprietorship",
      "Partnership",
      "Cooperative society",
      "Public limited company"
    ],
    "ans": "Public limited company",
    "explanation": "Public limited companies have the greatest continuity, unaffected by an owner's death."
  },
  {
    "q": "A trader bought goods worth ₦1,250,000 at a trade discount of 12%. If he paid immediately and enjoyed an additional 5% cash discount, how much did he finally pay?",
    "options": [
      "₦1,032,500",
      "₦1,078,000",
      "₦1,045,000",
      "₦1,100,000"
    ],
    "ans": "₦1,045,000",
    "explanation": "1,250,000 x 0.88 = 1,100,000 after trade discount; x 0.95 = 1,045,000 after cash discount."
  },
  {
    "q": "Which of the following is NOT an aid to trade?",
    "options": [
      "Insurance",
      "Banking",
      "Advertising",
      "Manufacturing"
    ],
    "ans": "Manufacturing",
    "explanation": "Manufacturing is production, not an aid to trade."
  },
  {
    "q": "Which of the following is the greatest advantage of sea transport for international trade?",
    "options": [
      "Highest speed",
      "Door-to-door delivery",
      "Ability to carry bulky goods at relatively low cost",
      "Lowest insurance premium"
    ],
    "ans": "Ability to carry bulky goods at relatively low cost",
    "explanation": "Sea transport's advantage is carrying bulky goods at relatively low cost."
  },
  {
    "q": "A company issued 2,000,000 ordinary shares of ₦1.50 each at ₦2.00 per share. The share premium realized is",
    "options": [
      "₦500,000",
      "₦750,000",
      "₦1,000,000",
      "₦4,000,000"
    ],
    "ans": "₦1,000,000",
    "explanation": "2,000,000 shares x (2.00-1.50) = 1,000,000 share premium."
  },
  {
    "q": "Which of the following is the principal objective of the Nigerian Customs Service?",
    "options": [
      "Issuing currency notes",
      "Collecting import and export duties",
      "Granting insurance policies",
      "Supervising commercial banks"
    ],
    "ans": "Collecting import and export duties",
    "explanation": "The Nigerian Customs Service's core role is collecting import/export duties."
  },
  {
    "q": "Which of the following is NOT a feature of monopoly?",
    "options": [
      "Single seller",
      "Close substitutes are absent",
      "High barriers to entry",
      "Large number of independent sellers"
    ],
    "ans": "Large number of independent sellers",
    "explanation": "A large number of independent sellers is NOT a monopoly feature — monopoly means a single seller."
  },
  {
    "q": "Which of the following methods of payment is most appropriate where the buyer and seller have established mutual trust over a long period?",
    "options": [
      "Letter of Credit",
      "Cash Before Delivery",
      "Open Account",
      "Bank Draft"
    ],
    "ans": "Open Account",
    "explanation": "An open account suits buyers/sellers with long-established mutual trust."
  },
  {
    "q": "Which of the following is regarded as the most liquid current asset?",
    "options": [
      "Inventory",
      "Debtors",
      "Cash",
      "Prepaid expenses"
    ],
    "ans": "Cash",
    "explanation": "Cash is the most liquid current asset by definition."
  },
  {
    "q": "Which of the following is NOT a function of packaging?",
    "options": [
      "Protecting goods from damage",
      "Facilitating transportation",
      "Attracting customers",
      "Eliminating production costs"
    ],
    "ans": "Eliminating production costs",
    "explanation": "Eliminating production costs isn't a packaging function."
  },
  {
    "q": "A business purchased goods worth ₦2,400,000 and incurred carriage inward of ₦120,000. If goods costing ₦180,000 were returned to the supplier, what is the total cost of purchases?",
    "options": [
      "₦2,220,000",
      "₦2,340,000",
      "₦2,340,000",
      "₦2,520,000"
    ],
    "ans": "₦2,340,000",
    "explanation": "2,400,000+120,000 carriage-160,000... wait: 2,400,000+120,000-180,000=2,340,000."
  },
  {
    "q": "Which of the following is the principal function of a warehouse warrant?",
    "options": [
      "It serves as a receipt for tax payment.",
      "It represents ownership of goods stored in a warehouse.",
      "It authorizes payment of customs duty.",
      "It serves as a cheque."
    ],
    "ans": "It represents ownership of goods stored in a warehouse.",
    "explanation": "A warehouse warrant represents ownership of goods stored in a warehouse."
  },
  {
    "q": "Which of the following is the greatest advantage of franchising?",
    "options": [
      "Total business independence",
      "Ability to operate under an established brand name",
      "Elimination of franchise fees",
      "Freedom from business regulations"
    ],
    "ans": "Ability to operate under an established brand name",
    "explanation": "Franchising's advantage is operating under an already-established brand name."
  },
  {
    "q": "Which of the following is NOT a source of long-term finance?",
    "options": [
      "Ordinary shares",
      "Preference shares",
      "Debentures",
      "Trade credit"
    ],
    "ans": "Trade credit",
    "explanation": "Trade credit is short-term, not a long-term finance source."
  },
  {
    "q": "Which of the following factors contributes most to business goodwill?",
    "options": [
      "High taxation",
      "Frequent labour disputes",
      "Consistent customer satisfaction",
      "Rising production costs"
    ],
    "ans": "Consistent customer satisfaction",
    "explanation": "Consistent customer satisfaction is the biggest driver of business goodwill."
  },
  {
    "q": "Which of the following is the primary objective of trade fairs?",
    "options": [
      "Collection of taxes",
      "Licensing importers",
      "Exhibition and promotion of products",
      "Issuing insurance policies"
    ],
    "ans": "Exhibition and promotion of products",
    "explanation": "Trade fairs exist to exhibit and promote products."
  },
  {
    "q": "Which of the following is NOT a function of commercial banks?",
    "options": [
      "Granting loans",
      "Discounting bills of exchange",
      "Accepting deposits",
      "Printing legal tender"
    ],
    "ans": "Printing legal tender",
    "explanation": "Printing legal tender is a central bank function, not a commercial bank one."
  },
  {
    "q": "Which of the following is the most suitable means of transport for highly perishable goods intended for export?",
    "options": [
      "Rail transport",
      "Sea transport",
      "Air transport",
      "Inland waterways"
    ],
    "ans": "Air transport",
    "explanation": "Air transport suits highly perishable export goods needing speed."
  },
  {
    "q": "A retailer purchased goods at ₦960,000 and sold them at a markup of 25% on cost. What was the selling price?",
    "options": [
      "₦1,080,000",
      "₦1,120,000",
      "₦1,200,000",
      "₦1,250,000"
    ],
    "ans": "₦1,200,000",
    "explanation": "960,000 x 1.25 = 1,200,000 selling price at 25% markup on cost."
  },
  {
    "q": "Which of the following is the major objective of insurance?",
    "options": [
      "To prevent accidents completely",
      "To eliminate business risks",
      "To compensate for financial loss arising from insured risks",
      "To guarantee business profits"
    ],
    "ans": "To compensate for financial loss arising from insured risks",
    "explanation": "Insurance's major objective is compensating for financial loss from insured risks."
  },
  {
    "q": "Which of the following is an example of a negotiable instrument?",
    "options": [
      "Delivery Note",
      "Invoice",
      "Bill of Exchange",
      "Quotation"
    ],
    "ans": "Bill of Exchange",
    "explanation": "A Bill of Exchange is a classic negotiable instrument."
  },
  {
    "q": "Which of the following best explains the importance of commerce in national development?",
    "options": [
      "It discourages industrialization.",
      "It replaces agriculture and manufacturing.",
      "It reduces specialization among producers.",
      "It facilitates production, distribution, employment, and economic growth through efficient exchange of goods and services."
    ],
    "ans": "It facilitates production, distribution, employment, and economic growth through efficient exchange of goods and services.",
    "explanation": "Commerce facilitates production, distribution, employment, and growth through exchange."
  },
  {
    "q": "Which of the following is the major reason for maintaining buffer stock in a warehouse?",
    "options": [
      "To increase the selling price of goods",
      "To discourage competition",
      "To prevent shortages caused by fluctuations in demand and supply",
      "To reduce advertising expenses"
    ],
    "ans": "To prevent shortages caused by fluctuations in demand and supply",
    "explanation": "Buffer stock prevents shortages from fluctuations in demand and supply."
  },
  {
    "q": "Which of the following is the most appropriate source of finance for meeting short-term working capital needs?",
    "options": [
      "Ordinary shares",
      "Debentures",
      "Bank overdraft",
      "Mortgage loan"
    ],
    "ans": "Bank overdraft",
    "explanation": "Bank overdraft is the standard source for short-term working capital needs."
  },
  {
    "q": "Which of the following documents is prepared by a prospective buyer requesting the seller to state the prices and terms of sale of goods?",
    "options": [
      "Invoice",
      "Order",
      "Enquiry",
      "Delivery Note"
    ],
    "ans": "Enquiry",
    "explanation": "An Enquiry is sent by a prospective buyer asking about prices and terms."
  },
  {
    "q": "Which of the following is NOT a characteristic of a limited liability company?",
    "options": [
      "Separate legal entity",
      "Perpetual succession",
      "Limited liability of shareholders",
      "Unlimited transfer of management powers to shareholders"
    ],
    "ans": "Unlimited transfer of management powers to shareholders",
    "explanation": "Limited companies keep management with directors/officers, not unlimited shareholder transfer of power."
  },
  {
    "q": "A trader purchased 800 television sets at ₦145,000 each and sold 75% of them at ₦170,000 each. What was the total revenue realized from the sales?",
    "options": [
      "₦92,500,000",
      "₦98,400,000",
      "₦102,000,000",
      "₦116,000,000"
    ],
    "ans": "₦102,000,000",
    "explanation": "800 x 0.75 = 600 units sold; 600 x 170,000 = 102,000,000 revenue."
  },
  {
    "q": "Which of the following is the major function of a clearing house?",
    "options": [
      "Printing bank notes",
      "Issuing treasury bills",
      "Facilitating the settlement of inter-bank cheques",
      "Collecting taxes"
    ],
    "ans": "Facilitating the settlement of inter-bank cheques",
    "explanation": "A clearing house facilitates settlement of inter-bank cheques."
  },
  {
    "q": "Which of the following types of insurance is compulsory for every motor vehicle owner in Nigeria?",
    "options": [
      "Marine Insurance",
      "Burglary Insurance",
      "Third-Party Motor Insurance",
      "Fidelity Guarantee Insurance"
    ],
    "ans": "Third-Party Motor Insurance",
    "explanation": "Third-Party Motor Insurance is legally compulsory for vehicle owners in Nigeria."
  },
  {
    "q": "Which of the following is the greatest advantage of a chain store over an independent retailer?",
    "options": [
      "Unlimited liability",
      "Bulk purchasing leading to lower operating costs",
      "Higher cost of advertising",
      "Limited sources of finance"
    ],
    "ans": "Bulk purchasing leading to lower operating costs",
    "explanation": "Chain stores benefit from bulk purchasing, lowering operating costs."
  },
  {
    "q": "Which of the following factors is most responsible for the growth of e-commerce?",
    "options": [
      "Increase in barter trade",
      "Advancement in information and communication technology",
      "Reduction in commercial banks",
      "Elimination of transportation"
    ],
    "ans": "Advancement in information and communication technology",
    "explanation": "Advancement in ICT is the main driver of e-commerce growth."
  },
  {
    "q": "A company declared a dividend of 15% on ordinary share capital of ₦80,000,000. What amount was paid as dividend?",
    "options": [
      "₦10,000,000",
      "₦11,000,000",
      "₦12,000,000",
      "₦15,000,000"
    ],
    "ans": "₦12,000,000",
    "explanation": "80,000,000 x 0.15 = 12,000,000 dividend paid."
  },
  {
    "q": "Which of the following is NOT an objective of branding?",
    "options": [
      "Product identification",
      "Customer loyalty",
      "Product differentiation",
      "Elimination of production cost"
    ],
    "ans": "Elimination of production cost",
    "explanation": "Eliminating production cost isn't a branding objective."
  },
  {
    "q": "Which of the following is the major function of a warehouse receipt?",
    "options": [
      "To authorize payment of wages",
      "To acknowledge goods deposited in a warehouse",
      "To grant import licence",
      "To certify tax payment"
    ],
    "ans": "To acknowledge goods deposited in a warehouse",
    "explanation": "A warehouse receipt acknowledges goods deposited in a warehouse."
  },
  {
    "q": "Which of the following methods of payment is most appropriate where the exporter has little confidence in the importer?",
    "options": [
      "Open Account",
      "Consignment",
      "Letter of Credit",
      "Cash on Delivery"
    ],
    "ans": "Letter of Credit",
    "explanation": "Letter of Credit suits exporters with little confidence in the importer's payment reliability."
  },
  {
    "q": "Which of the following is the principal reason for business mergers?",
    "options": [
      "To increase taxation",
      "To reduce advertising completely",
      "To achieve economies of scale and strengthen market position",
      "To eliminate shareholders"
    ],
    "ans": "To achieve economies of scale and strengthen market position",
    "explanation": "Mergers mainly aim to achieve economies of scale and strengthen market position."
  },
  {
    "q": "Which of the following is an example of a public enterprise?",
    "options": [
      "Dangote Cement Plc",
      "Nestlé Nigeria Plc",
      "Nigerian Railway Corporation",
      "MTN Nigeria"
    ],
    "ans": "Nigerian Railway Corporation",
    "explanation": "Nigerian Railway Corporation is a public (government-owned) enterprise."
  },
  {
    "q": "A trader sold goods costing ₦2,400,000 for ₦2,880,000. If operating expenses amounted to ₦180,000, the net profit was",
    "options": [
      "₦240,000",
      "₦300,000",
      "₦300,000",
      "₦480,000"
    ],
    "ans": "₦300,000",
    "explanation": "Gross profit 2,880,000-2,400,000=480,000, less 180,000 expenses = 300,000 net profit."
  },
  {
    "q": "Which of the following is the greatest advantage of warehousing to manufacturers?",
    "options": [
      "It increases production costs.",
      "It allows continuous production despite seasonal demand.",
      "It discourages exports.",
      "It eliminates transportation."
    ],
    "ans": "It allows continuous production despite seasonal demand.",
    "explanation": "Warehousing lets manufacturers keep producing steadily despite seasonal demand."
  },
  {
    "q": "Which of the following is NOT a function of advertising?",
    "options": [
      "Informing consumers",
      "Persuading customers",
      "Creating product awareness",
      "Determining exchange rates"
    ],
    "ans": "Determining exchange rates",
    "explanation": "Determining exchange rates isn't an advertising function."
  },
  {
    "q": "Which of the following is the major source of income for commercial banks?",
    "options": [
      "Printing currency",
      "Government grants",
      "Interest on loans and advances",
      "Customs duties"
    ],
    "ans": "Interest on loans and advances",
    "explanation": "Interest on loans and advances is commercial banks' major income source."
  },
  {
    "q": "Which of the following best explains the term \"capital market\"?",
    "options": [
      "A market for consumer goods",
      "A market where foreign currencies are exchanged",
      "A market for raising and trading long-term funds and securities",
      "A market for agricultural products only"
    ],
    "ans": "A market for raising and trading long-term funds and securities",
    "explanation": "The capital market is where long-term funds and securities are raised/traded."
  },
  {
    "q": "Which of the following is regarded as the most suitable means of transport for crude petroleum over long inland distances?",
    "options": [
      "Air transport",
      "Rail transport",
      "Road transport",
      "Pipeline transport"
    ],
    "ans": "Pipeline transport",
    "explanation": "Pipeline transport suits crude petroleum over long inland distances."
  },
  {
    "q": "Which of the following is the major objective of the Consumer Protection Council?",
    "options": [
      "Maximizing government revenue",
      "Promoting monopolies",
      "Protecting consumers from hazardous and substandard goods",
      "Licensing manufacturers"
    ],
    "ans": "Protecting consumers from hazardous and substandard goods",
    "explanation": "The Consumer Protection Council protects against hazardous/substandard goods."
  },
  {
    "q": "A business purchased goods worth ₦4,000,000 less 15% trade discount. If carriage inward amounted to ₦120,000, what was the total cost of purchases?",
    "options": [
      "₦3,400,000",
      "₦3,480,000",
      "₦3,520,000",
      "₦4,120,000"
    ],
    "ans": "₦3,520,000",
    "explanation": "4,000,000 x 0.85 = 3,400,000 after discount, + 120,000 carriage = 3,520,000."
  },
  {
    "q": "Which of the following is the greatest advantage of international trade to developing countries?",
    "options": [
      "Elimination of local industries",
      "Reduction in employment opportunities",
      "Increase in dependence on imports only",
      "Access to wider markets, technology, and foreign exchange earnings"
    ],
    "ans": "Access to wider markets, technology, and foreign exchange earnings",
    "explanation": "International trade gives developing countries access to wider markets, tech, forex."
  },
  {
    "q": "Which of the following best explains the role of commerce in economic development?",
    "options": [
      "It is concerned only with buying and selling.",
      "It focuses solely on transportation and communication.",
      "It replaces production and agriculture in the economy.",
      "It facilitates production by linking producers with consumers through trade and aids to trade, thereby promoting national and international economic growth."
    ],
    "ans": "It facilitates production by linking producers with consumers through trade and aids to trade, thereby promoting national and international economic growth.",
    "explanation": "Commerce links producers with consumers, promoting national/international growth."
  },
  {
    "q": "A retailer purchased goods for ₦2,400,000. He was allowed a trade discount of 15% and later a cash discount of 5% for prompt payment. How much did he finally pay?",
    "options": [
      "₦1,938,000",
      "₦1,980,000",
      "₦1,938,000",
      "₦2,040,000"
    ],
    "ans": "₦1,938,000",
    "explanation": "2,400,000 x 0.85 = 2,040,000 after trade discount; x 0.95 = 1,938,000 after cash discount."
  },
  {
    "q": "Which of the following best explains the importance of warehousing to manufacturers?",
    "options": [
      "It reduces labour turnover.",
      "It eliminates transportation costs.",
      "It enables continuous production despite seasonal demand.",
      "It fixes market prices."
    ],
    "ans": "It enables continuous production despite seasonal demand.",
    "explanation": "Warehousing lets manufacturers produce continuously despite seasonal demand."
  },
  {
    "q": "Which of the following is the major function of a merchant bank?",
    "options": [
      "Accepting savings deposits from individuals",
      "Issuing cheque books to customers",
      "Providing long-term finance and investment advisory services",
      "Printing currency"
    ],
    "ans": "Providing long-term finance and investment advisory services",
    "explanation": "Merchant banks provide long-term finance and investment advisory services."
  },
  {
    "q": "Which of the following is NOT an advantage of specialization?",
    "options": [
      "Increased efficiency",
      "Improved quality of work",
      "Time saving",
      "Elimination of business risks"
    ],
    "ans": "Elimination of business risks",
    "explanation": "Elimination of business risks is not a benefit of specialization."
  },
  {
    "q": "A manufacturer sells directly to consumers through the internet without involving wholesalers or retailers. This channel of distribution is known as",
    "options": [
      "Indirect distribution",
      "Direct distribution",
      "Selective distribution",
      "Intensive distribution"
    ],
    "ans": "Direct distribution",
    "explanation": "Selling directly online without wholesalers/retailers is direct distribution."
  },
  {
    "q": "Which of the following documents is prepared by a seller to inform a buyer of goods dispatched and the amount payable?",
    "options": [
      "Receipt",
      "Delivery Note",
      "Invoice",
      "Credit Note"
    ],
    "ans": "Invoice",
    "explanation": "An Invoice informs the buyer of goods dispatched and the amount payable."
  },
  {
    "q": "Which of the following is the greatest advantage of containerization?",
    "options": [
      "Increase in loading time",
      "Higher insurance premium",
      "Reduction in pilferage and handling costs",
      "Elimination of customs duties"
    ],
    "ans": "Reduction in pilferage and handling costs",
    "explanation": "Containerization's advantage is reducing pilferage and handling costs."
  },
  {
    "q": "Which of the following is the principal source of finance for expanding a public limited company?",
    "options": [
      "Personal savings of directors",
      "Trade credit",
      "Issue of additional shares",
      "Hire purchase"
    ],
    "ans": "Issue of additional shares",
    "explanation": "Issuing additional shares is a PLC's principal expansion finance source."
  },
  {
    "q": "Which of the following is NOT a feature of e-commerce?",
    "options": [
      "Online payment system",
      "Electronic communication",
      "Internet-based transactions",
      "Physical negotiation before every transaction"
    ],
    "ans": "Physical negotiation before every transaction",
    "explanation": "Requiring physical negotiation before every transaction isn't an e-commerce feature."
  },
  {
    "q": "A trader sold goods for ₦4,800,000 which cost ₦3,900,000. If selling and administrative expenses were ₦280,000, what was the net profit?",
    "options": [
      "₦620,000",
      "₦620,000",
      "₦900,000",
      "₦1,180,000"
    ],
    "ans": "₦620,000",
    "explanation": "Gross profit 4,800,000-3,900,000=900,000, less 280,000 expenses = 620,000 net profit."
  },
  {
    "q": "Which of the following is the principal objective of advertising?",
    "options": [
      "To reduce production costs",
      "To stimulate demand for goods and services",
      "To increase taxation",
      "To reduce competition completely"
    ],
    "ans": "To stimulate demand for goods and services",
    "explanation": "Advertising's principal objective is stimulating demand for goods/services."
  },
  {
    "q": "Which of the following is regarded as the most suitable means of transport for heavy machinery imported into Nigeria?",
    "options": [
      "Air transport",
      "Road transport",
      "Sea transport",
      "Pipeline transport"
    ],
    "ans": "Sea transport",
    "explanation": "Sea transport suits heavy imported machinery."
  },
  {
    "q": "Which of the following is NOT a function of the Central Bank?",
    "options": [
      "Custodian of external reserves",
      "Lender of last resort",
      "Issuer of legal tender",
      "Financing retail purchases"
    ],
    "ans": "Financing retail purchases",
    "explanation": "Financing retail purchases isn't a central bank function."
  },
  {
    "q": "Which of the following factors contributes most to the growth of supermarkets?",
    "options": [
      "Limited product variety",
      "Self-service and wide range of goods",
      "Cash-only transactions",
      "Door-to-door selling"
    ],
    "ans": "Self-service and wide range of goods",
    "explanation": "Self-service and wide product range drive supermarket growth."
  },
  {
    "q": "Which of the following is an example of home trade?",
    "options": [
      "Nigeria exporting cocoa to Germany",
      "A trader in Kano selling textiles to a retailer in Enugu",
      "Ghana importing cement from Nigeria",
      "China exporting electronics to Nigeria"
    ],
    "ans": "A trader in Kano selling textiles to a retailer in Enugu",
    "explanation": "Kano to Enugu trade within Nigeria is home (domestic) trade."
  },
  {
    "q": "A business has current assets of ₦8,400,000 and current liabilities of ₦5,650,000. Its working capital is",
    "options": [
      "₦2,550,000",
      "₦2,750,000",
      "₦3,150,000",
      "₦14,050,000"
    ],
    "ans": "₦2,750,000",
    "explanation": "8,400,000-5,650,000=2,750,000 working capital."
  },
  {
    "q": "Which of the following is the greatest disadvantage of hire purchase to the buyer?",
    "options": [
      "Immediate possession of goods",
      "Instalmental payment",
      "Total cost is usually higher than cash price",
      "Flexibility of payment"
    ],
    "ans": "Total cost is usually higher than cash price",
    "explanation": "Hire purchase's total cost usually exceeds the equivalent cash price."
  },
  {
    "q": "Which of the following is NOT a characteristic of money?",
    "options": [
      "General acceptability",
      "Durability",
      "Divisibility",
      "Unlimited supply"
    ],
    "ans": "Unlimited supply",
    "explanation": "Unlimited supply is NOT a money characteristic — supply must be controlled."
  },
  {
    "q": "Which of the following institutions protects depositors against bank failure in Nigeria?",
    "options": [
      "Central Bank of Nigeria",
      "Securities and Exchange Commission",
      "Nigeria Deposit Insurance Corporation (NDIC)",
      "Federal Inland Revenue Service"
    ],
    "ans": "Nigeria Deposit Insurance Corporation (NDIC)",
    "explanation": "NDIC protects depositors against bank failure in Nigeria."
  },
  {
    "q": "Which of the following is the primary purpose of issuing debentures?",
    "options": [
      "To increase current liabilities",
      "To raise long-term capital through borrowing",
      "To reward shareholders",
      "To reduce taxation"
    ],
    "ans": "To raise long-term capital through borrowing",
    "explanation": "Debentures are issued to raise long-term capital through borrowing."
  },
  {
    "q": "A company has an authorized share capital of ₦150 million divided into ordinary shares of ₦5 each. How many ordinary shares make up the authorized capital?",
    "options": [
      "15 million shares",
      "20 million shares",
      "30 million shares",
      "75 million shares"
    ],
    "ans": "30 million shares",
    "explanation": "150,000,000 / 5 = 30,000,000 ordinary shares."
  },
  {
    "q": "Which of the following best explains the principle of indemnity in insurance?",
    "options": [
      "Every insured person must make a profit after a loss.",
      "The insurer pays any amount demanded by the insured.",
      "Compensation should restore the insured to the financial position occupied before the loss.",
      "Compensation must always exceed the value of the loss."
    ],
    "ans": "Compensation should restore the insured to the financial position occupied before the loss.",
    "explanation": "Indemnity means compensation restores the insured to their pre-loss position."
  },
  {
    "q": "Which of the following is the major reason for forming a cooperative society?",
    "options": [
      "To maximize government revenue",
      "To eliminate competition completely",
      "To promote the economic interests of members through mutual assistance",
      "To monopolize production"
    ],
    "ans": "To promote the economic interests of members through mutual assistance",
    "explanation": "Cooperative societies promote members' economic interests through mutual assistance."
  },
  {
    "q": "Which of the following is the greatest advantage of branding to consumers?",
    "options": [
      "It increases product prices.",
      "It eliminates competition.",
      "It enables easy identification of quality products.",
      "It prevents advertising."
    ],
    "ans": "It enables easy identification of quality products.",
    "explanation": "Branding lets consumers easily identify quality products."
  },
  {
    "q": "Which of the following best describes commerce?",
    "options": [
      "It is concerned only with manufacturing finished goods.",
      "It deals mainly with agricultural production.",
      "It consists solely of buying and selling activities.",
      "It includes trade and all activities that facilitate the movement of goods and services from producers to consumers."
    ],
    "ans": "It includes trade and all activities that facilitate the movement of goods and services from producers to consumers.",
    "explanation": "Commerce includes trade plus all activities moving goods/services to consumers."
  },
  {
    "q": "A trader purchased goods worth ₦3,600,000 and was allowed a 10% trade discount. If he paid within the discount period and received an additional 5% cash discount, how much did he finally pay?",
    "options": [
      "₦3,240,000",
      "₦3,078,000",
      "₦3,078,000",
      "₦2,916,000"
    ],
    "ans": "₦3,078,000",
    "explanation": "3,600,000 x 0.9 = 3,240,000 after trade discount; x 0.95 = 3,078,000 after cash discount."
  },
  {
    "q": "Which of the following is the major reason why a business may decide to franchise its operations?",
    "options": [
      "To reduce product quality",
      "To avoid paying taxes",
      "To expand rapidly using independent investors while maintaining uniform standards",
      "To eliminate advertising expenses"
    ],
    "ans": "To expand rapidly using independent investors while maintaining uniform standards",
    "explanation": "Franchising lets a business expand rapidly using independent investors with uniform standards."
  },
  {
    "q": "Which of the following documents enables an importer to take delivery of goods from the shipping company after customs clearance?",
    "options": [
      "Consular Invoice",
      "Bill of Exchange",
      "Bill of Lading",
      "Debit Note"
    ],
    "ans": "Bill of Lading",
    "explanation": "A Bill of Lading lets an importer take delivery of goods after customs clearance."
  },
  {
    "q": "Which of the following is the greatest benefit of installing an Enterprise Resource Planning (ERP) system in a large business?",
    "options": [
      "It eliminates taxation.",
      "It replaces management completely.",
      "It integrates various business operations into a single information system.",
      "It guarantees business profit."
    ],
    "ans": "It integrates various business operations into a single information system.",
    "explanation": "ERP integrates various business operations into one information system."
  },
  {
    "q": "Which of the following types of shares usually carry a fixed rate of dividend?",
    "options": [
      "Deferred shares",
      "Ordinary shares",
      "Preference shares",
      "Founders' shares"
    ],
    "ans": "Preference shares",
    "explanation": "Preference shares typically carry a fixed dividend rate."
  },
  {
    "q": "A company acquired machinery worth ₦12 million by issuing shares instead of paying cash. The immediate effect is that",
    "options": [
      "Current liabilities increase.",
      "Cash position remains unchanged.",
      "Working capital increases automatically.",
      "Inventory decreases."
    ],
    "ans": "Cash position remains unchanged.",
    "explanation": "Issuing shares (not cash) for the machinery means the cash position is unaffected."
  },
  {
    "q": "Which of the following is NOT an advantage of electronic banking?",
    "options": [
      "24-hour access to banking services",
      "Faster transfer of funds",
      "Reduced need to visit banking halls",
      "Complete elimination of cybercrime"
    ],
    "ans": "Complete elimination of cybercrime",
    "explanation": "Complete elimination of cybercrime is an unrealistic claim, not a real e-banking advantage."
  },
  {
    "q": "Which of the following business documents is evidence that ownership of goods has been transferred to the buyer?",
    "options": [
      "Quotation",
      "Order Form",
      "Invoice",
      "Statement of Account"
    ],
    "ans": "Invoice",
    "explanation": "An Invoice is the standard document evidencing a sale transaction."
  },
  {
    "q": "Which of the following factors is most likely to influence the location of a manufacturing industry?",
    "options": [
      "Colour of the factory building",
      "Availability of raw materials and infrastructure",
      "Religion of workers",
      "Number of competitors alone"
    ],
    "ans": "Availability of raw materials and infrastructure",
    "explanation": "Availability of raw materials and infrastructure most influences factory location."
  },
  {
    "q": "Which of the following is the principal objective of a trade association?",
    "options": [
      "To maximize government revenue",
      "To fix prices permanently",
      "To promote and protect the interests of businesses in the industry",
      "To issue operating licences"
    ],
    "ans": "To promote and protect the interests of businesses in the industry",
    "explanation": "A trade association's principal objective is promoting/protecting industry business interests."
  },
  {
    "q": "A trader sold goods costing ₦5,400,000 for ₦6,750,000. If selling expenses amounted to ₦450,000, determine the net profit.",
    "options": [
      "₦900,000",
      "₦1,200,000",
      "₦900,000",
      "₦1,350,000"
    ],
    "ans": "₦900,000",
    "explanation": "Gross profit 6,750,000-5,400,000=1,350,000, less 450,000 expenses = 900,000 net profit."
  },
  {
    "q": "Which of the following is the most suitable source of finance for purchasing additional inventory to meet festive demand?",
    "options": [
      "Debentures",
      "Preference shares",
      "Bank overdraft",
      "Mortgage loan"
    ],
    "ans": "Bank overdraft",
    "explanation": "Bank overdraft suits short-term seasonal inventory financing needs."
  },
  {
    "q": "Which of the following is an example of indirect distribution?",
    "options": [
      "A farmer selling produce directly to consumers",
      "A manufacturer selling through an online store only",
      "A manufacturer selling through wholesalers and retailers",
      "A producer supplying goods directly to government ministries"
    ],
    "ans": "A manufacturer selling through wholesalers and retailers",
    "explanation": "Selling through wholesalers and retailers is indirect distribution."
  },
  {
    "q": "Which of the following is the greatest disadvantage of a public limited company?",
    "options": [
      "Ability to raise huge capital",
      "Separate legal entity",
      "Extensive legal formalities and disclosure requirements",
      "Perpetual succession"
    ],
    "ans": "Extensive legal formalities and disclosure requirements",
    "explanation": "Extensive legal formalities and disclosure requirements are a PLC's biggest disadvantage."
  },
  {
    "q": "Which of the following is regarded as the principal function of the money market?",
    "options": [
      "Financing long-term projects",
      "Providing short-term funds for businesses and government",
      "Trading agricultural commodities",
      "Marketing consumer goods"
    ],
    "ans": "Providing short-term funds for businesses and government",
    "explanation": "The money market's principal function is providing short-term funds."
  },
  {
    "q": "A company has total assets of ₦180 million and total liabilities of ₦65 million. The shareholders' equity is",
    "options": [
      "₦95 million",
      "₦105 million",
      "₦115 million",
      "₦245 million"
    ],
    "ans": "₦115 million",
    "explanation": "180,000,000-65,000,000=115,000,000 shareholders' equity."
  },
  {
    "q": "Which of the following is the greatest advantage of globalization to commerce?",
    "options": [
      "Elimination of domestic competition",
      "Reduction in technological advancement",
      "Expansion of international markets and business opportunities",
      "Restriction of foreign investment"
    ],
    "ans": "Expansion of international markets and business opportunities",
    "explanation": "Globalization expands international markets and business opportunities."
  },
  {
    "q": "Which of the following is NOT a characteristic of an entrepreneur?",
    "options": [
      "Willingness to take risks",
      "Innovativeness",
      "Decision-making ability",
      "Dependence on government for every business decision"
    ],
    "ans": "Dependence on government for every business decision",
    "explanation": "Depending on government for every decision contradicts core entrepreneurial traits."
  },
  {
    "q": "Which of the following would most likely lead to an increase in the selling price of imported goods?",
    "options": [
      "Appreciation of the local currency",
      "Depreciation of the local currency",
      "Reduction in transportation costs",
      "Reduction in import duty"
    ],
    "ans": "Depreciation of the local currency",
    "explanation": "Local currency depreciation raises the price of imported goods."
  },
  {
    "q": "Which of the following is the principal objective of inventory control?",
    "options": [
      "To eliminate production completely",
      "To maximize advertising expenditure",
      "To maintain optimum stock levels while minimizing storage costs",
      "To reduce product quality"
    ],
    "ans": "To maintain optimum stock levels while minimizing storage costs",
    "explanation": "Inventory control aims to maintain optimum stock while minimizing storage costs."
  },
  {
    "q": "A retailer's opening stock was ₦850,000, purchases amounted to ₦5,400,000, closing stock was ₦1,150,000 and purchase returns were ₦300,000. Determine the cost of goods available for sale.",
    "options": [
      "₦4,800,000",
      "₦5,650,000",
      "₦5,950,000",
      "₦6,250,000"
    ],
    "ans": "₦5,950,000",
    "explanation": "850,000+5,400,000-300,000=5,950,000 cost of goods available for sale."
  },
  {
    "q": "Which of the following institutions is responsible for regulating competition and protecting consumers against anti-competitive business practices in Nigeria?",
    "options": [
      "Central Bank of Nigeria",
      "Nigerian Customs Service",
      "Federal Competition and Consumer Protection Commission (FCCPC)",
      "Corporate Affairs Commission"
    ],
    "ans": "Federal Competition and Consumer Protection Commission (FCCPC)",
    "explanation": "FCCPC regulates competition and protects consumers from anti-competitive practices."
  },
  {
    "q": "Which of the following is the greatest advantage of using barcodes in retail business?",
    "options": [
      "They eliminate taxation.",
      "They increase product prices.",
      "They improve inventory control and speed up sales transactions.",
      "They replace wholesalers."
    ],
    "ans": "They improve inventory control and speed up sales transactions.",
    "explanation": "Barcodes improve inventory control and speed up sales transactions."
  },
  {
    "q": "Which of the following best explains the concept of economies of scale?",
    "options": [
      "Increase in selling price as production rises",
      "Increase in taxation due to expansion",
      "Reduction in average cost as the scale of production increases",
      "Reduction in consumers' income"
    ],
    "ans": "Reduction in average cost as the scale of production increases",
    "explanation": "Economies of scale means average cost falls as production scale increases."
  },
  {
    "q": "Which of the following best describes the relationship between production and commerce?",
    "options": [
      "Production can exist without commerce in modern economies.",
      "Commerce is more important than production.",
      "Commerce replaces production in developed economies.",
      "Production creates goods and services, while commerce ensures they reach the final consumers efficiently."
    ],
    "ans": "Production creates goods and services, while commerce ensures they reach the final consumers efficiently.",
    "explanation": "Production creates goods; commerce ensures they reach the final consumer."
  },
  {
    "q": "A company has a current ratio of 2:1. If its current liabilities amount to ₦8,500,000, what is the value of its current assets?",
    "options": [
      "₦12,750,000",
      "₦15,000,000",
      "₦17,000,000",
      "₦18,500,000"
    ],
    "ans": "₦17,000,000",
    "explanation": "2:1 ratio with 8,500,000 liabilities means current assets = 17,000,000."
  },
  {
    "q": "Which of the following is the most appropriate source of finance for establishing a new manufacturing plant expected to operate for several decades?",
    "options": [
      "Bank overdraft",
      "Trade credit",
      "Factoring",
      "Ordinary share capital"
    ],
    "ans": "Ordinary share capital",
    "explanation": "Ordinary share capital suits long-term projects meant to run for decades."
  },
  {
    "q": "A wholesaler grants a retailer 15% trade discount and 5% cash discount on goods listed at ₦2,800,000. How much does the retailer finally pay?",
    "options": [
      "₦2,261,000",
      "₦2,261,000",
      "₦2,380,000",
      "₦2,520,000"
    ],
    "ans": "₦2,261,000",
    "explanation": "2,800,000 x 0.85 = 2,380,000 after trade discount; x 0.95 = 2,261,000 after cash discount."
  },
  {
    "q": "Which of the following is the greatest disadvantage of using an open account in international trade?",
    "options": [
      "It delays shipment.",
      "It increases customs duty.",
      "The exporter bears a higher risk of non-payment.",
      "The importer pays before receiving the goods."
    ],
    "ans": "The exporter bears a higher risk of non-payment.",
    "explanation": "With an open account, the exporter bears higher risk of non-payment."
  },
  {
    "q": "Which of the following organizations is primarily responsible for registering companies in Nigeria?",
    "options": [
      "Central Bank of Nigeria",
      "Federal Inland Revenue Service",
      "Corporate Affairs Commission (CAC)",
      "Nigerian Customs Service"
    ],
    "ans": "Corporate Affairs Commission (CAC)",
    "explanation": "The Corporate Affairs Commission (CAC) registers companies in Nigeria."
  },
  {
    "q": "Which of the following business combinations occurs when two firms producing similar products unite to reduce competition?",
    "options": [
      "Vertical integration",
      "Horizontal integration",
      "Conglomerate merger",
      "Diversification"
    ],
    "ans": "Horizontal integration",
    "explanation": "Similar firms uniting to reduce competition is horizontal integration."
  },
  {
    "q": "A manufacturer owns every stage of production from raw material extraction to retail distribution. This strategy is known as",
    "options": [
      "Horizontal integration",
      "Vertical integration",
      "Franchising",
      "Joint venture"
    ],
    "ans": "Vertical integration",
    "explanation": "Owning every stage from raw material to retail is vertical integration."
  },
  {
    "q": "Which of the following is NOT a function of a stockbroker?",
    "options": [
      "Buying securities on behalf of clients",
      "Selling securities for investors",
      "Advising clients on investments",
      "Printing share certificates"
    ],
    "ans": "Printing share certificates",
    "explanation": "Printing share certificates isn't a stockbroker's function."
  },
  {
    "q": "A trader imports machinery worth $80,000. If the exchange rate changes from ₦1,550/$ to ₦1,700/$ before payment is made, the importer will",
    "options": [
      "Pay ₦12,000,000 less.",
      "Benefit from exchange rate appreciation.",
      "Pay more in naira for the same machinery.",
      "Pay the original naira amount."
    ],
    "ans": "Pay more in naira for the same machinery.",
    "explanation": "A weaker naira (1550 to 1700/$) means paying more naira for the same dollar amount."
  },
  {
    "q": "Which of the following best explains the concept of commercialisation of public enterprises?",
    "options": [
      "Selling government assets to private individuals.",
      "Running government enterprises on profit-oriented principles without necessarily transferring ownership.",
      "Closing down public corporations.",
      "Abolishing government participation in business."
    ],
    "ans": "Running government enterprises on profit-oriented principles without necessarily transferring ownership.",
    "explanation": "Commercialisation runs government enterprises on profit lines without transferring ownership."
  },
  {
    "q": "Which of the following is the greatest benefit of maintaining a high level of customer satisfaction?",
    "options": [
      "Higher taxation",
      "Increased production cost",
      "Improved customer loyalty and repeat purchases",
      "Elimination of competition"
    ],
    "ans": "Improved customer loyalty and repeat purchases",
    "explanation": "High customer satisfaction drives loyalty and repeat purchases."
  },
  {
    "q": "A company has total assets of ₦520 million and total liabilities of ₦185 million. What is the shareholders' equity?",
    "options": [
      "₦295 million",
      "₦315 million",
      "₦335 million",
      "₦705 million"
    ],
    "ans": "₦335 million",
    "explanation": "520,000,000-185,000,000=335,000,000 shareholders' equity."
  },
  {
    "q": "Which of the following methods of payment offers the greatest protection to both exporter and importer?",
    "options": [
      "Open Account",
      "Documentary Collection",
      "Letter of Credit",
      "Cash with Order"
    ],
    "ans": "Letter of Credit",
    "explanation": "Letter of Credit offers the strongest protection to both exporter and importer."
  },
  {
    "q": "Which of the following is the principal objective of inventory turnover analysis?",
    "options": [
      "To determine the selling price of goods.",
      "To calculate tax liability.",
      "To assess how efficiently inventory is being utilized.",
      "To determine exchange rates."
    ],
    "ans": "To assess how efficiently inventory is being utilized.",
    "explanation": "Inventory turnover analysis assesses how efficiently inventory is utilized."
  },
  {
    "q": "A company purchased equipment costing ₦45 million with an expected useful life of 10 years and no residual value. Using the straight-line method, the annual depreciation is",
    "options": [
      "₦3.5 million",
      "₦4.0 million",
      "₦4.5 million",
      "₦5.5 million"
    ],
    "ans": "₦4.5 million",
    "explanation": "45,000,000 / 10 years = 4,500,000 annual straight-line depreciation."
  },
  {
    "q": "Which of the following is NOT an advantage of international specialization?",
    "options": [
      "Increased efficiency",
      "Comparative advantage",
      "Lower production costs",
      "Elimination of exchange rate risks"
    ],
    "ans": "Elimination of exchange rate risks",
    "explanation": "International specialization doesn't eliminate exchange rate risk."
  },
  {
    "q": "Which of the following is the most suitable indicator of a company's short-term liquidity?",
    "options": [
      "Debt-equity ratio",
      "Return on investment",
      "Current ratio",
      "Gross profit margin"
    ],
    "ans": "Current ratio",
    "explanation": "The current ratio is the standard short-term liquidity indicator."
  },
  {
    "q": "A retailer recorded sales of ₦12 million, cost of goods sold of ₦8 million, and operating expenses of ₦2.4 million. What is the net profit?",
    "options": [
      "₦1.2 million",
      "₦1.6 million",
      "₦2.0 million",
      "₦4.0 million"
    ],
    "ans": "₦1.6 million",
    "explanation": "Sales 12M - COGS 8M = 4M gross profit, less 2.4M opex = 1.6M net profit."
  },
  {
    "q": "Which of the following is the greatest advantage of centralization in business management?",
    "options": [
      "Faster decision-making at branch level",
      "Uniformity in policy formulation and implementation",
      "Greater independence of departmental managers",
      "Elimination of communication channels"
    ],
    "ans": "Uniformity in policy formulation and implementation",
    "explanation": "Centralization's main advantage is uniformity in policy formulation."
  },
  {
    "q": "Which of the following business risks is generally considered uninsurable?",
    "options": [
      "Fire damage",
      "Marine accident",
      "Burglary loss",
      "Loss resulting from poor management decisions"
    ],
    "ans": "Loss resulting from poor management decisions",
    "explanation": "Losses from poor management decisions are generally uninsurable (not accidental/fortuitous)."
  },
  {
    "q": "Which of the following is the most important objective of business ethics?",
    "options": [
      "To maximize taxation",
      "To eliminate competition",
      "To promote honesty, fairness, and public confidence in business",
      "To reduce advertising costs"
    ],
    "ans": "To promote honesty, fairness, and public confidence in business",
    "explanation": "Business ethics primarily promotes honesty, fairness, and public confidence."
  },
  {
    "q": "Which of the following best explains the concept of comparative advantage in international trade?",
    "options": [
      "Producing every product more efficiently than other countries.",
      "Importing all consumer goods.",
      "Specializing in producing goods at a lower opportunity cost than other countries.",
      "Restricting imports completely."
    ],
    "ans": "Specializing in producing goods at a lower opportunity cost than other countries.",
    "explanation": "Comparative advantage means specializing where opportunity cost is lowest."
  },
  {
    "q": "A company has issued 12 million ordinary shares of ₦2 each and preference shares worth ₦16 million. What is the total share capital?",
    "options": [
      "₦28 million",
      "₦32 million",
      "₦40 million",
      "₦48 million"
    ],
    "ans": "₦40 million",
    "explanation": "12M shares x N2 = 24M, + 16M preference = 40M total share capital."
  },
  {
    "q": "Which of the following is the greatest advantage of diversification to a business?",
    "options": [
      "It eliminates operational costs.",
      "It guarantees profits every year.",
      "It spreads business risk across different products or markets.",
      "It removes competition."
    ],
    "ans": "It spreads business risk across different products or markets.",
    "explanation": "Diversification spreads business risk across different products/markets."
  },
  {
    "q": "Which of the following best explains why commerce remains indispensable in a modern economy?",
    "options": [
      "It replaces production.",
      "It focuses mainly on retailing.",
      "It is limited to buying and selling.",
      "It creates the time, place, possession, and utility necessary for goods and services to satisfy human wants efficiently."
    ],
    "ans": "It creates the time, place, possession, and utility necessary for goods and services to satisfy human wants efficiently.",
    "explanation": "Commerce creates time, place, possession, and utility for goods/services."
  },
  {
    "q": "A company purchased a machine for ₦18,000,000 and paid ₦450,000 for transportation and installation. What amount should be capitalized as the cost of the machine?",
    "options": [
      "₦18,000,000",
      "₦18,250,000",
      "₦18,450,000",
      "₦18,900,000"
    ],
    "ans": "₦18,450,000",
    "explanation": "18,000,000 + 450,000 installation = 18,450,000 capitalized machine cost."
  },
  {
    "q": "Which of the following is the major objective of market segmentation?",
    "options": [
      "To increase production costs",
      "To eliminate competition",
      "To satisfy the needs of different groups of customers more effectively",
      "To reduce the number of products offered"
    ],
    "ans": "To satisfy the needs of different groups of customers more effectively",
    "explanation": "Market segmentation aims to serve different customer groups' needs more effectively."
  },
  {
    "q": "Which of the following best explains the concept of trade liberalization?",
    "options": [
      "Increasing import tariffs on all goods",
      "Restricting international trade through quotas",
      "Reducing barriers to encourage the free flow of goods and services among countries",
      "Preventing foreign investment"
    ],
    "ans": "Reducing barriers to encourage the free flow of goods and services among countries",
    "explanation": "Trade liberalization reduces barriers to encourage free flow of goods/services."
  },
  {
    "q": "A retailer recorded opening inventory of ₦4,500,000, purchases of ₦18,000,000, purchase returns of ₦750,000 and closing inventory of ₦5,250,000. What was the cost of goods sold?",
    "options": [
      "₦15,750,000",
      "₦16,500,000",
      "₦17,250,000",
      "₦18,000,000"
    ],
    "ans": "₦16,500,000",
    "explanation": "4,500,000+18,000,000-750,000-5,250,000=16,500,000 cost of goods sold."
  },
  {
    "q": "Which of the following is the primary function of the Corporate Affairs Commission (CAC)?",
    "options": [
      "Regulating monetary policy",
      "Supervising commercial banks",
      "Registering and regulating companies and business names",
      "Collecting customs duties"
    ],
    "ans": "Registering and regulating companies and business names",
    "explanation": "The CAC's primary function is registering and regulating companies/business names."
  },
  {
    "q": "Which of the following is the greatest challenge associated with e-commerce?",
    "options": [
      "Fast transaction processing",
      "Global market access",
      "Cybersecurity threats and online fraud",
      "Lower operating costs"
    ],
    "ans": "Cybersecurity threats and online fraud",
    "explanation": "Cybersecurity threats and online fraud are e-commerce's biggest challenge."
  },
  {
    "q": "A company has fixed assets worth ₦320 million, current assets of ₦140 million and current liabilities of ₦90 million. What is its working capital?",
    "options": [
      "₦40 million",
      "₦50 million",
      "₦90 million",
      "₦230 million"
    ],
    "ans": "₦50 million",
    "explanation": "Working capital = 140M current assets - 90M current liabilities = 50M."
  },
  {
    "q": "Which of the following is an example of horizontal communication in an organization?",
    "options": [
      "The Managing Director instructing the Production Manager.",
      "The Sales Manager discussing marketing strategies with the Production Manager.",
      "A supervisor assigning duties to workers.",
      "The Board of Directors issuing company policies."
    ],
    "ans": "The Sales Manager discussing marketing strategies with the Production Manager.",
    "explanation": "Two same-level managers discussing strategy is horizontal communication."
  },
  {
    "q": "A manufacturer introduces a new product at a relatively low price to gain a large market share quickly. This pricing strategy is known as",
    "options": [
      "Price skimming",
      "Penetration pricing",
      "Cost-plus pricing",
      "Prestige pricing"
    ],
    "ans": "Penetration pricing",
    "explanation": "Penetration pricing uses low initial price to quickly gain market share."
  },
  {
    "q": "Which of the following is NOT a function of inventory management?",
    "options": [
      "Preventing stock shortages",
      "Minimizing storage costs",
      "Maintaining optimum stock levels",
      "Determining government fiscal policy"
    ],
    "ans": "Determining government fiscal policy",
    "explanation": "Determining government fiscal policy isn't an inventory management function."
  },
  {
    "q": "A business purchased goods costing ₦2,400,000 and spent ₦120,000 on carriage inward. If goods worth ₦180,000 were returned to the supplier, what was the net cost of purchases?",
    "options": [
      "₦2,220,000",
      "₦2,280,000",
      "₦2,340,000",
      "₦2,520,000"
    ],
    "ans": "₦2,340,000",
    "explanation": "2,400,000+120,000-180,000=2,340,000 net cost of purchases."
  },
  {
    "q": "Which of the following is the greatest benefit of corporate social responsibility (CSR) to a business?",
    "options": [
      "Elimination of competition",
      "Reduction in production costs",
      "Improved public image and stronger stakeholder relationships",
      "Automatic increase in profits"
    ],
    "ans": "Improved public image and stronger stakeholder relationships",
    "explanation": "CSR's main benefit is improved public image and stakeholder relationships."
  },
  {
    "q": "Which of the following best describes a multinational corporation?",
    "options": [
      "A company owned solely by the government.",
      "A business operating in one state only.",
      "A company with production or business operations in more than one country.",
      "A company engaged only in export trade."
    ],
    "ans": "A company with production or business operations in more than one country.",
    "explanation": "A multinational corporation operates in more than one country."
  },
  {
    "q": "A trader purchased goods for ₦5,000,000 and sold them at a gross profit margin of 30% on cost. What was the selling price?",
    "options": [
      "₦5,800,000",
      "₦6,200,000",
      "₦6,500,000",
      "₦7,000,000"
    ],
    "ans": "₦6,500,000",
    "explanation": "5,000,000 x 1.30 = 6,500,000 selling price at 30% margin on cost."
  },
  {
    "q": "Which of the following is the principal objective of entrepreneurship?",
    "options": [
      "To eliminate competition completely.",
      "To reduce taxation.",
      "To identify opportunities and create value by organizing resources profitably.",
      "To prevent innovation."
    ],
    "ans": "To identify opportunities and create value by organizing resources profitably.",
    "explanation": "Entrepreneurship means identifying opportunities and creating value by organizing resources."
  },
  {
    "q": "Which of the following is the most appropriate measure for improving customer retention?",
    "options": [
      "Frequent increase in prices",
      "Reduction in product quality",
      "Efficient after-sales service and customer support",
      "Limiting product availability"
    ],
    "ans": "Efficient after-sales service and customer support",
    "explanation": "Efficient after-sales service/support is key to customer retention."
  },
  {
    "q": "A company's net profit is ₦18 million and its total sales amount to ₦150 million. What is the net profit margin?",
    "options": [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    "ans": "12%",
    "explanation": "18M / 150M = 12% net profit margin."
  },
  {
    "q": "Which of the following is the primary function of a logistics management system?",
    "options": [
      "Preparing financial statements",
      "Recruiting employees",
      "Planning, implementing, and controlling the efficient movement and storage of goods",
      "Auditing company accounts"
    ],
    "ans": "Planning, implementing, and controlling the efficient movement and storage of goods",
    "explanation": "Logistics management plans/controls efficient movement and storage of goods."
  },
  {
    "q": "Which of the following best explains the principle of comparative cost advantage?",
    "options": [
      "Producing all goods more efficiently than other countries.",
      "Importing every product with low prices.",
      "Specializing in goods that can be produced at a relatively lower opportunity cost.",
      "Restricting international trade."
    ],
    "ans": "Specializing in goods that can be produced at a relatively lower opportunity cost.",
    "explanation": "Comparative cost advantage means specializing at relatively lower opportunity cost."
  },
  {
    "q": "A business has total assets of ₦600 million and total liabilities of ₦245 million. What is the owner's equity?",
    "options": [
      "₦325 million",
      "₦340 million",
      "₦355 million",
      "₦845 million"
    ],
    "ans": "₦355 million",
    "explanation": "600M assets - 245M liabilities = 355M owner's equity."
  },
  {
    "q": "Which of the following is the greatest benefit of business planning before establishing an enterprise?",
    "options": [
      "It guarantees business success.",
      "It removes all business risks.",
      "It helps identify risks, estimate costs, and allocate resources effectively.",
      "It eliminates the need for capital."
    ],
    "ans": "It helps identify risks, estimate costs, and allocate resources effectively.",
    "explanation": "Business planning helps identify risks, estimate costs, and allocate resources."
  },
  {
    "q": "Which of the following documents is most useful in reconciling the balance between a buyer and a seller over a period?",
    "options": [
      "Receipt",
      "Invoice",
      "Statement of Account",
      "Delivery Note"
    ],
    "ans": "Statement of Account",
    "explanation": "A Statement of Account reconciles the balance between buyer and seller."
  },
  {
    "q": "Which of the following best explains why inventory turnover is important?",
    "options": [
      "It measures employees' salaries.",
      "It determines government revenue.",
      "It shows how efficiently inventory is converted into sales.",
      "It determines the exchange rate."
    ],
    "ans": "It shows how efficiently inventory is converted into sales.",
    "explanation": "Inventory turnover shows how efficiently inventory converts into sales."
  },
  {
    "q": "Which of the following is the greatest advantage of maintaining good corporate governance?",
    "options": [
      "Elimination of taxation",
      "Guaranteed annual profits",
      "Improved transparency, accountability, and investor confidence",
      "Removal of legal responsibilities"
    ],
    "ans": "Improved transparency, accountability, and investor confidence",
    "explanation": "Good corporate governance improves transparency, accountability, investor confidence."
  },
  {
    "q": "Which of the following best summarizes the role of commerce in a modern economy?",
    "options": [
      "Commerce is concerned only with buying and selling consumer goods.",
      "Commerce is limited to transportation and communication services.",
      "Commerce replaces production by creating wealth directly.",
      "Commerce facilitates the exchange and distribution of goods and services, supports production, creates employment, promotes domestic and international trade, and contributes significantly to economic development."
    ],
    "ans": "Commerce facilitates the exchange and distribution of goods and services, supports production, creates employment, promotes domestic and international trade, and contributes significantly to economic development.",
    "explanation": "Commerce facilitates exchange, supports production, creates jobs, and drives economic development."
  }
]
};
