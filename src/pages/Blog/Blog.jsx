import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: 'landscape',
};

const Blog = () => {
  return (
    <div>
      <h6 className="ms-5">Want to Download this page as PDF?</h6>
        <Pdf targetRef={ref} filename="ChefVibes-Blog.pdf" options={options} x={.5} y={.5} scale={0.8}>
        {({ toPdf }) => <button className="bg-warning ms-5" onClick={toPdf}>Generate PDF</button>}
      </Pdf>
      
      <div ref={ref}>
    <Container className="mx-auto">
      <Row>
        <Col className="text-center mb-5">
          <div className="text-center">
            <h2>Question & Answer</h2>
          </div>
        </Col>
      </Row>
      <Row>
     
      <Col md={10} className="mb-5">
          <h4>
            Q: Tell us the differences between uncontrolled and controlled
            components.
          </h4>
          <p>
            When building forms in React, you can choose between two approaches:
            controlled and uncontrolled components. <br />
            <br />
            Uncontrolled components are basically inputs that manage their own
            state. You don't have to write any code to update or retrieve their
            values. Instead, you rely on the DOM to keep track of the state of
            the form elements. This means that you don't need to write a lot of
            code, but you give up some control over the form. <br />
            <br />
            On the other hand, controlled components are inputs that are managed
            by React state. You write the code to update and retrieve their
            values, which means that you have more control over the form.
            However, writing this code can be a bit more complex than using
            uncontrolled components. <br />
            <br />
            In general, you should use controlled components if you need to
            validate or manipulate form data before submitting it, or if you
            need to synchronize form data with other parts of your application.
            If you don't need this level of control, or if you want to write
            less code, you can use uncontrolled components.
          </p>
          <br />
          <br />
          <h4>Q: How to validate React props using PropTypes?</h4>
          <p>
            React components can receive data through their props. It's
            important to validate these props to ensure that they have the
            correct type and structure. Luckily, React provides a built-in tool
            called PropTypes to help us with this. <br />
            <br />
            PropTypes can also be used to validate more complex data types like
            arrays and objects, as well as custom data types. Using PropTypes is
            a great way to catch bugs early and improve the maintainability of
            your code. So, don't forget to validate your props!
          </p>
          <br />
          <br />
          <h4>Q: Tell us the difference between nodejs and express js.</h4>
          <p>
            Node.js is an open-source, cross-platform JavaScript runtime
            environment that allows developers to build server-side applications
            using JavaScript. With Node.js, developers can write server-side
            applications using JavaScript, which is a language that is familiar
            to most frontend developers.
            <br />
            <br />
            Express.js, on the other hand, is a popular web application
            framework for Node.js. It is built on top of Node.js and provides a
            simpler and more streamlined way to build web applications and APIs.
            Express.js offers a variety of features and tools that make it
            easier to handle HTTP requests and responses, route URLs, and manage
            middleware.
            <br />
            <br />
            Think of Node.js as the foundation or building block of your
            server-side application, and Express.js as the tool that helps you
            build it faster and more efficiently. While Node.js provides the
            runtime environment to execute your server-side JavaScript code,
            Express.js provides a set of APIs and middleware that help you
            handle requests and responses, manage sessions and cookies, and so
            on.
            <br />
            <br />
            In summary, Node.js is a runtime environment that allows you to
            write server-side JavaScript code, while Express.js is a framework
            that runs on top of Node.js and provides a simpler and more
            streamlined way to build web applications and APIs.
          </p>
          <br />
          <br />
          <h4>
            Q: What is a custom hook, and why will you create a custom hook?
          </h4>
          <p>
            In React, a custom hook is a JavaScript function that starts with
            the word use and lets you extract some common logic from a
            component. Custom hooks allow you to reuse that logic across
            different components without duplicating the code.
            <br />
            <br />
            Creating a custom hook is useful when you have complex logic that
            needs to be shared among different components. For example, if you
            have a form with several input fields that need to be validated, you
            can create a custom hook that handles the validation logic. Then,
            you can reuse that hook in different forms throughout your
            application, without having to rewrite the validation code every
            time.
            <br />
            <br />
            Custom hooks can also be used to encapsulate the logic of working
            with external APIs, managing state, handling side effects, and more.
            <br />
            <br />
            Overall, custom hooks help you write cleaner, more modular code,
            making it easier to maintain and scale your application over time.
          </p>
        </Col>
      
      </Row>
    </Container>
    </div>
    </div>
   
  );
};

export default Blog;