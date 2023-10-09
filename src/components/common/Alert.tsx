export interface AlertProps {
  type: string;
  message: string;
}

export default function Alert({ type, message }: AlertProps) {
  return (
    <>
      {type !== null &&
        <div>
          {type === 'dark' &&
            <div className="bg-gray-800 text-sm text-white rounded-md p-4 dark:bg-white dark:text-gray-800" role="alert">
              {message}
            </div>
          }
          {type === 'secondary' &&
            <div className="bg-gray-500 text-sm text-white rounded-md p-4" role="alert">
              {message}
            </div>
          }
          {type === 'info' &&
            <div className="bg-blue-500 text-sm text-white rounded-md p-4" role="alert">
              {message}
            </div>
          }
          {type === 'success' &&
            <div className="bg-green-500 text-sm text-white rounded-md p-4" role="alert">
              {message}
            </div>
          }
          {type === 'danger' &&
            <div className="bg-red-500 text-sm text-white rounded-md p-4" role="alert">
              {message}
            </div>
          }
          {type === 'warning' &&
            <div className="bg-orange-500 text-sm text-white rounded-md p-4" role="alert">
              {message}
            </div>
          }
          {type === 'light' &&
            <div className="bg-white text-sm text-gray-600 rounded-md p-4" role="alert">
              {message}
            </div>
          }
        </div>
      }
    </>
  )
}