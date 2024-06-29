import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className=" flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="sm:w-7/12">
          <div className="text-3xl font-bold">
            Send me an{' '}
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            Email
            </span>
          </div>
          <p className="mt-3 text-gray-300">
            If you want to contact me or know more about me, send me an email here. 
            See you! 🤠
          </p>
        </div>
        <div className="w-full sm:w-5/12">
          <form className="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
            <input className="w-full appearance-none bg-slate-800 focus:outline-none" />
            <button
              className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto py-6">
        <div className="border-t border-gray-600 pt-5">
          <div className="text-sm text-gray-200">
            © Copyright{' '}
            <a
              className="text-cyan-400 hover:underline"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              César Navaroo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
