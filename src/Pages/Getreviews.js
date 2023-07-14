import { useState, useEffect, useMemo } from "react";
import ProjectDetails from "../Components/ProjectDetails";
import PrimaryImage from "../Components/PrimaryImage";

export default function Getreviews() {
    const images = useMemo(
        () => [
            {
                url: "img/ss_login.png",
                title: "Login/Signup Functionality (JWT/Bcrypt)",
            },
            {
                url: "img/ss_dashboard.png",
                title: "Gift Requests. See what gifts the person you are Secret Santa for is requesting.",
            },
        ],
        []
    );

    const projectDetails = {
        title: "gotomarket.tools",
        description: [
            "Gotomarket.tools is a SaaS product that enables Amazon sellers to easily generate coupon redemption landing pages. Coupon redemption landing pages carry a host of benefits for Amazon sellers, including increased sales via coupon code redemption, pixeling traffic for remarketing campaigns, collection of customer data (including name, email, and phone), filtering low intent traffic, and more.",
            "gotomarket.tools started from a frequently requested feature that came up when doing work for Amazon sellers on GetReviews.ai in that they wanted a way to distribute coupon codes and filter low-intent traffic through an external landing page, but still direct the traffic to Amazon should the customer be interested in purchasing. This type of functionality lacks on eCommerce sites like Shopify.",
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

    const primaryImage = useMemo(
        () => ({
            url: "img/gotomarket_comps.png",
        }),
        []
    );

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const allImages = [primaryImage, ...images];

        const imagePromises = allImages.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image.url;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises)
            .then(() => setIsLoading(false))
            .catch((error) => console.error("Error loading images:", error));
    }, [primaryImage, images]);

    if (isLoading) {
        return "Loading..."; // Replace with your loading spinner
    }

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
