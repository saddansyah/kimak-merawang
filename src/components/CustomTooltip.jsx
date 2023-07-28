import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} placement='top'/>
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.5)',
        boxShadow: theme.shadows[1],
        fontSize: 12,
    },
}));

const CustomTooltip = ({ children, title }) => {
    return (
        <>
            <LightTooltip title={title}>
                {children}
            </LightTooltip>
        </>);
}

export default CustomTooltip;