export const projects = 
[
  {
    title: "Mini Cart Shop",
    description: "A simple e-commerce cart app with product listing and cart management.",
    liveUrl: "https://minicartshoptimoteo.netlify.app/",
    learned: 
   [
      "Dynamic Shopping Cart: Implemented cart logic with add, update, remove, and quantity handling using React state.",
      "Stripe Checkout Integration: Created secure checkout flow using Stripe's hosted payment pages and dynamic line_items.",
      "Netlify Functions: Replaced backend server with a serverless function to securely handle Stripe session creation.",
      "Environment Variables: Managed Stripe secret key and site URL via .env and Netlify Dashboard for production safety.",
      "Component Architecture: Separated UI into modular components (ProductList, Cart) with clear prop/state flow.",
      "Modular CSS: Styled each component using traditional CSS files scoped per feature for better maintainability.",
      "Frontend-backend connection: Called the function from the frontend using fetch and passed dynamic cart items as JSON.",
      "Public Asset Management: Used the /public folder to host product images and accessed them directly via root-relative paths.",
      "Layout with Flexbox: Created a two-column layout with product grid on the left and sticky cart sidebar on the right.",
      "Live Deployment: Deployed the complete app on Netlify, with auto-built frontend and serverless backend functions."
    ],

    githubUrl: "https://github.com/CaiporaGames/MiniCartShop",
    image: "/assets/tasktracker.png"
  },
   {
    title: "Notes Page",
    description: "Create and manage notes with a simple interface and save to Supabase with authentication.",
    liveUrl: "https://notesapptimoteo.netlify.app/",
    learned: 
    [
      "Supabase Authentication: Integrated email/password login and signup using supabase.auth.",
      "Persisted user sessions: Kept users logged in across reloads using Supabase's session management.",
      "Node.js + Express backend: Created a RESTful API (GET, POST, DELETE) to manage notes.",
      "Routing & Folder Structure (Backend): Followed a professional setup using routes/, controllers/, middlewares/.",
      "Supabase Database & RLS: Designed a notes table with user_id, and secured it with Row Level Security (RLS).",
      "Frontend-backend communication: Sent authenticated API requests using custom headers (x-user-id) and fetch.",
      "Token verification (optional): Explored Supabase token-based security headers for future enhancements.",
      "Dynamic UI with React: Rendered notes, handled loading states, and updated the UI on create/delete actions.",
      "Custom CSS + Tailwind: Continued styling with a clean balance of Tailwind utility classes and scoped CSS files."
  ],
    githubUrl: "https://github.com/CaiporaGames/NotesApp",
    image: "/assets/tasktracker.png"
  },
  {
    title: "Simple Blog",
    description: "Create and manage blog posts with a simple interface.",
    liveUrl: "https://simpleblogtimoteo.netlify.app/",
    learned: 
    [
      "React Router: Implemented page navigation using <Routes>, <Route>, and useNavigate().",
      "Form handling: Built a blog post form with controlled inputs for title and content.",
      "Lifting state up: Stored blog posts in a parent component to share data between components.",
      "Reusable components: Created consistent UI elements for posts and layout.",
      "Routing parameters: Used dynamic routes to view individual posts (e.g., /posts/:id).",
      "Local state management: Stored and updated posts in memory with useState.",
      "Tailwind + custom CSS: Styled the app using utility classes and separate CSS files for maintainability."
  ],
    githubUrl: "https://github.com/CaiporaGames/SimpleBlog",
    image: "/assets/tasktracker.png"
  },
  {
    title: "Task Tracker",
    description: "To-do app with local storage and clean layout.",
     learned: 
    [
      "React fundamentals: Components, props, and useState for local state.",
      "Component patterns: Splitting UI into reusable components like TaskList and TaskItem.",
      "Controlled inputs: Handling form inputs with React state.",
      "Conditional rendering: Showing messages when the task list is empty.",
      "LocalStorage: Persisting tasks between page reloads using browser storage.",
      "Tailwind CSS + custom CSS: Combining utility classes with modular CSS files.",
      "Clean layout structure: Grid and flexbox usage for consistent design.",
      "Modular project organization: Separating components, types, and styles into folders."
    ],
    liveUrl: "https://tasktrackertimoteo.netlify.app/",
    githubUrl: "https://github.com/CaiporaGames/TaskTracker",
    image: "/assets/tasktracker.png"
  }
];
