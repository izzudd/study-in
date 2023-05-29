import MaterialList from '../material-list/MaterialList'

const ListCourse = ({ materials, courseId }) => {
    return (
        <div className="mx-24 ">
            <MaterialList materials={materials} courseId={courseId} />
            {/* <div className="p-10 border border-primary flex flex-col gap-6">
                <h1 className="text-3xl font-bold">C++ Function</h1>
                <p>A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times.</p>
            </div>
            <hr />
            <div className="p-6 border border-primary ">
                <p>Collapse Course</p>
            </div> */}
        </div>
    );
}
 
export default ListCourse;