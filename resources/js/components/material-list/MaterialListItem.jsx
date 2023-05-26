/**
 * @param {Object} props
 * @param {string} props.title
 * @param {boolean} props.done
 * 
 * @component
 * @example
 * const title = 'material 1'
 * const done = false
 * return (
 *   <MaterialListItem title={title} done={done} />
 * )
 */
export default function MaterialListItem({ title, done }) {
  return (
    <li className="mb-2 flex gap-4">
      <span className="w-5 h-5 p-[2px] border border-primary inline-block rounded-full shrink-0">
        {done && <div className="w-full h-full bg-primary rounded-full"></div>}
      </span>{title}
    </li>
  )
}