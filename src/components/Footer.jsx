export default function Footer() {
  return (
    <footer className="w-full py-10 text-center border-t border-black/5">
      <p className="text-[10px] tracking-widest uppercase text-neutral-500">
        Made by{" "}
        <a
          href="https://shannonlowe.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition"
        >
          Designed & built by Shannon Lowe 2026
        </a>
      </p>
    </footer>
  );
}
