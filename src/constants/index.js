import mylogo from "../assets/mylogo.png";
import anthropic from "../assets/anthropic.svg";
import { uta, gtu, google, aws, databricks, salesforce, ubms, edgecenter, utasg } from "../assets";
import { SiOpenai } from "react-icons/si";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiOutlineTwitter } from "react-icons/ai";

export const resumeLink =
  "https://drive.google.com/file/d/1lrZPm4B_9xkI0MDDK4aDS3reOXuLivqH/view?usp=sharing";

export const repoLink = "https://github.com/devarshvora/devarsh-vora-portfolio";

export const callToAction = "https://www.linkedin.com/in/devarshvora/";

export const logo = mylogo;

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "recommendations",
    title: "Recommendations",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: uta,
    title: "The University of Texas at Arlington",
    degree: "Master of Science",
    duration: "August 2023 - May 2025",
    content1: "Major: Computer Science",
    content2: "GPA: 3.83",
    transcript: "https://drive.google.com/file/d/1-zpgO8oB5c6RG2wfaREbtk7HRTz3FVfy/view?usp=sharing",
  },
  {
    id: "education-2",
    icon: gtu,
    title: "Gujarat Technological University",
    degree: "Bachelor of Technology",
    duration: "August 2019 - May 2023",
    content1: "Major: Information and Communication Technology",
    content2: "GPA: 3.54",
    transcript: "https://drive.google.com/file/d/1JPCnF56Fyn9-66iJt9C1mJcDVzcNYEIU/view?usp=sharing", 
  },
];


export const certificationProfile = "https://www.linkedin.com/in/devarshvora/details/certifications/";
export const recommendationSource = "https://www.linkedin.com/in/devarshvora/details/recommendations/?detailScreenTabIndex=0";

export const certifications = [
  {
    Icon: SiOpenai,
    title: "Agents and Workflows",
    issuer: "OpenAI",
    description: "Covered the foundations of building agent workflows, including tool use and structured multi-step task design.",
    credential: "https://academy.openai.com/public/certificate/593udxlnte",
  },
  {
    icon: anthropic,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    description: "Developed a practical foundation for evaluating AI capabilities, limitations, and responsible use in everyday work.",
    credential: "https://verify.skilljar.com/c/4ew4fjjegj5k",
  },
  {
    icon: google,
    title: "Data Analysis with R Programming",
    issuer: "Google",
    description:
      "Completed Google’s Data Analysis with R Programming course, demonstrating strong skills in data wrangling and analysis.",
    credential:
      "https://www.coursera.org/account/accomplishments/verify/6LF8E7SVJOPJ",
  },
  {
    icon: aws,
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    description:
      "Gained foundational knowledge of key AWS services like EC2, S3, and RDS, and learned how to use them to design scalable and cost-effective cloud solutions.",
    credential:
      "https://www.coursera.org/account/accomplishments/verify/2KO8KNQGP2GY",
  },
  {
    icon: databricks,
    title: "Databricks Fundamentals Accreditation",
    issuer: "Databricks",
    description:
      "Validated foundational understanding of the Databricks Lakehouse platform and big data concepts.",
    credential:
      "https://credentials.databricks.com/ef8b8751-e93d-4869-b1bc-eab35ef91a33#acc.e3LJh6aP",
  },
  {
    icon: salesforce,
    title: "Salesforce Analytics: Reports & Dashboards",
    issuer: "Salesforce",
    description:
      "Built dynamic Salesforce reports and dashboards to deliver insights, enhance data visibility, and support customer success operations.",
    credential:
      "https://coursera.org/share/5de332ea6ea1e875a0ac26d21c661a45",
  },
];

export { skillCategories, experiences, projects } from "./portfolio";

// Add links to blogs here (In case if you have any)
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Research Publication (IEEE Xplore)",
    title: "A Comprehensive Study on Techniques Utilized for Attention Detection",
    duration: "30 December 2022",
    content: [
      {
        text: "Explored automated attention detection using behavioral and physiological signals, leveraging eye-tracking sensors and computer vision to analyze focus, distraction, and cognitive engagement.",
        link: "https://ieeexplore.ieee.org/abstract/document/9988691",
      },
      {
        text: "Reviewed multiple attention measurement techniques within a ternary data framework, identifying ECG-based analysis as a reliable and scalable approach due to strong signal quality.",
        link: "",
      },
    ],
    logo: edgecenter,
  },
  {
    id: 2,
    organisation: "TRIO-Upward Bound",
    title: "Student Advisor",
    duration: "May 2024 - July 2024",
    content: [
      {
        text: "Guided students in exploring STEM subjects through interactive discussions and hands-on activities, incorporating real-world examples and basic data visualization techniques to enhance understanding.",
        link: "",
      },
      {
        text: "Fostered a supportive learning environment by encouraging students to analyze data, identify patterns, and present findings visually, nurturing critical thinking skills.",
        link: "",
      },
    ],
    logo: ubms,
  },
  {
    id: 3,
    organisation: "Student Government - UTA",
    title: "Legislative Relations Committee Member",
    duration: "Aug 2023 - Dec 2023",
    content: [
      {
        text: "Contributed to policy development and advocacy initiatives as a Legislative Relations Committee Member, focusing on drafting resolutions and supporting student-focused policies.",
        link: "",
      },
      {
        text: "Strengthened skills in strategic planning, consensus-building, and analytical problem-solving while collaborating with peers to address campus-wide issues.",
        link: "",
      },
    ],
    logo: utasg,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/devarshvora",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/devarshvora",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:devarshvora45@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/DevarshVora",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/devarsh.vora",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Devarsh Vora",
  githubUsername: "devarshvora",
  tagLine: "I build AI and data systems that earn their place in everyday workflows. Open to conversations where thoughtful analysis and reliable engineering can turn a difficult problem into a useful product.",
  intro: "Turning chaos into clarity, either taming unruly datasets, uncovering hidden stories, or engineering the next big breakthrough. Data isn’t just numbers; it’s my playground for ideas, from intelligent automation to AI systems built for real-world use.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
