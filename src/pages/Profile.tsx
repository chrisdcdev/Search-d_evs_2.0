import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store';
export default function Profile() {
    const code = useSelector((state: AppState) => {
        return state.teste;
      });
    
      console.log(code);
    useEffect(() => {
    }, [])  
    return (
        <div></div>
    )
}
