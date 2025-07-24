const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Politeknik Negeri Jakarta",
        degree: "Diploma, Informatics Engineering",
        detail:
          "Diploma in Informatics Engineering from Politeknik Negeri Jakarta.",
        year: "2020-2024",
      },
      {
        id: 1,
        title: "Kampus Merdeka",
        degree: "Internship",
        detail: "Internship in Web Development from Kampus Merdeka.",
        year: "2023",
      },
      {
        id: 2,
        title: "SMK 3 Perguruan Cikini",
        degree: "Computer and Network Engineering",
        detail:
          "Completed FSC part 1 and part 2 in Computer and Network Engineering from SMK 3 Perguruan Cikini.",
        year: "2017-2020",
      },
      {
        id: 3,
        title: "PT Rekayasa Industri",
        degree: "Internship",
        detail: "Internship in Network Engineering from PT Rekayasa Industri.",
        year: "2019",
      },
      {
        id: 4,
        title: "SMPN 253 Jakarta",
        degree: "Science",
        detail: "Completed Science subjects from SMPN 253 Jakarta",
        year: "2014-2017",
      },
      {
        id: 5,
        title: "SDI Al-Bayyinah",
        degree: "Science",
        detail: "Completed Science subjects from SDI Al-Bayyinah",
        year: "2008-2014",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "PT. Klakklik Inovasi Digital",
        role: "System Analyst",
        url: "https://klakklik.id/",
        desc: [
          "Analyzed systems for various digital platforms, including SIMFONI, BPSDM website, and SIMDIKLAT.",
          "Translated complex functional requirements into clear technical documentation and development tasks.",
          "Coordinated with internal stakeholders to streamline workflows and solve real operational challenges.",
          "Created and improved UI/UX wireframes and designs to ensure consistency and user focus.",
        ],
        year: "01/2025 - Present",
        location: "Jakarta, Indonesia",
      },
      {
        id: 2,
        title: "Maritim Muda Nusantara",
        role: "Website Developer & Administrator",
        url: "https://maritimmuda.id/",
        desc: [
          "Developed and maintained the company's website, ensuring it was responsive and user-friendly.",
          "Managed the company's social media accounts, creating and scheduling posts to engage with the target audience.",
          "Optimized website performance and SEO to improve online visibility and user engagement.",
          "Collaborated with the marketing team to create and implement digital marketing strategies.",
        ],
        year: "08/2023 - 01/2024",
        location: "Jakarta, Indonesia",
      },
      {
        id: 3,
        title: "PT Nusa Tekno Global",
        role: "Frontend Developer",
        url: "https://nusatekno.co.id/",
        desc: [
          "Developed and maintained the company's website, ensuring it was responsive and user-friendly.",
          "Collaborated with the marketing team to create and implement digital marketing strategies.",
          "Optimized website performance and SEO to improve online visibility and user engagement.",
        ],
        year: "01/2023 - 06/2023",
        location: "Jakarta, Indonesia",
      },
      {
        id: 4,
        title: "PT Arkatama Multi Solusi",
        role: "Internship",
        url: "https://arkatama.id/",
        desc: [
          "Developed and maintained the company's website, ensuring it was responsive and user-friendly.",
          "Collaborated with the marketing team to create and implement digital marketing strategies.",
          "Optimized website performance and SEO to improve online visibility and user engagement.",
        ],
        year: "08/2022 - 12/2022",
        location: "Jakarta, Indonesia",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
