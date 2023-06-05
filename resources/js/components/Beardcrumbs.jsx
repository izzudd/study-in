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
    <ul className="beardcrumbs relative z-10 px-14">
      {items.map(item => 
        <li key={item}>{ item }</li>
      )}
    </ul>
  )
}