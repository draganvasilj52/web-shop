const Modal = ({ toggle, setToggle }) => {
  return (
    <>
      {toggle && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className={`flex items-center justify-center ${
            !toggle && 'hidden'
          } opactiy-25 bg-slate-300 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center items-center h-modal md:h-full md:inset-0`}
        >
          <div className="flex items-center justify-center relative px-4 w-full max-w-2xl h-full md:h-auto ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  Thanks for shopping!
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="default-modal"
                ></button>
              </div>

              <div className="flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => setToggle(false)}
                  data-modal-toggle="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
