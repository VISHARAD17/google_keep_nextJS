import { noteQueries } from "./notes/noteQuerie";
import { tagQueries } from "./tags/tagQuries";
import { userQueries } from "./user/userQueries";

export const queries = {
    Query: {
       ...noteQueries,
       ...tagQueries,
       ...userQueries 
    },

}
