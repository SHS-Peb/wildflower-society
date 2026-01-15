import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MONTHS = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec",
];

const EVENTS_BY_MONTH = {
  Jan: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Feb: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Mar: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Apr: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  May: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Jun: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Jul: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Aug: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Sep: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Oct: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Nov: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
  Dec: [
    {
       title: "Coming Soon!",
    //   date: "Jan",
    //   time: "4:30pm",
    //   location: "Parramatta Park",
    //   description: "",
    //   linkLabel: "View details",
    //   linkUrl: "#",
    },
  ],
};

export default function Events() {
  const [openMonth, setOpenMonth] = useState(null);

  const monthEvents = useMemo(() => {
    if (!openMonth) return [];
    return EVENTS_BY_MONTH[openMonth] ?? [];
  }, [openMonth]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenMonth(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section
      id="events"
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
        <h2 className="about-title mb-6">Events</h2>

        <p className="about-text mb-8">
          Click a month to view upcoming events.
        </p>

        {/* Month grid */}
        <div className="grid grid-cols-3 gap-x-10 gap-y-8 place-items-center">
          {MONTHS.map((m) => (
            <button
              key={m}
              onClick={() => setOpenMonth(m)}
              className="
                w-[170px] h-[68px]
                rounded-[16px]
                bg-white/20
                backdrop-blur-md
                border border-white/35
                shadow-[0_10px_25px_rgba(0,0,0,0.10)]
                text-purple-700
                font-perandory text-xl tracking-wide
                transition
                hover:bg-white/28 hover:scale-[1.02]
                active:scale-[0.99]
              "
            >
              {m}
            </button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {openMonth && (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-modal="true"
              role="dialog"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/35"
                onClick={() => setOpenMonth(null)}
              />

              {/* Panel */}
              <motion.div
                className="
                  relative w-full max-w-lg
                  rounded-2xl
                  bg-white/85 backdrop-blur-md
                  border border-black/10
                  shadow-[0_30px_90px_rgba(0,0,0,0.25)]
                  p-6
                  text-left
                "
                initial={{ y: 18, scale: 0.98, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 18, scale: 0.98, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-800">
                      {openMonth} Event
                    </h3>
                  </div>

                  <button
                    onClick={() => setOpenMonth(null)}
                    className="
                      w-9 h-9 rounded-full
                      border border-black/10
                      hover:bg-black/5 transition
                      text-neutral-700
                    "
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  {monthEvents.length === 0 ? (
                    <div className="rounded-xl border border-black/10 bg-white/60 p-4">
                      <p className="text-neutral-700">
                        No events added for {openMonth} yet.
                      </p>
                      <p className="text-sm text-neutral-500 mt-1">
                        Add an event inside{" "}
                        <code className="text-xs">EVENTS_BY_MONTH</code>.
                      </p>
                    </div>
                  ) : (
                    monthEvents.map((ev, idx) => (
                      <div
                        key={`${ev.title}-${idx}`}
                        className="rounded-xl border border-black/10 bg-white/60 p-4"
                      >
                        <p className="text-lg font-semibold text-purple-800">
                          {ev.title}
                        </p>

                        <p className="text-sm text-neutral-700 mt-1">
                          {ev.date}
                          {ev.time ? ` • ${ev.time}` : ""} • {ev.location}
                        </p>

                        {ev.description && (
                          <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                            {ev.description}
                          </p>
                        )}

                        {ev.linkUrl && (
                          <a
                            href={ev.linkUrl}
                            className="inline-block mt-3 text-sm text-purple-700 hover:opacity-70 transition"
                          >
                            {ev.linkLabel ?? "Learn more"}
                          </a>
                        )}
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setOpenMonth(null)}
                    className="
                      px-4 py-2 rounded-xl
                      bg-purple-700 text-white
                      hover:opacity-90 transition
                    "
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
