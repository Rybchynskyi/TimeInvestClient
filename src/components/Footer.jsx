import React from "react";

const Footer = () => {
    return (
      <div className="container mx-auto max-w-7xl ">
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <div className="flex justify-around">
              <div className="">
                  <h1 className="text-l font-bold mb-2">Company</h1>
                  <div><a className="text-gray-600">About the company</a></div>
                  <div><a className="text-gray-600">Contacts</a></div>
                  <div><a className="text-gray-600">Certificate of registration</a></div>
              </div>
              <div className="">
                  <h1 className="text-l font-bold mb-2">Guarantees</h1>
                  <div><a className="text-gray-600">Agreement on non-disclosure of personal data</a></div>
                  <div><a className="text-gray-600">User agreement</a></div>
                  <div><a className="text-gray-600">Offer agreement</a></div>
              </div>
              <div className="">
                  <h1 className="text-l font-bold mb-2">Support</h1>
                  <div><a className="text-gray-600">Hotline</a></div>
                  <div><a className="text-gray-600">Chat support</a></div>
                  <div><a className="text-gray-600">Ask a question</a></div>
              </div>
          </div>
          <div className="flex justify-center my-4">
              <small className="text-gray-500">
                  © Copyright. All rights reserved. Hope 2023
              </small>
          </div>
      </div>

    )
}

export default Footer
