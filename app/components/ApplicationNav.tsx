"use client";

import { FC } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { ApplicationNavProps } from "../types";

const ApplicationNav: FC<ApplicationNavProps> = ({
  data: applications,
  setItem,
}) => {
  // get non duplicate
  const uniqueBCAs: string[] = [];

  const uniqueBCA = applications.filter((application) => {
    const isDuplicate =
      uniqueBCAs.includes(application.BCAP1) &&
      uniqueBCAs.includes(application.BCAP2) &&
      uniqueBCAs.includes(application.BCAP3);

    if (!isDuplicate) {
      uniqueBCAs.push(application.BCAP1);
      uniqueBCAs.push(application.BCAP2);
      uniqueBCAs.push(application.BCAP3);
      return true;
    }

    return false;
  });

  const handleOnclick = (bcap: string) => {
    const filterData = applications.filter((application) => {
      const isBCAP =
        application.BCAP1 === bcap ||
        application.BCAP2 === bcap ||
        application.BCAP3 === bcap;
      return isBCAP;
    });
    setItem(filterData);
  };

  return (
    <div>
      {uniqueBCA &&
        uniqueBCA.map((bca, index) => (
          <div key={index}>
            <div>
              <button>
                <h4 className="font-bold">Business Capabilities {index}</h4>
              </button>
            </div>
            <div>
              <button
                onClick={(e) => {
                  handleOnclick(bca.BCAP1);
                }}
              >
                {bca.BCAP1}
              </button>
              <button
                onClick={(e) => {
                  handleOnclick(bca.BCAP2);
                }}
              >
                {bca.BCAP2}
              </button>
              <button
                onClick={(e) => {
                  handleOnclick(bca.BCAP3);
                }}
              >
                {bca.BCAP3}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApplicationNav;
