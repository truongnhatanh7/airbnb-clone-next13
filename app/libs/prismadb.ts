import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

// Clean solution for using prisma client with next13
// Prevent hot reloading create many PrismaClient instances
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;