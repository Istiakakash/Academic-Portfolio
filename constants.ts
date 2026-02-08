import { Publication, EducationItem, ExperienceItem, ResearchInterest, Award, SkillCategory, TeachingItem, ScholarStats, GalleryItem } from './types';

export const PROFILE = {
  imageUrl: "https://drive.google.com/uc?export=view&id=1Xh05dRgesPed345A40aIdP_4CDrPIA38",
  name: "Sarif Istiak Akash",
  title: "Food Science Researcher | Prospective PhD Student",
  tagline: "Bioethanol, Phytochemical and Bioactive Compounds Valorization from Agro-Waste",
  email: "sarif.istiak.akash@gmail.com",
  secondaryEmail: "akash.23250407@bau.edu.bd",
  phone: "+8801676929657",
  location: "Bangladesh Agricultural University, Mymensingh-2202",
  socials: {
    linkedin: "https://www.linkedin.com/in/sarif-istiak-akash/", 
    googleScholar: "https://scholar.google.com/citations?user=hj1QhPoAAAAJ&hl=en", 
    orcid: "https://orcid.org/0009-0005-4927-2178", 
  },
  orcidId: "0009-0005-4927-2178"
};

export const SCHOLAR_STATS: ScholarStats = {
  citations: 45, // Update this with your actual citation count
  hIndex: 4,     // Update with actual h-index
  i10Index: 2,   // Update with actual i10-index
  citationsSince2019: 45,
  hIndexSince2019: 4,
  i10IndexSince2019: 2
};

export const RESEARCH_GALLERY: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=800",
    title: "Laboratory Analysis",
    description: "Conducting high-performance liquid chromatography (HPLC) analysis for phytochemical quantification."
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800",
    title: "Sample Preparation",
    description: "Processing of cashew apple agro-waste for bioethanol production optimization."
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    title: "Data Analysis",
    description: "Statistical modeling using Design-Expert for Response Surface Methodology."
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    title: "Scientific Writing",
    description: "Documenting research findings for publication in high-impact journals."
  }
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "Advanced Phytochemical Recovery & Waste Valorization",
    description: "Utilizing green extraction technologies (e.g., ultrasound, microwave-assisted, and supercritical fluid extraction) to recover bioactive polyphenols and antioxidants from agro-industrial residues for the circular bioeconomy."
  },
  {
    title: "Sustainable Bioprocessing",
    description: "Developing waste-to-value technologies for the circular bioeconomy, focusing on agro-industrial residues."
  },
  {
    title: "Bioethanol Production",
    description: "Second-generation bioethanol production and fermentation optimization using agro-industrial residues."
  },
  {
    title: "Bioactive Compound Stabilization & Functional Food Design",
    description: "Developing micro- and nano-encapsulation delivery systems to enhance the stability, bioaccessibility, and antioxidant retention of plant-derived phytochemicals in fortified food matrices"
  },
  {
    title: "Food Safety",
    description: "Dietary exposure assessment and risk characterization in low-resource settings."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Food Engineering",
    institution: "Bangladesh Agricultural University",
    location: "Mymensingh, Bangladesh",
    period: "Oct 2023 - Mar 2025",
    gpa: "3.875 / 4.00 (Merit Position: 1st)",
    details: [
      "Thesis: Optimization of bioethanol production from cashew apple juice using Response Surface Methodology (RSM)"
    ]
  },
  {
    degree: "Bachelor of Science in Food Engineering",
    institution: "Bangladesh Agricultural University",
    location: "Mymensingh, Bangladesh",
    period: "Jan 2018 - Aug 2023",
    gpa: "3.689 / 4.00 (Merit Position: 2nd)",
    details: [
      "Undergrad Research Project: Risk Assessment of Selective Additives in Processed Food Samples Collected from Selected Area."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Research Assistant",
    project: "Development of Value-Added Products from Cashew Apple",
    organization: "Funded By: Krishi Gobeshona Foundation (KGF)",
    period: "Oct 2023 - Sep 2025",
    responsibilities: [
      "Led RSM-based optimization of bioethanol fermentation from cashew apple juice, achieving 7.6% (v/v) yield and 84% tannin removal.",
      "Quantified total phenols, flavonoids, and antioxidant capacity (DPPH IC50) via spectrophotometric and HPLC methods.",
      "Designed and executed field-to-lab workflow for cashew apple collection, preservation, and phytochemical extraction.",
      "Analyzed data using R and Design-Expert; authored project reports and stakeholder workshops."
    ]
  },
  {
    role: "Research Assistant",
    project: "Total Diet Study of Bangladesh: Analysis of contaminants, Toxins and Harmful Residues",
    organization: "Funded By: FAO",
    period: "May 2020 - Apr 2021",
    responsibilities: [
      "Performed multi-regional sampling and chemical analysis of artificial colors, preservatives, SO₂, and aflatoxins using HPLC-DAD, UV-Vis, and ELISA.",
      "Calculated dietary exposure (ADI, Hazard Index) for children and adults; contributed to national food-safety policy recommendations."
    ]
  }
];

export const TEACHING_EXPERIENCE: TeachingItem[] = [
  {
    role: "Lecturer",
    institution: "Daffodil International University, Bangladesh",
    period: "Sept 2025 – Jan 2026",
    courses: ["Food Chemistry", "Food Packaging Engineering", "Water and Beverage Technology",],
    description: "Delivered theoretical lectures for undergraduate courses, developed course materials (slides, notes, and problem sets), and assessed student performance through quizzes, assignments, and examinations."
  },
  {
    role: "Graduate Teaching Assistant",
    institution: "Bangladesh Agricultural University",
    period: "Jan 2024 – Oct 2025",
    courses: ["Food Chemistry", "Food Processing & Preservation"],
    description: "Assisted in conducting laboratory sessions for undergraduate students, demonstrating instrumentation techniques (HPLC, Spectrophotometry) and grading laboratory reports."
  },
  {
    role: "Undergraduate Mentor",
    institution: "BAU Food Engineering Club",
    period: "2022 – 2023",
    description: "Mentored junior students on research methodology, scientific writing, and data analysis tools like R and SPSS."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    authors: "Altaf-Un-Nahar, M., Pretha, S. J., Akash, S. I., & Karim, M. R.",
    year: "2026",
    title: "Coordinated Postharvest Trait Networks in Green Chilli, Guava, and Tomato: Multivariate Insights into Physicochemical, Antioxidant, and Mineral Quality Retention",
    journal: "Journal of Agriculture and Food Research",
    doi: "10.1016/j.jafr.2026.102686",
    link: "https://doi.org/10.1016/j.jafr.2026.102686",
    type: "Journal Article"
  },
  {
    id: 2,
    authors: "Most Altaf-Un-Nahar... Sarif Istiak Akash... et al.",
    year: "2025",
    title: "Nutritional profile of thankuni (Centella asiatica) grown at Netrokona Bangladesh",
    journal: "J Med Plants Stud",
    doi: "10.22271/plants.2025.v13.i4b.1900",
    type: "Journal Article"
  },
  {
    id: 3,
    authors: "Rafi, K. N., Aziz, M. G., Islam, M. A., Akash, S. I., Jakariya, M., & Rahman, M.",
    year: "2025",
    title: "Assessment of the bioaccessibility of zinc in the selected biofortified food grains",
    journal: "Scientific Reports, 15(1), 7457",
    doi: "10.1038/s41598-024-67856-3",
    type: "Journal Article"
  },
  {
    id: 4,
    authors: "Pramanik, T., ... Akash, S. I., ... et al.",
    year: "2025",
    title: "Functional yogurt: An approach to fortify yogurt by polyphenols extracted from Bengal currant",
    journal: "Applied Food Research, 5(1), 100715",
    doi: "10.1016/j.afres.2025.100715",
    type: "Journal Article"
  },
  {
    id: 5,
    authors: "Jany, J. F., Nupur, A. H., Akash, S. I., ... et al.",
    year: "2024",
    title: "Fortification of functional yogurt by the phytochemicals extracted from pomegranate peel",
    journal: "Applied Food Research, 4(2), 100479",
    doi: "10.1016/j.afres.2024.100479",
    type: "Journal Article"
  },
  {
    id: 6,
    authors: "Trisha, S., ... Akash, S.I., ... et al.",
    year: "2023",
    title: "Evaluation of the physicochemical qualities and antioxidant properties of some Bangladeshi varieties of honey: A comparative study",
    journal: "Journal of Agriculture and Food Research, 14, 100837",
    doi: "10.1016/j.jafr.2023.100837",
    type: "Journal Article"
  },
  {
    id: 7,
    authors: "Hasan, M. Z., ... Akash, S. I., ... et al.",
    year: "2023",
    title: "Incorporation of orange peel polyphenols in buttermilk, maltodextrin and gum acacia suspension improve its stability",
    journal: "Food and Humanity, 1, 1345-1354",
    doi: "10.1016/j.foohum.2023.10.001",
    type: "Journal Article"
  },
  {
    id: 8,
    authors: "Aziz, M. G., Islam, M. R., Akash, S. I., & Uddin, M. B.",
    year: "2022",
    title: "Present Status and Future Scope of Improving Crude Salt Production in Bangladesh",
    journal: "BIMRAD Journal, 3, 01-14",
    link: "https://bimradbd.org/journal/article/present-status-and-future-scope-of-improving-crude-salt-production-in-bangladesh",
    type: "Journal Article"
  },
  {
    id: 9,
    authors: "Akash, S.I., Yasmin, S., Jahan, I.T., Aziz, M.G.",
    year: "2025",
    title: "Production Scales and Industrial Production Processes of Dietary Supplements and Nutraceuticals: An Overview",
    journal: "Dietary Supplements and Nutraceuticals. Springer, Singapore",
    doi: "10.1007/978-981-97-9936-7_30",
    type: "Book Chapter"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Laboratory Skills",
    skills: ["HPLC-DAD", "UV-Vis Spectrophotometry", "Fermentation scale-up", "AOAC proximate analysis", "DPPH/TPC/TFC assays", "ELISA"]
  },
  {
    category: "Computational & Statistical",
    skills: ["R (Moderate)", "GraphPad Prism", "XLSTAT", "SPSS", "Python (Basic)", "Design-Expert"]
  },
  {
    category: "General",
    skills: ["Experimental Design", "ANOVA", "Sustainable Food Systems", "Grant Writing"]
  }
];

export const AWARDS: Award[] = [
  { title: "National Science and Technology Fellowship", date: "November 2024" },
  { title: "Education Board Scholarship", date: "2010, 2012, 2015, 2017" }
];

export const LEADERSHIP: ExperienceItem[] = [
  {
    role: "Vice President",
    organization: "BAU Food Engineering Club",
    period: "2022–2024",
    responsibilities: ["Increased membership 40% and organized 10+ club related programs."]
  },
  {
    role: "Assistant Organizing Secretary",
    organization: "BAU Nutrition Club",
    period: "2019–2023",
    responsibilities: ["Coordinated public health campaigns reaching 500+ participants."]
  },
  {
    role: "Volunteer Project Lead",
    organization: "Volunteer for Bangladesh (JAAGO Foundation)",
    period: "2019–2022",
    responsibilities: ["Led community service initiatives."]
  }
];