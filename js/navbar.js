'use strict';

const e = React.createElement;

class RTNavBar extends React.Component {

  render() {
    const linkprefix = this.props.linkprefix

    return e("nav", {className: "navbar navbar-expand-lg primary-bg"}, 
      e("div", {className: "container"},

        // Name / Home link
        e("a", {className: "navbar-brand", href: linkprefix + "index.html"}, "Robert Thierry"),

        // Hamburger menu
        e("button", {className: "navbar-toggler custom-toggler highlight-color", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation"},
          e("span", {className: "navbar-toggler-icon"})
        ),

        e("div", {className: "collapse navbar-collapse", id: "navbarNav"},
          e("ul", {className: "navbar-nav"},
            
            // Nav links
            e("li", {className: "nav-item"},
              e("a", {className: "nav-link", href: linkprefix + "programming.html"}, "Programming"),
            ),

            e("li", {className: "nav-item"},
              e("a", {className: "nav-link", href: linkprefix + "engineering.html"}, "Engineering"),
            ),

            e("li", {className: "nav-item"},
              e("a", {className: "nav-link", href: linkprefix + "experience.html"}, "Experience/Certifications"),
            )

          )
        )

      )
    );
  }
}

if (document.getElementById("rtnavbar").getAttribute("linkprefix") != null) {
  ReactDOM.render(e(RTNavBar, {linkprefix: document.getElementById("rtnavbar").getAttribute("linkprefix")}), document.getElementById("rtnavbar"));
} else {
  ReactDOM.render(e(RTNavBar, {linkprefix: ""}), document.getElementById("rtnavbar"));
}