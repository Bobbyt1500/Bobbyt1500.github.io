class RTNavBar extends React.Component {
  

  render() {
    const e = React.createElement;
    const linkprefix = this.props.linkprefix
    var bg = " primary-bg"

    if (this.props.nobg == "1") {
      bg = ""
    }

    return e("nav", {className: "navbar navbar-expand-lg" + bg}, 
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
              e("a", {className: "nav-link", href: linkprefix + "projects.html"}, "Projects"),
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

var provided_link_prefix = "", no_bg = "0";

if (document.getElementById("rtnavbar") != null) {
  if (document.getElementById("rtnavbar").getAttribute("linkprefix") != null) provided_link_prefix = document.getElementById("rtnavbar").getAttribute("linkprefix");
  if (document.getElementById("rtnavbar").getAttribute("no-bg") != null) no_bg = document.getElementById("rtnavbar").getAttribute("no-bg");
  ReactDOM.render(React.createElement(RTNavBar, {linkprefix: provided_link_prefix, nobg: no_bg}), document.getElementById("rtnavbar"));
}