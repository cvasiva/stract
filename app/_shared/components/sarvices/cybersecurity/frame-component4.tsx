/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.modernSolutionsContainerWrapper, className].join(" ")}
    >
      <div className={styles.modernSolutionsContainer}>
        <div className={styles.modernSolutionsContent}>
          <div className={styles.modernSolutionsTitleContain}>
            <div className={styles.modernSolutionsTitle}>
              <div className={styles.modernSolutions}>MODERN SOLUTIONS</div>
              <div className={styles.heading2Container}>
                <p className={styles.customizedSecurity}>Customized Security</p>
                <p className={styles.solutions}>Solutions</p>
              </div>
            </div>
          </div>
          <div className={styles.securityAssessmentContainerParent}>
            <div className={styles.securityAssessmentContainer}>
              <div className={styles.securityAssessmentContent}>
                <div className={styles.securityAssessmentTop}>
                  <img
                    className={styles.securityAssessmentTopChild}
                    alt=""
                    src="/group-1707478918.svg"
                  />
                  <img
                    className={styles.securityAssessmentTopItem}
                    alt=""
                    src="/group-1707478921.svg"
                  />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.securityAssessmentAndAuditParent}>
                <b className={styles.securityAssessmentAndContainer}>
                  <p className={styles.security}>Security</p>
                  <p className={styles.assessmentAndAudit}>
                    Assessment and Audit
                  </p>
                </b>
                <div className={styles.ensuringDataAccuracy}>
                  Ensuring data accuracy is crucial for making informed
                  decisions and ensuring the reliability.
                </div>
              </div>
            </div>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.frameChild}
                alt=""
                src="/vector-7451.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.consultingServicesContainerWrapper}>
          <div className={styles.consultingServicesContainer}>
            <div className={styles.consultingServicesContent}>
              <div className={styles.customizedSecuritySolutionsContainer}>
                <span className={styles.customizedSecuritySolutionsContainer1}>
                  <p className={styles.customizedSecuritySolutions}>
                    Customized Security Solutions encompass Security Assessment,
                    Consulting, and Policy Development, ensuring precise
                    security levels for your organization's individual
                    requirements and challenges.
                  </p>
                </span>
              </div>
            </div>
            <div className={styles.consultingServicesTop}>
              <div className={styles.consultingServicesTopConten}>
                <div className={styles.consultingServicesIconConta}>
                  <div className={styles.consultingServicesIcons}>
                    <img
                      className={styles.consultingServicesIconsChild}
                      alt=""
                      src="/group-1707478919.svg"
                    />
                    <div className={styles.consultingServicesIconsInner}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/frame-1707479327.svg"
                      />
                    </div>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.consultingServicesBottom}>
                  <div className={styles.consultingAndAdvisoryServicWrapper}>
                    <b className={styles.consultingAndAdvisoryContainer}>
                      <p className={styles.consultingAnd}>Consulting and</p>
                      <p className={styles.advisoryServices}>
                        Advisory Services
                      </p>
                    </b>
                  </div>
                  <div className={styles.ensuringDataAccuracy1}>
                    Ensuring data accuracy is crucial for making informed
                    decisions and ensuring the reliability.
                  </div>
                </div>
              </div>
              <div className={styles.consultingServicesTopInner}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/vector-7451.svg"
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameGroup}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-1707478920.svg"
                    />
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/group-1707478922.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.policyDevelopmentWrapper}>
                    <b className={styles.policyDevelopment}>
                      Policy Development
                    </b>
                  </div>
                  <div className={styles.ensuringDataAccuracy2}>
                    Ensuring data accuracy is crucial for making informed
                    decisions and ensuring the reliability.
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

export default FrameComponent4;
