 import { NextApiRequest, NextApiResponse } from "next";


 export default function handler(
 	req: NextApiRequest,
 	res: NextApiResponse
 ) {
 	return res.json({
 		error: true,
 		message: "hello, world!"
 	})
 }