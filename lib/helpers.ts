import prisma from "@/prisma";
import {NextResponse} from "next/server";

export const connectToDb = async () => {
    try {
        await prisma.$connect();
        console.log("Database connection successful");
    } catch (err: any) {
        throw new Error(`Database connection failed: ${err.message}`);
    }
};


export const generateSuccessMessage = (data: any, status: number) => {
    return NextResponse.json({message: "Success", ...data}, {status, statusText: "OK"});
};

export const generateErrorMessage = ()=>{
    return NextResponse.json({message: "Error", ...data}, {status, statusText: "ERROR"});
}