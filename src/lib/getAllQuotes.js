export default async function getAllQuotes() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const res = await fetch('https://zenquotes.io/api/quotes')
    if(!res.ok) throw new Error("cant fetch data")
  return res.json()
}
