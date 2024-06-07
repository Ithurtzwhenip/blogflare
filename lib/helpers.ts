import prisma from "@/prisma";

export const connectToDb = async () => {
    try {
        await prisma.$connect();
        console.log("Database connection successful");
    } catch (err: any) {
        throw new Error(`Database connection failed: ${err.message}`);
    }
};
