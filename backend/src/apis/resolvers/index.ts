import { queries } from "./queries";
import { mutations } from "./mutaions";

const myResolver = {
    ...queries,
    ...mutations   
};

export default myResolver;

