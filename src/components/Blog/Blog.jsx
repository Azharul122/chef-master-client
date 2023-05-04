import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className='w-full bg-[#1F2937] py-5 text-center text-white'>
                <button className='bg-[#374151] px-7 py-3 rounded'>Downlod CV</button>
            </section>


            <div className="container my-24 px-6 mx-auto">


  <section className="mb-32 text-gray-800">
    <h2 className="text-3xl font-bold mb-6 pl-6">Frequently asked questions</h2>

    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingOne">
          <button
            className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
            aria-controls="flush-collapseOne">
             What is the differences between uncontrolled and controlled components?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
          aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body py-4 px-5 text-gray-500">
          In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally

          </div>
        </div>
      </div>
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
            aria-controls="flush-collapseTwo">
           How to validate React props using PropTypes?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body py-4 px-5 text-gray-500">
          validate any data we are receiving from props. But before using it we will have to import it as always in our app:
          </div>
        </div>
      </div>
      <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingThree">
          <button
            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            difference between nodejs and express js.?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body py-4 px-5 text-gray-500">
          nodejs is a programming language which is use to make back-end  service APIs  for mobile,desktop
          and expressJs is a framework which is use to simplify APIs.
          </div>
        </div>
      </div>

      <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingThree">
          <button
            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            What is a custom hook, and why will you create a custom hook?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body py-4 px-5 text-gray-500">
          Custom Hook is a function.
          .It can be reused easily, which makes the code cleaner and reduces the time to write the code.
          </div>
        </div>
      </div>
    </div>
  </section>

  
</div>
        </div>
    );
};

export default Blog;

// import React from "react";
// import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";

// import "./styles.css";
// const ref = React.createRef();

// function App() {
//   return (
//     <div classNameName="App">
//       <Pdf targetRef={ref} filename="code-example.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
//       </Pdf>
//       <div ref={ref}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
