function HeroContent() {
  return (
    <div className="maxWidth flex gap-5 justify-center pt-15">
      <div>
        <span className="text-text-tertiary">
          <ion-icon className="" name="remove-outline"></ion-icon>
        </span>
        <h1 className="text-text-tertiary text-[5.85rem] leading-20 fontHeading mt-8">
          Humanizing your insurance.
        </h1>
        <p className="text-text-tertiary/90 text-[1.2rem] leading-relaxed mt-8">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="bodyBtn mt-9">View plans</button>
      </div>
      <img
        src="/images/image-intro-desktop.jpg"
        alt="introDesktopImage"
        className="h-150 w-200"
      />
    </div>
  );
}

export default HeroContent;
