import Head from "next/head";

const Contact = () => {
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Halo Guys for any inquiries or support. We're here to help." />
      </Head>

      <section
        id="contact"
        className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-8 items-center justify-center"
      >
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
          04. What’s Next?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold">Contact Me</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full lg:w-auto">
        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-400">

<div>
  <h3 className="text-xl font-semibold text-green-500">Address</h3>
  <p>no.110,</p>
  <p>Bandarawela,</p>
  <p>Sri Lanka</p>
</div>

<div>
  <h3 className="text-xl font-semibold text-green-500">Contact</h3>
  <p>nimnadihansijm@gmail.com</p>
  <p>+94 777 686 037</p>
</div>
</div>

          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            

            <form className="mt-8 w-full">
              <div className="mb-4">
                <label className="block mb-2 font-titleFont text-sm text-textGreen" htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-titleFont text-sm text-textGreen" htmlFor="email">E-mail address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-titleFont text-sm text-textGreen" htmlFor="message">Tell us your message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-md duration-300"
              >
                SEND
              </button>
            </form>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Contact;

