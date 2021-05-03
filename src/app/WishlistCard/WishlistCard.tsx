import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Time from '@material-ui/icons/AccessTime';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        borderRadius: 20,
        width: 300,
        height: '180px',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'transform .3s ease-in-out, box-shadow .3s ease',
        background: '#ffffff',
        alignSelf: 'center',
        '&:hover': {
            boxShadow: '0 3px 17px rgb(0 0 0 / 25%)',
            transform: 'scale(1.03)',
        },
    },
});

function Wishlistcard(): JSX.Element {
    const classes = useStyles();
    return (
        <Card className={`${classes.root} card`}>
            <div className="card-top">
                <h1>Someone&apos;s birthday</h1>
                <div className="card-time">
                    <Time />
                    <h2>2021/05/01, 12:30 PM</h2>
                </div>
            </div>
            <div className="button-container">
                <button className="card-btn primary-btn">Add</button>
                <button className="card-btn grey-btn">Edit</button>
            </div>
            <i className="card-delete-btn">
                <Close />
            </i>
        </Card>
    );
}
export default Wishlistcard;
