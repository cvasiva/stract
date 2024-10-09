/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cybersecurityInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.adaptableTitleIconWrapper}>
              <img
                className={styles.adaptableTitleIcon}
                alt=""
                src="/adaptable-title-icon.svg"
              />
            </div>
            <div className={styles.adaptableTitle}>24</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.adaptableWrapper}>
              <div className={styles.adaptable}>Adaptable</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameParent4}>
                        <div className={styles.adaptableImageBottomIconWrapper}>
                          <img
                            className={styles.adaptableImageBottomIcon}
                            alt=""
                            src="/adaptable-title-icon.svg"
                          />
                        </div>
                        <div className={styles.div}>06</div>
                      </div>
                      <div className={styles.adaptableContainer}>
                        <div className={styles.adaptable1}>Adaptable</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/group-427319002.svg"
                  />
                </div>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-427319001.svg"
                />
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.ellipseDiv} />
                    </div>
                    <div className={styles.div1}>2019</div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild1} />
                    </div>
                    <div className={styles.div2}>2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.trendsInCybersecurityAndCoParent}>
            <div className={styles.trendsInCybersecurity}>
              Trends in Cybersecurity and Countermeasures
            </div>
            <div className={styles.theGrowthInCybersecurityWiParent}>
              <div className={styles.theGrowthIn}>
                The growth in cybersecurity within tech has surged, driven by
                increasing cyber threats and advancements in defensive
                technologies and strategies.
              </div>
              <div className={styles.button}>
                <div className={styles.buttonChild} />
                <div className={styles.contactUs}>CONTACT US</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
