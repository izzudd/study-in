import Card from "./Card"

const Path = () => {
    const card = [1,2,3,4,5,6,7,8]
    return (
        <div className="container mx-auto bg-background text-on-background py-10 px-24">
            <h1 className="text-4xl font-bold">Daftar Learning Path</h1>
            <div className="card-container mt-10 grid grid-cols-4">
                {card.map(item => <Card key={item}/>)}
            </div>
        </div>
    );
}
 
export default Path
