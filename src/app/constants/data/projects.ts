// project images
import chill_pui_mui_coverimg from "@/public/assets/images/projects/chill_pui_mui/chill-pui-mui-cover-img.png";
import detection_rice_disease_coverimg from "@/public/assets/images/projects/detection_rice_disease/detection-rice-disease-cover-img.png";
import ssru_map_coverimg from "@/public/assets/images/projects/ssru_map/ssru-map-cover-img.png";
import words_around_us_coverimg from "@/public/assets/images/projects/words_around_us/words-around-us-cover-img.png";
import cafeheal_coverimg from "@/public/assets/images/projects/cafeheal/main-2.png";
import juliana_crm_coverimg from "@/public/assets/images/projects/juliana_crm/main.png";
import cyberpay_wallet_coverimg from "@/public/assets/images/projects/cyberpay_wallet/cyberpay-wallet-cover-img.png";
import { icons } from "../icons";
import type { StaticImageData } from "next/image";

export type ProjectProps = {
  category_name: string
  project_name: string
  app_name: string
  slug: string
  year: number
  project_image: StaticImageData
  description_key: string
  SKILLS: StackItem[]
  published: boolean
}

type StackItem = {
  name: string;
  icon: string;
  color: string;
};

export const PROJECTS: ProjectProps[] = [
  // {
  //   category_name: "Mobile Application",
  //   project_name:
  //     "Development of a resort recommendation application in Thailand (Static App)",
  //   app_name: "Chill Pui Mui",
  //   slug: "chill-pui-mui",
  //   year: 2023,
  //   project_image: chill_pui_mui_coverimg,
  //   description_key: "projects.lists.list_1.description",
  //   SKILLS: [
  //     {
  //       name: "Dart",
  //       icon: icons.dart,
  //       color: "",
  //     },
  //     {
  //       name: "Flutter",
  //       icon: icons.flutter,
  //       color: "",
  //     },
  //   ],
  //   published: false,
  // },
  {
    category_name: "Mobile Application",
    project_name:
      "NSC work [semi-final] - Classification of disease effecting rice leaves using image processing and deep learning",
    app_name: "Detection Rice Disease",
    slug: "detection-rice-disease",
    year: 2024,
    project_image: detection_rice_disease_coverimg,
    description_key: "projects.lists.list_1.description",
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
        icon: icons.tensorflow,
        color: "",
      },
      {
        name: "Keras",
        icon: icons.keras,
        color: "",
      },
      {
        name: "MongoDB",
        icon: icons.mongodb,
        color: "",
      },
      {
        name: "Express.js",
        icon: icons.expressjs,
        color: "",
      },
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
    ],
    published: true,
  },
  {
    category_name: "Mobile Application",
    project_name:
      "Development of a Suan Sunandha Rajabhat University Navigator Application (Dynamic App)",
    app_name: "SSRU Map",
    slug: "ssru-map",
    year: 2024,
    project_image: ssru_map_coverimg,
    description_key: "projects.lists.list_2.description",
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
        icon: icons.googleMaps,
        color: "",
      },
      {
        name: "Firebase",
        icon: icons.firebase,
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
    year: 2024,
    project_image: words_around_us_coverimg,
    description_key: "projects.lists.list_3.description",
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
        icon: icons.tensorflow,
        color: "",
      },
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
        name: "Prisma",
        icon: icons.prisma,
        color: "",
      },
      {
        name: "PostgreSQL",
        icon: icons.postgresql,
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
    year: 2024,
    project_image: cafeheal_coverimg,
    description_key: "projects.lists.list_4.description",
    SKILLS: [
      {
        name: "React.js",
        icon: icons.reactjs,
        color: "",
      },
      {
        name: "Express.js",
        icon: icons.expressjs,
        color: "",
      },
      {
        name: "Node.js",
        icon: icons.nodejs,
        color: "",
      },
      {
        name: "PostgreSQL",
        icon: icons.postgresql,
        color: "",
      },
      {
        name: "Prisma",
        icon: icons.prisma,
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
    year: 2024,
    project_image: juliana_crm_coverimg,
    description_key: "projects.lists.list_5.description",
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
    year: 2024,
    project_image: cyberpay_wallet_coverimg,
    description_key: "projects.lists.list_6.description",
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
