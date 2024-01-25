"use client";

import { useRef, useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
// import { createReactEditorJS } from "react-editor-js";
// import { EDITOR_JS_TOOLS } from "@/helpers/editorjs/tools";

export default function Editor() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const ref = useRef<EditorJS>();

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Table = (await import("@editorjs/table")).default;
    const Checklist = (await import("@editorjs/checklist")).default;
    const List = (await import("@editorjs/list")).default;
    const Quote = (await import("@editorjs/quote")).default;
    const Image = (await import("@editorjs/image")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          table: Table,
          checklist: Checklist,
          list: List,
          quote: Quote,
          image: Image,
        },
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log("Article data: ", outputData);
        alert(JSON.stringify(outputData));
      });
    }
  };

  return (
    <>
      <div id="editorjs" />
      <button onClick={save}>Save</button>
    </>
  );
}
