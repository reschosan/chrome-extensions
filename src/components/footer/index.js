import { Typography } from '@material-ui/core';
import './footer.css';

function Footer({ createdText, linkCreated, createdtitle, linkFrom, fromTitle }) {

    return (
        <div className={'logo-link'}>
            <Typography variant="h6" gutterBottom>Source Image:</Typography>
            <div >{createdText} <a href={linkCreated} target={'_blank'} rel={'noReferrer'} title={createdtitle}>{createdtitle}</a> from <a href={linkFrom} target={'_blank'} rel={'noReferrer'} title={fromTitle}>{linkFrom}</a></div>
        </div>
    );
}

export default Footer;