import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Meru university of science and technology(2019 - 2024)"
            result="Second Class Honours-Lower Division"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="KCSE"
            subTitle="Kisii High School (2015 - 2018)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
{/* ad a education experience */}
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FreeLance Graphics Designer"
            subTitle="2023 - Present"
            result="Remote"
            des="As a freelance graphic designer, I craft visually compelling designs tailored to clients' unique needs. My work spans various mediums, ensuring creative solutions that effectively communicate their brand's message."
          />
          <ResumeCard
            title="Kenya Meteorological Department - (2012 - 2016)"
            subTitle="Atachee - (2012 - 2016)"
            result="Nairobi- Kenya"
            des="During my 3-month attachment at the Kenya Meteorological Department, I contributed to developing and maintaining software tools for weather data analysis and automated reporting systems, enhancing the department's technological efficiency."
          />
          <ResumeCard
            title="Professional Digital Systems Limited"
            subTitle="Atachee - (2012 - 2016)"
            result="Oman"
            des="At PDSL, I was involved in developing and managing software systems for selling mobile credit, KPLC tokens, and sending bulk messages, ensuring seamless transactions and effective communication for clients."
          />
           <ResumeCard
          title="Section Engineering"
          subTitle="Seasonal- (2020 - 2022)"
          result="Oman"
          des="I contributed technical articles to Section Engineering, where I wrote on advanced topics like using Logistic Regression in PyTorch to identify handwritten digits, blending practical coding insights with theoretical concepts."
        />


        </div>
      </div>
    </motion.div>
  );
};

export default Education;
