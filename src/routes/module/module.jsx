import { useLoaderData } from 'react-router-dom';
import { BackButton } from '../../components/BackButton/back-button';
import './module.css'; 


const moduleNames = [
    "Introduction to Waste Segregation: Why It Matters",
    "Types of Waste and Their Impact on the Environment",
    "Basics of Effective Waste Sorting and Segregation",
    "Organic Waste: Composting and Recycling Techniques",
    "Inorganic Waste: Recycling, Reusing, and Disposal Methods",
    "Hazardous Waste: Identification, Handling, and Safe Disposal",
    "Plastic Waste Management and Reduction Strategies",
    "E-waste: Collection, Recycling, and Sustainable Disposal",
    "Community Engagement and Education in Waste Segregation",
    "Policy and Regulations: Understanding the Legal Framework for Waste Management"
];
  
const wasteSegregationVideos = [
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OxBWODQg2Yk?si=gzAfBe6uiosl9tuW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qVBqB-uPKCg?si=hAXai77p88J4ed14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qyu-fZ8BOnI?si=cfBEbfqy_NwAwuGd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2I8Tjb4Fy-Q?si=Z_VGTKN9MTXByLKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YeVLBkypPRU?si=pESY-ZiZGDpHzOb9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/w_xI_17u7ro?si=rkVq2pQc7MznvTJC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/I5g9-4fx60A?si=LJ3tJmVhjGn5FPVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eT34ypRodB0?si=vzc7Bic0GdCdxhVx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eT34ypRodB0?si=vzc7Bic0GdCdxhVx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PxzPvMhG9sY?si=IhGWCx3elnIaiLma" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
];

const IntroToWasteSegregation = () => {
    return (
        <div>
            <h1>Introduction to Waste Segregation: Why It Matters</h1>

            <p>Waste segregation is the process of separating and categorizing waste materials to ensure proper disposal and recycling. This introductory module aims to provide an understanding of the importance of waste segregation in maintaining a sustainable environment.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the environmental impact of improper waste disposal.</li>
                <li>Learn the benefits of effective waste segregation for recycling and resource conservation.</li>
                <li>Recognize the role of waste segregation in reducing pollution and promoting a cleaner community.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>The concept of waste segregation and its relevance</li>
                <li>Environmental consequences of improper waste management</li>
                <li>Case studies demonstrating the benefits of effective waste segregation</li>
            </ul>
        </div>
    );
};

const TypesOfWaste = () => {
    return (
        <div>
            <h1>Types of Waste and Their Impact on the Environment</h1>

            <p>Understanding the different types of waste and their environmental impact is crucial for effective waste management. This module will explore various waste categories and their implications on the environment.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Identify and classify different types of waste materials.</li>
                <li>Understand the environmental consequences of different waste types.</li>
                <li>Develop strategies for managing different waste categories sustainably.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Classification of waste materials</li>
                <li>Environmental impact of different waste types</li>
                <li>Best practices for managing various waste categories</li>
            </ul>
        </div>
    );
};


const BasicsOfWasteSorting = () => {
    return (
        <div>
            <h1>Basics of Effective Waste Sorting and Segregation</h1>

            <p>Proper waste sorting and segregation are essential steps in effective waste management. This module will cover the basics of how to sort and segregate waste materials efficiently.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Learn the principles of effective waste sorting and segregation.</li>
                <li>Develop skills for sorting and segregating waste materials correctly.</li>
                <li>Understand the importance of proper waste sorting in recycling and disposal processes.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Methods and techniques for waste sorting</li>
                <li>Importance of proper waste segregation</li>
                <li>Case studies on effective waste sorting and segregation</li>
            </ul>
        </div>
    );
};



const OrganicWaste = () => {
    return (
        <div>
            <h1>Organic Waste: Composting and Recycling Techniques</h1>

            <p>Organic waste, such as food scraps and yard waste, can be recycled through composting and other techniques. This module will provide insights into composting methods and recycling techniques for organic waste.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the properties and types of organic waste.</li>
                <li>Learn composting methods for organic waste recycling.</li>
                <li>Explore other recycling techniques for organic waste materials.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Characteristics and types of organic waste</li>
                <li>Composting methods and techniques</li>
                <li>Other recycling techniques for organic waste</li>
            </ul>
        </div>
    );
};

const InorganicWaste = () => {
    return (
        <div>
            <h1>Inorganic Waste: Recycling, Reusing, and Disposal Methods</h1>

            <p>Inorganic waste, including metals, glass, and plastics, requires specific recycling, reusing, and disposal methods. This module will discuss the various methods and processes for managing inorganic waste sustainably.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the types and properties of inorganic waste.</li>
                <li>Learn the recycling and reusing techniques for inorganic waste materials.</li>
                <li>Explore proper disposal methods for inorganic waste.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Classification and properties of inorganic waste</li>
                <li>Recycling and reusing methods for inorganic waste</li>
                <li>Safe disposal methods for inorganic waste</li>
            </ul>
        </div>
    );
};


const HazardousWaste = () => {
    return (
        <div>
            <h1>Hazardous Waste: Identification, Handling, and Safe Disposal</h1>

            <p>Hazardous waste poses significant risks to human health and the environment. This module will focus on identifying hazardous waste, safe handling practices, and proper disposal methods.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the characteristics and types of hazardous waste.</li>
                <li>Learn safe handling and storage practices for hazardous waste.</li>
                <li>Explore proper disposal methods for hazardous waste.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Classification and properties of hazardous waste</li>
                <li>Safe handling and storage practices</li>
                <li>Proper disposal methods for hazardous waste</li>
            </ul>
        </div>
    );
};


const PlasticWaste = () => {
    return (
        <div>
            <h1>Plastic Waste Management and Reduction Strategies</h1>

            <p>Plastic pollution is a global environmental concern. This module will explore plastic waste management strategies and reduction techniques to minimize the impact of plastic waste on the environment.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the environmental impact of plastic pollution.</li>
                <li>Learn plastic waste management and reduction strategies.</li>
                <li>Explore alternatives to single-use plastics.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Types and properties of plastic waste</li>
                <li>Plastic waste management strategies</li>
                <li>Reduction techniques and alternatives to single-use plastics</li>
            </ul>
        </div>
    );
};


const EWaste = () => {
    return (
        <div>
            <h1>E-waste: Collection, Recycling, and Sustainable Disposal</h1>

            <p>Electronic waste (E-waste) contains hazardous materials that require special handling and disposal methods. This module will cover the collection, recycling, and sustainable disposal of E-waste.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the types and components of E-waste.</li>
                <li>Learn the collection and recycling methods for E-waste.</li>
                <li>Explore sustainable disposal options for E-waste.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Classification and components of E-waste</li>
                <li>Collection and recycling methods</li>
                <li>Sustainable disposal options for E-waste</li>
            </ul>
        </div>
    );
};


const CommunityEngagement = () => {
    return (
        <div>
            <h1>Community Engagement and Education in Waste Segregation</h1>

            <p>Community engagement and education play a vital role in promoting effective waste segregation and management. This module will discuss strategies for engaging the community and educating individuals about waste segregation.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the importance of community engagement in waste management.</li>
                <li>Learn effective strategies for educating the community about waste segregation.</li>
                <li>Explore methods for encouraging community participation in waste management initiatives.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Role of community engagement in waste management</li>
                <li>Strategies for educating the community</li>
                <li>Methods for encouraging community participation</li>
            </ul>
        </div>
    );
};

const PolicyAndRegulations = () => {
    return (
        <div>
            <h1>Policy and Regulations: Understanding the Legal Framework for Waste Management</h1>

            <p>Understanding the policy and regulations related to waste management is essential for compliance and effective waste handling. This module will provide an overview of the legal framework governing waste management practices.</p>

            <h2>Key Objectives:</h2>
            <ul>
                <li>Understand the legal framework and regulations governing waste management.</li>
                <li>Learn the compliance requirements for waste handling and disposal.</li>
                <li>Explore the role of policy in promoting sustainable waste management practices.</li>
            </ul>

            <h2>Topics Covered:</h2>
            <ul>
                <li>Overview of waste management policies and regulations</li>
                <li>Compliance requirements for waste handling and disposal</li>
                <li>Role of policy in promoting sustainable waste management</li>
            </ul>
        </div>
    );
};

const writtenExplanation = [
    <IntroToWasteSegregation/>,
    <TypesOfWaste/>,
    <BasicsOfWasteSorting/>,
    <OrganicWaste/>,
    <InorganicWaste/>,
    <HazardousWaste/>,
    <PlasticWaste/>,
    <EWaste/>,
    <CommunityEngagement/>,
    <PolicyAndRegulations/>
];

  

export function Module() {
    const moduleNo = useLoaderData(); 

    return (
        <div className='module-page'>
            <BackButton />
            <div className='module-contents'>
                <div className='module-header'>
                    <h2>Module {moduleNo}: {moduleNames[moduleNo - 1]}</h2>
                    <hr />
                </div>
                <h3>Here is the video for this topic:</h3>
               {wasteSegregationVideos[moduleNo - 1]}
               <hr />
               {writtenExplanation[moduleNo-1]}
            </div>
        </div>
    )
}