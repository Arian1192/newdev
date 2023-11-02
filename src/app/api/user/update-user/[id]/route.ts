import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function PATCH(req: NextRequest, params: any) {

    //Obtain the id from the request
    const { id } = params.params;

    //if the id is not present, return an error
    if (!id) {
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
    }

    //Try to update the user
    try {
        const prisma = new PrismaClient();
        //We use a transaction to ensure that the user exists before updating it
        const updatedUser = await prisma.$transaction(async (prisma) => {
            //Obtain the user
            const user = await prisma.user.findUnique({
                where: {
                    id: id, // Asegúrate de que id sea una cadena (string)
                },
            });

            //if the user is not present, return an error
            if (!user) {
                throw new Error('User not found');
            }

            //Obtain the body of the request
            const body = await req.json();

            //Obtain the data from the body
            const { name, email, password } = body;

            //Update the user
            const updatedUser = await prisma.user.update({
                where: {
                    id: id, // Asegúrate de que id sea una cadena (string)
                },
                data: {
                    id: id,
                    email: email || user.email,
                    name: name || user.name,
                    password: password || user.password,
                    createdAt: user.createdAt,
                    updatedAt: new Date(),
                    deletedAt: user.deletedAt,
                },
            });

            //Return the updated user
            return updatedUser;
        });

        //Close Prisma connection
        await prisma.$disconnect();

        //Return the updated user and a 200 status
        return NextResponse.json({ updatedUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }
}
