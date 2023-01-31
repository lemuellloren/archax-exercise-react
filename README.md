# Archax React Exercise

This exercise is to help us better understand your experience in react and typescript, how you would go about structuring your work, code quality, styles, etc...

## Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Task

We would like you build a simple data explorer as shown in the image below. This is just a wireframe guide to get you started, you may style it in any way you like to improve the design and UX.

![Archax React Exercise wireframe](/archax-react-exercise.png)

The data is a list of application records and is fetchable at `/data`. Each application has 3 levels of business capabilities. Business capabilities are hierarchical as shown in the image (Business capability 1 -> Business capability 2 -> Business capability 3)

The app should -

- Requests the dataset.
- Build a hierarchical navigation tree displaying the different levels of business capabilities. Bonus points if we can expand/collapse the navigation tree.
- Have a range slider to be able to further filter the dataset based on the total spending value
- Present a list of applications from the data set, showing name and total spend. The list depends on the navigation tree and the range filter

Additional notes

- Please spend as much time as you feel necessary to complete the task and show off your skills.
- We will be looking at code/file structure, code quality & best practices, design & user experience.
- Add comments where necessary or to document any assumptions/considerations you may have.
- You shouldn't need to use any external libraries
