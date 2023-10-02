import { NextResponse, NextRequest } from "next/server"

export { NextRequest, NextResponse } from "next/server"
export const GET = (req: NextRequest) => {
    try {
        // const result = await req.json
        return NextResponse.json({
            message: "Todo Fetch Success"
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}
export const POST = async (req: NextRequest) => {
    try {
        const result = await req.json()
        return NextResponse.json({
            message: "Todo Fetch Success",
            result
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}
export const DELETE = (req: NextRequest) => {
    try {
        const id = req.url.split("/todo/")[1];

        // const result = await req.json()
        return NextResponse.json({
            message: `Todo update Success with id:${id}`,
            // result
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}