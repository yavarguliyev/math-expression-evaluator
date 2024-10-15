# Math Expression Evaluator

This project implements a REST API in **NestJS** to evaluate mathematical expressions. The solution is written in **TypeScript**, handles HTTP requests, and supports the following arithmetic operations:

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `()` : Parentheses for grouping expressions

The evaluator processes expressions with multiple operators and parentheses to ensure proper order of operations (PEMDAS/BODMAS). No third-party libraries are used for expression parsing—everything is implemented from scratch.

## Features
- **Input Validation:** Ensures that only valid expressions are processed.
- **Parallel Evaluation:** Recursive evaluation of complex expressions.
- **HTTP API:** Supports HTTP POST requests with JSON input.

---

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (>= v12.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (>= v7.x)

---

## Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
   
2. **Navigate into the project directory:**
    ```bash
    cd math-expression-evaluator
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
    npm run start
    ```

The API will now be running on `http://localhost:3000`.

---

## Usage

You can evaluate mathematical expressions by sending a `POST` request to the `/evaluate` endpoint. The request body should be a JSON object containing an `expression` field with the mathematical expression to evaluate.

### Example Request

```bash
curl -H "Content-Type: application/json" \
-X POST \
-d '{"expression":"(1-1)*2+3*(1-3+4)+10/2"}' \
http://localhost:3000/evaluate
