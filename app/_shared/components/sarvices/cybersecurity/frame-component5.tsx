/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.threatDetectionContainerWrapper, className].join(" ")}
    >
      <div className={styles.threatDetectionContainer}>
        <div className={styles.threatDetectionContent}>
          <div className={styles.frameParent}>
            <div className={styles.threatDetectionAndResponseParent}>
              <div className={styles.threatDetectionAndContainer}>
                <span className={styles.threatDetectionAndContainer1}>
                  <span>Threat Detection</span>
                  <span className={styles.andResponse}> and Response</span>
                </span>
              </div>
              <div className={styles.empowerYourselfAgainst}>
                Empower yourself against cyber adversaries by deploying our
                advanced Threat Detection and Response platform.
              </div>
            </div>
            <div className={styles.threatDetectionIcons}>
              <div className={styles.threatDetectionIconsContain}>
                <div className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-1707478905.svg"
                  />
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/group-1707478905.svg"
                  />
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-1707478905.svg"
                  />
                </div>
              </div>
              <div className={styles.intrusionDetectionContainer}>
                <div className={styles.intrusionDetectionContent}>
                  <div className={styles.intrusionDetectionAndContainer}>
                    <p className={styles.intrusionDetectionAnd}>
                      Intrusion Detection and Prevention
                    </p>
                    <p className={styles.endpointDetectionAnd}>
                      Endpoint Detection and Response (EDR)
                    </p>
                    <p className={styles.incidentResponse}>
                      Incident Response.
                    </p>
                  </div>
                  <img
                    className={styles.intrusionDetectionIcons}
                    alt=""
                    src="/cybersecurity-service-icons.svg"
                  />
                  <img
                    className={styles.intrusionDetectionIcons1}
                    alt=""
                    src="/vector-7448.svg"
                  />
                </div>
                <img
                  className={styles.intrusionDetectionContainerChild}
                  alt=""
                  src="/vector-7448.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.span}>
          <img className={styles.imageIcon} alt="" src="image_cardfill.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
