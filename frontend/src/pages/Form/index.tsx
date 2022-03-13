import FormCard from 'components/FormCard';
import {useParams } from 'react-router-dom';

function Form() {
    
    //Pega o parâmetro definito da requisição
    const param = useParams();

    return (
        <FormCard movieId={`${param.movieId}`}/>
    )
}

export default Form;
