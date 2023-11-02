import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
export async function DELETE(req: NextRequest, params: any) {
    const { id } = params.params
    if (!id) {
        return NextResponse.json({ error: 'No hay id' }, { status: 400 });
    }
    try {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!user) {
            return NextResponse.json({ error: 'No hay usuario' }, { status: 400 });
        }
        await prisma.user.delete({
            where: {
                id: id
            }
        })
        await prisma.$disconnect();
        return NextResponse.json({ message: 'User eliminado correctamente' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}