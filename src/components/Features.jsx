import Image from "./Image";

function Features() {
  return (
    <div className="maxWidth ">
      <div className="w-47 h-0.5 bg-text-secondary" />
      <h2 className=" text-text-primary text-[5rem] fontHeading mt-10 max-[950px]:text-[3.8rem] max-[750px]:text-[3.3rem]">
        We're different
      </h2>
      <div className="flex gap-5 justify-between mt-11 max-[600px]:flex-col max-[600px]:text-center">
        <div className="featureResponsive">
          <Image
            src="/images/icon-snappy-process.svg"
            alt="icon-snappy"
            className="w-16 h-16"
          />
          <h3 className="featureHeader fontHeading">Snappy Process</h3>
          <p className="featureText">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </div>
        <div className="featureResponsive">
          <Image
            src="/images/icon-affordable-prices.svg"
            alt="icon-affordable-prices"
            className="w-16 h-16"
          />
          <h3 className="featureHeader fontHeading">Affordable Prices</h3>
          <p className="featureText">
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible
          </p>
        </div>
        <div className="featureResponsive">
          <Image
            src="/images/icon-people-first.svg"
            alt="icon-people-first"
            className="w-16 h-16"
          />
          <h3 className="featureHeader fontHeading">People First</h3>
          <p className="featureText">
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
