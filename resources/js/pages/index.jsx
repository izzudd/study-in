export default function index({ courses }) {
  return (
    <div>
      <pre>courses: { JSON.stringify(courses, null, 4) }</pre>
    </div>
  )
}