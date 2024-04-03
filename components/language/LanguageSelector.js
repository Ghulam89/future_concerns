import React, { useState } from "react";
import styles from "./Language.module.css";
import eng from "../../public/img/uk.webp";
import ge from "../../public/img/ge.webp";
import da from "../../public/img/da.png";
import sw from "../../public/img/sw.png";
import pe from "../../public/img/pe.png";
import sp from "../../public/img/sp.jpeg";
import po from "../../public/img/po.png";
import ab from "../../public/img/ab.png";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.flex + " tw-z-40"}>
        {/* Language button */}
        <button
          onClick={handleLanguageChange}
          type="button"
          className={`${styles.flex} ${styles.gap2} ${styles.itemsCenter} ${styles.border} ${styles.roundedFull} ${styles.p2} ${styles.textSmall} ${styles.fontMedium} ${styles.textGray700} ${styles.shadowLg} ${styles.relative}`}
          aria-haspopup="true"
        >
          {/* Flag and language name */}
          <img src={eng} className={`${styles.w7} ${styles.h7} ${styles.objectCover} ${styles.roundedFull}`} alt="" />
          <p className={`${styles.m0} ${styles.textWhite}`}>English</p>
          {/* Your SVG icon */}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={`${styles.absolute} ${styles.z50} ${styles.bgWhite} ${styles.shadowLg} ${styles.roundedFull} ${styles.w80}`}>
            {/* Language options */}
            <div className={`${styles.flex} ${styles.p2} ${styles.gap2}`}>
              {/* Each language option */}
              <div className={`${styles.flex} ${styles.gap2} ${styles.hoverBgGrayLight} ${styles.p2}`}>
                <img src={ge} className={`${styles.w7} ${styles.h7} ${styles.objectCover} ${styles.roundedFull}`} alt="" />
                <p className={`${styles.m0} ${styles.textBlack}`}>German</p>
              </div>
              {/* Add more languages here */}
            </div>
          </div>
        )}
      </div>
    </>
    
  );
};

export default LanguageSelector;
