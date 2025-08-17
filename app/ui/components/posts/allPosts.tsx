import { posts } from '@/app/lib/placeholder-data';

export default function allPosts() {
    return (
        <div className='bg-purple-600'>
            <h1 id='allPosts' className='text-center'>All Posts</h1>
            {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 p-4 my-4">
                    <h2>{post.title}</h2>
                    <p >{post.date}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div >)
}





