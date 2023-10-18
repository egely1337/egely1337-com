import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "mail.novareth.com",
    port: 465,
    secure: true,
    auth: {
        user: "egely1337@novareth.com",
        pass: "12345678"
    }
})

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    try{
        if(req.method !== "POST") return res.json({status: false});

        const {email, text} = req.body;
    
        if(!email || !text) return res.json({status: false, message: "Bir şey yanlış."});
    
        await transporter.sendMail({
            from: email,
            to: "contact@egely1337.com",
            subject: "A mail from Website",
            text: text
        });

        res.json({status: true});
    }
    catch(err) {
        return res.json({
            status: false,
            error: err
        });
    }

}