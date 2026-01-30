function Features() {
  return (
    <div className="maxWidth pt-15">
      <span className="text-text-tertiary">
        <ion-icon className="" name="remove-outline"></ion-icon>
      </span>
      <h2 className=" text-text-primary text-4xl fontHeading mt-10">
        We're different
      </h2>
      <div className="flex gap-5 justify-between mt-9">
        <div>
          <img src="/images/icon-snappy-process.svg" className="w-14 h-14" />
          <h3 className="text-text-primary text-[1.2rem] fontHeading font-normal mt-5">
            Snappy Process
          </h3>
          <p className="text-text-secondary text-[0.9rem] mt-4">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </div>
        <div>
          <img src="/images/icon-affordable-prices.svg" className="w-14 h-14" />
          <h3 className="text-text-primary text-[1.2rem] fontHeading font-normal mt-5">
            Affordable Prices
          </h3>
          <p className="text-text-secondary text-[0.9rem] mt-4">
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible
          </p>
        </div>
        <div>
          <img src="/images/icon-people-first.svg" className="w-14 h-14" />
          <h3 className="text-text-primary text-[1.2rem] fontHeading font-normal mt-5">
            People First
          </h3>
          <p className="text-text-secondary text-[0.9rem] mt-4">
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
