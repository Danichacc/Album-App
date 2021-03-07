import CircularProgress from '@material-ui/core/CircularProgress';

export function Preloader() {
    return (
        <CircularProgress style={{ position: 'absolute', top: 'calc(50% - 20px)', left: 'calc(50% - 20px)' }} />
    );
}
