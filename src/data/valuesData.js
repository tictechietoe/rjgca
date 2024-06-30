import { PiHandshakeBold } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

const values = [
    {
        content: "We value the",
        quality: "RELATIONS",
        icon: <PiHandshakeBold size={ 25 } />,
        detail: "For us, Relations are of utmost priority and always come before money. We have assisted clients grow and have grown with them"
    },
    {
        content: "We work with",
        quality: "INTEGRITY",
        icon: <MdOutlineSecurity size={ 25 } />,
        detail: "Uphold at all the times the highest professional standards of integrity, ethics, objectivity and independence."
    },
    {
        content: "We value the",
        quality: "PEOPLE",
        icon: <BsPeopleFill size={ 25 } />,
        detail: "Respect and value everyone, acknowledge their views and appreciate their contributions to the firm through their skills, knowledge and experience. We believe our team is our family."
    },
    {
        content: "We add",
        quality: "VALUE",
        icon: <IoDiamondOutline size={ 25 } />,
        detail: "Pursue excellence by delivering path breaking solutions and seek to innovate in everything we do."
    },
    {
        content: "We act",
        quality: "RESPONSIBLY",
        icon: <FaAddressCard size={ 25 } />,
        detail: "As responsible citizens, we recognise, respect and honestly discharge our responsibility to our clients, our people and the society at large."
    },
]

export default values;