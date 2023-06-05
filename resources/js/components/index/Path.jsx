import Card from "./Card"

const Path = ({ courses }) => {
    return (
        <div className="container mx-auto bg-background text-on-background py-10 px-24">
            <h1 className="text-4xl font-bold">Daftar Learning Path</h1>
            <div className="card-container mt-10 grid md:grid-cols-4 gap-6 sm:grid-cols-1 items-center">
                {courses.map(course => <Card key={course.id} course={course}/>)}
            </div>
        </div>
    );
}
 
export default Path
