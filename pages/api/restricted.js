import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
    const session = await getServerSession(req, res, authOptions);
    // console.log(session)

    if (session) {
        res.json({
            content: "You are authenticated, thats why you're reading this"
        })
    } else {
        res.json({
            content: "You are not authenticated"
        })
    }

}