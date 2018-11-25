import { Content } from "../models/content";

export const SHOW_CONTENT_PETS = "SHOW_CONTENT_PETS";
export const SHOW_CONTENT_SCHEDULE = "SHOW_CONTENT_SCHEDULE";
export const SHOW_CONTENT_VETS = "SHOW_CONTENT_VETS";
export const SHOW_CONTENT_VISIT = "SHOW_CONTENT_VISIT";

export function changeContent(content, eventId) {
  switch (content) {
    case Content.PETS:
      return { type: SHOW_CONTENT_PETS };
    case Content.SCHEDULE:
      return { type: SHOW_CONTENT_SCHEDULE };
    case Content.VETS:
      return { type: SHOW_CONTENT_VETS };
    case Content.VISIT_VIEW:
      return { type: SHOW_CONTENT_VISIT, eventId: eventId };
    default:
      return { type: SHOW_CONTENT_SCHEDULE };
  }
}