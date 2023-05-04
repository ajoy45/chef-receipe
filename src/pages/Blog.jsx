import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
const Blog = () => {
    const ref=useRef()
    return (
        <>
        <div ref={ref}  className='grid grid-cols-1 md:grid-cols-4 px-12 mt-12'>
            <div >
                <h1 className='text-2xl'>Differences between uncontrolled and controlled components?</h1>
                <p  > <span className='text-slate-950-500 text-xl'>Uncontrolled Components</span>:
                    An uncontrolled component is one that doesn't rely on state management and is entirely controlled by the browser. The browser handles all of the user input and maintains the state of the component. Examples of uncontrolled components include native HTML elements like input, select, and textarea. Uncontrolled components are generally easier to use since they don't require explicit control over their state, but they can be more challenging to integrate into a larger application since their state is managed externally.</p>
                <p> <span className='text-slate-950-500 text-xl'>Controlled Components</span>:
                A controlled component is one that explicitly manages its own state and relies on state management to work. In a controlled component, the component's state is updated by the application code, which then re-renders the component with the updated state. Examples of controlled components include custom React components that manage their own state using props and state, and third-party components that provide their own state management APIs. Controlled components are generally more flexible and powerful than uncontrolled components, but they require more code to set up and maintain.</p>
            </div>
            <div>
                <h1 className='text-2xl'>How to validate React props using PropTypes?</h1>
                <p>React PropTypes is a library used to validate the type and shape of props passed to a component in React</p>
            </div>
            <div>
                <h1 className='text-2xl'>difference between nodejs and express js.?</h1>
                <p>Node.js is a runtime environment that allows you to run JavaScript on the server-side. It provides a set of libraries and modules that you can use to build network applications, such as web servers, APIs, and real-time communication applications. With Node.js, you can build scalable, high-performance applications that handle a large number of connections and requests.</p>
                <p>Express.js, on the other hand, is a framework for Node.js that simplifies the process of building web applications. It provides a set of features and tools that make it easier to handle HTTP requests and responses, manage routes, and work with middleware. Express.js is designed to be flexible and modular, allowing developers to build web applications of any size and complexity.</p>
            </div>
            <div>
                <h1 className='text-2xl'>What is a custom hook, and why will you create a custom hook?</h1>
                <p>custom hook is pure javascript function that have name convention use and it can be used to call hooks</p>
                <p>Custom hooks allow you to share logic between multiple components without having to repeat the same code over and over again. By creating a custom hook, you can encapsulate the logic of a specific behavior, such as fetching data, handling user input, or managing the state of a component, and then reuse that logic in multiple components.</p>
            </div>
        </div>
        <div className='text-center'>
           <ReactToPrint trigger={()=><button className='bg-green-500 px-3 py-2'>Download Pdf</button>}   content={() => ref.current}/>
        </div>
        </>
    );
};

export default Blog;