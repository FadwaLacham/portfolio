
import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'

import education from '../assets/png/education.png'
import aiEmailAgent from '../assets/png/ai-email-agent.png'
import SentimentLab from '../assets/png/sentiement.png'

import { FaChartLine } from 'react-icons/fa'

export const projectsData = [
    {
        id: 1,
        projectName: 'Sentiment Lab',
        projectDesc: 'Multilingual sentiment analysis for French, Arabic, Darija, and English, with batch prediction and model evaluation.',
        tags: ['Python', 'Streamlit', 'NLP', 'Transformers'],
        code: 'https://github.com/FadwaLacham/sentiment-lab',
        demo: 'https://sentiment-lab-fadwa.streamlit.app/',
        image: SentimentLab
    },
    {
        id: 2,
        projectName: 'Zabbix Monitoring',
        projectDesc: 'Monitoring website availability, response time, HTTP status, and service failures using Zabbix.',
        tags: ['Zabbix', 'Monitoring', 'KPIs', 'Alerting'],
        code: 'https://github.com/FadwaLacham/sentiment-lab',
        demo: '',
        icon: <FaChartLine />
    },
    {
        id: 3,
        projectName: 'AI Email Agent',
        projectDesc: 'AI-powered email classification, prioritization, and workflow automation using intelligent agents.',
        tags: ['Python', 'FastAPI', 'React', 'LLM', 'Gmail API', 'SQLite'],
        code: 'https://github.com/FadwaLacham/ai-email-agent',
        demo: '',
        image: aiEmailAgent
    },
    {
        id: 4,
        projectName: 'Intelligent Industrial Chatbot',
        projectDesc: 'Industrial data assistant using retrieval-augmented generation and database integration.',
        tags: ['Python', 'RAG', 'LangChain', 'Flask', 'MySQL', 'ChromaDB'],
        code: 'https://github.com/yourusername/industrial-chatbot',
        demo: '',
        image: one
    },
    {
        id: 5,
        projectName: 'Sentiment Analysis',
        projectDesc: 'Customer review classification using NLP and machine learning models.',
        tags: ['Python', 'NLP', 'VADER', 'RoBERTa'],
        code: 'https://github.com/FadwaLacham/Sentiment-Analysis.git',
        demo: 'https://colab.research.google.com/drive/1vjZnUTQ1Bljfz_Oznx_AvVN8CKQAYqNM?usp=sharing',
        image: five
    },
    {
        id: 6,
        projectName: 'Education Dashboard Morocco',
        projectDesc: 'Interactive Power BI dashboard exploring Moroccan education data.',
        tags: ['Power BI', 'Power Query', 'Open Data', 'Data Visualization'],
        code: 'https://github.com/FadwaLacham/powerbi-dashboard-education',
        demo: 'https://app.powerbi.com/groups/me/reports/0d343fa7-bc6a-4ded-9be2-bd21384de02b/ReportSection?experience=power-bi',
        image: education
    },
    {
        id: 7,
        projectName: 'Stock Management Prediction',
        projectDesc: 'Time-series forecasting for stock management using machine learning.',
        tags: ['Python', 'SVR', 'ARIMA', 'Prophet', 'Random Forest', 'Power BI'],
        code: 'https://github.com/yourusername/stock-prediction',
        demo: '',
        image: two
    },
    {
        id: 8,
        projectName: 'Breast Cancer Screening App',
        projectDesc: 'Mammogram classification using deep learning and convolutional neural networks.',
        tags: ['Python', 'TensorFlow', 'CNN', 'DenseNet201', 'VGG16', 'Flask'],
        code: 'https://github.com/FadwaLacham/Breast-Cancer-Screening.git',
        demo: 'https://drive.google.com/file/d/1K45KIDGH-Qx-C6qWmzdzSGloGDqxBwzC/view?usp=drive_link',
        image: four
    },
    {
        id: 9,
        projectName: 'NLP for Darija',
        projectDesc: 'Moroccan Darija dataset preparation and NLP model training.',
        tags: ['Python', 'TensorFlow', 'NLP', 'Darija', 'BeautifulSoup'],
        code: 'https://github.com/yourusername/darija-nlp',
        demo: '',
        image: three
    },
    {
        id: 10,
        projectName: 'Smart Home',
        projectDesc: 'IoT smart home solution with security sensors and environmental monitoring.',
        tags: ['IoT', 'Machine Learning', 'Mobile App', 'Automation'],
        code: 'https://github.com/FadwaLacham/Smarty.git',
        demo: '',
        image: six
    },
    {
        id: 11,
        projectName: 'Comfort Zone Prediction',
        projectDesc: 'Machine learning model predicting indoor comfort from temperature and humidity.',
        tags: ['Python', 'Machine Learning', 'Logistic Regression'],
        code: 'https://github.com/FadwaLacham/ComfortZone.git',
        demo: 'https://github.com/FadwaLacham/ComfortZone.git',
        image: seven
    }
]
