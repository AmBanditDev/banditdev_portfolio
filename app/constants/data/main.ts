// profile
// import profileMe from '@/public/assets/images/me.jpg'
import profileMeIlus from '@/public/assets/images/me-ilus.svg'

// react icons
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// social links
const social_fb = "https://www.facebook.com/thanwabandit"
const social_ig = "https://www.instagram.com/thanwabandit_y?igsh=MXZtdmhuYjliOTZpMw=="
const social_linkedin = "https://www.linkedin.com/in/thanwabandit-yoschamlue-86ba232b9"

export const PROFILE = {
    firstname: "Thanwabandit",
    lastname: "Yoschamlue",
    aka: "BanditDev",
    profile_image: profileMeIlus,
    email: "thanwabandit.yos@gmail.com",
    address: "Samutprakan, Thailand",
    full_address: "1739/35, Soi Noree 1, Bangpoo Villa, Sukhumvit Rd. Taibanmai, Mueang, Samut Prakan 10280, Thailand",
    department: [
        "Frontend Developer",
        "Fullstack Developer"
    ],
    represent: "I'm a web developer with a passion for technology, always ready to learn new things. I'm seeking opportunities to collaborate with expert teams to expand my capabilities and grow into a web expert in the future.",
    work_objective: "I can develop websites and mobile applications both front-end and back-end. But I am good at front-end software development. I'm a new developer looking for an opportunity to expand my skills. And I am committed to improving my abilities in these technologies. I am ready for a career opportunity and am excited to be involved in a project that allows me to expand my experience and knowledge.",
    cv_resume_link: "https://drive.google.com/file/d/1RCZ_roMHp2PaJ3LhrlA1oE6c_eakg73g/view?usp=drive_link",
    socials: [
        {
            icon: FaGithub,
            name: "Github",
            link: "https://github.com/AmBanditDev",
        },
        {
            icon: AiOutlineFacebook,
            name: "Facebook",
            link: "https://www.facebook.com/thanwabandit",
        },
        {
            icon: FaInstagram,
            name: "Instagram",
            link: "https://www.instagram.com/thanwabandit_y?igsh=MXZtdmhuYjliOTZpMw==",
        },
        {
            icon: AiOutlineLinkedin,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/thanwabandit-yoschamlue-86ba232b9",
        },
    ],
}

export const SOCIALS = [
    {
        name: "Facebook",
        icon: "facebook",
        icon_color: "#1773EA",
        link: social_fb
    },
    {
        name: "Instagram",
        icon: "fa-instagram",
        icon_color: "#E93B81",
        link: social_ig
    },
    {
        name: "LinkedIn",
        icon: "fa-linkedin",
        icon_color: "#0077B5",
        link: social_linkedin
    }
]

export const SOFTSKILLS = [
    "Teamwork",
    "Self-Improvement",
    "Creativity",
    "Optimism",
    "Adaptability",
]