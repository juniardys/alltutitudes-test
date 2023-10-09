import { getAccountProfile } from "@/data/mockData";
import { IUserAccount } from "@/interfaces/account";
import { useEffect, useState } from "react"
import Alert, { AlertProps } from "../common/Alert";
import Link from "next/link";

export default function Profile() {
  const [accountProfile, setAccountProfile] = useState<IUserAccount | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [alertData, setAlertData] = useState<AlertProps>({
    type: '',
    message: '',
  })

  useEffect(() => {
    const user = getAccountProfile();
    setAccountProfile(user);
  }, []);

  useEffect(() => {
    setEmail(accountProfile?.email ?? "");
  }, [accountProfile])

  const saveProfile = () => {
    setAlertData({ type: '', message: '' });
    if (email === "") {
      setAlertData({ type: 'danger', message: 'Email required' });
      return
    }
    if (password === "") {
      setAlertData({ type: 'danger', message: 'Password required' });
      return
    }
    if (confirmationPassword === "") {
      setAlertData({ type: 'danger', message: 'Confirmation password required' });
      return
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setAlertData({ type: 'danger', message: 'Invalid email' });
      return
    }
    if (password !== confirmationPassword) {
      setAlertData({ type: 'danger', message: 'Confirmation password not match' });
      return
    }

    // call api save

    setPassword("");
    setConfirmationPassword("");
    setAccountProfile({
      name: accountProfile?.name ?? '',
      email: email,
    })

    setAlertData({ type: 'success', message: 'Profile saved' })
  }

  return (
    <>
      {/* Card Section */}
      < div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto min-h-screen" >
        < div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900" >
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Profile
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Manage your name, password and account settings.
            </p>
            <Alert type={alertData.type} message={alertData.message} />
          </div>
          <form>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Full name
                </label>
                <div className="hs-tooltip inline-block">
                  <button type="button" className="hs-tooltip-toggle ml-1">
                    <svg className="inline-block w-3 h-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </button>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                    Displayed on public forums, such as Preline
                  </span>
                </div>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input type="text" className="py-2 px-3 pr-11 opacity-70 pointer-events-none block w-full bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value="Anonymous" disabled aria-disabled />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Email
                </label>
              </div>
              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="maria@site.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Password
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input
                    id="af-account-password"
                    type="password"
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
                  <input
                    type="password"
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Enter confirmation password"
                    value={confirmationPassword}
                    onChange={(e) => { setConfirmationPassword(e.target.value) }} />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-x-2">
              <Link
                href="/"
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                Cancel
              </Link>
              <button
                type="button"
                onClick={saveProfile}
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Save changes
              </button>
            </div>
          </form>
        </div >
      </div >
    </>
  )
}