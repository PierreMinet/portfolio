import { createContext } from "react";
import { useLayoutEffect } from "react";

const ScrollTop = createContext(() => useLayoutEffect(() => {
    window.scrollTo(0, 0)
}));

export default ScrollTop;