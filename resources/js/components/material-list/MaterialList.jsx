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
      {materials.map((material, i) =>
        <Link href={`/material/${courseId}?page=${i+1}`} key={material.id}>
          <MaterialListItem title={material.title} done={material.isFinished} />
        </Link>
      )}
    </ol>
  )
}