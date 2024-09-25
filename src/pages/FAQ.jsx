import React from "react";
import Footer from "../components/Footer";

const FAQ = () => {
  const faqData = [
    {
      question: '1. What is React.js and the concept of "components" in React?',
      answer:
        'React.js is a JavaScript library for building user interfaces. The concept of "components" in React is the idea of breaking down the UI into reusable, encapsulated pieces. Components are independent, self-contained units of functionality that can be composed together to create complex UIs.',
    },
    {
      question: "2. What is JSX in React, and how does it work?",
      answer:
        "JSX is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code in their JavaScript files, which is then transpiled into regular JavaScript code that the browser can understand. JSX provides a more intuitive and readable way to structure and compose React components.",
    },
    {
      question:
        "3. What is the Virtual DOM, and how does React use it to optimize performance?",
      answer:
        'The Virtual DOM is a lightweight copy of the actual DOM kept in memory. React uses it to optimize performance by minimizing direct manipulations of the real DOM. When state changes occur, React first updates the Virtual DOM, compares it with the previous version (a process called "diffing"), and then efficiently updates only the necessary parts of the real DOM. This approach significantly reduces the number of expensive DOM operations, resulting in faster rendering and improved application performance.',
    },
    {
      question:
        '4. Explain the concept of "props" in React and how they are used.',
      answer:
        "Props (short for properties) are a way to pass data from parent components to child components in React. They are read-only and help make components reusable and dynamic. Props are passed to components like function arguments and can include any JavaScript value type, including objects, arrays, and functions. Child components can then use these props to render dynamic content or trigger actions in the parent component.",
    },
    {
      question:
        '5. What is "state" in React, and how does it differ from props?',
      answer:
        "State in React represents the internal data of a component that can change over time. Unlike props, which are passed down from parent components and are read-only, state is managed within the component itself and can be modified using setState or hooks. When state changes, React re-renders the component to reflect the new state. State is used for data that is expected to change during the component's lifecycle, while props are used for passing data and callbacks down the component tree.",
    },
    {
      question:
        "6. Explain the useState hook and provide an example of how it is used.",
      answer:
        "The useState hook is a function provided by React to add state management to functional components. It returns an array with two elements: the current state value and a function to update it.",
    },
    {
      question:
        "7. What is the purpose of the useEffect hook in React, and when would you use it?",
      answer:
        "The useEffect hook in React is used for handling side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. useEffect runs after every render by default, but can be configured to run only when certain values change. You would use useEffect when you need to: 1. Perform data fetching or API calls 2. Set up subscriptions or event listeners 3. Manually change the DOM 4. Synchronize a component with an external system.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <ul className="space-y-6">
          {faqData.map((item, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">{item.question}</h2>
              <p className="text-gray-600">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
