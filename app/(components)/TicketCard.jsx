import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="m-2 flex flex-col rounded-md bg-card p-3 shadow-lg hover:bg-cardhover">
      <div className="mb-3 flex">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="mb-2 h-px border-0 bg-page" />
      <p className="whitespace-pre-wrap">
        this is the ticket description! Please do
      </p>
      <div className="flex-grow"></div>
      <div className="mt-2 flex">
        <div className="flex flex-col">
          <p>16/05/2024 04:20</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
