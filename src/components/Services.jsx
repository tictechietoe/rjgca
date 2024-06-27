// src/components/OurServices.js
import React from 'react';
import Slider from './Slider';
import { FaCalculator } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

const OurServices = () => {
    const services = [
        {
            name: "Business Setup In India & Registrations",
            content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />,
            iconDescription: "calculator icon"
        },
        {
            name: "Accounting & Business Support Services",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <RiTeamFill size={ 40 }/>
        },
        {
            name: "GST Compliances & Litigations",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Income Tax Compliances & Litigations",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "TDS Compliances & Litigations",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Statutory Audit",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Income Tax Audit",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Stock Audit",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Internal Audit",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Transfer Pricing Audit",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Fund raising — Debt, Venture capital and private equity",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Secretarial Services",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "FEMA Advisory",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "Societies, Trust and Co-operative Society Regulations & Advisory",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "CMA Projections",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        },
        {
            name: "CFO Services",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus harum, nesciunt eligendi quisquam, adipisci repellendus aspernatur accusamus perspiciatis vero voluptatem at, distinctio autem sed dignissimos odio sint fugit nisi?",
            icon: <FaCalculator size={ 40 } />
        }
    ];

    return (
        <div className="m-5 py-5 border-b">
            <h2 className="flex justify-center font-medium text-3xl">
                OUR SERVICES
            </h2>
            <div className="my-3">
                <Slider data={ services } isServices={ true } slidesNumber={ 3 }/>
            </div>
        </div>
    );
};

export default OurServices;
