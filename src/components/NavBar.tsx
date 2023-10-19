import config from "../config.json";
import { getThemeColor } from "../lib/helper";
const NavBar = () => {
  return (
    <>
      <header
        className="header"
        style={{
          background: getThemeColor("dark", "bodyBackground"),
        }}
      >
        <div
          className="top-bar"
          style={{
            background: getThemeColor("dark", "logoBackground"),
          }}
        >
          <div className="top-bar__content">
            <a href="#" className="logo">
              <img
                src="https://images.unsplash.com/photo-1570211776091-c19f426d37af?auto=format&fit=crop&w=70&q=100"
                alt="logo"
                className="logo"
              />
              <span
                className="logo__text"
                style={{
                  color: getThemeColor("dark", "logoColor"),
                }}
              >
                {config.portfolio.name}
              </span>
            </a>
            <span
              className="logo__desc"
              style={{
                color: getThemeColor("dark", "logoDescColor"),
              }}
            >
              {config.portfolio.IntroBadge}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
