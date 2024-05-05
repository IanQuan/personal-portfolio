import { v4 as uuidv4 } from 'uuid';
import JyutpingImg from '../images/jyutping.png';
import MeetHomieImg from '../images/meethomie.png';
import RoadImg from '../images/road_segmentaion.png';
import a11ylabImg from '../images/a11ylab.png';
import phoneImg from '../images/phone.png';
import { skills } from './icons';
import J2CReport from '../reports/J2C_Translator.pdf';
import RoadReport from '../reports/Road_Detection.pdf';
import MH1 from '../images/MH1.png'
import MH2 from '../images/MH2.png'
import MH3 from '../images/MH3.png'
import MH4 from '../images/MH4.png'
import MH5 from '../images/MH5.png'

const findTechIcons = (techStack) =>
  techStack.map((tech) =>
    skills[0].skills.find((s) => s.name.toLowerCase() === tech.toLowerCase())
  );

const projects = [
  {
    id: uuidv4(),
    name: 'J2C Translator',
    desc: 'The first Transformer model for sentence-based Jyutping to Chinese Characters transliteration.',
    images: [JyutpingImg],
    github: 'https://github.com/IanQuan/J2P-Translator',
    other_link: ['Report', J2CReport],
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
    images: [MeetHomieImg, MH1, MH2, MH3, MH4, MH5],
    github: 'https://github.com/IanQuan/Meet-Homie-scheduling-app',
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
    images: [a11ylabImg],
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
    images: [RoadImg],
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
];

export default projects;
