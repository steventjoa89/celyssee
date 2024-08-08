const MODAL_KEY = "hasSeenWelcomeModal";
const EXPIRATION_TIME = 1 * 60 * 1000; // 1 minute in milliseconds

const getModalStatus = () => {
  const modalData = localStorage.getItem(MODAL_KEY);
  if (modalData) {
    const { timestamp } = JSON.parse(modalData);
    const now = Date.now();
    // Check if the modal data is expired
    if (now - timestamp < EXPIRATION_TIME) {
      return false; // Still within the valid time frame
    }
  }
  return true; // Either no data or expired
};

const setModalStatus = () => {
  const now = Date.now();
  localStorage.setItem(MODAL_KEY, JSON.stringify({ timestamp: now }));
};
