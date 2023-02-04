"use client";

import { FC } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { BsCaretRightFill } from "react-icons/bs";
import { ApplicationNavProps } from "../types";

const ApplicationNav: FC<ApplicationNavProps> = ({
  data: applications,
  setItem,
}) => {
  // get non duplicate
  const uniqueBCAs: string[] = [];

  const uniqueBCA = applications.filter((application) => {
    const isBCAP1Duplicate = uniqueBCAs.includes(application.BCAP1);
    const isBCAP2Duplicate = uniqueBCAs.includes(application.BCAP2);
    const isBCAP3Duplicate = uniqueBCAs.includes(application.BCAP3);

    if (!isBCAP1Duplicate) {
      uniqueBCAs.push(application.BCAP1);
      return true;
    }

    if (!isBCAP2Duplicate) {
      uniqueBCAs.push(application.BCAP2);
      return true;
    }
    if (!isBCAP3Duplicate) {
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
            <Accordion
              transition={{
                duration: "300ms",
                timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
              }}
            >
              <AccordionItem>
                <AccordionHeader className="w-full p-5 bg-gray-800 rounded-lg my-2">
                  <h4>Business Capabilities {bca.BCAP1.slice(-1)}</h4>
                </AccordionHeader>
                <AccordionBody>
                  <div className="p-5 flex flex-col items-baseline divide-y">
                    <button
                      className="py-2"
                      onClick={(e) => {
                        handleOnclick(bca.BCAP1);
                      }}
                    >
                      {bca.BCAP1}
                    </button>
                    <button
                      className="py-2"
                      onClick={(e) => {
                        handleOnclick(bca.BCAP2);
                      }}
                    >
                      {bca.BCAP2}
                    </button>
                    <button
                      className="py-2"
                      onClick={(e) => {
                        handleOnclick(bca.BCAP3);
                      }}
                    >
                      {bca.BCAP3}
                    </button>
                  </div>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
    </div>
  );
};

export default ApplicationNav;
