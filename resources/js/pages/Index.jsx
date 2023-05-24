import NavBar from '../components/NavBar';

export default function index({ courses }) {
  return (
    <div>
      <NavBar />
      <pre className='bg-black text-white'>courses: { JSON.stringify(courses, null, 4) }</pre>
    </div>
  )
}