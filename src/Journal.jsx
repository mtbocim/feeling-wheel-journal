import Entries from "./Entries";

function Journal ({entries, loadEntry}){
    //Entries list
    //Entry title
    //Journal box
    //
    
    return(
        <div className='Journal-container'>
            <Entries entries={entries} loadEntry={loadEntry} />
        </div>
    )
}

export default Journal;