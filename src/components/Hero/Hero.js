import img from "../../images/illustration-intro.png";
const Hero = () => {
  return (
    <section
      id="hero"
      class="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
    >
      {/* <!-- Hero Container --> */}
      <div class="container mx-auto px-6 text-center w-[400px] md:w-[600px] md:pt-20 pb-52">
        <img src={img} alt="" class="mx-auto" />
        <h1 class="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p class="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button class="transform duration-500 px-12 py-3  rounded-full  bg-accentCyan hover:scale-95  ">
          Get Started
        </button>
      </div>
    </section>
  );
};
export default Hero;
