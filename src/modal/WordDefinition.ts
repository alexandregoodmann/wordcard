import { Arab } from "./Arab";

export class WordDefinition {
  headword;
  headword_full;
  wordclass;
  arabs: Array<Arab>;
  json: string;
}

export class WordDTO {
  headword: string;
  headword_full: string;
  wordclass: string;
}