import './input.css'

const input = ({text, result})=>{
    return <div className="input">

        <div className="result">
            <h1>{result}</h1>
        </div>
        <div className='text'>
            <h3>{text}</h3>
        </div>

    </div>
}

export default input;