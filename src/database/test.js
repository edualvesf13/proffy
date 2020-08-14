const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) => {
    // insert data

    proffyValue = {
        name: "Eduardo Ferreira",
        avatar: "https://avatars0.githubusercontent.com/u/41430811?s=460&u=ab454e4846e553b0eb1706efe2f4ac7da0cbc9aa&v=4",
        whatsapp: "888888888",
        bio:"Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem num gosta di mé, boa gentis num é."
    }

    classValue = {
        subject: "Quimica",
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})


} )