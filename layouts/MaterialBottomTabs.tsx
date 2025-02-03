import MaterialTopTabs from "./MaterialTopTabs"

type PropType = {
    [x: string]: any
}

const MaterialBottomTabs = (props: PropType) => {
    return <MaterialTopTabs tabBarPosition="bottom" {...props}>{props.children}</MaterialTopTabs>
}

export default MaterialBottomTabs