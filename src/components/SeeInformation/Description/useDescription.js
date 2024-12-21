import { useState } from "react";

export default function useDescription(){
    const [descriptionCollapse, setDescriptionCollapse] = useState(true);

    const toggleDescriptionCollapse = () => {
        setDescriptionCollapse(!descriptionCollapse);
    }
    const getWordsDescription = (description) => {
        if (!description || description.trim() === "") {
            return "No description";
        }
        const words = description.split(" ");
        const firstSomeWords = words.slice(0, 4);
        return firstSomeWords;
    };

    return {
        toggleDescriptionCollapse,
        getWordsDescription,
        descriptionCollapse};
}