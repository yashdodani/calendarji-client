import { Dispatch, SetStateAction } from "react";

export interface Event {
    summary: string;
    description: string;
    location: string;
    start: {
        dateTime: string;
    };
    end: {
        dateTime: string;
    };
}

export interface EventCreation {
    summary: string;
    description: string;
    location: string;
    start: string;
    end: string;
}

export interface EventProps {
    events: Event[];
    setEvents: Dispatch<SetStateAction<Event[]>>;
}

export interface EventForTable {
    summary: string;
    description: string;
    location: string;
    start: {
        dateTime: string;
    };
    end: {
        dateTime: string;
    };
    id: string;
}

export interface EventPropsForTable {
    events: EventForTable[];
    setEvents: Dispatch<SetStateAction<EventForTable[]>>;
}

export interface ModalProps {
    onClose: () => void;
    events: EventForTable[];
    setEvents: Dispatch<SetStateAction<EventForTable[]>>;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export type SetEventsType = Dispatch<SetStateAction<Event[]>>;

export interface ContentProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface HeaderProps {
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
