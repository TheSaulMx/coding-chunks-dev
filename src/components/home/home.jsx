import './style.css'

function Home() {
    return (
        <div className='container'>
            <section className='main-content'>
                <div className="posts-card">
                    <h2>Last posts</h2>
                    <div className='post-card'>
                        <h3>Post 1</h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur voluptate nisi magni voluptatibus at quos vero laborum debitis doloribus aperiam maiores facere quisquam, sint sapiente perferendis eveniet adipisci natus!</p>
                    </div>
                    <div className='post-card'>
                        <h3>Post 2</h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur voluptate nisi magni voluptatibus at quos vero laborum debitis doloribus aperiam maiores facere quisquam, sint sapiente perferendis eveniet adipisci natus!</p>
                    </div>
                    <div className='post-card'>
                        <h3>Post 3</h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur voluptate nisi magni voluptatibus at quos vero laborum debitis doloribus aperiam maiores facere quisquam, sint sapiente perferendis eveniet adipisci natus!</p>
                    </div>
                    <div className='post-card'>
                        <h3>Post 4</h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur voluptate nisi magni voluptatibus at quos vero laborum debitis doloribus aperiam maiores facere quisquam, sint sapiente perferendis eveniet adipisci natus!</p>
                    </div>
                    <div className='post-card'>
                        <h3>Post 5</h3>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur voluptate nisi magni voluptatibus at quos vero laborum debitis doloribus aperiam maiores facere quisquam, sint sapiente perferendis eveniet adipisci natus!</p>
                    </div>
                </div>
            </section>
            <aside className='aside-content'>
                <p>Aside content</p>
            </aside>
        </div>
    );
}

export default Home;