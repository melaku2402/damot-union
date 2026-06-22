import * as _prisma from "@prisma/client";

// Defensive import: some environments may expose the client differently.
const PrismaClient: any =
  (_prisma as any).PrismaClient || (_prisma as any).default || _prisma;

declare global {
  // keep a loose type to avoid hard coupling in this utility
  var prisma: any | undefined;
}

export const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
