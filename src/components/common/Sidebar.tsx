import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentPath = usePathname()
  const activeClass = 'flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md text-slate-700 hover:bg-gray-100 bg-gray-100 dark:bg-gray-900 dark:text-white';
  const inactiveClass = 'flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md text-slate-700 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300'

  return (
    <>
      {/* Sidebar Toggle */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          {/* Navigation Toggle */}
          <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="w-5 h-5" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          {/* End Navigation Toggle */}
          {/* Breadcrumb */}
          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </li>
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
              Dashboard
            </li>
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>
      {/* End Sidebar Toggle */}
      {/* Sidebar */}
      <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
        <div className="px-6">
          <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Alltitudes</a>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <Link
                href="/newsletter"
                className={currentPath == '/newsletter' ? activeClass : inactiveClass}
              >
                <svg className="w-3.5 h-3.5" width={16} height={16} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 166.781 166.781" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M163.451,70.046l-32.35-20.847c-0.253-0.161-0.532-0.222-0.804-0.312v-7.19c0-1.92-1.554-3.475-3.475-3.475H113.92 L86.97,21.378c-1.126-0.706-2.558-0.706-3.685,0l-26.95,16.844H39.958c-1.92,0-3.475,1.554-3.475,3.475v7.188 c-0.272,0.09-0.552,0.152-0.804,0.314L3.329,70.046c-0.991,0.641-1.592,1.741-1.592,2.921v90.339c0,1.92,1.554,3.475,3.475,3.475 h156.356c1.92,0,3.475-1.554,3.475-3.475V72.968C165.043,71.787,164.442,70.688,163.451,70.046z M85.128,28.423l15.681,9.799 H69.447L85.128,28.423z M43.433,45.171h79.915v78.178c0,0.01,0.006,0.018,0.006,0.029l-11.754,7.137l-28.284-15.427 c-1.055-0.57-2.338-0.567-3.386,0.034l-25.81,14.749l-10.692-6.492c0-0.01,0.006-0.018,0.006-0.028L43.433,45.171z M8.687,74.861 l27.796-17.91v62.212L8.687,102.285V74.861z M8.687,110.412l38.537,23.397L8.687,155.831V110.412z M15.689,159.833l66.005-37.715 l69.145,37.715H15.689z M158.094,155.874L118.65,134.36l39.444-23.949V155.874z M158.094,102.285l-27.797,16.877V56.951 l27.797,17.911V102.285z" /> <path d="M57.331,79.917h41.695c1.92,0,3.475-1.554,3.475-3.475V55.595c0-1.92-1.554-3.475-3.475-3.475H57.331 c-1.92,0-3.475,1.554-3.475,3.475v20.847C53.856,78.363,55.411,79.917,57.331,79.917z M60.805,59.069h34.746v13.898H60.805 V59.069z" /> <rect x="53.856" y="86.866" width="55.593" height="6.949" /> <rect x="53.856" y="100.765" width="55.593" height="6.949" /> <path d="M147.67,41.697c0.889,0,1.778-0.339,2.457-1.018l12.283-12.283c1.357-1.357,1.357-3.556,0-4.913 c-1.357-1.358-3.556-1.357-4.913,0l-12.283,12.283c-1.357,1.357-1.357,3.556,0,4.913 C145.892,41.358,146.781,41.697,147.67,41.697z" /> <path d="M16.654,40.679c0.679,0.679,1.568,1.018,2.457,1.018c0.889,0,1.778-0.339,2.457-1.018c1.357-1.357,1.357-3.556,0-4.913 L9.284,23.483c-1.357-1.357-3.556-1.357-4.913,0c-1.357,1.357-1.357,3.556,0,4.913L16.654,40.679z" /> <path d="M118.584,24.076c0.421,0.17,0.859,0.247,1.289,0.247c1.378,0,2.684-0.825,3.227-2.185l6.949-17.373 c0.713-1.781-0.156-3.804-1.937-4.516c-1.764-0.709-3.804,0.149-4.516,1.937l-6.949,17.373 C115.934,21.341,116.802,23.364,118.584,24.076z" /> <path d="M47.155,22.139c0.543,1.361,1.849,2.185,3.227,2.185c0.431,0,0.869-0.078,1.289-0.248 c1.781-0.713,2.65-2.735,1.937-4.516L46.659,2.187c-0.713-1.788-2.748-2.647-4.516-1.937c-1.781,0.713-2.65,2.735-1.937,4.516 L47.155,22.139z" /> </g> </g> </g> </g></svg>
                Newsletter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
    </>
  );
}
