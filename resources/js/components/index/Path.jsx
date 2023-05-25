import Card from "./Card"

const Path = () => {
    return (
        <div className="container mx-auto bg-background text-on-background py-10 px-24">
            <h1 className="text-4xl font-bold">Daftar Learning Path</h1>
            <div className="card-container mt-10 grid grid-cols-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}
 
export default Path
