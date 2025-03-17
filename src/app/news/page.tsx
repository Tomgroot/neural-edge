// pages/news.tsx

import Navbar from "@/components/Navbar";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Launch of Neural Edge AI Machine",
      date: "March 17, 2024",
      summary:
          "We are excited to announce the official launch of our on-premise AI workstation, " +
          "specifically built to cater to businesses with data privacy concerns.",
    },
  ];

  return (
      <div>
        <Navbar></Navbar>

        {/* Header Section */}
        <header className="relative min-h-[50vh] flex flex-col justify-center bg-gradient-to-br from-green via-blue to-purple text-white">
        <div className="absolute top-0 left-0 right-0 p-4 z-10">
            <Navbar fixed={false}></Navbar>
        </div>
          <div className="text-center max-w-3xl mx-auto px-4 z-10">
            <h1 className="text-5xl font-black mb-4 drop-shadow-lg">News & Updates</h1>
            <p className="text-xl drop-shadow-lg">Stay informed about the latest developments at Neural Edge.</p>
          </div>
        </header>

        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <ul className="space-y-12">
              {newsItems.map((item) => (
                  <li key={item.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
                    <time className="text-sm text-gray-400">{item.date}</time>
                    <p className="mt-4 text-lg">{item.summary}</p>
                  </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="py-8 text-gray-300">
          <div className="text-center">
            <p>
              <a href="mailto:info@neuraledge.nl" className="underline">
                info@neuraledge.nl
              </a>{" "}
              - Eindhoven, The Netherlands
            </p>
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Neural Edge</p>
            <a href="https://linkedin.com/company/neural-edge" target="_blank">
              <img src="/linked-in.png" className="w-8 inline-block mt-4" alt="LinkedIn" />
            </a>
          </div>
        </footer>
      </div>
  );
}
