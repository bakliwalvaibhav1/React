const Content = ({ className }) => {
  return (
    <div className={`${className}`}>
      <span className="font-headingFont text-lg md:text-xl">I build digital solutions for the modern world.</span>
      <br />
      <p className="my-2 text-sm md:text-base">
        Fueled by a passion for technology and creativity, I specialize in crafting innovative solutions that redefine possibilities and drive success in the digital age.
        <br />
        <br />
        <span>
          I would love to hear from you. Whether it&apos;s a project, job opportunity, or just a chat. <br className="hidden md:block lg:hidden" />
          Feel free to{" "}
          <a href="#Connect" className="underline decoration-teal-600 underline-offset-2 text-base md:text-lg">
            contact me.
          </a>
        </span>
      </p>
    </div>
  );
};

export default Content;
