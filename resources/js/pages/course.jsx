export default function course({ course }) {
  return (
    <div>
      <pre>course: { JSON.stringify(course, null, 4) }</pre>
    </div>
  )
}
