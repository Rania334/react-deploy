import BlogList from './BlogList'
import { useEffect, useState } from 'react'

const Home = () => {
    const[blogs, setBlogs]=useState([
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'Welcome party!',body:'lorem ipsum...',author:'yoshi',id:2},
        {title:'web dev top timps',body:'lorem ipsum...',author:'mario',id:3},
    ]);
    const [name,setName] = useState('mario');
    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('use effect')

    },[name]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={()=>setName('Rania')}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home

