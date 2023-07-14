import LightboxComponent from "../Components/Lightbox";

export default function ProjectDetails({ images, projectDetails }) {
    return (
        <div className="mx-auto grid max-w-full grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none md:grid-cols-3 mt-8">
            <div className="md:col-span-2 xl:pb-20 ">
                <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    {projectDetails.title}
                </h3>
                {projectDetails.description.map((desc, index) => (
                    <p
                        key={index}
                        className="text-gray-500 dark:text-gray-400 text-sm mt-2"
                    >
                        {desc}
                    </p>
                ))}
                <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 mt-6">
                    {projectDetails.gallery}
                </h3>
                <LightboxComponent images={images} />
            </div>

            <div className="lg:col-start-3">
                <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    {projectDetails.skills.title}
                </h3>
                <div className="grid max-w-full grid-cols-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none grid-cols-2 mb-6">
                    {projectDetails.skills.skillsList.map((column, i) => (
                        <div key={i} className="col-span-1 ">
                            <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 list-inside list-disc">
                                {column.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    {projectDetails.team.title}
                </h3>
                <p className="mt-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    {projectDetails.team.description}
                </p>
                <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    {projectDetails.link.title}
                </h3>
                <a
                    href={projectDetails.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 dark:text-gray-400 text-sm mt-2 underline"
                >
                    {projectDetails.link.url}
                </a>
            </div>
        </div>
    );
}
