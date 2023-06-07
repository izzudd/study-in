import { Link } from "@inertiajs/react"

export default function Beardcrumbs({ items }) {
  return (
    <ul className="beardcrumbs relative z-10 px-14">
      {items.map(item => 
        <li key={item.link}>
          {typeof item === 'object' ? <Link href={item.link}>{ item.title }</Link> : item }
        </li>
      )}
    </ul>
  )
}