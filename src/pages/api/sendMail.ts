import { sendContactMail } from "@/util/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    try{
        if(req.method !== "POST") return res.json({status: false});

        const {email, text} = req.body;
    
        if(!email || !text) return res.json({status: false, message: "Bir şey yanlış."});
    
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