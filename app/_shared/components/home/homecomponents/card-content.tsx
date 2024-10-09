import type { NextPage } from "next";
import styles from "./card-content.module.css";

export type CardContentType = {
  className?: string;
  newDeviceInventionFor?: string;
  digitalPlatform?: string;
};

const CardContent: NextPage<CardContentType> = ({
  className = "",
  newDeviceInventionFor,
  digitalPlatform,
}) => {
  return (
    <div className={[styles.cardContent, className].join(" ")}>
      <div className={styles.cardDate}>
        <div className={styles.december052021}>December 05, 2021</div>
        <div className={styles.minRead}>3 min read</div>
      </div>
      <div className={styles.cardDivider}>
        <div className={styles.frameParent}>
          <div className={styles.dividerWrapper}>
            <div className={styles.divider} />
          </div>
          <h2 className={styles.newDeviceInventionContainer}>
            <p className={styles.newDeviceInvention}>{newDeviceInventionFor}</p>
            <p className={styles.digitalPlatform}>{digitalPlatform}</p>
          </h2>
        </div>
        <div className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy.
        </div>
      </div>
      <b className={styles.viewMore}>View More</b>
    </div>
  );
};

export default CardContent;
