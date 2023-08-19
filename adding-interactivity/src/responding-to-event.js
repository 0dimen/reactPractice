function Button({onClick, children}){
    return(
        <button onClick = {onClick}>
            {children}
        </button>
    )
}

function ToolBar({onPlayMovie, onUploadImage}){
    // function handleClick(){
    //     alert('You cliked me');
    // }

    return(
        // onClick = {alert()} 는 rendering할 때에만 실행됨. 클릭하기 전에 이미 실행을 마침.
        // inline으로 onClick을 올바르게 사용하려면, onClick = {() => function()}
        
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

export default function App(){
    return(
        <ToolBar
            onPlayMovie = {()=> alert('Playing!')}
            onUploadImage = {() => alert('Uploading!')}
        />
    );
}