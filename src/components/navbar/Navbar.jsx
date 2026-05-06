import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import profile from "../../assets/images/profile.jpg";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu(true);
    document.body.style.overflow = "hidden";
  };

  const HandleCloseMenu = () => {
    setOpenMenu(false);
    document.body.style.overflow = "auto";
  };

  const HandleClickMenuLink = () => {
    if (openMenu) {
      setOpenMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="NavbarMainDiv">
      <nav className="NavigationMain">
        <div className="InsideNavDiv">
          <div className="LogoDiv">
            <a href="#home">
              <img src={profile} alt="profile" />
            </a>
          </div>
          <div
            className={
              openMenu ? "NavigationSide NavigationSwitch" : "NavigationSide"
            }
          >
            <div className="CloseDiv">
              <FontAwesomeIcon
                icon={faXmark}
                id="CloseBtn"
                onClick={HandleCloseMenu}
              />
            </div>
            <div className="NavigationLinkMainDiv">
              <a href="#home" id="NavsBtn" onClick={HandleClickMenuLink}>
                Home
              </a>
              <a href="#about-me" id="NavsBtn" onClick={HandleClickMenuLink}>
                About
              </a>
              <a href="#resume" id="NavsBtn" onClick={HandleClickMenuLink}>
                Resume
              </a>
              <a href="#projects" id="NavsBtn" onClick={HandleClickMenuLink}>
                Projects
              </a>
              <a href="#contact" id="NavsBtn" onClick={HandleClickMenuLink}>
                Contact
              </a>
            </div>

            <div className="AppearingMenuLineMainDiv">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="MenuDiv">
            <p id="MenuBtn" onClick={HandleOpenMenu}>
              MENU
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
