import { PrismaClient, User } from "@prisma/client";
import { NextResponse } from "next/server";
import { type } from "os";
 
const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json()
    if (!body) {
        return NextResponse.json({ message: 'No user in body'}, {status: 400})
    }
    const newUser = await prisma.user.create({
        data: body
    })
    return NextResponse.json({}, {status: 201})
}