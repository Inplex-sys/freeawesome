import { Component } from 'react'

type Props = {
    type: "solid" | "regular" | "light" | "brands" | "thin" | "duotone",
    icon: string,
    size?: string,
    className?: string
}

export default class Icon extends Component<Props> {
    render(): React.ReactNode {
        const type: string = "fa-" + this.props.type + " ";
        const icon: string = "fa-" + this.props.icon;
        const size: string = (this.props.size) ? " " + "fa-" + this.props.size : ""
        const className: string = (this.props.className) ? " " + this.props.className : ""

        return (
            <i className={type + icon + size + className}></i>
        )
    }
}
