import Image from "next/image"

export default function BlogSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
          one-to-one customer service with robust ideas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="https://picsum.photos/id/1/200/300"
              height={240}
              width={400}
              alt="Blog post image"
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-3">Organize your digital assets with a new methodology here.</h3>
              <p className="text-gray-600 mb-6">
                Podcasting operational management inside of workflows to establish a framework seamless. Convergence
                collaboratively.
              </p>
              <div className="flex flex-wrap items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  height={40}
                  width={40}
                  alt="Author"
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Andrew Miller</p>
                  <p className="text-sm text-gray-500">CEO</p>
                </div>
                <p className="ml-auto text-sm text-gray-500">25 Apr</p>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="https://picsum.photos/id/122/200/300"
              height={240}
              width={400}
              alt="Blog post image"
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-3">Organize your digital assets with a new methodology here.</h3>
              <p className="text-gray-600 mb-6">
                Keeping your eye while performing a deep dive on the start-up mentality to derive convergence
                collaboratively.
              </p>
              <div className="flex flex-wrap items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  height={40}
                  width={40}
                  alt="Author"
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">David Munsan</p>
                  <p className="text-sm text-gray-500">UX</p>
                </div>
                <p className="ml-auto text-sm text-gray-500">25 Apr</p>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="https://picsum.photos/id/180/200/300"
              height={240}
              width={400}
              alt="Blog post image"
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-3">Organize your digital assets with a new methodology here.</h3>
              <p className="text-gray-600 mb-6">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate
                B2C.
              </p>
              <div className="flex flex-wrap items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/78.jpg"
                  height={40}
                  width={40}
                  alt="Author"
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Andrew Meller</p>
                  <p className="text-sm text-gray-500">UI</p>
                </div>
                <p className="ml-auto text-sm text-gray-500">25 Apr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
