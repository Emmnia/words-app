let wordsJson = `[
  {
    "id": "16334",
    "english": "cat",
    "transcription": "[cat]",
    "russian": "кошка",
    "tags": "animal",
    "tags_json": "[animal]",
    "boolean": "false"
  },
  {
    "id": "16335",
    "english": "dad",
    "transcription": "[dæd]",
    "russian": "папа",
    "tags": "general",
    "tags_json": "[general]",
    "boolean": "false"
  },
  {
    "id": "16365",
    "english": "flower",
    "transcription": "[ˈflaʊər]",
    "russian": "цветок",
    "tags": "nature",
    "tags_json": "[nature]",
    "boolean": "false"
  },
  {
    "id": "16367",
    "english": "lamb",
    "transcription": "[læm]",
    "russian": "ягненок",
    "tags": "animal",
    "tags_json": "[animal]",
    "boolean": "false"
  },
  {
    "id": "16372",
    "english": "education",
    "transcription": "|edʒʊˈkeɪʃ(ə)n|",
    "russian": "образование",
    "tags": "education",
    "tags_json": "[education]",
    "boolean": "false"
  },
  {
    "id": "16376",
    "english": "opacity",
    "transcription": "[oʊˈpæsɪti]",
    "russian": "непрозрачность",
    "tags": "general",
    "tags_json": "[general]",
    "boolean": "false"
  },
  {
    "id": "16377",
    "english": "certainty",
    "transcription": "[ˈsɜːt(ə)ntɪ]",
    "russian": "уверенность",
    "tags": "general",
    "tags_json": "[general]",
    "boolean": "false"
  },
  {
    "id": "16378",
    "english": "open-field",
    "transcription": "[ˈəʊpnˈfiːld]",
    "russian": "неогороженный",
    "tags": "general",
    "tags_json": "[general]",
    "boolean": "false"
  },
  {
    "id": "16380",
    "english": "opera-glass",
    "transcription": "[ˈɒpərəˌɡlɑːs]",
    "russian": "театральный бинокль",
    "tags": "general",
    "tags_json": "[general]",
    "boolean": "false"
  },
  {
    "id": "16381",
    "english": "giraffe",
    "transcription": "[dʒəˈræf]",
    "russian": "жираф",
    "tags": "animal",
    "tags_json": "[animal]",
    "boolean": "false"
  },
  {
    "id": "17159",
    "english": "yellow",
    "transcription": "[ˈjeləʊ]",
    "russian": "жёлтый",
    "tags": "цвета",
    "tags_json": "[general]"
  },
  {
    "id": "17160",
    "english": "hedgehog",
    "transcription": "[ˈheʤhɒg]",
    "russian": "ёж",
    "tags": "животные",
    "tags_json": "[animal]"
  },
  {
    "id": "17161",
    "english": "dandelion",
    "transcription": "[ˈdændɪlaɪən]",
    "russian": "одуванчик",
    "tags": "растения",
    "tags_json": "[nature]"
  },
  {
    "id": "17165",
    "english": "inspiration",
    "transcription": "[ɪnspɪˈreɪʃn]",
    "russian": "вдохновение",
    "tags": "noun",
    "tags_json": "[general]"
  },
  {
    "id": "17166",
    "english": "hello",
    "transcription": "[həˈləʊ]",
    "russian": "привет",
    "tags": "",
    "tags_json": "[general]"
  },
  {
    "id": "17168",
    "english": "airplane",
    "transcription": "[ˈerpleɪn]",
    "russian": "самолет",
    "tags": "",
    "tags_json": "[transport]"
  },
  {
    "id": "17169",
    "english": "program",
    "transcription": "[ˈprəʊɡræm]",
    "russian": "программа",
    "tags": "",
    "tags_json": "[education]"
  },
  {
    "id": "17170",
    "english": "justice",
    "transcription": "[ˈdʒʌstɪs]",
    "russian": "справедливость",
    "tags": "",
    "tags_json": "[general]"
  },
  {
    "id": "17171",
    "english": "variable",
    "transcription": "[ˈverɪəbl]",
    "russian": "переменная",
    "tags": "",
    "tags_json": "[it]"
  },
  {
    "id": "17172",
    "english": "jeans",
    "transcription": "[dʒiːnz]",
    "russian": "джинсы",
    "tags": "одежда",
    "tags_json": "[general]"
  },
  {
    "id": "17173",
    "english": "niece",
    "transcription": "[niːs]",
    "russian": "племянница",
    "tags": "семья",
    "tags_json": "[family]"
  },
  {
    "id": "17174",
    "english": "day",
    "transcription": "[deɪ]",
    "russian": "день",
    "tags": "время",
    "tags_json": "[general]"
  }
]`;

export const words = JSON.parse(wordsJson);