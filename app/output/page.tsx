import EditorOutput from "@/components/output/EditorOutput";

export default function Output() {
  return (
    <EditorOutput
      content={{
        time: 1706104772701,
        blocks: [
          {
            type: "header",
            data: {
              text: "Заголовок 1 (все стили)",
              level: 1,
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 2",
              level: 2,
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 3",
              level: 3,
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 4",
              level: 4,
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 5",
              level: 5,
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 6",
              level: 6,
            },
            tunes: [],
          },
          {
            type: "paragraph",
            data: {
              text: "Paragraf 01 Текст <b>предисловие</b>",
            },
            tunes: {
              textVariant: "",
            },
          },
          {
            type: "paragraph",
            data: {
              text: 'Paragraf 02<i> Текст-рыба</i> <a href="http://test/1" target="_blank" rel="noreferrer noopener">обычный</a>',
            },
            tunes: {
              textVariant: "details",
            },
          },
          {
            type: "list",
            data: {
              style: "unordered",
              items: ["ненумерованый 1", "ненумерованый 2"],
            },
            tunes: [],
          },
          {
            type: "list",
            data: {
              style: "ordered",
              items: ["нумерованый 1", "нумерованый 2"],
            },
            tunes: [],
          },
          {
            type: "check_list",
            data: {
              items: [
                {
                  text: "Paragraf 02 Чек-лист из нескольких пунктов",
                  checked: false,
                },
                {
                  text: "Paragraf 02 Чек-лист из нескольких пунктов 2",
                  checked: true,
                },
              ],
            },
            tunes: [],
          },
          {
            type: "paragraph",
            data: {
              text: "Accent Текст-рыба",
            },
            tunes: {
              textVariant: "call-out",
            },
          },
          {
            type: "paragraph",
            data: {
              text: "Мини-цитата",
            },
            tunes: {
              textVariant: "citation",
            },
          },
          {
            type: "delimiter",
            data: [],
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 1 (примеры блоков)",
              level: 2,
            },
            tunes: [],
          },
          {
            type: "paragraph",
            data: {
              text: "Paragraf 01 Текст предисловие: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует.",
            },
            tunes: {
              textVariant: "",
            },
          },
          {
            type: "header",
            data: {
              text: "Заголовок 3",
              level: 3,
            },
            tunes: [],
          },
          {
            type: "paragraph",
            data: {
              text: "Paragraf 02 Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует.",
            },
            tunes: {
              textVariant: "details",
            },
          },
          {
            type: "header",
            data: {
              text: "Заголовок 4",
              level: 4,
            },
            tunes: [],
          },
          {
            type: "list",
            data: {
              style: "ordered",
              items: [
                "Paragraf 02 Список из нескольких пунктов нумерованный;",
                "Paragraf 02 Список из нескольких пунктов нумерованный;",
                "Paragraf 02 Список из нескольких пунктов нумерованный;",
                "Paragraf 02 Список из нескольких пунктов нумерованный;",
              ],
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 4",
              level: 4,
            },
            tunes: [],
          },
          {
            type: "list",
            data: {
              style: "unordered",
              items: [
                "Paragraf 02 Список из нескольких пунктов ненумерованный;",
                "Paragraf 02 Список из нескольких пунктов ненумерованный;",
                "Paragraf 02 Список из нескольких пунктов ненумерованный;",
                "Paragraf 02 Список из нескольких пунктов ненумерованный;",
              ],
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 4",
              level: 4,
            },
            tunes: [],
          },
          {
            type: "check_list",
            data: {
              items: [
                {
                  text: "Paragraf 02 Чек-лист из нескольких пунктов",
                  checked: false,
                },
                {
                  text: "Paragraf 02 Чек-лист из нескольких пунктов",
                  checked: false,
                },
                {
                  text: "Paragraf 02 Чек-лист из нескольких пунктов",
                  checked: true,
                },
              ],
            },
            tunes: [],
          },
          {
            type: "delimiter",
            data: [],
            tunes: [],
          },
          {
            type: "paragraph",
            data: {
              text: "Paragraf 02 Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует. Paragraf Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует. ",
            },
            tunes: {
              textVariant: "details",
            },
          },
          {
            type: "quote",
            data: {
              text: "Paragraf 01 Текст-рыба цитата: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует.",
              caption: "Заголовок 2 – цитата",
              alignment: "left",
            },
            tunes: [],
          },
          {
            type: "paragraph",
            data: {
              text: "Paragraf Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует. Paragraf Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно. Если бумага свободно вытаскивается, значит, профиль прижат не плотно. Холодный воздух проникает в комнату через щель и из окна дует. ",
            },
            tunes: {
              textVariant: "details",
            },
          },
          {
            type: "image",
            data: {
              file: {
                id: 54133,
                url: "/upload/hooli.editor/imgs/0c8/y8o5qj4hrz3qd2h6mp1z0q59pwk7t2v7.jpeg",
                extension: "jpeg",
              },
              caption:
                "Paragraf big Текст описание: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить.",
              withBorder: false,
              stretched: true,
              withBackground: false,
            },
            tunes: [],
          },
          {
            type: "image",
            data: {
              file: {
                id: 54134,
                url: "/upload/hooli.editor/imgs/0c8/y8o5qj4hrz3qd2h6mp1z0q59pwk7t2v7.jpeg",
                extension: "jpeg",
              },
              caption:
                "Paragraf big Текст описание: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить.",
              withBorder: false,
              stretched: false,
              withBackground: false,
            },
            tunes: [],
          },
          {
            type: "image_gallery",
            data: {
              files: [
                {
                  id: 54138,
                  url: "/upload/hooli.editor/imgs/0c8/y8o5qj4hrz3qd2h6mp1z0q59pwk7t2v7.jpeg",
                  extension: "jpeg",
                },
                {
                  id: 54139,
                  url: "/upload/hooli.editor/imgs/0c8/y8o5qj4hrz3qd2h6mp1z0q59pwk7t2v7.jpeg",
                  extension: "jpeg",
                },
                {
                  id: 54140,
                  url: "/upload/hooli.editor/imgs/0c8/y8o5qj4hrz3qd2h6mp1z0q59pwk7t2v7.jpeg",
                  extension: "jpeg",
                },
              ],
              caption:
                "Paragraf big Текст описание: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить.",
              style: "fit",
            },
            tunes: [],
          },
          {
            type: "image",
            data: {
              file: {
                id: 54141,
                url: "/upload/hooli.editor/imgs/b08/adsozt02hi0y8lphjijmpr97fkhblxoy.png",
                extension: "png",
              },
              caption:
                "Paragraf big Текст описание: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить.",
              withBorder: true,
              stretched: false,
              withBackground: true,
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Заголовок 3",
              level: 3,
            },
            tunes: [],
          },
          {
            type: "table",
            data: {
              withHeadings: true,
              content: [
                ["Заголовок 6", "Заголовок 6", "тоже заголовок"],
                [
                  "Paragraf Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно.",
                  "Paragraf Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме.",
                  "11111",
                ],
                [
                  "Paragraf Текст-рыба об",
                  "Paragraf Текст-рыба обычный: Самая частая причина сквозняков – плохое прижатие створки к раме. Это можно проверить. Вставьте между рамой и створкой лист бумаги и закройте окно.",
                  "2222222",
                ],
              ],
            },
            tunes: [],
          },
          {
            type: "table",
            data: {
              withHeadings: false,
              content: [
                [
                  "Paragraf Текст-рыба обычный: Самая частая причина&nbsp;",
                  "Paragraf Текст-рыба обычный: Самая частая причина&nbsp;",
                ],
                [
                  "Paragraf Текст-рыба обычный: Самая частая причина&nbsp;",
                  "Paragraf Текст-рыба обычный: Самая частая причина&nbsp;",
                ],
              ],
            },
            tunes: [],
          },
          {
            type: "header",
            data: {
              text: "Галерея Заголовок 3",
              level: 3,
            },
            tunes: [],
          },
          {
            type: "image_gallery",
            data: {
              files: [
                {
                  id: 54142,
                  url: "/upload/hooli.editor/imgs/0c8/y8o5qj4hrz3qd2h6mp1z0q59pwk7t2v7.jpeg",
                  extension: "jpeg",
                },
                {
                  id: 54143,
                  url: "/upload/iblock/c6e/mkgsh41fen008nv79o1kmf4vt4r9uck3.png",
                  extension: "png",
                },
                {
                  id: 54144,
                  url: "/upload/hooli.editor/imgs/a1b/o4kvtgy1ubfilmtingdtnxsjwpmsocim.png",
                  extension: "png",
                },
                {
                  id: 54145,
                  url: "/upload/hooli.editor/imgs/a1b/o4kvtgy1ubfilmtingdtnxsjwpmsocim.png",
                  extension: "png",
                },
              ],
              caption: "",
              style: "slider",
            },
            tunes: [],
          },
          {
            type: "warning",
            data: {
              title: "Внимание!",
              message: "<mark>Спасибо за </mark>внимание!",
            },
            tunes: [],
          },
          {
            type: "attaches",
            data: {
              file: {
                id: 54148,
                url: "/upload/hooli.editor/imgs/074/vuosvgazccmgjmrw2y42m32v6hjinhr9.pdf",
                extension: "pdf",
              },
              title: "Пример приложения",
            },
            tunes: [],
          },
        ],
        version: "2.28.2",
      }}
    />
  );
}
