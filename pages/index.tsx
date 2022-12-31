import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samuel Alves Portifolio</title>
        <meta name="description" content="Portifolio" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              SamuelAlves
            </h1>
            <ul className="flex items-center gap-6">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Samuel Alves
            </h2>
            <h3 className="text-2xl py-2 md:text3xl dark:text-white">
              Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eligendi porro, iusto beatae animi optio esse officiis maiores
              quis odio fugiat consequatur labore enim non nihil! Veritatis
              aliquid libero molestias.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 flex items-center justify-center my-20 mx-auto">
            <Image
              src={code}
              alt="dev-ed-wave png"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-justify dark:text-gray-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odit
              aut perspiciatis officia reiciendis est ipsum et nisi
              <span className="text-teal-500"> agencies</span>, architecto quo
              maiores suscipit. Laborum, placeat nihil nemo facilis nulla eius
              quae!
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 text-justify dark:text-gray-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate a dolor ratione fuga illum hic voluptatem deserunt
            </p>
          </div>

          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-600">
              <Image
                src={design}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid accusantium alias obcaecati ut debitis vel aspernatur
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-600">
              <Image
                src={code}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid accusantium alias obcaecati ut debitis vel aspernatur
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Code</p>
              <p className="text-gray-800 py-1 dark:text-white">Code</p>
              <p className="text-gray-800 py-1 dark:text-white">Code</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-600">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid accusantium alias obcaecati ut debitis vel aspernatur
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Consulting</p>
              <p className="text-gray-800 py-1 dark:text-white">Consulting</p>
              <p className="text-gray-800 py-1 dark:text-white">Consulting</p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-justify">
            <h3 className="text-3xl py-1 dark:text-white">Portifolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eligendi porro, iusto beatae animi optio esse officiis maiores
              quis odio fugiat consequatur labore enim non nihil! Veritatis
              aliquid libero molestias.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Image src={web1} alt="web" className="rounded=lg object-cover" />
            </div>
            <div>
              <Image src={web2} alt="web" className="rounded=lg object-cover" />
            </div>
            <div>
              <Image src={web3} alt="web" className="rounded=lg object-cover" />
            </div>
            <div>
              <Image src={web4} alt="web" className="rounded=lg object-cover" />
            </div>
            <div>
              <Image src={web5} alt="web" className="rounded=lg object-cover" />
            </div>
            <div>
              <Image src={web6} alt="web" className="rounded=lg object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
