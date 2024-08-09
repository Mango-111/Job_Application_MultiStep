import { useRouteError } from "react-router-dom"

const PageNotFound = () => {
    const error = useRouteError()
    console.error(error, "Error wrong url");
  return (
    <div>
      <h2 className='text-red-600 text-center mt-6'>Page Not Found !</h2>
    </div>
  )
}

export default PageNotFound
