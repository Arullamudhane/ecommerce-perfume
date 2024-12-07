export default function Newsletter() {
  return (
    <div className="bg-purple-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="py-10 px-6 bg-purple-800 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Sign up for our newsletter
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-100">
              Get exclusive offers, new arrival alerts, and insider-only discounts.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-white rounded-md"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-white sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-purple-100">
              We care about your privacy. Read our{' '}
              <a href="#" className="text-white font-medium underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}