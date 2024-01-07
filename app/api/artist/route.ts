import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({"lele": "lelel"}, {status: 200})
}