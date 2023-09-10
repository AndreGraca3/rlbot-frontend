import { SCROLL_MAX_ITEMS_PER_PAGE } from "@/config";

export function getRandomWidth(minWidth = 10, maxWidth = 70) {
  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  return randomWidth + "%";
}

export function getLimit(page) {
  return page ? page * SCROLL_MAX_ITEMS_PER_PAGE : SCROLL_MAX_ITEMS_PER_PAGE;
}

export function hasMorePages(page, totalItems) {
  return page * SCROLL_MAX_ITEMS_PER_PAGE < totalItems;
}
