/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cybersecurityInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.previousWorksResearchWrapper}>
              <div
                className={styles.previousWorks}
              >{`Previous Works & Research`}</div>
            </div>
            <div className={styles.seamlessIntegrationFor}>
              Seamless Integration for a Future Defined by Efficiency, Security,
              and Digital Excellence
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.linkHomeLearnTileParent}>
            <div className={styles.linkHomeLearnTile}>
              <div className={styles.learningResourceCardOneTwo}>
                <div className={styles.learningResourceCardOneCon}>
                  <div className={styles.learningResourceCardTitles}>
                    <b className={styles.cybersecurityInThe}>
                      Cybersecurity in the generative AI era
                    </b>
                  </div>
                  <div className={styles.paragraphHomeLearnTileDes}>
                    <div className={styles.learningResourceCardDescrip}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.learnMore}>Learn more</div>
                  </div>
                </div>
              </div>
              <div className={styles.imageHomeLearnCommunityIm}>
                <img
                  className={styles.imageHomeLearnCrashkursImIcon}
                  alt=""
                  src="/image-homelearncrashkursimg@2x.png"
                />
                <img
                  className={styles.image104204Icon}
                  alt=""
                  src="/image-104204@2x.png"
                />
              </div>
            </div>
            <div className={styles.linkHomeLearnTile1}>
              <div className={styles.linkHomeLearnTileInner}>
                <div className={styles.frameDiv}>
                  <div className={styles.webApplicationSecurityWrapper}>
                    <b className={styles.webApplicationSecurityContainer}>
                      <p className={styles.webApplication}>Web Application</p>
                      <p className={styles.security}>Security</p>
                    </b>
                  </div>
                  <div className={styles.thePopular60MinuteMobileSParent}>
                    <div className={styles.thePopular60Minute}>
                      The popular 60-minute mobile security blog
                    </div>
                    <div className={styles.courseModeratedLiveWrapper}>
                      <div className={styles.courseModeratedLive}>
                        course, moderated live
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.linkHomeLearnTileChild}>
                <div className={styles.learningResourceCardButtonParent}>
                  <div className={styles.learningResourceCardButton}>
                    <img className={styles.icon1} alt="" src="/icon1.svg" />
                  </div>
                  <div className={styles.learnMore1}>Learn more</div>
                </div>
              </div>
              <img
                className={styles.imageHomeLearnCrashkursImIcon1}
                alt=""
                src="/image-homelearncrashkursimg@2x.png"
              />
            </div>
          </div>
          <div className={styles.linkWNodeC61bcbb1D558867}>
            <div className={styles.divLinkCta} />
            <div className={styles.dataPrivacyCardContentWrapper}>
              <div className={styles.dataPrivacyCardContent}>
                <div className={styles.dataPrivacyAndContainer}>
                  <p className={styles.dataPrivacyAnd}>Data Privacy and</p>
                  <p className={styles.protection}>Protection</p>
                </div>
                <div className={styles.bestPracticesFor}>
                  Best practices for safeguarding personal and sensitive data
                  Best practices for safeguarding personal and sensitive data
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon2} alt="" src="/icon2.svg" />
                  </div>
                  <div className={styles.learnMore2}>Learn more</div>
                </div>
              </div>
            </div>
            <div className={styles.dataPrivacyCardBackground}>
              <img
                className={styles.dataPrivacyCardBackgroundS}
                alt=""
                src="/data-privacy-card-background-shape@2x.png"
              />
              <div className={styles.frameParent2}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-17074789181.svg"
                />
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-1707478924.svg"
                />
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
