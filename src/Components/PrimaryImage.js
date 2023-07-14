export default function PrimaryImage({ primaryImage }) {
    return (
        <div className="overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600">
            <img
                src={primaryImage.url}
                className="w-full"
                alt="Gotomarket.tools"
            />
        </div>
    );
}
