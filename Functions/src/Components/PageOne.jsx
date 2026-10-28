import PageCard from "./PageCard"
import PageContent from "./PageContent"

const PageOne = () => {
  return (
    <div className="h-1/2 w-full bg-gray-700 p-10 gap-10 flex">
      <PageContent />
      <PageCard />
    </div>
  )
}

export default PageOne
