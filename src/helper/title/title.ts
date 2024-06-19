import { useEffect } from "react";

export default function setTitle(title?: string) {
    useEffect(() => {
        document.title = title ? `${title} - PharmaPlan` : "PharmaPlan"; // why shit aint workie workie?
        // console.log("yo");
    }, []);    
}