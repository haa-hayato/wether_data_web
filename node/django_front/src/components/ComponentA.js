import { useNavigate } from "react-router-dom"
import {useEffect} from "react"

function ComponentA() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/result')//ページが読み込まれ次第直ぐに/resultに遷移
    },[]);
    
    return (
        <p>読み込み中</p>
    )
}

export default ComponentA