import MaterialListItem from "./MaterialListItem"

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
export default function MaterialList({ materials }) {
  return (
    <ol>
      {materials.map(material =>
        <MaterialListItem title={material.title} done={material.done} key={material.title} />
      )}
    </ol>
  )
}