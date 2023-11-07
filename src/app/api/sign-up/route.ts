// TODO: save the password encrypted using bcrypt or similar
// TODO: save the email in lowercase to avoid duplicates
// TODO: validate with a regex that the email is valid (optional)
// TODO: validate that the password is strong enough (optional)
// TODO: integrate NextAuth.js to handle the authentication with google, github, etc. (optional)



import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

export async function POST(req: NextRequest) {
    const prisma = new PrismaClient();
    const { name, email, password } = await req.json();

    //Validate that we receive the correct data to create a user
    if (!name || !email || !password) {
        return NextResponse.json({ error: 'Faltan datos para crear el usuario' }, { status: 400 });
    }

    //Validate that the user doesn't exist already
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    //If the user exists, return an error
    if (user) {
        return NextResponse.json({ error: 'El usuario ya existe' }, { status: 400 });
    }

    //Create the user
    const newUser = await prisma.user.create({
        data: {
            id: v4(),
            name: name,
            email: email,
            password: password
        }
    })

    //Close Prisma connection
    await prisma.$disconnect();

    //Return the new user
    return NextResponse.json({ newUser }, { status: 201 })
}



