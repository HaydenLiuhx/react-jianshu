import React, { Component } from 'react'
import { WriterWrapper, WriterItem } from '../style'
class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterItem>
                    This is Writer Section.
                </WriterItem>
            </WriterWrapper>
        )
    }
}
export default Writer;