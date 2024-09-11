# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.


# A4A Intuit 2024


npx create-remix@latest
npm install jest @testing-library/react @testing-library/jest-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init --ts -p



Frontend Engineer II

Ruben: Use of typescript

======================

Write frontend focused code
1 simple unit test

- Setup IDE
- Postman
- NodeJS
- CRA
- Remix
- Boilerplate code
- GenAI
- Remix

15 mins to talk, ask questions, walk approach, show IDE, boilerplate code, understand any online resource, use of Codium (gh copilot competitor)
90 mins to write the frontend, mention on things that I may forget
Stay on the say zoom room

— 

Part 2

40 mins to walk through code
Introduction + proud project (5 mins)
Prepare presentation slides
- 1 to 5 slides
- Talk about proud project

Example: 

Hello everyone, I am Jose Ramon. I came from Panama years ago, I moved to the Bay Area to study and start a new life as software engineer. I had some jobs where I had to commute, etc… I moved to Chicago, then to Georgia. And now I like to introduce a proud project. If I were to this again next time, this is that I would consider . Now I share my screen to show my code… I was given a simple web app over 90 minutes that includes… I used this, some boilerplate code, etc…

I spend time doing small modular code, 10% mocking the backend, work on 

—

Part 3

New features
Tech Debt, data structure, observability, a11y, i18n, possible obstacles, E2E testing
Manager interview: Values questions, courage, customer (put sticky notes of examples to share)

….

Nathaniel
Kathy

//////////////////////////////////////////////////////////////////////////////////////

Project to be proud - Loading Progress bar

Write medium post for 2024

Challenge:
- Show a loading bar when the system is processing. We don’t know the estimated time (may take a few seconds to a few minutes), and we don’t know how many steps are there in total (could be between 4 to 64). 

================

Slideshow (3)

1. 1. (collage of me) Kid, school, college, music, with family, with Barry cat
2. 2. Proud project - Loading (Progress) bar (unknown time and number of steps)
3. 3. Show logarithmic func graph and how to solve the issue
4. 4. Demo presentation

-------------


Where each transaction contains the
 
 SummaryWidget
     transaction date; 
    a description; 
    a unique reference number;
    a monetary amount which could be positive (cash in) or negative (cash out)
     total amount of money in bank
        total > threshold === green
        total (positive) <= threshold === yellow
        total (neg) < 0.00 === red
show the number of invoices created in the last 30 days


InvoicesWidget
    i. name of the client
    ii. the creation date
    iii. a unique reference number
    iv. a monetary amount, which could be positive (money to be
    received) or negative (a refund to the customer)
    v. a status (PAID or NOT PAID). (read only)

    Conditions
    1. invoice is considered PAID if there is a bank transaction for the same amount, with the bank transaction’s reference number being equal to the invoice’s reference number, and with the bank transaction date being later than the invoice creation date.
    ii. An invoice is considered NOT PAID if the previous criteria is not matched.
    iii. Users should be able to create a new invoice.