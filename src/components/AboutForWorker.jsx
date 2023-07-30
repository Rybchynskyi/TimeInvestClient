import React, {useEffect} from "react";
import { Collapse, initTE, } from "tw-elements";

const AboutForWorker = () => {

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <div>
      <div className="text-center text-3xl font-bold ">Convert your free time into good income</div>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="flex items-center rounded bg-danger-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-danger-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>
            Log in to create a profile
        </button>
      </div>

      <img
        src="../images/createPromo.png"
        className="w-full mb-36"
        alt="Sample image"/>

      <div className="flex justify-around mb-36">
        <div className="w-1/3 px-3">
          <h1 className="text-xl font-bold mb-2">Payment guarantee</h1>
          <p className="text-gray-600">Payment is made on the platform before the order is fulfilled. And you get paid after the work is done.
            This guarantees one hundred percent payment.</p>
        </div>
        <div className="w-1/3 px-3">
          <h1 className="text-xl font-bold mb-2">Hourly payment</h1>
          <p className="text-gray-600">You choose the price per hour of your work based on our recommendations.
            You can change the price at any time.</p>
        </div>
        <div className="w-1/3 px-3">
          <h1 className="text-xl font-bold mb-2">Work in your free time</h1>
          <p className="text-gray-600">Set the hours you can allocate to your work. Change your schedule as needed.</p>
        </div>
      </div>

      <div className="flex justify-around mb-36">
        <div className="w-1/3 px-3">
          <h1 className="text-3xl mb-2">Frequently asked questions</h1>
        </div>
        <div className="w-2/3 px-3">
          <div id="accordionExample">
            <div
              className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] text-xl"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  What if the client doesn't pay?
                  <span
                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="!visible"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                  <p>If a customer fails to pay for the services or time that was provided, it can create problems for the time rental service. There are several possible ways to manage this situation:</p>
                  <p>- Prepayment: Require customers to make an upfront payment or deposit before receiving services or accessing time. This will provide some level of assurance that the clients who book the services actually intend to use them.</p>
                  <p>- Upfront payment: Require upfront payment or a deposit before receiving services or access to time.</p>
                  <p>- Online payments: Use an online payment system that allows for transactions via credit cards or electronic payment systems. This can reduce the risk of non-payment as the payment is made before the service is received.</p>
                  <p>- Agreements and contracts: Enter into agreements or contracts with clients that clearly define the terms of service and payment. Specify in the agreements the rules of cancellation or refund if the client fails to make payment.</p>
                </div>
              </div>
            </div>
            <div
              className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id="headingTwo">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] text-xl"
                  type="button"
                  data-te-collapse-init
                  data-te-collapse-collapsed
                  data-te-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  What services can I provide?
                  <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingTwo"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                  <p>You can provide a variety of services depending on your professional experience, skills, and interests. Here are some common examples of services people typically provide:</p>
                  <p>- Consulting: Providing professional advice in various fields such as business, finance, marketing, law, education, etc.</p>
                  <p>- Repair and maintenance: Providing repair and maintenance services for electronics, home appliances, automobiles, building structures, etc.</p>
                  <p>- Web development and design: Creation of websites, applications, graphic design, logo design.</p>
                  <p>- Training and courses: Conducting educational courses, trainings, webinars on various subjects.</p>
                </div>
              </div>
            </div>
            <div
              className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button
                  className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none text-xl"
                  type="button"
                  data-te-collapse-init
                  data-te-collapse-collapsed
                  data-te-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
                  What if the client says I didn't get in touch?
                  <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingThree"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                  <p>If a customer claims that you did not get back to them or did not provide a service, how you handle this situation will depend on how you interact with the customer and what evidence you have that you provided the service.</p>
                  <p>Here are some tips on how you can handle this situation:</p>
                  <p>- Record the agreement: Always have an agreement or contract with your client that clearly states the terms of service, deadlines, payment, and other important details. This will help avoid misunderstandings in the future.</p>
                  <p>- Documentation: Keep documentation of your communication with the client, such as email correspondence, messages, letters, etc. This will provide you with evidence of your attempts to reach out and communicate.</p>
                  <p>- Listen to the customer: If the customer claims that you have not been in touch, listen to their concerns and problems. Express empathy and willingness to resolve the situation.</p>
                  <p>- Response: Respond to customer requests as soon as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-3xl font-bold mb-12">Don't waste your time, make money on it</div>
      <div className="flex justify-center mt-4 mb-36">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="flex items-center rounded bg-danger-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-danger-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
          Log in to create a profile
        </button>
      </div>
    </div>
  )
}

export default AboutForWorker
