export default function Signup(){
    return (
        <form onSubmit={e => {
            //e.preventDeault : 태그 고유의 동작을 중단.
            // e.stopPropagation() : 상위 엘리먼트들로의 이벤트 전파 중단.
            e.preventDefault(); 
            alert('Submitting!')
        }}>
            <input/>
            <button>Send</button>
        </form>
    )
}