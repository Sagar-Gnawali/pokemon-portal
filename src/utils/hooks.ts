import { useEffect } from "react";

export const useScrollEnd = (onScrollEnd: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight === scrollHeight) {
        onScrollEnd();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollEnd]);
};
