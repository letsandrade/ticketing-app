import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    // console.log(`Fetching from: ${baseURL}/api/Tickets`);
    const res = await fetch(`${baseURL}/api/Tickets`, {
      cache: "no-store",
    });

    // console.log(`Response status: ${res.status}`);

    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }

    const data = await res.json();
    // console.log("Fetched tickets:", data);

    return data;
  } catch (error) {
    console.error("Failed to get tickets", error);
    return { tickets: [] };
  }
};

const Dashboard = async () => {
  const data = await getTickets();
  const tickets = data.tickets || [];

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="grid-cols-2 lg:grid xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
