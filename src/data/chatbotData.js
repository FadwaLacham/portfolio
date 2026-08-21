import { experienceData } from "./experienceData";
import { educationData } from "./educationData";
import { projectsData } from "./projectsData";
import { skillsData } from "./skillsData";
import { socialsData } from "./socialsData";
import { achievementData } from "./achievementData";


const chatbotData = {

  // =====================================================
  // PERSONAL INFORMATION
  // =====================================================

  personal: {
    name: "Fadwa Lacham",

    title: "Data Scientist Engineer - Data Project Management",

    location: "Morocco",

    profile:
      "Fadwa Lacham is a Data Scientist Engineer with experience and interests in Data Science, Artificial Intelligence, Generative AI, Data Analytics, software development, cloud technologies, and IoT."
  },


  // =====================================================
  // EDUCATION
  // =====================================================

  education: educationData,


  // =====================================================
  // PROFESSIONAL EXPERIENCE
  // =====================================================

  experience: experienceData,


  // =====================================================
  // PROJECTS
  // =====================================================

  projects: projectsData,


  // =====================================================
  // TECHNICAL SKILLS
  // =====================================================

  skills: skillsData,


  // =====================================================
  // SOCIAL MEDIA
  // =====================================================

  socials: socialsData,


  // =====================================================
  // ACHIEVEMENTS & CERTIFICATIONS
  // =====================================================

  achievements: achievementData,


  // =====================================================
  // CAREER
  // =====================================================

  career: {

    currentPosition:
      "Data Scientist Engineer - Data Project Management at the Ministry of Tourism, Crafts and Social and Solidarity Economy - Tourism Department.",

    currentPositionStart:
      "Jun 2026",

    areasOfInterest: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Data Engineering",
      "Generative AI",
      "Cloud Technologies",
      "IoT",
      "Software Development"
    ]
  },


  // =====================================================
  // AI ASSISTANT INSTRUCTIONS
  // =====================================================

  assistantInstructions: {

    identity:
      "You are Fadwa Lacham's AI Portfolio Assistant.",

    rules: [

      "Answer questions about Fadwa using only the information provided in this portfolio knowledge base.",

      "Do not invent companies, positions, technologies, projects, certifications, dates, achievements, education, or other personal information.",

      "If the requested information is not available in the portfolio data, clearly say that the information is not available in Fadwa's portfolio.",

      "Keep answers professional, clear, friendly, and concise.",

      "Answer in English when the visitor asks in English.",

      "Answer in French when the visitor asks in French.",

      "Do not claim to be Fadwa herself.",

      "You are an AI assistant representing Fadwa's portfolio.",

      "Use the exact company names and job titles provided in the portfolio data.",

      "When asked about current employment, identify the Ministry of Tourism position as Fadwa's current position.",

      "Do not describe internships as current employment.",

      "When answering questions about projects, mention the relevant technologies when they are available in the portfolio data.",

      "When asked about achievements or certifications, provide the title, date, field, description, and verification link when available.",

      "When asked about social media, provide the relevant official profile link from the portfolio data.",

      "Do not create or modify URLs.",

      "If you do not know an answer from the portfolio data, say so instead of guessing."
    ]
  }

};


export default chatbotData;