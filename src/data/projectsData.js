import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import education from '../assets/png/education.png'
import aiEmailAgent from '../assets/png/ai-email-agent.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Comfort Zone Prediction',
        projectDesc: 'A machine learning model that predicts home comfort zones based on temperature and humidity. The system uses logistic regression to classify conditions as Comfortable or Uncomfortable with high accuracy.',
        tags: ['Python', 'Machine Learning', 'Logistic Regression', 'Data Analysis'],
        code: 'https://github.com/FadwaLacham/ComfortZone.git',
        demo: 'https://github.com/FadwaLacham/ComfortZone.git',
        image: seven
    },
    {
        id: 2,
        projectName: 'Smart Home',
        projectDesc: 'IoT-based Smart Home with remote control, security sensors, and real-time environment tracking. Uses machine learning to predict comfort zones.',
        tags: ['IoT', 'Machine Learning', 'Mobile App', 'Security', 'Home Automation'],
        code: 'https://github.com/FadwaLacham/Smarty.git',
        demo: '',
        image: six


    },
    {
        id: 3,
        projectName: 'Breast Cancer Screening App',
        projectDesc: 'CNN-based application for mammogram classification with DenseNet201, VGG16, and VGG19 architectures.',
        tags: ['Python', 'TensorFlow', 'CNN', 'DenseNet201', 'Flask', 'Bootstrap'],
        code: 'https://github.com/FadwaLacham/Breast-Cancer-Screening.git',
        demo: 'https://drive.google.com/file/d/1K45KIDGH-Qx-C6qWmzdzSGloGDqxBwzC/view?usp=drive_link',
        image: four
    },
    {
        id: 4,
        projectName: 'Intelligent Industrial Chatbot',
        projectDesc: 'Development of a smart chatbot for querying industrial data using Microsoft Bot Framework and RAG API.',
        tags: ['Python', 'Microsoft Bot Framework', 'RAG', 'API Integration'],
        code: 'https://github.com/yourusername/industrial-chatbot',
        demo: 'https://yourdemo-link.com/chatbot',
        image: one
    },
    {
        id: 5,
        projectName: 'Stock Management Prediction',
        projectDesc: 'Predictive analysis project for stock management using various ML models and Power BI visualizations.',
        tags: ['Python', 'SVR', 'ARIMA', 'Prophet', 'Random Forest', 'Power BI'],
        code: 'https://github.com/yourusername/stock-prediction',
        demo: 'https://yourdemo-link.com/stock-prediction',
        image: two
    },
    {
        id: 6,
        projectName: 'NLP for Darija',
        projectDesc: 'Dataset preparation and NLP model training for Moroccan Arabic (Darija) with web scraping and TensorFlow.',
        tags: ['Python', 'TensorFlow', 'NLP', 'Web Scraping', 'BeautifulSoup'],
        code: 'https://github.com/yourusername/darija-nlp',
        demo: 'https://yourdemo-link.com/darija-nlp',
        image: three
    },
    {
        id: 7,
        projectName: 'Sentiment Analysis',
        projectDesc: 'Sentiment analysis of Amazon reviews using VADER and RoBERTa models for classification.',
        tags: ['Python', 'NLP', 'VADER', 'RoBERTa', 'Sentiment Analysis'],
        code: 'https://github.com/FadwaLacham/Sentiment-Analysis.git',
        demo: 'https://colab.research.google.com/drive/1vjZnUTQ1Bljfz_Oznx_AvVN8CKQAYqNM?usp=sharing',
        image: five
    },

    {
    id: 8,
    projectName: 'Education Dashboard Morocco',
    projectDesc: 'Interactive Power BI dashboard analyzing educational institutions in Morocco using open data. Includes data cleaning, transformation, modeling, and interactive visualizations with Power BI.',
    tags: ['Power BI', 'Power Query', 'Open Data', 'Business Intelligence'],
    code: 'https://github.com/FadwaLacham/powerbi-dashboard-education',
    demo: 'https://app.powerbi.com/groups/me/reports/0d343fa7-bc6a-4ded-9be2-bd21384de02b/ReportSection?experience=power-bi',
    image: education
    },

    {
    id: 9,
    projectName: 'AI Email Agent - Multi-Agent AI Email Management System',
    projectDesc: 'An intelligent multi-agent AI system for Gmail email management. The application classifies, prioritizes, and automates email processing using LLM-based agents with memory and decision capabilities.',
    tags: [
        'Python',
        'FastAPI',
        'React',
        'LLM',
        'Llama 3',
        'Gmail API',
        'OAuth2',
        'SQLite',
        'SQLAlchemy'
    ],
    code: 'https://github.com/FadwaLacham/ai-email-agent',
    demo: '',
    image: aiEmailAgent
   },


]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/