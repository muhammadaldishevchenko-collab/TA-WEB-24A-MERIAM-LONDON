import { PrismaClient } from "@prisma/client";

// PrismaClient singleton to avoid exhausting database connections in dev.
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
