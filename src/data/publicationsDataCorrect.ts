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

// export const fullLengthPublications: Publication[] = [
import { Publication } from './publicationsData';  // because both are in the same "data" folder

export const publicationsDataCorrect: Publication[] = [
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
    title: "Ionotropic receptors mediate olfactory learning and memory in Drosophila",
    authors: "Md Zeeshan Ali, Anushree, Aarif Ahsan, Mohammad Shamsul Ola, Rizwanul Haque, Jawaid Ahsan",
    journal: "Insect Science",
    year: "2023",
    impactFactor: "4.0",
    doi: "10.1111/1744-7917.13308",
    issn: "Online ISSN:1744-7917, Print ISSN:1672-9609",
    category: "Neuroscience"
  },
  {
    number: 53,
    title: "Phenylacetaldehyde induced olfactory conditioning in Drosophila melanogaster (Diptera: Drosophilidae) larvae",
    authors: "Ali MZ, Anushree A, Bilgrami AL, Ahsan A, Ola MS, Rizwanul Haque, Ahsan J",
    journal: "J Insect Sci",
    year: "2023",
    impactFactor: "2.2",
    doi: "10.1093/jisesa/iead112",
    pmid: "38092368",
    issn: "EISSN 1536-2442",
    category: "Entomology"
  },
  {
    number: 52,
    title: "Mesenchyme-Derived Exosomes: Shaping the Next Era of Stroke Treatment",
    authors: "Arshi Waseem, Saudamini, Rizwanul Haque, Miroslaw Janowski, Syed Shadab Raza",
    journal: "Neuroprotection",
    year: "2023",
    impactFactor: "2.8",
    doi: "10.1002/nep3.30",
    pmid: "38283953",
    issn: "ISSN:2770-7296",
    category: "Neuroscience"
  },
  {
    number: 51,
    title: "Coevolution based immunoinformatics approach considering variability of epitopes to combat different strains: A case study using spike protein of SARS-CoV-2",
    authors: "Saurav Kumar Mishra, Prerna Priya, Gyan Prakash Rai, Rizwanul Haque, Asheesh Shanker",
    journal: "Computers in Biology and Medicine",
    year: "2023",
    impactFactor: "7.7",
    doi: "10.1016/j.compbiomed.2023.107233",
    issn: "ISSN 0010-4825",
    category: "Bioinformatics"
  },
  {
    number: 50,
    title: "Insight into the transcription factors regulating Ischemic stroke and glioma in response to shared stimuli",
    authors: "Arshi Waseem, Sumaiya Rashid, Khalid Rashid, Mohsin Ali Khan, Rehan Khan, Rizwanul Haque, Pankaj Seth, Syed Shadab Raza",
    journal: "Seminars in Cancer Biology",
    year: "2023",
    impactFactor: "17.012",
    doi: "10.1016/j.semcancer.2023.04.006",
    issn: "ISSN 1044-579X",
    category: "Cancer Research"
  },
  {
    number: 49,
    title: "MCC950 Regulates Stem Cells Destiny Through Modulating SIRT3-NLRP3 Inflammasome Dynamics During Oxygen Glucose Deprivation",
    authors: "Prakash R, Kumari N, Siddiqui AJ, Khan AQ, Khan MA, Khan R, Rizwanul Haque, Robertson AA, Boltze J, Raza SS",
    journal: "Stem Cell Rev Rep",
    year: "2023",
    impactFactor: "6.692",
    doi: "10.1007/s12015-023-10520-6",
    pmid: "36811746",
    issn: "ISSN 2629-3269",
    category: "Stem Cell Research"
  },
  {
    number: 48,
    title: "Colorectal Cancer (CRC): Investigating the Expression of the Suppressor of Fused (SuFu) Gene and Its Relationship with Several Inflammatory Blood-Based Biomarkers",
    authors: "Rather, T.B.; Parveiz, I.; Bhat, G.A.; Rashid, G.; Akhtar, K.; Rizwanul Haque.; Ola, M.S.; Ali, M.; Wani, R.A.; Khan, I.Y.; Besina, S.; Mudassar, S.",
    journal: "Biomedicines",
    year: "2023",
    impactFactor: "4.75",
    doi: "10.3390/biomedicines11020540",
    category: "Cancer Research"
  },
  {
    number: 47,
    title: "Transcriptional Factors Targeting in Cancer Stem Cells for Tumor Modulation",
    authors: "Chaudhary, A. Raza, S. S & Rizwanul Haque",
    journal: "Seminars in Cancer Biology",
    year: "2023",
    impactFactor: "17.012",
    doi: "10.1016/j.semcancer.2022.12.009",
    issn: "ISSN 1044-579X",
    category: "Cancer Research"
  },
  {
    number: 46,
    title: "Cloning and functional characterization of arsenite oxidase (aoxB) gene associated with arsenic transformation in Pseudomonas sp. strain AK9",
    authors: "Satyapal, G. K., Kumar, R., Kumar, S., Singh, R. S., Ranjan, R. K., Kumar, K., Jha, A.K., Singh, N.P., Rizwanul Haque., Shanker, A & Kumar, N.",
    journal: "Gene",
    year: "2023",
    impactFactor: "3.913",
    doi: "10.1016/j.gene.2022.146926",
    issn: "ISSN: 0378-1119",
    category: "Molecular Biology"
  },
  {
    number: 45,
    title: "Modulation of Telomerase Gene in Liver Cancer by Natural Compounds",
    authors: "Archana Chaudhary, Premlata kumari, Sanobar Nazish, Rizwanul Haque",
    journal: "Journal of Scientific Research",
    year: "2022",
    impactFactor: "1.5",
    issn: "ISSN No. 0447-9483",
    category: "Cancer Research"
  },
  {
    number: 44,
    title: "Combinatorial Effect of Arsenic and Herbal Compounds in Telomerase-Mediated Apoptosis Induction in Liver Cancer",
    authors: "Chaudhary, A., Bhardwaj, S. K., Khan, A., Srivastava, A., Sinha, K. K., Ali, M., & Rizwanul Haque",
    journal: "Biological Trace Element Research",
    year: "2022",
    impactFactor: "4.081",
    doi: "10.1007/s12011-022-03156-z",
    issn: "ISSN: 0163-4984",
    category: "Cancer Research"
  },
  {
    number: 43,
    title: "Induction of Iron Stress in Hepatocellular Carcinoma Cell Lines by Siderophore of Aspergillus nidulans Towards Promising Anticancer Effect",
    authors: "Khan A, Singh P, Chaudhary A, Rizwanul Haque, Singh P, Mishra AK, Sarkar A, Srivastava A",
    journal: "Biol Trace Elem Res",
    year: "2021",
    impactFactor: "4.081",
    doi: "10.1007/s12011-021-02980-z",
    pmid: "34705190",
    category: "Cancer Research"
  },
  {
    number: 42,
    title: "Analysis of mitochondrial DNA copy number variation in blood and tissue samples of metastatic breast cancer Patients",
    authors: "Neeraj Kumar Rai, Panjwani G, Rizwanul Haque, Ghosh AK, Sharma L.K*",
    journal: "Biochemistry and Biophysics Reports",
    year: "2021",
    impactFactor: "0.522",
    doi: "10.1016/j.bbrep.2021.100931",
    issn: "ISSN: 2405-5808",
    category: "Cancer Research"
  },
  {
    number: 41,
    title: "Differential regulation of mitochondrial complex I and oxidative stress based on metastatic potential of colon cancer cells",
    authors: "Neeraj Kumar Rai, Meenakshi Tiwari, Rizwanul Haque, Lokendra Kumar Sharma",
    journal: "Oncology letters",
    year: "2020",
    impactFactor: "3.111",
    doi: "10.3892/ol.2020.12176",
    issn: "Print ISSN: 1792-1074",
    category: "Cancer Research"
  },
  {
    number: 40,
    title: "Promising Therapeutic Targets to halt the Global Pandemic of SARS CoV-2",
    authors: "Archana Chaudhary, Rizwanul Haque",
    journal: "International Journal of Applied Biology and Pharmaceutical Technology",
    year: "2020",
    impactFactor: "1.8",
    issn: "ISSN: 0976-4550",
    category: "Virology"
  },
  {
    number: 39,
    title: "Therapeutic Role of Arsenic Trioxide in Cancer Prevention",
    authors: "Chaudhary A & Rizwanul Haque",
    journal: "Archives of Medicine",
    year: "2020",
    impactFactor: "1.2",
    doi: "10.36648/1989-5216.12.4.315",
    issn: "ISSN 1989-5216",
    category: "Cancer Research"
  },
  {
    number: 38,
    title: "Insights into the DNA binding induced thermal stabilization of transcription factor FOXP3",
    authors: "Prakash A, Kumar V, Lynn AM, Rizwanul Haque",
    journal: "J Biomol Struct Dyn",
    year: "2018",
    impactFactor: "4.15",
    doi: "10.1080/07391102.2018.1486228",
    issn: "ISSN 0739-1102",
    category: "Structural Biology"
  },
  {
    number: 37,
    title: "Arsenic trioxide induces apoptosis and inhibits the growth of human liver cancer cells",
    authors: "Sadaf N, Kumar N, Ali M, Ali V, Bimal S, Rizwanul Haque",
    journal: "Life Sci",
    year: "2018",
    impactFactor: "6.78",
    doi: "10.1016/j.lfs.2018.05.006",
    issn: "ISSN 0024-3205",
    category: "Cancer Research"
  },
  {
    number: 36,
    title: "Possible bioremediation of arsenic toxicity by isolating indigenous bacteria from the middle Gangetic plain of Bihar, India",
    authors: "Ghanshyam Kumar Satyapala, Santosh Kumar Mishraa, Amrita Srivastavab, Rajesh Kumar Ranjanc, Krishna Prakasha, Rizwanul Haque, Nitish Kumara",
    journal: "Biotechnology Reports",
    year: "2018",
    impactFactor: "4.47",
    doi: "10.1016/j.btre.2018.02.002",
    issn: "ISSN 2215-017X",
    category: "Environmental Biology"
  },
  {
    number: 35,
    title: "Immunomodulatory role of arsenic on regulatory T cells",
    authors: "Rizwanul Haque, Chaudhary A, Sadaf N",
    journal: "Endocr Metab Immune Disord Drug Targets",
    year: "2017",
    impactFactor: "2.387",
    doi: "10.2174/1871530317666170818114454",
    issn: "ISSN:1871-5303",
    category: "Immunology"
  },
  {
    number: 34,
    title: "Leishmania donovani infection activates TLR 2, 4 expressions and TGF-β mediated apoptosis in renal tissues",
    authors: "Vinod Kumar, Neeraj Tiwari, Mallikarjun Rao Gedda, Rizwanul Haque & Rakesh Singh",
    journal: "Brazilian Journal of Infectious Diseases",
    year: "2017",
    impactFactor: "3.257",
    doi: "10.1016/j.bjid.2017.06.008",
    issn: "ISSN: 1413-8670",
    category: "Infectious Diseases"
  },
  {
    number: 33,
    title: "c‐Myc‐Induced Survivin Is Essential for Promoting the Notch Dependent T Cell Differentiation from Hematopoietic Stem Cells",
    authors: "Rizwanul Haque, Jianyong Song , Mohammad Haque, Fengyang Lei , Praneet Sandhu , Bing Ni, Songguo Zheng , Deyu Fang , Jin‐Ming Yang and Jianxun Song",
    journal: "Genes (Basel)",
    year: "2017",
    impactFactor: "4.141",
    pmid: "28272325",
    issn: "ISSN 2073-4425",
    type: "priority",
    category: "Stem Cell Research"
  },
  {
    number: 32,
    title: "Anti-inflammatory role of sesamin in STZ induced mice model of diabetic retinopathy",
    authors: "Saif Ahmad, Nehal M. El-Sherbiny, Mohammad Sarwar Jamal, Faisal A. Al-Zahrani, Rizwanul Haque, Raziuddin Khan, Sayed Kashif Zaidi, Mohammed H. Al-Qahtani, Gregory I. Liou, Kanchan Bhatia",
    journal: "Journal of Neuroimmunology",
    year: "2016",
    impactFactor: "3.221",
    doi: "10.1016/j.jneuroim.2016.04.002",
    issn: "ISSN: 0165-5728",
    category: "Neuroscience"
  },
  {
    number: 31,
    title: "Integrating qualitative and quantitative tools for the detection and identification of lectins in major human diseases",
    authors: "Ashraf, G. M., Perveen, A., Zaidi, S. K., Tabrez, S., Shakil, S., Ahmad, A., Rizwanul Haque., Ahsan, J., Kamal, M. A., B anu, N.",
    journal: "Protein and Peptide Letters",
    year: "2015",
    impactFactor: "1.927",
    issn: "ISSN: 1875-5305",
    category: "Biochemistry"
  },
  {
    number: 30,
    title: "Mitochondria: A Key Player in Stem Cell Fate",
    authors: "Nadra Sadaf, Jawaid Ahsan, Saif Ahmad, Rizwanul Haque",
    journal: "Cell Biology",
    year: "2015",
    impactFactor: "2.5",
    issn: "ISSN: 2330-0175",
    category: "Cell Biology"
  },
  {
    number: 29,
    title: "Sesamin attenuates neurotoxicity in mouse model of ischemic brain stroke",
    authors: "Saif Ahmad, Nehal M. Elsherbiny, Rizwanul Haque, M Badruzzaman Khan, Tauheed Ishrat, Zahoor A. Shah, Mohammad M. Khan, Mehboob Ali, Arshad Jamal, Deepshikha Pande Katare, Gregory I. Liou, Kanchan Bhatia",
    journal: "Neurotoxicology",
    year: "2014",
    impactFactor: "4.398",
    doi: "10.1016/j.neuro.2014.07.001",
    issn: "ISSN: 0161-813X",
    category: "Neuroscience"
  },
  {
    number: 28,
    title: "Effect of ozone exposure and infection on bronchoalveolar lavage: Sex differences in response patterns",
    authors: "Mikerov AN, Phelps DS, Gan X, Umstead TM, Rizwanul Haque, Wang G, Floros J",
    journal: "Toxicol Lett",
    year: "2014",
    impactFactor: "4.271",
    doi: "10.1016/j.toxlet.2014.04.007",
    issn: "ISSN: 0378-4274",
    category: "Toxicology"
  },
  {
    number: 27,
    title: "Habb-e-Asgand, polyherbal Unani formulation protects liver and antioxidative enzymes against paracetamol induced hepatotoxicity",
    authors: "Mehboob Ali, Sagheer Ahmed Khan, Peter S Chang, Rizwanul Haque Kanchan Bhatia and Saif Ahmad",
    journal: "Pharmaceutical Biology",
    year: "2014",
    impactFactor: "3.889",
    doi: "10.3109/13880209.2013.839714",
    issn: "ISSN: 1744-5116",
    category: "Pharmacology"
  },
  {
    number: 26,
    title: "Modulation of Autoimmune Diseases by iPS Cells",
    authors: "Lei F, Rizwanul Haque, Xiong X, Song J",
    journal: "Methods Mol Biol",
    year: "2014",
    impactFactor: "0.368",
    doi: "10.1007/978-1-4939-1453-1_30",
    issn: "ISSN 1064-3745",
    category: "Cell Biology"
  },
  {
    number: 25,
    title: "Regulation of A1 by OX40 Contributes to CD8(+) T Cell Survival and Anti-Tumor Activity",
    authors: "Lei F, Song J, Rizwanul Haque, Haque M, Xiong X, Fang D, Croft M, Song J",
    journal: "PLoS One",
    year: "2013",
    impactFactor: "3.752",
    doi: "10.1371/journal.pone.0070635",
    issn: "eISSN-1932-6203",
    category: "Immunology"
  },
  {
    number: 24,
    title: "Transgenic expression of survivin compensates for OX40-deficiency in driving Th2 development and allergic inflammation",
    authors: "Lei F, Song J, Rizwanul Haque, Xiong X, Fang D, Wu Y, Lens SM, Croft M, Song J",
    journal: "Eur J Immunol",
    year: "2013",
    impactFactor: "6.68",
    doi: "10.1002/eji.201243077",
    issn: "ISSN: 1521-4141",
    category: "Immunology"
  },
  {
    number: 23,
    title: "Programming of regulatory T cells from pluripotent stem cells and prevention of autoimmunity",
    authors: "Rizwanul Haque, Fengyang Lei, Baohua Zhao, Yuzhang Wu and Jianxun Song",
    journal: "J Immunology",
    year: "2012",
    impactFactor: "5.43",
    doi: "10.4049/jimmunol.1200767",
    issn: "ISSN 0022-1767",
    type: "priority",
    category: "Immunology"
  },
  {
    number: 22,
    title: "Directed Differentiation of Induced Pluripotent Stem Cells towards T Lymphocytes",
    authors: "Fengyang Lei, Rizwanul Haque, Xiaofang Xiong, and Jianxun Song",
    journal: "J. Vis. Exp",
    year: "2012",
    impactFactor: "1.35",
    doi: "10.3791/3986",
    issn: "ISSN: 1940-087X",
    category: "Stem Cell Research"
  },
  {
    number: 21,
    title: "Neuroprotective Effect of Sesame Seed Oil in 6-Hydroxydopamine Induced Neurotoxicity in Mice Model: Cellular, Biochemical and Neurochemical Evidence",
    authors: "Saif Ahmad, M Badruzzaman Khan, Hoda MN, Kanchan Bhatia, Rizwanul Haque, Inayat Salim Fazili, Arshad Jamal, Jafar Salamat Khan, Deepshikha Pande Katare",
    journal: "Neurochemical Research",
    year: "2012",
    impactFactor: "4.2",
    doi: "10.1007/s11064-011-0671-0",
    issn: "ISSN: 1573-6903",
    category: "Neuroscience"
  },
  {
    number: 20,
    title: "The Regulation of FoxP3-Expressing Regulatory T Cells",
    authors: "Rizwanul Haque, Dylan Lei FY, Xiaofang Xiong and Jianxun Song",
    journal: "Endocrine, Metabolic & Immune Disorders - Drug Targets",
    year: "2011",
    impactFactor: "1.9",
    pmid: "21696363",
    issn: "ISSN:0008-5472",
    category: "Immunology"
  },
  {
    number: 19,
    title: "In vivo programming of tumor antigen-specific T lymphocytes from pluripotent stem cells to promote cancer immunosurveillance",
    authors: "Fengyang Lei, Baohua Zhao, Rizwanul Haque, Xiaofang Xiong Lynn Budgeon, Neil D. Christensen Yuzhang Wu and Jianxun Song",
    journal: "Cancer Res",
    year: "2011",
    impactFactor: "11.2",
    pmid: "21628492",
    issn: "ISSN 1871-5303",
    type: "priority",
    category: "Cancer Research"
  },
  {
    number: 18,
    title: "Differences in the BAL proteome after Klebsiella pneumoniae infection in wild type and SP-A-/- mice",
    authors: "Mehboob Ali, Todd M Umstead, Rizwanul Haque, Anatoly N Mikerov, Willard M. Freeman Joanna Floros and David S Phelps",
    journal: "Proteome science",
    year: "2010",
    impactFactor: "2.882",
    pmid: "20565803",
    issn: "ISSN 1477-5956",
    category: "Proteomics"
  },
  {
    number: 17,
    title: "Foxp3 and Bcl-xl cooperatively promote regulatory T cell persistence and prevention of arthritis development",
    authors: "Rizwanul Haque, Fengyang Lei, Xiaofang Xiong, Yuzhang Wu, and Jianxun Song",
    journal: "Arthritis Research & Therapy",
    year: "2010",
    impactFactor: "5.606",
    pmid: "20384988",
    issn: "ISSN 1477-5956",
    category: "Immunology"
  },
  {
    number: 16,
    title: "Standardization and estimation of nitrate reductase activity in the leaves of Ammi majus L. (Bishops weed) in relation to sulphur deficiency and seed yield",
    authors: "Saif Ahmad, Inayat S. Fazili, Rizwanul Haque, Samdun Nisa Khan and Malik Zainul Abdin",
    journal: "Australian Journal of Crop Science",
    year: "2010",
    impactFactor: "0.261",
    issn: "ISSN 1835-2707",
    category: "Plant Science"
  },
  {
    number: 15,
    title: "T lineage differentiation from induced pluripotent stem (iPS) cell",
    authors: "Dylan Lei FY#, Rizwanul Haque#, (#: First authors equally contributed) Lauren Weiler, Kent Varan and Jianxun Song",
    journal: "Cellular Immunology",
    year: "2009",
    impactFactor: "4.3",
    doi: "10.1016/j.cellimm.2009.07.001",
    issn: "ISSN: 0008-8749",
    type: "rapid",
    category: "Stem Cell Research"
  },
  {
    number: 14,
    title: "Effect of low doses of lipopolysaccharide priors to ozone exposure in bronchoalveolar lavage: Differences between wild type and surfactant protein A-deficient mice",
    authors: "Rizwanul Haque, Todd M. Umstead, Kwangmi Ahn, David S. Phelps and Joanna Floros",
    journal: "Pneumon",
    year: "2009",
    impactFactor: "0.137",
    issn: "ISSN 1105-848X",
    category: "Respiratory Medicine"
  },
  {
    number: 13,
    title: "Cooperation Between Molecular Targets of Costimulation in Promoting T Cell Persistence and Tumor Regression",
    authors: "Baohua Zhao, Aihua Song, Rizwanul Haque, Fengyang Lei, Lauren Weiler, Xiaofang Xiong, Yuzhang Wu, Michael Croft, and Jianxun Song",
    journal: "Journal of Immunology",
    year: "2009",
    impactFactor: "5.43",
    doi: "10.4049/jimmunol.0803648",
    issn: "ISSN 0022-1767",
    category: "Immunology"
  },
  {
    number: 12,
    title: "The Impact of Surfactant Protein-A on Ozone-Induced Changes in the Mouse Bronchoalveolar Lavage Proteome",
    authors: "Rizwanul Haque, Todd M Umstead, Willard M. Freeman, David S. Phelps & Joanna Floros",
    journal: "Proteome science",
    year: "2009",
    impactFactor: "2.82",
    doi: "10.1186/1477-5956-7-12",
    issn: "ISSN: 1477-5956",
    category: "Proteomics"
  },
  {
    number: 11,
    title: "Ablation of SP-A has a negative impact on the susceptibility of mice to Klebsiella pneumoniae infection after ozone exposure: sex differences",
    authors: "Anatoly N. Mikerov, Rizwanul Haque, Xiaozhuang Gan, Xiaoxuan Guo, David S. Phelps, and Joanna Floros",
    journal: "Respiratory Research",
    year: "2008",
    impactFactor: "7.162",
    doi: "10.1186/1465-9921-9-77",
    issn: "ISSN 1465-9921",
    category: "Respiratory Medicine"
  },
  {
    number: 10,
    title: "Intracellular signals of T cell costimulation",
    authors: "Song JX, Tylan Lei FY, Xiong XF and Rizwanul Haque",
    journal: "Cellular & Molecular Immunology",
    year: "2008",
    impactFactor: "24.1",
    issn: "ISSN 1672-7681",
    category: "Immunology"
  },
  {
    number: 9,
    title: "The Effect of Acute Ozone Exposure on Lung Inflammation in Surfactant Protein-A-Deficient Mice",
    authors: "Rizwanul Haque, Todd M. Umstead, Padmavathi Ponnuru, Xiaoxuan Guo, Samuel Hawgood, David S. Phelps, and Joanna Floros",
    journal: "Toxicology and Applied Pharmacology",
    year: "2007",
    impactFactor: "4.46",
    doi: "10.1016/j.taap.2007.01.002",
    issn: "ISSN 0041-008X",
    category: "Toxicology"
  },
  {
    number: 8,
    title: "Aqueous extract of walnut (Juglans regia L.) protects mice against cyclophosphamide induced biochemical toxicity",
    authors: "Rizwanul Haque, Bin-Hafeez B, Parvez. S, Pandey S, Saeed I, Ali. M & Raisuddin S",
    journal: "Human and Experimental Toxicology",
    year: "2003",
    impactFactor: "2.8",
    doi: "10.1191/0960327103ht384oa",
    issn: "ISSN 0960-3271",
    category: "Toxicology"
  },
  {
    number: 7,
    title: "Immunomodulatory effect of Trigonella foenum graecum in mice",
    authors: "Bin-Hafeez B, Rizwanul Haque, Parvez. S, Pandey. S, Saeed I & Raisuddin S",
    journal: "International Immunopharmacology",
    year: "2003",
    impactFactor: "5.714",
    doi: "10.1016/S1567-5769(02)00235-1",
    issn: "ISSN 1567-5769",
    category: "Immunology"
  },
  {
    number: 6,
    title: "Modulatory effect of copper on non-enzymatic antioxidants in freshwater fish Channa punctatus (Bloch.)",
    authors: "Parvez S, Sayeed I, Pandey S, Ahmad A, Ahmad I, Bin-Hafeez B, Rizwanul Haque & Raisuddin S",
    journal: "Biological Trace Element Research",
    year: "2003",
    impactFactor: "4.081",
    doi: "10.1385/BTER:93:1-3:237",
    issn: "ISSN 0163-4984",
    category: "Environmental Biology"
  },
  {
    number: 5,
    title: "Biomarkers of Oxidative Stress: A Comparative Study of River Yamuna Fish Wallago attu (Bl. & Schn.)",
    authors: "Pandey S, Parvez S, Sayeed I, Rizwanul Haque, Bin-Hafeez B & Raisuddin S",
    journal: "The Science of The Total Environment",
    year: "2003",
    impactFactor: "9.8",
    doi: "10.1016/S0048-9697(02)00628-2",
    issn: "ISSN 0048-9697",
    category: "Environmental Science"
  },
  {
    number: 4,
    title: "Oxidative stress biomarkers of exposure to deltamethrin in freshwater fish, Channa punctatus Bloch",
    authors: "Sayeed I, Parvez S, Pandey S, Bin-Hafeez B, Rizwanul Haque and Raisuddin S",
    journal: "Ecotoxicology and Environmental Safety",
    year: "2003",
    impactFactor: "6.8",
    doi: "10.1016/S0147-6513(02)00160-5",
    issn: "ISSN 0147-6513",
    category: "Environmental Toxicology"
  },
  {
    number: 3,
    title: "Protective effects of Emblica officinalis Gaertn. in cyclophosphamide-treated mice",
    authors: "Rizwanul Haque, Bin-Hafeez B, Ahmad I, Parvez, Pandey S & Raisuddin S",
    journal: "Human and Experimental Toxicology",
    year: "2001",
    impactFactor: "2.8",
    doi: "10.1191/096032701718890522",
    issn: "ISSN 0960-3271",
    category: "Toxicology"
  },
  {
    number: 2,
    title: "Protective effect of Cassia occidentalis L. on cyclophosphamide-induced suppression of humoral immunity in mice",
    authors: "Bin-Hafeez B, Ahmad I, Rizwanul Haque & Raisuddin S",
    journal: "Journal of Ethnopharmacology",
    year: "2001",
    impactFactor: "5.4",
    doi: "10.1016/S0378-8741(01)00167-7",
    issn: "ISSN 0378-8741",
    category: "Pharmacology"
  },
  {
    number: 1,
    title: "Effect of endosulfan on anti oxidants of freshwater fish Channa punctatus Bloch. 1. Protection against lipid peroxidation in liver by copper pre-exposure",
    authors: "Pandey S, Ahmad I, Parvez S, Bin-Hafeez B. Rizwanul Haque & Raisuddin S",
    journal: "Archives of Environmental contamination and Toxicology",
    year: "2001",
    impactFactor: "3.62",
    doi: "10.1007/s002440010260",
    issn: "ISSN 0090-4341",
    category: "Environmental Toxicology"
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
