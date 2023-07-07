# Event App 

Live URL: https://event-app-amber.vercel.app/

## Tech Stack

1. React, Typescript, Redux, Tailwindcss
2. `react-helmet` for the SEO

As far as I know, Next.js is the best one for the SEO. 
But I don't want to put the backend, front-end into one repository. So I did choose the orignal React.js.

## Event Data Type

```
{
type EventType = {
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
}
```

## Need to improve

1. We need to integrated the google map-box api for the location search.
Based on the payload, we need to compare the location (code).
At this moment, I am comparing the location with `text match`

2. Search Box integration.
like category(event type), event time, etc.

3. At this moment, there is not header section accross the website.

4. Adding the spinner for the loading page.



