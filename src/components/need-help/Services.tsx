import Link from "next/link";

const servicesList = [
  { icon: "🌮", name: "Food & Water" },
  { icon: "🚑", name: "Ambulances" },
  { icon: "🛏", name: "Blankets" },
  { icon: "🧥", name: "Clothes" },
];

const Services = () => {
  return (
    <section className="text-black">
      <ul className="flex flex-wrap items-center justify-center gap-5 px-10 sm:gap-0 sm:space-x-10 sm:px-0">
        {servicesList.map((service, idx) => (
          <Link
            href={`/need-help/continue/${service.name}`}
            key={`${service.name}-${idx}`}
          >
            <li>
              <button
                className={`${
                  idx === 0 || idx === 3 ? "bg-red-500" : "bg-green-600"
                } flex h-[120px] w-[120px] flex-col items-center justify-center space-y-3 rounded-lg text-center `}
              >
                <span className="text-4xl">{service.icon}</span>
                <span className="text-white">{service.name}</span>
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Services;
