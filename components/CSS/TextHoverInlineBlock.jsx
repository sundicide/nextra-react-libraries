import styles from "@/styles/CSS/TextHoverInlineBlock.module.css";

export default function TextHoverInlineBlock() {
  return (
    <div className={styles.root}>
      <span>Hover me!</span>
      <span>Hover me!</span>
    </div>
  );
}
