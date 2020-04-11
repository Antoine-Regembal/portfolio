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

const technologiesLogo = (size, title) => {
  return {
    react: () => <FaReact size={size} title={title} />,
    angular: () => <FaAngular size={size} title={title} />,
    vue: () => <FaVuejs size={size} title={title} />,
    node: () => <FaNodeJs size={size} title={title} />,
    php: () => <FaPhp size={size} title={title} />,
    html: () => <FaHtml5 size={size} title={title} />,
    css: () => <FaCss3Alt size={size} title={title} />,
    javascript: () => <DiJsBadge size={size} title={title} />,
    postgresql: () => <DiPostgresql size={size} title={title} />,
    mongodb: () => <DiMongodb size={size} title={title} />,
    git: () => <FaGit size={size} title={title} />,
    github: () => <FaGithub size={size} title={title} />,
    docker: () => <FaDocker size={size} title={title} />,
    linux: () => <FaLinux size={size} title={title} />,
    terminal: () => <DiTerminal size={size} title={title} />,
    windows: () => <FaWindows size={size} title={title} />,
    relationaldb: () => <DiDatabase size={size} title={title} />,
    linkedin: () => <FaLinkedin size={size} title={title} />,
    email: () => <MdEmail size={size} title={title} />,
  };
};

const appLogos = (askedTechnology, logoSize, title) => {
  const logoTitle = title ? title : null;
  let technology;

  switch (askedTechnology) {
    case "react":
      technology = technologiesLogo(logoSize, logoTitle).react();
      break;
    case "angular":
      technology = technologiesLogo(logoSize, logoTitle).angular();
      break;
    case "vue":
      technology = technologiesLogo(logoSize, logoTitle).vue();
      break;
    case "node":
      technology = technologiesLogo(logoSize, logoTitle).node();
      break;
    case "php":
      technology = technologiesLogo(logoSize, logoTitle).php();
      break;
    case "html":
      technology = technologiesLogo(logoSize, logoTitle).html();
      break;
    case "css":
      technology = technologiesLogo(logoSize, logoTitle).css();
      break;
    case "javascript":
      technology = technologiesLogo(logoSize, logoTitle).javascript();
      break;
    case "relationaldb":
      technology = technologiesLogo(logoSize, logoTitle).relationaldb();
      break;
    case "mongodb":
      technology = technologiesLogo(logoSize, logoTitle).mongodb();
      break;
    case "git":
      technology = technologiesLogo(logoSize, logoTitle).git();
      break;
    case "github":
      technology = technologiesLogo(logoSize, logoTitle).github();
      break;
    case "docker":
      technology = technologiesLogo(logoSize, logoTitle).docker();
      break;
    case "linux":
      technology = technologiesLogo(logoSize, logoTitle).linux();
      break;
    case "terminal":
      technology = technologiesLogo(logoSize, logoTitle).terminal();
      break;
    case "windows":
      technology = technologiesLogo(logoSize, logoTitle).windows();
      break;
    case "linkedin":
      technology = technologiesLogo(logoSize, logoTitle).linkedin();
      break;
    case "email":
      technology = technologiesLogo(logoSize, logoTitle).email();
      break;
    default:
      break;
  }

  return technology;
};

export default appLogos;
