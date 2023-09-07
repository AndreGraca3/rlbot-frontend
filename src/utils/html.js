import { MAX_ITEMS_PER_PAGE } from "@/config";

export function getRandomWidth(minWidth = 10, maxWidth = 70) {
  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  return randomWidth + "%";
}

export function getLimit(page) {
  return page ? page * MAX_ITEMS_PER_PAGE : MAX_ITEMS_PER_PAGE;
}

export function hasMorePages(page, totalItems) {
  return page * MAX_ITEMS_PER_PAGE < totalItems;
}
