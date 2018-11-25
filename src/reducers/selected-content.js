import { SHOW_CONTENT_PETS, SHOW_CONTENT_SCHEDULE, SHOW_CONTENT_VETS, SHOW_CONTENT_VISIT } from "../actions/navigation";
import { Content } from "../models/content";

export default function selectedContent(state = Content.SCHEDULE, action) {
  switch (action.type) {
    case SHOW_CONTENT_SCHEDULE:
      return Content.SCHEDULE;
    case SHOW_CONTENT_VETS:
      return Content.VETS;
    case SHOW_CONTENT_PETS:
      return Content.PETS;
    case SHOW_CONTENT_VISIT:
      return Content.VISIT_VIEW;
    default:
      return state;
  }
}