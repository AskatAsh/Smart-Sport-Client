import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="bg-white font-jost flex items-center justify-center h-screen">
      <div className="py-8 px-4 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-900">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-600">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <Link
            to={"/"}
            className="inline-flex text-white bg-gray-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
