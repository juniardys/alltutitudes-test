import { useEffect, useState } from "react"
import NewsletterItem, { NewsletterItemProps } from "./NewsletterItem";
import { INewsletterItem } from "@/interfaces/newsletter";
import { getNewsletterItems } from "@/data/mockData";

export default function Newsletter() {
  const [newsletterItems, setNewsletterItems] = useState<INewsletterItem[]>([]);
  const [receivedPreferences, setReceivedPreferences] = useState('daily')

  useEffect(() => {
    const data = getNewsletterItems();
    setNewsletterItems(data);
  }, [])

  const newsletterChecked = (itemId: number, checked: boolean) => {
    // call api to update newsletter
    const nextItems = newsletterItems.map(item => {
      if (item.id === itemId) {
        item.subscribed = checked;
      }
      return item;
    })
    setNewsletterItems(nextItems);
  }

  const savePreferences = (value: string) => {
    // call api to save preferences
    setReceivedPreferences(value);
  }

  return (
    <>
      <div className="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <header>
          <p className="mb-2 text-sm font-semibold text-blue-600">Newsletter Preferences</p>
        </header>
        <div className="flex justify-start items-center mb-2">
          <p className="text-sm text-gray-500">Received preferences: </p>
          <div className="flex gap-x-6 ml-4">
            <div className="flex">
              <input
                type="radio"
                name="hs-radio-group"
                value="daily"
                onChange={(e) => savePreferences(e.target.value)}
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-radio-group-1"
                checked={receivedPreferences === 'daily'} />
              <label htmlFor="hs-radio-group-1" className="text-sm text-gray-500 ml-2 dark:text-gray-400">Daily</label>
            </div>
            <div className="flex">
              <input
                type="radio"
                name="hs-radio-group"
                value="weekly"
                onChange={(e) => savePreferences(e.target.value)}
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-radio-group-2"
                checked={receivedPreferences === 'weekly'} />
              <label htmlFor="hs-radio-group-2" className="text-sm text-gray-500 ml-2 dark:text-gray-400">Weekly</label>
            </div>
            <div className="flex">
              <input
                type="radio"
                name="hs-radio-group"
                value="monthly"
                onChange={(e) => savePreferences(e.target.value)}
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-radio-group-3"
                checked={receivedPreferences === 'monthly'} />
              <label htmlFor="hs-radio-group-3" className="text-sm text-gray-500 ml-2 dark:text-gray-400">Monthly</label>
            </div>
          </div>
        </div>

        <header>
          <p className="mb-2 text-sm font-semibold text-blue-600">Newsletter List</p>
        </header>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {newsletterItems.map((item) => (
            <NewsletterItem item={item} onChecked={(itemId, checked) => { newsletterChecked(itemId, checked) }} key={null} />
          ))}
        </div>
      </div>
    </>
  )
}