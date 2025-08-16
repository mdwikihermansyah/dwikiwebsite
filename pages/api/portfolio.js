/**
 * * Portfolio data for API response.
 * ! Pastikan setiap objek memiliki properti 'technologiesUsed' sebagai array, meskipun kosong.
 * ! Ini mencegah error 'Cannot read properties of undefined (reading 'map')' di frontend.
 */
const portfolio = [
  {
    id: 1,
    projectName: "Simdiklat",
    url: "https://simdiklat-bpsdm.jakarta.go.id/",
    image: "projects/erp.png",
    projectDetail:
      "Simdiklat Web is the official platform of BPSDM DKI Jakarta, providing data management services, information, and competency development for civil servants within the Jakarta Provincial Government.",
    technologiesUsed: [
      { tech: "NextJS" },
      { tech: "TailwindCSS" },
      { tech: "REST API's" },
      { tech: "Oracle Database" },
      { tech: "JavaScript" },
    ],
  },
  {
    id: 2,
    projectName: "CMS BPSDM Website",
    url: "https://bpsdm.jakarta.go.id/secure/login",
    image: "projects/absco.png",
    projectDetail:
      "The BPSDM Jakarta Website is the official platform of the Human Resources Development Agency of DKI Jakarta Province, providing information, services, and data management related to the development of civil servant competencies within the Jakarta Provincial Government.",
    technologiesUsed: [
      { tech: "Laravel" },
      { tech: "Bootstrap" },
      { tech: "REST API's" },
      { tech: "MySQL" },
      { tech: "PHP" },
    ],
  },
  {
    id: 1,
    projectName: "Indonesia Pavilion",
    url: "https://expo2025indonesia.id/",
    image: "projects/indonesiapavilion.png",
    projectDetail:
      "The Indonesia Pavilion website serves as a virtual showcase promoting Indonesia's leading products, especially in the context of the World Expo 2025 Osaka. The Indonesia Pavilion at Expo 2025 Osaka will feature a curated selection of innovations, food products, and handicrafts from local artisans and brands.",
    technologiesUsed: [
      { tech: "VueJS" },
      { tech: "TailwindCSS" },
      { tech: "REST API's" },
      { tech: "PostgreSQL" },
      { tech: "JavaScript" },
    ],
  },
  {
    id: 0,
    projectName: "Geoparks Youth",
    url: "https://geoparksyouth.net/",
    image: "projects/geoparkweb.png",
    projectDetail:
      "Geoparks Youth is a platform that provides a space for young people to share their ideas and projects related to geoparks.",
    technologiesUsed: [
      { tech: "CodeIgniter" },
      { tech: "Bootstrap" },
      { tech: "REST API's" },
      { tech: "MySQL" },
      { tech: "PHP" },
    ],
  },
  {
    id: 0,
    projectName: "BPBUMD Website",
    url: "https://bpbumd.jakarta.go.id/",
    image: "projects/bpbumdweb.png",
    projectDetail:
      "The BPBUMD Jakarta Website is the official platform of the Jakarta Provincial Business Development Agency, providing information, services, and data management related to the development of business in the Jakarta Provincial Government.",
    technologiesUsed: [
      { tech: "Laravel" },
      { tech: "Bootstrap" },
      { tech: "REST API's" },
      { tech: "MySQL" },
      { tech: "PHP" },
    ],
  },
  {
    id: 1,
    projectName: "BPSDM Website",
    url: "https://bpsdm.jakarta.go.id/web",
    image: "projects/bpsdmweb.png",
    projectDetail:
      "The BPSDM Jakarta Website is the official platform of the Human Resources Development Agency of DKI Jakarta Province, providing information, services, and data management related to the development of civil servant competencies within the Jakarta Provincial Government.",
    technologiesUsed: [
      { tech: "NextJS" },
      { tech: "TailwindCSS" },
      { tech: "REST API's" },
      { tech: "MySQL" },
    ],
  },
  {
    id: 2,
    projectName: "Simfoni",
    url: "https://simdiklat-bpsdm.jakarta.go.id/sim-diklat/auth/login/simfoni",
    image: "projects/simfoniweb.png",
    projectDetail:
      "SIMFONI, or Innovation Information System, is a dashboard that displays products resulting from training programs.",
    technologiesUsed: [
      { tech: "Laravel" },
      { tech: "Bootstrap" },
      { tech: "MySQL" },
      { tech: "PHP" },
    ],
  },
  {
    id: 1,
    projectName: "Pintar",
    url: "https://simdiklat-bpsdm.jakarta.go.id/pintar",
    image: "projects/pintarweb.png",
    projectDetail:
      "Portal Informasi Kompetensi Aparatur is a dashboard that displays data and information on competency development for each employee, which can be utilized by leaders and personnel managers in regional or unit offices within the DKI Jakarta Provincial Government.",
    technologiesUsed: [
      { tech: "Nextjs with SSR" },
      { tech: "Laravel" },
      { tech: "REST API's" },
      { tech: "Ant Design" },
      { tech: "TailwindCSS" },
    ],
  },
  {
    id: 2,
    projectName: "Simdiklat Laravel",
    url: "https://simdiklat-bpsdm.jakarta.go.id/sim-diklat",
    image: "projects/simdiklatlaravel.png",
    projectDetail:
      "Simdiklat Laravel is a dashboard that displays data and information on competency development for each employee, which can be utilized by leaders and personnel managers in regional or unit offices within the DKI Jakarta Provincial Government.",
    technologiesUsed: [
      { tech: "Laravel" },
      { tech: "Bootstrap" },
      { tech: "REST API's" },
      { tech: "MySQL" },
      { tech: "PHP" },
    ],
  },
  {
    id: 1,
    projectName: "Eoffice",
    url: "https://spatay.com/",
    image: "projects/spatay.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [
      { tech: "ReactJS" },
      { tech: "NodeJS" },
      { tech: "REST API's" },
      { tech: "Ant Design" },
      { tech: "TailwindCSS" },
    ],
  },
  {
    id: 2,
    projectName: "LSP PNJ",
    url: "https://spatay.com/",
    image: "projects/spatay.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [{ tech: "ReactJS" }],
  },
  {
    id: 1,
    projectName: "MaritimMuda",
    url: "https://spatay.com/",
    image: "projects/spatay.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [{ tech: "ReactJS" }],
  },
  {
    id: 2,
    projectName: "BecDex",
    url: "https://spatay.com/",
    image: "projects/spatay.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [{ tech: "ReactJS" }],
  },
  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];

/**
 * * API handler untuk mengembalikan data portfolio.
 * * Selalu mengembalikan array dengan struktur konsisten.
 */
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
