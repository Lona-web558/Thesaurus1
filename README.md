# 📚 Thesaurus Web Application

A modern, responsive thesaurus web application built with **HTML5**, **CSS3**, **Bootstrap 5**, **JavaScript (ES6)**, **Node.js**, and **Express.js**.

Users can search for words, view synonyms and antonyms, and quickly access their recent searches.

---

## Features

- 🔍 Search for words
- 📖 View synonyms
- 🔄 View antonyms
- 🕒 Recent search history
- 📱 Responsive Bootstrap 5 interface
- ⚡ Express.js REST API
- 📂 Local JSON data source
- 🎨 Clean, modern UI
- 🚀 Easy to extend with external dictionary APIs

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)

### Backend

- Node.js
- Express.js

### Data

- JSON

---

## Project Structure

```
thesaurus-app/
│
├── package.json
├── server.js
│
├── routes/
│   └── thesaurus.js
│
├── data/
│   └── thesaurus.json
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/thesaurus-app.git
```

### 2. Navigate to the project

```bash
cd thesaurus-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## Development Mode

If using Nodemon:

```bash
npm run dev
```

---

## API

### Search for a word

```
GET /api/search/:word
```

Example:

```
GET /api/search/happy
```

### Successful Response

```json
{
  "word": "Happy",
  "synonyms": [
    "Joyful",
    "Cheerful",
    "Glad",
    "Content",
    "Delighted"
  ],
  "antonyms": [
    "Sad",
    "Unhappy",
    "Depressed"
  ]
}
```

### Error Response

```json
{
  "message": "Word not found."
}
```

---

## Adding More Words

Open:

```
data/thesaurus.json
```

Add another object using the following format:

```json
"example": {
    "word": "Example",
    "synonyms": [
        "Sample",
        "Instance",
        "Case"
    ],
    "antonyms": [
        "Opposite"
    ]
}
```

---

## Future Enhancements

- Dictionary definitions
- Pronunciation audio
- Word of the Day
- Auto-complete search
- Search suggestions
- Dark mode
- Light mode
- Favorites
- User accounts
- Search analytics
- Recently viewed words
- Categories
- Parts of speech
- Database integration (SQLite, PostgreSQL, MongoDB)
- External dictionary and thesaurus APIs
- Progressive Web App (PWA)
- Docker support
- Unit and integration testing
- Accessibility improvements (WCAG)

---

## Scripts

| Command | Description |
|----------|-------------|
| `npm start` | Starts the application |
| `npm run dev` | Starts the application with Nodemon |

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari
- Opera

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

## Author

Developed with ❤️ by Lona Matshingana in the Republic of of South Africa using HTML5, CSS3, Bootstrap, JavaScript, Node.js, and Express.js.
