/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.dataProtectionContentWrapper, className].join(" ")}>
      <div className={styles.dataProtectionContent}>
        <div className={styles.dataProtectionContainer}>
          <div className={styles.dataProtectionWrapper}>
            <div className={styles.yourDataDeservesTheBestPrParent}>
              <div className={styles.yourDataDeservesContainer}>
                <p className={styles.yourData}>Your Data</p>
                <p className={styles.deservesThe}>Deserves the</p>
                <p className={styles.bestProtection}>Best Protection</p>
              </div>
              <div className={styles.joinThousandsOf}>
                Join thousands of businesses who trust us with their
                cybersecurity needs. Get started with a free risk assessment
              </div>
            </div>
            <div className={styles.contactContainer}>
              <div className={styles.contactTeam}>Contact Team</div>
              <div className={styles.arrowUp01SharpWrapper}>
                <img
                  className={styles.arrowUp01SharpIcon}
                  alt=""
                  src="/arrowup01sharp@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image2Parent}>
          <img className={styles.image2Icon} alt="" src="/image-2.svg" />
          <div className={styles.serviceContent}>
            <img
              className={styles.serviceContentChild}
              alt=""
              src="/rectangle-2074@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.fileProtectIconContainer}>
                <img
                  className={styles.fileProtectIconContainerChild}
                  alt=""
                  src="/group-15.svg"
                />
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              </div>
              <div className={styles.fileProtectParent}>
                <div className={styles.fileProtect}>File PROTECT</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameChild1} alt="" src="/vector-7455.svg" />
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.securedIconContainer}>
              <img
                className={styles.securedIconContainerChild}
                alt=""
                src="/group-151.svg"
              />
              <img
                className={styles.securedIconContainerItem}
                alt=""
                src="/group-17074789241.svg"
              />
            </div>
            <div className={styles.securedFilesParent}>
              <div className={styles.securedFiles}>SECURED FILES</div>
              <div className={styles.frameDiv}>
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
