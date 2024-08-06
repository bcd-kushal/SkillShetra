import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    const { email, password } = await req.json()

    const admin = await prisma.admins.create({
        data: {
            email, password
        },
    });
    
    return NextResponse.json({
        message: "Created",
        data: null
    }, {
        status: 200
    })
}