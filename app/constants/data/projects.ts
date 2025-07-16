// project images
import project_coverimg_1 from "@/public/assets/images/projects/chill_pui_mui/chill-pui-mui-cover-img.png";
import project_coverimg_2 from "@/public/assets/images/projects/detection_rice_disease/detection-rice-disease-cover-img.png";
import project_coverimg_3 from "@/public/assets/images/projects/ssru_map/ssru-map-cover-img.png";
import project_coverimg_4 from "@/public/assets/images/projects/words_around_us/words-around-us-cover-img.png";
import project_coverimg_5 from "@/public/assets/images/projects/cafeheal/main-2.png";
import project_coverimg_6 from "@/public/assets/images/projects/juliana_crm/main.png";
import project_coverimg_7 from "@/public/assets/images/projects/cyberpay_wallet/cyberpay-wallet-cover-img.png";
import { icons } from "../icons";
import type { StaticImageData } from "next/image";

export type ProjectProps = {
  category_name: string
  project_name: string
  app_name: string
  slug: string
  project_image: StaticImageData
  descriptionEN: string
  descriptionTH: string
  SKILLS: StackItem[]
  published: boolean
}

type StackItem = {
  name: string;
  icon: string;
  color: string;
};

export const PROJECTS: ProjectProps[] = [
  {
    category_name: "Mobile Application",
    project_name:
      "Development of a resort recommendation application in Thailand (Static App)",
    app_name: "Chill Pui Mui",
    slug: "chill-pui-mui",
    project_image: project_coverimg_1,
    descriptionEN: "",
    descriptionTH: "",
    SKILLS: [
      {
        name: "Dart",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Flutter",
        icon: icons.flutter,
        color: "",
      },
    ],
    published: false,
  },
  {
    category_name: "Mobile Application",
    project_name:
      "NSC work [semi-final] - Classification of disease effecting rice leaves using image processing and deep learning",
    app_name: "Detection Rice Disease",
    slug: "detection-rice-disease",
    project_image: project_coverimg_2,
    descriptionEN:
      "The Detection Rice Disease application is a tool designed for farmers to identify rice diseases using image processing and deep learning. This AI-powered technology offers more accurate disease classification than visual inspection. Additionally, the app allows users to access a knowledge base on rice diseases, providing further information on prevention methods and rice varieties resistant to diseases. The application primarily focuses on identifying three major rice diseases: Blast, Bacterial Blight, and Brown Spot.",
    descriptionTH:
      "แอปพลิเคชันจําแนกโรคข้าวด้วยวิธีการประมวลผลภาพและการเรียนรู้เชิงลึก เป็นเหมือนเครื่องมือจำแนกโรคข้าวให้กับชาวนาใช้ตรวจสอบใบข้าวที่เป็นโรคด้วยเทคโนโลยีปัญญาประดิษฐ์ ที่ให้ผลความแม่นยำกว่าการจำแนกชื่อโรคข้าวด้วยตาเปล่า อีกทั้งสามารถที่จะสืบค้นข้อมูลองค์ความรู้ด้านโรคข้าว เพื่อที่ได้รับรู้ข้อมูลเพิ่มเติมเกี่ยวกับโรคข้าว การป้องกันโรคข้าว และข้อมูลพันธุ์ข้าวที่ใช้ป้องกันโรคข้าว โดยมุ่งเน้นการจำแนกโรคข้าว 3 โรค คือ โรคไหม้ โรคขอบใบแห้ง และโรคใบจุดสีน้ำตาล",
    SKILLS: [
      {
        name: "Dart",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Flutter",
        icon: icons.flutter,
        color: "",
      },
      {
        name: "Tensorflow",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Keras",
        icon: icons.dart,
        color: "",
      },
    ],
    published: true,
  },
  {
    category_name: "Mobile Application",
    project_name:
      "Development of a Suan Sunandha Rajabhat University Navigator Application (Dynamic App)",
    app_name: "SSRU Map",
    slug: "ssru-map",
    project_image: project_coverimg_3,
    descriptionEN:
      "The SSRU Map application helps students, faculty, external visitors, and new students navigate accurately to various locations within Suan Sunandha Rajabhat University.",
    descriptionTH:
      "แอปพลิเคชันที่ช่วยนําทางนักศึกษาหรือครูอาจารย์มหาวิทยาลัยราชภัฏสวนสุนันทา บุคคลภายนอก และนักศึกษาที่เข้าใหม่สามารถเดินทางไปยังสถานที่ต่าง ๆ ภายในมหาวิทยาลัยราชภัฏสวนสุนันทาได้อย่างถูกต้อง",
    SKILLS: [
      {
        name: "Dart",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Flutter",
        icon: icons.flutter,
        color: "",
      },
      {
        name: "Google Maps API",
        icon: icons.flutter,
        color: "",
      },
      {
        name: "Firebase",
        icon: icons.flutter,
        color: "",
      },
    ],
    published: true,
  },
  {
    category_name: "Mobile Application",
    project_name:
      "Development of an application to learn English vocabulary with object detection (Dynamic App)",
    app_name: "Words Around Us",
    slug: "words-around-us",
    project_image: project_coverimg_4,
    descriptionEN:
      "Words Around Us is an application designed for learning English vocabulary by detecting objects in your surroundings. It allows you to test your knowledge of English words while building proficiency through quizzes.",
    descriptionTH:
      "แอปพลิเคชันเพื่อการเรียนรู้คำศัพท์ภาษาอังกฤษด้วยการตรวจจับวัตถุรอบๆ ตัว และทดสอบความรู้เกี่ยวกับคำศัพท์ภาษาอังกฤษไปกับการเสริมสร้างสมรรถนะจากการทำแบบทดสอบความรู้",
    SKILLS: [
      {
        name: "Dart",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Flutter",
        icon: icons.flutter,
        color: "",
      },
      {
        name: "Tensorflow Lite",
        icon: icons.flutter,
        color: "",
      },
      {
        name: "Firebase",
        icon: icons.flutter,
        color: "",
      },
    ],
    published: true,
  },
  {
    category_name: "Web Application",
    project_name:
      "Development of a website recommending cafes in Bangkok (Dynamic Website)",
    app_name: "CafeHeal",
    slug: "cafeheal",
    project_image: project_coverimg_5,
    descriptionEN:
      "CafeHeal is a website that recommends cafes in Bangkok. Discover popular, must-visit cafes with beautiful aesthetics, unique photo opportunities, and cool locations. Easily search for cafes you're interested in and view their information and locations before you check-in.",
    descriptionTH:
      "เว็บไซต์แนะนำร้านคาเฟ่ในจังหวัดกรุงเทพฯ ร้านคาเฟ่ยอดนิยมที่ต้องไปเช็คอิน ร้านสวยมุมเก๋ โลเคชันเท่ ถ่ายรูปสวยๆ ค้นหาร้านคาเฟ่ที่คุณสนใจ ดูข้อมูลร้านและโลเคชันร้านก่อนไปเช็คอินได้ง่ายๆ",
    SKILLS: [
      {
        name: "PHP",
        icon: icons.flutter,
        color: "",
      },
      {
        name: "SQL",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Laravel",
        icon: icons.laravel,
        color: "",
      },
      {
        name: "MySQL",
        icon: icons.mysql,
        color: "",
      },
    ],
    published: true,
  },
  {
    category_name: "Web Application",
    project_name: "Juliana CRM",
    app_name: "Juliana CRM",
    slug: "juliana-crm",
    project_image: project_coverimg_6,
    descriptionEN:
      "Juliana CRM is a customer management system for a gold shop in Myanmar. It allows customers to purchase gold through the system, top up funds to buy gold, accumulate points to redeem for gold, and manage customer membership levels to receive various exclusive shop privileges.",
    descriptionTH:
      "ระบบบริหารจัดการลูกค้าของร้านทองแห่งหนึ่งในเมียนมาร์ ซื้อทองผ่านระบบ เติมเงินเพื่อซื้อทอง สะสมแต้มเพื่อแลกทอง จัดการระดับสมาชิกของลูกค้าเพื่อรับสิทธิพิเศษต่างๆ ของทางร้าน",
    SKILLS: [
      {
        name: "React.js",
        icon: icons.reactjs,
        color: "",
      },
      {
        name: "Node.js",
        icon: icons.nodejs,
        color: "",
      },
      {
        name: "Express.js",
        icon: icons.expressjs,
        color: "",
      },
      {
        name: "MongoDB",
        icon: icons.mongodb,
        color: "",
      },
    ],
    published: true,
  },
  {
    category_name: "Mobile Application",
    project_name: "Cyberpay Wallet",
    app_name: "Cyberpay Wallet",
    slug: "cyberpay-wallet",
    project_image: project_coverimg_7,
    descriptionEN:
      "Cyberpay Wallet is a mobile payment intermediary application designed for services within the Cyberpay Technology network. This includes services like CyberWash, CyberCoff, CyberStation, and more. It allows you to conveniently scan to pay, transfer money, top up funds, or receive Cashback for various services. Plus, you can track notifications for all these services within a single app.",
    descriptionTH:
      "แอปพลิเคชันระบบตัวกลางการชำระเงินผ่านมือถือสำหรับบริการในเครือข่าย Cyberpay Technology ไม่ว่าจะเป็นบริการ CyberWash, CyberCoff, CyberStation อื่นๆ ซึ่งสามารถสแกนจ่าย โอนเงิน เติมเงิน หรือ Cashback ในบริการต่างๆ ได้อย่างสะดวกและใช้งานง่าย รวมถึงติดตามการแจ้งเตือนของบริการต่างๆ ได้ในแอปเดียว",
    SKILLS: [
      {
        name: "Dart",
        icon: icons.dart,
        color: "",
      },
      {
        name: "Flutter",
        icon: icons.flutter,
        color: "",
      },
    ],
    published: true,
  },
];
