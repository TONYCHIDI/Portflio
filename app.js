const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const services = [imgUrl = ["web-development-bg.jpeg", "web-design-bg.jpeg", "graphic-design-bgd.jpeg", "photoshop-bg.jpeg", "digital-marketing-bgd.jpeg","24-7-bgd.jpeg"],serviceTitle = ["Web Development", "Web Design & Planning", "Graphic Designs", "Adobe Photoshop", "Digital Marketing", "24/7"], serviceContent = ["Build with the world's most intuitive hub. NaccyWorld Technologies is a creative web development hub engrossed on crafting thoughtfully created online experiences.", "The transformation of your vision into a design-driven experience built to last is guaranteed. Organisations and cultural institutions are helped to connect with their target audiences via user-focused designs, purposeful resources and technology that is sustainable.", "We create brands that move people to action. NaccyWorld Technologies pride in the protection and building of company reputation to attract new clients and grow any business specialising in communications for the creative, cultural and innovation industries.", "Build and manage your brand from one place. Create an attractive profile, flyers, business cards, and other brand advertising contents.", "Grow your online presence, boost traffic and increase engagement with built-in social media tools like facebook ads, google ads, email marketing and other social posts.", "Our services are available 24 hours every 7 days of the week. Contact us for an urgent attention and satisfaction." ]];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/services", (req, res) => {
    res.render("services");
});

app.get("/services/:serviceName", (req, res) => {
    for (let i = 0; i < services[0].length; i++) {
        const requiredService = _.lowerCase(req.params.serviceName);
        const titleService = _.lowerCase(serviceTitle[i]);

        if (titleService === requiredService) {
            res.render("service", {title: serviceTitle[i], content: serviceContent[i], imglink: imgUrl[i]});
        };
    };
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/qualifications", (req, res) => {
    res.render("qualifications");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(process.env.PORT || port, () => {
    console.log("Server started on port " + port);
});
