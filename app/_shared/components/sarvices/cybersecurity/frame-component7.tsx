/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.statsCards}>
        <div className={styles.image104198Parent}>
          <div className={styles.image104198} />
          <div className={styles.nextGenerationCybersecurity}>
            Next-generation Cybersecurity Frameworks
          </div>
          <div className={styles.statsCardContent}>
            <div className={styles.statsCardValues}>
              <div className={styles.statsCardValueContainer}>
                <div className={styles.statsCardValueIconParent}>
                  <img
                    className={styles.statsCardValueIcon}
                    alt=""
                    src="/stats-card-value-icon.svg"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.tParent}>
                      <div className={styles.t}>$10.5T</div>
                      <div className={styles.estimatedGlobalAnnual}>
                        estimated global annual cost of cybercrime in 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.statsCardValuesInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/stats-card-value-icon.svg"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div}>86%</div>
                    <div className={styles.leadersForeseeA}>
                      Leaders foresee a catastrophic cyber event within the next
                      two years
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.statsCardValuesChild}>
                <div className={styles.frameGroup}>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/stats-card-value-icon.svg"
                    />
                    <div className={styles.div1}>200%</div>
                  </div>
                  <div className={styles.increasedDisruptionLevels}>
                    Increased disruption levels soared between 2017 and 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
