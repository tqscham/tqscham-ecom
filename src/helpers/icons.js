import { 
    faAt,
    faMinus,
    faPlus,
    faTimes,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faAt,
        faMinus,
        faPlus,
        faTimes,
        faShoppingCart
    )
};

export default Icons;