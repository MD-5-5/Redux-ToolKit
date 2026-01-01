import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {

  return (
    <div className='h-screen w-full bg-gray-200'>
       <button className="bg-amber-300 px-5 py-3 m-3" onClick={async ()=>{
          const data = await fetchPhotos('cat')

          console.log(data)
       }}
       >Get Photos</button>
       <button  className="bg-amber-300 px-5 py-3 m-3" onClick={async ()=>{
          const data = await fetchVideos('cat')

         console.log(data) 
       }}
       >Get Videos</button>
       <button  className="bg-amber-300 px-5 py-3 m-3" onClick={async ()=>{
          const data = await fetchGIF('cat')

         console.log(data) 
       }}
       >Get GIF</button>

    </div>
  )
}

export default App
