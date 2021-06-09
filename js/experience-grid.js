let experience = [{
    img_id: "1Nqqbf8V_-N8G1QQvwFIT6CYC4enfMcRJ",
    title: "ATL-JDM Website",
    desc: "From 2020 - Present I have been doing basic website development for ATL-JDM.",
    url: "experience/atljdm.html"
},
{
    img_id: "1q0_X2nsR6JXypOSLH8fRteNvOyKcAqNa",
    title: "Achievement House Cyber Charter School Internship",
    desc: "From 2020 - 2021 I did 3D printing and software development at AHCCS",
    url: "experience/ahccs.html"
},
{
    img_id: "1e3iXZPM2H8GBlOrChgFQof7WCRa_7ccc",
    title: "Harvard CS50AI 2020",
    desc: 'This certification is from a free online course by Harvard called "Introduction to Artificial Intelligence with Python".',
    url: "experience/cs50-ai.html"
},
{
    img_id: "1N-ZGBst85ktMHOvinemDNm36LOYwdBFx",
    title: "Intro to Python",
    desc: "This certification was given to me by CodeHS through my high school.",
    url: "https://codehs.com/certifications/exam/nircR/view"
},
{
    img_id: "1YhAzg7iZWtsAsmuVkLHbLF6Yn0rAHb8F",
    title: "Intro to JavaScript",
    desc: "This certification was given to me by CodeHS through my high school.",
    url: "https://codehs.com/certifications/exam/sDysg/view"
}]


class RTExperienceGrid extends React.Component {
    render () {
        const e = React.createElement;
        var return_list = [];

        for (var i = 0; i < experience.length; i+=2) {
            // Build left column element
            var element1 = e("div", {className: "col-md"}, 
                e("div", {className: "card project-card primary-bg-opacity mx-auto"},
                    e("img", {src: "https://drive.google.com/uc?id=" + experience[i]["img_id"], className: "card-img-contain card-img-top"}),
                    e("div", {className: "card-body center-text"},
                        e("h5", {className: "card-title text-color"}, experience[i]["title"]),
                        e("p", {className: "card-text text-color"}, experience[i]["desc"]),
                        e("a", {href: experience[i]["url"], class: "btn btn-md btn-color"}, "View")
                    ),
                    e("row", {className: "row row-10vh"})
                )
            )
            
            // Build right column element
            var element2;
            if (i+1 < experience.length) {

                element2 = e("div", {className: "col-md"},
                    e("div", {className: "card project-card primary-bg-opacity mx-auto"},
                        e("img", {src: "https://drive.google.com/uc?id=" + experience[i+1]["img_id"], className: "card-img-contain card-img-top"}),
                        e("div", {className: "card-body center-text"},
                            e("h5", {className: "card-title text-color"}, experience[i+1]["title"]),
                            e("p", {className: "card-text text-color"}, experience[i+1]["desc"]),
                            e("a", {href: experience[i+1]["url"], class: "btn btn-md btn-color"}, "View")
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

ReactDOM.render(React.createElement(RTExperienceGrid), document.getElementById("rtexperience-grid"));