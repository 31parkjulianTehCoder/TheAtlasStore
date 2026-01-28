make.div("", { id: "navbar", styles: " height: 50px; background-color: lightgray " });
make.setTarget($("navbar"))
//navbar goes here
make.setTarget(document.body);
make.h1(Info.name, { id: "atlas-name"});
make.h3("By " + Info.creator, { id: "atlas-creator"});
make.p("Released on " + Info.releaseDate, { id: "atlas-releaseDate"});
make.iframe("", { id: "atlas-preview", src: Info.previewLink, styles: "height:400px; width:500px"});
make.div("", { id: "div-container", styles:" display: flex; justify-content: space-between; width: 550px;" });
make.setTarget($("div-container"));
make.button("Fullscreen", { id: "atlas-fullscreen"});
make.button("Github Page", { id: "atlas-github" });
make.button("View License", { id: "atlas-License" });
make.button("Go to Website", { id: "atlas-website" });
make.setTarget(document.body);
$("atlas-fullscreen").addEventListener("click", () => alert("hey"))
$("atlas-github").addEventListener("click", () => alert("hey"))
$("atlas-License").addEventListener("click", () => alert("hey"))
$("atlas-website").addEventListener("click", () => alert("hey"))
