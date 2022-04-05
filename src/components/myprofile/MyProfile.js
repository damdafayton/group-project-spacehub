import { useSelector } from "react-redux"

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets)

  return (
    <section className="mx-5">
      <h2>My Rockets</h2>
      <ul className="list-group">
      </ul>
    </section>
  )
}