// pages/index.tsx

import Head from 'next/head';

export default function Home() {
  return (
      <div>
        <Head>
          <title>My AI Hardware Service</title>
          <meta name="description" content="High-end AI computers for privacy-sensitive markets" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Neural Edge
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Private on-site AI deployment with world‐class support
            </p>
            <div>
              <a
                  href="#plans"
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                View Plans
              </a>
            </div>
          </div>
        </header>

        {/* Features / Offering Section */}
        <section id="features" className="py-16 bg-black text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Powerful AI Machines</h3>
                <p className="mb-4">
                  We provide high‐performance AI computers installed right on your premises,
                  ensuring your data never leaves your network.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Top-tier GPUs for intensive AI workloads</li>
                  <li>Custom configurations tailored to your needs</li>
                  <li>Scalable for model training and inference</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">On‐Site Support & Maintenance</h3>
                <p className="mb-4">
                  Our expert team handles installation and troubleshooting. We’ll keep your
                  local AI systems running optimally.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Hands‐on setup for seamless integration</li>
                  <li>Regular updates and monitoring</li>
                  <li>24/7 support for mission‐critical tasks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plans / CTA Section */}
        <section id="plans" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Plans & Pricing</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                <p className="mb-6">
                  Ideal for small businesses or dev teams wanting a turnkey local AI environment.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Single AI workstation</li>
                  <li>Basic on‐site support</li>
                  <li>Hardware upgrades available</li>
                </ul>
                <a
                    href="#contact"
                    className="block text-center bg-pink-500 hover:bg-pink-400 text-white py-3 px-6 rounded-md font-semibold"
                >
                  Get Starter
                </a>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                <p className="mb-6">
                  Built for large data science teams or mission-critical workloads requiring
                  high availability and in-depth support.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Cluster of AI servers</li>
                  <li>Priority on‐site support</li>
                  <li>Full hardware maintenance & monitoring</li>
                </ul>
                <a
                    href="#contact"
                    className="block text-center bg-purple-500 hover:bg-purple-400 text-white py-3 px-6 rounded-md font-semibold"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact or Footer */}
        <footer id="contact" className="py-8 bg-gray-900 text-gray-300">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to talk?</h3>
            <p className="mb-6">Let’s discuss how we can bring on‐site AI to your business.</p>
            <a
                href="mailto:info@neuraledge.nl"
                className="inline-block bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              info@neuraledge.nl
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Neural Edge</p>
          </div>
        </footer>
      </div>
  );
}
