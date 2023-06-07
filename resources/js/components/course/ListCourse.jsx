import MaterialList from '../material-list/MaterialList'
import { Link } from '@inertiajs/react';

const ListCourse = ({ materials, title, description, courseId }) => {
    let isFinish = materials.map(material=> material.isFinished);
    
    return (
        <div className="mx-24 mt-2 mb-16">
            {/* <MaterialList materials={materials} courseId={courseId} /> */}
            <div className="p-10 border border-primary flex flex-col">
            {!isFinish.includes(false) && (
            <div className="isFinished flex items-center text-primary gap-2 self-end">
                <p>Completed</p>
                <i class="fa-solid fa-check"></i>
            </div>)}
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                <p>{description}</p>
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