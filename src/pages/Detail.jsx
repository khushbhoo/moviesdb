import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { api, apiKey } from "../config"
import { useParams } from "react-router-dom"
import Cast from "../components/Cast"

export const Detail = () => {
    const [data, setData] = useState([])
    const [casts, setCasts] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}/movie/${slug}?api_key=${apiKey}&language=en-US`)
                const response_json = await response.json();
                if (response_json) {
                    setData(response_json)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [slug])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}/movie/${slug}/credits?api_key=${apiKey}&language=en-US`)
                const response_json = await response.json();
                if (response_json) {
                    setCasts(response_json)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [slug])

    return (
        <>
            <Header />
            <main className="container my-5">
                <div className="info-container position-relative">
                    <div className="movie-banner" style={{ height: '400px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
                            alt={data?.title}
                            height="100%"
                            width="100%"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div
                        className="movie-info position-absolute text-light d-flex gap-4"
                        style={{ top: '20px', left: '20px' }}
                    >
                        <img
                            height="300px"
                            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                        />
                        <div className="d-flex flex-column gap-3">
                            <h3>{data?.title}</h3>
                            <h4>Rating: {data?.vote_average}</h4>
                            <div className="d-flex gap-4">
                                <p>{data?.runtime}</p>
                                <div className="d-flex gap-2">
                                    {data?.genres?.map((genre) => {
                                        return <p key={genre.id}>{genre.name},</p>
                                    })}
                                </div>
                            </div>
                            <div className="overview" style={{ width: "60%" }}>
                                <h3>Overview</h3>
                                <p>{data?.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cast mt-5 text-white">
                    <h2>Cast</h2>
                    <div className="d-flex flex-wrap gap-5 my-3 justify-content-center " style={{ width: "100%" }}>
                        {casts?.cast?.map((cast, index) => {
                            return (
                                <Cast
                                    key={index}
                                    name={cast.name}
                                    image={cast.profile_path}
                                    character={cast.original_name}
                                />
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
