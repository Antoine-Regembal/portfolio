import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGithub } from "react-icons/fa";

import "./Cursus.css";

const Cursus = ({ cursusContent }) => (
  <div id={cursusContent.sectionId} className="cursus parallax">
    <VerticalTimeline>
      {cursusContent.sections.map((section, key) =>
        section.type === "work" ? (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            date={section.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGithub />}
          >
            <h3 className="vertical-timeline-element-title">{section.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {section.location}
            </h4>
            <p>{section.description}</p>
          </VerticalTimelineElement>
        ) : (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--education"
            date={section.date}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaGithub />}
          >
            <h3 className="vertical-timeline-element-title">{section.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {section.location}
            </h4>
            <p>{section.description}</p>
          </VerticalTimelineElement>
        )
      )}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FaGithub />}
      />
    </VerticalTimeline>
  </div>
);

export default Cursus;
