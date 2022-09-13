import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '../../models/models';

const ButtonMain: React.FC<ButtonProps> = ({ dataLoad }) => {
    return (
        <SButton 
            variant="outlined"
            size="large"
            onClick={dataLoad}
        >Click</SButton>
    )
}

const SButton = styled(Button)({
    color: '#6b13e1',
    border: '4px solid #6b13e1',
    borderRadius: '1rem',
    fontSize: '3rem',
    '&:hover': {
        backgroundColor: '#6b13e1',
        border: '4px solid #6b13e1',
        color: '#fff',
    }
})

export default ButtonMain