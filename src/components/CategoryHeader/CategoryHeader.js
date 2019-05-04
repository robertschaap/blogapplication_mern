// @flow
import React from "react";
import styles from "./CategoryHeader.scss";

type CategoryHeaderPropsType = {
  category: string,
};

const CategoryHeader = ({ category }: CategoryHeaderPropsType) => {
  return (
    <section className={styles.component}>
      {category && (
        <h2 className={styles.header}>
          {category}
        </h2>
      )}
    </section>
  );
};

export default CategoryHeader;
