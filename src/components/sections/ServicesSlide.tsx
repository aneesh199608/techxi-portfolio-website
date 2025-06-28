import { Slideshow } from "../ui/slideshow";
import { SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiAngular,
  SiJquery,
  SiLess,
  SiSass,
  SiNextdotjs,
  SiVuedotjs,
  SiUnity,
  SiApple,
  SiAndroid, } from "react-icons/si";
import { SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiSpring,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiRuby,
  SiRubyonrails,
  SiGo,
  SiJson,
  SiOracle,
SiPostgresql,
SiMongodb } from "react-icons/si";
  import { VscAzure } from "react-icons/vsc";
  import { FaWindows } from "react-icons/fa";
  import { TbBrandCSharp } from "react-icons/tb";
  import { FaJava } from "react-icons/fa";

  import {
  SiMysql,
  SiRedis,
  SiSqlite,
  SiFirebase,
  SiAmazondynamodb,
  SiApachecassandra,
  SiApachecouchdb,
  SiMariadb,
  SiElasticsearch,
  SiNeo4J,
} from "react-icons/si";
import { SiGithub, SiGitlab, SiBitbucket } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";


const slides = [
  {
    id: "frontend",
    icon: <SiReact className="w-10 h-10" />,
    content: (
      <div className="flex flex-col gap-2 lg:gap-16 items-center">
        <h3 className="text-lg lg:text-2xl font-semibold mb-2">Frontend</h3>
        <div className="flex gap-4 lg:gap-8 flex-wrap p-8 items-center justify-center">
            <SiReact className="w-6 h-6 sm:w-10 sm:h-10 text-cyan-400" title="React" />
            <SiTailwindcss className="w-6 h-6 sm:w-10 sm:h-10 text-sky-400" title="Tailwind CSS" />
            <SiJavascript className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-400" title="JavaScript" />
            <SiHtml5 className="w-6 h-6 sm:w-10 sm:h-10 text-orange-500" title="HTML5" />
            <SiCss3 className="w-10 h-10 md:w-10 md:h-10 w-4 h-4" title="CSS3" />
            <SiBootstrap className="w-6 h-6 sm:w-10 sm:h-10 text-purple-600" title="Bootstrap" />
            <SiAngular className="w-6 h-6 sm:w-10 sm:h-10 text-red-600" title="Angular" />
            <SiJquery className="w-10 h-10 md:w-10 md:h-10 w-4 h-4" title="jQuery" />
            <SiLess className="w-6 h-6 sm:w-10 sm:h-10 text-blue-700" title="LESS" />
            <SiSass className="w-6 h-6 sm:w-10 sm:h-10 text-pink-400" title="SASS" />
            <SiNextdotjs className="w-6 h-6 sm:w-10 sm:h-10 text-black dark:text-white" title="Next.js" />
            <SiVuedotjs className="w-6 h-6 sm:w-10 sm:h-10 text-green-400" title="Vue.js" />
            <SiUnity className="w-6 h-6 sm:w-10 sm:h-10 text-black dark:text-white" title="Unity" />
            <SiApple className="w-6 h-6 sm:w-10 sm:h-10 text-gray-800 dark:text-gray-200" title="iOS" />
            <SiAndroid className="w-6 h-6 sm:w-10 sm:h-10 text-green-600" title="Android" />
        </div>
      </div>
    ),
  },
  {
    id: "backend",
    icon: <SiNodedotjs className="w-10 h-10 md:w-10 md:h-10 w-4 h-4" />,
    content: (
      <div className="flex flex-col gap-2 lg:gap-16 items-center">
        <h3 className="text-lg lg:text-2xl font-semibold mb-2">Backend</h3>
        <div className="flex gap-4 lg:gap-8 flex-wrap p-8 items-center justify-center">
            <SiNodedotjs className="w-6 h-6 sm:w-10 sm:h-10 text-white-600" title="Node.js" />
            <SiExpress className="w-6 h-6 sm:w-10 sm:h-10 text-gray-700 dark:text-white" title="Express.js" />
            <SiPython className="w-6 h-6 sm:w-10 sm:h-10 text-white-400" title="Python" />
            <SiDjango className="w-6 h-6 sm:w-10 sm:h-10 text-white-800" title="Django" />
            <FaJava className="w-6 h-6 sm:w-10 sm:h-10 text-red-500" title="Java" />
            <SiSpring className="w-6 h-6 sm:w-10 sm:h-10 text-green-600" title="Spring" />
            <SiDotnet className="w-6 h-6 sm:w-10 sm:h-10 text-purple-700" title=".NET" />
            <TbBrandCSharp className="w-6 h-6 sm:w-10 sm:h-10 text-purple-600" title="C#" />
            <SiPhp className="w-6 h-6 sm:w-10 sm:h-10 text-indigo-600" title="PHP" />
            <SiLaravel className="w-6 h-6 sm:w-10 sm:h-10 text-red-600" title="Laravel" />
            <SiRuby className="w-6 h-6 sm:w-10 sm:h-10 text-pink-500" title="Ruby" />
            <SiRubyonrails className="w-6 h-6 sm:w-10 sm:h-10 text-red-700" title="Rails" />
            <SiGo className="w-6 h-6 sm:w-10 sm:h-10 text-white-400" title="Go" />
            <SiJson className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-500" title="JSON" />
            <VscAzure className="w-6 h-6 sm:w-10 sm:h-10 text-blue-700" title="Azure/.NET" />
            <FaWindows className="w-6 h-6 sm:w-10 sm:h-10 text-blue-700" title="Windows Services" />
            <SiOracle className="w-6 h-6 sm:w-10 sm:h-10 text-orange-600" title="Java EE/EJB" />
        </div>
      </div>
    ),
  },

  {
    id: "database",
    icon: <SiPostgresql className="w-10 h-10 md:w-10 md:h-10 w-4 h-4" />,
    content: (
      <div className="flex flex-col gap-2 lg:gap-16 items-center">
        <h3 className="text-lg lg:text-2xl font-semibold mb-2">Database</h3>
        <div className="flex gap-4 lg:gap-8 flex-wrap p-8 items-center justify-center">
            <SiMysql className="w-6 h-6 sm:w-10 sm:h-10 text-white-500" title="MySQL" />
            <SiPostgresql className="w-6 h-6 sm:w-10 sm:h-10 text-white-400" title="PostgreSQL" />
            <SiMongodb className="w-6 h-6 sm:w-10 sm:h-10 text-green-500" title="MongoDB" />
            <DiMsqlServer className="w-6 h-6 sm:w-10 sm:h-10 text-red-500" title="SQL Server" />
            <SiOracle className="w-6 h-6 sm:w-10 sm:h-10 text-orange-600" title="Oracle" />
            <SiRedis className="w-6 h-6 sm:w-10 sm:h-10 text-red-600" title="Redis" />
            <SiSqlite className="w-6 h-6 sm:w-10 sm:h-10 text-blue-300" title="SQLite" />
            <SiFirebase className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-400" title="Firebase" />
            <SiAmazondynamodb className="w-6 h-6 sm:w-10 sm:h-10 text-blue-700" title="DynamoDB" />
            <SiApachecassandra className="w-6 h-6 sm:w-10 sm:h-10 text-cyan-400" title="Cassandra" />
            <SiApachecouchdb className="w-6 h-6 sm:w-10 sm:h-10 text-red-500" title="CouchDB" />
            <SiMariadb className="w-6 h-6 sm:w-10 sm:h-10 text-white-600" title="MariaDB" />
            <SiElasticsearch className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-500" title="Elasticsearch" />
            <SiNeo4J className="w-6 h-6 sm:w-10 sm:h-10 text-green-600" title="Neo4j" />
        </div>
      </div>
    ),
  },

  {
    id: "sourcecontrol",
    icon: <SiGithub className="w-10 h-10 md:w-10 md:h-10 w-4 h-4" />,
    content: (
      <div className="flex flex-col gap-2 lg:gap-16 items-center">
        <h3 className="text-lg lg:text-2xl font-semibold mb-2">Source Control</h3>
        <div className="flex gap-4 lg:gap-8 items-center">
          <SiGithub className="w-6 h-6 sm:w-10 sm:h-10 text-white" title="GitHub" />
          <SiGitlab className="w-6 h-6 sm:w-10 sm:h-10 text-orange-500" title="GitLab" />
          <SiBitbucket className="w-6 h-6 sm:w-10 sm:h-10 text-white-400" title="Bitbucket" />
        </div>
      </div>
    ),
  },
];

export default function ServicesSlide() {
    return (
        <div className="px-4 py-8 sm:py-16 md:py-20 flex flex-col sm:gap-8">
        <h2 className="
        text-2xl sm:text-4xl lg:text-5xl
        font-semibold 
        text-white 
        text-center 
        max-w-4xl 
        mx-auto 
        leading-snug
        mb-8
      ">
        TechXi brings you scalable backends, beautiful frontends, and integrations.<br/>
        All working in harmony!
      </h2>
        <Slideshow slides={slides} intervalMs={6000} height="h-120" />
        </div>
    );
}

