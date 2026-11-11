import { useState } from "react";

function useOpen() {
    const [isOpen, setIsOpen] = useState(true);

    return { isOpen, setIsOpen };
}

export default useOpen;