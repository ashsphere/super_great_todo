# Super Great Todo

This is a simple todo application built with Next.js and Supabase. It includes login functionality and a basic calendar view.

## Getting Started

1. Copy `.env.example` to `.env` and fill in your Supabase credentials.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Supabase Setup

Create a table named `sgt_todos` in your Supabase project with the following
columns:

| column   | type    |
|----------|---------|
| id       | uuid    |
| title    | text    |
| due_date | date    |
| user_id  | uuid    |

Make sure `user_id` references the authenticated user.

## Project Structure

- `src/domain` – domain entities.
- `src/repositories` – data access using Supabase.
- `src/usecases` – application use cases.
- `src/components` – React components.
- `src/pages` – Next.js pages.

This structure roughly follows clean architecture principles to keep business logic separate from frameworks and external services.
