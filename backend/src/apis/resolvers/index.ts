
import { PrismaClient } from "@prisma/client";
import { queries } from "./queries";
import { mutations } from "./mutaions";
const prisma = new PrismaClient();

const myResolver = {
    ...queries,
    ...mutations   
};

export default myResolver;

