import Image from "next/image"

export default function Events() {
  const upcomingEvents = [
    { name: "World Fencing Championships", date: "2023-07-22", location: "Milan, Italy" },
    { name: "European Fencing Championships", date: "2023-09-15", location: "Paris, France" },
    { name: "British Open", date: "2023-11-05", location: "London, UK" },
  ]

  const pastEvents = [
    {
      name: "Commonwealth Fencing Championships",
      date: "2022-11-22",
      location: "Canberra, Australia",
      result: "Gold Medal",
    },
    { name: "British National Championships", date: "2022-04-13", location: "London, UK", result: "Gold Medal" },
    { name: "Olympic Zonal Qualifier", date: "2021-04-25", location: "Madrid, Spain", result: "3rd Place" },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="font-raleway text-2xl sm:text-3xl font-bold mb-6">Events</h1>
      <section className="mb-12">
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={event.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-raleway text-lg sm:text-xl font-bold">{event.name}</h3>
                <p className="text-sm">{event.date}</p>
                <p className="text-sm">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-4">Past Events</h2>
        <div className="space-y-6">
          {pastEvents.map((event, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={event.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-raleway text-lg sm:text-xl font-bold">{event.name}</h3>
                <p className="text-sm">{event.date}</p>
                <p className="text-sm">{event.location}</p>
                <p className="font-bold text-blue-600">{event.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}