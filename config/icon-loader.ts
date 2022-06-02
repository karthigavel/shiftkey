import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars,
  faChevronDown,
  faChevronUp,
  faCircle,
  faHouse,
  faPaperPlane,
  faPlus,
  faUsers,
  faUserPlus,
  faX
} from '@fortawesome/free-solid-svg-icons';

export const loadIcons = () => {
  library.add(
    faBars,
    faChevronDown,
    faChevronUp,
    faCircle,
    faHouse,
    faPaperPlane,
    faPlus,
    faUsers,
    faUserPlus,
    faX
  );
};
