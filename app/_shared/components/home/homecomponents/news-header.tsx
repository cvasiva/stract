import type { NextPage } from "next";
import styles from "./news-header.module.css";

export type NewsHeaderType = {
  className?: string;
};

const NewsHeader: NextPage<NewsHeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.newsHeader, className].join(" ")}>
      <div className={styles.newsTitleContainerParent}>
        <div className={styles.newsTitleContainer}>
          <h1 className={styles.latestNewsAnd}>Latest News and Articles</h1>
          <div className={styles.weCurrentlySupport}>
            We currently support Facebook, Instagram, LinkedIn and Twitter. More
            to come. Felix is purpose built for ease of use and complete
            flexability.
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.seeMoreNews}>See More News</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
