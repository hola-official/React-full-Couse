import { getPostsPage } from './api/axios'
import { useState, useEffect } from 'react'
import { FcPrevious, FcNext } from "react-icons/fc";
import Post from './Post'

const Example1 = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])

    useEffect(() => {

        getPostsPage(page).then(json => setPosts(json))

    }, [page])

    const content = posts.map(post => <Post key={post.id} post={post} />)

    const nextPage = () => setPage(prev => prev + 1)

    const prevPage = () => setPage(prev => prev - 1)

    return (
        <>
            <nav>
                <button onClick={prevPage} disabled={page === 1}><FcPrevious /></button>
                <button onClick={nextPage} disabled={!posts.length}><FcNext /></button>
            </nav>
            {content}
        </>
    )
}
export default Example1