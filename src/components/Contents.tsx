//import React from 'react'

const Contents = () => {
  return (
    <>
      <div className="content">
        <header className="headerContent">
          <section className="intro">
            <h1 className="first-heading">
              Hello <span className="emoji">👋</span>
            </h1>
            <p className="text">
              <span className="u-bold">
                I'm <span className="u-yellow">Tim</span>
              </span>
              , <i>a full-stack developer</i>
              <span className="text--second">based in the United States.</span>
            </p>
          </section>
        </header>
        <main className="main">
          <div className="card">
            About
            <button className="btn--download">Download</button>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </main>
      </div>
    </>
  );
};

export default Contents;
