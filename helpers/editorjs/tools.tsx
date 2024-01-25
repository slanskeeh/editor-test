// import Table from "@editorjs/table";
// import Warning from "@editorjs/warning";
// import Code from "@editorjs/code";
// import Raw from "@editorjs/raw";
// import Marker from "@editorjs/marker";
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

const url = "http://localhost:3000/editor/";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  header: Header,
  list: List,
  linkTool: LinkTool,
  // image: {
  //   class: Image,
  //   config: {
  //     uploader: {
  //       uploadByFile(file: any) {
  //         let formData = new FormData();
  //         formData.append("images", file);
  //       },
  //     },
  //   },
  // },
  image: Image,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
