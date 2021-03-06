import {Box, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";


const Footer = () => {
    return (
        <Box mt='48px' mb='36px' textAlign='center'>
            <Link href="#"  color='secondary' target="_blank" rel="noopener">
                <GitHubIcon />
            </Link>
        </Box>
    );
};

export default Footer;
