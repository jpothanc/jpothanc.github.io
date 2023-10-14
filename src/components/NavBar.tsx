import config from "../config.json";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="top-bar__content">
            <a href="#" className="logo">
              <img
                src="https://images.unsplash.com/photo-1570211776091-c19f426d37af?auto=format&fit=crop&w=70&q=100"
                alt="logo"
                className="logo"
              />
              <span className="logo__text">{config.portfolio.name}</span>
            </a>
            <span className="logo__text">{config.portfolio.IntroBadge}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
