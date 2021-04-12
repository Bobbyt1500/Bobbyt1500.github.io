let projects = [{
    img_id: "109dMHkOMzf1n8Wwyz7VT4S8WZn0aBX5g",
    title: "Weather Display",
    desc: "An always-on display that provides weather data for a selected area.",
    url: "weather-display.html"
},
{
    img_id: "1yKQ1q9RzIJJEenQEUFbkjBhntizIknZ4",
    title: "3x3 Sliding Number Puzzle Solver",
    desc: "This is a simple to use program that returns the best possible solution to a 3x3 sliding number puzzle.",
    url: "sliding-puzzle-solver.html"
},
{
    img_id: "1q8xRMGo-7swaDVnez_ZdjYCNlAohnmB7",
    title: "X-Plane AL Manifold and Tachometer",
    desc: "An X-Plane 11 plugin that shows manifold pressure and propeller RPMs on a digital display.",
    url: "al-map-tach.html"
},
{
    img_id: "1CWyxFOkUePghLwI3v1T3fvOOhvJ7I2gB",
    title: "LOLStats",
    desc: "A League of Legends chat bot that allows coaches to easily get statistics on a player.",
    url: "lolstats.html"
},
{
    img_id: "1s7RdOHm9P75R5PUl1LShl_0jbs2WtVuh",
    title: "Custom IR Remote",
    desc: "One remote that replaces all of my other IR remotes.",
    url: "custom-ir-remote.html"
},
{
    img_id: "1RBLhtbfivSItt145Z9VNTbav2oeejJVL",
    title: "Mamod TE1A CAD Model",
    desc: "This is the Mamod TE1A model steam traction engine designed in Fusion 360.",
    url: "te1a-model.html"
},
{
    img_id: "1Pq__1SW38OBO7ZSxJL90TpazIQ_wukHu",
    title: "3D Printed Transmission",
    desc: "A simple 2 speed transmission that has high, low, and neutral.",
    url: "transmission.html"
}
]


class RTProjectsGrid extends React.Component {
    render () {
        const e = React.createElement;
        var return_list = [];

        for (var i = 0; i < projects.length; i+=2) {
            // Build left column element
            var element1 = e("div", {className: "col-md"}, 
                e("div", {className: "card project-card primary-bg-opacity mx-auto"},
                    e("img", {src: "https://drive.google.com/uc?id=" + projects[i]["img_id"], className: "card-img-contain card-img-top"}),
                    e("div", {className: "card-body center-text"},
                        e("h5", {className: "card-title text-color"}, projects[i]["title"]),
                        e("p", {className: "card-text text-color"}, projects[i]["desc"]),
                        e("a", {href: "projects/" + projects[i]["url"], class: "btn btn-md btn-color"}, "View")
                    )
                ),
                e("row", {className: "row row-10vh"})
            )
            
            // Build right column element
            var element2;
            if (i+1 < projects.length) {

                element2 = e("div", {className: "col-md"},
                    e("div", {className: "card project-card primary-bg-opacity mx-auto"},
                        e("img", {src: "https://drive.google.com/uc?id=" + projects[i+1]["img_id"], className: "card-img-contain card-img-top"}),
                        e("div", {className: "card-body center-text"},
                            e("h5", {className: "card-title text-color"}, projects[i+1]["title"]),
                            e("p", {className: "card-text text-color"}, projects[i+1]["desc"]),
                            e("a", {href: "projects/" + projects[i+1]["url"], class: "btn btn-md btn-color"}, "View")
                        )
                    ),
                    e("row", {className: "row row-10vh"})
                )

            } else {
                element2 = e("div", {className: "col-md"})
            }
            
            // Add row to list of return elements
            return_list.push(
                e("row", {className: "row"},
                    element1, element2
                )
            )

        }

        return return_list;
    }
}

ReactDOM.render(React.createElement(RTProjectsGrid), document.getElementById("rtprojects-grid"));