const expertise = [
  {
    id: 0,
    title: "System Analyst",
    desc: "As a System Analyst specializing in website and mobile systems, I play a key role in bridging business needs with technical solutions. I am experienced in analyzing system requirements, designing functional specifications, and ensuring that the system architecture aligns with both user needs and technical feasibility. I collaborate closely with developers, UI/UX designers, and QA teams to ensure the seamless integration of features across platforms. My approach emphasizes clarity, scalability, and user-centered design, resulting in web and mobile applications that are not only functional but also efficient and easy to maintain. Throughout the development lifecycle, I ensure that every component of the system supports the overall business goals and delivers a strong user experience.",
  },
  {
    id: 1,
    title: "Project Management",
    desc: "I prioritize effective collaboration across teams by utilizing tools such as Jira, Notion, and internal forums to streamline communication, manage tasks, and track project progress. I use Jira to break down system requirements into actionable user stories, manage sprints, and ensure timely delivery of features. Notion supports centralized documentation where I maintain system flow diagrams, business logic, and meeting outcomes to ensure all stakeholders stay aligned. I also contribute actively in team forums and collaborative spaces to resolve blockers, validate assumptions, and drive continuous improvement. With the integration of platforms like Serum, I support structured feedback loops and maintain visibility over system issues or enhancement requests—ensuring that development stays on track and aligned with strategic goals.",
  },
  {
    id: 2,
    title: "Web Developer",
    desc: "As a Web Developer, I specialize in building dynamic and scalable web applications using modern frameworks such as Laravel for back-end development, and React and Next.js for front-end interfaces. I have strong experience in designing RESTful APIs, implementing server-side logic, and creating responsive, user-friendly UI components. My technical skillset includes writing efficient SQL queries for complex data operations, as well as integrating databases seamlessly into web systems. Beyond web development, I also leverage Python for data processing and analysis, and use tools like Google Colab and Tableau to create insightful data visualizations. This combination of development and analytical capabilities allows me to build web platforms that are not only functional but also data-driven and aligned with user needs and business goals.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    desc: "A UI/UX designer works to bridge the gap between technology and people by creating digital products that are both intuitive and visually appealing. The process starts with User Experience (UX), which involves researching user needs and behaviors to map out a logical and easy-to-navigate journey within an app or website. This foundational structure is then brought to life through User Interface (UI) design, which focuses on the visual elements like color schemes, typography, and buttons. In short, their goal is to transform complex systems into a seamless and enjoyable experience, ensuring the final product is not just functional, but also feels good to use.",
  },
  {
    id: 4,
    title: "Particularly Git",
    desc: "I am proficient in version control systems, particularly Git, and have extensive experience working with platforms such as GitHub, GitLab, and Bitbucket. I utilize Git to manage code efficiently, collaborate with team members, and maintain clean project histories through branching, merging, and pull request workflows. My familiarity with these platforms enables me to contribute to both private and open-source repositories, implement CI/CD pipelines, and ensure seamless integration across development environments. I am comfortable navigating and resolving conflicts, conducting code reviews, and maintaining repository structures that support scalable and maintainable software development.",
  },
  {
    id: 5,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
