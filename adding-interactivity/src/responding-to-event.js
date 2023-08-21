function Button({onClick, children}){
    return(
        <button onClick = {e=> {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

// function PlayButton({movieName}){
//     function handlePlayClick(){
//         alert('Playing ' +movieName);
//     }

//     return (
//         <Button onClick = {handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }

// function UploadButton(){
//     return(
//         <Button onClick={() => alert('uploading!')}>
//             Upload Button
//         </Button>
//     );
// }

export default function ToolBar({onPlayMovie, onUploadImage}){
    // function handleClick(){
    //     alert('You cliked me');
    // }

    return(
        // onClick = {alert()} 는 rendering할 때에만 실행됨. 클릭하기 전에 이미 실행을 마침.
        // inline으로 onClick을 올바르게 사용하려면, onClick = {() => function()}
        
        <div className = "Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }} >
            <Button onClick={()=> alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}
