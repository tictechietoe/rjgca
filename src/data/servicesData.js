import {
  IoDocumentsSharp
} from "react-icons/io5";

import {
  GrCompliance
} from "react-icons/gr";

import {
  GiTakeMyMoney
} from "react-icons/gi";

import {
  FaMoneyBillTransfer,
  FaPeopleRoof,
  FaBuildingUser,
  FaHandshakeAngle,
  FaHandshakeSimple,
  FaFileInvoiceDollar,
  FaFileSignature
} from "react-icons/fa6";

import {
  VscServerProcess
} from "react-icons/vsc";

import {
  ImOffice
} from "react-icons/im";

import {
  PiBuildingApartmentFill,
  PiSealCheckFill,
  PiTreeStructureBold,
  PiProjectorScreenChartFill
} from "react-icons/pi";

import {
  HiReceiptTax
} from "react-icons/hi";

import {
  CgInternal
} from "react-icons/cg";

import {
  TbPigMoney,
  TbTransactionRupee,
  TbDeviceIpadHorizontalPlus,
  TbDeviceIpadDollar,
  TbReceiptRefund,
  TbFilePercent,
  TbMessageReply
} from "react-icons/tb";

import {
  BiSolidBank
} from "react-icons/bi";

import {
  GoLaw
} from "react-icons/go";

import {
  LiaFileContractSolid
} from "react-icons/lia";

import {
  RiSecurePaymentFill,
  RiMoneyRupeeCircleLine,
  RiHomeOfficeFill,
  RiRefund2Line,
  RiFileList3Fill
} from "react-icons/ri";

import {
  RxIdCard
} from "react-icons/rx";

import {
  FaRegCreditCard,
  FaPeopleCarry,
  FaFileAlt,
  FaRegFilePdf,
  FaFileInvoice,
  FaRegEye
} from "react-icons/fa";

import {
  LuFileKey2,
  LuFileSignature,
  LuFileOutput
} from "react-icons/lu";

import {
  LiaFileInvoiceSolid
} from "react-icons/lia";

import {
  SiAmazonsimpleemailservice,
  SiHomeadvisor
} from "react-icons/si";

import {
  TbDeviceIpadSearch
} from "react-icons/tb";

import {
  AiOutlineAudit
} from "react-icons/ai";

import {
  MdOutlineGroupAdd,
  MdRealEstateAgent,
  MdOutlineCreditCardOff,
  MdAreaChart,
  MdAssistantNavigation,
  MdTrackChanges
} from "react-icons/md";

import {
  BsBank,
  BsBuildingFillX,
  BsFillPersonVcardFill,
  BsPostcardFill,
  BsPersonVcardFill
} from "react-icons/bs";

import {
  UilCoins,
  UilRupeeSign,
  UilCrosshair,
  UilArrowGrowth,
  UilChartGrowth,
  UilUniversity,
  UilComparison,
  UilBriefcase,
  UilMeetingBoard,
  UilClipboardNotes,
  UilFileNetwork,
  UilFileGraph,
  UilFileInfoAlt,
  UilAward,
  UilPostcard,
  UilCheckCircle,
  UilMoneyWithdrawal,
  UilChartPieAlt,
  UilFileContract,
  UilFileMedicalAlt,
  UilAbacus,
  UilMoneyWithdraw,
  UilCreditCard,
  UilSearchPlus,
  UilBookAlt,
  UilGameStructure,
  UilSitemap,
  UilBusSchool,
  UilChartLine,
  UilBookOpen,
  UilFileContractDollar,
  UilDollarAlt,
  UilNotes,
  UilFileCheckAlt,
  UilCopyLandscape,
  UilDiary,
  UilFileBookmarkAlt,
  UilCopyright,
  UilEnvelopeBookmark,
  UilRegistered,
  UilCloudUpload,
  UilTrademarkCircle,
  UilBookReader,
  UilMoneyInsert,
  UilBill,
  UilUserMd,
  UilCloudDatabaseTree,
  UilHouseUser,
  UilCalculatorAlt,
  UilPanelAdd,
  UilChartBar,
  UilFileEditAlt,
  UilTransaction,
  UilChart,
  UilBag,
  UilCrosshairAlt,
  UilPoundCircle,
  UilReceiptAlt,
  UilInbox,
  UilChartGrowthAlt,
  UilReceipt,
  UilEnvelopeRedo,
  UilDesktopCloudAlt,
  UilPresentationPlay
} from '@iconscout/react-unicons'

import Card from '../components/Card';

const services = ({ iconSize = 30 }) => {
  return [
    {
      name: "Business Setup In India and Registrations",
      description: "Establishing your business in a developing country like India requires the right professional support and we will provide you right assistance to thrive your business and adhere to all the compliances and regulations of the country.",
      content: <>
        <div className="mb-5">
          India being one of the fastest-growing economies in the world with a huge market of 1.3 billion people, is a preferred place of business interest for many across the globe as it offers plenty of business opportunities to start / expand operations. Deciding and choosing the right business entity is vital as it is akin to selecting the vehicle for your journey.  Establishing your business in a developing country like India requires the right professional support and we will provide you right assistance to thrive your business and adhere to all the compliances and regulations of the country.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-10 mb-5">
          <Card icon={<UilFileCheckAlt size={ iconSize } />} name="Company & LLP Incorporation and obtaining requisite government approvals" />
          <Card icon={<FaHandshakeSimple size={ iconSize } />} name="Formation of Partnership firm, Conversion of Partnership Firms and Private Ltd Companies into LLP" />
          <Card icon={<ImOffice size={ iconSize } />} name="Setting up Branch office, Liaison office, Project Office, Joint Venture, Owned Subsidiary etc." />
          <Card icon={<PiSealCheckFill size={ iconSize } />} name="Assistance in obtaining requisite approvals from regulatory authorities" />
        </div>

        <div>Procure other registrations like:</div>
        <div className="grid grid-cols-3 p-5">
          <Card icon={<BsPersonVcardFill size={ iconSize } />} name="PAN" />
          <Card icon={<BsPostcardFill size={ iconSize } />} name="TAN" />
          <Card icon={<UilCopyLandscape size={ iconSize } />} name="MSME Registration (Udyog Aadhaar)" />
          <Card icon={<RxIdCard size={ iconSize } />} name="Shops & Establishment Registration" />
          <Card icon={<UilDiary size={ iconSize } />} name="GST Registration" />
          <Card icon={<UilFileBookmarkAlt size={ iconSize } />} name="Import Export Code Registration" />
          <Card icon={<UilCopyright size={ iconSize } />} name="PTEC & PTRC Registration" />
          <Card icon={<UilEnvelopeBookmark size={ iconSize } />} name="Provident Fund & ESIC Registration" />
          <Card icon={<UilRegistered size={ iconSize } />} name="Logo / Trade Mark Registration" />
          <Card icon={<UilTrademarkCircle size={ iconSize } />} name="FSAI Registration" />
          <Card icon={<BsFillPersonVcardFill size={ iconSize } />} name="ISO Certification" />
        </div>
      </>,
      icon: <IoDocumentsSharp size={ iconSize } />,
      id: "bussiness_setup_in_india_and_registration",
      iconDescription: "calculator icon"
    },
    {
      name: "Accounting & Business Support Services",
      description: "Accounting has evolved from being a relatively transactional process to a more strategic function, that leverages the power of data and improve the business process to add strategic value to the management.",
      content: <>
        <div className="mb-5">
          Accounting has evolved from being a relatively transactional process to a more strategic function, that leverages the power of data. RJGCA can boost business success by making accounting systems and other related processes work harder for management on a regular basis, so that they can focus their time and energy on growing the business with the help of regular updates and analytics provided by us. Our experts not just manage the accounting operations and business processeses, instead they work closely with the organisation to transform and improve the business process to add strategic value to the management.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5">
          <Card icon={<UilDiary size={ iconSize } />} name="Book-keeping and Accounting" />
          <Card icon={<UilCloudUpload size={ iconSize } />} name="Cloud based accounting" />
          <Card icon={<UilBookReader size={ iconSize } />} name="Review and management of Accounting system" />
          <Card icon={<UilMoneyWithdraw size={ iconSize } />} name="Review and management of Accounts Receivable" />
          <Card icon={<UilMoneyInsert size={ iconSize } />} name="Review and management of Accounts Payable" />
          <Card icon={<UilBill size={ iconSize } />} name="Review and management of Banking and finance operation" />
          <Card icon={<UilFileGraph size={ iconSize } />} name="MIS reporting" />
          <Card icon={<UilUserMd size={ iconSize } />} name="Virtual CFO services" />
          <Card icon={<UilCloudDatabaseTree size={ iconSize } />} name="Inventory accounting system" />
          <Card icon={<UilHouseUser size={ iconSize } />} name="Fixed Asset management" />
          <Card icon={<AiOutlineAudit size={ iconSize } />} name="Liaison With Auditors" />
          <Card icon={<RiHomeOfficeFill size={ iconSize } />} name="Back office operations including Payroll/ HR management" />
          <Card icon={<VscServerProcess size={ iconSize } />} name="Standard Operating Processes" />
          <Card icon={<UilCalculatorAlt size={ iconSize } />} name="Budgetory Systems" />
          <Card icon={<FaPeopleCarry size={ iconSize } />} name="Staff Recruitment & Training" />
        </div>
      </>,
      id: "accounting_and_business_support_services",
      icon: <FaFileInvoiceDollar size={ iconSize } />
    },
    {
      name: "Regulatory compliance and Advisory",
      description: "Taxation presents arguably the most dynamic and complex challenge in the context of financial planning. Managing tax complexity to escalate value of the business is one of the fundamental considerations of major business decisions",
      content: <>
        <div className="mb-5">
          India’s taxation system is among the more complex systems globally and is constantly being updated to account for changes in the economy and policy.  Managing tax complexity to escalate value of the business is one of the fundamental considerations of major business decisions. RJGCA's taxation services are innovative, proactive and based on tax efficient strategies. We offer effective tax management, tax structuring and advisory services. Taxation presents arguably the most dynamic and complex challenge in the context of financial planning. Our approach remains versatile with an awareness that individual issues must be dealt with on their own merits but with the overall, long-term considerations always in mind. We endeavor to identify potential threats & opportunities and advise on appropriate strategies to mitigate exposure and optimize tax incidence on our clients.
        </div>

        <div>Our services include:</div>
        <h3 className="font-bold underline text-custom-primary">DIRECT TAXATION</h3>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<HiReceiptTax size={ iconSize } />} name="Preparation and filing of Income Tax returns and other forms" />
          <Card icon={<FaFileInvoice size={ iconSize } />} name="Review and compliance of TDS regulations" />
          <Card icon={<LuFileOutput size={ iconSize } />} name="Review and compliance of Transfer Pricing regulations" />
          <Card icon={<TbDeviceIpadDollar size={ iconSize } />} name="Preparing and filing replies to various notices and representing the clients before regulatory authorities" />
          <Card icon={<FaFileSignature size={ iconSize } />} name="Preparing and filing appeal and representing the clients before CIT(A)" />
          <Card icon={<TbReceiptRefund size={ iconSize } />} name="Assistance in refund applications" />
          <Card icon={<UilReceipt size={ iconSize } />} name="Tax Planning" />
          <Card icon={<UilFileContractDollar size={ iconSize } />} name="Expatriate and Non Resident Taxation services" />
          <Card icon={<UilChartLine size={ iconSize } />} name="Providing Advices and Opinions on specific issues arising under direct tax laws" />
          <Card icon={<MdTrackChanges size={ iconSize } />} name="Preparation of Income Tax Compliance Tracker" />
        </div>

        <h3 className="font-bold underline text-custom-primary">IN-DIRECT TAXATION</h3>
        <div className="grid grid-cols-3 gap-4 p-5">
          <Card icon={<FaFileAlt size={ iconSize } />} name="Computation of GST liability, assistance in making payment and filing of periodic GST returns" />
          <Card icon={<TbFilePercent size={ iconSize } />} name="Preparation and filing of Profession tax returns" />
          <Card icon={<MdAssistantNavigation size={ iconSize } />} name="Assist in reconciliation of ITC as per books and portal, GSTR-2A reconciliation, GSTR1 vs E-way bill reconciliation, etc" />
          <Card icon={<MdTrackChanges size={ iconSize } />} name="Preparation of GST Compliance Tracker" />
          <Card icon={<LiaFileInvoiceSolid size={ iconSize } />} name="Assist in queries related to e-Way bills generation" />
          <Card icon={<UilChartGrowthAlt size={ iconSize } />} name="Review as-is position of the Company as to whether the same is in consonance with the existing GST provisions" />
          <Card icon={<UilComparison size={ iconSize } />} name="Identify risks and opportunities viz. areas of non-compliance, areas of savings, etc. and advising on the same" />
          <Card icon={<FaRegEye size={ iconSize } />} name="Review of various processes followed from the GST point of view" />
          <Card icon={<RiRefund2Line size={ iconSize } />} name="Preparation and filing of refund claims including liaising with the authorities and obtaining refund orders" />
          <Card icon={<TbMessageReply size={ iconSize } />} name="Preparing and filing replies to various notices and representing the clients before regulatory authorities" />
          <Card icon={<LuFileSignature size={ iconSize } />} name="Preparing and filing appeal and representing the clients before appellate authorities" />
          <Card icon={<RiFileList3Fill size={ iconSize } />} name="Drafting and filing applications seeking advance rulings" />
          <Card icon={<UilPresentationPlay size={ iconSize } />} name="Orientation and staff training for GST compliance" />
          <Card icon={<UilEnvelopeRedo size={ iconSize } />} name="Advising on various GST related queries" />
          <Card icon={<UilDesktopCloudAlt size={ iconSize } />} name="Support in realigning accounting and IT systems to GST framework" />
        </div>
      </>,
      id: "regulatory_compliance_and_advisory",
      icon: <GrCompliance size={ iconSize } />
    },
    {
      name: "Corporate Advisory",
      description: "Business cannot last in today's world economy without a clear sense of purpose and a strategy. Timely strategic financial advice is the prerequisite of all transactions that take place in today's rapidly evolving competitive landscape.",
      content: <>
        <div className="mb-5">
          Business cannot last in today's world economy without a clear sense of purpose and a strategy to reach goals. RJGCA supports clients as they plan and adapt in order to meet the challenges of expansion and going international. Timely strategic financial advice is the prerequisite of all transactions that take place in today's rapidly evolving competitive landscape. We understand this and assist in identifying opportunities for, or risks to, our clients' interests, which accompany most financial advisory engagements. We provide businesses with corporate finance advice and support across a range of issues, drawing on the resources, expertise and experience.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilPanelAdd size={ iconSize } />} name="Fund raising — Debt, Venture capital and private equity" />
          <Card icon={<UilChartBar size={ iconSize } />} name="Business Valuations" />
          <Card icon={<UilFileGraph size={ iconSize } />} name="Accounting & Financial Due Diligence" />
          <Card icon={<HiReceiptTax size={ iconSize } />} name="Tax Due Diligence" />
          <Card icon={<UilFileEditAlt size={ iconSize } />} name="Building Business Model" />
          <Card icon={<UilTransaction size={ iconSize } />} name="Transaction Advisory Services" />
          <Card icon={<UilChart size={ iconSize } />} name="Ind AS Advisory" />
          <Card icon={<TbTransactionRupee size={ iconSize } />} name="Transaction Support services" />
          <Card icon={<PiTreeStructureBold size={ iconSize } />} name="Business Structuring services" />
          <Card icon={<UilBag size={ iconSize } />} name="Business Advisory" />
          <Card icon={<UilCrosshairAlt size={ iconSize } />} name="Risk Assessment" />
        </div>
      </>,
      id: "corporate_advisory",
      icon: <GiTakeMyMoney size={ iconSize } />
    },
    {
      name: "FEMA Advisory",
      description: "It is impperative for the enterprise to keep a regular watch on foreign exchange transactions, in the context of sectoral caps, investment caps, so as to overcome from the adverse regulatory actions.",
      content: <>
        <div className="mb-5">
          India has become significant player in global market and have seen surge of cross border activities. A breakthrough flow of funds, inbound as well as outbound has expanded the level of check on compliances in context of the foreign exchange regulations. It is impperative for the enterprise to keep a regular watch on foreign exchange transactions, in the context of sectoral caps, investment caps, so as to overcome from the adverse regulatory actions. In order to circumvent detrimental circumstances, we have specially designed these services, to ensure due compliance of FEMA laws.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilReceiptAlt size={ iconSize } />} name="Foreign Direct Investment in India (FDI) - Advisory & compliances" />
          <Card icon={<UilInbox size={ iconSize } />} name="Advising on inbound investments in India on repatriable or non-repatriable basis" />
          <Card icon={<SiHomeadvisor size={ iconSize } />} name="Advisory and setting up of entry structure like subsidiary Company / branch / liaison office / project / site office in India" />
          <Card icon={<PiProjectorScreenChartFill size={ iconSize } />} name="Advisory on Foreign Policies & procedures in India" />
          <Card icon={<MdAreaChart size={ iconSize } />} name="Advisory on Transfer of shares from residents to non-residents" />
          <Card icon={<TbDeviceIpadHorizontalPlus size={ iconSize } />} name="Advisory on Transfer of immovable property and regulatory compliance thereon" />
          <Card icon={<BiSolidBank size={ iconSize } />} name="Obtaining prior / post facto approvals under FEMA from Reserve Bank of India (RBI)" />
          <Card icon={<UilPoundCircle size={ iconSize } />} name="External Commercial Borrowings - Advisory & Compliances" />
          <Card icon={<FaFileAlt size={ iconSize } />} name="Periodical Filing of Returns with RBI" />
          <Card icon={<LuFileKey2 size={ iconSize } />} name="Other Advisory Services under FEMA" />
          <Card icon={<LiaFileContractSolid size={ iconSize } />} name="Issue of Statutory Certificates under FEMA & RBI regulation" />
        </div>
      </>,
      id: "fema_advisory",
      icon: <TbDeviceIpadSearch size={ iconSize } />
    },
    {
      name: "Societies, Trust and Co-operative Society Regulations & Advisory",
      description: "It is impperative for the enterprise to keep a regular watch on foreign exchange transactions, in the context of sectoral caps, investment caps, so as to overcome from the adverse regulatory actions.",
      content: <>
        <div className="mb-5">
          Charity begins at home and has countless ripples that affect the societies and communities at large. Whether it is a trust managed by a few people or a large section of the society, we provide the best financial advice and services. Trust and societies form a pivotal pillar of the economic structure of the country, hence it is our duty to ensure that your organization stands on a strong and sustainable economic pillar.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<PiBuildingApartmentFill size={ iconSize } />} name="Formation of Society, Trust & Section 8 Company" />
          <Card icon={<HiReceiptTax size={ iconSize } />} name="Registration U/s 12AA and 80G of Income Tax Act" />
          <Card icon={<UilDollarAlt size={ iconSize } />} name="Registration and filing of returns under Foreign Contribution Regulation Act (FCRA)" />
          <Card icon={<UilSearchPlus size={ iconSize } />} name="Statutory Audit under Maharashtra Society Registration Act, 1860" />
          <Card icon={<CgInternal size={ iconSize } />} name="Internal Audit as per model Bye-Laws and Act" />
          <Card icon={<UilFileGraph size={ iconSize } />} name="Accounting & Support Services" />
          <Card icon={<UilFileContractDollar size={ iconSize } />} name="Direct & Indirect taxation compliances" />
          <Card icon={<UilNotes size={ iconSize } />} name="Minutes Drafting for Various Meetings i.e. Board Meeting, EGM & AGM" />
          <Card icon={<GrCompliance size={ iconSize } />} name="Compliances relating to Bye-Laws and Act" />
          <Card icon={<UilAbacus size={ iconSize } />} name="Advisory in above matters" />
        </div>
      </>,
      id: "societies_trust_and_cooperative_society_regulations_and_advisory",
      icon: <SiHomeadvisor size={ iconSize } />
    },
    {
      name: "Audit and Assurance",
      description: "The Audit renders an opportunity to provide you with updated insight into your business and insight that could identify potential threats or opportunities that can be factored into your future business plans.",
      content: <>
        <div className="mb-5">
          The Audit is beyond a control procedure or a statutory obligation. It renders an opportunity to provide you with updated insight into your business and insight that could identify potential threats or opportunities that can be factored into your future business plans. We provide constructive suggestions for improving effectiveness of risk management, business strategies, management information and controls, which allows you to manage your business more efficiently and cost-effectively.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilSearchPlus size={ iconSize } />} name="Statutory Audit" />
          <Card icon={<UilGameStructure size={ iconSize } />} name="Concurrent Audit" />
          <Card icon={<CgInternal size={ iconSize } />} name="Internal Audit" />
          <Card icon={<HiReceiptTax size={ iconSize } />} name="Income Tax Audit" />
          <Card icon={<IoDocumentsSharp size={ iconSize } />} name="Transfer Pricing audit" />
          <Card icon={<UilBookAlt size={ iconSize } />} name="GST Audit" />
          <Card icon={<UilUniversity size={ iconSize } />} name="Bank Audit" />
          <Card icon={<UilSitemap size={ iconSize } />} name="Management Audit" />
          <Card icon={<UilBusSchool size={ iconSize } />} name="Operations Audit" />
          <Card icon={<UilChartLine size={ iconSize } />} name="Stock Audit" />
          <Card icon={<UilBookOpen size={ iconSize } />} name="System Audit" />
          <Card icon={<UilAward size={ iconSize } />} name="Certification" />
        </div>
      </>,
      id: "audit_and_assurance",
      icon: <AiOutlineAudit size={ iconSize } />
    },
    {
      name: "Loan Syndication Services",
      description: "We understand that the businesses depends on efficient utilization of funds and a lot depends on a well-organised fund flow system to keep businesses running. Aims to provide customised financing solutions to meet their working capital and growth finance needs",
      content: <>
        <div className="mb-5">
          RJGCA deals with SMEs, mid-corporate and large corporate clients, and aims to provide customised financing solutions to meet their working capital and growth finance needs. We understand that businesses depend on efficient utilization of funds and a lot depends on a well-organised fund flow system to keep businesses running.
          <br />
          RJGCA enjoys a sound reputation in the banking segment as it has a strong relationships with financial institutions, banks and NBFCs.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilMoneyWithdraw size={ iconSize } />} name="Project Finance" />
          <Card icon={<UilCoins size={ iconSize } />} name="Working Capital Loan" />
          <Card icon={<UilCreditCard size={ iconSize } />} name="Overdraft / Cash Credit Facility" />
          <Card icon={<TbPigMoney size={ iconSize } />} name="Term Loan" />
          <Card icon={<MdOutlineCreditCardOff size={ iconSize } />} name="Packing Credit limits" />
          <Card icon={<FaMoneyBillTransfer size={ iconSize } />} name="Housing Loan & Loan against property and stock" />
          <Card icon={<RiMoneyRupeeCircleLine size={ iconSize } />} name="Personal Loan" />
        </div>
      </>,
      id: "loan_syndication_services",
      icon: <BsBank size={ iconSize } />
    },
    {
      name: "Secretarial Services",
      description: "Corporate law is a complex piece of legislation that governs the activities of not only domestic companies, LLPs but also that of foreign companies setting up their establishments in India.",
      content: <>
        <div className="mb-5">
          Corporate law is a complex piece of legislation that governs the activities of not only domestic companies, LLPs but also that of foreign companies setting up their establishments in India. At every step, corporates have to comply with the plentitude of provisions contained Indian Companies Act and SEBI Regulations. We not only provide advice on ensuring compliance with these regulations but also provide secretarial support with respect to incorporation of subsidiaries anywhere in India.
        </div>

        <div>Our services include:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilMeetingBoard size={ iconSize } />} name="Assistance in holding & conducting Board Meeting, Annual General Meeting,  and  Extra-Ordinary General Meeting" />
          <Card icon={<UilClipboardNotes size={ iconSize } />} name="Maintenance of Minutes Book, Statutory Registers, and all other prescribed secretarial records under the Companies Act, 2013" />
          <Card icon={<UilFileNetwork size={ iconSize } />} name="E-Filing of Annual Return & Financial Statements with MCA" />
          <Card icon={<FaRegFilePdf size={ iconSize } />} name="E-Filing of various statutory forms, returns and reports with MCA, NCLT, etc" />
          <Card icon={<UilFileMedicalAlt size={ iconSize } />} name="Assisting in Reporting of Financial Data in XBRL format with MCA" />
          <Card icon={<UilFileInfoAlt size={ iconSize } />} name="Certification services of various e-forms" />
          <Card icon={<UilAward size={ iconSize } />} name="Obtaining Director Identification Number (DIN) and Digital Signature Certificate (DSC)" />
          <Card icon={<GrCompliance size={ iconSize } />} name="Compliances relating to Managerial Remuneration" />
          <Card icon={<UilPostcard size={ iconSize } />} name="Compliances relating to Change of Name, Change of Objects, change of status from Public Ltd to Private Ltd and vice-versa" />
          <Card icon={<FaBuildingUser size={ iconSize } />} name="Compliances Relating to Limited Liability Partnership / Company i.e. Pvt. Ltd, Public Ltd, One Person Company (OPC) and Section 8 Company" />
          <Card icon={<FaPeopleRoof size={ iconSize } />} name="Ensuring board of director’s compliance as per Companies Act" />
          <Card icon={<MdRealEstateAgent size={ iconSize } />} name="Interstate and Intrastate change of Registered office" />
          <Card icon={<UilCheckCircle size={ iconSize } />} name="Procedures and compliances related to making inter-company loans, investments, guarantees, and providing of securities" />
          <Card icon={<BsBuildingFillX size={ iconSize } />} name="Assisting in winding up/closure of companies in India" />
          <Card icon={<FaHandshakeAngle size={ iconSize } />} name="Liaisoning with the office of MCA, NCLT, Register of Firms, Regional Director, Company Law Board and other regulators for obtaining various regulatory approvals" />
          <Card icon={<UilMoneyWithdrawal size={ iconSize } />} name="Facilitating the Buyback, Bonus issue, Rights issue, ESOP, etc" />
          <Card icon={<UilChartPieAlt size={ iconSize } />} name="Consolidation/sub-division of shares, share transfer and transmission, issue of shares certificates, dematerialization of shares, forfeiture of shares" />
          <Card icon={<UilChartGrowth size={ iconSize } />} name="Increase and re-classification of Authorised Share Capital" />
          <Card icon={<RiSecurePaymentFill size={ iconSize } />} name="Liaising with NSDL, CDSL, Share Transfer Agents for transfer and demat of securities" />
          <Card icon={<AiOutlineAudit size={ iconSize } />} name="Assisting in Secretarial Compliance Audit" />
          <Card icon={<UilFileContract size={ iconSize } />} name="Drafting of MOA, AOA, NDA and other related agreements" />
          <Card icon={<UilFileGraph size={ iconSize } />} name="Assistance in registration of charges, search reports and status reports" />
          <Card icon={<GoLaw size={ iconSize } />} name="Advisory on Corporate Laws & other Allied Laws/Acts" />
          <Card icon={<UilAbacus size={ iconSize } />} name="Advisory services for implementation of Corporate Social Responsibility in compliance with the Companies Act" />
        </div>
      </>,
      id: "secretarial_services",
      icon: <MdOutlineGroupAdd size={ iconSize } />
    },
    {
      name: "CMA Projections",
      description: "Our CMA (Credit Monitoring Arrangement) projection services and designed to help MSMEs secure financing and maintaining strong relationship with financial institutions.",
      content: <>
        <div className="mb-5">
          Our CMA (Credit Monitoring Arrangement) projection services and designed to help MSMEs secure financing and maintaining strong relationship with financial institutions.
        </div>

        <div>We provide:</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilChartGrowth size={ iconSize } />} name="Detailed Financial Projections" />
          <Card icon={<UilUniversity size={ iconSize } />} name="Bank Loan Assistance" />
          <Card icon={<UilComparison size={ iconSize } />} name="Financial Health Ananlysis" />
          <Card icon={<UilBriefcase size={ iconSize } />} name="Strategic Guidance" />
        </div>

        <div>Ensure your business's financial stability and secure the funding you need with our expert CMA projections services.</div>
      </>,
      id: "cma_projections",
      icon: <FaRegCreditCard size={ iconSize } />
    },
    {
      name: "CFO Services",
      description: "Our CFO services, tailored specifically for Micro, Small, and Medium Enterprises(MSMEs), provide expert financial management and strategic support to help your business thrive.",
      content: <>
        <div className="mb-5">
          Our CFO services, tailored specifically for Micro, Small, and Medium Enterprises(MSMEs), provide expert financial management and strategic support to help your business thrive.
        </div>

        <div>As your dedicated partner, we offer</div>
        <div className="grid grid-cols-3 gap-4 p-5 mb-5">
          <Card icon={<UilCoins size={ iconSize } />} name="Financial Planning & strategy" />
          <Card icon={<UilRupeeSign size={ iconSize } />} name="Cash FLow Management" />
          <Card icon={<UilCrosshair size={ iconSize } />} name="Compliance & Risk Management" />
          <Card icon={<UilArrowGrowth size={ iconSize } />} name="Growth support" />
        </div>

        <div>Empower your business with professional CFO services that enhance profitability, ensure compliance, and support sustainable growth</div>
      </>,
      id: "cfo_services",
      icon: <SiAmazonsimpleemailservice size={ iconSize } />
    }
  ];
};

export default services;