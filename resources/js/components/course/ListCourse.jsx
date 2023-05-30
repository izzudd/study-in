import MaterialList from '../material-list/MaterialList'
import { Link } from '@inertiajs/react';

const ListCourse = ({ materials, courseId }) => {
    console.log(materials)
    let isFinish = materials.map(material=> material.isFinished);
    console.log(isFinish)
    return (
        <div className="mx-24 mt-2 mb-16">
            {/* <MaterialList materials={materials} courseId={courseId} /> */}
            <div className="p-10 border border-primary flex flex-col">
            {!isFinish.includes(false) && (
            <div className="isFinished flex items-center text-primary gap-2 self-end">
                <p>Completed</p>
                <i class="fa-solid fa-check"></i>
            </div>)}
                <h1 className="text-3xl font-bold mb-6">C++ Function</h1>
                <p>A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times.</p>
            </div>
            <hr />
            <div className="p-6 border border-primary flex justify-end">
                <Link className="btn-primary flex items-center gap-3" href={`/material/${courseId}?page=${1}`}>
                    <p>Go to the courses</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}
 
export default ListCourse;