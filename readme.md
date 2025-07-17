# Sweet Shop Management System

> **Reason for Creation**
> This project was developed as part of the Incubyte recruitment process. The objective was to demonstrate proficiency in Test-Driven Development (TDD), clean coding practices, and professional workflows by building a Sweet Shop Management System from scratch. All requirements and features were implemented according to the coding kata provided by Incubyte.

A simple, fully-tested Sweet Shop Management System built with Node.js and Express, following Test-Driven Development (TDD) principles. This project was created as a coding kata and learning exercise, with a focus on clean code, maintainability, and professional workflows.

## Features
- **Add Sweets:** Add new sweets with unique ID, name, category, price, and quantity.
- **Delete Sweets:** Remove sweets from the shop by ID.
- **View Sweets:** List all available sweets in the shop.
- **Search Sweets:** Search by name, category, or price range.
- **Sort Sweets:** Sort sweets by ID, name, price, quantity, or category.
- **Purchase Sweets:** Buy sweets, automatically reducing stock and handling errors for insufficient quantity.
- **Restock Sweets:** Increase the quantity of sweets in stock.
- **API Client Requests:** Bruno API request files included for easy testing.
- **Optional Frontend:** Simple web interface for inventory management (if implemented).

## TDD & Development Journey
- All utility features were developed using TDD: tests were written before code.
- High test coverage with meaningful test cases for all operations and edge cases.
- Frequent, descriptive Git commits document the development process and learning journey.
- AI assistance was used transparently and marked in commit messages.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Dharmiklakhankiya/Sweet-Shop-Management-System
   cd Sweet Shop Management System
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
- Start the server:
  ```bash
  npm start
  ```
- For development with auto-reload:
  ```bash
  npm run dev
  ```

### Running Tests
- Execute all Jest tests:
  ```bash
  npm test
  ```

## API Endpoints
- `POST /addSweet` — Add a new sweet
- `DELETE /deleteSweet/:id` — Delete a sweet by ID
- `GET /viewSweets` — View all sweets
- `GET /searchSweet` — Search sweets (query params: term, category, price)
- `GET /sortSweets` — Sort sweets (query params: key, order)
- `PUT /purchaseSweet/:id` — Purchase sweets
- `PUT /restockSweet/:id` — Restock sweets
- `PUT /updateSweet/:id` — Update sweet details

## Project Structure
```
├── src/
│   ├── app.js
│   ├── utils/
│   └── controllers/
├── model/
├── tests/
├── bruno/ (API client requests)
├── public/ (frontend, if implemented)
├── index.js
├── package.json
└── README.md
```

## Test Report
All major features and edge cases are covered by Jest unit tests. Run `npm test` to see the results.

## Learning & Acknowledgements
This project was built as a student learning exercise, with a strong focus on professional development practices. AI tools (such as GitHub Copilot and ChatGPT) were used for assistance and are credited in relevant commits.

## License
ISC

---

*Created with dedication, curiosity, and a commitment to learning best practices in software engineering.*

