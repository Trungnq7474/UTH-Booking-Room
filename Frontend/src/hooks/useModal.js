import { useState } from "react";

function useModal() {
    const [show, setShow] = useState(false);

    return { show, setShow};
}

export default useModal;