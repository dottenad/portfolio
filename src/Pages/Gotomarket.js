import ProjectDetails from "../Components/ProjectDetails";
import PrimaryImage from "../Components/PrimaryImage";

export default function Gotomarket() {
    const images = [
        {
            url: "img/gotomarket_lp.jpg",
            title: "Automatically generated landing page using Python and Beautiful Soup",
        },
        {
            url: "img/gotomarket_edit.jpg",
            title: "Editing experience",
        },
        {
            url: "img/gotomarket_edit2.jpg",
            title: "Editing experience",
        },
        {
            url: "img/gotomarket_customers.png",
            title: "Customer list with export functionality",
        },
    ];

    const projectDetails = {
        title: "gotomarket.tools",
        description: [
            "Gotomarket.tools is a SaaS product that enables Amazon sellers to easily generate coupon redemption landing pages. Coupon redemption landing pages carry a host of benefits for Amazon sellers, including increased sales via coupon code redemption, pixeling traffic for remarketing campaigns, collection of customer data (including name, email, and phone), filtering low intent traffic, and more.",
            "Gotomarket.tools started from a frequently requested feature that came up when doing work for Amazon sellers on GetReviews.ai in that sellers wanted a way to distribute coupon codes and filter low-intent traffic through an external landing page, but still direct the traffic to Amazon should the customer be interested in purchasing. This type of functionality lacks on eCommerce sites like Shopify.",
        ],
        gallery: "Gallery",
        skills: {
            title: "Skills",
            skillsList: [
                ["React", "Express", "Node", "Tailwind"],
                ["Mongo", "Heroku", "Git"],
            ],
        },
        team: {
            title: "Team",
            description: "Solo project",
        },
        link: {
            title: "Link",
            url: "https://www.gotomarket.tools",
        },
    };

    const primaryImage = {
        url: "img/gotomarket_comps.png",
    };

    return (
        <>
            <div className="px-4">
                <PrimaryImage primaryImage={primaryImage} />
                <ProjectDetails
                    images={images}
                    projectDetails={projectDetails}
                />
            </div>
        </>
    );
}
