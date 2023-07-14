import { Link } from "react-router-dom";
import Popover from "../Components/Popover.js";

export default function Home() {
    const projects = [
        {
            link: "/gotomarket",
            image: "img/gotomarket.svg",
            alt: "Gotomarket.tools",
            title: "gotomarket.tools",
            description: "eCommerce landing page generator",
            tags: [
                "Node",
                "Express",
                "React",
                "Mongo",
                "Tailwind",
                "Heroku",
                "Sendgrid",
                "Git",
            ],
        },
        {
            link: "/secretsanta",
            image: "img/secretsanta.svg",
            alt: "Secretsanta.tv",
            title: "secretsanta.tv",
            description: "Secret Santa event manager",
            tags: [
                "Node",
                "Express",
                "React",
                "Mongo",
                "Tailwind",
                "Heroku",
                "Sendgrid",
                "Git",
            ],
        },
        {
            link: "/getreviews",
            image: "img/getreviews.svg",
            alt: "GetReviews.ai",
            title: "getreviews.ai",
            description: "Review generation app",
            tags: [
                "Frontend Development",
                "Email Marketing",
                "Customer Support",
                "Google Ads",
                "Facebook Ads",
                "Strategy",
            ],
            popover: {
                imgSrc: "img/dollaricon.png",
                imgAlt: "Dollar Icon",
                content: "Acquired",
            },
        },
        {
            link: "/secretsanta",
            image: "img/drawbridge.svg",
            alt: "Drawbridge Marketing",
            title: "Drawbridge Marketing",
            description: "eCommerce Marketing Agency",
            tags: [
                "Product Photography/Renders",
                "Infographics",
                "Video",
                "Copywriting",
                "Enhanced Brand Content",
                "Storefront Design & Development",
                "Ad Creative",
            ],
        },
    ];
    return (
        <>
            <style>
                {`
        .has-popover {
            position: relative;
            display: inline-flex;
            align-items: center;
        }
        
        .popover {
            display: none;
            position: absolute;
            top: calc(100% + 15px);
            left: 18px;
            transform: translateX(-50%);
            z-index: 20;
            width: 75px;
            height: 32px;
            border-radius: 3px;
            background: #374151;
            color: white;
            padding: 7px;
            text-align: center;
            font-size: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        }
        
        .popover .carat {
            position: absolute;
            top: -7px;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 15px;
            height: 15px;
            background: #374151;
        }
        
        .has-popover:hover .popover {
            display: inline-block;
        }
        
        `}
            </style>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
                {projects.map((project, index) => (
                    <div key={index} className="mx-4 mb-4">
                        <Link to={project.link} className="cursor-pointer">
                            <div className="cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600">
                                <img
                                    src={project.image}
                                    className="w-full cursor-pointer"
                                    alt={project.alt}
                                />
                            </div>
                        </Link>
                        <div className="inline-flex items-baseline">
                            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 mt-3">
                                {project.title}
                            </h3>
                            {project.popover && (
                                <div className="has-popover">
                                    <img
                                        src={project.popover.imgSrc}
                                        className="ml-2 relative top-1"
                                        style={{ height: "20px" }}
                                        alt={project.popover.imgAlt}
                                    />
                                    <Popover>{project.popover.content}</Popover>
                                </div>
                            )}
                        </div>
                        <p className="mt-1 mb-3 text-sm text-gray-500 dark:text-gray-400">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap">
                            {project.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="relative z-10 rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1.5 font-medium text-xs text-gray-900 dark:text-gray-100 hover:bg-gray-100 mr-1 mb-2"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
