import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="call3hudson"
        blockSize={6}
        blockMargin={10}
        color="transparent"
        fontSize={12}
      />
      <div>
        <Button
          href="https://github.com/call3hudson?tab=repositories"
          target="_blank"
          className="fork-btn-inner"
          style={{
            width: 250,
          }}
        >
          <CgGitFork style={{ fontSize: "1.2em" }} />
          {" Give me some "}
          <AiFillStar style={{ fontSize: "1.1em" }} />
        </Button>
      </div>
    </Row>
  );
}

export default Github;
