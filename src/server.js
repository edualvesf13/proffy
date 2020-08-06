const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "96589-6520", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Eduardo Ferreira", 
        avatar: "https://avatars0.githubusercontent.com/u/41430811?s=460&u=ab454e4846e553b0eb1706efe2f4ac7da0cbc9aa&v=4", 
        whatsapp: "99732-3846", 
        bio: "Instrutor de tecnologia em cursos profissionalizantes no Rio de Janeiro com mais de 8 anos de experiência. Focado em aprender coisas novas e aumentar o meu conhecimento. Mergulhou de cabeça no mundo do desenvolvimento web, primeiramente, começou a aprender HTML5/CSS3 e atualmente, está se aprimorando na stack Javascript.", 
        subject: "Desenvolvimento web", 
        cost:"11", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Carol DivaLoper", 
        avatar: "https://avatars0.githubusercontent.com/u/28942335?s=460&u=ecec0891937159f1ed7063dea9b5cc843eea4c5a&v=4", 
        whatsapp: "99732-3846", 
        bio: "Front End developer, speaker & design system cheerleader Open source fan. Crazy coffee lady.", 
        subject: "Desenvolvimento web", 
        cost:"110", 
        weekday: [1], 
        time_from: [7] 
    }
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server.use(express.static("public"))


server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/study", (req, res) => {
    return res.render("study.html", { proffys })
})

server.get("/give-classes", (req, res) => {
    return res.render("give-classes.html")
})


server.listen(5500)