import { DynamicCard } from "@/components/dynamic-colors/DynamicCard"
import DynamicColorsProvider from "@/components/dynamic-colors/DynamicColorsProvider"
import ScrollToDark from "@/components/dynamic-colors/ScrollToDark"
import Link from "next/link"

export default function Home() {
  return (
    <DynamicColorsProvider>
      <div className="min-h-screen bg-(--background-color-dynamic) text-(--body-color-dynamic)">
        <main className="mx-auto max-w-6xl px-6 py-16">
          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Continous Color Change
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Link href="./trigger">
              Alternative Approach with instant change
            </Link>
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
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p className="leading-relaxed opacity-80">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div>
                <p className="mb-4 leading-relaxed opacity-80">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <p className="leading-relaxed opacity-80">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
              </div>
            </div>
          </section>

          {/* DynamicCards Section */}
          <section className="mb-24">
            <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
              Tempor Incididunt
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <DynamicCard
                title="Dolor Amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
              />
              <DynamicCard
                title="Vestibulum"
                description="Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit."
              />
              <DynamicCard
                title="Pellentesque"
                description="Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada."
              />
              <DynamicCard
                title="Curabitur"
                description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              />
              <DynamicCard
                title="Praesent"
                description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada."
              />
              <DynamicCard
                title="Convallis"
                description="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat."
              />
            </div>
          </section>
          <ScrollToDark>
            {/* Long Text Section */}
            <section className="mb-24">
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
                Quis Autem Vel Eum
              </h2>
              <p className="mb-6 leading-relaxed opacity-80">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p className="mb-6 leading-relaxed opacity-80">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.
              </p>
              <h3 className="mb-4 text-2xl font-semibold">Temporibus Autem</h3>
              <p className="mb-6 leading-relaxed opacity-80">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </section>

            {/* More DynamicCards */}
            <section className="mb-24">
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
                Nulla Facilisi Morbi
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <DynamicCard
                  title="Faucibus Turpis"
                  description="Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor."
                />
                <DynamicCard
                  title="Amet Nisl Suscipit"
                  description="Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit."
                />
                <DynamicCard
                  title="Elementum Sagittis"
                  description="Elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum."
                />
                <DynamicCard
                  title="Turpis Egestas"
                  description="Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in."
                />
              </div>
            </section>

            {/* Another Text Section */}
            <section className="mb-24">
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
                Sed Risus Pretium
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">Feugiat Nibh</h3>
                  <p className="mb-4 leading-relaxed opacity-80">
                    Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                    Mauris augue neque gravida in fermentum et sollicitudin ac
                    orci. Diam vel quam elementum pulvinar etiam non quam lacus.
                  </p>
                  <p className="leading-relaxed opacity-80">
                    Suspendisse in est ante in nibh mauris cursus mattis
                    molestie a iaculis at erat pellentesque adipiscing commodo
                    elit at imperdiet dui accumsan sit amet nulla facilisi
                    morbi.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">
                    Pellentesque Elit
                  </h3>
                  <p className="mb-4 leading-relaxed opacity-80">
                    Pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis feugiat vivamus at augue eget arcu dictum varius
                    duis at consectetur lorem donec massa sapien faucibus et
                    molestie ac.
                  </p>
                  <p className="leading-relaxed opacity-80">
                    Egestas dui id ornare arcu odio ut sem nulla pharetra diam
                    sit amet nisl suscipit adipiscing bibendum est ultricies
                    integer quis auctor elit sed vulputate mi sit amet mauris.
                  </p>
                </div>
              </div>
            </section>

            {/* Final DynamicCards Grid */}
            <section className="mb-24">
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
                Viverra Justo Nec
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <DynamicCard
                  title="Aliquet Porttitor"
                  description="Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero."
                />
                <DynamicCard
                  title="Risus Quis"
                  description="Risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus."
                />
                <DynamicCard
                  title="Gravida Dictum"
                  description="Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus."
                />
              </div>
            </section>
          </ScrollToDark>
          {/* Closing Section */}
          <section className="mb-24">
            <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
              Amet Consectetur Adipiscing
            </h2>
            <p className="mb-6 leading-relaxed opacity-80">
              Amet consectetur adipiscing elit pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Sed tempus urna et pharetra pharetra massa massa ultricies mi quis
              hendrerit dolor magna eget est lorem ipsum dolor sit amet.
            </p>
            <p className="mb-6 leading-relaxed opacity-80">
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
              vitae congue mauris rhoncus aenean vel elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant morbi.
            </p>
            <p className="leading-relaxed opacity-80">
              Tristique senectus et netus et malesuada fames ac turpis egestas
              integer eget aliquet nibh praesent tristique magna sit amet purus
              gravida quis blandit turpis cursus in hac habitasse platea
              dictumst quisque sagittis purus sit amet volutpat consequat
              mauris.
            </p>
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
    </DynamicColorsProvider>
  )
}
