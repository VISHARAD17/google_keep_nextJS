import { userMutations } from "./user/userMutations";
import { tagMutaions } from "./tags/tagMutations";
import { noteMutations } from "./notes/noteMutations";

export const mutations = {
    Mutation: {
        ...userMutations,
        ...tagMutaions,
        ...noteMutations
    }
}
