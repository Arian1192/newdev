import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
export async function GET(req: NextRequest, params: any) {
    const { id } = params.params
    if (!id) {
        return NextResponse.json({ error: 'No hay id' }, { status: 400 });
    }
    try {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
            // We can include the post of the user like populate in mongoose
            // include: {
            //     posts: true
            // }, 
            where: {
                id: id
            }
        })
        if (!user) {
            return NextResponse.json({ error: 'No hay usuario' }, { status: 400 });
        }
        await prisma.$disconnect();
        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}