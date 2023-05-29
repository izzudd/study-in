import MaterialListItem from "./MaterialListItem"
import { Link } from "@inertiajs/react"

/**
 * @param {Object} props
 * @param {Object[]} props.materials
 * @param {string} props.materials[].title
 * @param {boolean} props.materials[].done
 * 
 * @component
 * @example
 * const materials = [
 *   { title: 'material one', done: false },
 *   { title: 'material two', done: false }
 * ]
 * return (
 *   <MaterialList materials={materials}>
 * )
 */
export default function MaterialList({ materials, courseId }) {
  return (
    <ol>
      {materials.map(material =>
        <Link href={`/course/${courseId}/${material.id}`} key={material.id}>
          <MaterialListItem title={material.title} done={material.isFinished} />
        </Link>
      )}
    </ol>
  )
}