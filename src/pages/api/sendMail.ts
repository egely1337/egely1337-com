import { sendContactMail } from "@/util/mail";
import { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    try{
        if(req.method !== "POST") return res.json({status: false});

        const {email, text, captcha} = req.body;
    
        if(!email || !text) return res.json({status: false, message: "Something gone wrong."});
        if(!captcha) return res.json({status: false, message: "Verify captcha."})

        const json = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
                secret: "6LerPbsoAAAAAKgWH0zA6sInY_nXUC9aZa0g2doI",
                response: captcha
            }
        }).then(res => res.data);
        
        //@ts-ignore
        if(!json.success) return res.json({status: false, message: "Captcha is invalid."});

        await sendContactMail(email, text);

        res.json({status: true, message: "Successfully sent the E-mail."});
    }
    catch(err) {
        return res.json({
            status: false,
            error: err,
            message: "Something gone wrong."
        });
    }

}