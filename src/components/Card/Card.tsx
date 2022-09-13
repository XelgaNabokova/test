import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { IData } from '../../models/models';

interface CardMainProps {
    data: IData;
}

const CardMain: React.FC<CardMainProps> = ({ data }) => {

    return (
        <SCard sx={{ maxWidth: 600 }}>
            <CardHeader
                title={
                    <Typography gutterBottom variant="h5" component="div">
                        { data.title }
                    </Typography>
                }
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    { data.text }
                </Typography>
                { data.stack && data.stack.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </CardContent>
            <CardActions>
                <SLink 
                    href="https://hh.ru/applicant/resumes/view?resume=2d799c6dff0737c7b00039ed1f474c4c617763" 
                    underline="none"
                >Learn More</SLink>
            </CardActions>
        </SCard>
    )
}

const SCard = styled(Card)({
    color: '#6b13e1',
    border: '4px solid #6b13e1',
    borderRadius: '1rem',
})

const SLink = styled(Link)({
    padding: '0.2rem 1rem',
    border: '4px solid #6b13e1',
    borderRadius: '0.5rem',
    color: '#6b13e1',
    margin: '0 auto',
    '&:hover': {
        backgroundColor: '#6b13e1',
        color: '#fff',
    }
})



export default CardMain;