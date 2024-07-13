import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const date = new Date(timestamp);
    const formmatedDate = date.toLocaleString("pt-BR", options);

    return formmatedDate;
  };

  return (
    <div className="m-2 flex flex-col rounded-md bg-card p-3 shadow-lg hover:bg-cardhover">
      <div className="mb-3 flex">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="mb-2 h-px border-0 bg-page" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="mt-2 flex ">
          <div className="flex flex-col">
            <p>{formatTimeStamp(ticket.createdAt)}</p>
            <ProgressBar progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
