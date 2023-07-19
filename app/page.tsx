import { MongoClient } from "mongodb"
import { connectDB } from "@/util/database"

export default async function Home() {
  const client = await connectDB;
  const db = client.db("jctalk")
  let result = await db.collection('post').find().toArray()
  console.log(result)
  
  return (
   <div>hi</div>
  )
}
