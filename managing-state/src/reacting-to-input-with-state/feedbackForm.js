import { useState } from "react";

export default function FeedbackForm(){
    const [text, setText] = useState('');
    // const [isSending, setIsSending] = useState(false);
    // const [isSent, setIsSent] = useState(false);
    const [status, setStatus] = useState('typing');

    async function handleSubmit(e){
        e.preventDefault(); // 고유 함수 실행 중단
        // setIsSending(true);
        setStatus('sending');
        await sendMessage(text);
        // setIsSending(false);
        // setIsSent(true);
        setStatus('sent')
    }

    if(status === 'sent'){
        return <h1>Thanks for feedback!</h1>
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>How was your stay at the ..?</p>
            <textarea
                onChange = {e=> setText(e.target.value)}

            />
            <button
                disabled = {status === 'sending'}
                type="submit"
            >Send</button>
            {status === 'sending' && <p>Sending...</p>}
        </form>
    )

    function sendMessage(text){
        return new Promise(resolve =>{
            setTimeout(resolve, 1000);
        });
    }
}