import { connectDB } from "@/util/database"
import Link from "next/link"
import { ObjectId } from "mongodb"


export default async function List() {
  const db = (await connectDB).db("jctalk")
  let result = await db.collection('post').find().toArray()
  

  return (
    <div className="list-bg">
      {result.map((post, index) => (
        <div className="list-item" key={index}>
          <Link href={`/detail/${result[index]._id}`}>{post.title}</Link>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  )
}
