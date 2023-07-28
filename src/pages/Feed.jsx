import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { api, apiKey } from "../config"
import MovieCard from "../components/MovieCard"
import { useParams } from "react-router-dom"
import ReactPaginate from 'react-paginate';

export const Feed = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${api}/movie/${slug}?api_key=${apiKey}&language=en-US&page=${currentPage}`
                )
                const data_json = await response.json();
                if (data_json) {
                    console.log(data_json)
                    setData(data_json)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [slug, currentPage])

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <Header />
            <main className="container my-5">
                <div className="d-flex justify-content-center flex-wrap gap-5">
                    {data?.results?.map((movie, index) => {
                        return (
                            <MovieCard
                                key={index}
                                id={movie.id}
                                title={movie.title}
                                path={movie.poster_path}
                                rating={movie.vote_average}
                            />
                        )
                    })}
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        breakLabel="..."
                        pageCount={data.total_pages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName="pagination-container"
                        pageClassName="pagination-item"
                        breakClassName="pagination-item pagination-break"
                        previousClassName="pagination-item pagination-previous"
                        nextClassName="pagination-item pagination-next"
                        activeClassName="active"
                    />
                </div>
            </main>
        </>
    )
}
