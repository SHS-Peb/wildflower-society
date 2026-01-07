export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex justify-center px-6 pt-16 pb-28"
    >
      <div
        className="
          about-card
          max-w-3xl
          w-full
          text-center
          px-10
          py-12
        "
      >
        <h2 className="about-title mb-6">
          About Wildflower Society
        </h2>

        <p className="about-text mb-4">
          Wildflower Society is a gentle community created for women to connect,
          slow down, and grow friendships through shared experiences.
        </p>

        <p className="about-text">
          We host relaxed events, creative gatherings, and meaningful moments —
          designed to feel welcoming, safe, and unpressured. Come as you are.
        </p>
      </div>
    </section>
  );
}
