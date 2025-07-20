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
    firstname_key: "firstname",
    lastname_key: "lastname",
    aka_key: "aka",
    profile_image: profileMeIlus,
    email: "thanwabandit.yos@gmail.com",
    address_key: "address",
    full_address_key: "full_address",
    department: [
        "Frontend Developer",
        "Fullstack Developer"
    ],
    represent_key: "represent",
    description_key: "description",
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
    "soft-skills.skill_1",
    "soft-skills.skill_2",
    "soft-skills.skill_3",
    "soft-skills.skill_4",
    "soft-skills.skill_5",
    "soft-skills.skill_6",
    "soft-skills.skill_7",
]