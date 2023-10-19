import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "mail.novareth.com",
    port: 465,
    secure: true,
    auth: {
        user: "egely1337@novareth.com",
        pass: process.env.PASS
    }
})

async function sendContactMail(email: string, text: string) {
    try {
        await transporter.sendMail({
            from: email,
            to: "contact@egely1337.com",
            subject: "Contact from egely1337.com",
            text: text,
        })
    } catch(err) {
        throw err;
    } 
} 

export {
    sendContactMail
}