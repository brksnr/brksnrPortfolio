import { useForm, ValidationError } from '@formspree/react';

export function Form() {
  const [state, handleSubmit] = useForm("mrbeerne");

  if (state.succeeded) {
    return <div className='flex justify-center flex-col items-center py-30 gap-5'>
        <p className='font-bold text-5xl text-center '>Thanks for joining!</p>
        <img src='images/chillguy.jpg' className='w-60 h-40'/>
    </div>;
  }

  return (
    <div id="form" className="bg-[url(/images/arkaplan.png)] flex justify-center items-center min-h-screen bg-gray-100 flex-col gap-20 py-30">
      <div className="flex flex-col items-center justify-center gap-10 mx-5">
        <h1 className="font-bold text-5xl">Contact</h1>
        <div className="w-20 h-2 button-color rounded"></div>
        <div className="text-center flex descripton-color font-medium leading-loose">
          <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-110 md:w-200 xl:w-220 bg-white shadow-lg rounded-lg p-10 flex flex-col gap-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border border-gray-300 skill-color font-semibold rounded-md bg-gray-100 focus:outline-none focus:border-transparent"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border border-gray-300 skill-color font-semibold rounded-md bg-gray-100 focus:outline-none focus:border-transparent"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            rows="4"
            className="w-full min-h-70 px-4 py-2 border border-gray-300 skill-color font-semibold rounded-md bg-gray-100 focus:outline-none focus:border-transparent"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="flex justify-center md:justify-end">
          <button
            type="submit"
            disabled={state.submitting}
            className="border rounded-md w-52 h-12 button-color transition transform hover:-translate-y-2 duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
