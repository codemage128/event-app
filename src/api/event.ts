import { EventType } from "../types/event";

const mockupData: EventType[] = [
  {
    id: "f248bac879969efd",
    title: "My Great Office",
    shortContent:
      "Welcome to our office! We are a dynamic and innovative workplace dedicated to fostering creativity and collaboration.",
    content: `As you step inside, you'll be greeted by a modern and open layout that promotes a sense of transparency and accessibility. Our carefully curated spaces cater to different work styles, offering comfortable seating areas for informal discussions, dedicated meeting rooms for focused brainstorming sessions, and quiet zones for uninterrupted concentration.
    Equipped with state-of-the-art technology, our office ensures seamless communication and connectivity. From high-speed internet to advanced audiovisual systems, we have everything you need to stay connected and work efficiently. We also embrace a paperless environment, leveraging digital tools and platforms to streamline our processes and reduce our ecological footprint.
    But it's not all work and no play! We understand the importance of work-life balance, which is why our office features recreational areas where our team can recharge and unwind. Whether it's a game of ping pong, a cozy lounge for relaxation, or a well-stocked pantry to satisfy those snack cravings, we've got you covered.
    Moreover, our office cultivates a vibrant and inclusive culture. We prioritize diversity and foster an atmosphere of mutual respect, where everyone's contributions are valued and celebrated. Regular team-building activities, knowledge-sharing sessions, and social events create a strong sense of camaraderie among our colleagues.
    At the heart of our office is our dedicated team. We believe in empowering our employees, providing them with opportunities for growth and professional development. We encourage a continuous learning mindset, offering training programs, mentorship initiatives, and access to resources that support personal and career advancement.
    In summary, our office is more than just a physical space. It's a dynamic hub of innovation, collaboration, and growth. We strive to create an environment that inspires creativity, nurtures talent, and fosters meaningful connections. We are proud to call this place our workplace, and we look forward to sharing our journey with you!`,
    category: "event",
    imageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    organizer: "Robert",
    startTime: "Wednesday, July 15, 2023 (EDT)",
    location: "New Haven",
  },
  {
    id: "f248bac879969efe",
    title: "NYC Top Event",
    shortContent:
      "Welcome to our office! We are a dynamic and innovative workplace dedicated to fostering creativity and collaboration.",
    content: `As you step inside, you'll be greeted by a modern and open layout that promotes a sense of transparency and accessibility. Our carefully curated spaces cater to different work styles, offering comfortable seating areas for informal discussions, dedicated meeting rooms for focused brainstorming sessions, and quiet zones for uninterrupted concentration.
    Equipped with state-of-the-art technology, our office ensures seamless communication and connectivity. From high-speed internet to advanced audiovisual systems, we have everything you need to stay connected and work efficiently. We also embrace a paperless environment, leveraging digital tools and platforms to streamline our processes and reduce our ecological footprint.
    But it's not all work and no play! We understand the importance of work-life balance, which is why our office features recreational areas where our team can recharge and unwind. Whether it's a game of ping pong, a cozy lounge for relaxation, or a well-stocked pantry to satisfy those snack cravings, we've got you covered.
    Moreover, our office cultivates a vibrant and inclusive culture. We prioritize diversity and foster an atmosphere of mutual respect, where everyone's contributions are valued and celebrated. Regular team-building activities, knowledge-sharing sessions, and social events create a strong sense of camaraderie among our colleagues.
    At the heart of our office is our dedicated team. We believe in empowering our employees, providing them with opportunities for growth and professional development. We encourage a continuous learning mindset, offering training programs, mentorship initiatives, and access to resources that support personal and career advancement.
    In summary, our office is more than just a physical space. It's a dynamic hub of innovation, collaboration, and growth. We strive to create an environment that inspires creativity, nurtures talent, and fosters meaningful connections. We are proud to call this place our workplace, and we look forward to sharing our journey with you!`,
    category: "event",
    imageUrl: "https://images.unsplash.com/photo-1522601157550-4282ae97472d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    organizer: "Robert",
    startTime: "Wednesday, July 25, 2023 (EDT)",
    location: "New York",
  },
  {
    id: "f248bac879969efa",
    title: "Austin Wedding",
    shortContent:
      "Welcome to our office! We are a dynamic and innovative workplace dedicated to fostering creativity and collaboration.",
    content: `As you step inside, you'll be greeted by a modern and open layout that promotes a sense of transparency and accessibility. Our carefully curated spaces cater to different work styles, offering comfortable seating areas for informal discussions, dedicated meeting rooms for focused brainstorming sessions, and quiet zones for uninterrupted concentration.
    Equipped with state-of-the-art technology, our office ensures seamless communication and connectivity. From high-speed internet to advanced audiovisual systems, we have everything you need to stay connected and work efficiently. We also embrace a paperless environment, leveraging digital tools and platforms to streamline our processes and reduce our ecological footprint.
    But it's not all work and no play! We understand the importance of work-life balance, which is why our office features recreational areas where our team can recharge and unwind. Whether it's a game of ping pong, a cozy lounge for relaxation, or a well-stocked pantry to satisfy those snack cravings, we've got you covered.
    Moreover, our office cultivates a vibrant and inclusive culture. We prioritize diversity and foster an atmosphere of mutual respect, where everyone's contributions are valued and celebrated. Regular team-building activities, knowledge-sharing sessions, and social events create a strong sense of camaraderie among our colleagues.
    At the heart of our office is our dedicated team. We believe in empowering our employees, providing them with opportunities for growth and professional development. We encourage a continuous learning mindset, offering training programs, mentorship initiatives, and access to resources that support personal and career advancement.
    In summary, our office is more than just a physical space. It's a dynamic hub of innovation, collaboration, and growth. We strive to create an environment that inspires creativity, nurtures talent, and fosters meaningful connections. We are proud to call this place our workplace, and we look forward to sharing our journey with you!`,
    category: "event",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    organizer: "Robert & Alisa",
    startTime: "Wednesday, July 12, 2023 (EDT)",
    location: "Austin",
  },
  {
    id: "f248bac879969eba",
    title: "Miami vocation",
    shortContent:
      "Welcome to our office! We are a dynamic and innovative workplace dedicated to fostering creativity and collaboration.",
    content: `As you step inside, you'll be greeted by a modern and open layout that promotes a sense of transparency and accessibility. Our carefully curated spaces cater to different work styles, offering comfortable seating areas for informal discussions, dedicated meeting rooms for focused brainstorming sessions, and quiet zones for uninterrupted concentration.
    Equipped with state-of-the-art technology, our office ensures seamless communication and connectivity. From high-speed internet to advanced audiovisual systems, we have everything you need to stay connected and work efficiently. We also embrace a paperless environment, leveraging digital tools and platforms to streamline our processes and reduce our ecological footprint.
    But it's not all work and no play! We understand the importance of work-life balance, which is why our office features recreational areas where our team can recharge and unwind. Whether it's a game of ping pong, a cozy lounge for relaxation, or a well-stocked pantry to satisfy those snack cravings, we've got you covered.
    Moreover, our office cultivates a vibrant and inclusive culture. We prioritize diversity and foster an atmosphere of mutual respect, where everyone's contributions are valued and celebrated. Regular team-building activities, knowledge-sharing sessions, and social events create a strong sense of camaraderie among our colleagues.
    At the heart of our office is our dedicated team. We believe in empowering our employees, providing them with opportunities for growth and professional development. We encourage a continuous learning mindset, offering training programs, mentorship initiatives, and access to resources that support personal and career advancement.
    In summary, our office is more than just a physical space. It's a dynamic hub of innovation, collaboration, and growth. We strive to create an environment that inspires creativity, nurtures talent, and fosters meaningful connections. We are proud to call this place our workplace, and we look forward to sharing our journey with you!`,
    category: "event",
    imageUrl: "https://images.unsplash.com/photo-1541945876617-8026869043f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    organizer: "Robert",
    startTime: "Wednesday, July 12, 2023 (EDT)",
    location: "Miami",
  },
];

const useEventsAPI = () => {
  return {
    getAll: async (): Promise<EventType[]> => {
      return mockupData;
    },
    getById: async (id: string): Promise<EventType> => {
      return mockupData.find((item) => item.id === id) as EventType;
    },
  };
};

export default useEventsAPI;
