import React from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaDocker,
  FaLinux,
  FaWindows,
  FaLinkedin,
  FaVuejs,
} from "react-icons/fa";
import {
  DiPostgresql,
  DiMongodb,
  DiJsBadge,
  DiTerminal,
  DiDatabase,
} from "react-icons/di";
import { MdEmail } from "react-icons/md";
import {
  Linuxmint,
  Postcss,
  Azuredevops,
  Pluralsight,
  Jest,
  Gimp,
  Vivaldi,
  Netlify,
  Electron,
  Sass,
  Manjaro
} from "@icons-pack/react-simple-icons";

const technologiesLogo = (size, title) => {
  return {
    react: () => <FaReact size={size} />,
    angular: () => <FaAngular size={size} />,
    vue: () => <FaVuejs size={size} />,
    node: () => <FaNodeJs size={size} />,
    php: () => <FaPhp size={size} />,
    html: () => <FaHtml5 size={size} />,
    css: () => <FaCss3Alt size={size} />,
    postcss: () => <Postcss size={size} />,
    javascript: () => <DiJsBadge size={size} />,
    postgresql: () => <DiPostgresql size={size} />,
    mongodb: () => <DiMongodb size={size} />,
    git: () => <FaGit size={size} />,
    github: () => <FaGithub size={size} />,
    docker: () => <FaDocker size={size} />,
    linux: () => <FaLinux size={size} />,
    linuxMint: () => <Linuxmint size={size} />,
    terminal: () => <DiTerminal size={size} />,
    windows: () => <FaWindows size={size} />,
    relationaldb: () => <DiDatabase size={size} />,
    linkedin: () => <FaLinkedin size={size} />,
    email: () => <MdEmail size={size} />,
    azuredevops: () => <Azuredevops size={size} />,
    pluralsight: () => <Pluralsight size={size} />,
    jest: () => <Jest size={size} />,
    gimp: () => <Gimp size={size} />,
    vivaldi: () => <Vivaldi size={size} />,
    netlify: () => <Netlify size={size} />,
    electron: () => <Electron size={size} />,
    sass: () => <Sass size={size} />,
    manjaro: () => <Manjaro size={size} />
  };
};

const appLogos = (askedTechnology, logoSize) => {
  let technology;

  switch (askedTechnology) {
    case "react":
      technology = technologiesLogo(logoSize).react();
      break;
    case "angular":
      technology = technologiesLogo(logoSize).angular();
      break;
    case "vue":
      technology = technologiesLogo(logoSize).vue();
      break;
    case "node":
      technology = technologiesLogo(logoSize).node();
      break;
    case "php":
      technology = technologiesLogo(logoSize).php();
      break;
    case "html":
      technology = technologiesLogo(logoSize).html();
      break;
    case "css":
      technology = technologiesLogo(logoSize).css();
      break;
    case "postcss":
      technology = technologiesLogo(logoSize).postcss();
      break;
    case "javascript":
      technology = technologiesLogo(logoSize).javascript();
      break;
    case "relationaldb":
      technology = technologiesLogo(logoSize).relationaldb();
      break;
    case "mongodb":
      technology = technologiesLogo(logoSize).mongodb();
      break;
    case "git":
      technology = technologiesLogo(logoSize).git();
      break;
    case "github":
      technology = technologiesLogo(logoSize).github();
      break;
    case "docker":
      technology = technologiesLogo(logoSize).docker();
      break;
    case "linux":
      technology = technologiesLogo(logoSize).linux();
      break;
    case "linuxMint":
      technology = technologiesLogo(logoSize).linuxMint();
      break;
    case "terminal":
      technology = technologiesLogo(logoSize).terminal();
      break;
    case "windows":
      technology = technologiesLogo(logoSize).windows();
      break;
    case "linkedin":
      technology = technologiesLogo(logoSize).linkedin();
      break;
    case "email":
      technology = technologiesLogo(logoSize).email();
      break;
    case "azuredevops":
      technology = technologiesLogo(logoSize).azuredevops();
      break;
    case "pluralsight":
      technology = technologiesLogo(logoSize).pluralsight();
      break;
    case "jest":
      technology = technologiesLogo(logoSize).jest();
      break;
    case "gimp":
      technology = technologiesLogo(logoSize).gimp();
      break;
    case "vivaldi":
      technology = technologiesLogo(logoSize).vivaldi();
      break;
    case "netlify":
      technology = technologiesLogo(logoSize).netlify();
      break;
    case "electron":
      technology = technologiesLogo(logoSize).electron();
      break;
    case "sass":
      technology = technologiesLogo(logoSize).sass();
      break;
    case "manjaro":
      technology = technologiesLogo(logoSize).manjaro();
      break;
    default:
      break;
  }

  return technology;
};

export default appLogos;
