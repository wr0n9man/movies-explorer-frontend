import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css'

export default function MoviesCardList(){
   return(
      <div className="moviesCardList">
         <div className="moviesCardList__grid">
            <Preloader/> 
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard saved={true} name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>
            <MoviesCard name="В погоне за Бенкси" time="27" image="https://artsy-media-uploads.s3.amazonaws.com/nyY47aqbm93eLlWUrdbdCA%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o.jpg"/>

         </div>
         <button className="moviesCardList__button">Ещё</button>
      </div>
   )
}