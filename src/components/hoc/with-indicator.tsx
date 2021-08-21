import {FC} from "react";

interface IndicatorProps {
    loading: boolean,
    error: string,
}

//TODO FC is correct? change props
const withIndicator = (Loader: FC, Error: FC) => (Wrapped: FC<any>) => {
    return (props: any) => {
        return (
            props.error ? <Error/>
                : props.loading ? <Loader/>
                : <Wrapped {...props}/>
        )
    }
}

export default withIndicator;
