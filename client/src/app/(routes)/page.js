import {
  Instagram,
  Youtube,
  PinIcon,
  InstagramIcon,
  Star,
  X,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF2E6]">
      {/* Top Banner */}
      <div className="relative bg-[#1D1B4B] text-white text-center py-2 text-sm">
        <span>Printed Hard Cover of your book available for only 29.90$</span>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2"
          aria-label="Close banner">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#1D1B4B]">
            <a
              href="#"
              className="hover:underline">
              Best Seller: Print and Audio
            </a>
            <a
              href="#"
              className="hover:underline">
              About Us
            </a>
            <a
              href="#"
              className="hover:underline">
              Testimonials
            </a>
            <a
              href="#"
              className="hover:underline">
              Pricing
            </a>
            <a
              href="#"
              className="hover:underline">
              Our Features
            </a>
          </div>

          <div className="text-center text-2xl font-bold text-[#1D1B4B]">
            Scarlett Panda
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#1D1B4B] hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-[#1D1B4B] hover:opacity-80">
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-[#1D1B4B] hover:opacity-80">
                <PinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-[#1D1B4B] hover:opacity-80">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
            <button className="rounded-full bg-[#1D1B4B] px-6 py-2 text-white hover:bg-[#2d2974] transition-colors">
              Generate your story
            </button>
          </div>
        </nav>
      </header>

      {/* Section 1 */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Child with magical unicorn"
              className="rounded-3xl"
            />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="mb-8 text-4xl font-bold leading-tight text-[#1D1B4B] md:text-5xl lg:text-6xl">
              Personalized AI-Powered Books: Inspiring Growth and Imagination
              for Your Child
            </h1>
            <button className="rounded-full bg-[#1D1B4B] px-8 py-4 text-lg text-white hover:bg-[#2d2974] transition-colors">
              Start Your Story!
            </button>
            <p className="mt-4 text-sm text-gray-600">
              No credit card required
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="mb-8 text-4xl font-bold leading-tight text-[#1D1B4B] md:text-5xl lg:text-6xl">
              Empowering Young Minds with Personalized Stories: Tailored Books
              to Foster Confidence and Curiosity.
            </h1>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Child with magical unicorn"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1D1B4B]">
            Why Choose Scarlett Panda?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "AI-Powered Stories",
                description:
                  "Create unique, personalized stories using advanced AI technology in just seconds.",
              },
              {
                title: "Beautiful Illustrations",
                description:
                  "Each story comes with stunning, custom illustrations that bring your tale to life.",
              },
              {
                title: "Print & Digital",
                description:
                  "Get your story in both digital format and beautiful printed hardcover.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFF2E6] p-6 rounded-lg">
                <h3 className="mb-4 text-xl font-bold text-[#1D1B4B]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1D1B4B]">
            What Our Users Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-current"
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "Amazing experience! The stories are so personal and engaging.
                  My children love them!"
                </p>
                <p className="font-semibold text-[#1D1B4B]">Happy Parent</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1D1B4B] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Create Your Story?
          </h2>
          <p className="mb-8 text-lg">
            Start your journey with Scarlett Panda today!
          </p>
          <button className="rounded-full bg-white px-8 py-4 text-lg text-[#1D1B4B] hover:bg-gray-100 transition-colors">
            Start Creating Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1B4B] py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Scarlett Panda</h3>
              <p className="text-sm opacity-80">
                Creating magical stories for children around the world.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Legal</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:opacity-80">
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="hover:opacity-80">
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Pinterest"
                  className="hover:opacity-80">
                  <PinIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="hover:opacity-80">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>
              &copy; {new Date().getFullYear()} Scarlett Panda. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
