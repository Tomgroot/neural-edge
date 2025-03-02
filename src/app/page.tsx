// pages/index.tsx

import Iridescence from "@/components/Iridescence/Iridescence";
import ContactForm from "@/app/contact";

export default function Home() {
  return (
      <div>
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br text-white bg-black">
          <div className="text-center max-w-3xl mx-auto px-4 z-10">
            <div className="flex items-center mb-4 gap-6">
              <img src="/neural-edge.svg" alt="Neural Edge" className="w-16" />
              <h1 className="text-5xl md:text-7xl font-black">
                Neural Edge
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8">
              Private on-site AI with personal support
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

          <div className="absolute top-0 bottom-0 left-0 right-0 z-0 opacity-50">
            <Iridescence
                color={[0.5, 1, 1]}
                mouseReact={false}
                speed={0.2}
            />
          </div>

        </header>

        {/* Features / Offering Section */}
        <section id="features" className="py-32  text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Powerful AI run from your office</h3>
                <p className="mb-4">
                  We provide high‐performance AI computers installed right on your premises,
                  ensuring your data never leaves your network.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Data protection by running AI at your business</li>
                  <li>Top-tier AI machines</li>
                  <li>Custom configurations tailored to your needs</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Tailored AI tools</h3>
                <p className="mb-4">
                  The machine is set up with the AI models you need, ready to be used on your local network.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Deepseek</li>
                  <li>Models aware of your business context</li>
                  <li>PDF reading</li>
                  <li>Image generation</li>
                  <li className="text-gray-500">and much more possible...</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plans / CTA Section */}
        <section id="plans" className="py-32 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Plans & Pricing</h2>
            <div className="grid gap-8 md:grid-cols-2">

              <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex-col flex">
                <h3 className="text-2xl font-semibold mb-2">One-time purchase</h3>
                <p className="mb-6">
                  Machine is built specifically for your needs. It is pre-installed and configured with the AI models/tools of your choice
                  and ready to be used on your local business network.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-10">
                  <li>Pre-installed with AI models of your choice</li>
                  <li>Plug-and-play</li>
                </ul>
                <div className="flex-1 flex items-start gap-3 flex-col justify-end">
                  <p>
                    €2999,-
                  </p>
                  <a href="#contact" className="shiny-button">
                    Order AI machine
                  </a>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex-col flex">
                <h3 className="text-2xl font-semibold mb-2">Active support</h3>
                <p className="mb-6">
                  Ideal for businesses wanting a turnkey local AI environment.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-10">
                  <li>AI workstation installed on premise</li>
                  <li>On‐site support</li>
                  <li>Active AI upgrades</li>
                </ul>
                <div className="flex-1 flex items-start gap-3 flex-col justify-end">
                  <p>
                    €150 <span className="text-xs">/ month</span>
                  </p>
                  <a href="#contact" className="shiny-button">
                    Local AI with support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to talk?</h3>
          <p className="mb-6">Let’s discuss how we can bring on‐site AI to your business.</p>
          <div className="flex justify-center w-full flex-col items-center">
            <ContactForm />
          </div>
        </div>

        {/* Contact or Footer */}
        <footer id="contact" className="py-8 text-gray-300">
          <div className="text-center mt-8">
            <p><a href="mailto:info@neuraledge.nl" className="underline">info@neuraledge.nl</a> - Eindhoven, The Netherlands</p>
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Neural Edge</p>
          </div>
        </footer>
      </div>
  );
}
