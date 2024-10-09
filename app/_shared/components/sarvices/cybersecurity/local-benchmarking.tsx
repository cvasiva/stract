/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./local-benchmarking.module.css";

export type LocalBenchmarkingType = {
  className?: string;
};

const LocalBenchmarking: NextPage<LocalBenchmarkingType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.localBenchmarking, className].join(" ")}>
      <div className={styles.image} />
      <img className={styles.imageIcon} alt="" src="image_full.svg" />
      <div className={styles.localBenchmarkingInner}>
        <div className={styles.webApplicationTitleDescriptParent}>
          <div className={styles.webApplicationTitleDescript}>
            <div className={styles.webApplicationSecurityContainer}>
              <span className={styles.webApplicationSecurityContainer1}>
                <span>{`Web `}</span>
                <span className={styles.applicationSecurity}>
                  Application Security
                </span>
                <span> Suite</span>
              </span>
            </div>
            <div className={styles.ensureRobustProtection}>
              Ensure robust protection for your web applications with our
              all-encompassing Web Application Security Suite, shielding from
              all directions
            </div>
          </div>
          <div className={styles.webApplicationIcons}>
            <div className={styles.webApplicationIconsContaine}>
              <div className={styles.frameParent}>
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
            <div className={styles.webApplicationIconsBottom}>
              <div className={styles.webApplicationFirewallWafWrapper}>
                <div className={styles.webApplicationFirewallContainer}>
                  <span>
                    <p className={styles.webApplicationFirewall}>
                      Web Application Firewall (WAF) Implementation
                    </p>
                    <p className={styles.codeReview}>Code Review</p>
                    <p className={styles.securityPatchManagement}>
                      Security Patch Management.
                    </p>
                  </span>
                </div>
              </div>
              {/* <img
                className={styles.icons}
                alt=""
                src="/cybersecurity-service-icons.svg"
              />
              <img className={styles.icons1} alt="" src="/vector-7448.svg" />
              <img className={styles.icons2} alt="" src="/vector-7448.svg" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBenchmarking;
