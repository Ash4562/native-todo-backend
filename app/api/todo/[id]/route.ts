import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const PUT = (req: NextRequest) => {
    try {
        const id = req.url.split("/todo/")[1];

        // const result = await req.json()
        return NextResponse.json({
            message: "Todo update Success",
            // result
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}