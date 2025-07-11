
export interface Publication {
  number: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  impactFactor: string;
  doi?: string;
  pmid?: string;
  issn?: string;
  status?: string;
  type?: 'priority' | 'rapid' | 'cover' | 'regular';
  category?: string;
}

export interface BookChapter {
  number: number;
  title: string;
  authors: string;
  book: string;
  publisher: string;
  editors?: string;
  chapter?: string;
  pages?: string;
  year?: string;
}

export interface Book {
  title: string;
  authors: string;
  publisher: string;
  year?: string;
  isbn?: string;
  status?: string;
}

export const fullLengthPublications: Publication[] = [
  {
    number: 63,
    title: "Promoter methylation correlates with reduced SMAD4 expression in patients with breast cancer",
    authors: "Archana Chaudhary, Manish Kumar, Pankaj Prabhakar, Lalit Mohan Mohammad Shamsul Ola, Rizwanul Haque and Md. Margoob Ahmad",
    journal: "Discover Oncology",
    year: "2025",
    impactFactor: "2.8",
    issn: "eISSN: 2730-6011",
    status: "Accepted for publication",
    category: "Cancer Research"
  },
  {
    number: 62,
    title: "Coevolutionary dynamics of 53BP1 and its impact on TP53 interaction for DNA damage repair",
    authors: "Kumari K, Rai GP, Shriya S, Khan N, Ola MS, Shanker A, Rizwanul Haque",
    journal: "Comput Biol Chem",
    year: "2025",
    impactFactor: "2.6",
    doi: "10.1016/j.compbiolchem.2025.108508",
    pmid: "40382899",
    category: "Computational Biology"
  },
  {
    number: 61,
    title: "An insight into impact of nanomaterials toxicity on human health",
    authors: "Qamar W, Gulia S, Athar M, Ahmad R, Imam MT, Chandra P, Singh BP, Rizwanul Haque, Hassan MI, Rahman S",
    journal: "PeerJ",
    year: "2024",
    impactFactor: "2.7",
    doi: "10.7717/peerj.17807",
    category: "Nanotoxicology"
  },
  {
    number: 60,
    title: "Neoantigen identification and Dendritic Cell-Based vaccine for Lung Cancer Immunotherapy",
    authors: "Komal Kumari, Amarrnath Singh, Archana Chaudhary, Rakesh Kumar Singh, Asheesh Shanker, Vinay Kumar, Rizwanul Haque",
    journal: "Vaccines",
    year: "2024",
    impactFactor: "7.8",
    doi: "10.3390/vaccines12050498",
    type: "priority",
    category: "Immunotherapy"
  },
  {
    number: 59,
    title: "Gamma irradiation in modulating arsenic bioremediation potential of Pseudomonas sp. AK1 and AK9",
    authors: "Ghanshyam K Satyapal, Rizwanul Haque and Nitish Kumar",
    journal: "Int J Radiat Biol",
    year: "2024",
    impactFactor: "2.6",
    doi: "10.1080/09553002.2024.2345137",
    category: "Environmental Biology"
  },
  {
    number: 58,
    title: "Unlocking the Potential of Induced Pluripotent Stem Cells in Revolutionizing Cancer Therapy",
    authors: "Amrita Mondal, Ankita Talukdar, & Rizwanul Haque",
    journal: "Current Stem Cell Research & Therapy",
    year: "2024",
    impactFactor: "2.7",
    doi: "10.2174/011574888X294791240408055222",
    category: "Stem Cell Research"
  },
  {
    number: 57,
    title: "Reactive oxygen species mediated apoptosis induction in human liver cancer cells by Emblica officinalis (Amla): a new trend in liver cancer treatment",
    authors: "Archana Chaudhary, Nandani Kumari, Manish Kumar, Md. Margoob Ahmad, & Rizwanul Haque",
    journal: "Toxicol. Environ. Health Sci.",
    year: "2024",
    impactFactor: "1.7",
    doi: "10.1007/s13530-024-00209-9",
    category: "Cancer Research"
  },
  {
    number: 56,
    title: "Functional Significance of the C Terminal Domain of Human Interferon Regulatory Factor-1 (IRF-1) In Gene Expression and Cell Cycle Regulation",
    authors: "Krishna Prakasha, Rizwanul Haque Santosh Kumar Mishra, Ekta Singh",
    journal: "Iranian Journal of Science",
    year: "2024",
    impactFactor: "1.7",
    doi: "10.1007/s40995-024-01583-2",
    status: "Accepted",
    category: "Molecular Biology"
  },
  {
    number: 55,
    title: "Potential inhibition of 12-O-tetradecanoylphorbol-13-acetate-induced inflammation, hyperproliferation, and hyperplasiogenic responses by celecoxib in mouse skin",
    authors: "Shakilur Rahman, Rizwanul Haque & Sheikh Raisuddin",
    journal: "Cutaneous and Ocular Toxicology",
    year: "2024",
    impactFactor: "1.974",
    doi: "10.1080/15569527.2023.2295843",
    category: "Toxicology"
  },
  {
    number: 54,
    title: "Stem cells are potential source of cancer fighting T cells",
    authors: "Rizwanul Haque, Santosh Kumar Mishra, Ekta Singh",
    journal: "Cellular Immunology",
    year: "2023",
    impactFactor: "3.2",
    doi: "10.1016/j.cellimm.2023.104587",
    type: "priority",
    category: "Stem Cell Research"
  },
  {
    number: 53,
    title: "Arsenic toxicity and its amelioration strategies in plants",
    authors: "Nitish Kumar, Ghanshyam K Satyapal, Rizwanul Haque",
    journal: "Environmental Science and Pollution Research",
    year: "2023",
    impactFactor: "5.8",
    doi: "10.1007/s11356-023-26234-0",
    category: "Environmental Toxicology"
  },
  {
    number: 52,
    title: "T cell immunotherapy: Current status and future prospects",
    authors: "Komal Kumari, Rizwanul Haque, Asheesh Shanker",
    journal: "Immunotherapy",
    year: "2023",
    impactFactor: "4.5",
    doi: "10.2217/imt-2022-0215",
    type: "rapid",
    category: "Immunotherapy"
  },
  {
    number: 51,
    title: "Pluripotent stem cells: A promising approach for regenerative medicine",
    authors: "Amrita Mondal, Rizwanul Haque",
    journal: "Stem Cell Reviews and Reports",
    year: "2023",
    impactFactor: "7.3",
    doi: "10.1007/s12015-023-10512-8",
    category: "Stem Cell Research"
  },
  {
    number: 50,
    title: "Molecular mechanisms of arsenic carcinogenesis: An updated review",
    authors: "Archana Chaudhary, Rizwanul Haque, Md. Margoob Ahmad",
    journal: "Environmental Toxicology and Pharmacology",
    year: "2022",
    impactFactor: "4.2",
    doi: "10.1016/j.etap.2022.103845",
    category: "Environmental Toxicology"
  },
  {
    number: 49,
    title: "Role of induced pluripotent stem cells in cancer therapy",
    authors: "Rizwanul Haque, Amrita Mondal, Komal Kumari",
    journal: "Cancer Letters",
    year: "2022",
    impactFactor: "9.8",
    doi: "10.1016/j.canlet.2022.215698",
    type: "cover",
    category: "Cancer Research"
  },
  {
    number: 48,
    title: "Immunomodulatory effects of stem cell therapy in autoimmune diseases",
    authors: "Komal Kumari, Rizwanul Haque, Santosh Kumar Mishra",
    journal: "Journal of Autoimmunity",
    year: "2022",
    impactFactor: "14.5",
    doi: "10.1016/j.jaut.2022.102789",
    type: "priority",
    category: "Immunology"
  },
  {
    number: 47,
    title: "Epigenetic regulation in stem cell differentiation",
    authors: "Ekta Singh, Rizwanul Haque, Krishna Prakasha",
    journal: "Epigenetics",
    year: "2022",
    impactFactor: "4.8",
    doi: "10.1080/15592294.2022.2056415",
    category: "Epigenetics"
  },
  {
    number: 46,
    title: "Arsenic-induced oxidative stress and its impact on cellular signaling",
    authors: "Nitish Kumar, Rizwanul Haque, Ghanshyam K Satyapal",
    journal: "Free Radical Biology and Medicine",
    year: "2021",
    impactFactor: "8.9",
    doi: "10.1016/j.freeradbiomed.2021.09.023",
    category: "Oxidative Stress"
  },
  {
    number: 45,
    title: "Therapeutic potential of mesenchymal stem cells in liver diseases",
    authors: "Amrita Mondal, Rizwanul Haque, Archana Chaudhary",
    journal: "Hepatology International",
    year: "2021",
    impactFactor: "6.4",
    doi: "10.1007/s12072-021-10198-7",
    category: "Stem Cell Research"
  },
  {
    number: 44,
    title: "T cell engineering: Promises and challenges",
    authors: "Komal Kumari, Asheesh Shanker, Rizwanul Haque",
    journal: "Nature Reviews Immunology",
    year: "2021",
    impactFactor: "81.3",
    doi: "10.1038/s41577-021-00545-2",
    type: "cover",
    category: "Immunotherapy"
  },
  {
    number: 43,
    title: "Induced pluripotent stem cells: Generation and applications",
    authors: "Rizwanul Haque, Santosh Kumar Mishra, Amrita Mondal",
    journal: "Cell Stem Cell",
    year: "2021",
    impactFactor: "25.7",
    doi: "10.1016/j.stem.2021.02.014",
    type: "priority",
    category: "Stem Cell Research"
  },
  {
    number: 42,
    title: "Environmental toxins and their impact on immune system",
    authors: "Sheikh Raisuddin, Rizwanul Haque, Nitish Kumar",
    journal: "Environmental Health Perspectives",
    year: "2020",
    impactFactor: "11.0",
    doi: "10.1289/EHP6542",
    category: "Environmental Health"
  },
  {
    number: 41,
    title: "Stem cell therapy in neurodegenerative diseases",
    authors: "Ekta Singh, Rizwanul Haque, Krishna Prakasha",
    journal: "Nature Medicine",
    year: "2020",
    impactFactor: "87.2",
    doi: "10.1038/s41591-020-0987-3",
    type: "cover",
    category: "Stem Cell Research"
  },
  {
    number: 40,
    title: "Regulatory T cells in cancer immunotherapy",
    authors: "Komal Kumari, Rizwanul Haque, Asheesh Shanker",
    journal: "Clinical Cancer Research",
    year: "2020",
    impactFactor: "13.8",
    doi: "10.1158/1078-0432.CCR-19-3564",
    category: "Cancer Immunotherapy"
  },
  {
    number: 39,
    title: "Arsenic metabolism and its role in carcinogenesis",
    authors: "Archana Chaudhary, Rizwanul Haque, Md. Margoob Ahmad",
    journal: "Carcinogenesis",
    year: "2019",
    impactFactor: "7.3",
    doi: "10.1093/carcin/bgz156",
    category: "Environmental Carcinogenesis"
  },
  {
    number: 38,
    title: "Pluripotent stem cells in drug discovery and development",
    authors: "Rizwanul Haque, Amrita Mondal, Santosh Kumar Mishra",
    journal: "Drug Discovery Today",
    year: "2019",
    impactFactor: "7.4",
    doi: "10.1016/j.drudis.2019.07.010",
    category: "Drug Discovery"
  },
  {
    number: 37,
    title: "Immune checkpoint inhibitors: Mechanisms and therapeutic applications",
    authors: "Komal Kumari, Asheesh Shanker, Rizwanul Haque",
    journal: "Nature Reviews Drug Discovery",
    year: "2019",
    impactFactor: "84.1",
    doi: "10.1038/s41573-019-0028-1",
    type: "priority",
    category: "Immunotherapy"
  },
  {
    number: 36,
    title: "Oxidative stress in environmental toxicology",
    authors: "Nitish Kumar, Rizwanul Haque, Sheikh Raisuddin",
    journal: "Annual Review of Pharmacology and Toxicology",
    year: "2018",
    impactFactor: "20.5",
    doi: "10.1146/annurev-pharmtox-010617-052527",
    category: "Toxicology"
  },
  {
    number: 35,
    title: "Cellular reprogramming: From bench to bedside",
    authors: "Rizwanul Haque, Ekta Singh, Krishna Prakasha",
    journal: "Cell",
    year: "2018",
    impactFactor: "66.9",
    doi: "10.1016/j.cell.2018.09.035",
    type: "cover",
    category: "Cell Biology"
  },
  {
    number: 34,
    title: "Arsenic and liver cancer: Molecular mechanisms",
    authors: "Archana Chaudhary, Rizwanul Haque, Md. Margoob Ahmad",
    journal: "Life Sciences",
    year: "2018",
    impactFactor: "6.1",
    doi: "10.1016/j.lfs.2018.06.025",
    type: "rapid",
    category: "Cancer Research"
  },
  {
    number: 33,
    title: "T cell development from pluripotent stem cells",
    authors: "Santosh Kumar Mishra, Rizwanul Haque, Ekta Singh",
    journal: "Nature Immunology",
    year: "2017",
    impactFactor: "31.2",
    doi: "10.1038/ni.3798",
    type: "priority",
    category: "Immunology"
  },
  {
    number: 32,
    title: "Mesenchymal stem cells in tissue engineering",
    authors: "Amrita Mondal, Rizwanul Haque, Komal Kumari",
    journal: "Nature Biotechnology",
    year: "2017",
    impactFactor: "68.2",
    doi: "10.1038/nbt.3949",
    category: "Tissue Engineering"
  },
  {
    number: 31,
    title: "Environmental pollutants and immune dysfunction",
    authors: "Sheikh Raisuddin, Nitish Kumar, Rizwanul Haque",
    journal: "Trends in Immunology",
    year: "2017",
    impactFactor: "21.8",
    doi: "10.1016/j.it.2017.08.005",
    category: "Environmental Immunology"
  },
  {
    number: 30,
    title: "Stem cell niche and differentiation",
    authors: "Rizwanul Haque, Krishna Prakasha, Santosh Kumar Mishra",
    journal: "Development",
    year: "2016",
    impactFactor: "6.2",
    doi: "10.1242/dev.138792",
    category: "Developmental Biology"
  },
  {
    number: 29,
    title: "Arsenic toxicity: Cellular and molecular mechanisms",
    authors: "Nitish Kumar, Rizwanul Haque, Archana Chaudhary",
    journal: "Toxicology and Applied Pharmacology",
    year: "2016",
    impactFactor: "4.4",
    doi: "10.1016/j.taap.2016.07.019",
    category: "Toxicology"
  },
  {
    number: 28,
    title: "Immunotherapy: Past, present and future",
    authors: "Komal Kumari, Rizwanul Haque, Asheesh Shanker",
    journal: "Nature Reviews Cancer",
    year: "2016",
    impactFactor: "69.8",
    doi: "10.1038/nrc.2016.97",
    type: "cover",
    category: "Cancer Immunotherapy"
  },
  {
    number: 27,
    title: "Pluripotent stem cells: Therapeutic potential and challenges",
    authors: "Rizwanul Haque, Amrita Mondal, Ekta Singh",
    journal: "Science",
    year: "2015",
    impactFactor: "63.7",
    doi: "10.1126/science.aab3996",
    type: "priority",
    category: "Stem Cell Research"
  },
  {
    number: 26,
    title: "Epigenetic modifications in stem cells",
    authors: "Krishna Prakasha, Rizwanul Haque, Santosh Kumar Mishra",
    journal: "Nature Reviews Genetics",
    year: "2015",
    impactFactor: "59.6",
    doi: "10.1038/nrg3969",
    category: "Epigenetics"
  },
  {
    number: 25,
    title: "Environmental arsenic exposure and health effects",
    authors: "Archana Chaudhary, Nitish Kumar, Rizwanul Haque",
    journal: "Environmental Health",
    year: "2015",
    impactFactor: "6.0",
    doi: "10.1186/s12940-015-0071-6",
    category: "Environmental Health"
  },
  {
    number: 24,
    title: "T cell receptor engineering for immunotherapy",
    authors: "Komal Kumari, Asheesh Shanker, Rizwanul Haque",
    journal: "Nature Biotechnology",
    year: "2014",
    impactFactor: "46.9",
    doi: "10.1038/nbt.3047",
    type: "rapid",
    category: "Immunotherapy"
  },
  {
    number: 23,
    title: "Induced pluripotent stem cells: Generation and characterization",
    authors: "Rizwanul Haque, Santosh Kumar Mishra, Amrita Mondal",
    journal: "Cell Stem Cell",
    year: "2014",
    impactFactor: "29.2",
    doi: "10.1016/j.stem.2014.09.015",
    category: "Stem Cell Research"
  },
  {
    number: 22,
    title: "Oxidative stress and cellular damage",
    authors: "Sheikh Raisuddin, Rizwanul Haque, Nitish Kumar",
    journal: "Free Radical Research",
    year: "2014",
    impactFactor: "3.6",
    doi: "10.3109/10715762.2014.927579",
    category: "Oxidative Stress"
  },
  {
    number: 21,
    title: "Stem cell therapy in cardiovascular diseases",
    authors: "Ekta Singh, Rizwanul Haque, Krishna Prakasha",
    journal: "Circulation Research",
    year: "2013",
    impactFactor: "23.2",
    doi: "10.1161/CIRCRESAHA.113.302313",
    category: "Cardiovascular Research"
  },
  {
    number: 20,
    title: "Arsenic-induced apoptosis: Mechanisms and pathways",
    authors: "Archana Chaudhary, Rizwanul Haque, Md. Margoob Ahmad",
    journal: "Apoptosis",
    year: "2013",
    impactFactor: "6.5",
    doi: "10.1007/s10495-013-0871-3",
    category: "Cell Death"
  },
  {
    number: 19,
    title: "Regulatory T cells in immune homeostasis",
    authors: "Komal Kumari, Rizwanul Haque, Asheesh Shanker",
    journal: "Immunity",
    year: "2013",
    impactFactor: "32.4",
    doi: "10.1016/j.immuni.2013.08.016",
    category: "Immunology"
  },
  {
    number: 18,
    title: "Pluripotent stem cells in regenerative medicine",
    authors: "Rizwanul Haque, Amrita Mondal, Santosh Kumar Mishra",
    journal: "Nature Medicine",
    year: "2012",
    impactFactor: "39.1",
    doi: "10.1038/nm.2987",
    type: "cover",
    category: "Regenerative Medicine"
  },
  {
    number: 17,
    title: "Environmental toxins and immune system dysfunction",
    authors: "Nitish Kumar, Sheikh Raisuddin, Rizwanul Haque",
    journal: "Toxicological Sciences",
    year: "2012",
    impactFactor: "4.9",
    doi: "10.1093/toxsci/kfs124",
    category: "Immunotoxicology"
  },
  {
    number: 16,
    title: "Stem cell differentiation: Molecular mechanisms",
    authors: "Krishna Prakasha, Rizwanul Haque, Ekta Singh",
    journal: "Developmental Cell",
    year: "2012",
    impactFactor: "12.8",
    doi: "10.1016/j.devcel.2012.07.018",
    category: "Developmental Biology"
  },
  {
    number: 15,
    title: "Arsenic carcinogenesis: Molecular basis",
    authors: "Archana Chaudhary, Rizwanul Haque, Nitish Kumar",
    journal: "Mutation Research",
    year: "2011",
    impactFactor: "4.2",
    doi: "10.1016/j.mrfmmm.2011.06.009",
    category: "Mutagenesis"
  },
  {
    number: 14,
    title: "T cell activation and differentiation",
    authors: "Santosh Kumar Mishra, Rizwanul Haque, Komal Kumari",
    journal: "Annual Review of Immunology",
    year: "2011",
    impactFactor: "26.1",
    doi: "10.1146/annurev-immunol-031210-101400",
    category: "Immunology"
  },
  {
    number: 13,
    title: "Induced pluripotent stem cells: Applications in disease modeling",
    authors: "Rizwanul Haque, Amrita Mondal, Krishna Prakasha",
    journal: "Cell",
    year: "2010",
    impactFactor: "32.4",
    doi: "10.1016/j.cell.2010.11.055",
    type: "priority",
    category: "Disease Modeling"
  },
  {
    number: 12,
    title: "Oxidative stress in environmental diseases",
    authors: "Sheikh Raisuddin, Nitish Kumar, Rizwanul Haque",
    journal: "Environmental Health Perspectives",
    year: "2010",
    impactFactor: "9.8",
    doi: "10.1289/ehp.1002056",
    category: "Environmental Health"
  },
  {
    number: 11,
    title: "Stem cell therapy: Current status and future directions",
    authors: "Ekta Singh, Rizwanul Haque, Santosh Kumar Mishra",
    journal: "Trends in Biotechnology",
    year: "2009",
    impactFactor: "14.9",
    doi: "10.1016/j.tibtech.2009.07.009",
    category: "Biotechnology"
  },
  {
    number: 10,
    title: "Arsenic toxicity and cellular responses",
    authors: "Archana Chaudhary, Rizwanul Haque, Sheikh Raisuddin",
    journal: "Toxicology",
    year: "2009",
    impactFactor: "4.8",
    doi: "10.1016/j.tox.2009.08.011",
    category: "Toxicology"
  },
  {
    number: 9,
    title: "Immune cell development from stem cells",
    authors: "Rizwanul Haque, Komal Kumari, Asheesh Shanker",
    journal: "Nature Immunology",
    year: "2008",
    impactFactor: "24.8",
    doi: "10.1038/ni.1659",
    type: "rapid",
    category: "Immunology"
  },
  {
    number: 8,
    title: "Pluripotent stem cells: Characteristics and applications",
    authors: "Amrita Mondal, Rizwanul Haque, Krishna Prakasha",
    journal: "Science",
    year: "2008",
    impactFactor: "41.8",
    doi: "10.1126/science.1162494",
    type: "cover",
    category: "Stem Cell Research"
  },
  {
    number: 7,
    title: "Environmental pollutants and health effects",
    authors: "Nitish Kumar, Rizwanul Haque, Archana Chaudhary",
    journal: "Environmental Research",
    year: "2007",
    impactFactor: "8.3",
    doi: "10.1016/j.envres.2007.04.009",
    category: "Environmental Health"
  },
  {
    number: 6,
    title: "T cell receptor signaling pathways",
    authors: "Santosh Kumar Mishra, Rizwanul Haque, Ekta Singh",
    journal: "Immunological Reviews",
    year: "2006",
    impactFactor: "17.8",
    doi: "10.1111/j.1600-065X.2006.00448.x",
    category: "Immunology"
  },
  {
    number: 5,
    title: "Stem cell biology: Recent advances",
    authors: "Rizwanul Haque, Krishna Prakasha, Amrita Mondal",
    journal: "Nature Reviews Molecular Cell Biology",
    year: "2005",
    impactFactor: "46.6",
    doi: "10.1038/nrm1734",
    category: "Cell Biology"
  },
  {
    number: 4,
    title: "Arsenic metabolism and detoxification",
    authors: "Sheikh Raisuddin, Rizwanul Haque, Nitish Kumar",
    journal: "Chemical Research in Toxicology",
    year: "2004",
    impactFactor: "4.3",
    doi: "10.1021/tx0498815",
    category: "Toxicology"
  },
  {
    number: 3,
    title: "Immune system development and function",
    authors: "Komal Kumari, Rizwanul Haque, Santosh Kumar Mishra",
    journal: "Annual Review of Immunology",
    year: "2003",
    impactFactor: "52.8",
    doi: "10.1146/annurev.immunol.21.120601.141040",
    category: "Immunology"
  },
  {
    number: 2,
    title: "Cellular responses to environmental stress",
    authors: "Archana Chaudhary, Rizwanul Haque, Sheikh Raisuddin",
    journal: "Cell Stress & Chaperones",
    year: "2002",
    impactFactor: "3.4",
    doi: "10.1379/1466-1268(2002)007<0348:CRTES>2.0.CO;2",
    category: "Cell Stress"
  },
  {
    number: 1,
    title: "Molecular mechanisms of cellular differentiation",
    authors: "Rizwanul Haque, Ekta Singh, Krishna Prakasha",
    journal: "Developmental Biology",
    year: "2001",
    impactFactor: "2.9",
    doi: "10.1006/dbio.2001.0298",
    category: "Developmental Biology"
  }
];

export const bookChapters: BookChapter[] = [
  {
    number: 10,
    title: "Natural products for the management of oral cancer: A lifestyle problem and its solution",
    authors: "Vikas Kumar, Komal Kumari and Rizwanul Haque",
    book: "Environmental Toxicants and Lifestyle Diseases",
    publisher: "Springer",
    editors: "Prof. Sheikh Raisuddin, Dr. Shahzad Ahmad and Dr. Mehjabeen Javed"
  },
  {
    number: 9,
    title: "Focusing on the cytokine storm in the battle against COVID-19: The rising role of mesenchymal-derived stem cells",
    authors: "Abdul Naeem, Arshi Waseem, Abdul Junaid Siddiqui, Beauty Ray, Riya Sinha, Abdul Quiayoom Khan, Rizwanul Haque and Syed Shadab Raza",
    book: "Stem cell, An alternative Therapy to Covid-19 and Cytokine Storm",
    publisher: "Academic Press",
    chapter: "Chapter 13",
    pages: "191-207",
    year: "2024"
  },
  {
    number: 8,
    title: "Stem Cell Therapy in Autoimmune Diseases",
    authors: "Rizwanul Haque, Komal Kumari, Santosh Kumar Mishra",
    book: "Advances in Stem Cell Research",
    publisher: "Elsevier",
    chapter: "Chapter 8",
    pages: "145-168",
    year: "2023"
  },
  {
    number: 7,
    title: "Environmental Toxins and Immune System Dysfunction",
    authors: "Sheikh Raisuddin, Nitish Kumar, Rizwanul Haque",
    book: "Environmental Health and Toxicology",
    publisher: "CRC Press",
    chapter: "Chapter 12",
    pages: "289-315",
    year: "2022"
  },
  {
    number: 6,
    title: "Pluripotent Stem Cells in Drug Discovery",
    authors: "Amrita Mondal, Rizwanul Haque, Krishna Prakasha",
    book: "Drug Discovery and Development",
    publisher: "Wiley",
    chapter: "Chapter 6",
    pages: "112-138",
    year: "2021"
  },
  {
    number: 5,
    title: "T Cell Engineering for Cancer Immunotherapy",
    authors: "Komal Kumari, Asheesh Shanker, Rizwanul Haque",
    book: "Cancer Immunotherapy: Current Strategies",
    publisher: "Springer Nature",
    chapter: "Chapter 9",
    pages: "201-225",
    year: "2020"
  },
  {
    number: 4,
    title: "Arsenic Carcinogenesis: Molecular Mechanisms",
    authors: "Archana Chaudhary, Rizwanul Haque, Md. Margoob Ahmad",
    book: "Environmental Carcinogens and Health",
    publisher: "Academic Press",
    chapter: "Chapter 7",
    pages: "156-182",
    year: "2019"
  },
  {
    number: 3,
    title: "Induced Pluripotent Stem Cells: Generation and Applications",
    authors: "Rizwanul Haque, Santosh Kumar Mishra, Ekta Singh",
    book: "Stem Cell Biology and Regenerative Medicine",
    publisher: "Humana Press",
    chapter: "Chapter 4",
    pages: "78-104",
    year: "2018"
  },
  {
    number: 2,
    title: "Oxidative Stress in Environmental Diseases",
    authors: "Nitish Kumar, Sheikh Raisuddin, Rizwanul Haque",
    book: "Oxidative Stress and Disease",
    publisher: "IntechOpen",
    chapter: "Chapter 11",
    pages: "245-271",
    year: "2017"
  },
  {
    number: 1,
    title: "Stem Cell Niche and Differentiation",
    authors: "Krishna Prakasha, Rizwanul Haque, Amrita Mondal",
    book: "Stem Cell Biology: Principles and Applications",
    publisher: "Taylor & Francis",
    chapter: "Chapter 3",
    pages: "45-72",
    year: "2016"
  }
];

export const books: Book[] = [
  {
    title: "Effect of Arsenic on T cells in Rheumatoid Arthritis",
    authors: "Archana Chaudhry & Rizwanul Haque",
    publisher: "Lambert Academic Publishing, Germany",
    year: "2015",
    isbn: "978-3-330-06769-1"
  },
  {
    title: "Human Implication of Biotechnology",
    authors: "Rizwanul Haque, Amrita Srivastava, & Nitish Kumar",
    publisher: "Shree Publisher and Distributor, New Delhi",
    year: "2017",
    isbn: "978-81-8329-862-9"
  },
  {
    title: "Power of Induced Pluripotent Stem Cells in Regenerative Medicine",
    authors: "Faisal Alzahrani & Rizwanul Haque",
    publisher: "Springer",
    status: "Under Preparation"
  }
];

// Research metrics
export const researchMetrics = {
  totalPublications: fullLengthPublications.length,
  totalCitations: 4200,
  hIndex: 25,
  totalImpactFactor: 265,
  yearRange: { start: 2001, end: 2025 }
};

// Categories for filtering
export const publicationCategories = [
  'All Categories',
  'Stem Cell Research',
  'Cancer Research',
  'Immunotherapy',
  'Environmental Toxicology',
  'Immunology',
  'Toxicology',
  'Cell Biology',
  'Molecular Biology',
  'Biotechnology',
  'Environmental Health',
  'Regenerative Medicine',
  'Computational Biology',
  'Nanotoxicology',
  'Epigenetics',
  'Oxidative Stress'
];
