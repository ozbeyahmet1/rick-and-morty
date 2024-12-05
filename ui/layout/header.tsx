import Logo from "./logo";

/**
 * Header component
 *
 * This component represents the navigation header of the application.
 * It includes the company logo and a "Get Started" button.
 *
 * @returns {JSX.Element} The rendered header component
 */
export default function Header(): JSX.Element {
  return (
    <header className="container mx-auto py-5 sm:py-10 pl-3 sm:px-0">
      <nav className="flex items-center justify-between w-[90%] sm:w-full">
        {/* Logo section */}
        <Logo />

        {/* Get Started button */}
        <button
          className="bg-purple-600 px-4 py-2 rounded-md font-semibold text-white hover:bg-purple-800 transition-all duration-300"
          aria-label="Get Started">
          Get Started
        </button>
      </nav>
    </header>
  );
}
