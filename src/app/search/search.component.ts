import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WordDefinition } from 'src/modal/WordDefinition';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  group: FormGroup;
  retorno: Array<WordDefinition> = [];

  constructor(
    private fb: FormBuilder,
    private dictionary: DictionaryService
  ) { }

  ngOnInit() {
    this.group = this.fb.group({
      word: [null, [Validators.required]]
    });
    this.retorno = this.dictionary.parse2WordDefinition(obj);
  }

  search() {
    let word = this.group.get('word').value;
    this.dictionary.findPons(word).subscribe(ret => {
      this.retorno = this.dictionary.parse2WordDefinition(obj);
    });
  }

}

export const obj = [
  {
    "lang": "de",
    "hits": [
      {
        "type": "entry",
        "opendict": false,
        "roms": [
          {
            "headword": "lesen",
            "headword_full": "lesen <span class=\"flexion\">&lt;liest, las, gelesen&gt;</span> <span class='phonetics'>[ˈle:zən]</span> <span class=\"wordclass\"><acronym title=\"verbo\">VERBO</acronym></span> <span class=\"verbclass\"><acronym title=\"verbo transitivo\">trans</acronym></span>",
            "wordclass": "Verbo transitivo",
            "arabs": [
              {
                "header": "1. lesen <span class=\"sense\">(Buch, Zeitung)</span>:",
                "translations": [
                  {
                    "source": "<strong class=\"headword\">lesen</strong>",
                    "target": "ler"
                  },
                  {
                    "source": "<span class=\"idiom_proverb\">die Schrift ist kaum zu <strong class=\"tilde\">lesen</strong></span>",
                    "target": "a letra é quase ilegível"
                  },
                  {
                    "source": "<span class=\"idiom_proverb\">die Messe <strong class=\"tilde\">lesen</strong></span>",
                    "target": "rezar a missa"
                  },
                  {
                    "source": "<span class=\"idiom_proverb\"><acronym title=\"jemandes\">jds</acronym> Gedanken <strong class=\"tilde\">lesen</strong></span>",
                    "target": "ler os pensamentos de alguém"
                  }
                ]
              },
              {
                "header": "2. lesen <span class=\"sense\">(ernten)</span>:",
                "translations": [
                  {
                    "source": "<strong class=\"headword\">lesen</strong>",
                    "target": "apanhar"
                  },
                  {
                    "source": "<strong class=\"headword\">lesen</strong>",
                    "target": "colher"
                  },
                  {
                    "source": "<span class=\"idiom_proverb\">Trauben <strong class=\"tilde\">lesen</strong></span>",
                    "target": "vindimar"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "entry",
        "opendict": false,
        "roms": [
          {
            "headword": "Lese",
            "headword_full": "Lese <span class=\"flexion\">&lt;-n&gt;</span> <span class='phonetics'>[ˈle:zə]</span> <span class=\"wordclass\"><acronym title=\"substantivo\">SUBST</acronym></span> <span class=\"genus\"><acronym title=\"feminino\">f</acronym></span>",
            "wordclass": "Substantivo",
            "arabs": [
              {
                "header": "",
                "translations": [
                  {
                    "source": "<strong class=\"headword\">Lese</strong>",
                    "target": "apanha <span class=\"genus\"><acronym title=\"feminino\">f</acronym></span>"
                  },
                  {
                    "source": "<strong class=\"headword\">Lese</strong>",
                    "target": "colheita <span class=\"genus\"><acronym title=\"feminino\">f</acronym></span>"
                  },
                  {
                    "source": "<strong class=\"headword\">Lese</strong> <span class=\"sense\">(Weinlese)</span>",
                    "target": "vindima <span class=\"genus\"><acronym title=\"feminino\">f</acronym></span>"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]