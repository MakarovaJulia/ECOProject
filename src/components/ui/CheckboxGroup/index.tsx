import {Children, cloneElement, FC, useEffect, useState} from "react";
import {Checkbox} from "../Checkbox";

interface Props{
    multiple?: boolean;
    onChange?: (values: Array<unknown>) => void;
    isShowSelectAll?: boolean
}

export const CheckboxGroup: FC<Props> = ({children, multiple = true,
isShowSelectAll = false}) =>{

    const [checked, setChecked] = useState<Array<string>>([])

    useEffect(() =>{
        console.log(children);
    }, [])

    const onCheckboxChange = (x: string) => {
        setChecked([...checked, x]);
    }

    const newChildren = Children.map(children, (child: any) =>
        cloneElement(child, {
            key: child.props.value,
            onChange: (x) => {
                console.log(x)
            }
        }),
    );

    return(
        <>
            {isShowSelectAll && (
                <Checkbox {...props}>Показать все</Checkbox>
            )}
            {newChildren}
        </>
    )
}