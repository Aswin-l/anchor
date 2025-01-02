import React from "react";

const Nav = () => {
  return (
    <>
           
      <section className="nav-8">
        <nav>
          {[
            { href: "#nav-8", text: "Home", dataText: "Main page" },
            { href: "#nav-8", text: "About", dataText: "What we do" },
            { href: "#nav-8", text: "Portfolio", dataText: "See our works" },
            { href: "#nav-8", text: "Contact", dataText: "Get in touch" },
            { href: "#nav-8", text: "Blog", dataText: "Thoughts" },
          ].map((link, index) => (
            <a key={index} className="item" href={link.href}>
              <div data-text={link.dataText} className="linktext">
                {link.text}
              </div>
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Nav;
