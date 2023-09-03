import {useState} from 'react';

export default function FirstForm(){
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus]  =useState('typing');

    if(status === 'success'){
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault(); // 고유 함수 실행 중단
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        }catch(err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                problem......
            </p>
            <form>
                <textarea 
                    className = 'textarea'
                    onChange = {handleTextareaChange}
                    disabled={status === 'submitting'} 
                    />
                <br/>
                <button disabled={
                    status === 'empty' || 
                    status === 'submitting'}>
                    Submit
                </button>
                {error!= null && 
                <p className = 'Error'>{error.message}</p>}
            </form>
        </>
    );
}

function submitForm(answer){
    return new Promise((resolve, reject) => { // 비동기 처리(특정 코드의 실행이 완료될때까지 기다리지 않고 다음 코드를 먼저 수행)
        setTimeout(() =>{
            let shouldError = answer.toLowerCase() !== 'lima'
            if(shouldError){
                reject(new Error('Good guess but a wrong answer.'));
            }else{
                resolve();
            }
        }, 1500);
    });
}