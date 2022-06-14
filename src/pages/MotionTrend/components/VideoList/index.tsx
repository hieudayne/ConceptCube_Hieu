import axios from 'axios';
import React from 'react';
import Card from '../../../../components/Card';
import './style.css';
import data from "../../data.json"
function VideoList() {

    const [movies, setMovies] = React.useState<any>([]);

    React.useEffect(() => {
        setMovies(data.data.movies)
    }, [])

    console.log("movies: ", movies)

    return (
        <section className='video-list containerPage'>
            <div className="video-list-header">
                <div className="tabs">
                    <p className='tab-item  active'>Motion trend pick</p>
                    <p className='tab-item'>Lastest</p>
                    <p className='tab-item'>Recommended</p>
                </div>
                <p className='selection-criteria'>Selection criteria</p>
            </div>
            <div className="tab-panel">
                {movies.length > 0 && movies.map((movie: any) => {
                    return (
                        <Card key={movie.id} title={movie.title} background_image={movie.background_image} />
                    )
                })}
            </div>
        </section>
    );
}

export default VideoList;