import { useEffect } from "react";
import { EventPropsForTable } from "../types";
import { Trash2 } from "lucide-react";
import { deleteEvent, getAllEvents } from "../api";

function CalendarTable({ events, setEvents }: EventPropsForTable) {
    useEffect(function () {
        getAllEvents().then((data) => setEvents(data));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Location</th>
                        <th>Start</th>
                        <th>End</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {events.length !== 0 ? (
                        events.map((event, index) => {
                            const startDate = new Date(
                                event.start.dateTime
                            ).toLocaleString();
                            const endDate = new Date(
                                event.end.dateTime
                            ).toLocaleString();
                            return (
                                <tr key={index}>
                                    <td>{event.summary}</td>
                                    <td>{event.location}</td>
                                    <td>{startDate}</td>
                                    <td>{endDate}</td>
                                    <td
                                        onClick={async () => {
                                            await deleteEvent(event.id);

                                            const newEvents = events.filter(
                                                (e) => e.id !== event.id
                                            );
                                            setEvents(newEvents);
                                        }}
                                        className="trash-icon"
                                    >
                                        <Trash2 />
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr className="no-events">
                            <td colSpan={5}>
                                <p style={{ textAlign: "center" }}>
                                    No Upcoming Events.
                                </p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default CalendarTable;
