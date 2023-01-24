import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Heart disease Predition"
              description="This model involves training a model on a dataset of patient information, such as demographic data, medical history, and lab test results, to identify patterns that are associated with heart disease.The goal is to achieve high accuracy in predicting heart disease while minimizing positives or negatives statement."
              ghLink="https://github.com/sachin778899/Heart-Disease-Detection"
              demoLink="https://lnkd.in/dHt-W4D7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Salary Price Prediction" 
              description="Machine learning (ML) involves training a model on a dataset of employee information, such as job titles, years of experience, education level, and geographic location, to identify patterns that are associated with salary levels. Once the model is trained, it can be used to predict the salary of an individual based on their input data."
              ghLink="https://github.com/sachin778899/Salary-Price-Prediction"
              demoLink="https://lnkd.in/dRtpyD6k"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FRP-Bond Strength Prediction"
              description="Fibre Reinforced Plastic is something remarkable which changed the whole structural engineering. This makes the concrete light weight and very strong. But finding the bonding strength is a complex task and its time consuming is very high. So, we used the Machine Learning to reduce this drawback and FRP effectively in the real world."
              ghLink="https://github.com/sachin778899/Bond_Strength_Prediction"
              demoLink="https://lnkd.in/dPA33VDZ"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Breast Cancer Prediction"
              description="This disease can spread outside the breast through blood vessels and lymph vessels ,it depends on which cells in the breast turn into cancer. By entering the following entities we can classifies whether the person has breast cancer or not by this we can easily identified."
              ghLink="https://github.com/sachin778899/Breast-Cancer-Prediction"
              demoLink="ttps://lnkd.in/dznishme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="KNN From Scratch"
              description="K-Nearest Neighbors (KNN) is a simple yet powerful machine learning algorithm that can be implemented from scratch for classification and regression tasks. The algorithm works by identifying the k closest data points to a given point and then classifying or estimating the value of that point based on the majority class or mean value of the k nearest points."
              ghLink="https://github.com/sachin778899/KNN-from-scratch"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Website"
              description="online website created using PHP is a dynamic website that uses PHP language as the server-side scripting language, it can include dynamic features and interact with databases to store and retrieve data, allowing the website to display dynamic content, making it more engaging and interactive."
              ghLink="https://github.com/sachin778899/phpwad"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
