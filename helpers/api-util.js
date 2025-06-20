const getAllEvents = async () => {
  const response = await fetch(
    "https://testingdatafetchingserverside-default-rtdb.asia-southeast1.firebasedatabase.app/DUMMY_EVENTS.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export { getAllEvents, getFeaturedEvents };
