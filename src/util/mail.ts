import nodemailer from 'nodemailer';

const DELIVERY_EMAIL = "contact@egely.me";

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
            from: "egely1337@novareth.com",
            to: DELIVERY_EMAIL,
            subject: `Contact from ${email}`,
            text: text,
        })
    } catch(err) {
        throw err;
    }  
} 

export {
    sendContactMail
}