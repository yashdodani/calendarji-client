import { useState } from "react";
import { ContentProps, EventForTable } from "../types";
import CalendarTable from "./CalendarTable";
import Modal from "./Modal";

function Content({ showModal, setShowModal }: ContentProps) {
    const [events, setEvents] = useState<EventForTable[]>([]);
    return (
        <div className="content">
            <CalendarTable events={events} setEvents={setEvents} />

            {showModal && (
                <Modal
                    events={events}
                    setEvents={setEvents}
                    setShowModal={setShowModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default Content;
