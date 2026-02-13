import { Link } from "react-router-dom";

function About() {
  return (
    <section className="maxWidth bg-bg-primary mt-25 py-15 px-20 max-[1100px]:py-12 max-[1100px]:px-13 max-[600px]:py-15 max-[600px]:px-15 max-[325px]:px-25">
      <div className="flex justify-between items-center max-[950px]:flex-col">
        <h2 className="text-text-tertiary text-[4rem] leading-15 fontHeading w-140 max-[1100px]:text-[3.2rem] max-[950px]:text-center max-[600px]:text-[2.6rem] max-[600px]:leading-12 max-[600px]:w-80 max-[325px]:text-[2.4rem] max-[325px]:leading-10">
          Find out more about how we work
        </h2>
        <Link>
          <button className="bodyBtn cursor">How we work</button>
        </Link>
      </div>
    </section>
  );
}

export default About;
