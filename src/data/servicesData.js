import { FaCalculator } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SiHomeadvisor } from "react-icons/si";
import { CiMemoPad } from "react-icons/ci";
import { TbDeviceIpadSearch } from "react-icons/tb";
import { MdOutlineGroupAdd } from "react-icons/md";

const services = [
    {
        name: "Business Setup In India & Registrations",
        content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        icon: <IoDocumentsSharp size={ 30 } />,
        id: "bussiness_setup_in_india_&_registration",
        iconDescription: "calculator icon"
    },
    {
        name: "Accounting & Business Support Services",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "accounting_and_business_support_seervices",
        icon: <MdAccountBalance size={ 30 }/>
    },
    {
        name: "GST Compliances & Litigations",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "gst_compliance_and_litigations",
        icon: <GrCompliance size={ 30 } />
    },
    {
        name: "Income Tax Compliances & Litigations",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "income_tax_compliances_and_litigations",
        icon: <CiMoneyCheck1 size={ 30 } />
    },
    {
        name: "TDS Compliances & Litigations",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "tds_compiances_and_litigations",
        icon: <TbDeviceIpadSearch size={ 30 } />
    },
    {
        name: "Statutory Audit",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "statutory_audit",
        icon: <FaMoneyBillTransfer size={ 30 } />
    },
    {
        name: "Income Tax Audit",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "icome_tax_audit",
        icon: <HiMiniPencilSquare size={ 30 } />
    },
    {
        name: "Stock Audit",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "stock_audit",
        icon: <AiOutlineAudit size={ 30 } />
    },
    {
        name: "Internal Audit",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "internal_audit",
        icon: <CiMemoPad size={ 30 } />
    },
    {
        name: "Transfer Pricing Audit",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "transfer_pricing_audit",
        icon: <FaCalculator size={ 30 } />
    },
    {
        name: "Fund raising — Debt, Venture capital and private equity",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "fund_raising_debt_venture_capital_and_private_equity",
        icon: <GiTakeMyMoney size={ 30 } />
    },
    {
        name: "Secretarial Services",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "secretarial_services",
        icon: <MdOutlineGroupAdd size={ 30 } />
    },
    {
        name: "FEMA Advisory",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "fema_advisory",
        icon: <TbDeviceIpadSearch size={ 30 } />
    },
    {
        name: "Societies, Trust and Co-operative Society Regulations & Advisory",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "societies_trust_and_cooperative_society_regulations_and_advisory",
        icon: <SiHomeadvisor size={ 30 } />
    },
    {
        name: "CMA Projections",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "cms_projections",
        icon: <FaRegCreditCard size={ 30 } />
    },
    {
        name: "CFO Services",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur",
        id: "cfo_services",
        icon: <SiAmazonsimpleemailservice size={ 30 } />
    }
];

export default services;