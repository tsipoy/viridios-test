import React, { useEffect, useState } from 'react';
import mdfile from "./documentation.md";
import Markdown from 'react-markdown-it';

export const Page1 = () => {
    const [mdSource, setMdSource] = useState("")

    useEffect(() => {
        fetch(mdfile).then((response) => response.text()).then((text) => {
            setMdSource(text)
        })
    }, [])


    return (
        <div>
            <Markdown children={mdSource} />
        </div>
    );
}