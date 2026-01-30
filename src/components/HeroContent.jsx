function HeroContent() {
  return (
    <div className="maxWidth flex gap-17 justify-center pt-15">
      <div>
        <span className="text-text-tertiary">
          <ion-icon className="" name="remove-outline"></ion-icon>
        </span>
        <h1 className="text-text-tertiary text-5xl fontHeading mt-10">
          Humanizing your insurance.
        </h1>
        <p className="text-text-tertiary text-[0.7rem] leading-relaxing mt-2.5">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="bodyBtn mt-4.5">View plans</button>
      </div>
      <img
        src="/images/image-intro-desktop.jpg"
        alt="introDesktopImage"
        className="h-[80vh] w-200"
      />
    </div>
  );
}

export default HeroContent;
