import Image from "next/image"

export default function Ranking() {
  const rankings = [
    { event: "British National Championships", rank: 1, date: "2023" },
    { event: "Commonwealth Fencing Championships", rank: 1, date: "2022" },
    { event: "European Fencing Championships", rank: 5, date: "2022" },
    { event: "World Fencing Championships", rank: 12, date: "2022" },
    { event: "Olympic Zonal Qualifier", rank: 3, date: "2021" },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="font-raleway text-2xl sm:text-3xl font-bold mb-6">Ranking</h1>
      <div className="mb-8 flex flex-col items-center">
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Current World Ranking</h2>
        <div className="bg-blue-500 text-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center text-3xl sm:text-4xl font-bold">
          #24
        </div>
      </div>
      <div className="mb-8 overflow-x-auto">
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Recent Tournament Rankings</h2>
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-2 sm:px-4">Event</th>
              <th className="text-left py-2 px-2 sm:px-4">Rank</th>
              <th className="text-left py-2 px-2 sm:px-4">Year</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((ranking, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-2 sm:px-4">{ranking.event}</td>
                <td className="py-2 px-2 sm:px-4">{ranking.rank}</td>
                <td className="py-2 px-2 sm:px-4">{ranking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Performance Graph</h2>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Performance Graph"
            width={600}
            height={300}
            className="rounded-lg w-full"
          />
          <p className="text-gray-600 mt-2 text-sm text-center">Placeholder for a graph showing ranking progression over time</p>
        </div>
      </div>
    </div>
  )
}