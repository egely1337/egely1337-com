import { sendContactMail } from "@/util/mail";
import { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    try{
        if(req.method !== "POST") return res.json({status: false});

        const {email, text, captcha} = req.body;
    
        if(!email || !text) return res.json({status: false, message: "Something gone wrong."});
        if(!captcha) return res.json({status: false, message: "ReCaptcha token is bozuk amk."})

        const json = await axios.post("https://www.google.com/recaptcha/api/siteverify", {
            secret: "6Lc2N7soAAAAAL8k8DjPdIbivtJmmybzUe6IHnPR",
            response: captcha,
        }).then(res => res.data);

        //@ts-ignore
        if(!json.success) return res.json({status: false, message: "captcha is invalid."});

        await sendContactMail(email, text);

        res.json({status: true});
    }
    catch(err) {
        return res.json({
            status: false,
            error: err
        });
    }

}