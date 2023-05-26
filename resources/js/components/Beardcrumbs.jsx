/**
 * @param {Object} props
 * @param {string[]} props.items
 * 
 * @component
 * @example
 * const items = ['home', 'course', 'material']
 * return (
 *   <Beardcrumbs items={items}>
 * )
 */
export default function Beardcrumbs({ items }) {
  return (
    <ul className="beardcrumbs">
      {items.map(item => 
        <li>{ item }</li>
      )}
    </ul>
  )
}