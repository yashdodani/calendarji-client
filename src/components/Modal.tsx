import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { ModalProps } from "../types";
import { createEvent } from "../api";

function Modal({ onClose, events, setEvents, setShowModal }: ModalProps) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        const event = {
            summary: data.summary,
            location: data.location,

            description: data.description,
            start: {
                dateTime: `${data.start}:00+05:30`,
                timeZone: "Asia/Kolkata",
            },
            end: {
                dateTime: `${data.end}:00+05:30`,
                timeZone: "Asia/Kolkata",
            },
        };
        const response = await createEvent(event);
        const newEvents = events.concat(response);
        setShowModal(false);
        setEvents(newEvents);
    };

    return (
        <div className="modal">
            <div className="modal-div">
                <button onClick={onClose} className="close-btn">
                    <X size={30} />
                </button>
                <div className="modal-window">
                    <h1 className="modal-heading">Create a New Event</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-box">
                            <label>
                                Event Name
                                <input
                                    placeholder="Enter Event Name"
                                    {...register("summary")}
                                />
                            </label>
                        </div>

                        <div className="input-box">
                            <label>
                                Location
                                <input
                                    placeholder="Enter Location"
                                    {...register("location")}
                                />
                            </label>
                        </div>

                        <div className="input-box">
                            <label>
                                Description
                                <input
                                    placeholder="Enter Description"
                                    {...register("description")}
                                />
                            </label>
                        </div>

                        <div className="column">
                            <div className="input-box">
                                <label>
                                    Start
                                    <input
                                        type="datetime-local"
                                        {...register("start")}
                                    />
                                </label>
                            </div>
                            <div className="input-box">
                                <label>
                                    End
                                    <input
                                        type="datetime-local"
                                        {...register("end")}
                                    />
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            value="submit"
                            className="add-btn submit-btn"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
