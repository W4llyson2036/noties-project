# No Ties 🎓📚

## About
**No Ties** is a flashcard-style web application designed to help students manage study materials, create personalized decks, and search for specific flashcards quickly. The goal is to provide a straightforward and intuitive user experience to aid review and memory retention.

---

## Functionalities 🚀

The app offers the following features:

- **User Authentication**:  
  Users can securely sign up and log in to store and manage their personal study content.

- **Create Decks**:  
  Users can create and categorize multiple study decks (e.g., *Math 101*, *History Notes*).

- **Create Cards**:  
  Users can create flashcards and associate them with specific decks for organized study.

- **Edit Cards**:  
  Modify the content of any flashcard as learning objectives or information evolve.

- **Delete Cards**:  
  Users can remove unnecessary flashcards when they are no longer relevant.

- **Search Functionality**:  
  A dynamic search bar allows users to locate specific flashcards quickly by entering keywords.

---

## Technologies Used 🛠️

The application relies on the following technologies:

### Frontend: [React](https://reactjs.org/)  
React is used for building dynamic and responsive user interfaces with components, making state management simple and declarative rendering efficient.

### Backend: [Firebase](https://firebase.google.com/)  
Firebase powers authentication and real-time database capabilities, providing scalability, authentication support, and cloud storage without requiring a custom server.

---

## How It Works 🧩
1. **User Logs In**: Users authenticate securely via Firebase Authentication.
2. **Deck Management**: After authentication, users can manage decks (create, edit, delete, or search).
3. **Create Flashcards**: Users can create and associate flashcards with their respective decks.
4. **Search & Review**: The intuitive search bar allows users to locate cards easily to streamline review sessions.

---

## Deployment Instructions 🔗

For developers or contributors wanting to deploy this locally, follow these steps:
1. Clone the repo.
2. Install dependencies with `npm install`.
3. Configure your Firebase credentials in the `.env` file.
4. Start the development server using:
   ```bash
   npm run dev
