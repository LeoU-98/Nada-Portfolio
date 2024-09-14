import myImage from '../images/myPic/pic3.jpg';
import bannerBg from '../assets/img/banner-bg.png';
import CV from '../utils/CV.pdf';
import caseStudy from '../utils/caseStudy.pdf';
import 'animate.css';

function Hero() {
  return (
    <section
      className="px-4 pb-[70px] pt-12 md:pt-[100px] lg:pt-[150px]"
      id="home"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-10 py-12 text-white sm:flex-row sm:gap-4 lg:justify-between lg:gap-20 xl:max-w-screen-xl">
        <div className="flex flex-col items-center sm:items-start">
          <h1
            className={` ${window.innerWidth > 640 && 'animate__animated animate__bounceInDown animate__slow'} mt-8 h-12 text-3xl sm:text-2xl md:h-14 md:text-4xl lg:text-5xl 2xl:h-16`}
          >
            Hi, I&apos;m Nada Mohamed
          </h1>
          <p
            className={`${window.innerWidth > 640 && 'animate__animated animate__bounceInLeft animate__slow'} lg max-w-[500px] text-balance text-center text-sm sm:text-left md:mt-3 lg:text-lg`}
          >
            A junior marketing professional with over 1 year of experience in
            marketing agencies and corporate settings across Egypt and the GCC
            region. Specializing in marketing performance, media buying,
            e-commerce development, and branding, I&apos;ve consistently driven
            ROI through innovative strategies and meticulous data analysis.
          </p>
          <div className="mt-5 max-w-[400px] rounded-xl bg-[#121212] p-2">
            <h2 className="text-sm">Education :</h2>
            <p className="flex items-center justify-between gap-5 text-nowrap text-sm">
              <span>Bachelor Degree of Arts Cairo University</span>
              <span className="text-xs text-yellow-500">2019 - 2023</span>
            </p>
          </div>
          <div className="mt-5 flex gap-5">
            <a
              href={CV}
              download
              className="rounded-full bg-violet-800 px-4 py-2 text-xs font-semibold !leading-[normal] text-white duration-300 hover:bg-black sm:text-sm"
            >
              Download CV
            </a>
            <a
              href={caseStudy}
              download
              className="rounded-full bg-violet-800 px-4 py-2 text-xs font-semibold !leading-[normal] text-white duration-300 hover:bg-black sm:text-sm"
            >
              Case Study
            </a>
          </div>
        </div>
        <div className="col-start-2 h-72 w-56 overflow-hidden rounded-xl sm:h-60 sm:w-48 md:h-80 md:w-64">
          <img src={myImage} alt="Nada Mohamed" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
