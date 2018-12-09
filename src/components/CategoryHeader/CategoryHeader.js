import React from "react";
import styles from "./CategoryHeader.scss";

const CategoryHeader = React.memo(({ category }) => (
  <section className={styles.component}>
    {category && (
      <h2 className={styles.header}>
        {category}
      </h2>
    )}
  </section>
));

export default CategoryHeader;
