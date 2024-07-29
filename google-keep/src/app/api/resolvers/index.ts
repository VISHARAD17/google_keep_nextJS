import { queries } from "./queries";
import { mutations } from "./mutations";

const myResolver = {
    ...queries,
    ...mutations,
};

export default myResolver;
