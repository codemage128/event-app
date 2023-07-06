export type EventType = {
    id: string;
    title: string;
    shortContent?: string;
    content: string;
    category: string; // event, wedding, party etc
    imageUrl: string;
    organizer: string;
    startTime: string;
    location: string;
}

