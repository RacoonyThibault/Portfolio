export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center flex-wrap gap-y-4 space-x-4 sm:space-x-6">
        <a
          href="https://x.com/FregierThibault"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transform transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 tablet:w-12 tablet:h-12 sm:w-20 sm:h-20"
            fill="url(#gradient-twitter)"
          >
            <defs>
              <linearGradient id="gradient-twitter" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path d="M24 4.557c-.883.39-1.833.654-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.918 2.203-4.918 4.917 0 .39.045.765.13 1.124-4.083-.205-7.697-2.159-10.124-5.134-.422.722-.664 1.561-.664 2.475 0 1.71.87 3.213 2.188 4.096-.807-.025-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.381 3.946 4.829-.413.111-.848.171-1.296.171-.317 0-.626-.031-.927-.087.627 1.956 2.445 3.379 4.604 3.419-1.68 1.316-3.808 2.1-6.102 2.1-.395 0-.785-.023-1.17-.069 2.176 1.396 4.765 2.21 7.548 2.21 9.051 0 14-7.497 14-13.986 0-.213-.004-.425-.014-.637.962-.689 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/thibaultfregier/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transform transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 tablet:w-12 tablet:h-12 sm:w-20 sm:h-20"
            fill="url(#gradient-linkedin)"
          >
            <defs>
              <linearGradient id="gradient-linkedin" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.285c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.966 0 1.75.79 1.75 1.764s-.784 1.764-1.75 1.764zm13.5 10.285h-3v-4.635c0-1.108-.023-2.533-1.543-2.533-1.544 0-1.781 1.207-1.781 2.456v4.712h-3v-9h2.884v1.233h.041c.402-.762 1.381-1.564 2.843-1.564 3.041 0 3.604 2.003 3.604 4.605v4.726z" />
          </svg>
        </a>
        <a
          href="https://github.com/RacoonyThibault/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transform transition duration-300 hover:scale-110 hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 tablet:w-12 tablet:h-12 sm:w-20 sm:h-20"
            fill="url(#gradient-github)"
          >
            <defs>
              <linearGradient id="gradient-github" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.754-1.333-1.754-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.465-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.625-5.479 5.921.43.37.823 1.096.823 2.21v3.285c0 .321.216.694.825.576 4.765-1.587 8.203-6.084 8.203-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
