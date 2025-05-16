import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto px-4 sm:px-6">
      <section className="text-center py-8">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="William Deary"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="font-raleway text-2xl sm:text-4xl font-bold mb-2">William Deary</h1>
        <h2 className="font-raleway text-xl sm:text-2xl text-gray-600 mb-6">Sabre Fencer</h2>
        <p className="mb-4 text-sm sm:text-base">I am a fencer. My discipline is sabre. I am ranked No.1 in the UK.</p>
        <p className="text-sm sm:text-base">I am the current British National Champion and Commonwealth Fencing Champion.</p>
      </section>

      <section className="flex flex-col sm:flex-row items-center gap-6 sm:space-x-8">
        <div className="flex-1">
          <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Aspiration</h2>
          <blockquote className="text-lg sm:text-xl italic border-l-4 border-blue-500 pl-4">
            "To represent GB at the Olympic games, and to win gold."
          </blockquote>
        </div>
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Olympic Rings"
          width={150}
          height={150}
          className="rounded-lg"
        />
      </section>

      <section className="flex flex-col sm:flex-row items-center gap-6 sm:space-x-8">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Olympic Ambition Programme 2016"
          width={300}
          height={200}
          className="rounded-lg w-full sm:w-auto"
        />
        <div className="flex-1">
          <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Olympic Ambition Programme 2016</h2>
          <p className="mb-4 text-sm sm:text-base">
            I was nominated by the British Olympic Association to take part in the Olympic Ambition Programme 2016. This
            meant I could be at Olympic games in Rio de Janeiro, train with the athletes and gain the experience of an
            Olympic Games to prepare me for future games by getting me used to the atmosphere before hand.
          </p>
          <p className="mb-4 text-sm sm:text-base">It was an incredible experience for which I am extremely grateful for.</p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            More details here
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">My secret to success?</h2>
        <blockquote className="text-lg sm:text-xl italic border-l-4 border-green-500 pl-4">
          "Working hard every single day, and never giving up"
        </blockquote>
      </section>

      <section className="bg-gray-100 p-4 sm:p-6 rounded-lg">
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Key Info</h2>
        <ul className="space-y-2 text-sm sm:text-base">
          <li>
            <strong>Age:</strong> 27
          </li>
          <li>
            <strong>Height:</strong> 183cm
          </li>
          <li>
            <strong>Discipline:</strong> Sabre
          </li>
          <li>
            <strong>Education:</strong> Computer Science BSc, King's College London
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 p-4 sm:p-8 rounded-lg newspaper-section">
        <h2 className="font-raleway text-2xl sm:text-3xl font-bold mb-6 text-center border-b-2 border-blue-500 pb-2">
          Achievements
        </h2>
        <div className="space-y-6 columns-1 md:columns-2 gap-6">
          <article className="break-inside-avoid mb-6">
            <h3 className="font-raleway text-lg sm:text-xl font-bold mb-2 text-blue-700">Olympic Zonal Qualifier</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              In a stunning display of skill and determination, William Deary secured his position as the Great Britain
              Sabre representative at the Olympic Zonal qualifier, finishing an impressive 3rd place. This remarkable
              achievement puts him one step closer to his Olympic dreams.
            </p>
          </article>
          <article className="break-inside-avoid mb-6">
            <h3 className="font-raleway text-lg sm:text-xl font-bold mb-2 text-blue-700">British National Championships</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              The Sportsdock in London witnessed a spectacular performance on April 13, 2019, as William Deary clinched
              the gold medal at the British National Championships. His victory solidified his status as the nation's
              top sabre fencer.
            </p>
          </article>
          <article className="break-inside-avoid mb-6">
            <h3 className="font-raleway text-lg sm:text-xl font-bold mb-2 text-blue-700">Commonwealth Fencing Championships</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Canberra, Australia became the stage for William Deary's international triumph on November 22, 2018. In a
              fierce competition against the Commonwealth's best, Deary emerged victorious, securing the gold medal and
              bringing glory to Great Britain.
            </p>
          </article>
        </div>
        <div className="mt-6 text-right">
          <Link href="/ranking" className="text-blue-600 hover:underline text-sm">
            Read more about William's achievements
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Awards</h2>
        <ul className="space-y-4">
          <li className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Young Athlete of the Year"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-center sm:text-left text-sm sm:text-base">I was awarded "Young Athlete of the Year" by British Fencing, on 18th April 2016.</span>
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Jaguar Academy of Sport"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-center sm:text-left text-sm sm:text-base">
              In 2012, through British Fencing and SportsAid, I was awarded a bursary and a special recognition award
              from The Jaguar Academy of Sport.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}