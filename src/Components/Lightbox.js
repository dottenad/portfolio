import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function LightboxComponent({ images }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
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
        .image-container {
            height: 200px;
            overflow: hidden;
        }

        .image-container img {
            object-fit: cover;
            object-position: top left;
            height:100%;
            width:100%;
        }
        
        `}
            </style>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
                {images.map((img, index) => (
                    <div key={img.url} className="flex-1 ml-0 mx-4 mb-4">
                        <div className="cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 image-container">
                            <img
                                src={img.url}
                                className="w-full cursor-pointer"
                                alt="Gotomarket.tools"
                                onClick={() => {
                                    setLightboxOpen(true);
                                    setCurrentImage(index); // Set the current image index to the index of the clicked image
                                }}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            {img.title}
                        </p>
                    </div>
                ))}
            </div>
            {lightboxOpen && (
                <Lightbox
                    images={images} // Pass the images array to the Lightbox
                    startIndex={currentImage} // Pass the current image index to the Lightbox
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    );
}
