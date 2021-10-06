import React, { useEffect, useState } from 'react'

export default function Darafetching() {
    const [post, setpost] = useState({})
    const [id, setid] = useState()

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(respones => respones.json())
                .then(data => setpost(data))
        }
        ,[id])
    console.log(post)
    console.log(id)
    return (
        <div>

            <input value={id} onChange={(e) => { setid(e.target.value) }}></input>
            <p>{post.title}</p>
             {/* {post.map((datas) => {
                return (<div key={datas.id} >

                    <li >
                        {datas.title}
                    </li>
                </div>)
            })} */}
        </div>
    )
}
