import styles from "@/styles/CascadingStyleSheets/TextHoverInlineBlock.module.css";

export default function TextHoverInlineBlock() {
  return (
    <div className={styles.root}>
      <span>Hover me!</span>
      <span>Hover me!</span>
    </div>
  );
}
