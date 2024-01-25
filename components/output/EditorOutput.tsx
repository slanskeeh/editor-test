"use client";

import styles from "./EditorOutput.module.scss";
import dynamic from "next/dynamic";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

const style = {
  paragraph: {
    fontSize: "16px",
  },
};

const EditorOutput: React.FC<{ content: any }> = ({ content }) => {
  return <Output style={style} className={styles.output} data={content} />;
};

export default EditorOutput;
