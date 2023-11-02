import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()
    if (!users) {
        return NextResponse.json({ error: 'No hay usuarios' }, { status: 400 });
    }
    await prisma.$disconnect();
    return NextResponse.json({ users }, { status: 200 })
}