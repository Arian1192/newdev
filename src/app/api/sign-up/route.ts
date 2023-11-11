// TODO: save the password encrypted using bcrypt or similar
// TODO: save the email in lowercase to avoid duplicates
// TODO: validate with a regex that the email is valid (optional)
// TODO: validate that the password is strong enough (optional)
// TODO: integrate NextAuth.js to handle the authentication with google, github, etc. (optional)



import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import { passwordToSalt } from '@/app/_utils/passwordToSalt';
import { createJsonWebToken } from '@/app/_utils/createJsonWebToken';
import { create } from 'domain';

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    const body = await request.json();
    const { name, email, password } = body.data;
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

    const passwordHash = await passwordToSalt(password);

    //Create the user
    const newUser = await prisma.user.create({
        data: {
            id: v4(),
            name: name,
            email: email,
            password: passwordHash
        }
    })

    const token = await createJsonWebToken({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt,
        updatetAt: newUser.updatedAt,
        deletedAt: newUser.deletedAt
    })

    //Close Prisma connection
    await prisma.$disconnect();

    //Return the new user
    return NextResponse.json(token, { status: 201 })

}



