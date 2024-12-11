import axios from "axios";
import { Event } from "../types";

const apiRoute = "https://calendarjiapi.onrender.com";

export async function getAllEvents() {
    const response = await axios.get(`${apiRoute}/calendar/events`, {
        withCredentials: true,
    });
    return response.data;
}

export async function deleteEvent(id: string) {
    await axios.delete(`${apiRoute}/calendar/events/${id}`, {
        withCredentials: true,
    });
}

export async function createEvent(event: Event) {
    const response = await axios.post(`${apiRoute}/calendar/events`, event, {
        withCredentials: true,
    });
    return response.data;
}
