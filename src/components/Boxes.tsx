import { Card } from "."

interface propsType {
  BoxesData?: {
    data: {
      results: [
        {
          id: number
          backdrop_path: string
          title: string
          poster_path: string
          name: string
          overview: string
          release_date: string | number
          first_air_date: string | number
          vote_count: string | number
        }
      ]
    }
  }
}

const Boxes = ({ BoxesData }: propsType) => {
  
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4">
      {BoxesData?.data.results &&
        BoxesData.data.results.map((item) => (
          <div key={item.id}>
            <Card cardData={item} />
          </div>
        ))}
    </div>
  )
}

export default Boxes
