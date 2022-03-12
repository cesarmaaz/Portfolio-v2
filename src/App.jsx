import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import { Switch, IconButton } from "@mui/material";

const App = () => {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div
      // style={{ userSelect: "none" }}
      className="App"
    >
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="small"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton 
        onClick={() => {
          setNavToggle(!navToggle)
        }}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>

        <Routes>
          <Route path="/" element={<HomePage />} exact="true"></Route>
          <Route path="/about" element={<AboutPage />} exact="true"></Route>
          <Route path="/resume" element={<ResumePage />} exact="true"></Route>
          <Route path="/portfolios" element={<PortfoliosPage />} exact="true"></Route>
          <Route path="/blogs" element={<BlogsPage />} exact="true"></Route>
          <Route path="/contact" element={<ContactPage />} exact="true"></Route>
        </Routes>

      </MainContentStyled>
    </div>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 10.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export default App;