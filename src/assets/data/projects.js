import { v4 as uuidv4 } from 'uuid';
import JyutpingImg from '../images/jyutping.png';
import J2C1 from '../images/J2C1.png'
import J2C2 from '../images/J2C2.png'

import MeetHomieImg from '../images/meethomie.png';
import MH1 from '../images/MH1.png'
import MH2 from '../images/MH2.png'
import MH3 from '../images/MH3.png'
import MH4 from '../images/MH4.png'
import MH5 from '../images/MH5.png'
import MH6 from '../images/MH6.png'
import MH7 from '../images/MH7.png'
import MH8 from '../images/MH8.png'

import a11ylabImg from '../images/a11ylab.png';
import A11Y1  from '../images/A11Y1.png';
import A11Y2  from '../images/A11Y2.png';
import A11Y3  from '../images/A11Y3.png';
import A11Y4  from '../images/A11Y4.png';
import A11Y6  from '../images/A11Y6.png';
import A11Y7  from '../images/A11Y7.png';
import A11Y8  from '../images/A11Y8.png';

import RoadImg from '../images/road_segmentaion.png';
import Road1 from '../images/Road1.png'
import Road2 from '../images/Road2.png'
import Road3 from '../images/Road3.png'
import Road4 from '../images/Road4.png'

import phoneImg from '../images/phone.png';

import HMMImg from '../images/HMM_poster.png';
import HMM1 from '../images/HMM1.png';
import HMM2 from '../images/HMM2.png';
import HMM3 from '../images/HMM3.png';
import HMM4 from '../images/HMM4.png';
import HMM5 from '../images/HMM5.png';
import HMM6 from '../images/HMM6.png';

import { skills } from './icons';
import J2CReport from '../reports/J2C_Translator.pdf';
import RoadReport from '../reports/Road_Detection.pdf';
import HMMReport from '../reports/HMM.pdf';

const findTechIcons = (techStack) =>
  techStack.map((tech) =>
    skills[0].skills.find((s) => s.name.toLowerCase() === tech.toLowerCase())
  );

const projects = [
  {
    id: uuidv4(),
    name: 'J2C Translator',
    desc: 'The first Transformer model for sentence-based Jyutping to Chinese Characters transliteration.',
    images: [JyutpingImg, J2C1, J2C2],
    github: 'https://github.com/IanQuan/J2P-Translator',
    other_link: ['Report', J2CReport],
    problem: "Why Use a Transformer Model? The Transformer model employs a sequence-to-sequence architecture with an attention mechanism that allows it to focus on different parts of the input sequence for better context understanding. This feature is particularly beneficial for addressing homophone ambiguity in transliteration. The model does not rely on recurrent layers; instead, it uses self-attention to weigh the influence of each word in the input sequence on each word in the output sequence, thereby capturing nuanced linguistic patterns more effectively. \n Moreover, the Transformer's ability to process data in parallel significantly reduces training times and improves the efficiency of translating sequences from Jyutping to Chinese characters. \n\n Why J2C transliteration is important? A quick transliteration tool from J2C is essential for enhancing linguistic accessibility and preserving the cultural heritage of the Cantonese language. It facilitates language learning by helping non-native speakers and learners convert Romanized representations into Chinese characters, thereby improving comprehension and pronunciation. \n Moreover, it aids in developing robust tools for automatic transcription, machine translation, and voice-activated technologies tailored to the Cantonese-speaking population. This transliteration process is also crucial for linguistic research and documentation, enabling more accurate study and preservation of Cantonese's unique dialectal features and oral traditions.",
    detail_title: 'Results and Analysis',
    features: [
      {
        heading: 'Initial Model Performance',
        description: [
          '- Baseline model achieved a testing accuracy of 51% without specialized tuning.',
          '- Established a foundation for further refinements.',
        ],
      },
      {
        heading: 'Homophone Weighting Layer',
        description: [
          '- Incorporated a Homophone Weighting layer to adjust logits for homophonic characters.',
          '- Improved test accuracy from 51% to 78%.',
        ],
      },
      {
        heading: 'Hyperparameter Optimization',
        description: [
          '- Utilized Ray Tune for hyperparameter-tuning.',
          '- Increased test accuracy to 94%.',
        ],
      },
      {
        heading: 'Transformer vs. RNN Performance',
        description: [
          '- Demonstrated Transformer’s superior capability in handling long-range dependencies and maintaining contextual information.',
          '- Resolved homophone ambiguity more effectively than RNN, which achieved 75.8% accuracy.',
        ],
      },
      {
        heading: 'Cultural and Societal Impact',
        description: [
          '- Many transcripts exist only in Jyutping, highlighting the importance of enhanced transliteration models.',
          '- Supports the vitality of the Cantonese language, fostering identity and continuity.',
        ],
      },
      {
        heading: 'Model Limitations',
        description: [
          '- Challenges include domain-specific lexicons and out-of-vocabulary terms.',
          '- Limitations in handling specific transliteration scenarios were evident.',
          '- Scarcity of comprehensive Cantonese-Jyutping datasets constrains the model’s ability to generalize effectively.',
        ],
      },
    ],
    techStack: findTechIcons([
      'Python',
      'PyTorch',
      'Scikitlearn',
      'Numpy',
      'Hugging Face',
      'Google Colab',
    ]),
  },

  {
    id: uuidv4(),
    name: 'Meet-Homie',
    desc: 'An app to help people schedule one-on-one meeting that matches their preferences.',
    images: [MeetHomieImg, MH1, MH2, MH3, MH4, MH5, MH6, MH7, MH8],
    github: 'https://github.com/IanQuan/Meet-Homie-scheduling-app',
    problem: "What sets Meet-Homie apart from other scheduling apps? The process of scheduling meetings is often hindered by inefficient communication. Traditionally, setting a meeting time involves a lengthy exchange of emails or messages to determine a mutually convenient slot, consuming valuable time and delaying important decisions. Furthermore, many scheduling tools complicate this process by requiring both participants to register and manage accounts, which can deter invitees who prefer not to sign up due to convenience. \n Our solution is a streamlined, lightweight scheduling app that addresses these issues. It allows the organizer to propose multiple time slots directly, and invitees can select their preference without the need for an account, thus facilitating a quicker and more user-friendly scheduling experience.", 
    other_link: '',
    detail_title: 'Main Features',
    features: [
      {
        heading: 'One-On-One Meeting Scheduling',
        description: [
          'Seamlessly schedule meetings between two parties with streamlined booking and confirmation steps.',
        ],
      },
      {
        heading: 'Preference-Based Scheduling',
        description: [
          'Hosts can prioritize their available times as high, medium, or low preference, guiding the scheduling process.',
        ],
      },
      {
        heading: 'Schedule Matching',
        description: [
          'The system analyzes preferences from both host and invitee to suggest the best possible meeting time, optimizing for mutual convenience.',
        ],
      },
      {
        heading: 'Comprehensive Dashboard',
        description: [
          'Both hosts and invitees can view and manage their scheduled meetings on a user-friendly dashboard, enhancing user experience and accessibility.',
        ],
      },
      {
        heading: 'Editable User Profiles and Contact Lists',
        description: [
          'Users have the flexibility to update their profile information and manage their contacts, ensuring ease of use and personalization.',
        ],
      },
    ],

    techStack: findTechIcons([
      'React.js',
      'Node.js',
      'Django',
      'Sqlite',
      'Tailwindcss',
      'Material UI',
      'Postman',
    ]),
  },

  {
    id: uuidv4(),
    name: 'A11y Lab Simulation',
    desc: 'A testing platform, designed for software developers and accessibility testers, that enables users to simulate WCAG violations',
    images: [a11ylabImg, A11Y1, A11Y2, A11Y3, A11Y4, A11Y6, A11Y7, A11Y8],
    problem: "What is the problem A11YLab Simulation UI solving? A11YLabs Simulation UI addresses the challenge of understanding and implementing the complex Web Content Accessibility Guidelines (WCAG) by providing a platform where software developers and accessibility testers can simulate and customize WCAG violations. This tool simplifies the process of testing and adjusting web content for accessibility, making it easier to identify potential barriers and ensure compliance. It offers a hands-on experience that helps users comprehend the practical impact of accessibility issues, thereby facilitating more effective implementation of accessibility standards. \n\n Differences between A11YLabs Simulation UI and existing applications? Unlike many existing tools that focus mainly on detecting accessibility issues, A11YLabs Simulation UI emphasizes simulating WCAG violations to allow users to experience accessibility barriers firsthand. Users are able to configure webpage elements such as checkboxes and buttons, or add customizable parameters to input fields before the scan. This approach provides a deeper understanding of the impact on users with disabilities. \n\n Who are the target users? The target users of A11YLabs Simulation UI include accessibility testers, software developers, and project stakeholders. Users could use the tool to ensure software compliance with accessibility standards and integrate accessibility considerations early in the development process and gain firsthand experience of accessibility barriers.",
    detail_title: 'Main Features',
    other_link: '',
    features: [
      {
        heading: 'Configurable Webpage Scans',
        description: [
          '- Customize webpage elements like checkboxes and buttons.',
          '- Tailor audit checks with configurable parameters for precise compliance needs.',
        ],
      },
      {
        heading: 'Exporting Violation Reports',
        description: [
          '- Download reports in multiple formats such as CSV, PDF, and HTML.',
          '- Facilitates easy analysis and record-keeping of WCAG compliance.',
        ],
      },
      {
        heading: 'Dashboard Overview',
        description: [
          '- Showcase scan metrics in with charts.',
          '- Allows selection of specific projects for detailed statistical analysis.',
        ],
      },
      {
        heading: 'Settings and Profile Management',
        description: [
          '- View and edit user account and settings.',
          '- Manage personal data and change passwords through a user-friendly interface.',
        ],
      },
      {
        heading: 'Dynamic Scanning Capabilities',
        description: [
          '- Create, run, and edit accessibility scans.',
          '- Options to add authentication parameters.',
          '- Detailed control over scan depth and guidelines evaluation.',
        ],
      },
      {
        heading: 'Comprehensive Reports and Visuals',
        description: [
          '- Export detailed reports with visual data insights to understand compliance levels.',
          '- Break down accessibility issues by severity and type for targeted improvements.',
        ],
      },
    ],
    techStack: findTechIcons([
      'React.js',
      'Node.js',
      'MongoDB',
      'Tailwindcss',
      'Postman',
      'Puppeteer',
      'Git',
    ]),
  },

  {
    id: uuidv4(),
    name: 'U-Net Road Segmentation',
    desc: 'This project developed a road segmentation model using the U-Net architecture for autonomous driving applications',
    images: [RoadImg, Road1, Road2, Road3, Road4],
    problem: '',
    github: 'https://github.com/IanQuan/Road-Segmentation-with-U-Net',
    other_link: ['Report', RoadReport],
    detail_title: 'Analysis and Insights',
    features: [
      {
        heading: '3D Features',
        description: [
          '- Implementation of depth map fusion significantly improved segmentation accuracy.',
          '- Achieved higher pixel-accuracy, Intersection over Union (IoU), and Dice Coefficient compared to the base model.',
        ],
      },
      {
        heading: 'U-Net Model',
        description: [
          '- The U-Net architecture proved highly efficient for road segmentation tasks requiring precise localization.',
          '- Its design facilitated detailed and accurate segmentation outputs by effectively using skip connections and a deep learning framework.',
        ],
      },
      {
        heading: 'Data Augmentation and Model Robustness',
        description: [
          '- Employed data augmentation techniques like horizontal flipping to enhance model training.',
          '- Augmentation helped the model generalize better across different driving contexts, reducing overfitting.',
        ],
      },
      {
        heading: 'Comparison with Base Model',
        description: [
          '- Fused model outperformed the standard model in all key metrics, underscoring the benefit of incorporating depth data.',
        ],
      },
      {
        heading: 'Challenges in Lane Marking Detection',
        description: [
          '- Encountered difficulties in classifying lanes with distinct markings due to high contrast.',
          '- Proposed solutions include expanding the dataset to encompass a wider variety of lane markings and traffic scenarios.',
        ],
      },
      {
        heading: 'Visualization of Model Performance',
        description: [
          "- Employed 3D plotting to visually demonstrate the model's ability to detect and plot road surfaces.",
          '- The 3D point cloud visualizations highlighted the practical application of the model in real-world scenarios.',
        ],
      },
    ],
    techStack: findTechIcons([
      'Python',
      'Pytorch',
      'Tensorflow',
      'OpenCV',
      'Keras',
      'Numpy',
      'Matplotlib',
      'Google Colab',
      'Latex',
    ]),
  },

  {
    id: uuidv4(),
    name: 'Phone Scraper',
    desc: 'An application that users to input a TAC or IMEI code, and fetches relevant product listings from Amazon, BestBuy, and eBay.',
    images: [phoneImg],
    problem: '',
    github: 'https://github.com/IanQuan/TAC-mobile-phone-web-scrappng',
    other_link: '',
    detail_title: 'Main Features',
    features: [
      {
        heading: 'Product Search by TAC/IMEI Code',
        description: [
          '- Allows users to search for mobile devices using either a TAC or IMEI code.',
        ],
      },
      {
        heading: 'Comprehensive Product Listings',
        description: [
          '- Fetches detailed information about mobile devices from Amazon, BestBuy, and eBay.',
          '- Each product entry includes price, rating, reviews, an image, and a direct link to the product page.',
        ],
      },
      {
        heading: 'Real-Time Data Fetching',
        description: [
          '- Dynamically gathers the most up-to-date information available across different retailers.',
          '- Ensures that the latest data is available at your fingertips.',
        ],
      },
      {
        heading: 'Sorting Options',
        description: [
          '- Allows users to sort the product results according to price, rating, or review count.',
          '- Helps users easily find the best deals or the most highly rated products according to their needs.',
        ],
      },
      {
        heading: 'Filtering by Retailer',
        description: [
          '- Lets users filter the search results based on the retailer.',
          '- Offers the ability to view products exclusively from Amazon, BestBuy, eBay, or all combined.',
        ],
      },
      {
        heading: 'User-Friendly Interface',
        description: [
          '- Features a straightforward and easy-to-navigate user interface.',
          '- Search results are presented in a clean, organized table format, with clear error messages if issues arise.',
        ],
      },
    ],
    techStack: findTechIcons([
      'Python',
      'Javascript',
      'HTML',
      'CSS',
      'Flask',
      'Selenium',
    ]),
  },

  {
    id: uuidv4(),
    name: 'HHM on Stock Prediction',
    desc: 'Research project on developing a Hidden Markov Model for stock price prediction.',
    images: [HMMImg, HMM1, HMM2, HMM3, HMM4, HMM5, HMM6],
    github: 'https://github.com/IanQuan/Hidden-Markov-Model-on-Stock-Price-Prediction',
    other_link: ['Report', HMMReport],
    problem: "Predicting stock market trends remains a complex challenge due to its inherent volatility and the potential for substantial financial returns. In this project, we used the Hidden Markov Model (HMM) to predict stock prices by representing market dynamics through hidden states. The study's analysis concludes that the prediction results are  elatively accurate, particularly in forecasting the trend of the company's stock fluctuations. However, the variance is significant, indicating a need to incorporate more  ontrol variables and combine different prediction methods to achieve more accurate stock prediction results.", 
    detail_title: 'Results and Analysis',
    features: [
      {
        heading: 'Dataset and Preprocessing',
        description: [
          '- Used historical stock data from Apple, NVIDIA, and Amazon.',
          '- Preprocessed data using log return calculations and data standardization to stabilize variance.',
        ],
      },
      {
        heading: 'Optimal Hidden State Selection',
        description: [
          '- Determined the optimal number of hidden states using AIC, BIC, HQC, CAIC to balance model complexity and accuracy.',
          '- 5-6 states was found to be optimal for the selected stocks.',
        ],
      },
      {
        heading: 'Sliding Window Prediction',
        description: [
          '- Employed sliding window approach, with HMMs trained on 96 previous observations to predict the next 96 time step.',
          '- Ensured adaptability to recent market conditions.',
        ],
      },
      {
        heading: 'Model Evaluation',
        description: [
          '- Evaluated using Mean Absolute Percentage Error (MAPE).',
          '- Showed reasonable accuracy but some deviations due to market shifts.',
          '- Captured general trends well but struggled with sudden changes.',
        ],
      },
      {
        heading: 'Limitations',
        description: [
          '- Markov property assumption and stationarity may not hold true in dynamic financial market.',
          '- Struggled to accurately predict rare, high-impact market events (e.g., crashes or booms) due to their reliance on Gaussian emissions and historical data.'
        ],
      },
      {
        heading: 'Future Directions',
        description: [
          '- Combine HMMs with other techniques like Long Short-Term Memory (LSTM) networks or regime-switching models.',
          '- Develop methods to dynamically adjust the number of hidden states based on evolving market conditions.',
        ],
      },
    ],
    techStack: findTechIcons([
      'Python',
      'Pandas',
      'Numpy',
    ]),
  },

];

export default projects;
