import { Card } from "@/components/Card"

export default function Home() {
  return (
    <div className="min-h-screen bg-(--background-color-dynamic) text-(--body-color-dynamic)">
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Lorem Ipsum Dolor Sit
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Consectetur Adipiscing Elit
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 leading-relaxed opacity-80">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="leading-relaxed opacity-80">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div>
              <p className="mb-4 leading-relaxed opacity-80">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p className="leading-relaxed opacity-80">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-24">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Tempor Incididunt
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Dolor Amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
            />
            <Card
              title="Vestibulum"
              description="Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit."
            />
            <Card
              title="Pellentesque"
              description="Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada."
            />
            <Card
              title="Curabitur"
              description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            />
            <Card
              title="Praesent"
              description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada."
            />
            <Card
              title="Convallis"
              description="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Dolore Magna Aliqua?
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </main>
    </div>
  )
}
