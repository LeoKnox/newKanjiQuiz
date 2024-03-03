import { createContext } from "react";

AllContext = createContext([
  {
    id: 92,
    kanji: "丸",
    stroke: 3,
    meaning: "circle",
    on: "gan",
    kun: "maru",
  },
  {
    id: 93,
    kanji: "交",
    stroke: 6,
    meaning: "intersect",
    on: "kō",
    kun: "maji-waru",
  },
  {
    id: 94,
    kanji: "光",
    stroke: 6,
    meaning: "light",
    on: "kō",
    kun: "hikari",
  },
  {
    id: 95,
    kanji: "角",
    stroke: 7,
    meaning: "corner, horn",
    on: "kaku",
    kun: "kado, tsuno, sumi",
  },
  {
    id: 96,
    kanji: "計",
    stroke: 9,
    meaning: "measure",
    on: "kei",
    kun: "haka-ru",
  },
  {
    id: 97,
    kanji: "直",
    stroke: 8,
    meaning: "straight, fix",
    on: "choku, jiki",
    kun: "tada-chi, nao-su",
  },
  {
    id: 98,
    kanji: "線",
    stroke: 15,
    meaning: "line",
    on: "sen",
    kun: "suji",
  },
  { id: 99, kanji: "矢", stroke: 5, meaning: "arrow", on: "shi", kun: "ya" },
  {
    id: 100,
    kanji: "弱",
    stroke: 10,
    meaning: "weak",
    on: "jaku",
    kun: "yowa-i",
  },
  {
    id: 101,
    kanji: "強",
    stroke: 11,
    meaning: "strong",
    on: "kyō",
    kun: "tsuyo-i",
  },
  {
    id: 102,
    kanji: "高",
    stroke: 10,
    meaning: "high",
    on: "kō",
    kun: "taka-i",
  },
  {
    id: 103,
    kanji: "同",
    stroke: 6,
    meaning: "same",
    on: "dō",
    kun: "ona-ji",
  },
]);

export const findPos = (o) => {
  AllContext[0]["kanji"] = o;
};

export default AllContext;
