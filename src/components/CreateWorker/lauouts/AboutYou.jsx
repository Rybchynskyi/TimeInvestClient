import React from 'react';

const AboutYou = ({
  aboutYourself,
  handleChange
}) => {
  return (
    <div className="w-full">
      <h1 className="mt-4 mb-2 text-xl font-bold">Tell us about yourself</h1>
        <div className="relative" data-te-input-wrapper-init>
          <textarea
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            rows="4"
            value={aboutYourself}
            onChange={(e) => handleChange('aboutYourself', e.target.value)}
            placeholder="Example label"/>
          <label
            htmlFor="exampleFormControlInput1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Tell us about yourself
          </label>
        </div>
        <small className="text-gray-500">
          Write how you can be useful to other people. This will certainly increase the desire to work with you
        </small>
    </div>
  );
};

export default AboutYou;