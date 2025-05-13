import React from 'react'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const QualificationAndExp = () => {
  return (
    <section className=" flex justify-center bg-[#0c152a] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-48 gap-20">
              {/* Academic Qualification */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 ">
                  <span className="inline-block border-b-4 border-[#fb9700] pb-2">
                    Acad
                  </span>
                  emic <span className="text-[#fb9700]">Qualification</span>
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Master In Computer Applications
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Institute of Management and Information Technology, Cuttack{" "}
                        <br /> (2020 - 2022)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center  gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">B.Sc. in Botany</h3>
                      <p className="text-gray-400 text-sm">
                        Netaji Subash Memorial City Degree College, Cuttack <br />{" "}
                        (2017 - 2020)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center  gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Higher Secondary</h3>
                      <p className="text-gray-400 text-sm">
                        J.K.B.K Govt. Junior College, Cuttack <br /> (2015 - 2017)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
    
              {/* Job Experience */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="inline-block border-b-4 border-[#fb9700] pb-2">
                    Job
                  </span>{" "}
                  <span className="text-[#fb9700]">Experience</span>
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-center  gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Software Developer - I
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Aarna Protocol (Nov. 2023 - Aug. 2024)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center  gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Freelance Frontend and Smart Contract Developer
                      </h3>
                      <p className="text-gray-400 text-sm">
                        SubLabs (Jul. 2023 - Dec. 2023)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center  gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Web3 Developer</h3>
                      <p className="text-gray-400 text-sm">
                        BSBSTech Pvt. Ltd. (Mar. 2023 - Jul. 2023)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center  gap-4">
                    <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Blockchain Developer
                      </h3>
                      <p className="text-gray-400 text-sm">
                        NFThing (May. 2022 - Nov. 2022)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
  )
}

export default QualificationAndExp