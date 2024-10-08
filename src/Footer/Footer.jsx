function Footer() {
  return (
    <footer className="bg-[url('./footer-bg.png')] py-6 sm:py-10">
      <div className="container mx-auto flex items-center justify-center">
        <FooterLinks />
      </div>
    </footer>
  );
}

export default Footer;

function FooterLinks() {
  return (
    <ul className="flex">
      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100015980676767"
          className="z-9 group relative flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#1d4ed8] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="relative z-20 size-9 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </a>
      </li>

      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://www.instagram.com/nadaamuhmmed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#ec4899] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
      </li>
      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="mailto:nm1062000@gmail.com"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#dd4b39] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </a>
      </li>

      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nada-mohamed-83a258325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#0077b5] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>
      </li>
      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://wa.me/00201008424924"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#16a34a] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
