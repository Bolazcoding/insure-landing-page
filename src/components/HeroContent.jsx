function HeroContent() {
  return (
    <div className="maxWidth flex gap-5 justify-center pt-20 max-[650px]:flex-col-reverse max-[650px]:max-w-full max-[650px]:pt-0">
      <div className="max-[650px]:text-center max-[650px]:px-10">
        {/* <hr className="mt-7 text-text-secondary w-45" /> */}
        <div className="w-47 h-0.5 bg-text-secondary max-[650px]:hidden" />
        <h1 className="text-text-tertiary text-[5.8rem] leading-20 fontHeading mt-10 max-[1100px]:text-[4.8rem] max-[1100px]:leading-17 max-[950px]:text-[3.8rem] max-[950px]:leading-18 max-[913px]:leading-15 max-[750px]:text-[3.3rem] max-[650px]:text-[4rem]">
          Humanizing your insurance.
        </h1>
        <p className="text-text-tertiary/90 text-[1.2rem] leading-relaxed mt-8 max-[1100px]:text-[1.15rem] max-[750px]:text-[1.05rem] max-[650px]:text-[1.2rem]">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="bodyBtn mt-9 cursor">View plans</button>
      </div>
      <img
        src="/images/image-intro-desktop.jpg"
        alt="introDesktopImage"
        className="h-150 w-200 object-cover max-[1100px]:h-170 max-[1100px]:w-115 max-[950px]:w-95 max-[950px]:h-155 max-[750px]:w-78 max-[650px]:hidden"
      />
      <img
        src="/images/image-intro-mobile.jpg"
        alt="introMobileImage"
        className="min-[650px]:hidden h-80 object-cover"
      />
    </div>
  );
}

export default HeroContent;
