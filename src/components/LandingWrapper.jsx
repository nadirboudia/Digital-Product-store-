import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LandingWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return <>{children}</>;
};

export default LandingWrapper;
