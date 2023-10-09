import { INewsletterItem } from "@/interfaces/newsletter"

export interface NewsletterItemProps {
  item: INewsletterItem,
  onChecked: (itemId: number, checked: boolean) => void
}

export default function NewsletterItem({ item, onChecked }: NewsletterItemProps) {
  return (
    <>
      <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
        <div className="p-4 md:p-5 h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.description}
              </p>
            </div>
            <div className="pl-10">
              <input
                type="checkbox"
                id="hs-basic-usage"
                checked={item.subscribed}
                onChange={(e) => { onChecked(item.id, e.target.checked) }}
                className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" />
              <label htmlFor="hs-basic-usage" className="sr-only">switch</label>
            </div>
          </div>
        </div>
      </a>

    </>
  )
}