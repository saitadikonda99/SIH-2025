import { NextRequest, NextResponse } from "next/server";
import { queryOpenRouter } from "@/app/lib/openRouter";


export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();
        
        if (!message || typeof message !== 'string') {
            return NextResponse.json({ error: "Message is required and must be a string" }, { status: 400 });
        }

        const response = await queryOpenRouter(message);
        console.log("Response from OpenRouter:", response);
        
        if (response.error) {
            return NextResponse.json(response, { status: 400 });
        }
        
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error in POST /api/chat:", error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}