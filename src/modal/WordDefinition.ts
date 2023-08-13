import { Arab } from "./Arab";

export class WordDefinition {
  headword;
  headword_full;
  wordclass;
  arabs?: Array<Arab>;
  json: string;
}
