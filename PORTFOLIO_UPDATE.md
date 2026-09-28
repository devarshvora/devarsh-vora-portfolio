# Portfolio update and QA notes

Updated: September 27, 2026

Implemented in the existing React/Vite portfolio. The dark palette, Poppins typography, gradients, Lottie illustrations, section order, Framer Motion effects, timeline, and card styling remain in place. No dependencies were added or upgraded.

## Content

- Exactly four skill categories, with 36 skills. Added explicit RAG, prompt engineering, Hugging Face, FAISS/vector search, XGBoost, statistical analysis, PostgreSQL, DAX/Power Query, workflow automation, and REST API coverage.
- Removed VS Code, Jupyter Notebook, C, Rust, Scala, and Flask from the skills display. Streamlit and Keras remain in relevant project stacks rather than standalone skill tiles. Removed Kafka, Snowflake, Redshift, and BigQuery from the headline skills to keep the selection focused; this does not imply lack of proficiency.
- Did not add n8n, LangChain, LangGraph, Kubernetes, MLflow, or other tools solely because they appear in job postings. Agent-related certification is shown without asserting unverified autonomous-agent project experience.
- Updated all six companies, roles, and dates exactly as supplied (month formatting normalized to Sep). Experience contains no descriptions or inferred company technologies. Duration counters, locations, and employment types are omitted to follow the requested company/role/timeline-only display.
- Corrected company image mappings after inspecting the assets. The legacy `infolabz.png` is CyberdomeUSA; `deloitte.jpeg` is CrystalVoxx. Used initials for Matrices, Quintessence, and Deloitte where no verified logo was available.
- Added OpenAI Agents and Workflows and Anthropic AI Fluency: Framework & Foundations first, retaining the four existing certificates. Added the final LinkedIn certification card. New credential pages explicitly identify Devarsh Vora and the supplied course titles.
- Added Zaini Barmaiya's January 27, 2026 recommendation first. All four supplied paragraphs are retained verbatim, with paragraph-spacing normalization only. The first paragraph is visible and the rest expands through a native details control. Included title, relationship, profile, and source link. Existing recommendations are unchanged.
- Replaced the long footer title/technology list and vague hero copy with one data-science/applied-AI identity that includes analytics and BI.

## Project evidence

All ten featured repositories were checked through GitHub's live API/raw source, not the stale search-index repository list. No verified public demo was provided by these ten repositories, so no demo URL was invented.

| Project | Implementation inspected | Change |
| --- | --- | --- |
| [Sentinel AI](https://github.com/devarshvora/sentinel-ai) | README, pyproject.toml, investigation engine, investigation service | Added first; Gemini evidence extraction, deterministic risk logic, FastAPI, Streamlit, Supabase. Not described as an autonomous agent or RAG application. |
| [Sports chatbot](https://github.com/devarshvora/superbowl-chatbot) | README and code cells in SuperBowl_Chatbot.ipynb | Added; FAISS + BM25 hybrid retrieval, Sentence Transformers, Groq/Llama, Gradio. Clearly labeled prototype; no live-data or accuracy claims. |
| [Semantic Search](https://github.com/devarshvora/Semantic-Search) | README and Searchapp.py | Corrected to movie search with Elasticsearch, cosine similarity, Sentence Transformers, and Streamlit. |
| [PredictLOS](https://github.com/devarshvora/PredictLOS) | README and Healthcare Analytics.ipynb model/preparation code | Added as an experimental comparison of stay-length classifiers; no clinical outcome or production claims. |
| [Earthquake pipeline](https://github.com/devarshvora/Earthquake-Azure-Data-Engineering-Pipeline) | README and all three Bronze/Silver/Gold notebooks | Corrected to Databricks/PySpark and ADLS Gen2 Parquet output. Removed unsupported PostgreSQL/Azure DevOps stack labels. No scalability claims: Gold notebook retains a test-time row limit. |
| [Weather ETL](https://github.com/devarshvora/ETLWeather) | README, file structure, dags/etlweather.py | Corrected to daily Open-Meteo → Airflow → PostgreSQL; removed unsupported AWS/PySpark labels. |
| [Sales dashboard](https://github.com/devarshvora/Sales-Dashboard) | README and PBIX Report/Layout | Corrected Power BI/DAX/Power Query stack; confirmed report visuals, slicer, metric cards, and forecast page. Removed PostgreSQL. |
| [MBTI](https://github.com/devarshvora/MBTI-Personality-Prediction) | README and BERT notebook code | Described BERT/TensorFlow text classification conservatively; no contradictory README accuracy claims copied. |
| [NBA classification](https://github.com/devarshvora/NBA-Player-Position-Classification) | README, notebook listing, Neural Network.ipynb | Corrected title and description from general performance analysis to position classification. Removed trailing whitespace from GitHub link. |
| [K-Means](https://github.com/devarshvora/K-means-Clustering-Implementation) | README and kmeans.py | Corrected file-based datasets and scratch implementation; removed unsupported NumPy stack claim. |

Other public repositories were screened for relevance. The portfolio retains its prior seven projects and adds three stronger AI/ML examples; it is not an exhaustive repository mirror.

## Research informing selection

Market demand guides emphasis, not claims of proficiency. Existing portfolio skills and inspected implementations determine what is shown.

- [Amazon ML Engineer, Generative AI Innovation Center](https://www.amazon.jobs/en-gb/jobs/3079815/machine-learning-engineer-generative-ai-innovation-center): Python/SQL, ML models, and pipelines. This older indexed posting was used alongside more recently indexed sources.
- [OpenAI Applied AI Engineer, Codex Core Agent](https://openai.com/careers/applied-ai-engineer-codex-core-agent-san-francisco/): dependable applied systems and evaluation rather than framework name collecting.
- [Amazon BI Engineer, Capacity Delivery Reliability](https://amazon.jobs/en/jobs/10553966/business-intelligence-engineer-capacity-delivery-reliability): SQL, visualization, data pipelines, and analytical communication.
- [Amazon BI Engineer, Amazon Shipping BI](https://amazon.jobs/en-gb/jobs/10421326/business-intelligence-engineer-amazon-shipping-bi): Python/SQL and dashboarding.

## Files changed

- `src/constants/portfolio.js` (new): structured skills, experience, and project data.
- `src/constants/index.js`: re-exports audited data; credentials, positioning copy, source URLs; moved the existing IEEE link to its publication entry.
- `src/components/SkillsAndExperience.jsx`: four categories, flexible skill grid, company/role/date-only timeline.
- `src/components/Projects.jsx`: readable stack labels, consistent card spacing, local image/icon handling, labeled links.
- `src/components/Certifications.jsx`: whole-card links, new issuer icons, swipe/keyboard-scrollable carousel, bounded previous/next controls, LinkedIn card.
- `src/components/Recommendations.jsx`: full supplied recommendation, expandable text, optional contact details, profile attribution.
- `src/components/Navbar.jsx`: tablet-friendly menu breakpoint, keyboard-accessible links and toggle, closes menu after selection.
- `src/components/Education.jsx`, `src/components/ExtraCurricular.jsx`: small padding/shrink fixes; source-link accessibility.
- `src/index.css`: mobile heading wrapping, anchor offsets, focus outlines.
- `src/assets/anthropic.svg` (new): recognizable Anthropic mark from Simple Icons; OpenAI uses the existing react-icons package.
- `src/App.jsx`: clean up the loading timer on unmount without changing the animation.
- `index.html`: concise portfolio meta description.
- `dist/`: regenerated by the production build (the repository tracks generated output).
- `PORTFOLIO_UPDATE.md`: this handoff.

## Validation and limits

- Existing installed dependencies used successfully; `package.json` and lockfile unchanged. Pre-existing tracked node_modules changes were left alone.
- `npm.cmd run dev -- --host 127.0.0.1`: starts successfully; page returns HTTP 200 at http://127.0.0.1:5173/.
- `npm.cmd run build`: passes. Warnings remain for the installed Browserslist dataset, Lottie's eval use, and a large JS chunk. No unrelated dependency or animation overhaul was made.
- Vite SSR + React static-render smoke checks pass for SkillsAndExperience, Projects, Certifications, Recommendations, Navbar, Footer, and ExtraCurricular. Validated four categories, unique skill names, six roles without descriptions, six credentials, ten projects, all navigation targets, 23 local image references, and no undefined contact links or remote placeholder images.
- Hero/Education use browser-only Lottie code and cannot be rendered by the Node-only smoke check; an attempted SSR import requires `document`. This is a test-environment limitation, not evidence of a browser regression.
- `git diff --check`: passes for changed source and HTML.
- 29 unique rendered external URLs checked: 22 return HTTP 200 (including every featured GitHub repository and every credential), six LinkedIn URLs return bot-blocking HTTP 999, and the IEEE URL returns HTTP 403. HTTP 200 checks confirm reachability, not authenticated access or every page's contents.
- Browser automation inventory is empty. Attempts to open both Chrome and the in-app browser report unavailable. **Desktop (1440), laptop (1280), tablet (768), mobile (375/320), browser console, and interactive visual QA remain unverified.** Responsive constraints were reviewed and fixed in code; screenshots and real-browser behavior were not checked.

No further recommendation text is needed. Before deployment, visually check the listed viewports, navigation, certification arrows/swipe/end position, expanded recommendation, and browser console. LinkedIn and IEEE links need a normal-browser check. Changes have not been committed, pushed, or deployed.
