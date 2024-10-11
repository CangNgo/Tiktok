import { useState, forwardRef } from "react";
import images from "~/assets/images";
const Image = forwardRef(
    ({ src, alt, fallBack: customFallback = images.noImage, ...props }, ref) => {
        const [fallBack, setFallBack] = useState("");

        const handelError = () => {
            setFallBack(customFallback);
        };

        return (
            <img
                className="overflow-hidden"
                ref={ref}
                src={fallBack || src}
                alt={alt}
                {...props}
                onError={handelError}
            />
        );
    },
);

export default Image;
