import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<User | null>;
}
