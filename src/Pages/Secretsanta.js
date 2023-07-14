import ProjectDetails from "../Components/ProjectDetails";
import PrimaryImage from "../Components/PrimaryImage";

export default function Secretsanta() {
    const images = [
        {
            url: "img/ss_login.png",
            title: "Login/Signup Functionality (JWT/Bcrypt)",
        },
        {
            url: "img/ss_dashboard.png",
            title: "Gift Requests. See what gifts the person you are Secret Santa for is requesting.",
        },
    ];

    const projectDetails = {
        title: "secretsanta.tv",
        description: [
            "secretsanta.tv is a SaaS that allows you to manage all of your Secret Santa groups in one place. Create groups, randomly assign Secret Santas, add gifts, and anonymously view gifts of the people you are Secret Santa for all in one easy-to-use dashboard.",
            "This project started out of a need that my family runs into every Christmas in that we do a Secret Santa, but not everyone is physically able to be there to draw a name out of a hat, so we needed a way to do Secret Santa online. So I took it upon myself to create a digital Secret Santa event coordinator app.",
        ],
        gallery: "Gallery",
        skills: {
            title: "Tools",
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
            url: "https://secretsanta.tv/",
        },
    };

    const primaryImage = {
        url: "img/secretsanta_comps.png",
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
