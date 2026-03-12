


const Footer = () => {
  return (
    <footer className="bg-primary-dark rounded-base shadow-xs border-2 border-default border-black w-full">
      <div className="text-white/60 w-full mx-auto px-16 py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#"className="text-primary font-black italic text-3xl tracking-wide">
            Cafe<span className="text-white">IN</span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">
          © 2026{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CafeIN
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
