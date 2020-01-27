import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"

import SunIcon from "../assets/sun.svg"
import MoonIcon from "../assets/moon.svg"

const ThemeSwitch = ({ theme, onChange }) => (
  <button
    className="inline focus:outline-none focus:shadow-none"
    onClick={onChange}
    title={`Active ${theme === "dark" ? "light" : "dark"} mode`}
    type="button"
  >
    {theme === "dark" ? (
      <SunIcon className="fill-current h-4 w-4" />
    ) : (
      <MoonIcon className="fill-current h-4 w-4" />
    )}
  </button>
)

const Header = () => (
  <header className="flex justify-between p-3">
    <div>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link className="ml-3 nav-link" to="/blog">
        Blog
      </Link>
    </div>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <ThemeSwitch
          theme={theme}
          onChange={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </ThemeToggler>
  </header>
)

export default Header
