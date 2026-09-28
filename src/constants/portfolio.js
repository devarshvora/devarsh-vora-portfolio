import { uta, infolabz as cyberdome, deloitte as crystalvoxx, matricesLogo, qksLogo, deloitteLogo, nba_analysis, mbti_prediction,
  semantic_search, etl_weather, earthquake_pipeline } from "../assets";
import { SiPython, SiR, SiJavascript, SiPytorch, SiTensorflow, SiScikitlearn,
  SiStreamlit, SiFastapi, SiApacheairflow, SiApachespark, SiDatabricks,
  SiPowerbi, SiTableau, SiPostgresql, SiElasticsearch, SiSupabase,
  SiAmazonaws, SiMicrosoftazure, SiDocker, SiGit } from "react-icons/si";
import { FiDatabase, FiBarChart2, FiCpu, FiMessageSquare, FiSearch, FiLayers,
  FiGitBranch, FiCloud, FiServer, FiShield, FiActivity, FiZap } from "react-icons/fi";

const tech = (name, icon) => ({ id: name, name, icon });
const primary = (name, icon) => ({ ...tech(name, icon), featured: true });

// Supported by existing portfolio content or inspected project implementations.
// Line icons denote concepts; brand icons denote their own products.
export const skillCategories = [
  {
    title: "Programming & Applied Analytics",
    items: [
      primary("Python", SiPython), primary("SQL", FiDatabase), tech("R", SiR),
      tech("JavaScript", SiJavascript), tech("A/B Testing", FiActivity),
      tech("Experiment Design", FiBarChart2), tech("Feature Engineering", FiLayers),
      tech("Data Modeling", FiDatabase), tech("Query Optimization", FiZap),
    ],
  },
  {
    title: "Machine Learning & Generative AI",
    items: [
      primary("PyTorch", SiPytorch), primary("LLMs / RAG", FiCpu),
      primary("LangGraph / Agents", FiGitBranch), primary("LangChain", FiLayers),
      tech("Hugging Face Transformers", FiLayers), tech("QLoRA Fine-tuning", FiCpu),
      tech("XGBoost / LightGBM", FiGitBranch), tech("scikit-learn", SiScikitlearn),
      tech("FAISS / Qdrant", FiSearch), tech("Hybrid Retrieval", FiSearch),
      tech("MCP / Tool Calling", FiServer), tech("Structured Outputs", FiDatabase),
      tech("LLM Evaluation", FiActivity), tech("Human-in-the-Loop", FiMessageSquare),
    ],
  },
  {
    title: "Data Engineering, Automation & BI",
    items: [
      primary("Apache Spark", SiApachespark), primary("Apache Airflow", SiApacheairflow),
      primary("dbt", FiGitBranch), primary("FastAPI", SiFastapi),
      primary("n8n", FiZap), primary("Power BI", SiPowerbi),
      tech("Snowflake", FiDatabase), tech("ETL / ELT", FiGitBranch),
      tech("PostgreSQL", SiPostgresql), tech("Databricks", SiDatabricks),
      tech("Tableau", SiTableau), tech("Power Automate", FiZap),
      tech("Microsoft Graph API", FiServer), tech("Event-Driven Workflows", FiGitBranch),
    ],
  },
  {
    title: "Cloud, MLOps & Production Systems",
    items: [
      primary("AWS / ECS", SiAmazonaws), primary("Docker", SiDocker),
      primary("MLflow", FiActivity), primary("GitHub Actions", FiGitBranch),
      tech("Azure", SiMicrosoftazure), tech("Git", SiGit),
      tech("Langfuse / RAGAS", FiSearch), tech("Model Serving / Batch Inference", FiCloud),
      tech("Model Monitoring / Drift", FiActivity), tech("pytest / API Testing", FiShield),
      tech("Pydantic Validation", FiDatabase), tech("REST / Webhooks", FiServer),
      tech("OAuth 2.0", FiShield), tech("CloudWatch / Logging", FiActivity),
    ],
  },
];

// Career timeline: company, role, and dates only.
export const experiences = [
  { organisation: "CyberdomeUSA", logo: cyberdome, logoBackground: "bg-white", positions: [
    { title: "Data Scientist", duration: "Aug 2025 - Present" },
  ] },
  { organisation: "Matrices", logo: matricesLogo, logoBackground: "bg-white", positions: [
    { title: "Applied AI Analyst", duration: "Sep 2025 - Mar 2026" },
  ] },
  { organisation: "The University of Texas at Arlington", logo: uta, positions: [
    { title: "Graduate Assistant", duration: "Mar 2024 - May 2025" },
  ] },
  { organisation: "Quintessence Knowledge Services", logo: qksLogo, logoBackground: "bg-white", positions: [
    { title: "Business Intelligence Analyst", duration: "Feb 2023 - Jun 2023" },
  ] },
  { organisation: "CrystalVoxx Limited", logo: crystalvoxx, logoBackground: "bg-white", positions: [
    { title: "Data Scientist", duration: "Dec 2020 - Dec 2022" },
  ] },
  { organisation: "Deloitte", logo: deloitteLogo, logoBackground: "bg-black", positions: [
    { title: "Technology Consulting Intern", duration: "Nov 2020 - Dec 2020" },
  ] },
];

// GitHub pushed_at snapshot, checked 2026-09-27; activity dates, not launch dates.
const projectActivity = {
  "sentinel-ai": "2026-09-27T02:11:33Z",
  "repair-estimator": "2026-06-30T20:53:11Z",
  "secure-share": "2026-06-02T03:26:05Z",
  "sports-rag": "2026-02-09T21:46:52Z",
  cardiostat: "2025-09-03T03:12:39Z",
  "predict-los": "2025-08-04T03:30:57Z",
  "earthquake-pipeline": "2025-04-03T05:02:37Z",
  "weather-etl": "2025-02-10T03:06:26Z",
  "semantic-search": "2024-12-07T21:52:45Z",
  "mbti-prediction": "2024-05-12T17:39:52Z",
  "nba-classification": "2024-05-11T18:45:41Z",
};

// README and implementation reviewed in September 2026.
export const projects = [
  {
    id: "sentinel-ai", title: "Sentinel AI: Scam Investigation",
    github: "https://github.com/devarshvora/sentinel-ai", Icon: FiShield,
    content: "Investigates suspicious messages and screenshots with Gemini, then applies explicit risk rules and exposure simulations. A FastAPI service and Streamlit interface turn the evidence into explainable reports, saved cases, and follow-up actions.",
    stack: [tech("Multimodal Gemini", FiCpu), tech("Computer Vision", FiSearch), tech("FastAPI / REST", SiFastapi), tech("Pydantic", FiDatabase), tech("Structured Outputs", FiLayers), tech("Supabase", SiSupabase)],
  },
  {
    id: "sports-rag", title: "Sports RAG Chatbot · Prototype",
    github: "https://github.com/devarshvora/superbowl-chatbot", Icon: FiMessageSquare,
    content: "Answers questions about a sample game dataset using hybrid FAISS and BM25 retrieval, Sentence Transformer embeddings, and Llama through Groq. A Gradio interface demonstrates context-grounded sports Q&A in a notebook prototype.",
    stack: [tech("Hybrid RAG", FiLayers), tech("FAISS", FiSearch), tech("BM25", FiSearch), tech("Sentence Transformers", FiLayers), tech("Groq / Llama", FiCpu), tech("Gradio", FiMessageSquare)],
  },
  {
    id: "semantic-search", title: "Movie Semantic Search",
    github: "https://github.com/devarshvora/Semantic-Search", image: semantic_search,
    content: "Finds movies by the meaning of a query. Sentence Transformer embeddings and Elasticsearch cosine similarity rank movie descriptions, while a Streamlit interface presents the closest matches with genre and director details.",
    stack: [tech("Elasticsearch", SiElasticsearch), tech("Sentence Transformers", FiLayers), tech("Cosine Similarity", FiSearch), tech("Streamlit", SiStreamlit)],
  },
  {
    id: "predict-los", title: "PredictLOS: Hospital Stay Classification",
    github: "https://github.com/devarshvora/PredictLOS", Icon: FiActivity,
    content: "Explores hospital length-of-stay prediction from admission and patient data. The notebook prepares categorical features and compares Naive Bayes, XGBoost, and a Keras neural network across stay-length classes to study resource-planning applications.",
    stack: [tech("XGBoost", FiGitBranch), tech("TensorFlow / Keras", SiTensorflow), tech("Naive Bayes", FiActivity), tech("Feature Engineering", FiLayers), tech("Model Evaluation", FiBarChart2)],
  },
  {
    id: "earthquake-pipeline", title: "Earthquake Data Pipeline on Azure",
    github: "https://github.com/devarshvora/Earthquake-Azure-Data-Engineering-Pipeline", image: earthquake_pipeline,
    content: "Transforms USGS earthquake data through Bronze, Silver, and Gold notebooks in Azure Databricks. PySpark normalizes events and adds country and significance fields, storing Parquet datasets in ADLS Gen2 for downstream analysis.",
    stack: [tech("Azure", SiMicrosoftazure), tech("Databricks", SiDatabricks), tech("ADLS Gen2", FiCloud), tech("PySpark", SiApachespark), tech("Medallion Architecture", FiLayers)],
  },
  {
    id: "weather-etl", title: "Automated Weather ETL",
    github: "https://github.com/devarshvora/ETLWeather", image: etl_weather,
    content: "Automates daily weather collection from Open-Meteo with an Airflow DAG. Separate extraction, transformation, and loading tasks store temperature and wind observations in PostgreSQL for repeatable historical analysis.",
    stack: [tech("Apache Airflow", SiApacheairflow), tech("PostgreSQL", SiPostgresql), tech("Docker", SiDocker), tech("Open-Meteo API", FiCloud), tech("Scheduled ETL", FiGitBranch)],
  },
  {
    id: "repair-estimator", title: "Spark Repair Estimator",
    github: "https://github.com/devarshvora/Repair-Estimator", Icon: FiZap,
    link: "https://devarshvora.github.io/Repair-Estimator/",
    content: "An offline-capable property walkthrough app with room-level repair pricing, notes, and photos. Saves projects in the browser and exports a structured Excel workbook and photo archive for follow-up review.",
    stack: [tech("Progressive Web App", FiCloud), tech("Service Workers", FiServer), tech("Cache API", FiDatabase), tech("Local Storage", FiDatabase), tech("JSZip", FiLayers), tech("Excel Export", FiBarChart2)],
  },
  {
    id: "secure-share", title: "SecureShare: Encrypted Credential Sharing",
    github: "https://github.com/devarshvora/secure_share", Icon: FiShield,
    link: "https://cyberdome-secure-share.vercel.app",
    content: "Shares browser-encrypted credentials through expiring links. A React interface uses AES-GCM and PBKDF2, while an Express API stores encrypted payloads in PostgreSQL and checks recipient details and expiry before retrieval.",
    stack: [tech("Web Crypto / AES-GCM", FiShield), tech("PBKDF2", FiShield), tech("React", FiLayers), tech("Express / REST", FiServer), tech("PostgreSQL", SiPostgresql)],
  },
  {
    id: "cardiostat", title: "CardioStat: Heart Disease Risk Analysis",
    github: "https://github.com/devarshvora/CardioStat", Icon: FiActivity,
    content: "Explores heart-disease datasets from four medical institutions. Compares risk distributions with Welch's t-tests, visualizes age patterns, and estimates conditional probabilities for cholesterol subgroups in an exploratory notebook.",
    stack: [tech("Healthcare Analytics", FiActivity), tech("SciPy", FiCpu), tech("Welch's t-test", FiBarChart2), tech("Conditional Probability", FiLayers), tech("Matplotlib", FiBarChart2)],
  },
  {
    id: "mbti-prediction", title: "MBTI Text Classification",
    github: "https://github.com/devarshvora/MBTI-Personality-Prediction", image: mbti_prediction,
    content: "Explores classification of social-media text into 16 MBTI labels. Text preprocessing, Hugging Face BERT embeddings, and a TensorFlow classification layer form an experimental NLP workflow with held-out evaluation.",
    stack: [tech("Hugging Face BERT", FiLayers), tech("TensorFlow", SiTensorflow), tech("Text Preprocessing", FiMessageSquare), tech("Multi-class NLP", FiCpu)],
  },
  {
    id: "nba-classification", title: "NBA Player Position Classification",
    github: "https://github.com/devarshvora/NBA-Player-Position-Classification", image: nba_analysis,
    content: "Classifies NBA players into five positions from season statistics. Compares decision tree, KNN, SVM, and neural-network models using confusion matrices and stratified cross-validation to examine how playing profiles differ.",
    stack: [tech("scikit-learn", SiScikitlearn), tech("SVM", FiLayers), tech("KNN", FiSearch), tech("Neural Networks", FiCpu), tech("Cross-validation", FiBarChart2)],
  },
].sort((a, b) => projectActivity[b.id].localeCompare(projectActivity[a.id]));
