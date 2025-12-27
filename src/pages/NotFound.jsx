import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" flex h-[calc(100dvh-200px)] flex-col items-center justify-center bg-background text-white px-4">
      <h1 className="text-8xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 text-secondary text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        className="w-fit rounded-lg bg-primary text-white
                     px-3 py-1.5 hover:bg-green-600 active:scale-95 transition-all"
      >
        <Link
          to="/"
        >
          Go Back Home
        </Link>
      </button>


    </div>
  );
};

export default NotFound;
