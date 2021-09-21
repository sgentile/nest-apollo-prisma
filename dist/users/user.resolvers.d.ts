import { UserService } from './user.service';
export declare class UserResolvers {
    private usersService;
    constructor(usersService: UserService);
    getUser(id: string): Promise<import(".prisma/client").User>;
    resolveReference(reference: {
        __typename: string;
        id: string;
    }): Promise<import(".prisma/client").User>;
}
