import { 
    faAt,
    faMinus,
    faPlus,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faAt,
        faMinus,
        faPlus,
        faTimes
    )
};

export default Icons;