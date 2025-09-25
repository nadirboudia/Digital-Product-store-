import { useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      // redirect l home w b3d scroll
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link
          to="/"
          className="text-3xl font-bold bg-coral-red px-5 rounded text-white "
        >
          LLC
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleClick(item.id)}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* {mobile } */}

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-6 bg-white p-5 absolute left-0 w-full shadow-lg max-lg:block lg:hidden">
          
          {navLinks.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleClick(item.id)}
                className="font-montserrat leading-normal text-lg text-slate-gray w-full text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
